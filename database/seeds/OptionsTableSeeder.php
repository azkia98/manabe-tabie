<?php

use Illuminate\Database\Seeder;
use App\Option;

class OptionsTableSeeder extends Seeder
{

    protected $datas = [
        [
            'key'=> 'expiry-date',
            'value' => 'سه سال پس از تاریخ صدور',
        ],
        [
            'key'=>'local-phone',
            'value'=>'34130634-7',
        ],
        [
            'key' => 'fax',
            'value' => '۳۴۱۶۰۶۳۱'
        ]
        ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->datas as $data) {
            Option::create($data);
        }
    }
}
