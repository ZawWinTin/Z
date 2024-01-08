<?php

namespace App\Repositories\General;

use App\Models\Article;
use App\Models\Category;

class ArticleRepository
{
    public function getAll()
    {
        $articles = fn () => Article::with(['categories', 'coverImage'])
            ->filter(request([
                'categories',
            ]))->latest()->paginate(12)->withQueryString();
        $categories = Category::orderByUserLikes()->get();

        return compact('articles', 'categories');
    }

    public function show($id)
    {
        $article = Article::with(['categories', 'coverImage'])->findOrFail($id);
        $other_articles = Article::with(['categories', 'coverImage'])
            ->other($article)
            ->latest()
            ->limit(6)
            ->get();

        return compact('article', 'other_articles');
    }
}
