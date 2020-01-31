<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HgwNumberOfRetransmissions;
use Faker\Generator as Faker;

$factory->define(HgwNumberOfRetransmissions::class, function (Faker $faker) {
    return [
        'bytes' => $faker->numberBetween(150000, 175000),
        'retransmitted_bytes' => $faker->numberBetween(75000, 100000),
        'occurrence_datetime' => $faker->dateTimeThisMonth()
    ];
});
