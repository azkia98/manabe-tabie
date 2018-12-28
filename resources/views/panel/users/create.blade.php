@extends('panel.layout.master')

@section('content')
@include('panel.layout.errors')
<div class="container-fluid">
    <form action="{{ route('users.store') }}" method="post" enctype="multipart/form-data">
      @csrf
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label">نام</label>
            <div class="col-sm-9">
              <input type="text" value="{{ old('name') }}" class="form-control" name="name" id="name" placeholder="نام">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="familyname" class="col-sm-3 col-form-label text-truncate">نام خانوادگی</label>
            <div class="col-sm-9">
              <input type="text" value="{{ old('familyname') }}" class="form-control" name="familyname" id="familyname" placeholder="نام خانوادگی">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">نام کاربری</label>
            <div class="col-sm-9">
              <input type="text" value="{{ old('username') }}" class="form-control" name="username" id="username" placeholder="نام کاربری">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label text-truncate">ایمیل</label>
            <div class="col-sm-9">
              <input type="text" value="{{ old('email') }}" class="form-control" name="email" id="email" placeholder="ایمیل">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">گذر واژه</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="password" id="password" placeholder="گذرواژه">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="password_confirmation" class="col-sm-3 col-form-label text-truncate">تکرار گذر واژه</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="تکرار گذر واژه">
            </div>
          </div>
        </div>
      </div>

      

      <states-cities></states-cities>

      <div class="row">
        <div class="col-12">
            <select class="selectpicker w-100" multiple name="roles[]">
              @foreach ($roles as $role)
                <option data-content="<span class='badge badge-success'>{{ $role->name }}</span>" value="{{ $role->id }}"></option>
              @endforeach
              </select>
        </div>
      </div>

      <div class="row">
          <div class="col-12">
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="administration" id="administration">
                  اداره کلی
                </label>
              </div>
          </div>
        </div>
      
      <button type="submit" class="btn btn-success mt-3">ثبت</button>
    </form>
</div>

@endsection

@section('scripts')
    <script>
      $(document).ready(function(){
        $('.selectpicker').selectpicker();
      })
    </script>
@endsection