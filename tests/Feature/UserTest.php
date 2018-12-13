<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{


    /**
     * A basic test example.
     * 
     * @test
     * 
     * @return void
     */
    public function user_should_redirect_to_the_login_page()
    {
        $response = $this->get('/');
        $response->assertRedirect('/login');
    }

    /**
     * 
     * @test
     * 
     * @return void
     */


     public function user_can_see_login_page(){
        $response = $this->get('/login');
        $response->assertSeeText('سازمان منابع طبیعی استان مرکزی');
     }

     /**
      * کار بر نباید توانایی ورود به پنل سایت بدون عمل لاگین کردن داشته باشد
      *
      * @test
      * @return void
      */

     public function user_shouldnot_see_panell_wihtout_login(){
         $response = $this->get('/panell');
         $response->assertRedirect('login');
     }


     
}
