<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::prefix(config('superadmin.auth.route_prefix'))->name('admin.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('login', [AuthenticatedSessionController::class, 'create'])
            ->name('login');
        Route::post('login', [AuthenticatedSessionController::class, 'store']);
    });

    Route::middleware('auth')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::match(['GET', 'POST'], '/articles', [ArticleController::class, 'index'])->name('article.index');
        Route::delete('/article', [ArticleController::class, 'destroy'])->name('article.destroy');
        Route::put('/article', [ArticleController::class, 'restore'])->name('article.restore');

        Route::get('/categories', [CategoryController::class, 'index'])->name('category.index');
        Route::post('/category', [CategoryController::class, 'save'])->name('category.save');
        Route::delete('/category', [CategoryController::class, 'destroy'])->name('category.destroy');
        Route::put('/category', [CategoryController::class, 'restore'])->name('category.restore');

        Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
            ->name('logout');
    });
});
