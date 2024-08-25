<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory, LogActivityTrait;

    protected $fillable = ['job_categories_id','question','answer','status'];

     protected $table = 'faqs';

      public function category_detail(){

        return $this->belongsTo(JobCategory::class,'job_categories_id','id');
    }
}
