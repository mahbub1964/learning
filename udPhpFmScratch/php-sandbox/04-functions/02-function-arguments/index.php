<?php

function add($a = 1, $b = 1) {
  return $a + $b;
}

echo add(1, 2) . '<br />';
echo add(100, 250) . '<br />';
echo add() . '<br />';

function sayHello($name = 'World') {
  return 'Hello ' . $name;
}

echo sayHello('John') . '<br />';
echo sayHello() . '<br />';

function addAll(...$numbers) {
  //return array_sum($numbers);
  $total = 0;
  foreach($numbers as $number) $total += $number;
  return $total;
}

echo addAll(100, 250, 350) . '<br />';
echo addAll(1, 2, 3, 4, 5) . '<br />';

