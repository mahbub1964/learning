<?php

define('APP_NAME', 'My App');
define('APP_VERSION', '1.0.0');
//echo APP_NAME . ' ' . APP_VERSION . '<br />';

const DB_NAME = 'mydb', DB_HOST = 'localhost';
//echo DB_NAME, ' ', DB_HOST, '<br />';

function run() {
  echo APP_NAME . ' ' . APP_VERSION . '<br />';
  echo DB_NAME, ' ', DB_HOST, '<br />';
}

run();

// Not allowed
// define('APP_NAME', 'My App 2');
// const DB_NAME = 'test';
