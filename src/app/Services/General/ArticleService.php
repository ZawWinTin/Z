<?php

namespace App\Services\General;

use App\Repositories\General\ArticleRepository;

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

    public function show($id)
    {
        return $this->articleRepository->show($id);
    }
}
