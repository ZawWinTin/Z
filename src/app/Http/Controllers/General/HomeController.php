<?php

namespace App\Http\Controllers\General;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\General\HomeService;

class HomeController extends Controller
{
    private $homeService;

    public function __construct(HomeService $homeService)
    {
        $this->homeService = $homeService;
    }

    public function index()
    {
        $data = $this->homeService->getAll();

        return Inertia::render('General/Home/Index', $data);
    }

    public function redirect(Request $request)
    {
        switch ($request->view) {
            case 'about':
            case 'contact':
                return to_route('home')->with('view', $request->view);
            default:
                return to_route('home');
        }
    }
}
