<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Message extends Model
{
    use HasFactory, LogActivityTrait;

    protected $fillable = ['user_id', 'content'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function conversation(){
        return $this->belongsTo(Conversation::class);
    }

    public function custom_offer()
    {
        return $this->hasOne(CustomOffer::class, 'message_id', 'id');
    }

}
