@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">اسم نقش</th>
        <th scope="col">برچسب</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($permissions as $permission)
            <tr>
    
            <td>{{ $permission->name }}</td>
            <td>{{ $permission->label }}</td>
            </tr>
        @endforeach
    </tbody>
  </table>

@endsection