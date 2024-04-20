<?php

class User {
  // Properties
  public $name;  //= 'John Doe';
  public $email;  //= 'john@gmail.com';

  public function __construct($name, $email) { echo 'Constructor ran...';
    $this->name = $name; $this->email = $email;
  }

  // Methods
  public function login() {
    //echo 'The user logged in', '<br />';
    echo $this->name . ' logged in', '<br />';
  }
}

// Instantiate a new object
//$user1 = new User(); $user1->name = 'John Doe'; $user1->email = 'john@gmail.com';
$user1 = new User('John Doe', 'john@gmail.com');
var_dump($user1); echo '<br />';
$user1->login();

// $user2 = new User(); $user2->name = 'Jane Doe';
$user2 = new User('Jane Doe', 'jane@gmail.com');
var_dump($user2); echo '<br />';
$user2->login();
