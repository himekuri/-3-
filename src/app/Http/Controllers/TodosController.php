<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateTodo;

class TodosController extends Controller
{
    public function initialize()
    {
        parent::initialize();

    }

    public function index()
    {
        //ログインしているユーザーの取得
        $user = Auth::user();

        // 現在認証しているユーザーのIDを取得
        $id = Auth::id();
        // ログインユーザーに紐づくTodoモデルからデータを取得
        $todos = Todo::where('user_id', 1)->get();

        return view('todos/index', [
            'todos' => $todos,
        ]);
    }

    public function showCreateForm() 
    {
        //ログインしているユーザーの取得
        $user = Auth::user();

        // 現在認証しているユーザーのIDを取得
        $id = Auth::id();
        return view('todos/create', [
            'user_id' => $id,
        ]);
    }

    public function create(createTodo $request)
    {
        // 現在認証しているユーザーのIDを取得
        $id = Auth::id();

        $todo = new Todo();
        $todo->content = $request->content;
        $todo->deadline = $request->deadline;
        $todo->user_id = $id;


        $todo->save();
    }

    public function showEditForm(int $id, int $user_id)
    {
        $todo = Todo::find($id);

        return view('todos/edit', [
            'todo' => $todo,
        ]);
    }
    public function edit()
    {
        
    }
}
