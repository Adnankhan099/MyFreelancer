<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory, LogActivityTrait;

     protected $fillable = ['job_categories_id','name','icon','status'];

     protected $table = 'tags';

      public function category_detail(){

        return $this->belongsTo(JobCategory::class,'job_categories_id','id');
    }
}
