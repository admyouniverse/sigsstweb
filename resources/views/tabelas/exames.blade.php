@extends('layout')
@section('titulo', 'Exames')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Exames
			<small>Tabelas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Tabelas</a></li>
			<li><a href="#">Exames</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<exames-componente>

	</exames-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
