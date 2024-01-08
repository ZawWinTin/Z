<?php

namespace App\Repositories\General;

use App\Models\User;
use App\Models\Article;

class HomeRepository
{
    public function getAll()
    {
        $name = User::admin()->first()->name;
        $articles = Article::with(['categories', 'coverImage'])->latest()->limit(6)->get();

        return compact('name', 'articles');
    }
}
