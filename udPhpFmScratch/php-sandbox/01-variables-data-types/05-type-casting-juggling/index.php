<?php

$number1 = 5;
$number2 = 10;
$number3 = '20';
$fruit = 'apple';
$bool1 = true;
$bool2 = false;
$null = null;

// Implicit Conversion
$result = $number1 + $number2; // int
$result = $number1 + $number3; // int (string to int)
$result = $number3 + $number3; // int (string to int)
$result = $number1 . $number2; // string (int to strint)
// $result = $fruit + $number2; // Error
$result = $number1 + $bool1; // int (bool to int)
$result = $number1 + $bool2; // int (bool to int)
$result = $number1 + $null; // int (null to int)

// Explicit Conversion
$result = (string) $number1;
$result = (int) $number3;
$result = (bool) $number1;

var_dump($result);

