<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = ['id'];

    public function scopeGVWK($query,$key){
        $data = $query->where('key',$key)->first();
        return $data;
    }
}
