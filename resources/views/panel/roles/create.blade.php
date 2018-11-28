@extends('panel.layout.master')

@section('content')
@include('panel.layout.errors')
<div class="container-fluid">
    <form action="{{ route('roles.store') }}" method="post">
      @csrf
      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">نام نقش</label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('name') }}" class="form-control" name="name" id="name" placeholder="نام">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label for="label" class="col-sm-2 col-form-label text-truncate">برچسب</label>
            <div class="col-sm-10">
              <input type="text" value="{{ old('label') }}" class="form-control" name="label" id="label" placeholder="برچسب">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <select class="selectpicker">
                <option>Mustard</option>
                <option>Ketchup</option>
                <option>Barbecue</option>
              </select>
              
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