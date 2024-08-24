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
         Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->references('id')->on('users');
            $table->string('header_image', 256)->nullable();
            $table->string('header_photo', 256)->nullable();
            $table->string('full_name', 256)->nullable();
            $table->string('screen_name', 256)->nullable();
            $table->string('home_town', 256)->nullable();
            $table->bigInteger('countries_id')->nullable();
            $table->string('hourly_rate', 256)->nullable();
            $table->string('completed_tran', 256)->nullable();
            $table->string('whatsapp_number', 256)->nullable();
            $table->tinyInteger('whatsapp_status')->nullable();
            $table->string('facebook_id', 256)->nullable();
            $table->tinyInteger('facebook_status')->nullable();
            $table->string('skype_id', 256)->nullable();
            $table->tinyInteger('skype_status')->nullable();
            $table->string('zoom_id', 256)->nullable();
            $table->tinyInteger('zoom_status')->nullable();
            $table->string('website', 256)->nullable();
            $table->timestamps(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
