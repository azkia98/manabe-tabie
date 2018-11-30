<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\User;
use App\Member;
use App\Policies\MemberPolicy;
use App\Permission;

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
        foreach ($this->getPermissions() as $permission) {
            Gate::define($permission->name, function ($user) use($permission) {
                return $user->hasRole($permission->roles);
            });
        }
    }
}
