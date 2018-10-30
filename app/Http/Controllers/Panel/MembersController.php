<?php

namespace App\Http\Controllers\Panel;

use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Hekmatinasser\Verta\Facades\Verta;
use Carbon\Carbon;
use App\Http\Requests\StoreMember;

class MembersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $members = Member::paginate(20);
        return view('panel.members.index', compact('members'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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

        dump('fasdf');
        if (!$this->saveMember($request)) {
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
        // return $member;
        // dd($request->file('picture'));
        $status = $this->saveMember($request,'UPDATE',$member);

        if(!$status)
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
        $member->delete();
        alert()->success('حذف شد !', 'همیار شما با موفقیت حذف گردید');
        return redirect()->route('members.index');
    }


    public function showCards()
    {
       return view('panel.members.show-cards');
    }

    /**
     * @return boolval
     * @param Request $request
     * 
     * Save Member data on database :)
     */

    public function saveMember(StoreMember $request, $action = 'SAVE',Member $member)
    {
        $member->name = $request->name;
        $member->familyname = $request->familyname;
        $member->birthdate = Carbon::now()->timestamp($request->birthdate);
        $member->nationalcode = $request->nationalcode;
        $member->issuinglocal = $request->issuinglocal;
        $member->identitinumber = $request->identitinumber;
        $member->fathername = $request->fathername;
        $member->address = $request->address;
        $member->phonenumber = $request->phonenumber;
        $member->education = $request->education;
        $member->job = $request->job;
        $member->issuingdate = Carbon::now()->timestamp($request->issuingdate);
        $member->typemember = $request->typemember;
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
}
