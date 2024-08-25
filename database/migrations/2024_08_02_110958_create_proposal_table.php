<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('job_id')->nullable();
            $table->foreignUuid('user_id')->nullable()->references('id')->on('users');
            $table->text('proposal_content')->nullable();
            $table->decimal('price', 11, 2)->nullable();
            $table->string('time', 256)->nullable();
            $table->string('status', 256)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proposals');
    }
};
