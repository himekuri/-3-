<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodosController extends Controller
{
    public function index()
    {

        //ログインしているユーザーの取得
        $user = Auth::user();

        // 現在認証しているユーザーのIDを取得
        $id = Auth::id();

        // Todoモデルから全てのデータをallメソッドで取得
        $todos = Todo::all();

        return view('todos/index', [
            'todos' => $todos,
        ]);
    }
}
