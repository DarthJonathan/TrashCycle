<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecycleBins extends Model
{
    protected $table = 'recycle_bins';
    protected $fillable = [
      'trash_uuid', 'access_id', 'position', 'network_information'
    ];
}
