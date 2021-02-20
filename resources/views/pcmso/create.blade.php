@extends('layout')
@section('titulo', 'PCMSO')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Novo PCMSO
			<small>Pessoas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="{{ route('pcmso.index') }}">PCMSO</a></li>
			<li><a href="#">Novo PCMSO</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<pcmso-detalhes  :empresadb="{{ json_encode(Session::get('empresa')) }}">
	</pcmso-detalhes>
	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection