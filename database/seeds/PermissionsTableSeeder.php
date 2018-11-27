<?php

use Illuminate\Database\Seeder;
use App\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
            'name' => 'member-update',
            'label' => 'قابلیت تغییر همیار'
        ]);
        Permission::create([
            'name' => 'member-show',
            'label' => 'قابلیت دیدن همیار'
        ]);
        Permission::create([
            'name' => 'member-delete',
            'label' => 'قابلیت حذف کردن همیار'
        ]);
        Permission::create([
            'name' => 'member-index',
            'label' => 'قابلیت دیدن تمام همیاران'
        ]);
        Permission::create([
            'name' => 'member-create',
            'label' => 'قابلیت ساخت همیار'
        ]);
    }
}
