<?php

namespace App\Repositories\Admin;

use App\Models\Article;
use App\Models\Category;

class ArticleRepository
{
    public function getAll()
    {
        $activeArticles = Article::with(['categories'])->latest()->get();
        $deletedArticles = Article::with(['categories'])->latest()->onlyTrashed()->get();

        $categories = Category::withCount('articles')->orderByName()->get();

        return compact('activeArticles', 'deletedArticles', 'categories');
    }
}
