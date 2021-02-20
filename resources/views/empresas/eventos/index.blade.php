@extends('layout')
@section('titulo', 'Eventos')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Eventos
			<small>Empresas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Empresas</a></li>
			<li><a href="#">Eventos</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<eventos-componente>

	</eventos-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
