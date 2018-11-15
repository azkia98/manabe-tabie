@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">نام</th>
        <th scope="col">نام خانوادگی</th>
        <th scope="col">تاریخ تولد</th>
        <th scope="col">نام پدر</th>
        <th scope="col">نوع همیار</th>
        <th scope="col">تحصیلات</th>
        <th scope="col">اطلاعات بیشتر</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($members as $member)
            <tr>
    
            <td>{{ $member->name }}</td>
            <td>{{ $member->familyname }}</td>
            <td>{{ verta($member->birthdate)->format('%B %d، %Y') }}</td>
            <td>{{ $member->fathername }}</td>
            <td>{{ $member->typememberPretty }}</td>
            <td>{{ $member->educationPretty }}</td>
            <td class="text-center">
              <a class="btn btn-primary btn-sm" href="{{ route('members.show',['id'=> $member->id]) }}"><i class="fa fa-info"></i></a>
              <a class="btn btn-success btn-sm" href="{{ route('cards.show',['id'=> $member->id]) }}"><i class="fa fa-id-card"></i></a>
            </td>
            </tr>
        @endforeach
    </tbody>
  </table>

  <div class="d-flex justify-content-center mt-3">
    {{ $members->links() }}
  </div>
@endsection