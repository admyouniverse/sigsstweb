@extends('layout')
@section('titulo', 'Atestado de Saúde Ocupacional')
@section('conteudo')
<div class="container">
    
<aso-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></aso-componente>
@endsection