<?php

namespace App\Rules;

use Closure;
use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;

class UserEmail implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!User::user()->where('email', $value)->exists()) {
            $fail(trans('auth.failed'));
        }
    }
}
