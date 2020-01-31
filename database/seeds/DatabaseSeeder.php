<?php

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(App\User::class)->create();
        $contracts = factory(App\Contract::class, 10)->create([
            'user_id' => $user->id
        ]);
        $macAddresses = new Collection();

        foreach ($contracts as $contract) {
            $macAddresses->add(factory(App\MacAddress::class)->create([
                'contract_id' => $contract->id
            ]));
        }

        foreach($macAddresses as $macAddress) {
            factory(App\HgwBitrate::class, 15)->create([ //change to 150 to test results on charts
                'mac_address_id' => $macAddress->id
            ]);

            factory(App\HgwRss::class, 15)->create([ //change to 150 to test results on charts
                'mac_address_id' => $macAddress->id
            ]);

            factory(App\HgwNumberOfRetransmissions::class, 15)->create([ //change to 150 to test results on charts
                'mac_address_id' => $macAddress->id
            ]);

            factory(App\HgwInterferenceNetworkRss::class, 15)->create([ //change to 150 to test results on charts
                'mac_address_id' => $macAddress->id
            ]);

            factory(App\HgwNumberOfClients::class, 15)->create([ //change to 150 to test results on charts
                'mac_address_id' => $macAddress->id
            ]);
        }
    }
}
