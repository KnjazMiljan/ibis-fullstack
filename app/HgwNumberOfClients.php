<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HgwNumberOfClients extends Model
{
    public function macAddress() {
        return $this->belongsTo(MacAddress::class);
    }
}
