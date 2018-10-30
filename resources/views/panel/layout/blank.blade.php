<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- <link rel="stylesheet" href="/css/panel.css"> --}}
    {{-- <link rel="stylesheet" href="/css/bootstrap-rtl.css" type="text/css"> --}}
    <title>پنل سایت</title>
    @yield('head')
</head>

<body>
    @yield('content')
</body>

</html>

<script src="/js/panel/panel.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
<script src="/js/panel/all.js"></script>
@include('sweet::alert')

@yield('scripts')