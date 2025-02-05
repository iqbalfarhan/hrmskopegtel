<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            'superadmin',
            "admin",
            "karyawan"
        ];

        foreach($roles as $role) {
            Role::updateOrCreate([
                'name' => $role,
                'description' => fake()->sentences(2, true)
            ]);
        }
    }
}
