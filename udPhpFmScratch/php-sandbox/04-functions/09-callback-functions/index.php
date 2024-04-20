<?php

$numbers = [1, 2, 3, 4, 5];

// $squaredNumbers = array_map(function($number) { 
//   return $number * $number; 
// }, $numbers);

$square = function($number) { return $number * $number; };
$squaredNumbers = array_map($square, $numbers);

echo '<pre>';
print_r($numbers);
print_r($squaredNumbers);
echo '</pre>';

function applyCallback($callback, $value) {
  return $callback($value);
}

$double = function($number) { return $number * 2; };
$result = applyCallback($double, 5);

echo $result, '<br />';
