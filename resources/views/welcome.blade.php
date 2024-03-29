<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Event Recommender</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <header-component></header-component>
        <div class="container">
            <div class="columns" style="margin-top:0px !important;">
                <div class="column is-one-fifth">
                    <sidebar-component></sidebar-component>
                </div>
                <div class="column">
                    <filter-component></filter-component>
                    <router-view></router-view></div>
                </div>
            </div>
        </div>
    </body>
</html>
