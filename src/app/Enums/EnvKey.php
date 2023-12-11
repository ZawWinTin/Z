<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum EnvKey: string
{
    use EnumToArray;

    case APP_DEBUG = 'APP_DEBUG';

    // case LOG_SQL_ENABLED = 'LOG_SQL_ENABLED';

    // case DB_CONNECTION = 'DB_CONNECTION';
    // case DB_HOST = 'DB_HOST';
    // case DB_PORT = 'DB_PORT';
    // case DB_DATABASE = 'DB_DATABASE';
    // case DB_USERNAME = 'DB_USERNAME';
    // case DB_PASSWORD = 'DB_PASSWORD';

    // case MAIL = 'MAIL';

    public function label(): string
    {
        return match ($this) {
            self::APP_DEBUG => 'Application Debug',
        };
    }
}
