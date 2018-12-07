@extends('panel.layout.master')

@section('content')

<h4>
    ارسال پیام به صورت گروهی
</h4>


<form action="{{ route('sms.send.multipel') }}" class="mt-4" method="post">
    @csrf
    <div class="form-group">
      <label for="message">متن پیام</label>
      <textarea class="form-control" name="message" id="message" rows="4"></textarea>
    </div>

    <div class="custom-control custom-checkbox">
        <input name="type_member[]" type="checkbox" value="2" class="custom-control-input" id="promoter">
        <label  class="custom-control-label pr-4" for="promoter">مروج</label>
    </div>

    <div class="custom-control custom-checkbox">
        <input name="type_member[]" type="checkbox" value="1" class="custom-control-input" id="Protector">
        <label class="custom-control-label pr-4" for="Protector">محافظ</label>
    </div>
    
    <div class="custom-control custom-checkbox">
        <input name="type_member[]" type="checkbox" value="3" class="custom-control-input" id="studnet">
        <label class="custom-control-label pr-4" for="studnet">دانش آموز</label>
    </div>

    <button type="submit" class="btn btn-success mt-1 float-left">ارسال پیام</button>
  </form>
@endsection