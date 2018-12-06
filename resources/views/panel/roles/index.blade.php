@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">اسم نقش</th>
        <th scope="col">برچسب</th>
        <th scope="col">اجازه های این نقش</th>
        <th scope="col">تنظیمات</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($roles as $role)
            <tr>
            <td>{{ $role->name }}</td>
            <td>{{ $role->label }}</td>
            <td>
              @foreach ($role->permissions as $permission)
                <span class="badge badge-danger">{{ $permission->name }}</span>
              @endforeach
            </td>
            <td class="text-center">
              <a class="btn btn-primary btn-sm" href="{{ route('roles.edit',['id'=> $role->id]) }}"><i class="fa fa-edit"></i></a>
              <form class="d-inline-block" action="{{ route('roles.destroy',['id'=> $role->id]) }}" method="post">
                @method('DELETE')
                @csrf
                <button type="submit" class="btn btn-danger remove-btn btn-sm"><i class="fa fa-trash"></i></button>
              </form>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>

@endsection


@section('scripts')
<script>
  $(document).ready(function(){
    $('.remove-btn').click(function(e){
      e.preventDefault();
      swal({
      title: "آیا شما مطمئن هستید؟",
      text: "این کار را با احتیاط انجام دهید ممکن است مشکلی به وجود بیاید!!",
      icon: "warning",
      buttons: {
        cancel: "خیر",
        confirm: "بله",
      },
      dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          $(this).parent().submit();
        } else {
          swal("همیار شما حذف نشد!");
        }
      });
    })
  });
</script>
@endsection