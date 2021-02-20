@extends('layout')
@section('titulo', 'Prontuários Médicos')
@section('conteudo')

<prontuario-medico :empresa="{{ json_encode(Session::get('empresa')) }}"></prontuario-medico>

@endsection
