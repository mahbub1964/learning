<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Traits\CanLoadRelationships;
use Illuminate\Http\Request;

use \App\Models\Event;
use \App\Http\Resources\EventResource;
use Illuminate\Support\Facades\Gate;

class EventController extends Controller
{
    use CanLoadRelationships;
    // private readonly array $relations = ['user', 'attendees', 'attendees.user'];
    private array $relations = ['user', 'attendees', 'attendees.user'];

    public function __construct() {
        // $this->authorizeResource(Event::class);
        $this->middleware('auth:sanctum')->except(['index','show']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Event::all();
        // return EventResource::collection(Event::all());
        // return EventResource::collection(Event::with('user')->get());
        // return EventResource::collection(Event::with('user')->paginate());

        // $relations = ['user', 'attendees', 'attendees.user'];
        // $query = Event::query(); //if($this->shouldIncludeRelation('user')) $query->with('user');
        // foreach ($relations as $relation) {
        //     $query->when($this->shouldIncludeRelation($relation), fn($q) => $q->with($relation));
        // }
        // $query = $this->loadRelationships(Event::query(), $relations);
        $query = $this->loadRelationships(Event::query());
        return EventResource::collection($query->latest()->paginate());
    }

    // protected function shouldIncludeRelation(string $relation): bool
    // {
    //     $include = request()->query('include'); //dd($include);
    //     if(!$include) return false;
    //     $relations = array_map('trim', explode(',', $include)); //dd($relations);
    //     return in_array($relation, $relations);
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $event = Event::create([
            ...$request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'start_time' => 'required|date',
                'end_time' => 'required|date|after:start_time',
            ]),
            'user_id' => request()->user()->id //1,
        ]);
        // return $event;
        // return new EventResource($event);
        return new EventResource($this->loadRelationships($event));
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)  //$id
    {
        // return $event;
        // $event->load('user', 'attendees');
        // return new EventResource($event);
        return new EventResource($this->loadRelationships($event));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event) //$id
    {
        // if(Gate::denies('update-event', $event)) {
        //     abort(403, 'You are not authorized to update this event.');
        // }
        $this->authorize('update-event', $event);
        $event->update(
            $request->validate([
                'name' => 'sometimes|string|max:255',
                'description' => 'nullable|string',
                'start_time' => 'sometimes|date',
                'end_time' => 'sometimes|date|after:start_time',
            ])
        );
        // return $event;
        // return new EventResource($event);
        return new EventResource($this->loadRelationships($event));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event) //$id
    {
        $event->delete();

        // return response()->json([ 'message' => 'Event deleted successfully' ]);
        return response(status: 204);
    }
}
