@extends('layout')
@section('titulo', 'Pessoa')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			{{ $pessoa->nomePessoa }}
			<small>Pessoas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="{{ route('pessoas') }}">Pessoas</a></li>
			<li><a href="#">{{ $pessoa->nomePessoa }}</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<pessoa-detalhes-componente :pessoadb="{{json_encode($pessoa)}}" :editar="true">

	</pessoa-detalhes-componente>

	<modal-crop ></modal-crop>

	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection