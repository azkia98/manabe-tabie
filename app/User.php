<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     * 
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function isSuperAdmin()
    {
        if ($this->admin == true || $this->admin == 1) {
            return true;
        }
        return false;
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function members()
    {
        return $this->belongsToMany(Member::class);
    }


    public function owns($relation)
    {
        return $this->id == $relation->user_id;
    }

    public function assignRole(Role $role){
        return $this->roles()->save(
            Role::whereName($role)->firstOrFail()
        );
    }


    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name',$role);
        }

        foreach($role as $r)
        {
            if($this->hasRole($r->name)){
                return true;
            }
        }

        return false;
    }

    public function city(){
        return $this->belongsTo(City::class);
    }

    public function state(){
        return $this->belongsTo(State::class);
    }


}