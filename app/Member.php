<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Member extends Model
{
    protected $guarded = [];

    public function getEducationAttribute($value)
    {
        switch ($value) {
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
}
