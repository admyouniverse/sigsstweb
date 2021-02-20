@extends('layout')

@section('titulo', 'Categorias EPI')

@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Categorias EPI
			<small>Tabelas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Tabelas</a></li>
			<li><a href="#">EPI</a></li>
			<li><a href="#">Categorias</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<categorias-epi-componente>

	</categorias-epi-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
