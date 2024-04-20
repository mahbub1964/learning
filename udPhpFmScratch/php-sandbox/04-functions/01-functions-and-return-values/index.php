<?php

function sayHello() {
  echo 'Hello World <br />';
}

function sayGoodbye() {
  return 'Goodbye';
}

sayHello();
sayHello();
sayHello();

$goodbye = sayGoodbye();
echo $goodbye;
