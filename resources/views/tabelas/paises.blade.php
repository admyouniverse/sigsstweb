@extends('layout')
@section('titulo', 'Paises')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Paises
			<small>Tabelas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Tabelas</a></li>
			<li><a href="#">Paises</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<paises-componente>

	</paises-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
