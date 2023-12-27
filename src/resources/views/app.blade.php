<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="hide-scroll">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @if (config('app.env') === 'production')
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    @endif
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link id="favicon" type="image/svg+xml" href="{{ URL::asset('favicon-dark.svg') }}" rel="icon" sizes="any" />

    <!-- Fonts -->
    <link href="https://fonts.bunny.net" rel="preconnect">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="tw-font-sans tw-antialiased tw-scroll-smooth selection:tw-bg-primary/80 selection:tw-text-slate-50 hide-scroll">
    @inertia
</body>

</html>
