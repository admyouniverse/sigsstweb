@extends('layout')
@section('titulo', 'Estoque')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			{{ $item->gradeEmpresaEpi['cadastroEpiCa']['cadastroEpi']['epi']['descricao'] }}
			<small>Segurança</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">Posto Entrega</a></li>
			<li><a href="#">{{ $posto->descricao }}</a></li>
			<li><a href="#">Itens</a></li>
			<li><a href="#">{{ $item->gradeEmpresaEpi['cadastroEpiCa']['cadastroEpi']['epi']['descricao'] }}</a></li>
		</ol>
	</section>
	
	<entrada-epi :posto="{{ json_encode($posto) }}" :item="{{ json_encode($item) }}" :empresa="{{ json_encode(Session::get('empresa')) }}"></entrada-epi>
	
</div>
@endsection
