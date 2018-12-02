<?php

namespace App\Http\Controllers\Panel;

use App\Option;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OptionsController extends Controller
{


    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        auth()->loginUsingId(1);
        $this->denied('options');   
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

    /**
     * save signature picture
     */
     public function updateSing(Request $request){
         $path = $request->file('picture')->store('pictures', 'public');
         $sigature_option = Option::GVWK('signature');
         $sigature_option->value = $path;
         $sigature_option->update();
         alert()->success('امضاء شما با موفقیت تغییر پیدا کرد');
         return redirect()->back();
     }
}
