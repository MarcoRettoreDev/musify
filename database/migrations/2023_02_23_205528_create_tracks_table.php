<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('title');
            $table->string('slug')->unique();
            $table->timestamp('duration');
            $table->timestamp('release');
            $table->timestamp('expires_at')
                ->default(DB::raw("now() + INTERVAL '1 year'"));

            $table->foreignId('artist_id')
                ->constrained('artists')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreignId('album_id')
                ->constrained('albums')
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
        Schema::dropIfExists('tracks');
    }
};
