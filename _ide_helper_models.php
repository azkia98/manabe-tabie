<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\City
 *
 * @property-read \App\State $state
 * @method static \Illuminate\Database\Eloquent\Builder|\App\City newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\City newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\City query()
 */
	class City extends \Eloquent {}
}

namespace App{
/**
 * App\Option
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option gVWK($key)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Option query()
 */
	class Option extends \Eloquent {}
}

namespace App{
/**
 * App\Role
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $users
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role query()
 */
	class Role extends \Eloquent {}
}

namespace App{
/**
 * App\State
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\City[] $cities
 * @method static \Illuminate\Database\Eloquent\Builder|\App\State newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\State newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\State query()
 */
	class State extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Role[] $roles
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User query()
 */
	class User extends \Eloquent {}
}

namespace App{
/**
 * App\Member
 *
 * @property-read \App\City $city
 * @property-read mixed $education_pretty
 * @property-read mixed $full_name
 * @property-read mixed $typemember_pretty
 * @property-read \App\State $state
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member promoters()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member protectors()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member students()
 */
	class Member extends \Eloquent {}
}

