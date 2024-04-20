<?php

// Global scope
$name = 'Alice';

function sayHello() {
  global $name;
  // Local scope
  $name = 'Bob';
  echo $name . '<br />';
}

echo $name . '<br />';
sayHello();
echo $name . '<br /><br />';

function sayGoodbye() {
  $names = ['Jack', 'Jill'];
  echo 'Goodbye ' . $names[0] . '<br />';
}

echo $names[0];
sayGoodbye();

