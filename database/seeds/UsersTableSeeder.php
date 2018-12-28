<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $role_user = Role::where('name','User')->first();
        $role_author = Role::where('name','Author')->first();
        $role_admin = Role::where('name','Admin')->first();

        // factory(User::class)->create([
        //     'permission' => 1,
        //     'name' => 'نصرت الاه',
        //     'familyname' => 'اکبری',
        //     'email' => 'nosrat@gmail.com',
        // ]);
        // factory(User::class)->create([
        //     'permission' => 1,
        //     'name' => 'Mahdi',
        //     'familyname' => 'Ebrahimi',
        //     'email' => 'azkia@iran.ir',
        // ]);
        // factory(User::class, 15)->create();

        $admin = factory(User::class)->create([
            'name' => 'Mahdi',
            'familyname' => 'Admin',
            'email' => 'azkia@iran.ir',
            'admin' => true,
            'username' => 'azkia',
            'password' => bcrypt('12345')
        ]);
        $user = factory(User::class)->create([
            'name' => 'Nosi',
            'familyname' => 'User',
            'username' => 'nosi',
            'email' => 'Nosi@iran.ir',
            'administration' => true
        ]);
        $author = factory(User::class)->create([
            'name' => 'Mashhadi',
            'familyname' => 'author',
            'username' => 'mashhadi',
            'email' => 'Mashhadi@iran.ir'
        ]);

        $admin->roles()->attach($role_admin);
        $user->roles()->attach($role_admin);
        $author->roles()->attach($role_admin);


    }
}
