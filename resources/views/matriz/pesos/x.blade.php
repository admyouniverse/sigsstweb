@extends('layout')
@section('titulo', 'Peso X')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="row">
            <div class="col-md-3">
        <ol class="breadcrumb breadcrumb-left">
            <li><a href="{{ url('/') }}"><i class="fa fa-home"></i> Início</a></li>
            <li>Pesos</li>
            <li class="active"><a href="">Peso X</a></li>
        </ol>
    </div>
    <div class="col-md-9 text-right mt-2">
        <a href="{{route('eixox')}}" class="btn btn-success btn-sm">Eixo X</a>
        <a href="{{route('eixoy')}}" class="btn btn-success btn-sm">Eixo Y</a>
        <a href="{{route('pesox')}}" class="btn btn-success btn-sm">Peso X</a>
        <a href="{{route('pesoy')}}" class="btn btn-success btn-sm">Peso Y</a>
        <a href="{{route('criterio')}}" class="btn btn-success btn-sm">Critérios</a>
    </div>
</div>
    </section>

	<!-- Main content -->

	<peso-x-componente>

	</peso-x-componente>


	<!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
