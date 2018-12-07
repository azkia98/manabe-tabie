@extends('panel.layout.master')

@section('content')

<h4 class="d-flex justify-content-between">
    <div>
        <span>ارسال پیام به</span>
        <span>{{ $member->name }} {{ $member->familyname }}</span>
    </div>
    <div>
        <span>شماره همراه : </span>
        <span>{{ $member->phonenumber }}</span>
    </div>
</h4>

<form action="{{ route('sms.send.singel') }}" class="mt-4" method="post">
    @csrf
    <input type="hidden" name="phonenumber" value="{{ $member->phonenumber }}">
    <div class="form-group">
      <label for="message">متن پیام</label>
      <textarea class="form-control" name="message" id="message" rows="4"></textarea>
    </div>

    <button type="submit" class="btn btn-success mt-1 float-left">ارسال پیام</button>
  </form>
@endsection