<?php

namespace App\Repositories\General;

use Exception;
use Throwable;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ContactRepository
{
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            Contact::create($request->only('name', 'email', 'content'));

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Content stored failed.');
        }
    }
}
