<div>
  {{-- Hello from Livewire! --}}
  <form wire:submit.prevent="createPoll">
    <lable for="title">POLL TITLE</lable>
    {{-- <input type="text" id="title" wire:model="title" /> --}}
    <input type="text" id="title" wire:model.live="title" />
    @error('title')
      <div class="text-red-500">{{ $message }}</div>
    @enderror

    {{-- Current title: {{ $title --}}

    <div class="mb-4 mt-4">
      <button class="btn" wire:click.prevent="addOption">Add Option</button>
    </div>

    <div>
      @foreach ($options as $index => $option)
        <div class="mb-4">
          {{-- $index }} - {{ $option --}}
          <label>OPTION {{ $index + 1 }}</label>
          <div class="flex gap-2">
            <input type="text" wire:model.blur="options.{{$index}}" />
            <button class="btn" wire:click.prevent="removeOption({{$index}})">Remove</button>
          </div>
          @error("options.{$index}")
            <div class="text-red-500">{{ $message }}</div>
          @enderror
        </div>
      @endforeach
    </div>

    <button type="submit" class="btn">Create Poll</button>
  </form>
</div>
