<div class="col-12 col-md-3 col-lg-2 bg-dark text-light collapse show" id="sidebar">
    <div class="py-3 mr-2 text-light">منو اصلی</div>
    <ul class="nav flex-column px-3">
        <li class="nav-item d-flex align-items-center">
            <i class="fa fa-dashboard"></i>
            <a href="{{ route('dashboard') }}" class="nav-link my-1">داشبورد</a>
        </li>
        @can('members-index')
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
                        @can('members-create')
                            <li class="nav-item w-100">
                                <a href="{{ route('members.create') }}" class="nav-link my-1">اضافه کردن </a>
                            </li>
                        @endcan
                            {{-- <li class="nav-item w-100">
                                <a href="#" class="nav-link my-1">تایید درخواست</a>
                            </li> --}}
                    </ul>
                </div>
            </li>
        @endcan
        @can('users-index')
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
                        @can('users-create')
                            <li class="nav-item w-100">
                                <a href="{{ route('users.create') }}" class="nav-link my-1">اضافه کردن </a>
                            </li>
                        @endcan
                    </ul>
                </div>
            </li>
        @endcan
        @can('permissions-and-roles')
            <li class="nav-item">
                <div class="d-flex align-items-center">
                    <i class="fa fa-hand-paper-o "></i>
                    <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#permissionAndRoles">
                        نقش ها و اجازه ها
                        <i class="fa fa-angle-left float-left"></i>
                    </a>
                </div>
                <div class="collapse" id="permissionAndRoles">
                    <ul class="nav px-3">
                        <li class="nav-item w-100">
                            <a href="{{ route('roles.index') }}" class="nav-link my-1">مشاهده تمام نقش ها</a>
                        </li>
                        <li class="nav-item w-100">
                            <a href="{{ route('roles.create') }}" class="nav-link my-1">اضافه کردن نقش جدید</a>
                        </li>
                        <li class="nav-item w-100">
                            <a href="{{ route('permissions.index') }}" class="nav-link my-1">مشاهده تمام اجازه ها</a>
                        </li>
                    </ul>
                </div>
            </li>
        @endcan
        @can('excel-export')
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
                    </ul>
                </div>
            </li>
        @endcan

        @can('sms')
            <li class="nav-item">
                <div class="d-flex align-items-center">
                    <i class="fa fa-comments"></i>
                    <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#smsMenu">
                        پیام ها
                        <i class="fa fa-angle-left float-left"></i>
                    </a>
                </div>
                <div class="collapse" id="smsMenu">
                    <ul class="nav px-3">
                        <li class="nav-item w-100">
                            <a href="{{ route('sms.form.multipel') }}" class="nav-link my-1">ارسال گروهی</a>
                        </li>
                        <li class="nav-item w-100">
                            <a href="{{ route('sms.index') }}" class="nav-link my-1">تاریخچه</a>
                        </li>
                    </ul>
                </div>
            </li>
            
        @endcan
        
        @can('options')
            <li class="nav-item d-flex align-items-center">
                <i class="fa fa-cogs"></i>
                <a href="{{ route('options.index') }}" class="nav-link my-1 text-nowrap">تنظیمات</a>
            </li>
        @endcan
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