@extends('layout')
@section('titulo', 'Matriz de EPI')
@section('conteudo')
<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1>
			Matriz de EPI
			<small>Segurança</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i> Início</a></li>
			<li><a href="#">Segurança</a></li>
			<li><a href="#">Matriz de EPI</a></li>
		</ol>
	</section>
	
	<empresa-ambiente-epi :empresa="{{ json_encode(Session::get('empresa')) }}"></empresa-ambiente-epi>
	
</div>
@endsection
