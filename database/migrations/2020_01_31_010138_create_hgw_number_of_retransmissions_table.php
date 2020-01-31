<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHgwNumberOfRetransmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hgw_number_of_retransmissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('mac_address_id');
            $table->integer('bytes');
            $table->integer('retransmitted_bytes');
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
        Schema::dropIfExists('hgw_number_of_retransmissions');
    }
}
