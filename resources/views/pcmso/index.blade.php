@extends('layout')
@section('titulo', 'PCMSO')
@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <ol class="breadcrumb float-left pl-0 col-md-6 breadcrumb-left">
            <li class="active"><a href="#">PCMSO {{ Session::has('empresa') ? Session::get('empresa')->nomeFantasia : '' }} {{ Session::has('empresa') && Session::get('empresa')->nomeUnidade ? "- " . Session::get('empresa')->nomeUnidade : '' }}</a></li>
        </ol>

        <div class="col-md-6 float-left pr-0 text-right">
            <a href="/empresas/detalhes/{{ Session::has('empresa') ? Session::get('empresa')->idEmpresa : '' }}" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px">Empresa</a>
            <a href="/gro" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px">GRO</a>
            <a href="" class="btn btn-default btn-sm bg-transparent"><img src="/img/bloco.png" width="21px">LTCAT</a>
        </div>
    </section>

    @if(Session::has('empresa'))
    <pcmso-componente :empresa="{{ json_encode(Session::get('empresa')) }}"></pcmso-componente>
    @else
    <section class="content mt-4">
        <div class="box box-default">
            <div class="box-body text-center">
                <h4>Antes de continuar, selecione uma empresa.</h4>
                <button class="btn btn-success"  data-toggle="modal" data-target="#listaEmpresas">Selecionar empresa</button>
            </div>
        </div>
    </section>
    @endif

</div>
<!-- Modal -->
@endsection
@section('script')
@if(!Session::has('empresa'))
<script defer>
    $(document).ready(function() { 
  
    $('#listaEmpresas').modal('show');
  
});

     
</script>
    @endif

@endsection