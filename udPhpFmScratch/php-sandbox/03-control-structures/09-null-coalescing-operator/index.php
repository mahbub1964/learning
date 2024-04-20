<?php

$favoriteColor = 'red';
$secondColor = 'orange';

// $color = isset($favoriteColor) ? $favoriteColor : 'blue';

// $color = $favoriteColor ?? 'green';

// $color = isset($favoriteColor) ? $favoriteColor : (isset($secondColor) ? $secondColor : 'blue');

$color = $favoriteColor ?? $secondColor ?? 'green';

echo $color;
