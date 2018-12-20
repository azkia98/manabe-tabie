@extends('panel.layout.master')

@section('content')
<div class="d-flex">
  <div>
    <a href="{{ route('members.create') }}" class="btn btn-success d-flex justify-content-center align-items-center">اضافه کردن <i class="fa fa-plus mr-2"></i></a>
  </div>
  <form action="{{ route('members.index') }}" method="GET" class="form-inline">
    <label class="sr-only" for="inlineFormInputName2">جستجو</label>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" name="types[]" value="3" class="custom-control-input" id="student_checkbox">
      <label class="custom-control-label pr-3" for="student_checkbox">دانش آموز</label>
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" name="types[]" value="2" class="custom-control-input" id="promoter_checkbox">
      <label class="custom-control-label pr-3" for="promoter_checkbox">مروج</label>
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" name="types[]" value="1" class="custom-control-input" id="protector_checkbox">
      <label class="custom-control-label pr-3" for="protector_checkbox">محافظ</label>
    </div>
    <select-box-for-states-cities-search></select-box-for-states-cities-search>
    <input type="text" name="search" class="form-control  mr-sm-2 rounded-0" id="inlineFormInputName2" placeholder="جستجو ...">
    <button type="submit" class="btn btn-primary btn-sm  mr-2  search-button-padding text-center "> جستجو<i class="fa fa-search mr-2"></i></button>
  </form>
  

  @can('cards')
    <print-selected-members-cards ></print-selected-members-cards>
  @endcan
  
</div>
<form action="{{ route('members.index') }}" method="get">
  <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">نام</th>
          <th scope="col">نام خانوادگی</th>
          <th scope="col">تاریخ تولد</th>
          <th scope="col">نام پدر</th>
          <th scope="col">نوع همیار</th>
          <th scope="col">تحصیلات</th>
          <th scope="col" class="d-none d-md-table-cell">شهر</th>
          <th scope="col" class="text-center">امکانات</th>
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
                <td class="d-none d-md-table-cell">{{ $member->city->name }}</td>
                <td class="text-center">
                  @can('members-show')
                  <a class="btn btn-primary btn-sm" href="{{ route('members.show',['id'=> $member->id]) }}"><i class="fa fa-info"></i></a>
                  @else
                  <a class="btn btn-primary btn-sm disabled" href="{{ route('members.show',['id'=> $member->id]) }}"><i class="fa fa-info"></i></a>
                  @endcan
                  @can('cards')
                    <a class="btn btn-dark btn-sm" href="{{ route('cards.show',['id'=> $member->id]) }}"><i class="fa fa-id-card"></i></a>
                  @else
                    <a class="btn btn-dark btn-sm disabled" href="{{ route('cards.show',['id'=> $member->id]) }}"><i class="fa fa-id-card"></i></a>
                  @endcan
                  @can('sms')
                    <a class="btn btn-success btn-sm" href="{{ route('sms.form.singel',['id'=> $member->id]) }}"><i class="fa fa-comment"></i></a>
                  @else
                    <a class="btn btn-success btn-sm disabled" href="{{ route('sms.form.singel',['id'=> $member->id]) }}"><i class="fa fa-comment"></i></a>
                  @endcan
                  @can('cards')
                    <member-checkbox member_id="{{ $member->id }}"></member-checkbox>
                  @endcan
                </td>
              </tr>
              
          @endforeach
      </tbody>
    </table>
</form>

  <div class="d-flex justify-content-center mt-3">
    {{ $members->appends($_GET)->render() }}
  </div>
@endsection


@section('scripts')
    <script>
    $('#selectCities').selectpicker();
    </script>
@endsection