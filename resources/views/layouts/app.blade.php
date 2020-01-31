<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Ibis-fullstack') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/jquery-3.4.1.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/gh/xcash/bootstrap-autocomplete@v2.3.0/dist/latest/bootstrap-autocomplete.min.js"></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="flex-center position-ref full-height">
            @yield('navbar')
            <main class="py-4">
            @yield('content')
            </main>
        </div>
    </div>
    @yield('scripts')
</body>
</html>
