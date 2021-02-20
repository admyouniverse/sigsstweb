@extends('layout')
@section('titulo', 'Capacitação na Empresa')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Capacitação na Empresa
			<small>Capacitação</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Capacitação</a></li>
			<li><a href="#">Capacitação na Empresa</a></li>
		</ol>
	</section>
	
	<empresa-capacitacao-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></empresa-capacitacao-componente>
	
</div>
@endsection
