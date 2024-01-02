<?php

namespace App\Repositories\General;

use App\Models\Article;
use App\Models\Category;

class ArticleRepository
{
    public function getAll()
    {
        $articles = fn () => Article::with(['categories', 'coverImage'])->latest()->paginate(12);
        $categories = Category::orderByName()->get();

        return compact('articles', 'categories');
    }

    public function show($id)
    {
        $article = Article::with(['categories', 'coverImage'])->findOrFail($id);

        return compact('article');
    }
}
