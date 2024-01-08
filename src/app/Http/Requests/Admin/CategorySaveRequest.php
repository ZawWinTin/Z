<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CategorySaveRequest extends FormRequest
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
            'id' => ['nullable', 'exists:categories,id,deleted_at,NULL'],
            'name' => ['required', 'string', 'max:120'],
            'text_color' => ['required', 'hex_color'],
            'background_color' => ['required', 'hex_color'],
        ];
    }
}
