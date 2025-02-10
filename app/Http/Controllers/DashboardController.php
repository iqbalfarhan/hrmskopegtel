<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $absensi = Absensi::where([
            'tanggal' => date('Y-m-d'),
            'user_id' => auth()->user()->id,
        ])->first();

        return inertia('Dashboard/Index', [
            'absensi' => $absensi
        ]);
    }
}
