<?php

use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PerusahaanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect("/login");
});


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');

    Route::get('/setting', [SettingController::class, 'index'])->name('setting.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/absensi', AbsensiController::class);
    Route::resource('/perusahaan', PerusahaanController::class);
    Route::resource('/user', UserController::class);
    Route::resource('/permission', PermissionController::class);
    Route::post('/role/assign', [RoleController::class, 'assign'])->name('role.assign');
    Route::resource('/role', RoleController::class);
    Route::resource('/notification', NotificationController::class);
});

require __DIR__.'/auth.php';
