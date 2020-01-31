<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMacAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mac_addresses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('contract_id');
            $table->tinyInteger('is_wifi_enabled');
            $table->string('hgw_standard');
            $table->string('ip_address');
            $table->string('mac_address');
            $table->tinyInteger('is_auto_channel_enabled');
            $table->string('ssid');
            $table->integer('channel');
            $table->string('security');
            $table->string('band');
            $table->tinyInteger('is_hidden_ssd');
            $table->string('bandwith');
            $table->string('up_time');
            $table->string('equipment');
            $table->string('description');
            $table->string('cmts_id');
            $table->string('firmware');
            $table->timestamps();

            $table->foreign('contract_id')
                ->references('id')
                ->on('contracts')
                ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mac_addresses');
    }
}
