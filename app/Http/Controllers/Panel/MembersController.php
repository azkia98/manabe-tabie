<?php

namespace App\Http\Controllers\Panel;

use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Hekmatinasser\Verta\Facades\Verta;
use Carbon\Carbon;

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
    public function store(Request $request)
    {
        if(!$this->saveMember($request))
        {
            alert()->error('فایل شما با موفقیت ذخیره نشد!','یه مشکلی به وجود آمده!!!');
            return redirect()->back();
        }

        alert()->success('همیار شماثب شد!!','همیار شما با موفقیت ثبت شد');
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Member $member)
    {
        //
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

    /**
     * @return boolval
     * @param Request $request
     */

    public function saveMember(Request $request)
    {
        $member = new Member();
        $member->name = $request->name;
        $member->familyname = $request->familyname;
        $member->birthdate = Carbon::now()->timestamp($request->birthdate);
        $member->nationalcode = $request->nationalcode;
        $member->issuinglocal = $request->issuinglocal;
        $member->identitinumber = $request->identitinumber;
        $member->identitinumber = $request->identitinumber;
        $member->fathername = $request->fathername;
        $member->address = $request->address;
        $member->phonenumber = $request->phonenumber;
        $member->education = $request->education;
        $member->job = $request->job;
        $member->issuingdate = Carbon::now()->timestamp($request->issuingdate);
        $member->typemember = $request->typemember;
        $path = $request->file('picture')->store('pictures', 'public');
        $member->picture = $path;
        $member->save();
        return true;
    }
}
