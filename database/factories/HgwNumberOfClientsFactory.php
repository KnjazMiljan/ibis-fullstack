<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\HgwNumberOfClients;
use Faker\Generator as Faker;

$factory->define(HgwNumberOfClients::class, function (Faker $faker) {
    return [
        'number_of_clients' => $faker->numberBetween(0, 20),
        'occurrence_datetime' => $faker->dateTimeThisMonth()
    ];
});
