<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\Admin\CategoryService;
use App\Http\Requests\Admin\CategorySaveRequest;
use App\Http\Requests\Admin\CategoryDeleteRequest;
use App\Http\Requests\Admin\CategoryRestoreRequest;

class CategoryController extends Controller
{
    private $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        $data = $this->categoryService->getAll();

        return Inertia::render('Admin/Category', $data);
    }

    public function save(CategorySaveRequest $request)
    {
        $this->categoryService->save($request);

        return to_route('admin.category.index');
    }

    public function destroy(CategoryDeleteRequest $request)
    {
        $this->categoryService->destroy($request);

        return to_route('admin.category.index');
    }

    public function restore(CategoryRestoreRequest $request)
    {
        $this->categoryService->restore($request);

        return to_route('admin.category.index');
    }
}
