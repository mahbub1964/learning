<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $book = App\Models\Book::find(1);
    $reviews = $book->reviews;
    dd($reviews);
    // return view('welcome');
});

Route::resource('books', BookController::class);
