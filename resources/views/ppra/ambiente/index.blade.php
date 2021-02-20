@extends('layout')
@section('titulo', 'GRO :: Ambiente de Trabalho')
@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        
        <ol class="breadcrumb float-left col-md-6 breadcrumb-left">
            <li><a href="/pcmso/editar/{{ $ppra->idPpra }}">GRO V {{ $ppra->versao }} de {{ \Carbon\Carbon::parse($ppra->dataHora)->format('d/m/Y') }} - Un {{ $ppra->empresasContrato[0]['empresa']['nomeUnidade']}} - Contrato {{ $ppra->empresasContrato[0]['empresaContratante']['nomeFantasia']}}</a></li>
            <li><a href="#">Amb. {{ $ambiente->nomeAmbienteTrabalho }}</a></li>
        </ol>

        <div class="col-md-6 float-left pr-0 text-right">
            <a href="/empresas/detalhes/{{ Session::has('empresa') ? Session::get('empresa')->idEmpresa : '' }}" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> Empresa</a>
            <a href="/pcmso" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> PCMSO</a>
            <a href="" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> LTCAT</a>
        </div>

    </section>

   <ppra-ambiente-detalhes :ambienteppra="{{ json_encode($ambientePpra) }}" :ambiente="{{ json_encode($ambiente) }}" :empresa="{{ json_encode(Session::get('empresa')) }}" :ppra="{{ json_encode($ppra) }}"></ppra-ambiente-detalhes>

</div>
<!-- Modal -->
@endsection
