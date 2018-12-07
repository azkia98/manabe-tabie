@extends('panel.layout.master')

@section('content')
<table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">کد ارسال</th>
        <th scope="col">ارسال کننده</th>
        <th scope="col">دریافت کننده</th>
        <th scope="col">هزینه</th>
        <th scope="col">تاریخ ارسال</th>
        <th scope="col">تنظیمات</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($smss as $sms)
            <tr>
              <td>{{ $sms->messageid }}</td>
              <td>{{ $sms->sender }}</td>
              <td>{{ $sms->receptor }}</td>
              <td>{{ $sms->cost }}</td>
              <td>{{ verta($sms->created_at)->formatDifference() }}</td>
              <td class="text-center">
                <a class="btn btn-primary btn-sm" href="{{ route('sms.show',['id'=> $sms->id]) }}"><i class="fa fa-info"></i></a>
              </td>
            </tr>
            
        @endforeach
    </tbody>
  </table>

  <div class="d-flex justify-content-center mt-3">
    {{ $smss->links() }}
  </div>
@endsection