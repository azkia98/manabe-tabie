@extends('panel.layout.blank')

@section('head')
<link rel="stylesheet" href="/css/show-cards.css" type="text/css">
@stop

@section('content')

<div class="pages">
    <div class="page">
        <div class="cards">
            <div class="card">
                <section class="number-of-register">{{ $member->id }}</section>
                <section class="name">{{ $member->name }}</section>
                <section class="national-code"> {{ $member->nationalcode }}</section>
                <section class="fathername">{{ $member->fathername }}</section>
                <section class="birthdate">{{ verta($member->created_at)->year }}</section>
                <section class="state">{{{ $member->name }}}</section>
                <section class="city">{{ $member->name }}</section>
                <img class="picture" src="{{ asset($member->picture) }}" alt="">
                <img class="signature" src="/images/signature.png" alt="">
            </div>
            <div class="card">
            </div>
        </div>
    </div>
  </div>

@endsection

{{-- <div class="card">
        <section class="number-of-register">۹۶۰۱۶۹ </section>
        <section class="name"> مهدی ابراهیمی </section>
        <section class="national-code"> ۰۵۲۱۰۷۳۴۶۴</section>
        <section class="fathername">حسین دهقانی</section>
        <section class="birthdate">۱۳۸۵</section>
        <section class="state">مرکزی</section>
        <section class="city">شازند</section>
        <img class="picture" src="/images/Leila_Otadi_92.jpg" alt="">
        <img class="signature" src="/images/signature.png" alt="">
    </div> --}}