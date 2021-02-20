@extends('layout')
@section('titulo', 'Fornecedores')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Fornecedores
			<small>Empresa</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Empresa</a></li>
			<li><a href="#">EPI</a></li>
			<li><a href="#">Fornecedores</a></li>
		</ol>
	</section>
	
	<fornecedores-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></fornecedores-componente>
	
</div>
@endsection
