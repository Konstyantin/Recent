<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatedServicePost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $routeId = $this->route('id');

        return [
            'title' => 'string|max:45|unique:services,title,' . $routeId,
            'short_description' => 'string|max:45',
            'description' => 'string',
            'icon' => 'mimes:jpeg,bmp,png',
            'image' => 'mimes:jpeg,bmp,png',
        ];
    }
}
