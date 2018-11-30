<?php

namespace App\Http\Controllers\Panel;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->denied('users-index');
        $users = User::paginate(10);
        return view('panel.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->denied('users-create');
        $roles = Role::all();
        return view('panel.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->denied('users-create');
        $request->validate([
            'name' => 'required',
            'familyname' => 'required',
            'username' => 'required',
            'email' => 'required|unique:users',
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->familyname = $request->familyname;
        $user->username = $request->username;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        $user->roles()->attach($request->roles);
        alert()->success('کاربر شما با موفقیت ثبت شد!');
        return redirect()->route('users.index');
        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $this->denied('users-show');
        return view('panel.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $this->denied('users-update');
        $roles = Role::all();
        return view('panel.users.edit', compact('user','roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->denied('users-update');
        $request->validate([
            'name' => 'required',
            'familyname' => 'required',
            'username' => 'required',
            'email' => 'required',
        ]);
        if ($request->password !== null)
            $user->password = bcrypt($request->password);
        $user->name = $request->name;
        $user->familyname = $request->familyname;
        $user->username = $request->username;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->roles()->sync($request->roles);
        alert()->success('اطلاعات کاربر شما با موفقیت تغییر کرد', 'تغییر کرد!');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $this->denied('users-delete');
        return $user;
    }
}
