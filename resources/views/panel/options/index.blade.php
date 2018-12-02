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
        <form action="{{ route('options.update.signature') }}" class="form-inline" method="post" enctype="multipart/form-data">
          @method('PUT')
          @csrf
          <div class="form-row align-items-center">
              <div class="col-sm-10 my-1">
                  <div class="custom-file">
                      <input type="file" name="picture" class="custom-file-input" id="customFile">
                      <label class="custom-file-label" for="customFile">عکس امضاء را انتخاب کنید</label>
                  </div> 
              </div>
              <div class="col-sm-2 my-1">
                <button type="submit" class="btn btn-success">تغییر</button>
              </div>
            </div>
        </form>
      </div>
      <div class="d-flex">
        <img src="{{ asset($option->GVWK('signature')->value) }}" style="height: 200px;width: auto;" class="img-fluid">
        <form action=""></form>
      </div>
    </div>
  
  </div>

@endsection