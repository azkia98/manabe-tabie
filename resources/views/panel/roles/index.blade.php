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
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>

@endsection