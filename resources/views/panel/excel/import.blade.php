@extends('panel.layout.master')

@section('content')
@include('panel.layout.errors')
<div class="container-fluid">
    <form action="{{ route('excel.import.store') }}" method="post" enctype="multipart/form-data">
      @csrf
      <div class="row mt-2">
          <div class="col">
              <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile" name="excel">
                  <label class="custom-file-label" for="customFile">فایل اکسل خود را انتخاب کنید</label>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-success mt-3">ثبت</button>
    </form>
</div>

@endsection