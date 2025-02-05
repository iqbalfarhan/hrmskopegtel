<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Role/Index', [
            "roles" => Role::with('permissions')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles,name',
        ]);
        Role::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        return inertia('Role/Edit', [
            "role" => Role::with('permissions')->find($role->id),
            "permissions" => Permission::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required',
            'description' => '',
        ]);

        $role->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $role->delete();
    }

    public function assign(Request $request)
    {
        $request->validate([
            'role' => 'required',
            'permission' => 'required',
        ]);

        $role = Role::find($request->role);
        $permission = Permission::find($request->permission);

        if (!$role ||!$permission) {
            return response()->json(['message' => 'Role or Permission not found'], 404);
        }

        if($role->hasPermissionTo($permission)) {
            $role->revokePermissionTo($permission);
        }
        else{
            $role->givePermissionTo($permission);
        }
    }
}
