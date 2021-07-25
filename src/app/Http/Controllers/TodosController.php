<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateTodo;
use App\Http\Requests\EditTodo;
use Illuminate\Http\Request;

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
        $todos = Todo::where('user_id', $id)->where('status','!=', 'done')->get();

        $todo_done = Todo::where('status', 'done')->where('user_id', $id)->get();

        return view('todos/index', [
            'todos' => $todos,
            'user' => $user,
            'todo_done' => $todo_done,
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

        return redirect()->route('todos.index');
    }

    public function showEditForm(int $id)
    {
        $todo = Todo::find($id);

        return view('todos/edit', [
            'todo' => $todo,
        ]);
    }

    public function edit(int $todo_id, EditTodo $request)
    {
        $todo = Todo::find($todo_id);

        $todo->content = $request->content;
        $todo->status = $request->status;
        $todo->deadline = $request->deadline;

        $todo->save();

        return redirect()->route('todos.index');
    }

    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();

        return redirect()->route('todos.index');
    }

}
