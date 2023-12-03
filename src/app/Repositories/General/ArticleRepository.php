<?php

namespace App\Repositories\General;

use App\Models\Article;
use App\Models\Category;

class ArticleRepository
{
    public function getAll()
    {
        $articles = Article::with(['categories'])->latest()->get();
        $categories = Category::orderByName()->get();

        return compact('articles', 'categories');
    }
}
