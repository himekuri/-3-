@extends('layouts.app')

@section('content')
<div class="main">

    <div class="w-75 mx-auto pt-10">
    
        <div class="text-center h2 sign">
            <h1>Log in</h1>
        </div>
    
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
    
                {!! Form::open(['route' => 'login.post']) !!}
                    <div class="form-group">
                        {!! Form::label('email', 'Email') !!}
                        {!! Form::email('email', null, ['class' => 'form-control']) !!}
                    </div>
    
                    <div class="form-group">
                        {!! Form::label('password', 'Password') !!}
                        {!! Form::password('password', ['class' => 'form-control']) !!}
                    </div>
    
                    {!! Form::submit('Log in', ['class' => 'btn btn-primary btn-block']) !!}
                {!! Form::close() !!}
    
                {{-- ユーザ登録ページへのリンク --}}
                <p class="mt-2">New user? {!! link_to_route('signup.get', 'Sign up now!') !!}</p>
            </div>
        </div>
    </div>
</div>

@endsection

<style>
.main{
    background-color: #EFEDE3;
    height: 100vh;

}
.sign {
    color: #333333;
}
</style>