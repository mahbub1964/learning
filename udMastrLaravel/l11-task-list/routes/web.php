<?php

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// class Task
// {
//   public function __construct(
//     public int $id,
//     public string $title,
//     public string $description,
//     public ?string $long_description,
//     public bool $completed,
//     public string $created_at,
//     public string $updated_at
//   ) {
//   }
// }
// $tasks = [
//   new Task(
//     1,
//     'Buy groceries',
//     'Task 1 description',
//     'Task 1 long description',
//     false,
//     '2023-03-01 12:00:00',
//     '2023-03-01 12:00:00'
//   ),
//   new Task(
//     2,
//     'Sell old stuff',
//     'Task 2 description',
//     null,
//     false,
//     '2023-03-02 12:00:00',
//     '2023-03-02 12:00:00'
//   ),
//   new Task(
//     3,
//     'Learn programming',
//     'Task 3 description',
//     'Task 3 long description',
//     true,
//     '2023-03-03 12:00:00',
//     '2023-03-03 12:00:00'
//   ),
//   new Task(
//     4,
//     'Take dogs for a walk',
//     'Task 4 description',
//     null,
//     false,
//     '2023-03-04 12:00:00',
//     '2023-03-04 12:00:00'
//   ),
// ];

Route::get('/', function () { //return redirect('/tasks');
  return redirect()->route('tasks.index');
});

// Route::get('/tasks', function () use($tasks) { //return 'Main Page';
//   return view('index', [ //'name' => 'Mahbub',
//     'tasks' => $tasks
//   ]);
// })->name('tasks.index');
Route::get('/tasks', function () { // use($tasks)
  return view('index', [ 'tasks' => Task::latest()->paginate(10) ]); //->get() //all() //$tasks
  // return view('index', [ 'tasks' => \App\Models\Task::latest()->where('completed', true)->get() ]);
})->name('tasks.index');

Route::view('/tasks/create', 'create')
  ->name('tasks.create');

Route::get('/tasks/{task}/edit', function (Task $task) { //$id
  return view('edit', [ 'task' => $task ]); //Task::findOrFail($id)
})->name('tasks.edit');

// Route::get('/tasks/{id}', function ($id) use($tasks) {
//   //return 'One single task with id: '.$id;
//   $task = collect($tasks)->firstWhere('id', $id);
//   if(!$task) abort(Response::HTTP_NOT_FOUND);
//   return view('show', [ 'task' => $task ]);
// })->name('tasks.show');
Route::get('/tasks/{task}', function (Task $task) { //$id
  return view('show', [ 'task' => $task ]); //\App\Models\Task::findOrFail($id)
})->name('tasks.show');

Route::post('/tasks', function (TaskRequest $request) { //Request
  // dd($request->all()); //'We have reached the store route'
  // $data = $request->validate([
  //   'title' => 'required|max:255',
  //   'description' => 'required',
  //   'long_description' => 'required',
  // ]);
  // $data = $request->validated();
  // $task = new Task;
  // $task->title = $data['title'];
  // $task->description = $data['description'];
  // $task->long_description = $data['long_description'];
  // $task->save();
  $task = Task::create($request->validated());
  return redirect()->route('tasks.show', ['task' => $task->id]) //id
    ->with('success', 'Task created successfully!');
})->name('tasks.store');

Route::put('/tasks/{task}', function (Task $task, TaskRequest $request) { //Request //$id
  // dd($request->all()); //'We have reached the store route'
  // $data = $request->validate([
  //   'title' => 'required|max:255',
  //   'description' => 'required',
  //   'long_description' => 'required',
  // ]);
  // $data = $request->validated(); //$task = Task::findOrFail($id);
  // $task->title = $data['title'];
  // $task->description = $data['description'];
  // $task->long_description = $data['long_description'];
  // $task->save();
  $task->update($request->validated());
  return redirect()->route('tasks.show', ['task' => $task->id]) //id
    ->with('success', 'Task updated successfully!');
})->name('tasks.update');

Route::put('/tasks/{task}/toggle-complete', function (Task $task) {
  // $task->completed = !$task->completed; $task->save();
  $task->toggleComplete();
  return redirect()->back()->with('success', 'Task updated successfully!');
})->name('tasks.toggle-complete');

Route::delete('/tasks/{task}', function (Task $task) {
  $task->delete();
  return redirect()->route('tasks.index')
    ->with('success', 'Task deleted successfully!');
})->name('tasks.destroy');

// Route::get('/xxx', function () { //hello
//   return 'Hello';
// })->name('hello');
// Route::get('/hallo', function () {
//   // return redirect('/hello');
//   return redirect()->route('hello');
// });
// Route::get('/greet/{name}', function ($name) {
//   return 'Hello ' . $name . '!';
// });

Route::fallback(function () {
  return 'Still got somewhere!';
});

// GET
// POST
// PUT
// DELETE
