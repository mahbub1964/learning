<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
  public function option() {
    return $this->belongsTo(Option::class);
  }
}
