@extends('layout')
@section('titulo', 'Matriz de Capacitação')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Matriz de Capacitação
			<small>Capacitação</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Capacitação</a></li>
			<li><a href="#">Matriz de Capacitação</a></li>
		</ol>
	</section>
	
	<empresa-ambiente-capacitacao :empresa="{{ json_encode(Session::get('empresa')) }}"></empresa-ambiente-capacitacao>
	
</div>
@endsection

