<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\General\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
