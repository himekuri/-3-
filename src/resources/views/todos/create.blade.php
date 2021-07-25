<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ToDo App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <link rel="stylesheet" href="https://npmcdn.com/flatpickr/dist/themes/material_blue.css">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
<header>
  <nav class="my-navbar">
  <a class="my-navbar-brand" href="/">Morning Happy</a>
  </nav>
</header>
<main>
  <div class="container">
    <div class="row">
      <div class="col col-md-offset-3 col-md-6">
        <nav class="panel panel-default">
          <div class="panel-heading">タスクを追加する</div>
          <div class="panel-body">
            @if($errors->any())
              <div class="alert alert-danger">
                @foreach($errors->all() as $message)
                  <p>{{ $message }}</p>
                @endforeach
              </div>
            @endif
            <form action="{{ route('todos.create', ['id' => $user_id]) }}" method="POST">
              @csrf
              <div class="form-group">
                <label for="content">タイトル</label>
                <input type="text" class="form-control" name="content" id="content" value="{{ old('content') }}" />
              </div>
              <div class="form-group">
                <label for="deadline">期限</label>
                <input type="text" class="form-control" name="deadline" id="deadline" value="{{ old('deadline') }}" />
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary">送信</button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </div>
</main>

<script src="https://npmcdn.com/flatpickr/dist/flatpickr.min.js"></script>
<script src="https://npmcdn.com/flatpickr/dist/l10n/ja.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
  flatpickr(document.getElementById('deadline'), {
    locale: 'ja',
    dateFormat: "Y/m/d",
    minDate: new Date()
  });
</script>
</body>
</html>

<style>
    @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootflat/2.0.4/css/bootflat.min.css");

body {
  background-color: #EFEDE3;
}

.navbar {
    margin: 2rem 0 2.5rem 0;
}

.my-navbar {
    align-items: center;
    background: #ffc107;
    display: flex;
    height: 56px;
    justify-content: space-between;
    padding: 0 2%;
    margin-bottom: 3rem;
}

.my-navbar-brand {
    font-size: 18px;
}

.my-navbar-brand,
.my-navbar-item {
  color: #ffffff;
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

.panel .panel-heading {
  background-color: #FEF2C7;
}

</style>