<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ErrorController extends Controller
{
    public function error404()
    {
        return Inertia::render('Error', ['status' => 404, 'showFooter' => false]);
    }
}
