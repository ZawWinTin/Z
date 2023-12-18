<?php

namespace App\Services\General;

use Illuminate\Http\Request;
use App\Repositories\General\ContactRepository;

class ContactService
{
    private $contactRepository;

    public function __construct(ContactRepository $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function store(Request $request)
    {
        return $this->contactRepository->store($request);
    }
}
