<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomOffer extends Model
{
    use HasFactory, HasUuids, LogActivityTrait;

    public function message()
    {
        return $this->belongsTo(Message::class);
    }

    public function by(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function for(){
        return $this->belongsTo(User::class, 'created_for');
    }

    public function job(){
        return $this->belongsTo(Job::class);
    }
}
