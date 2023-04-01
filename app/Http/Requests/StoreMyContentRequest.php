<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMyContentRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'trackTitle' => 'required',
            'trackRelease' => 'required',
            'trackImage' => 'required',
            'trackAudio' => 'required',
            'artistId' => 'required_unless:artistName,string',
            'albumId' => 'required_unless:albumName,string',
            'albumImage' => 'required_without:albumId',
            'albumName' => 'required_without:albumId',
            'albumRelease' => 'required_without:albumId',
            'artistName' => 'required_without:artistId',
            'artistNacionality' => 'required_without:artistId',
            'artistBirthDate' => 'required_without:artistId',
            'artistBio' => 'required_without:artistId',
            'artistImage' => 'required_without:albumId',
        ];
    }
}
