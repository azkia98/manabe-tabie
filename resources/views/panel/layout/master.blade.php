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
                    <a href="#" class="nav-link">همیارها</a>
                </li>
            </ul>
            <div class="ml-3 mr-auto">
                @include('panel.layout.topleft')
            </div>
        </div>

    </nav>

    <div class="container-fluid">
        <div class="row">
            <!-- SIDE BAR -->
            @include('panel.layout.sidebar')
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