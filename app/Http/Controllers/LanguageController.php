<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{

    public function getVocabularyIT()
    {
        return view('vocabularyIT');
    }
    public function getVocabularyListIT()
    {
        return view('language.italian.vocabList');
    }
    public function getVocabularyTrainerIT()
    {
        return view('language.italian.trainer');
    }
    public function getConjugatorIT()
    {
        return view('language.italian.conjugator');
    }
    public function getGrammarIT()
    {
        return view('language.italian.grammar');
    }

    // SPANISH
    public function getVocabularyListES()
    {
        return view('language.spanish.vocabList');
    }
    public function getVocabularyTrainerES()
    {
        return view('language.spanish.trainer');
    }
    public function getConjugatorES()
    {
        return view('language.spanish.conjugator');
    }
    public function getGrammarES()
    {
        return view('language.spanish.grammar');
    }
}
