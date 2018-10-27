<?php

use Faker\Generator as Faker;

$factory->define(App\Member::class, function (Faker $faker) {
    return [
        'name'=> $faker->firstName,
        'familyname'=> $faker->lastName,
        'birthdate'=> $faker->date(),
        'nationalcode'=> "052165784".rand(1,9),
        'issuinglocal'=> 'اراک',
        'identitinumber'=> rand(555,9999999),
        'fathername'=> $faker->firstName,
        'address'=> $faker->address,
        'phonenumber'=> '09383904987',
        'education'=> rand(1,6),
        'job'=> 'بیکار',
        'issuingdate'=> $faker->date(),
        'picture'=> 'http://placehold.it/120x120&text='. $faker->firstName,
        'typemember'=> rand(1,3),
    ];
});
