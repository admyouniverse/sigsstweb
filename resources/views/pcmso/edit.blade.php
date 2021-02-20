@extends('layout')
@section('titulo', 'PCMSO')
@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        
        <ol class="breadcrumb float-left col-md-6 breadcrumb-left">
            <li><a href="#">PCMSO V {{ $pcmso->versao }} de {{ \Carbon\Carbon::parse($pcmso->dataHora)->format('d/m/Y') }} - Un {{ $pcmso->empresasContrato[0]['empresa']['nomeUnidade']}} - C {{ $pcmso->empresasContrato[0]['empresaContratante']['nomeFantasia']}}</a></li>
        </ol>

        <div class="col-md-6 float-left pr-0 text-right">
            <a href="/empresas/detalhes/{{ Session::has('empresa') ? Session::get('empresa')->idEmpresa : '' }}" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> Empresa</a>
            <a href="/gro" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> GRO</a>
            <a href="" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> LTCAT</a>
        </div>
    </section>

   <pcmso-detalhes :pcmsodb="{{ json_encode($pcmso) }}" :editar="true" :empresadb="{{ json_encode(Session::get('empresa')) }}"></pcmso-detalhes>

</div>
<!-- Modal -->
@endsection
