<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\Admin\ArticleService;
use App\Http\Requests\Admin\ArticleSaveRequest;
use App\Http\Requests\Admin\ArticleDeleteRequest;
use App\Http\Requests\Admin\ArticleRestoreRequest;

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

        return Inertia::render('Admin/Article', $data);
    }

    public function save(ArticleSaveRequest $request)
    {
        $this->articleService->save($request);

        return to_route('admin.article.index');
    }

    public function destroy(ArticleDeleteRequest $request)
    {
        $this->articleService->destroy($request);

        return to_route('admin.article.index');
    }

    public function restore(ArticleRestoreRequest $request)
    {
        $this->articleService->restore($request);

        return to_route('admin.article.index');
    }
}
