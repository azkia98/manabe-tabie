<?php

use Illuminate\Database\Seeder;
use App\State;
use App\City;

class CitiesAndStatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $str = file_get_contents(storage_path('iranstates.json'));
        $states = json_decode($str);
        foreach ($states as $state => $cities) {
            
            $state = State::create([
                'name' => $state
            ]);

            foreach ($cities as $city) {
                $state->cities()->create(['name'=> $city]);
            }
        }
    }
}
