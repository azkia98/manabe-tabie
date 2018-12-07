<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SMS extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'sms';

    protected $fillable = ['messageid','sender','receptor','date','cost'];
}
