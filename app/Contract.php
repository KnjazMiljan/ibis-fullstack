<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function macAddress() {
        return $this->hasOne(MacAddress::class);
    }
}
