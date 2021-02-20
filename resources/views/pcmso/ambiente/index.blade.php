@extends('layout')
@section('titulo', 'PCMSO :: Ambiente de Trabalho')
@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        
        <ol class="breadcrumb float-left col-md-6 breadcrumb-left">
            <li><a href="/pcmso/editar/{{ $pcmso->idPcmso }}">PCMSO V {{ $pcmso->versao }} de {{ \Carbon\Carbon::parse($pcmso->dataHora)->format('d/m/Y') }} - Un {{ $pcmso->empresasContrato[0]['empresa']['nomeUnidade']}} - Contrato {{ $pcmso->empresasContrato[0]['empresaContratante']['nomeFantasia']}}</a></li>
            <li><a href="#">Amb. {{ $ambiente->nomeAmbienteTrabalho }}</a></li>
        </ol>

        <div class="col-md-6 float-left pr-0 text-right">
            <a href="/empresas/detalhes/{{ Session::has('empresa') ? Session::get('empresa')->idEmpresa : '' }}" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> Empresa</a>
            <a href="/gro" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> GRO</a>
            <a href="" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px"> LTCAT</a>
        </div>

    </section>

   <pcmso-ambiente-detalhes :ambientepcmso="{{ json_encode($ambientePcmso) }}" :ambiente="{{ json_encode($ambiente) }}" :empresa="{{ json_encode(Session::get('empresa')) }}" :pcmso="{{ json_encode($pcmso) }}"></pcmso-ambiente-detalhes>

</div>
<!-- Modal -->
@endsection
