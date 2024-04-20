<?php

/*
  PHP DATA TYPES:

- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL
- Resource
*/

// String
$name = 'Brad Traversy';
$name2 = "John Doe";

var_dump($name); echo getType($name2);
echo '<br />';

// Integer
$age = -35; var_dump($age);
echo '<br />';

// Float
$rating = 4.5; var_dump($rating);
echo '<br />';

// Boolean
$isLoaded = true; var_dump($isLoaded);
echo '<br />';

// Array
$friends = ['John', 'Jack', 'Jane'];
var_dump($friends); echo '<br />';

// Object
$person = new stdClass;
var_dump($person); echo '<br />';

// Null
$car = null; var_dump($car);
echo '<br />';

// Resource
$file = fopen('sample.txt', 'r');
var_dump($file);
