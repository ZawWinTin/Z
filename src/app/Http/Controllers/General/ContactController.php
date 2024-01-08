<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Services\General\ContactService;
use App\Http\Requests\General\ContactStoreRequest;

class ContactController extends Controller
{
    private $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function store(ContactStoreRequest $request)
    {
        $this->contactService->store($request);

        return back();
    }
}
