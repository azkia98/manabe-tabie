<?php

namespace App\Http\Controllers\Panel;

use App\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Hekmatinasser\Verta\Facades\Verta;
use Carbon\Carbon;
use App\Http\Requests\StoreMember;
use Maatwebsite\Excel\Facades\Excel;
use App\User;
use Illuminate\Support\Facades\DB;

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

        if (!$this->saveMember($request,'SAVE',new Member())) {
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
        $member->delete();
        alert()->success('حذف شد !', 'همیار شما با موفقیت حذف گردید');
        return redirect()->route('members.index');
    }

    /**
     * Show all of the members in card view :)
     */

    public function showCards()
    {
        return view('panel.members.show-cards');
    }

    /**
     * Export all of the members data in excel format
     */

    public function exportExcelAllMembers()
    {
        // $members = Member::select("concat(name, ' ' , familyname) as نام و نام‌خانوادگی", 'nationalcode as کد ملی', 'issuinglocal as محل صدور', 'identitinumber as کد ملی', 'fathername as نام پدر', 'address as آدرس', 'phonenumber as تلفن همراه', 'education', 'job as شغل', 'issuingdate', 'typemember')->get();
        $members = Member::select([
            DB::raw("CONCAT(name, ' ' , familyname) AS 'نام و نام خانوادگی'"),
            'birthdate',
            'identitinumber as شماره شناسمه',
            'issuinglocal as محل صدور',
            'nationalcode as کد ملی',
            'fathername as نام پدر',
            'address as آدرس',
            'phonenumber as تلفن همراه',
            'typemember',
            'education'
        ])->get();
            Excel::create('users', function ($excel) use ($members) {
            $excel->sheet('همیاران', function ($sheet) use ($members) {
                $members = $members->map(function ($member, $key) {
                    $member->تاریخـتولد = verta($member->birthdate)->format('Y');
                    $member->تاریخـصدور = verta($member->issuingdate)->format('Y');
                    unset($member->issuingdate);
                    unset($member->birthdate);
                    $member->نوعـهمیار = $member->typememberPretty;
                    $member->تحصیلات = $member->educationPretty;
                    unset($member->typemember);
                    unset($member->education);
                    // $member->fullname = $member->name . ' ' . $member->familyname;
                    unset($member->name);
                    unset($member->familyname);
                    return $member;
                });
                $sheet->fromArray($members);
            });
            // $excel->sheet('همیاران', function ($sheet) {
            //     $sheet->rows(array(
            //         array('test1', 'test2'),
            //         array('test3', 'test4')
            //     ));
            // });
        })->export('xls');
    }


    /**
     * @return boolval
     * @param Request $request
     * 
     * Save Member data on database :)
     * if you want to save data set SAVE on second parameter 
     * if you want to update you data use UPDADE  on second parameter 
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
