<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\Admin\SettingService;
use App\Http\Requests\Admin\SettingSaveRequest;

class SettingController extends Controller
{
    private $settingService;

    public function __construct(SettingService $settingService)
    {
        $this->settingService = $settingService;
    }

    public function index()
    {
        $data = $this->settingService->getAll();

        return Inertia::render('Admin/Setting', $data);
    }

    public function save(SettingSaveRequest $request)
    {
        $this->settingService->save($request);

        return to_route('admin.setting.index');
    }
}
