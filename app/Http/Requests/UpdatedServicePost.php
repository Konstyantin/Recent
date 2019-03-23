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
            'title' => 'required|string|max:45|unique:services,title,' . $routeId,
            'short_description' => 'required|string|max:45',
            'description' => 'required|string',
            'icon' => 'required|mimes:jpeg,bmp,png',
            'image' => 'required|mimes:jpeg,bmp,png',
        ];
    }
}
