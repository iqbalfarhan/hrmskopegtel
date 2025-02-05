<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    /** @use HasFactory<\Database\Factories\AbsensiFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'tanggal', 'checkin', 'checkout', 'approved'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
