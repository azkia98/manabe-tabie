<?php

namespace App\Http\Controllers\Panel;

use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Hekmatinasser\Verta\Facades\Verta;
use Carbon\Carbon;
use App\Http\Requests\StoreMember;
use App\User;
use Maatwebsite\Excel\Facades\Excel;
use App\Option;
use Illuminate\Support\Facades\Gate;
use App\State;

class MembersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // auth()->loginUsingId(1);


        $search = $request->search;
        $members = Member::with('city');
        if ($search) {
            $members
                ->Where('familyname', 'like', "%$search%")
                ->orWhere('name', 'like', "%$search%")
                ->orWhere('nationalcode', 'like', "%$search%")
                ->orWhere('issuinglocal', 'like', "%$search%")
                ->orWhere('identitinumber', 'like', "%$search%")
                ->orWhere('fathername', 'like', "%$search%")
                ->orWhere('address', 'like', "%$search%")
                ->orWhere('phonenumber', 'like', "%$search%")
                ->orWhere('job', 'like', "%$search%")
                ->orWhere('village', 'like', "%$search%");
        }

        if ($request->types) {
            // return $request->types;
            $members->whereIn('typemember', $request->types);
        }

        if ($request->city) {
            $members->whereCity_id((int)$request->city);
        }
        
        // dd((int)$request->state);

        if ($request->state) {
            $members->whereState_id((int)$request->state);
        }




        if (!auth()->user()->isSuperAdmin()) {
            if (auth()->user()->administration) {
                $members->where('state_submited', auth()->user()->state_id);
            }else{
                $members->where('user_id', auth()->user()->id);
            }


        }

        $members = $members->paginate(20);

        // $this->denied('members-index');
        return view('panel.members.index', compact('members'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->denied('members-create');
        return view('panel.members.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMember $request)
    {


        $this->denied('members-create');
        if (!$this->saveMember($request, 'SAVE', new Member())) {
            alert()->error('فایل شما با موفقیت ذخیره نشد!', 'یه مشکلی به وجود آمده!!!');
            return redirect()->back();
        }

        alert()->success('همیار شماثب شد!!', 'همیار شما با موفقیت ثبت شد');
        return redirect()->route('members.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
        $this->denied('members-show');
        return view('panel.members.show', compact('member'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function edit(Member $member)
    {
        $this->denied('members-edit');
        if (Gate::denies('update', $member)) {
            abort(403, 'این همیار را شما نساخته اید');
        }

        return view('panel.members.edit', compact('member'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(StoreMember $request, Member $member)
    {
        $this->denied('members-update');
        // return $member;
        // dd($request->file('picture'));
        $status = $this->saveMember($request, 'UPDATE', $member);

        if (!$status)
            alert()->error('مشکلی در تغییر دادن همیار به وجود آمده!');

        alert()->success('اطلاعات همیار شما با موفقیت تغییر کرد !');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy(Member $member)
    {
        $this->denied('members-delete');

        if (Gate::denies('delete', $member))
            abort('شما نمیتوانید این همیار را پاک کنید!!');

        $member->delete();
        alert()->success('حذف شد !', 'همیار شما با موفقیت حذف گردید');
        return redirect()->route('members.index');
    }

    /**
     * Show all of the members in card view :)
     */

    public function showCards()
    {
        $this->denied('cards');
        $members = Member::with(['state', 'city'])->get();
        $fax = Option::GVWK('fax');
        $expiryDate = Option::GVWK('expiry-date');
        $localPhone = Option::GVWK('local-phone');
        return view('panel.members.show-cards', compact('members', 'fax', 'expiryDate', 'localPhone'));
    }

    /**
     * Show Card Information
     * @return \Illuminate\Http\Response
     */

    public function showCard(Member $member)
    {
        $this->denied('cards');
        $fax = Option::GVWK('fax');
        $expiryDate = Option::GVWK('expiry-date');
        $localPhone = Option::GVWK('local-phone');
        return view('panel.members.show-card', compact('member', 'fax', 'expiryDate', 'localPhone'));
    }


    /**
     * @return boolval
     * @param Request $request
     * 
     * Save Member data on database :)
     * if you want to save data set SAVE on second parameter 
     * if you want to update you data use UPDADE  on second parameter 
     */

    public function saveMember(StoreMember $request, $action = 'SAVE', Member $member)
    {

        $member->name = $request->name;
        $member->familyname = $request->familyname;
        $member->birthdate = Carbon::now()->timestamp($request->birthdate / 1000);
        $member->nationalcode = $request->nationalcode;
        $member->issuinglocal = $request->issuinglocal;
        $member->identitinumber = $request->identitinumber;
        $member->fathername = $request->fathername;
        $member->address = $request->address;
        $member->phonenumber = $request->phonenumber;
        $member->education = $request->education;
        $member->job = $request->job;
        $member->issuingdate = Carbon::now()->timestamp($request->issuingdate / 1000);
        $member->typemember = $request->typemember;
        $member->city_id = $request->city;
        $member->state_id = $request->state;
        $member->village = $request->village;
        $member->user_id = auth()->user()->id;
        $member->state_submited = auth()->user()->state_id;
        if ($request->file('picture')) {
            $path = $request->file('picture')->store('pictures', 'public');
            $member->picture = 'storage/' . $path;
        }
        switch ($action) {
            case 'SAVE':
                $member->save();
                break;
            case 'UPDATE':
                $member->update();
                break;
            default:
                break;
        }


        return true;
    }


    public function showSpecificMembersCards(Request $request)
    {
        $IDs = explode(',', $request->Ids);
        $members = Member::with('city', 'state')->findMany($IDs);
        $fax = Option::GVWK('fax');
        $expiryDate = Option::GVWK('expiry-date');
        $localPhone = Option::GVWK('local-phone');
        return view('panel.members.show-cards', compact('members', 'fax', 'expiryDate', 'localPhone'));
    }

}
