@extends('layouts.app')

@section('content')

<div class="container-fluid">
    <div class="d-flex justify-content-center">
        <h1>Vocabulary</h1>

    </div>
    <h3 class="d-flex justify-content-center">Please choose a language</h3>
    <div class="d-flex justify-content-center">
        <!-- <span class="flag-icon flag-icon-gr"></span>
        <span class="flag-icon flag-icon-gr flag-icon-squared"></span> -->

        <a href="http://localhost/portfolio/language/public/vocabulary/italian" class="btn btn-dark btn-lg">Italian</a>
        <a href="http://localhost/portfolio/language/public/vocabulary/german" class="btn btn-dark btn-lg">German</a>
        <a href="http://localhost/portfolio/language/public/vocabulary/spanish" class="btn btn-dark btn-lg">Spanish</a>
    </div>
</div>
@endsection
