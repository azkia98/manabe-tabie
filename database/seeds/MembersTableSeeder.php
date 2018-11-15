<?php

use Illuminate\Database\Seeder;
use App\Member;
use App\State;

class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Member::class, 50)->create();
    }
}
