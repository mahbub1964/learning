<?php
$output = null;

$fruits = [
  ['Apple', 'Red'],
  ['Orange', 'Orange'],
  ['Banana', 'Yellow']
];

$output = $fruits[0][0];

$fruits[] = ['Grape', 'Purple'];

$users = [
  ['name' => 'John', 'email' => 'john@gmail.com', 'password' => '123456'],
  ['name' => 'Mary', 'email' => 'mery@gmail.com', 'password' => '123456'],
  ['name' => 'Ken', 'email' => 'ken@gmail.com', 'password' => '123456'],
];

$users[] = ['name' => 'Mike', 'email' => 'mike@gmail.com', 'password' => '123456'];

array_push($users, ['name' => 'Larry', 'email' => 'larry@gmail.com', 'password' => '123456']);

array_pop($users);
array_shift($users);
unset($users[0]);

$output = $users[1]['email'];

$output = count($users);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>PHP From Scratch</title>
</head>

<body class="bg-gray-100">
  <header class="bg-blue-500 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold">PHP From Scratch</h1>
    </div>
  </header>
  <div class="container mx-auto p-4 mt-4">
    <div class="bg-white rounded-lg shadow-md p-6 mt-6">
      <!-- Output -->
      <p class="text-xl"><?= $output ?></p>
      <h2 class="text-xl font-semibold my-4">Users Array:</h2>
      <p>
        <pre>
          <?php print_r($users); ?>
        </pre>
      </p>
    </div>
  </div>
</body>

</html>