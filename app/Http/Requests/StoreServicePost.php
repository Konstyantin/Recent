<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServicePost extends FormRequest
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
        return [
            'title' => 'required|string|min:5|max:45|unique:services',
            'short_description' => 'required|string|min:10|max:45',
            'description' => 'required|string',
            'icon' => 'required|mimes:jpeg,bmp,png',
            'image' => 'required|mimes:jpeg,bmp,png',
        ];
    }
}
