<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\HomeController;
use App\Http\Controllers\General\ArticleController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/articles', [ArticleController::class, 'index'])->name('article.index');
