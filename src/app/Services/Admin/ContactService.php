<?php

namespace App\Services\Admin;

use App\Repositories\Admin\ContactRepository;

class ContactService
{
    private $categoryRepository;

    public function __construct(ContactRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function getAll()
    {
        return $this->categoryRepository->getAll();
    }

    public function read($id)
    {
        return $this->categoryRepository->read($id);
    }

    public function unread($id)
    {
        return $this->categoryRepository->unread($id);
    }

    public function favorite($id)
    {
        return $this->categoryRepository->favorite($id);
    }
}
