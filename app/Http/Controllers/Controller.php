<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Gate;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * در این قسمت ما چک میکنیم که کاربر مورد نظر اجازه دسترسی داره یا نه :)
     */

    protected function denied($permission)
    {
        if (Gate::denies($permission)) {
            abort(403,'شما دسترسی به این صفحه ندارید :)');
        }
    }
}
