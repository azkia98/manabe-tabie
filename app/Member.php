<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Member extends Model
{
    protected $guarded = [];

    public function getEducationPrettyAttribute()
    {
        switch ($this->education) {
            case '1':
                return 'زیر دیپلم';
                break;
            case '2':
                return 'دیپلم';
                break;
            case '3':
                return 'فوق دیپلم';
                break;
            case '4':
                return 'لیسانس';
                break;
            case '5':
                return 'فوق لیسانس';
                break;
            case '6':
                return 'دکترا';
                break;
            default:
                return 'کد مدرک شما در سیستم قابل تشخیص نمیباشد';
                break;
        }
    }
    public function getTypememberPrettyAttribute()
    {
        switch ($this->typemember) {
            case '1':
                return 'همیار طبیعت محافظ';
                break;
            case '2':
                return 'مروج';
                break;
            case '3':
                return 'دانش آموز';
                break;
            default:
                return 'کد همیار مورد نظر قابل تشخیص نمیباشد';
                break;
        }
    }
    public function getFullNameAttribute()
    {
        return "{$this->name} {$this->familyname}";
    }


    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function isProtector()
    {
        return $this->typemember == 1;
    }

    public function isPromoter()
    {
        return $this->typemember == 2;
    }

    public function isStudent()
    {
        return $this->typemember == 3;
    }

    public function returnTypeValueForClass()
    {
        switch ($this->typemember) {
            case '1':
                return 'protector';
                break;
            case '2':
                return 'promoter';
                break;
            case '3':
                return 'student';
                break;
            default:
                Log::error('همیار مورد نظر تایپ استانداد ندارد');
                return false;
                break;
        }
    }

}
