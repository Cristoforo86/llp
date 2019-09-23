<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/vocabulary', 'PagesController@getVocabulary');
Route::get('/verbs', 'PagesController@getVerbs');
Route::get('/declensions', 'PagesController@getDeclensions');

// ITALIAN
Route::get('/italian/vocabulary', 'LanguageController@getVocabularyIT');
Route::get('/italian/vocabulary/list', 'LanguageController@getVocabularyListIT');
Route::get('/italian/vocabulary/list/a1', 'ItalianController@index');
Route::get('/italian/vocabulary/list/startWith', 'ItalianController@startWith');
Route::get('/italian/vocabulary/trainer', 'LanguageController@getVocabularyTrainerIT');
Route::get('/italian/verbs/conjugator', 'LanguageController@getConjugatorIT');
Route::get('/italian/grammar/', 'LanguageController@getGrammarIT');

// SPANISH
Route::get('/spanish/vocabulary', 'LanguageController@getVocabularyES');
Route::get('/spanish/vocabulary/list', 'LanguageController@getVocabularyListES');
Route::get('/spanish/vocabulary/trainer', 'LanguageController@getVocabularyTrainerES');
Route::get('/spanish/verbs/conjugator', 'LanguageController@getConjugatorES');
Route::get('/spanish/grammar/', 'LanguageController@getGrammarES');
