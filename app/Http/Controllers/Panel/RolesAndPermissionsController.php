<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;
use App\Permission;

class RolesAndPermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->denied('permissions-and-roles');
        $roles = Role::all();
        return view('panel.roles.index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->denied('permissions-and-roles');
        $permissions = Permission::all();
        return view('panel.roles.create', compact('permissions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->denied('permissions-and-roles');
        // return $request->all();
        if (!$this->saveRole($request)) {
            alert()->error('نقش شما با موفقیت ثبت نشد!!');
            return redirect()->back();
        }
        alert()->success('نقش شما با موفقیت ثبت شد!');
        return redirect()->route('roles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $this->denied('permissions-and-roles');
        $role = Role::find($id);
        $permissions = Permission::all();
        return view('panel.roles.edit', compact('role', 'permissions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->denied('permissions-and-roles');
        $role = Role::find($id);
        if (!$this->saveRole($request,$role)) {
            alert()->error('نقش شما با موفقیت ثبت نشد!!');
            return redirect()->back();
        }

        alert()->success('نقش شما با موفقیت تغییر کرد!!');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $this->denied('permissions-and-roles');
        $role->delete();
        alert()->success('نقش مورد نظر با موفقیت حذف شد!!');
        return redirect()->back();
    }

    public function saveRole(Request $request,Role $role = null) 
    {
        $this->denied('permissions-and-roles');
        if($role == null)
        {
            $role = new Role();
        }
        $role->name = $request->name;
        $role->label = $request->label;
        if ($request->method() == "PATCH" or $request->method() == "PUT") {
            $role->update();
        } else {
            $role->save();
        }
        $role->permissions()->sync($request->permissions);
        return true;
    }

    public function showPermissions(){
        $this->denied('permissions-and-roles');
        $permissions = Permission::all();
        return view('panel.roles.index-permissions',compact('permissions'));
    }
}
