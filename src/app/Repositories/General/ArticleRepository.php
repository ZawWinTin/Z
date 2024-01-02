<?php

namespace App\Repositories\General;

use App\Models\Article;
use App\Models\Category;

class ArticleRepository
{
    public function getAll()
    {
        $articles = Article::with(['categories', 'coverImage'])->latest()->get();
        $categories = Category::orderByName()->get();

        return compact('articles', 'categories');
    }

    public function show($id)
    {
        $article = Article::with(['categories', 'coverImage'])->findOrFail($id);

        return compact('article');
    }
}
