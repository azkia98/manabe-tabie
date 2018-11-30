<?php

namespace App\Http\Controllers\Panel;

use App\Option;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OptionsController extends Controller
{

    public function __construct()
    {
        $this->denied('options');   
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $options = Option::all();
        return view('panel.options.index',compact('options'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Option  $option
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Option $option)
    {
        $option->value = $request->value;
        $option->update();
        alert()->success('تنظیم شما با موفقیت تنظیم گردید');
        return ['msg'=>true];
    }
}
