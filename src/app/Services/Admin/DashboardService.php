<?php

namespace App\Services\Admin;

use App\Repositories\Admin\DashboardRepository;

class DashboardService
{
    private $dashboardRepository;

    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
    }

    public function getAll()
    {
        return $this->dashboardRepository->getAll();
    }
}
