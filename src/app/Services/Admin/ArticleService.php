<?php

namespace App\Services\Admin;

use Illuminate\Http\Request;
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

    public function destroy(Request $request)
    {
        return $this->articleRepository->destroy($request);
    }

    public function restore(Request $request)
    {
        return $this->articleRepository->restore($request);
    }
}
