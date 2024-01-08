<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum SettingType: string
{
    use EnumToArray;

    case SYSTEM = 'system';
    case ENV = 'env';
}
