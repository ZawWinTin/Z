<?php

namespace App\Http\Controllers\General;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\General\ArticleService;

class ArticleController extends Controller
{
    private $articleService;

    public function __construct(ArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index()
    {
        $data = $this->articleService->getAll();

        return Inertia::render('General/Article/Index', $data);
    }

    public function show($id)
    {
        $data = $this->articleService->show($id);

        return Inertia::render('General/Article/Show', $data);
    }
}
