@extends('panel.layout.master')

@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      <p><span>نام :</span>{{ $member->name }}</p>
      <p><span>نام خانوادگی :</span>{{ $member->familyname }}</p>
      <p><span>نام پدر :</span>{{ $member->fathername }}</p>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <img src="{{ $member->picture }}" height="120" width="120" alt="{{ $member->picture }}">
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-md-4">
      <p><span>صادره :</span>{{ $member->issuinglocal }}</p>
      <p><span>شماره همراه :</span>{{ $member->phonenumber }}</p>
      <p><span>شغل :</span>{{ $member->job }}</p>
    </div>
    <div class="col-md-4">
      <p><span>کد ملی :</span>{{ $member->nationalcode }}</p>
      <p><span>تحصیلات :</span>{{ $member->education }}</p>
      <p><span>نوع همیار :</span>{{ $member->typemember }}</p>
      
    </div>
    <div class="col-md-4">
      <p><span>شماره شناسنامه :</span>{{ $member->identitinumber }}</p>
      <p><span>تاریخ تولد :</span>{{ verta($member->birthdate)->format('%B %d، %Y') }}</p>
      <p><span>تاریخ صدور :</span>{{ verta($member->issuingdate)->format('%B %d، %Y') }}</p>
    </div>
  </div>
  <hr>
  <p><span>آدرس : </span>{{ $member->address }}</p>
</div>

<div class="d-flex justify-content-end">
  <form action="{{ route('members.destroy',['id'=> $member->id]) }}">
    <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
  </form>
</div>
@endsection

@section('scripts')
<script>
  $(document).ready(function(){

  });
  swal({
  title: "آیا شما مطمئن؟",
  text: "آیا شما مطمئن هستید که میخواید این همیار را حذف کنید؟",
  icon: "warning",
  buttons: {
    cancel: "خیر",
    confirm: "بله",
  },
  dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
</script>
@endsection