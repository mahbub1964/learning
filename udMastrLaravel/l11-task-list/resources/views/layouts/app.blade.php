<!DOCTYPE html>
<html>
  <head>
    <title>Laravel 11 Task List App</title>
    @yield('styles')
  </head>
  <body>
    <h1>@yield('title')</h1>

    @if(session()->has('success'))
      <div>{{ session('success') }}</div>
    @endif
    
    <div>
      @yield('content')
    </div>
  </body>
</html>