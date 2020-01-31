<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MacAddress extends Model
{
    public function contract() {
        return $this->belongsTo(Contract::class);
    }

    public function hgwBitrates() {
        return $this->hasMany(HgwBitrate::class);
    }

    public function hgwRss() {
        return $this->hasMany(HgwRss::class);
    }

    public function hgwNumberOfRetransmissions() {
        return $this->hasMany(HgwNumberOfRetransmissions::class);
    }

    public function hgwInterferenceNetworkRss() {
        return $this->hasMany(HgwInterferenceNetworkRss::class);
    }

    public function hgwNumberOfClients() {
        return $this->hasMany(HgwNumberOfClients::class);
    }
}
