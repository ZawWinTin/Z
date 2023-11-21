<?php

namespace App\Services\Admin;

use App\Repositories\Admin\ArticleRepository;

class ArticleService
{
    private $articleRepository;

    public function __construct(ArticleRepository $articleRepository)
    {
        $this->articleRepository = $articleRepository;
    }

    public function getAll()
    {
        return $this->articleRepository->getAll();
    }
}
