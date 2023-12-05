<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Database\Seeder;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();

        $categoriesCount = 8;
        $articlesCount = 23;

        $categories = Category::factory($categoriesCount)->create();

        $articles = Article::factory($articlesCount)->create();

        $articles->each(function ($article) use ($categories, $faker) {
            $article->coverImage()->create([
                'name' => $faker->text(10),
                'path' => '/image/fake_photo.png',
                'url' => $faker->imageUrl(640, 480, "Article {$article->id}", true),
                'mime_type' => 'image/png',
                'file_size' => '100 bytes',
            ]);

            $randomCategories = $categories->random(rand(1, 5))->shuffle();
            $randomCategories->each(function ($category, $priority) use ($article) {
                $article->categories()->save(
                    $category,
                    ['priority' => $priority]
                );
            });
        });
    }
}
