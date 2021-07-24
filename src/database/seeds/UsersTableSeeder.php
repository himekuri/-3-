<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['サンプルユーザー１', 'サンプルユーザー２', 'サンプルユーザー3'];

        foreach ($names as $name) {
            DB::table('users')->insert([
                'name' => $name,
                'email' =>"{$name}@email.com",
                'password'=> 'password',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
