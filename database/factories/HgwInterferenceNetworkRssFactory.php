<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HgwInterferenceNetworkRss;
use Faker\Generator as Faker;

$factory->define(HgwInterferenceNetworkRss::class, function (Faker $faker) {
    return [
        'maximum_dBm' => $faker->numberBetween(10, 100),
        'average_dBm' => $faker->numberBetween(101, 150),
        'occurrence_datetime' => $faker->dateTimeThisMonth()
    ];
});
