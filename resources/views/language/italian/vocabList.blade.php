@extends('layouts.app')


@section('content')
<h1 class="text-center">Vocabulary List</h1>
<div class="text-center">
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">A1</button>
        <button type="button" class="btn btn-secondary">A2</button>
        <button type="button" class="btn btn-secondary">B1</button>
    </div>
</div>
<!-- <ItalianWords /> -->
<div id="italianWords">
</div>
<script src="/js/app.js"></script>
@endsection
