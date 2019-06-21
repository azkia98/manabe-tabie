<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Option
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option gVWK($key)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $key
 * @property string $value
 * @property string $label
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option whereValue($value)
 */
class Option extends Model
{
    protected $fillable = ['id'];

    /**
     * Get value with key
     *
     * @param [type] $query
     * @param [string] $key
     * @return void
     */
    public function scopeGVWK($query,string $key){
        $data = $query->where('key',$key)->first();
        return $data;
    }
}
