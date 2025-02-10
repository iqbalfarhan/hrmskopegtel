<?php

namespace App\Http\Controllers;

use App\Models\Perusahaan;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class PerusahaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        return inertia('Perusahaan/Index', [
            'perusahaans' => Perusahaan::with('users')->get(),
            'permissions' => [
                'canCreatePerusahaan' => $user->can('create perusahaan'),
                'canUpdatePerusahaan' => $user->can('edit perusahaan'),
                'canDeletePerusahaan' => $user->can('delete perusahaan'),
            ]
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
        $validated = $request->validate([
            "name" => 'required|string|max:255',
            "address" => "required|string|max:255",
            "logo" => "string|max:255",
            "email" => "string|max:255|email",
            "phone" => "string|max:255",
        ]);
        Perusahaan::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Perusahaan $perusahaan)
    {
        return inertia('Perusahaan/Show/Index', [
            'perusahaan' => Perusahaan::with('users')->find($perusahaan->id),
            'roles' => Role::get(),
            'users' => User::with('perusahaan')->where('perusahaan_id', $perusahaan->id)->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Perusahaan $perusahaan)
    {
        return inertia('Perusahaan/Edit/Index', [
            'perusahaan' => $perusahaan,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Perusahaan $perusahaan)
    {
        $validated = $request->validate([
            "name" => 'required|string|max:255',
            "address" => "required|string|max:255",
            "logo" => "string|max:255",
            "email" => "string|max:255|email",
            "phone" => "string|max:255",
        ]);

        $perusahaan->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Perusahaan $perusahaan)
    {
        $perusahaan->delete();
    }
}
