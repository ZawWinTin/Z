<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\HomeController;
use App\Http\Controllers\General\ArticleController;
use App\Http\Controllers\General\ContactController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/articles', [ArticleController::class, 'index'])->name('article.index');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
