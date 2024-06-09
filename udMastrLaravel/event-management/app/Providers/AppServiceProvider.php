<?php

namespace App\Providers;

use App\Models\Attendee;
use App\Models\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('update-event', function ($user, Event $event) {
            return $event->user_id === $user->id; //user->id
        });
        // Gate::define('delete-attendee', function ($user, Attendee $attendee) {
        //     return $attendee->user_id === $user->id || $attendee->event->user_id === $user->id;
        // });
        Gate::define('delete-attendee', function ($user, Event $event, Attendee $attendee) {
            return $attendee->user_id === $user->id || $event->user_id === $user->id;
        });
    }
}
