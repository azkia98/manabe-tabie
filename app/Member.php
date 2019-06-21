<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

/**
 * App\Member
 *
 * @property-read \App\City $city
 * @property-read mixed $education_pretty
 * @property-read mixed $full_name
 * @property-read mixed $typemember_pretty
 * @property-read \App\State $state
 * @property-read \App\State $stateSubmited
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member promoters()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member protectors()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member students()
 * @mixin \Eloquent
 * @property int $id
 * @property string $name
 * @property string $familyname
 * @property string|null $birthdate
 * @property string|null $nationalcode
 * @property string|null $issuinglocal
 * @property string|null $identitinumber
 * @property string|null $fathername
 * @property string|null $address
 * @property string|null $phonenumber
 * @property int $education
 * @property string|null $job
 * @property string $issuingdate
 * @property string|null $picture
 * @property int $typemember
 * @property int|null $city_id
 * @property int|null $state_id
 * @property string|null $village
 * @property int|null $user_id
 * @property int $state_submited
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereBirthdate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereEducation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereFamilyname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereFathername($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereIdentitinumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereIssuingdate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereIssuinglocal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereJob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereNationalcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member wherePhonenumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member wherePicture($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereStateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereStateSubmited($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereTypemember($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Member whereVillage($value)
 */
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

    public function scopeProtectors($query){
        return $query->whereTypemember(1); 
    }
    public function scopePromoters($query){
        return $query->whereTypemember(2); 
    }
    public function scopeStudents($query){
        return $query->whereTypemember(3); 
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function stateSubmited(){
        return $this->belongsTo(State::class,'state_submited');     
    }

}
