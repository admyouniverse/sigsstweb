@extends('layout')
@section('titulo', 'Posto de Entrega')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Posto de Entrega
			<small>Segurança</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">Posto Entrega</a></li>
		</ol>
	</section>
	
	<posto-entrega :empresa="{{ json_encode(Session::get('empresa')) }}" ></posto-entrega>
	
</div>
@endsection
