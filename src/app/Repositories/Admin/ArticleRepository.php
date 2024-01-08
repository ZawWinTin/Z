<?php

namespace App\Repositories\Admin;

use Exception;
use Throwable;
use App\Models\Article;
use App\Models\Category;
use App\Enums\SettingKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ArticleRepository
{
    public function getAll()
    {
        $articles = Article::with([
            'categories',
            'coverImage',
        ])
            ->filter(request([
                'global',
                'mode',
                'sortField',
                'sortOrder',
            ]))
            ->paginate(request('perPage', 10))->withQueryString();

        $categories = Category::withCount('articles')->withTrashed()->orderByName()->get();

        $categoryLimit = SettingRepository::getValueByName(SettingKey::CATEGORY_LIMIT);

        return compact('articles', 'categories', 'categoryLimit');
    }

    public function save(Request $request)
    {
        try {
            DB::beginTransaction();

            $article = Article::updateOrCreate(
                ['id' => $request->id],
                [
                    'title' => $request->title,
                    'description' => $request->description,
                    'content' => $request->content,
                ],
            );
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Article saved failed.');
        }
    }

    public function destroy(Request $request)
    {
        try {
            DB::beginTransaction();

            Article::findOrFail($request->id)->delete();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Article deleted failed.');
        }
    }

    public function restore(Request $request)
    {
        try {
            DB::beginTransaction();

            Article::onlyTrashed()->findOrFail($request->id)->restore();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Article restored failed.');
        }
    }
}
