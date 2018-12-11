<?php

use Illuminate\Database\Seeder;
use App\Permission;

class PermissionsTableSeeder extends Seeder
{
    public $permissions;

    public function __construct()
    {
        $this->seedPermissionsData();
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->permissions as $permission) {
            Permission::create($permission);
        }
    }


    public function seedPermissionsData()
    {
        $this->permissions = [
            [
                'name' => 'members-update',
                'label' => 'قابلیت تغییر همیار'
            ],
            [
                'name' => 'members-show',
                'label' => 'قابلیت دیدن همیار'
            ],
            [
                'name' => 'members-delete',
                'label' => 'قابلیت حذف کردن همیار'
            ],
            [
                'name' => 'members-index',
                'label' => 'قابلیت دیدن تمام همیاران'
            ],
            [
                'name' => 'members-create',
                'label' => 'قابلیت ساخت همیار'
            ],
            [
                'name' => 'users-update',
                'label' => 'قابلیت تغییر کاربر'
            ],
            [
                'name' => 'users-show',
                'label' => 'قابلیت دیدن کاربر'
            ],
            [
                'name' => 'users-delete',
                'label' => 'قابلیت حذف کردن کاربر'
            ],
            [
                'name' => 'users-index',
                'label' => 'قابلیت دیدن تمام کاربران'
            ],
            [
                'name' => 'users-create',
                'label' => 'قابلیت ساخت کاربر'
            ],
            [
                'name' => 'excel-import',
                'label' => 'قابلیت وارد کردن اطلاعات از طریق فایل اکسل'
            ],
            [
                'name' => 'excel-export',
                'label' => 'قابلیت خروجی گرفتن از اکسل'
            ],
            [
                'name' => 'options',
                'label' => 'دسترسی به قسمت تنظیمات'
            ],
            [
                'name' => 'cards',
                'label' => 'قابلیت گرفتن خروجی کارت برای کاربر'
            ],
            [
                'name' => 'permissions-and-roles',
                'label' => 'قابلیت مدیریت دسترسی ها'
            ],
            [
                'name' => 'sms',
                'label' => 'قابلیت ارسال و دریافت پیام و دیدن تاریخچه پیام ها'
            ],
        ];
    }


}
