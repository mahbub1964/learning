<?php

class StringUtility {
  public static function shout($string) {
    echo strtoupper($string) . '! <br />';
  }

  public static function whisper($string) {
    echo strtolower($string) . '. <br />';
  }

  public static function repeat($string, $times=2) {
    //for($i = 0; $i < $times; $i++) echo $string;
    echo str_repeat($string, $times);
    echo '<br />';
  }
}

echo StringUtility::shout('Hello');
echo StringUtility::whisper('Hello');
echo StringUtility::repeat('Hello');
echo StringUtility::repeat('Hello', 5);

$utility = new StringUtility();
echo $utility->shout('World');
echo $utility->whisper('World');
echo $utility->repeat('World');
echo $utility->repeat('World', 5);

