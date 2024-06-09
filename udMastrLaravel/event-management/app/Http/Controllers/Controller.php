<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

// abstract class Controller
abstract class Controller extends \Illuminate\Routing\Controller
{
    use AuthorizesRequests; // To solve Call to undefined method: middleware
}
