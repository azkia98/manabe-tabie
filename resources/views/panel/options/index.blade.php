@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">برچسب</th>
        <th scope="col">مقدار</th>
        <th scope="col">تاریخ تغییر</th>
        <th scope="col" class="text-center">امکانات</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($options as $option)
            <tr>
    
            <td>{{ $option->label }}</td>
            <td>{{ $option->value }}</td>
            <td>{{ verta($option->updated_at)->format('%B %d، %Y') }}</td>
            <td class="text-center">
              <edit-option :option="{{ $option }}"></edit-option>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>
    <div>
      <div class="d-flex justify-content-between">
        <h3>امضاء مدیریت :</h3>
        <form action="#" class="form-inline" method="post" enctype="multipart/form-data">
          <div class="form-row align-items-center">
              <div class="col-sm-10 my-1">
                  <div class="custom-file">
                      <input type="file" class="custom-file-input" id="customFile">
                      <label class="custom-file-label" for="customFile">عکس امضاء را انتخاب کنید</label>
                  </div> 
              </div>
              <div class="col-sm-2 my-1">
                <button type="submit" class="btn btn-success">ثبت</button>
              </div>
            </div>
          {{--  <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile">
              <label class="custom-file-label" for="customFile">عکس امضاء را انتخاب کنید</label>
          </div>  --}}
        </form>
      </div>
      <div class="d-flex">
        <img src="{{ asset('images/signature.png') }}" class="img-fluid">
        <form action=""></form>
      </div>
    </div>
  
  </div>

@endsection