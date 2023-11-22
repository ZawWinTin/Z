<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $seeders = [
            UserSeeder::class,
            CategorySeeder::class,
        ];

        foreach ($seeders as $seeder) {
            // Prevent already executed seeder
            if (DB::table('execute_seeds')->where('name', $seeder)->doesntExist()) {
                if (!App::environment('testing')) {
                    echo __CLASS__ . '::' . __FUNCTION__ . '(' . __LINE__ . ')[' . getmypid() . "][DEBUG_SEED][exec:{$seeder}]\n";
                }
                $this->call($seeder);
                DB::table('execute_seeds')->insert(['name' => $seeder]);
            } else {
                if (!App::environment('testing')) {
                    echo __CLASS__ . '::' . __FUNCTION__ . '(' . __LINE__ . ')[' . getmypid() . "][DEBUG_SEED][skip:{$seeder}]\n";
                }
            }
        }
    }
}
