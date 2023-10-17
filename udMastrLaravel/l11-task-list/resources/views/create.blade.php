<!-- Im a working create view! -->
@extends('layouts.app')

@section('title', 'Add Task')

@section('content')
  <form method="POST" action="{{ route('tasks.store') }}">
    @csrf
    <div>
      <label></label>
    </div>
  </form>
@endsection
