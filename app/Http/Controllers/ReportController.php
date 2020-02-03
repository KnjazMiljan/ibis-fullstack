<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

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
        $resultSet = [];

        foreach ($contracts as $contract) {
            array_push($data, [
                'contractId' => $contract->id,
                'macAddress' => [
                    'value' => $contract->macAddress->mac_address,
                    'id' => $contract->macAddress->id
                ]
            ]);
        }

        return view('report', [
            'data' => $data,
            'resultSet' => $resultSet
        ]);
    }

    public function reports() {
        request()->validate([
            'macAddressId' => 'required|numeric',
        ],
        [
            'macAddressId.required' => 'Invalid Mac Address.',
            'macAddressId.numeric' => 'Invalid Mac Address.'
        ]);

        $data = [];
        $resultSet = [];
        $user = Auth::user();
        $contracts = $user->contracts;

        foreach ($contracts as $contract) {
            array_push($data, [
                'contractId' => $contract->id,
                'macAddress' => [
                    'value' => $contract->macAddress->mac_address,
                    'id' => $contract->macAddress->id
                ]
            ]);

            if ($contract->macAddress->id === intval(request()->get('macAddressId'))) {
                $macAddressObject = $contract->macAddress;
                // populate all the necessary data
                $resultSet['contract'] = $contract->toArray();
                $resultSet['oneDayActive'] = is_null(request()->get('isOneDayMode')) ? true : boolval(request()->get('isOneDayMode'));
            }
        }

        return view('report', [
            'data' => $data,
            'resultSet' => $resultSet
        ]);

    }

    /**
     * Validate the Mac Address ID.
     *
     * @param Request $request
     * @return void
     *
     */
    protected function validateMacAddressId(Request $request)
    {
        $request->validateWithBag('macAddressId',[
            'macAddressId' => 'required|numeric'
        ]);
    }
}
