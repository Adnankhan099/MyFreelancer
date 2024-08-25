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
        $payment_type = ['single', 'milestone'];
        Schema::create('custom_offers', function (Blueprint $table) use ($payment_type) {
            $table->uuid('id')->primary();
            $table->foreignUuid('created_by')
                ->references('id')
                ->on('users');
            $table->foreignUuid('created_for')
                ->references('id')
                ->on('users');
            $table->foreignUuid('billboard_id')
                ->references('id')
                ->on('bill_boards');
            $table->integer('duration_in_days');
            $table->string('title');
            $table->enum('payment_type', $payment_type);
            $table->text('description');
            $table->integer('amount');
            $table->timestamp('valid_till');

            $table->unsignedBigInteger('message_id');
            $table->unsignedBigInteger('job_id')->nullable();
            $table->foreign('message_id')
                ->references('id')
                ->on('messages');
            $table->foreign('job_id')
                ->references('id')
                ->on('jobs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('custom_offers');
    }
};
