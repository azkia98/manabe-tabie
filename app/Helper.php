<?php

/**
 * change plain number to formatted currency
 *
 * @param $number
 * @param $currency
 */

function convertToPersian($string)
{
    $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    $num = range(0, 9);
    $convertedToPersianNumbers = str_replace($num, $persian, $string);

    return $convertedToPersianNumbers;
}