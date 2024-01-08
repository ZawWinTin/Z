<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ArticleSaveRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['nullable', 'exists:articles,id,deleted_at,NULL'],
            'cover_image' => ['required', 'image', 'max:10000'],
            'cover_image_object_position' => ['required', 'string'],
            'title' => ['required', 'string', 'max:120'],
            'description' => ['required', 'string', 'max:2000'],
            'categories' => ['required', 'array', 'min:1', 'max:5'],
            'content' => ['required'],
        ];
    }
}
