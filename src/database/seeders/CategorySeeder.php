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
                'text_color' => '#48B0EE',
                'background_color' => '#48B0EE',
            ],
            [
                'id' => 2,
                'name' => 'Backend',
                'text_color' => '#FFFFFF',
                'background_color' => '#050301',
            ],
            [
                'id' => 3,
                'name' => 'Productivity',
                'text_color' => '#FF9809',
                'background_color' => '#FF9809',
            ],
        ];

        foreach ($data as $category) {
            Category::updateOrCreate(
                ['id' => $category['id']],
                [...$category]
            );
        }
    }
}
