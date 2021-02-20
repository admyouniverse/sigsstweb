@extends('layout')
@section('titulo', 'Matriz de Risco')
@section('conteudo')
<matriz-detalhes :matriz="{{$json}}"></matriz-detalhes>
@endsection