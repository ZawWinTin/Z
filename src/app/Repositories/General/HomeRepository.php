<?php

namespace App\Repositories\General;

use App\Models\Article;

class HomeRepository
{
    public function getAll()
    {
        $articles = Article::with(['categories', 'coverImage'])->latest()->limit(3)->get();

        return compact('articles');
    }
}
