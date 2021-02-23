<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>SIGSSO :: @yield('titulo', 'Página Inicial')</title>
    <!-- Scripts -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('fonts/fontawesome/css/all.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
    @yield('css')
</head>

<body>
    <div id="app">
        <div class="supbar">
            <div class="container">
                <img class="principal pull-left" src="{{ asset('img/proAtiva.png') }}" alt="">
                <span><strong>SIGSST</strong>WEB</span>
                @if(Session::has('empresa'))
                @if(property_exists(Session::get('empresa'), 'urlImagem'))
                {{-- {{ Session::get('empresa')->idEmpresa }} - {{ Session::get('empresa')->nomeFantasia }} --}}
                <img class="pull-right" src="{{  Session::get('empresa')->urlImagem}}" style="height: 100px; margin-top: -30px; margin-bottom: -30px;" alt="">
                @endif
                @endif
            </div>
        </div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav justify-content-center">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Tabelas</a>
                            <div class="dropdown-menu" role="menu">
                                <a href="{{ route('pessoas') }}" class="dropdown-item">Pessoas</a>
                                <a class="dropdown-item" href="{{ route('cbo') }}">CBO</a>
                                <a class="dropdown-item" href="{{ route('cidades') }}">Cidades</a>
                                <a class="dropdown-item" href="{{ route('cid') }}">CID</a>
                                <a class="dropdown-item" href="{{ route('cnae') }}">CNAE</a>
                                <a class="dropdown-item" href="{{ route('tabela.capacitacao') }}">Capacitação</a>
                                <div class="dropdown-submenu"><a class="dropdown-item">EPI</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('epi') }}">EPI</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('epi.categorias') }}">Categorias</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('epi.grupos') }}">Grupos</a>
                                        <a href="{{ route('epi.cor') }}" class="dropdown-item">Cor</a>
                                        <a href="{{ route('epi.tamanho') }}" class="dropdown-item">Tamanho</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu"><a class="dropdown-item">T. eSocial</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('gfip') }}" tabindex="-1">T2 - FAE</a>
                                        <a class="dropdown-item" tabindex="-1" href="{{ route('paises') }}">T6 -
                                            Paises</a>
                                        <a class="dropdown-item" tabindex="-1" href="{{ route('membros') }}">T13 - Parte
                                            do Corpo Atingida</a>
                                        <a class="dropdown-item" tabindex="-1" href="{{ route('agente-causador') }}">T14
                                            - Agente Causador do AT</a>
                                        <a class="dropdown-item"
                                            href="{{ route('agente-causador-de-doenca-profissional') }}">T15 - Agente
                                            Causador de Doença Profissional</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('gerador-do-acidente-de-trabalho') }}">T16 - Gerador do
                                            Acidente de Trabalho</a>
                                        <a class="dropdown-item" tabindex="-1" href="{{ route('lesoes') }}">T17 -
                                            Natureza de Lesão</a>
                                        <a class="dropdown-item" href="{{ route('motivo-de-afastamento') }}">T18 -
                                            Motivo de Afastamento</a>
                                        <a class="dropdown-item" href="{{ route('tipos-de-logradouro') }}">T20 - Tipos
                                            de Logradouro</a>
                                        <a class="dropdown-item"
                                            href="{{ route('codificacao-acidente-de-trabalho') }}">T24 - Codificação
                                            Acidente de Trabalho</a>
                                        <a class="dropdown-item" href="{{ route('atividade-periculosa') }}"
                                            class="dropdown-item">T28 - Atividade Periculosa</a>
                                    </div>
                                </div>
                                <div class="dropdown-submenu"><a class="dropdown-item">Fatores de Riscos</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" tabindex="-1" href="{{ route('riscos') }}">Fatores de
                                            Riscos</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('fonte-geradora') }}">Fontes Geradoras</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('unidade-de-medida') }}">Unidade de Medida</a>
                                        
                                        <div class="dropdown-submenu"><a class="dropdown-item">Matriz de Risco</a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="{{ route('matriz') }}">Matrizes</a>
                                                <a class="dropdown-item" href="{{ route('eixox') }}">Eixo X</a>
                                                <a class="dropdown-item" href="{{ route('eixoy') }}">Eixo Y</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="{{ route('exames') }}">Exames</a>
                                <div class="dropdown-submenu"><a class="dropdown-item">Prontuários</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('necessidades') }}">Necessidades</a>
                                        <a class="dropdown-item" tabindex="-1"
                                            href="{{ route('grupo-controle') }}">Grupo de Controle</a>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="{{ route('clinicas') }}">Clinicas</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Empresa</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" href="{{ route('empresa') }}">Empresas</a>
                                <a class="dropdown-item" href="{{ route('ambientes-de-trabalho') }}">Ambientes de
                                    Trabalho</a>
                                <a class="dropdown-item" href="{{ route('funcao') }}">Função</a>
                                <div class="dropdown-submenu"><a class="dropdown-item">EPI</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="{{ route('cadastro-epi') }}" tabindex="-1">Cadastro de EPI</a>
                                        <a class="dropdown-item" href="{{ route('fornecedores') }}">Fornecedores</a>
                                    </div>
                                </div>

                                <a class="dropdown-item" href="{{ route('jornadas-de-trabalho') }}">Jornada de
                                    Trabalho</a>
                                <a href="{{ route('eventos') }}" class="dropdown-item">Eventos</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Medicina</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" href="{{ route('aso') }}">Atestado de Saúde Ocupacional</a>
                                {{-- <a class="dropdown-item" href="#">Pré Atestado de Saúde Ocupacional</a> --}}
                                <a class="dropdown-item" href="{{ route('solicitacao-exames') }}">Solicitação de Exames</a>
                                <a class="dropdown-item" href="{{route('exames-complementares')}}">Exames Complementares</a>
                                <a class="dropdown-item" href="{{ route('prontuario-medico') }}">Prontuário Médico</a>
                                <a class="dropdown-item" href="{{ route('pcmso.index') }}">PCMSO</a>
                                <a class="dropdown-item" href="#">Relatórios</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Segurança</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" href="#">CIPA</a>
                                <a class="dropdown-item" href="#">LTCAT</a>
                                <a class="dropdown-item" href="{{ route('gro.index') }}">GRO</a>
                                <div class="dropdown-submenu"><a class="dropdown-item">EPI</a>
                                    <div class="dropdown-menu">    
                                        <a href="{{ route('ficha-entrega') }}" class="dropdown-item">Ficha de Entrega</a>
                                        <div class="dropdown-submenu"><a class="dropdown-item" href="{{ route('entrega-epi') }}">Entrega de Epi</a>
                                            @if(Session::has('empresa') && Session::has('postos'))
                                            <div class="dropdown-menu">
                                                @if(Session::get('postos') != null)
                                                @foreach(Session::get('postos') as $posto)
                                                <a class="dropdown-item" href="{{ route('posto-entrega.show', $posto['idPostoEntrega']) }}?acao=entrega" tabindex="-1">{{ $posto['descricao'] }}</a>
                                                @endforeach
                                                @else
                                                <span class="dropdown-item disabled">Sem postos</span>
                                                @endif
                                            </div>
                                            
                                            @endif
                                        </div>
                                        <div class="dropdown-submenu"><a href="{{ route('posto-entrega') }}" class="dropdown-item">Ponto de Entrega</a>
                                            <div class="dropdown-menu">
                                                @if(Session::has('empresa') && Session::has('postos'))
                                                    @if(Session::get('postos') != null)
                                                    @foreach(Session::get('postos') as $posto)
                                                    <a class="dropdown-item" href="{{ route('posto-entrega.show', $posto['idPostoEntrega']) }}" tabindex="-1">{{ $posto['descricao'] }}</a>
                                                    @endforeach
                                                    @else
                                                    <span class="dropdown-item disabled">Sem postos</span>
                                                    @endif
                                                @endif
                                            </div>
                                        </div>
                                        <a class="dropdown-item" href="{{ route('matriz-de-epi') }}" tabindex="-1">Matriz de EPI</a>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="#">Ordem de Serviço</a>
                                <a class="dropdown-item" href="#">Inspeção de Segurança</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">Capacitações</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" href="{{ route('capacitacao') }}">Capacitação na Empresa</a>
                                <a class="dropdown-item" href="{{ route('capacitacao.matriz') }}">Matriz de Capacitação</a>
                                
                            </div>
                        </li>

                    </ul>
                    <ul class="navbar-nav ml-auto">
                        
                        @if(Session::has('empresa'))
                            <empresa-sessao :empresa="{{json_encode(Session::get('empresa'))}}"></empresa-sessao>
                        @else 
                            <empresa-sessao></empresa-sessao>
                        @endif

                        <li class="nav-item">
                        <a href="{{ url('logout') }}" class="nav-link btn-voltar">{{ ucfirst(json_decode(Session::get('usuario'), true)['nome']) }} <i class="fas fa-sign-out-alt"></i></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <img src="{{ asset('images/bglogo.png') }}" style="position: absolute;
            opacity: 0.04;
            margin-top: 18px;
            width: auto;
            height: 85vh;
            left: 50%;
            transform: translateX(-50%);" alt="">
            @yield('conteudo')
        </main>
    </div>
    <div class="modal fade" id="listaEmpresas" tabindex="-1" role="dialog" aria-labelledby="listaEmpresasLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h4>Escolha a empresa para adicionar na sessão:</h4>
                        </div>
                        <div class="col-md-12">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                        <th class="text-center"><strong>ID </strong></th>
                                        <th class="text-center"><strong>Nome</strong></th>
                                        <th class="text-center"><strong>Unidade</strong></th>
                                        <th class="text-center"><strong>CNPJ/CPF
                                                {{ Route::currentRouteName() }}</strong></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" onclick="limparSessao()" class="btn btn-primary">Limpar sessão</button>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>

    <script src="{{ asset('js/scroll.js') }}"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js"></script>
    <script src="{{ asset('js/datatables.js') }}"></script>
    <script src="//cdn.datatables.net/plug-ins/1.10.10/sorting/datetime-moment.js"></script>
    <script src="{{ asset('fonts/fontawesome/js/all.min.js') }}"></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
    <script>
        if (window.name == "reloader") {
            window.name = "";
            location.reload();
        } else {
            $('#app').css({opacity: 1});
        }

        window.onbeforeunload = function () {
            window.name = "reloader";
        }
    </script>



    @yield('script')
</body>

</html>
