<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\Admin\CategoryService;
use App\Http\Requests\Admin\CategorySaveRequest;
use App\Http\Requests\Admin\CategoryDeleteRequest;

class CategoryController extends Controller
{
    private $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        $categories = $this->categoryService->getAll();

        return Inertia::render('Admin/Category', ['categories' => $categories]);
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
}