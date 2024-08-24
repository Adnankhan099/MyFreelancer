<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillBoard extends Model
{
    use HasFactory, HasUuids;

       protected $fillable = [
        'title',
        'job_categories_id',
        'sub_job_categories_id',
        'tags',
        'user_id',
        'price',
        'pricing_description',
        'img1',
        'img2',
        'img3',
        'video',
        'doc1',
        'doc2',
        'additional_details'
    ];

    public function user_detail(){
      return $this->belongsTo(User::class,'user_id')->with('profile_detail');
    }
}
