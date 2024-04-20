<?php

$age =  16; //19; //25; //20; //30

// If statement
// if($age >= 21) {
//   echo 'You are old enough to drink in the US. <br />';
// }

// If-Else
// if($age >= 21) {
//   echo 'You are old enough to drink in the US. <br />';
// } else {
//   echo 'You are NOT old enough to drink in the US. <br />';
// }

// Nested if statement
if($age >= 21) {
  echo 'You are old enough to drink and vote in the US. <br />';
} else {
  if($age >= 18) {
    echo 'You are old enough to vote in the US. <br />';
  } else {
    echo 'You are NOT old enough to drink or vote in the US. <br />';
  }
}

// If-Else-If
if($age >= 21) {
  echo 'You are old enough to drink and vote in the US. <br />';
} else if($age >= 18) {
  echo 'You are old enough to vote in the US. <br />';
} else {
  echo 'You are NOT old enough to drink or vote in the US. <br />';
}

