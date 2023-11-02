<?php

namespace App\Services\General;

use App\Repositories\General\HomeRepository;

class HomeService
{
    private $homeRepository;

    public function __construct(HomeRepository $homeRepository)
    {
        $this->homeRepository = $homeRepository;
    }

    /**
     * Get mentorCount, questionCount, plans
     *
     * @return array
     */
    public function getAll()
    {
        return $this->homeRepository->getAll();
    }
}
