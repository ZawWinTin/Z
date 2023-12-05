<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Article extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'content',
    ];

    /**
     * The categories that belong to the article.
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class)->orderByPivot('priority', 'asc');
    }

    public function coverImage(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function scopeFilter($query, $filters)
    {
        if (isset($filters['active']) && $filters['active'] === false) {
            $query->onlyTrashed();
        }

        $query->when($filters['sortField'] ?? false, function ($query, $sortField) use ($filters) {
            $query->orderBy($sortField, $filters['sortOrder'] === 1 ? 'ASC' : 'DESC');
        });
    }
}
