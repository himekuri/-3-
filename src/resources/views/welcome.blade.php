@extends('layouts.app')

@section('content')
    @if (Auth::check())
    <div id="app"></div>
    @else
    <div class="main">
        <div class="morning">
            <h1 class="text">Morning Happy</h1>
            <p class="copy">〜あなたの一日をHappyに〜</p>
        </div>
    </div>
    @endif
@endsection

<style>
    .morning{
        text-align: center;
        height: 100vh;
        background-color: #EFEDE3;
        padding-top: 160px;
        color: #333333;
    }

    .text{
        font-size: 44px;
    }

    .copy{
        font-size: 30px;
        padding-top: 16px;
    }
</style>