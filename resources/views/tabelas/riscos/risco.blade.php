@extends('layout')

@section('titulo', 'Riscos')

@section('css')
<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
@endsection

@section('conteudo')

<div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Fatores de Riscos
            <small>Tabelas</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i> Início</a></li>
            <li><a href="#">Tabelas</a></li>
            <li><a href="#">Riscos</a></li>
        </ol>
    </section>

    <!-- Main content -->

    <riscos-componente>

    </riscos-componente>


    <!-- /.content -->
</div>
<!-- /.container -->

<!-- Modal -->
@endsection

@section('script')
<script>
	function teste() {
		alert('eae');
		$(".dropdown dt a").click(function () {
            $(".dropdown dd ul").toggle();
        });
	}

  
</script>
@endsection
