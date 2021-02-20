@extends('layout')

@section('titulo', 'Grupos EPI')

@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Grupos EPI
			<small>Tabelas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Tabelas</a></li>
			<li><a href="#">EPI</a></li>
			<li><a href="#">Grupos</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<grupos-epi-componente>

	</grupos-epi-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
