@extends('panel.layout.master')

@section('content')
<div class="container-fluid">
    <form action="{{ route('members.store') }}" method="post">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">نام</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="name" id="name" placeholder="نام">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="familyname" class="col-sm-2 col-form-label text-truncate">نام خانوادگی</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="familyname" id="familyname" placeholder="نام خانوادگی">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="nationalcode" class="col-sm-2 col-form-label">شماره ملی</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="nationalcode" id="nationalcode" placeholder="شماره ملی">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="issuinglocal" class="col-sm-2 col-form-label text-truncate">محل صدور شناسنامه</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="issuinglocal" id="issuinglocal" placeholder="محل صدور شناسنامه">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="fathername" class="col-sm-2 col-form-label">نام پدر</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="fathername" id="fathername" placeholder="نام پدر">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="phonenumber" class="col-sm-2 col-form-label text-truncate">شماره همراه</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="phonenumber" id="phonenumber" placeholder="شماره همراه">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="identitinumber" class="col-sm-2 col-form-label">شماره شناسنامه</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="identitinumber" id="identitinumber" placeholder="شماره شناسنامه">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="job" class="col-sm-2 col-form-label text-truncate">شغل</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="job" id="job" placeholder="شغل">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="birthdate" class="col-sm-2 col-form-label">تاریخ تولد</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="birthdate" id="birthdate" placeholder="تاریخ تولد">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="issuingdate" class="col-sm-2 col-form-label text-truncate">تاریخ صدور</label>
            <div class="col-sm-10">
              <input class="form-control" name="issuingdate" id="issuingdate" placeholder="تاریخ صدور">
            </div>
          </div>
        </div>
      </div>
     
      <div class="row">
        <div class="col-md-6">
          <h6 class="font-weight-bold">نوع همیار :</h6>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" value="1" name="typemember" class="custom-control-input">
              <label class="custom-control-label pr-3" for="customRadio1">همیار طبیعت محافظ</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio3" value="2" name="typemember" class="custom-control-input">
                <label class="custom-control-label pr-3" for="customRadio3">مروج</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio4" value="3" name="typemember" class="custom-control-input">
                <label class="custom-control-label pr-3" for="customRadio4">مروج دانش آموز</label>
            </div>
        </div>
        <div class="col-md-6">
          <h6 class="font-weight-bold">تحصیلات :</h6>
          <select class="custom-select" name="education">
              <option value="1">زیر دیپلم</option>
              <option value="2">دیپلم</option>
              <option value="3">فوق دیپلم</option>
              <option value="4">لیسانس</option>
              <option value="5">فوق لیسانس</option>
              <option value="6">دکترا</option>
            </select>
        </div>
      </div>

      <textarea name="address" cols="30" rows="10" placeholder="آدرس"></textarea>
      
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
    </script>
@endsection 