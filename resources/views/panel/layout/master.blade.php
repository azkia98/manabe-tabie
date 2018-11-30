<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/panel.css">
    <link rel="stylesheet" href="/css/bootstrap-rtl.css" type="text/css">
    <title>پنل سایت</title>
    @yield('head')
    <meta name="csrf-token" content="<?= csrf_token() ?>">
</head>
<script>window.Url = '<?= url('/') ?>'</script>
<body>
        
    <nav class="navbar navbar-expand-md navbar-light p-0 sticky-top bg-light">
        <div class="d-flex align-items-center">
            <a href="#" class="navbar-brand bg-light py-3 px-5 m-0">منابع طبیعی</a>
            <i class="fa fa-bars mr-2" data-toggle="collapse" data-target="#sidebar"></i>
        </div>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a href="{{ route('dashboard') }}" class="nav-link">داشبورد</a>
                </li>
                @can('members-index')
                    <li class="nav-item">
                        <a href="{{ route('members.index') }}" class="nav-link">همیارها</a>
                    </li>
                @endcan
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
@include('sweet::alert')

@yield('scripts')