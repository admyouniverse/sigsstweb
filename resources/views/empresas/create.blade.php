@extends('layout')
@section('titulo', 'Empresas')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Nova Empresa
			<small>Empresas</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="{{ route('empresa') }}">Empresas</a></li>
			<li><a href="#">Nova Empresa</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<empresa-detalhes-componente :empresadb="[]">

	</empresa-detalhes-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection