<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\MacAddress;
use Faker\Generator as Faker;

$factory->define(MacAddress::class, function (Faker $faker) {
    return [
        'contract_id' => 1,
        'is_wifi_enabled' => $faker->boolean,
        'hgw_standard' => '802.11b',
        'ip_address' => $faker->ipv4,
        'mac_address' => $faker->macAddress,
        'is_auto_channel_enabled' => $faker->boolean,
        'ssid'  => $faker->shuffleString('ibis') . '-wifi',
        'channel' => $faker->numberBetween(1, 13),
        'security' => 'WPA/WPA2-PSK',
        'band'    => '2,4 GHz',
        'is_hidden_ssd' => $faker->boolean,
        'bandwith' => '22 MHz',
        'up_time' => '(' . $faker->numberBetween(25000, 45000).') '. $faker->numberBetween(2, 5) . ' days, 19:04:10',
        'equipment' => 'ABC',
        'description' => 'modem',
        'cmts_id'   => 'BG-C-1-IBIS',
        'firmware'  => '2.2.1004.76'
    ];
});
