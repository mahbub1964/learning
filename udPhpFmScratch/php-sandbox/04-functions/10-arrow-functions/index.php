<?php

// function add($a, $b) {
//   return $a + $b;
// }
// echo add(1, 2), '<br />';

// $add = function($a, $b) {
//   return $a + $b;
// };

$add = fn($a, $b) => $a + $b;
echo $add(1, 2), '<br />';

$numbers = [1, 2, 3, 4, 5];
//$squaredNumbers = array_map(function($number) { return $number * $number; }, $numbers);
$squaredNumbers = array_map(fn($number) => $number * $number, $numbers);
echo '<pre>';
print_r($numbers);
print_r($squaredNumbers);
echo '</pre>';

