<?php
// This is a single line comment
/*
  Line 1
  Line 2
  Line 3
*/
echo 'Hello From PHP';
echo '<br />';
print 'Hello From Print';
echo '<br />';
echo 'Value 1', 'Value 2';
//print 'Value 1', 'Value 2';
?>

<!DOCTYPE html>
<html lang="en">
<!-- HTML Comment -->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title><?php echo 'Learn PHP From Scratch' ?></title>
</head>

<body class="bg-gray-100">
  <header class="bg-blue-500 text-white p-4">
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold"><?= 'Learn PHP From Scratch' ?></h1>
    </div>
  </header>
  <div class="container mx-auto p-4 mt-4">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4"><?= 'Welcome To The Course' ?></h2>
      <?php echo '<p>In this course, you will learn the fundamentals of the PHP language</p>'; ?>
    </div>
  </div>
</body>

</html>