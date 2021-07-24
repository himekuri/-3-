<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodosTable extends Migration
{
    /**
     * migration時に呼び出される処理。
     * Schema::createで第一引数のテーブルが作成される
     *第２引数にはその際に作成するカラムを指定する。
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedbigInteger('user_id');
            //Totoの内容データ（nullを許可しない）
            $table->string('content', 255)->nullable(false);
            // 状態を表すデータ（初期値は未着手）
            $table->string('status')->default('notstart')
            ->comment('未着手(notstart)、作業中(working)、完了(done)、期限切れ(expired)');
            // 期限を表すデータ
            $table->date('deadline');

            //timestampsで作成時刻と更新時刻のカラムが複数作成される
            $table->timestamps();

            // 外部キーの制約
            $table->foreign('user_id')
            ->references('id')
            ->on('users');
            // ->onDelete('cascade'); //参照先が削除されたら同時に削除
        });
    }

    /**
     * migrationを実行して、元に戻したいときに実行される処理
     *
     * @return void
     */
    public function down()
    {
        //削除はupされた順にファイルを削除する。
        //dropIfExistsはもしtodoテーブルが存在するならばdropする
        Schema::dropIfExists('todos');
    }
}
