<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt(12345),
        'remember_token' => str_random(10),
        'familyname'=> $faker->lastName,
        'username'=> $faker->userName,
        'permission'=> 2,
        'sign'=>  'http://placehold.it/120x120&text=sign',
        'state_id' => 28,
        'city_id' => 416
    ];
});