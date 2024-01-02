<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\HomeController;
use App\Http\Controllers\General\ArticleController;
use App\Http\Controllers\General\ContactController;
use App\Http\Controllers\General\ProfileController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/redirect/{view}', [HomeController::class, 'redirect'])->name('redirect');

Route::get('/articles', [ArticleController::class, 'index'])->name('article.index');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::middleware(['auth', 'verified', 'can:user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
