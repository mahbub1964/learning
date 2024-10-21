@extends('layouts.app')

@section('title', 'The list of tasks')
<!-- <h1>The list of tasks</h1> -->

<!-- @isset($name)
  <div>The name is: {{ $name }}</div>
@endisset -->

<!-- <div> -->
@section('content')
  <nav class="mb-4">
    <a href="{{ route('tasks.create') }}" class="link">Add Task!</a>
  </nav>

  <!-- @if(count($tasks)) -->
  @forelse($tasks as $task)
    <!-- <div>{{ $task->title }}</div> -->
    <div>
      <a href="{{ route('tasks.show', ['task' => $task->id]) }}"  @class([ //'font-bold', 
        'line-through' => $task->completed ])>{{ $task->title }}</a>
    </div>
  @empty
    <div>There are no tasks</div>
  @endforelse
  <!-- @endif -->

  @if($tasks->count())
    <nav class="mt-4">
      {{ $tasks->links() }}
    </nav>
  @endif
@endsection
<!-- </div> -->