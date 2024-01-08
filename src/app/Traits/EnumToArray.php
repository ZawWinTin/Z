<?php

namespace App\Traits;

trait EnumToArray
{
    public static function names(): array
    {
        return array_column(self::cases(), 'name');
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function array(): array
    {
        return array_combine(self::values(), self::names());
    }

    public static function labels(): array
    {
        $labelList = [];
        foreach (self::cases() as $case) {
            $labelList[] = $case->label();
        }

        return array_combine(self::values(), $labelList);
    }

    public static function getLabelById($value): ?string
    {
        return self::labels()[$value] ?? null;
    }

    public static function case($value)
    {
        foreach (self::cases() as $case) {
            if ($case->value == $value) {
                return $case;
            }
        }

        return null;
    }
}
