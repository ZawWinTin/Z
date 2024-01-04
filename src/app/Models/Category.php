<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'text_color',
        'background_color',
    ];

    protected function textColor(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strtoupper($value),
        );
    }

    protected function backgroundColor(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strtoupper($value),
        );
    }

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    /**
     * The articles that belong to the category.
     */
    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class);
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('name', 'asc');
    }

    public function scopeOrderByUserLikes($query)
    {
        if (is_null($query->getQuery()->columns)) {
            $query->select($this->qualifyColumn('*'));
        }

        $query->addSelect(DB::raw('COUNT(likes.user_id) as liked_users_count'))
            ->leftJoin('article_category', 'categories.id', '=', 'article_category.category_id')
            ->leftJoin('articles', 'article_category.article_id', '=', 'articles.id')
            ->leftJoin('likes', 'articles.id', '=', 'likes.article_id')
            ->groupBy('categories.id')
            ->orderByDesc('liked_users_count');
    }
}
