@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">برچسب</th>
        <th scope="col">مقدار</th>
        <th scope="col">تاریخ تغییر</th>
        <th scope="col" class="text-center">امکانات</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($options as $option)
            <tr>
    
            <td>{{ $option->label }}</td>
            <td>{{ $option->value }}</td>
            <td>{{ verta($option->updated_at)->format('%B %d، %Y') }}</td>
            <td class="text-center">
              <edit-option :option="{{ $option }}"></edit-option>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>

  </div>
@endsection