<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Traits\HasRoles;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('superadmin')
        ]);

        $superadmin->assignRole('superadmin');

        $admin = User::create([
            'name' => 'Administrator',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
            'perusahaan_id' => 1
        ]);

        $admin->assignRole('admin');

        $admin = User::create([
            'name' => 'Contoh user',
            'email' => 'user@gmail.com',
            'password' => bcrypt('user'),
            'perusahaan_id' => 1
        ]);

        $admin->assignRole('karyawan');

        User::factory(10)->create()->each(function ($user) {
            $user->assignRole('karyawan');
        });
    }
}
