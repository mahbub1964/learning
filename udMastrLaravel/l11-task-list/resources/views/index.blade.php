@extends('layouts.app')

@section('title', 'The list of tasks')
<!-- <h1>The list of tasks</h1> -->

<!-- @isset($name)
  <div>The name is: {{ $name }}</div>
@endisset -->

<!-- <div> -->
@section('content')
  <!-- @if(count($tasks)) -->
  @forelse($tasks as $task)
    <!-- <div>{{ $task->title }}</div> -->
    <div>
      <a href="{{ route('tasks.show', ['id' => $task->id]) }}">{{ $task->title }}</a>
    </div>
  @empty
    <div>There are no tasks</div>
  @endforelse
  <!-- @endif -->
@endsection
<!-- </div> -->
