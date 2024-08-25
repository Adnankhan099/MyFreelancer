<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('verfications', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->string('accountType', 256)->nullable();
            $table->string('accountInfo', 256)->nullable();
            $table->string('first_name', 256)->nullable();
            $table->string('last_name', 256)->nullable();
            $table->string('address', 256)->nullable();
            $table->bigInteger('countries_id')->nullable();
            $table->string('street', 256)->nullable();
            $table->string('city_state_zip', 512)->nullable();
            $table->string('current_photo', 256)->nullable();
            $table->string('gov_id_front', 256)->nullable();
            $table->string('gov_id_back', 256)->nullable();
            $table->string('gov_id_type', 256)->nullable();
            $table->string('address_proof', 256)->nullable();
            $table->string('adreess_proof_type', 256)->nullable();
            $table->timestamps(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verfications');
    }
};
