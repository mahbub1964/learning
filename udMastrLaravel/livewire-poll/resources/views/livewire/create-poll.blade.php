<div>
  {{-- Hello from Livewire! --}}
  <form>
    <lable for="title">POLL TITLE</lable>
    {{-- <input type="text" id="title" wire:model="title" /> --}}
    <input type="text" id="title" wire:model.live="title" />

    Current title: {{ $title }}
  </form>
</div>
