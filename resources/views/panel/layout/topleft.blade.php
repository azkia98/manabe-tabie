@can('excel-export')
    <a  class="btn btn-sm btn-success" href="{{ route('excel.all') }}">
        <span>خروجی اکسل</span>
    </a>
@endcan
@can('cards')
    <a  class="btn btn-sm btn-secondary" href="{{ route('cards.index') }}">
        <span>کارت همیاران</span>
    </a>
@endcan
{{--  <button type="button" class="btn btn-sm btn-primary">
    <span>تعداد همیارها</span>
    <span class="badge badge-light">۹</span>
</button>  --}}
<button type="button" class="btn btn-sm btn-danger">
    <span>خروج</span>
</button>