<?php

namespace App\Models;

use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory, LogActivityTrait;

      protected $fillable = ['user_id','job_id','proposal_content','status','price','time'];

     protected $table = 'proposals';
}
