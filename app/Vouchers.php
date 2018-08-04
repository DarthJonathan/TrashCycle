<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vouchers extends Model
{
    protected $table = 'vouchers';
    protected $fillable = [
      'name', 'images', 'promo'
    ];

    public $timestamps;
}
