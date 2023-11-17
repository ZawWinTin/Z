<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ErrorController;

Route::get('/404', [ErrorController::class, 'error404'])->name('error404');

// Route Not Found
Route::any('{url}', function () {
    return redirect('/404');
})->where('url', '.*');
