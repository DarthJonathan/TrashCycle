<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'products';
    protected $fillable = [
        'product_variation_id', 'owner_id', 'trash_id', 'barcode_hash', 'position_information'
    ];

    public function Product () {
        return $this->hasOne('App\ProductVariation', 'product_variation_id', 'id');
    }

    public function Owner() {
        return $this->hasOne('App\User', 'owner_id', 'id');
    }
}
