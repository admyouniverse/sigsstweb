@extends('layout')
@section('titulo', 'Pessoa')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Nova Pessoa
			<small>Pessoas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="{{ route('pessoas') }}">Pessoas</a></li>
			<li><a href="#">Nova Pessoa</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<pessoa-detalhes-componente >
	</pessoa-detalhes-componente>

	<modal-crop ></modal-crop>

	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection