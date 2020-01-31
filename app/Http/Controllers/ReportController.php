<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller
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

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        $user = Auth::user();
        $contracts = $user->contracts;
        $data = [];

        foreach ($contracts as $contract) {
            array_push($data, [
                'contractId' => $contract->id,
                'macAddress' => $contract->macAddress->mac_address,
            ]);
        }

        return view('report', compact('data'));
//        return view('report');
    }
}
