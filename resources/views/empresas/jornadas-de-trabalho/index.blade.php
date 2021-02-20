@extends('layout')
@section('titulo', 'Jornadas de Trabalho')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Jornadas de Trabalho
			<small>Empresas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Empresas</a></li>
			<li><a href="#">Jornadas de Trabalho</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<jornadas-componente>

	</jornadas-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
