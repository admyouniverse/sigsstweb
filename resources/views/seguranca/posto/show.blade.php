@extends('layout')
@section('titulo', 'Posto de Entrega')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			{{ $posto->descricao }}
			<small>Posto de Entrega</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">Posto Entrega</a></li>
			<li><a href="#">{{ $posto->descricao }}</a></li>
		</ol>
	</section>
	
	<posto-entrega-itens :empresa="{{ json_encode(Session::get('empresa')) }}" :posto="{{ json_encode($posto) }}" usuario="{{ ucfirst(json_decode(Session::get('usuario'), true)['nome']) }}"></posto-entrega-itens>
	
</div>
@endsection
