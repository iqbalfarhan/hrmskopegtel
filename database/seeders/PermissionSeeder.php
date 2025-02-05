<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            "user",
            "role",
            "permission",
            "perusahaan",
            "absensi",
        ];

        $partials = [
            "index",
            "create",
            "edit",
            "delete",
            "show"
        ];

        foreach($permissions as $permission) {
            foreach($partials as $partial) {
                $permit = Permission::updateOrCreate([
                    'name' => $partial." ".$permission,
                    'group' => $permission
                ]);

                $permit->assignRole('superadmin');
            }
        }
    }
}
