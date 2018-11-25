<?php

namespace App\Http\Controllers\Panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Member;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;
use Hekmatinasser\Verta\Verta;
use App\State;
use App\City;

class ExcelController extends Controller
{
    public function showMembersInExcel()
    {
        $members = Member::all();
        $data = [];

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
        Excel::load($request->file('excel'), function ($reader){
            // [
                // "nam_o_nam_khanoadgi" => "افرنگ بحرینی"
                // "tarikh_told" => "۱۳۹۷"
                // "shmarh_shasnamh" => "۴۰۵۴۷۸۴"
                // "mhl_sdor" => "اراک"
                // "kdmli" => "۰۵۲۱۶۵۷۸۴۳"
                // "nam_pdr" => "یزدگرد"
                // "astan" => "خراسان رضوي"
                // "shhrstan" => "كاشمر"
                // "rosta" => "inventore"
                // "shmarh_tmas" => "۰۹۳۸۳۹۰۴۹۸۷"
                // "sth_thsilat" => "لیسانس"
                // "shghl" => "بیکار"
                // "dansh_aamozi" => null
                // "mroj" => null
                // "mhafth" => "✔"
                // "sal_sdor" => "۱۳۷۱"
                // ]
                //  reader methods
                $rows = $reader->all();
                // dd();   
            $datas = [];
            $index = 0;
            foreach ($rows as $row) {
                $nameAndFamily = explode(' ',trim($row->nam_o_nam_khanoadgi));
                $state_id = $this->findStateWithName($row->astan);
                $city_id = $this->findCityWithName($row->shhrstan);
                // dd($city_id);
                // dd($this->persianDateToEnglishDate($row->shhrstan));a
                $typeMember = $this->detectTypeNumber($row->mhafth,$row->dansh_aamozi,$row->mroj);
                $datas [$index] = [
                    'name' => $nameAndFamily[0],
                    'familyname' => $nameAndFamily[1],
                    'birthdate' => $this->persianDateToEnglishDate($row->tarikh_told),
                    'identitinumber' => $row->shmarh_shasnamh,
                    'nationalcode'=> $row->kdmli,
                    'fathername' => $row->nam_pdr,
                    'state_id' => $state_id,
                    'city_id' => $city_id,
                    'village' => $row->rosta,
                    'phonenumber' => $row->shmarh_tmas,
                    'education' => 2,
                    'job' => $row->shghl,
                    'typemember' => $typeMember,
                    'issuingdate'=> $this->persianDateToEnglishDate($row->sal_sdor),
                    'created_at' => now(),
                    'updated_at' => now()
                ];
                $datas[$index]['issuinglocal'] = $row->mhl_sdor;
                $index++;
            }
            Member::insert($datas); 
        });
        alert()->success('همیار های شما با موفقیت ثبت شدن');
        return redirect()->route('members.index');
    }

    public function persianDateToEnglishDate($stringDate){
        $dateInArray = Verta::getGregorian((int) convertToEnglish($stringDate),1,1);
        return Carbon::createFromDate($dateInArray[0],1,1);
    }

    public function findStateWithName($stateName) :int{
        $state = State::whereName($stateName)->first();
        
        return is_null($state) ? 1 : $state->id;
    }
    public function findCityWithName($cityName) :int{
        $city = City::whereName($cityName)->first();
        return is_null($city) ? 1 : $city->id;
    }

    // "dansh_aamozi" => null
            // "mroj" => null
            // "mhafth" => "✔"

    public function detectTypeNumber($protector,$student,$promoter){
        if ($protector != null) {
            return 1;
        }
        if ($promoter != null) {
            return 2;
        }
        if ($student != null) {
            return 3;
        }
    }
}
