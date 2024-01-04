<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\User;
use App\Models\Article;
use App\Models\Contact;
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
        $usersCount = 5;

        Contact::factory(15)->create();

        $users = User::factory($usersCount)->create();

        $categories = Category::factory($categoriesCount)->create();

        $articles = Article::factory($articlesCount)->create();

        $articles->each(function ($article) use ($users, $usersCount, $categories, $faker) {
            $imageTopDownPercent = rand(0, 100);

            $article->coverImage()->create([
                'name' => $faker->text(10),
                'path' => '/image/fake_photo.png',
                'url' => $faker->imageUrl(640, 480, "Article {$article->id}", true),
                'mime_type' => 'image/png',
                'file_size' => '100 bytes',
                'object_position' => "center {$imageTopDownPercent}%",
            ]);

            $randomCategories = $categories->random(rand(1, 5))->shuffle();
            $randomCategories->each(function ($category, $priority) use ($article) {
                $article->categories()->save(
                    $category,
                    ['priority' => $priority]
                );
            });

            $randomUsers = $users->random(rand(0, 2) ? rand(1, $usersCount) : 0)->shuffle();
            if ($randomUsers->count() > 0) {
                $randomUsers->each(function ($user) use ($article) {
                    $article->liked_users()->save($user);
                });
            }
        });
    }
}
