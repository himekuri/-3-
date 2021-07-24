<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ToDo App</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>

<body>
    <header>
        <nav class="my-navbar">
            <a class="my-navbar-brand" href="/">ToDo App</a>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col col-md-4">
                    <nav class="panel panel-default">
                        <div class="panel-heading">タスク</div>
                        <div class="panel-body">
                            <a href="#" class="btn btn-default btn-block">
                                タスクを追加する
                            </a>
                        </div>
                        <div class="list-group">
                            @foreach($todos as $todo)
                            <a href="{{ route('todos.index') }}" class="list-group-item">
                                {{ $todo->title }}
                            </a>
                            @endforeach
                        </div>
                    </nav>
                </div>
                <div class="column col-md-8">
                    <!-- ここにタスクが表示される -->
                    <div class="panel panel-default">
                        <div class="panel-heading">タスク</div>
                        <div class="panel-body">
                            <div class="text-right">
                                <a href="#" class="btn btn-default btn-block">
                                    タスクを追加する
                                </a>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>タイトル</th>
                                    <th>状態</th>
                                    <th>期限</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($todos as $todo)
                                <tr>
                                    <td>{{ $todo->content }}</td>
                                    <td>
                                        <span class="label">{{ $todo->status_label }}</span>
                                    </td>
                                    <td>{{ $todo->deadline }}</td>
                                    <td><a href="#">編集</a></td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>

<style>
    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/bootflat/2.0.4/css/bootflat.min.css');

    body {
        background-color: #f4f7f8;
    }

    .navbar {
        margin: 2rem 0 2.5rem 0;
    }

    .my-navbar {
        align-items: center;
        background: #333;
        display: flex;
        height: 6rem;
        justify-content: space-between;
        padding: 0 2%;
        margin-bottom: 3rem;
    }

    .my-navbar-brand {
        font-size: 18px;
    }

    .my-navbar-brand,
    .my-navbar-item {
        color: #8c8c8c;
    }

    .my-navbar-brand:hover,
    a.my-navbar-item:hover {
        color: #ffffff;
    }

    .table td:nth-child(2),
    .table td:nth-child(3),
    .table td:nth-child(4) {
        white-space: nowrap;
        width: 1px;
    }

    .form-control[disabled],
    .form-control[readonly] {
        background-color: #fff;
    }
</style>