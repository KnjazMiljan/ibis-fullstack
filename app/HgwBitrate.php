<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HgwBitrate extends Model
{
    public function macAddress() {
        return $this->belongsTo(MacAddress::class);
    }
}
