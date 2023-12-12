<?php

namespace Database\Seeders;

use App\Enums\DataType;
use App\Models\Setting;
use App\Enums\SettingKey;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::truncate();

        $data = [
            [
                'id' => 1,
                'name' => SettingKey::CATEGORY_LIMIT,
                'value' => 5,
                'type' => DataType::NUMBER,
                'label' => SettingKey::CATEGORY_LIMIT->label(),
                'description' => 'Limit Categories per Article',
                'icon_name' => 'pi pi-tags',
                'options' => ['min' => 1, 'max' => 10],
            ],
        ];

        foreach ($data as $setting) {
            Setting::updateOrCreate(
                ['id' => $setting['id']],
                [...$setting]
            );
        }
    }
}
