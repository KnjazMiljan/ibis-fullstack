<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContractController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAll() {
        $user = Auth::user();
        $contracts = $user->contracts;
        $data = [];

        foreach ($contracts as $contract) {
            array_push($data, [
                'contractId' => $contract->id,
                'macAddress' => $contract->macAddress->mac_address,
            ]);
        }

        return compact('data');
    }
}
