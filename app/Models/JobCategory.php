<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobCategory extends Model
{
    use HasFactory, LogActivityTrait;
    protected $table = 'job_categories';

    protected $fillable = ['parent_id','name','status','icon','slug','banner'];


    public function parentDetail(){

        return $this->belongsTo(JobCategory::class,'parent_id','id');
    }
    public function child_categories(){

        return $this->hasMany(JobCategory::class,'parent_id')->with('sub_child_categories');
    }

     public function sub_child_categories(){

        return $this->hasMany(JobCategory::class,'parent_id');
    }
}
