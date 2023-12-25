<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Services\Admin\ContactService;

class ContactController extends Controller
{
    private $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    public function index()
    {
        $data = $this->contactService->getAll();

        return Inertia::render('Admin/Contact', $data);
    }

    public function read($id)
    {
        $this->contactService->read($id);

        return to_route('admin.contact.index');
    }

    public function unread($id)
    {
        $this->contactService->unread($id);

        return to_route('admin.contact.index');
    }

    public function favorite($id)
    {
        $this->contactService->favorite($id);

        return to_route('admin.contact.index');
    }
}
