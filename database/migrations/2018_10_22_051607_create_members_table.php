<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('familyname')->nullable();
            $table->date('birthdate');
            $table->string('nationalcode')->nullable();
            $table->string('issuinglocal')->nullable();
            $table->string('identitinumber')->nullable();
            $table->string('fathername')->nullable();
            $table->text('address');
            $table->string('phonenumber')->nullable();
            $table->tinyInteger('education')->default(-1);
            $table->string('job')->nullable();
            $table->date('issuingdate');
            $table->string('picture')->nullable();
            $table->tinyInteger('typemember')->default(-1);
            $table->unsignedInteger('city_id')->nullable();
            $table->unsignedInteger('state_id')->nullable();
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
        Schema::dropIfExists('members');
    }
}
