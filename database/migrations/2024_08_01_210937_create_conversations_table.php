<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConversationsTable extends Migration
{
    public function up()
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('sender_id')->references('id')->on('users');
            $table->foreignUuid('receiver_id')->references('id')->on('users');
            $table->string('title')->nullable(); // Optional title for the conversation
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('conversations');
    }
}
