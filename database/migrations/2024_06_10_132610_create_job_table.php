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
         Schema::create('job', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('job_categories_id')->nullable();
            $table->string('title', 512)->nullable();
            $table->string('slug', 512)->nullable();
            $table->foreignUuid('user_id')
                ->nullable()
                ->references('id')
                ->on('users');
            $table->text('description')->nullable();
            $table->text('countries')->nullable();
            $table->string('price', 512)->nullable();
            $table->string('min_price', 512)->nullable();
            $table->string('max_price', 512)->nullable();
            $table->string('visible_to', 512)->nullable();
            $table->date('date_till')->nullable();
            $table->foreignUuid('assigned_to')
                ->nullable()
                ->references('id')
                ->on('users');
            $table->string('status', 512)->nullable();
            $table->timestamps(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job');
    }
};
