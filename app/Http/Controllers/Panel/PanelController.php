<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Member;
use App\User;

class PanelController extends Controller
{
    /**
     * `MemberCounts,UserCounts,ProtectorCount,PromoterCount,StudentCount`
     */
    public function index()
    {
        auth()->loginUsingId(1);
        $membersCount = Member::count();
        $userCount = User::count();
        $protectorCount = Member::protectors()->count();
        $promoterCount = Member::Promoters()->count();
        $studentCount = Member::Students()->count();
        return view('panel.index',compact('membersCount','userCount','protectorCount','promoterCount','studentCount'));
    }
}
