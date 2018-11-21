<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Member;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;
use Hekmatinasser\Verta\Verta;

class ExcelController extends Controller
{
    public function showMembersInExcel()
    {
        $members = Member::all();
        $data = [
            // [
            //     'نام و نام خانوادگی' => 'mahdi',
            //     'تاریخ تولد' => '۱۳۸۵',
            //     'شماره شاسنامه' => '0514245215',
            //     'محل صدور' => 'اراک',
            //     'کدملی' => '۰۵۲۱۰۷۲۳۴',
            //     'نام پدر' => 'ابولمعصوم',
            //     'محل سکونت' => 'اراک',
            //     'شماره تماس' => '۰۹۳۸۳۹۰۴۹۶۳',
            //     'شغل' => 'بیکار',
            //     'سال صدور' => '۱۳۸۵',
            // ],
        ];

        foreach ($members as $member) {
            $data[] = [
                'نام و نام خانوادگی' => $member->full_name,
                'تاریخ تولد' => convertToPersian(verta($member->created_at)->year),
                'شماره شاسنامه' => convertToPersian($member->identitinumber),
                'محل صدور' => 'اراک',
                'کدملی' => convertToPersian($member->nationalcode),
                'نام پدر' => $member->fathername,
                'استان' => $member->state->name,
                'شهرستان' => $member->city->name,
                'روستا' => $member->village,
                'شماره تماس' => convertToPersian($member->phonenumber),
                'سطح تحصیلات' => $member->educationPretty,
                'شغل' => $member->job,
                'دانش آموزی' => $member->isStudent() ? '✔' : '',
                'مروج' => $member->isPromoter() ? '✔' : '',
                'محافظ' => $member->isProtector() ? '✔' : '',
                'سال صدور' => convertToPersian(verta($member->issuingdate)->year),
            ];
        }


        Excel::create('users', function ($excel) use ($data) {
            $excel->sheet('Sheet 1', function ($sheet) use ($data) {
                $sheet->fromArray($data);
            });
        })->export('xls');

        return 'Ok';
    }

    public function importMembersFromExcelForm()
    {
        return view('panel.excel.import');
    }

    public function importMembersFromExcel(Request $request)
    {
        // return $request->all();
        // $path = $request->file('excel')->store('excels');
        Excel::load($request->file('excel'), function ($reader) {

            // [
            //         "nam_o_nam_khanoadgi" => "دادفر زارع"
            //         "tarikh_told" => "۱۳۹۷"
            //         "shmarh_shasnamh" => "۴۰۵۹۳۱۶"
            //         "mhl_sdor" => "اراک"
            //         "kdmli" => "۰۵۲۱۶۵۷۸۴۸"
            //         "nam_pdr" => "گلسا"
            //         "mhl_skont" => "استان چهارمحال و بختیاری خیابان صفوی ساختمان اورنگ کد پستی 4075405178"
            //         "shmarh_tmas" => "۰۹۳۸۳۹۰۴۹۸۷"
            //         "sth_thsilat" => "دیپلم"
            //         "shghl" => "بیکار"
            //         "sal_sdor" => "۱۳۶۰"
            // ]
            // reader methods
            $rows = $reader->all();
            // dd();
            $data = [];
            foreach ($rows as $row) {
                $nameAndFamily = explode(' ',trim($row->nam_o_nam_khanoadgi));
                dd(Verta::getGregorian((int) convertToEnglish($row->tarikh_told),1,1),(int) convertToEnglish($row->tarikh_told));
                dd(Carbon::createFromDate(Verta::getGregorian((int) convertToEnglish($row->tarikh_told),1,1)) );
                $data = [
                    'name' => $nameAndFamily[0],
                    'familynamd' => $nameAndFamily[1],
                    'birthdate' => Carbon::createFromDate(Verta::getGregorian($row->tarikh_told))
                ];
            }

        });
        // return $path;

    }
}
