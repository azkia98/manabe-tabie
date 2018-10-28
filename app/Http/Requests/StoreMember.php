<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMember extends FormRequest
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
            'name' => 'required|string',
            'familyname' => 'required|string',
            'birthdate' => 'required',
            'nationalcode' => 'required',
            'issuinglocal' => 'required',
            'identitinumber' => 'required',
            'fathername' => 'required',
            'address' => 'required',
            'phonenumber' => 'required',
            'education' => 'required',
            'job' => 'required',
            'issuingdate' => 'required',
            'typemember' => 'required|',
            'picture' => 'mimes:jpeg,bmp,png',
        ];
    }
}
