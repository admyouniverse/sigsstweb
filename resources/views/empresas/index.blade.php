@extends('layout')
@section('titulo', 'Empresas')
@section('css')


@endsection
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Empresas
			<small>Listagem</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Empresas</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<empresa-listar-componente>

	</empresa-listar-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
@section('script')

@endsection