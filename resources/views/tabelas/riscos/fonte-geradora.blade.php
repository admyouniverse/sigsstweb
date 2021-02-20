@extends('layout')
@section('conteudo')

	<div class="container">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<h1>
				Fontes Geradoras
				<small>Tabelas</small>
			</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
				<li><a href="#">Tabelas</a></li>
				<li><a href="{{ route('riscos') }}">Riscos</a></li>
				<li class="active">Fontes Geradoras</li>
			</ol>
		</section>

		<!-- Main content -->
		
					<fontes-geradoras-componente>
						
					</fontes-geradoras-componente>
					
			
	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
