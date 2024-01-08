<?php

namespace App\Services\Admin;

use Illuminate\Http\Request;
use App\Repositories\Admin\CategoryRepository;

class CategoryService
{
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function getAll()
    {
        return $this->categoryRepository->getAll();
    }

    public function save(Request $request)
    {
        return $this->categoryRepository->save($request);
    }

    public function destroy(Request $request)
    {
        return $this->categoryRepository->destroy($request);
    }

    public function restore(Request $request)
    {
        return $this->categoryRepository->restore($request);
    }
}
