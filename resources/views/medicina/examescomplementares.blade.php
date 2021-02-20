@extends('layout')
@section('titulo', 'Exames Complementares')
@section('conteudo')

<exames-complementares-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></exames-complementares-componente>

@endsection
