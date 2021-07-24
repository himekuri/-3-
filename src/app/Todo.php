<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    const STATUS = [
        'notstart' => [ 'label' => '未着手', 'class' => '' ],
        'working' => [ 'label' => '着手中', 'class'=>'' ],
        'done' => [ 'label' => '完了' , 'class'=> ''],
        'expired' =>[ 'label' => '期限切れ', 'class'=>'']
    ];


    /**
     * 状態のラベル
     * @return string
     */
    public function getStatusLabelAttribute()
    {
        // 状態値
        $status = $this->attributes['status'];

        // 定義されていなければ空文字を返す
        if (!isset(self::STATUS[$status])) {
            return '';
        }

        return self::STATUS[$status]['label'];
    }
    /**
     * 整形した期限日
     * @retrun string
     */

    public function getFormattedDueDateAttribute()
    {
        return Carbon::createFromFormat('Y-m-d', $this->attributes['deadline'])->format('Y/m/d');
    }

    public function todos()
    {
        return $this->belongsTo('App\User');
    }
}
