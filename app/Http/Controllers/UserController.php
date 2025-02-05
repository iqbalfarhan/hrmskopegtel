<?php

namespace App\Http\Controllers;

use App\Models\Perusahaan;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(User::with(['roles', 'perusahaan'])->first()->toJson());
        return inertia('User/Index', [
            'roles' => Role::get(),
            'perusahaans' => Perusahaan::get(),
            'users' => User::with(['roles', 'perusahaan'])->get(),
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
        $valid = $request->validate([
            "name" => 'required',
            "phone" => '',
            "email" => 'required',
            "password" => 'required|min:8',
            "role" => 'required',
            "perusahaan_id" => 'required',
        ]);

        $user = User::create([
            'name' => $valid['name'],
            'phone' => $valid['phone'],
            'email' => $valid['email'],
            'password' => $valid['password'],
            'perusahaan_id' => $valid['perusahaan_id'],
        ]);

        $user->assignRole($valid['role']);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return inertia('User/Show/Index', [
            'user' => User::with(['roles', 'perusahaan', 'absensis'])->find($user->id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit/Index', [
            'user' => User::with('roles')->find($user->id),
            'roles' => Role::get(),
            'perusahaans' => Perusahaan::get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $valid = $request->validate([
            "name" => 'required',
            "phone" => 'required',
            "email" => 'required',
            "role" => 'required',
            "perusahaan_id" => 'required',
        ]);

        $user->update([
            'name' => $valid['name'],
            'phone' => $valid['phone'],
            'email' => $valid['email'],
            'perusahaan_id' => $valid['perusahaan_id'] == 0 ? null : $valid['perusahaan_id'],
        ]);

        $user->syncRoles($valid['role']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
    }
}
