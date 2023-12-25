<?php

namespace App\Repositories\Admin;

use Exception;
use Throwable;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ContactRepository
{
    public function getAll()
    {
        $contacts = Contact::all();

        return compact('contacts');
    }

    public function read($id)
    {
        try {
            DB::beginTransaction();

            Contact::findOrFail($id)->setRead();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Contact set read failed.');
        }
    }

    public function unread($id)
    {
        try {
            DB::beginTransaction();

            Contact::findOrFail($id)->setRead(false);

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Contact set unread failed.');
        }
    }

    public function favorite($id)
    {
        try {
            DB::beginTransaction();

            Contact::findOrFail($id)->toggleFavorite();

            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();

            Log::error(__CLASS__ . '::' . __FUNCTION__ . '[line: ' . __LINE__ . ']Message: ' . $e->getMessage());

            throw new Exception('Contact set favorite failed.');
        }
    }
}
