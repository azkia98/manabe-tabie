<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'permission' => 1,
            'name'=> 'نصرت الاه',
            'familyname'=> 'اکبری',
            'email'=> 'nosrat@gmail.com',
        ]);
        factory(User::class)->create([
            'permission' => 1,
            'name'=> 'Mahdi',
            'familyname'=> 'Ebrahimi',
            'email'=> 'azkia@iran.ir',
        ]);
        factory(User::class, 50)->create();
    }
}
