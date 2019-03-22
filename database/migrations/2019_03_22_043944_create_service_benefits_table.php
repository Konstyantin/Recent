<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceBenefitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_benefits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 45);
            $table->text('description');
            $table->unsignedInteger('service_id');
            $table->timestamps();

            $table->foreign('service_id')->references('id')->on('services')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_benefits');
    }
}
