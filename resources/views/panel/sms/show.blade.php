@extends('panel.layout.master')

@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      <p><span>کد ارسال:</span>{{ $sms->messageid }}</p>
      <p><span>ارسال کننده:</span>{{ $sms->sender }}</p>
      <p><span>دریافت کننده:</span><a href="{{ route('members.show',['id'=> $member->id]) }}" class="btn btn-sm btn-outline-success mr-2" data-toggle="tooltip" data-placement="top" title="{{ $sms->receptor }}">{{ $member->name }}</a></p>
    </div>
    <div class="col-6">
      <p><span>هزینه :</span>{{ $sms->cost }}</p>
      <p><span>تاریخ ارسال :</span>{{ $sms->created_at }}</p>
      <p><span>وضعیت :‌</span>{{ $status->statustext }}</p>
    </div>
  </div>
  <hr>

<div class="d-flex justify-content-end">
  <form action="{{ route('sms.destroy',['id'=> $sms->id]) }}" class="mb-0" method="POST">
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