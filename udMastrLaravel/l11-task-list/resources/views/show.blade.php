@extends('layouts.app')
<!-- <h2>One single task: {{ serialize($task) }}<h2>
<h2>{{ print_r($task) }}</h2> -->

@section('title', $task->title)
<!-- <h1>{{ $task->title }}</h1> -->

@section('content')
  <p>{{ $task->description }}</p>

  @if($task->long_description)
    <p>{{ $task->long_description }}</p>
  @endif

  <p>{{ $task->created_at }}</p>
  <p>{{ $task->updated_at }}</p>

  <div>
    <form action="{{ route('tasks.destroy', ['task' => $task->id]) }}" method="POST">
      @csrf
      @method('DELETE')
      <button type="submit">Delete</button>
    </form>
  </div>
@endsection
