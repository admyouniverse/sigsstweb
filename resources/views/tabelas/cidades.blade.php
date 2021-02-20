@extends('layout')
@section('titulo', 'Cidades')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Cidades
			<small>Tabelas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Tabelas</a></li>
			<li><a href="#">Cidades</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<cidades-componente>

	</cidades-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
