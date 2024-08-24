<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use HasFactory,SoftDeletes, LogActivityTrait;

      protected $table = 'job';

    protected $fillable = ['job_categories_id','user_id','title','slug','description','min_price','max_price','price','visible_to','date_till','status'];

     public function user_detail(){
      return $this->belongsTo(User::class,'user_id')->with('profile_detail');
    }
}
