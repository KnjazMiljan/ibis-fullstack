<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HgwRss;
use Faker\Generator as Faker;

$factory->define(HgwRss::class, function (Faker $faker) {
    return [
        'maximum_dBm' => $faker->numberBetween(10, 100),
        'average_dBm' => $faker->numberBetween(101, 150),
        'minimum_dBm' => $faker->numberBetween(151, 200),
        'occurrence_datetime' => $faker->dateTimeThisMonth()
    ];
});
