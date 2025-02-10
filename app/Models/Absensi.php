<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    /** @use HasFactory<\Database\Factories\AbsensiFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'tanggal', 'checkin', 'checkout', 'approved'];

    protected $appends = ['terlambat', 'completed', 'status'];

    protected function casts()
    {
        return [
            'checkin' => 'datetime',
            'checkout' => 'datetime',
            'approved' => 'boolean',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getTerlambatAttribute()
    {
        return false;
    }

    public function getCompletedAttribute()
    {
        return $this->checkin !== null && $this->checkout !== null;
    }

    public function getStatusAttribute()
    {
        if ($this->checkout) {
            return 'Check Out';
        } elseif ($this->approved) {
            return 'Diterima';
        } elseif ($this->checkin) {
            return 'Check In';
        } else {
            return 'Belum Check In';
        }
    }
}
