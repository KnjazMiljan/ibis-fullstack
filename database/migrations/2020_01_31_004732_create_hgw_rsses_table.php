<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHgwRssesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgw_rsses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('mac_address_id');
            $table->integer('maximum_dBm');
            $table->integer('average_dBm');
            $table->integer('minimum_dBm');
            $table->dateTime('occurrence_datetime');
            $table->timestamps();

            $table->foreign('mac_address_id')
                ->references('id')
                ->on('mac_addresses')
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
        Schema::dropIfExists('hgw_rsses');
    }
}
