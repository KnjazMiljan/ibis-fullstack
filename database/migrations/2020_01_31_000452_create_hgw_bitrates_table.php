<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHgwBitratesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgw_bitrates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('mac_address_id');
            $table->integer('maximum_Mbps');
            $table->integer('average_Mbps');
            $table->integer('minimum_Mbps');
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
        Schema::dropIfExists('hgw_bitrates');
    }
}
