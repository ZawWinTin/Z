<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum SettingKey: string
{
    use EnumToArray;

    case CATEGORY_LIMIT = 'category_limit';

    public function label(): string
    {
        return match ($this) {
            self::CATEGORY_LIMIT => 'Limit Categories per Article',
        };
    }
}
