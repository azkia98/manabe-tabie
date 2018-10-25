<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="/css/bootstrap-rtl.css" type="text/css">
    <title>پنل سایت</title>
    @yield('head')
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-light p-0 sticky-top bg-light">
        <div class="d-flex align-items-center">
            <a href="#" class="navbar-brand bg-light py-3 px-5 m-0">پنل مدیریت راکت</a>
            <i class="fa fa-bars mr-2" data-toggle="collapse" data-target="#sidebar"></i>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a href="#" class="nav-link">داشبورد</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">اعضا</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">تنظیمات</a>
                </li>
            </ul>
            <div class="ml-3 mr-auto">
                <button type="button" class="btn btn-sm btn-success">
                    <span>ایمیل های جدید</span>
                    <span class="badge badge-light">۹</span>
                </button>
                <button type="button" class="btn btn-sm btn-primary">
                    <span>نظرات جدید</span>
                    <span class="badge badge-light">۹</span>
                </button>
                <button type="button" class="btn btn-sm btn-danger">
                    <span>خروج</span>
                </button>
            </div>
        </div>

    </nav>

    <div class="container-fluid">
        <div class="row">
            <!-- SIDE BAR -->
            <div class="col-12 col-md-3 col-lg-2 bg-dark text-light collapse show" id="sidebar">
                <div class="py-3 mr-2 text-light">منو اصلی</div>
                <ul class="nav flex-column px-3">
                    <li class="nav-item d-flex align-items-center">
                        <i class="fa fa-dashboard"></i>
                        <a href="#" class="nav-link my-1">داشبورد</a>
                    </li>
                    <li class="nav-item">
                        <div class="d-flex align-items-center">
                            <i class="fa fa-book"></i>
                            <a href="#" class="nav-link my-1 text-nowrap w-100 collapsed" data-toggle="collapse" data-target="#submenu1">
                                مقالات
                                <i class="fa fa-angle-left float-left"></i>
                            </a>
                        </div>
                        <div class="collapse" id="submenu1">
                            <ul class="nav px-3">
                                <li class="nav-item">
                                    <a href="#" class="nav-link my-1">مشاهده همه</a>
                                </li>
                                <li class="nav-item w-100">
                                    <a href="#" class="nav-link text-nowrap my-1 w-100 collapsed" data-toggle="collapse" data-target="#submenu1sub1">
                                        ارسال مقاله
                                        <i class="fa fa-angle-left float-left"></i>
                                    </a>
                                    <div class="collapse" id="submenu1sub1">
                                        <ul class="nav px-3">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link my-1">مقاله کوتاه</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link my-1">مقاله بلند</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <i class="fa fa-video-camera"></i>
                        <a href="#" class="nav-link my-1 text-nowrap">دوره ها</a>
                    </li>
                </ul>
                <div>متفرقه</div>
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
                </ul>

            </div>

            <!-- Main Data -->
            <div class="col-12 col-md-9 col-lg-10 bg-light mr-auto p-4" id="main">
                @yield('content')
            </div>

        </div>
    </div>
</body>

</html>

<script src="/js/panel/panel.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
<script src="/js/panel/all.js"></script>