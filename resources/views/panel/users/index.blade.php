@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">نام</th>
        <th scope="col">نام خانوادگی</th>
        <th scope="col">ایمیل</th>
        <th scope="col">نام کاربری</th>
        <th scope="col">تاریخ ساخته شدن</th>
        <th scope="col">نقش ها</th>
        <th scope="col">امکانات</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($users as $user)
            <tr>
    
            <td>{{ $user->name }}</td>
            <td>{{ $user->familyname }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ $user->username }}</td>
            <td>{{ convertToPersian(verta($user->created_at)->year) }}</td>
            <td>
              @foreach ($user->roles as $role)
              <span class="badge badge-success">{{ $role->name }}</span>
              @endforeach
            </td>
            <td class="text-center">
              <a class="btn btn-primary btn-sm" href="{{ route('users.show',['id'=> $user->id]) }}"><i class="fa fa-info"></i></a>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>

  <div class="d-flex justify-content-center mt-3">
    {{ $users->links() }}
  </div>
@endsection