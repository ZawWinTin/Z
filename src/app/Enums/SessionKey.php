<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum SessionKey: string
{
    use EnumToArray;

    case LOGIN_EMAIL = 'login_email';
    case RESET_PASSWORD_EMAIL = 'reset_password_email';
}
