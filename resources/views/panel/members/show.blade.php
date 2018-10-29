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
      <img src="{{ asset($member->picture) }}" height="120" width="120" alt="{{ $member->picture }}">
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
  <a href="{{ route('members.edit',['id'=> $member->id]) }}" class="btn btn-primary ml-1"><i class="fa fa-edit"></i></a>
  <form action="{{ route('members.destroy',['id'=> $member->id]) }}" class="mb-0" method="POST">
    @method('DELETE')
    @csrf
    <button class="btn btn-danger" id="deleteButton"><i class="fa fa-trash"></i></button>
  </form>
</div>
@endsection

@section('scripts')
<script>
  $(document).ready(function(){
    $('#deleteButton').click(function(e){
      e.preventDefault();
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
          $('#deleteButton').parent().submit();
        } else {
          swal("همیار شما حذف نشد!");
        }
      });
    })
  });
</script>
@endsection