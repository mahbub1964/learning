<?php

// declare(strict_types = 1);

function getSum(int $a, int $b): int {
  return $a + $b;
  // return 'Hello';
}

echo getSum(1, 1), '<br />';
echo getSum(1, '1'), '<br />';

function greeting(string $name): void { //string
  //return 'Hello ' . $name;
  echo 'Hello ' . $name;
}

echo greeting('John'), '<br />';

// https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration
