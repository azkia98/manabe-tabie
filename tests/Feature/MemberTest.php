<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MemberTest extends TestCase
{
    /**
     * A basic test example.
     * 
     * @test
     * 
     * @return void
     */
    public function user_can_see_index_page()
    {
        $this->assertTrue(true);

        $response = $this->get('/');
        $response->assertSeeText('منابع طبیعی');
    }
}
