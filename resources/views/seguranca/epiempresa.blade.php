@extends('layout')
@section('titulo', 'EPI na Empresa')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			EPI na Empresa
			<small>Segurança</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">EPI na Empresa</a></li>
		</ol>
	</section>
	
	<epi-empresa-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></epi-empresa-componente>
	
</div>
@endsection
