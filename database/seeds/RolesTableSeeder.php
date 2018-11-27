<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\Permission;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $member_show_permission = Permission::where('name','member-show')->first();
        $member_delete_permission = Permission::where('name','member-delete')->first();
        $member_index_permission = Permission::where('name','member-index')->first();
        $member_update_permission = Permission::where('name','member-update')->first();
        $member_create_permission = Permission::where('name','member-create')->first();

        $role_user = new Role();
        $role_user->name = 'User';
        $role_user->label = 'A normal User';
        $role_user->save();
        $role_user->givePermissionTo($member_show_permission);

        $role_author = new Role();
        $role_author->name = 'Author';
        $role_author->label = 'An author';
        $role_author->save();
        $role_author->givePermissionTo($member_show_permission);


        $role_admin = new Role();
        $role_admin->name = 'Admin';
        $role_admin->label = 'An Admin';
        $role_admin->save();
        $role_admin->givePermissionTo($member_show_permission);
        $role_admin->givePermissionTo($member_create_permission);
        $role_admin->givePermissionTo($member_delete_permission);
        $role_admin->givePermissionTo($member_index_permission);
        $role_admin->givePermissionTo($member_update_permission);



    }
}
