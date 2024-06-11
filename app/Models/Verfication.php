<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verfication extends Model
{
    use HasFactory;

     protected $fillable = [
        'accountType',
        'users_id',
        'accountInfo',
        'first_name',
        'last_name',
        'address',
        'countries_id',
        'street',
        'city_state_zip',
        'current_photo',
        'gov_id_front',
        'gov_id_back',
        'gov_id_type',
        'address_proof',
        'adreess_proof_type'
    ];

     public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}


