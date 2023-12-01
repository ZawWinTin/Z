<?php

namespace Database\Seeders;

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
        $categoriesCount = 8;
        $articlesCount = 20;

        $categories = Category::factory($categoriesCount)->create();

        $articles = Article::factory($articlesCount)->create();

        $articles->each(function ($article) use ($categories) {
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
