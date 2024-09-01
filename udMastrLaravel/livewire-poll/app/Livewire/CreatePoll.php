<?php

namespace App\Livewire;

use App\Models\Poll;
use Livewire\Component;

class CreatePoll extends Component
{

  // #[Validate]
  public $title = ""; //"Poll Title";

  public $options = ['First'];

  public function rules() {
    return [
      'title' => 'required|min:3|max:255',
      'options' => 'required|array|min:1|max:10',
      'options.*' => 'required|min:1|max:255',
    ];
  }
  
  public function messages() {
    return [
      'options.*' => "The option can't be empty",
    ];
  }

  public function updated($propertyName) {
    $this->validateOnly($propertyName);
  }

  public function render()
  {
    return view('livewire.create-poll');
  }

  public function addOption() {
    $this->options[] = '';
  }

  public function removeOption($index) {
    unset($this->options[$index]);
    $this->options = array_values($this->options);
  }

  public function createPoll() {
    // $poll = Poll::create([ 'title' => $this->title ]);
    // foreach($this->options as $optionName) {
    //   $poll->options()->create(['name' => $optionName]);
    // }

    $this->validate();

    Poll::create([ 'title' => $this->title ])
    ->options()->createMany( collect($this->options)
      ->map(fn ($option) => ['name' => $option])->all()
    );

    $this->reset(['title', 'options']);

    $this->dispatch('pollCreated');
  }

  // public function mount() {
  // }
}
