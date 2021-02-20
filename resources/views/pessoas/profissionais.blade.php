@extends('layout')
@section('titulo', 'Profissionais')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Profissionais
			<small>Listagem</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
            <li><a href="{{ route('pessoas') }}">Pessoas</a></li>
            <li><a href="{{ route('profissionais') }}">Profissionais</a></li>
		</ol>
	</section>

	<!-- Main content -->

	<profissional-componente>

	</profissional-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection