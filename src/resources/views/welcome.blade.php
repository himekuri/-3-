@extends('layouts.app')

@section('content')
    @if (Auth::check())
    <div id="app"></div>
    @else
    <div class="center jumbotron">
        <div class="text-center">
            <h1>Morning Happy</h1>
        </div>
    </div>
    @endif
@endsection