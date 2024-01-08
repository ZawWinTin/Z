<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'content',
        'is_checked',
        'is_favorite',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'is_checked' => 'boolean',
        'is_favorite' => 'boolean',
    ];

    public function setRead($isRead = true)
    {
        $this->is_checked = $isRead;
        $this->update();
    }

    public function toggleFavorite()
    {
        $this->is_favorite = !$this->is_favorite;
        $this->update();
    }
}
