@extends('panel.layout.master')

@section('content')
@include('panel.layout.errors')
<div class="container-fluid">
    <form action="{{ route('users.update',['id'=>$user->id]) }}" method="post" enctype="multipart/form-data">
      @csrf
      @method('PATCH')
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">نام</label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('name',$user->name) }}" class="form-control" name="name" id="name" placeholder="نام">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="familyname" class="col-sm-2 col-form-label text-truncate">نام خانوادگی</label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('familyname', $user->familyname) }}" class="form-control" name="familyname" id="familyname" placeholder="نام خانوادگی">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="username" class="col-sm-2 col-form-label">نام کاربری</label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('username',$user->username) }}" class="form-control" name="username" id="username" placeholder="نام کاربری">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label text-truncate">ایمیل </label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('email', $user->email) }}" class="form-control" name="email" id="email" placeholder="نام خانوادگی">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label">پسورد</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="password" id="password" placeholder="پسورد">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="password" class="col-sm-2 col-form-label text-truncate">تکرار پسورد </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="password_confirmation" id="password" placeholder="تکرار پسورد">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <select class="selectpicker w-100" multiple name="roles[]">
              @foreach ($roles as $role)
              @dump($user->roles->contains($role->id))
                <option data-content="<span class='badge badge-success'>{{ $role->name }}</span>" value="{{ $role->id }}" {{ $user->hasRole($role->name)? 'selected' : '' }} ></option>
              @endforeach
              </select>
        </div>
      </div>
      <button type="submit" class="btn btn-success mt-3">ثبت</button>
    </form>
</div>

@endsection

@section('scripts')
    <script>
       $(document).ready(function() {
          $("#birthdate,#issuingdate").pDatepicker({
            persianDigit: false,
            formatter: function(unix){
                return unix / 1000; 
            } 
          });
        });

      $(document).ready(function(){
          $('.selectpicker').selectpicker();
      })
    </script>
@endsection 