<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ErrorController extends Controller
{
    public function error404()
    {
        return Inertia::render('Errors/404');
    }
}
