@extends('panel.layout.master')

@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-6">
      <p><span>نام :</span>{{ $user->name }}</p>
      <p><span>نام خانوادگی :</span>{{ $user->familyname }}</p>
      <p><span>نام کاربری :</span>{{ $user->username }}</p>
    </div>
    <div class="col-6">
      <p><span>ادمین :</span>{{ $user->isAdmin() ? 'ادمین  است' : 'ادمین نیست' }}</p>
    </div>
  </div>
  <hr>

<div class="d-flex justify-content-end">
  @can('users-update')
    <a href="{{ route('users.edit',['id'=> $user->id]) }}" class="btn btn-primary ml-1"><i class="fa fa-edit"></i></a>
  @else
    <a href="{{ route('users.edit',['id'=> $user->id]) }}" class="btn btn-primary disabled ml-1"><i class="fa fa-edit"></i></a>
  @endcan

  @can('users-delete')
    <form action="{{ route('users.destroy',['id'=> $user->id]) }}" class="mb-0" method="POST">
      @method('DELETE')
      @csrf
      <button class="btn btn-danger" id="deleteButton"><i class="fa fa-trash"></i></button>
    </form>
  @endcan
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