<?php
namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Kavenegar;
use App\Member;
use App\SMS;

class SmsController extends Controller
{
    public function sendSms(Request $request)
    {
        $sender = "10004346";
        $results = Kavenegar::Send(null, convertToEnglish($request->phonenumber), $request->message);
        $this->saveSmsLog($results);
        alert()->success('پیام شما با موفقیت ثبت شد!!');
        return redirect()->route('members.index');
    }

    public function singelForm(Member $member)
    {
        return view('panel.sms.singel-form', compact('member'));
    }


    public function showMultipleSendForm()
    {
        return view('panel.sms.multiple');
    }

    public function sendMultipleMessages(Request $request)
    {
        $members = Member::whereIn('typemember', $request->type_member)->get();
        $phonenumbers = "";
        foreach ($members as $member) {
            $phonenumbers .= convertToEnglish($member->phonenumber) . ',';
        }
        $phonenumbers = trim($phonenumbers, ',');
        $results = Kavenegar::Send(null, $phonenumbers, $request->message);
        $this->saveSmsLog($results);
        alert()->success('پیام گروهی شما با موفقیت ارسال شد!!');
        return redirect()->back();
    }


    protected function saveSmsLog(array $results) : void
    {
        foreach ($results as $result) {
            SMS::create([
                'messageid' => $result->messageid,
                'sender' => $result->sender,
                'receptor' => $result->receptor,
                'cost' => $result->cost
            ]);
        }
    }

    public function index()
    {
        $smss = SMS::paginate(10);
        return view('panel.sms.index', compact('smss'));
    }

    public function show(SMS $sms)
    {
        // return view();
        $status = Kavenegar::Status($sms->messageid)[0];
        $member = Member::select('id','name')->wherePhonenumber($sms->receptor)->firstOrFail();
        return view('panel.sms.show', compact('status', 'sms','member'));
    }

    public function destroy(SMS $sms)
    {
        return $sms;
    }
}
