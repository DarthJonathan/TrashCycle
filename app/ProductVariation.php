<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductVariation extends Model
{
    protected $table = 'product_variation';
    protected $fillable = [
        'vendor_id', 'product_info'
    ];

    public function Vendor() {
        return $this->hasOne('App\Vendors', 'vendor_id', 'id');
    }
}
