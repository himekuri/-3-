<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Stamp;

class StampsController extends Controller
{
    public function punchIn()
    {
        $user = Auth::user();

        $oldStampDate = $user->stamps()->latest()->first()->date;

        $newStampDate = Carbon::now()->toDateString();

        if($oldStampDate == $newStampDate){
            return redirect()->back()->with('error', '今日のスタンプは押されています！');
        }

        $stamp = Stamp::create([
            'user_id' => $user->id,
            'date' => $newStampDate,
        ]);

        $number = $stamp->id %10;

        return $number;
    }
}
