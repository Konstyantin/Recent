<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreUserPut
 * @package App\Http\Requests
 */
class StoreUserPut extends FormRequest
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
            'firstName' => 'required|string|max:45',
            'lastName' => 'required|string|max:45',
            'email' => 'required|string|email|max:45|unique:users',
            'phone' => 'required|string|max:45|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ];
    }
}
