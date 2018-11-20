@extends('panel.layout.master')

@section('content')
    <div class="row">
        <div class="col-lg-3 col-md-3 mt-2 px-1">
            <div class="bg-success text-white py-2 rounded">
                <div class="d-flex justify-content-between p-2">
                    <div><i class="fa fa-users fa-4x"></i></div>
                    <div class="d-flex align-items-center" style="font-size: 1.5rem;"><span>{{ convertToPersian($membersCount) }}</span></div>
                </div>
                <div class="p-2">
                    <h6 class="text-truncate">تعداد همیاران</h5>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 mt-2 px-1">
            <div class="bg-primary text-white py-2 rounded">
                <div class="d-flex justify-content-between p-2">
                    <div><i class="fa fa-handshake-o fa-4x"></i></div>
                    <div class="d-flex align-items-center" style="font-size: 1.5rem;"><span>{{ convertToPersian($promoterCount) }}</span></div>
                </div>
                <div class="p-2">
                    <h6 class="text-truncate">تعدا همیاران مروج</h5>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 mt-2 px-1">
            <div class="bg-danger text-white py-2 rounded">
                <div class="d-flex justify-content-between p-2">
                    <div><i class="fa fa-shield fa-4x"></i></div>
                    <div class="d-flex align-items-center" style="font-size: 1.5rem;"><span>{{ convertToPersian($protectorCount) }}</span></div>
                </div>
                <div class="p-2">
                    <h6 class="text-truncate">تعداد همیاران محافظ</h5>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 mt-2 px-1">
            <div class="bg-success text-white py-2 rounded">
                <div class="d-flex justify-content-between p-2">
                    <div><i class="fa fa-graduation-cap fa-4x"></i></div>
                    <div class="d-flex align-items-center" style="font-size: 1.5rem;"><span>{{ convertToPersian($studentCount) }}</span></div>
                </div>
                <div class="p-2">
                    <h6 class="text-truncate">تعداد همیاران دانشجو</h6>
                </div>
            </div>
        </div>

            
    </div>
@endsection
{{-- 
$membersCount = Member::count();
        $userCount = User::count();
        $protectorCount = Member::protectors()->count();
        $promoterCount = Member::Promoters()->count();
        $studentCount = Member::Students()->count(); --}}