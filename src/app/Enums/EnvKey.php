<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum EnvKey: string
{
    use EnumToArray;

    case APP_ENV = 'APP_ENV';
    case APP_DEBUG = 'APP_DEBUG';
    case LOG_SQL_ENABLED = 'LOG_SQL_ENABLED';

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
            self::APP_ENV => 'Application Environment',
            self::APP_DEBUG => 'Application Debug',
            self::LOG_SQL_ENABLED => 'Enable Log SQL',
        };
    }

    public function type(): DataType
    {
        return match ($this) {
            self::APP_ENV => DataType::DROPDOWN,
            self::APP_DEBUG => DataType::BOOLEAN,
            self::LOG_SQL_ENABLED => DataType::BOOLEAN,
        };
    }

    public function configKey(): string
    {
        return match ($this) {
            self::APP_ENV => 'app.env',
            self::APP_DEBUG => 'app.debug',
            self::LOG_SQL_ENABLED => 'logging.sql_enabled',
        };
    }

    public function description(): string
    {
        return match ($this) {
            self::APP_ENV => 'Update Application Environment',
            self::APP_DEBUG => 'Display Application Debugbar or not',
            self::LOG_SQL_ENABLED => 'Display SQL Log or not',
        };
    }

    public function iconName(): string
    {
        return match ($this) {
            self::APP_ENV => 'pi pi-box',
            self::APP_DEBUG => 'pi pi-code',
            self::LOG_SQL_ENABLED => 'pi pi-database',
        };
    }

    public function options(): array
    {
        return match ($this) {
            self::APP_ENV => [
                ['label' => 'Local', 'value' => 'local'],
                ['label' => 'Production', 'value' => 'production'],
                ['label' => 'Testing', 'value' => 'testing'],
            ],
            self::APP_DEBUG => [],
            self::LOG_SQL_ENABLED => [],
        };
    }
}
