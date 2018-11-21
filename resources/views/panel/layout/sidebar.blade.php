<div class="col-12 col-md-3 col-lg-2 bg-dark text-light collapse show" id="sidebar">
    <div class="py-3 mr-2 text-light">منو اصلی</div>
    <ul class="nav flex-column px-3">
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-dashboard"></i>
            <a href="{{ route('dashboard') }}" class="nav-link my-1">داشبورد</a>
        </li>
        <li class="nav-item">
            <div class="d-flex align-items-center">
                <i class="fa fa-users"></i>
                <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#submenu1">
                    همیاران
                    <i class="fa fa-angle-left float-left"></i>
                </a>
            </div>
            <div class="collapse" id="submenu1">
                <ul class="nav px-3">
                    <li class="nav-item w-100">
                        <a href="{{ route('members.index') }}" class="nav-link my-1">مشاهده همه</a>
                    </li>
                    <li class="nav-item w-100">
                        <a href="{{ route('members.create') }}" class="nav-link my-1">اضافه کردن </a>
                    </li>
                        {{-- <li class="nav-item w-100">
                            <a href="#" class="nav-link my-1">تایید درخواست</a>
                        </li> --}}
                </ul>
            </div>
        </li>
        </li>
        <li class="nav-item">
            <div class="d-flex align-items-center">
                <i class="fa fa-users"></i>
                <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#submenu2">
                    کاربران
                    <i class="fa fa-angle-left float-left"></i>
                </a>
            </div>
            <div class="collapse" id="submenu2">
                <ul class="nav px-3">
                    <li class="nav-item w-100">
                        <a href="{{ route('users.index') }}" class="nav-link my-1">مشاهده همه</a>
                    </li>
                        <li class="nav-item w-100">
                            <a href="{{ route('users.create') }}" class="nav-link my-1">اضافه کردن </a>
                        </li>
                        {{-- <li class="nav-item w-100">
                            <a href="#" class="nav-link my-1">تایید درخواست</a>
                        </li> --}}
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <div class="d-flex align-items-center">
                <i class="fa fa-file-excel-o"></i>
                <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#submenu3">
                    اکسل
                    <i class="fa fa-angle-left float-left"></i>
                </a>
            </div>
            <div class="collapse" id="submenu3">
                <ul class="nav px-3">
                    <li class="nav-item w-100">
                        <a href="{{ route('excel.all') }}" class="nav-link my-1">خروجی</a>
                    </li>
                        <li class="nav-item w-100">
                            <a href="{{ route('excel.import') }}" class="nav-link my-1">وارد کردن</a>
                        </li>
                        {{-- <li class="nav-item w-100">
                            <a href="#" class="nav-link my-1">تایید درخواست</a>
                        </li> --}}
                </ul>
            </div>
        </li>
        
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-cogs"></i>
            <a href="{{ route('options.index') }}" class="nav-link my-1 text-nowrap">تنظیمات</a>
        </li>
        {{-- <li class="nav-item d-flex align-items-center">
            <i class="fa fa-video-camera"></i>
            <a href="#" class="nav-link my-1 text-nowrap">دوره ها</a>
        </li> --}}
    </ul>
    {{-- <div>متفرقه</div>
    <ul class="nav flex-column px-3">
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-users"></i>
            <a href="#" class="nav-link my-1">اعضا</a>
        </li>
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-comment"></i>
            <a href="#" class="nav-link my-1 text-nowrap">نظرات</a>
        </li>
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-cogs"></i>
            <a href="#" class="nav-link my-1 text-nowrap">تنظیمات</a>
        </li>
    </ul> --}}