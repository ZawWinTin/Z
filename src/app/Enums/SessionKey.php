<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum SessionKey: string
{
    use EnumToArray;

    case LOGIN_EMAIL = 'login_email';
}
