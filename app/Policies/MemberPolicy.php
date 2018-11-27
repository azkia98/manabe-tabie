<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Member;

class MemberPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Member $member)
    {
        // return $user->id == $post->id;
        return $user->owns($member);
    }
}
