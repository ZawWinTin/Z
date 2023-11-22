<?php

namespace App\Repositories\Admin;

use App\Models\Category;

class CategoryRepository
{
    public function getAll()
    {
        return Category::all();
    }
}
