<?php

namespace App\Repositories\Admin;

use Exception;
use Throwable;
use App\Enums\EnvKey;
use App\Enums\DataType;
use App\Models\Setting;
use App\Enums\SettingKey;
use App\Enums\SettingType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

    public function getAll()
    {
        $systemSettings = Setting::all();

        $envSettings = [];
        foreach (EnvKey::cases() as $envKey) {
            $envSettings[] = [
                'name' => $envKey->value,
                'value' => config($envKey->configKey()),
                'type' => $envKey->type(),
                'label' => $envKey->label(),
                'description' => $envKey->description(),
                'icon_name' => $envKey->iconName(),
                'options' => $envKey->options(),
            ];
        }

        return compact('systemSettings', 'envSettings');
    }

    public function save(Request $request)
    {
        try {

            switch ($request->setting_type) {
                case SettingType::SYSTEM->value:
                    DB::beginTransaction();
                    $setting = Setting::findOrFail($request->key);

                    $setting->update([
                        'value' => $request->value,
                    ]);
                    DB::commit();
                    break;
                case SettingType::ENV->value:
                    $setting = EnvKey::case($request->key);
                    save_permanent_env($setting->value, $setting->configKey(), $request->value);
                    break;
            }
        } catch (Throwable $e) {
            if ($request->setting_type == SettingType::SYSTEM->value) {
                DB::rollBack();
            }

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Setting saved failed.');
        }
    }
}
