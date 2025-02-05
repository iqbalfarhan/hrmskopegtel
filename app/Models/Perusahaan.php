<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perusahaan extends Model
{
    /** @use HasFactory<\Database\Factories\PerusahaanFactory> */
    use HasFactory;

    protected $fillable = ['name', 'address', 'email', 'phone', 'logo'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
