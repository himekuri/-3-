<?php

namespace App\Http\Requests;

use App\Todo;
use Illuminate\Validation\Rule;

class EditTodo extends CreateTodo
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rule = parent::rules();

        $status_rule = Rule::in(array_keys(Todo::STATUS));

        return $rule + [
            'status' => 'required|'.$status_rule,
        ];
    }

    public function attributes()
    {
        $attributes = parent::attributes();

        return $attributes + [
            'status' => '状態',
        ];
    }

    public function messages()
    {
        $messages = parent::messages();

        $status_labels = array_map(function($item) {
            return $item['label'];
        }, Todo::STATUS);

        $status_labels = implode('、', $status_labels);

        return $messages + [
            'status.in' => ':attributeには'. $status_labels.'のいずれかを指定してください',
        ];
    }
}
