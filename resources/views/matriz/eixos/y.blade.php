@extends('layout')
@section('titulo', 'Eixo Y')
@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="row">
            <div class="col-md-3">
                <ol class="breadcrumb breadcrumb-left">
                    <li><a href="{{ url('/') }}"><i class="fa fa-home"></i> Início</a></li>
                    <li>Eixos</li>
                    <li class="active"><a href="">Eixo Y</a></li>
                </ol>
            </div>
            <div class="col-md-9 text-right mt-2">
                <a href="{{route('eixox')}}" class="btn btn-success btn-sm">Eixo X</a>
                <a href="{{route('eixoy')}}" class="btn btn-success btn-sm">Eixo Y</a>
                <a href="{{route('matriz')}}" class="btn btn-success btn-sm">Matrizes</a>
            </div>
        </div>
    </section>

    <!-- Main content -->

    <eixo-y-componente>

    </eixo-y-componente>


    <!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection
