<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perusahaan extends Model
{
    /** @use HasFactory<\Database\Factories\PerusahaanFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'email',
        'phone',
        'logo'
    ];

    protected $appends = [
        'photo'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function getPhotoAttribute()
    {
        return "https://api.dicebear.com/9.x/identicon/svg?seed=$this->name";
    }
}
