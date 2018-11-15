<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $guarded =[];

    public function cities(){
        return $this->hasMany(City::class);
    }
}
