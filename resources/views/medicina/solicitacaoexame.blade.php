@extends('layout')
@section('titulo', 'Solicitação de Exames')
@section('conteudo')
<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb float-left pl-0 col-md-6 breadcrumb-left">
            <li class="active"><a href="#">Solicitações de Exame</a></li>
        </ol>
    </section>
<solicitacao-exame :empresa="{{ json_encode(Session::get('empresa')) }}"></solicitacao-exame>
@endsection