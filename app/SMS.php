<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\SMS
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $messageid
 * @property string $sender
 * @property string $receptor
 * @property int $cost
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereMessageid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereReceptor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereSender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\SMS whereUpdatedAt($value)
 */
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
