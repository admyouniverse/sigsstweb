@extends('layout')
@section('titulo', 'Pessoas')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Pessoas
			<small>Listagem</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Pessoas</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<pessoa-listar-componente>

	</pessoa-listar-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
