<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory, LogActivityTrait;
     protected $fillable = [
        'full_name',
        'user_id',
        'screen_name',
        'home_town',
        'countries_id',
        'hourly_rate',
        'completed_tran',
        'whatsapp_number',
        'whatsapp_status',
        'facebook_id',
        'facebook_status',
        'skype_id',
        'skype_status',
        'zoom_id',
        'zoom_status',
        'website',
        'header_image',
        'headline',
        'language',
        'overview'
    ];
    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
