<?php

namespace App\Http\Requests\Admin;

use App\Enums\EnvKey;
use App\Enums\DataType;
use App\Models\Setting;
use App\Enums\SettingType;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SettingSaveRequest extends FormRequest
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
        $valueRules = [];
        $keyRules = [];

        $setting = null;
        $options = [];

        switch ($this->input('setting_type')) {
            case SettingType::SYSTEM->value:
                $setting = Setting::find($this->input('key'));
                $type = $setting?->type;
                $options = $setting?->options;
                $keyRules = ['required', 'exists:settings,id'];
                break;
            case SettingType::ENV->value:
                $setting = EnvKey::case($this->input('key'));
                $type = $setting?->type();
                $options = $setting?->options();
                $keyRules = ['required', Rule::in(EnvKey::values())];
                break;
        }

        $valueRules = match ($type) {
            DataType::NUMBER => ['required', 'integer', 'min:' . $options['min'], 'max:' . $options['max']],
            DataType::BOOLEAN => ['required', 'boolean'],
            DataType::DROPDOWN => ['required', Rule::in(array_column($options, 'value'))],
            default => ['required'],
        };

        return [
            'setting_type' => ['required', Rule::in(SettingType::values())],
            'key' => $keyRules,
            'value' => $valueRules,
        ];
    }
}
