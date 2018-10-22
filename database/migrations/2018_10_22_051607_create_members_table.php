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
            $table->string('name');
            $table->string('familyname');
            $table->date('birthdate');
            $table->string('nationalcode');
            $table->string('issuinglocal');
            $table->string('identitinumber');
            $table->string('fathername');
            $table->text('address');
            $table->string('phonenumber');
            $table->tinyInteger('education');
            $table->string('job');
            $table->date('issuingdate');
            $table->string('picture');
            $table->tinyInteger('typemember');
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
