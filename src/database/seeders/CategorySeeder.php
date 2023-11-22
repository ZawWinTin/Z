<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'id' => 1,
                'name' => 'Frontend',
            ],
            [
                'id' => 2,
                'name' => 'Backend',
            ],
            [
                'id' => 3,
                'name' => 'Productivity',
            ],
        ];

        foreach ($data as $category) {
            Category::updateOrCreate(
                ...array_chunk($category, 1, true)
            );
        }
    }
}
