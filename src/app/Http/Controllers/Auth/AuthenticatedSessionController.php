<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'isGeneralLogin' => (Route::currentRouteName() !== 'admin.login'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $isPasswordNeeded = $request->authenticate();

        if (!$isPasswordNeeded) {
            $request->session()->regenerate();

            return redirect()->intended(auth()->user()?->isAdmin() ? route('admin.dashboard') : route('home'))
                ->with('message', ['type' => 'auth', 'details' => 'Login Successful']);
        }

        return back();
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('message', ['type' => 'auth', 'details' => 'Logout Successful']);
    }
}
