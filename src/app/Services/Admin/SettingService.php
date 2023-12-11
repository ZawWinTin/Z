<?php

namespace App\Services\Admin;

use Illuminate\Http\Request;
use App\Repositories\Admin\SettingRepository;

class SettingService
{
    private $settingRepository;

    public function __construct(SettingRepository $settingRepository)
    {
        $this->settingRepository = $settingRepository;
    }

    public function getAll()
    {
        return $this->settingRepository->getAll();
    }

    public function save(Request $request)
    {
        return $this->settingRepository->save($request);
    }
}
