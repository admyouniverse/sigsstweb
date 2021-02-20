@extends('layout')
@section('titulo', 'Empresas')
@section('conteudo')

<div class="container">
	<!-- Content Header (Page header) -->
	<section class="content-header pt-0">
		<div class="row pl-3 pt-2">
		<ol class="breadcrumb float-left col-md-6 breadcrumb-left">
    		<li><a href="{{ route('empresa') }}">Empresas</a></li>
            <li class="active"><a href="#" > {{ isset($empresa->nomeFantasia) ? $empresa->nomeFantasia : ' ' }} </a></li>
        </ol>

        <div class="col-md-6 float-left pr-0 text-right">
			<a href="/gro" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> GRO</a>
            <a href="/pcmso" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> PCMSO</a>
            <a href="" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> LTCAT</a>
		</div>
		</div>
	</section>
	
</div>

	<empresa-detalhes-componente :empresadb="{{json_encode($empresa)}}" :editar="true">

	</empresa-detalhes-componente>

	<modal-crop ></modal-crop>

	<!-- /.content -->

<!-- /.container -->

<!-- Modal -->
@endsection