<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\User;
use App\Member;
use App\Policies\MemberPolicy;
use App\Permission;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Member::class => MemberPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function($user,$ability){
            if($user->isSuperAdmin())
                return true; 
        });
        $this->acl();
    }

    protected function getPermissions()
    {
        return Permission::with('roles')->get();
    }


    protected function acl(){
        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            return ;
        }
        foreach ($this->getPermissions() as $permission) {
            Gate::define($permission->name, function ($user) use($permission) {
                return $user->hasRole($permission->roles);
            });
        }
    }
}
