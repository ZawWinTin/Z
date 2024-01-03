<?php

namespace App\Repositories\General;

use App\Models\Article;

class HomeRepository
{
    public function getAll()
    {
        $articles = Article::with(['categories', 'coverImage'])->latest()->limit(6)->get();

        return compact('articles');
    }
}
