@extends('layout')
@section('titulo', 'Fichas de Entrega')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Fichas de Entrega
			<small>Segurança</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">EPI</a></li>
			<li><a href="#">Posto Entrega</a></li>
		</ol>
	</section>
	
	<ficha-entrega :empresa="{{ json_encode(Session::get('empresa')) }}"></ficha-entrega>
	
</div>
@endsection
