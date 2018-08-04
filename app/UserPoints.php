<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPoints extends Model
{
    protected $table = 'users_points';
    protected $fillable = [
      'user_id', 'points', 'hash'
    ];

    public function User () {
        return $this->hasOne('App\User', 'user_id', 'id');
    }
}
