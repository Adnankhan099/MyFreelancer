<?php

namespace App\Models;

use App\Models\Profile;
use App\Traits\LogActivityTrait;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\UserAccountSetting;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;
use App\Notifications\EmailNotification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasUuids, LogActivityTrait;

    public static function boot() {
        parent::boot();

        static::deleting(function($user) {
            $user->profile()->delete();
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image',
        'email_verified_at',
        'phone_verified_at',
        'phone',
        'address',
        'country',
        'street',
        'city',
        'state',
        'zip',
        'time_zone',
        'skype'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
        * Get the user that owns the profile.
    */
    public function profile_detail( ){

        return $this->hasOne(Profile::class, 'user_id', 'id');
    }

    public function conversations(){

        return $this->hasMany(Conversation::class,'user_id');
    }


    /**
        * Get the user that owns the user account settings.
    */

    public function sendPasswordResetNotification($token)
    {

       $userRoles = $this->getRoleNames()->toArray();



        $email_template = EmailTemplate::select('content','role')
        ->where(['type' => 'reset_password' , 'status' => 'active', 'role' => $userRoles[0]])->latest()->first();

        if(!empty($email_template)){
            $template_data =  unserialize($email_template->content);
            $params = array();
            $params['template_type']    = 'reset_password';
            $params['email_params'] = array(
                'user_name'             => '',
                'account_email'         => $this->email,
                'token'                 => $token,
                'email_subject'         => !empty($template_data['subject']) ?   $template_data['subject'] : '',
                'email_greeting'        => !empty($template_data['greeting']) ?  $template_data['greeting'] : '',
                'email_content'         => !empty($template_data['content']) ?   $template_data['content'] : '',
            );

            try {
                $this->notify(new EmailNotification($params));
            } catch (\Exception $e) {
                $e->getMessage();
            }
        }
    }
}
