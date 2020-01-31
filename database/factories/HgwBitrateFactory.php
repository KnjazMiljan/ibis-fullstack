<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HgwBitrate;
use Faker\Generator as Faker;

$factory->define(HgwBitrate::class, function (Faker $faker) {
    return [
        'maximum_Mbps' => $faker->numberBetween(151, 200),
        'average_Mbps' => $faker->numberBetween(101, 150),
        'minimum_Mbps' => $faker->numberBetween(10, 100),
        'occurrence_datetime' => $faker->dateTimeThisMonth()
    ];
});
