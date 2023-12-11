<?php

namespace App\Repositories\Admin;

use Exception;
use Throwable;
use App\Enums\DataType;
use App\Models\Setting;
use App\Enums\SettingKey;
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
        $settings = Setting::all();

        return compact('settings');
    }

    public function save(Request $request)
    {
        try {
            DB::beginTransaction();

            $setting = Setting::findOrFail($request->id);

            $setting->update([
                'value' => $request->value,
            ]);
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Setting saved failed.');
        }
    }
}
