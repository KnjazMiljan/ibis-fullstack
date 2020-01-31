<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Contract;
use Faker\Generator as Faker;

$factory->define(Contract::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'city' => $faker->city,
    ];
});
