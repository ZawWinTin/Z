<?php

namespace App\Repositories\Admin;

use App\Enums\DataType;
use App\Models\Setting;
use App\Enums\SettingKey;

class SettingRepository
{
    /**
     * Get Value by Name
     */
    public static function getValueByName(SettingKey $name)
    {
        $value = null;
        $setting = SettingRepository::getModelByName($name);
        if ($setting) {
            $value = match ($setting->type) {
                DataType::NUMBER => (int) $setting->value,
                default => $setting->value,
            };
        }

        return $value;
    }

    /**
     * Get Setting by Name
     */
    public static function getModelByName(SettingKey $name): Setting
    {
        return Setting::where('name', $name)->first();
    }
}
