@extends('layout')
@section('titulo', 'GRO')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Novo GRO
			<small>Pessoas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="{{ route('gro.index') }}">GRO</a></li>
			<li><a href="#">Novo GRO</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<ppra-detalhes  :empresadb="{{ json_encode(Session::get('empresa')) }}">
	</ppra-detalhes>
	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection