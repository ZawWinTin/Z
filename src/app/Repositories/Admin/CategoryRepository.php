<?php

namespace App\Repositories\Admin;

use Exception;
use Throwable;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CategoryRepository
{
    public function getAll()
    {
        $activeCategories = Category::all();
        $deletedCategories = Category::onlyTrashed()->get();

        return compact('activeCategories', 'deletedCategories');
    }

    public function save(Request $request)
    {
        try {
            DB::beginTransaction();

            Category::updateOrCreate(
                ['id' => $request->id],
                [
                    'name' => $request->name,
                    'text_color' => $request->text_color,
                    'background_color' => $request->background_color,
                ],
            );
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Category updated failed.');
        }
    }

    public function destroy(Request $request)
    {
        try {
            DB::beginTransaction();

            Category::findOrFail($request->id)->delete();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Category deleted failed.');
        }
    }

    public function restore(Request $request)
    {
        try {
            DB::beginTransaction();

            Category::onlyTrashed()->findOrFail($request->id)->restore();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Category restored failed.');
        }
    }
}
