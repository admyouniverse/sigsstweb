<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::group(['middleware' => ['logado']], function () {
    Route::get('/', 'HomeController@index');

    // Route::get('funcionarios', function () {
    //     return view('funcionarios');
    // });

    Route::prefix('empresas')->group(function () {

        Route::get('/', 'EmpresasController@index')->name('empresa');
        Route::get('/detalhes/{id}', 'EmpresasController@show')->name('empresa.show');
        Route::post('{id}/editar', 'EmpresasController@update');
        Route::get('historico/{id}/', 'EmpresasController@historico');
        Route::post('historico/', 'EmpresasController@alteraHistorico');
        Route::post('/', 'EmpresasController@store');
        Route::get('adicionar', 'EmpresasController@create');
        Route::post('imagem', 'EmpresasController@imagem');
        Route::get('list', 'EmpresasController@list');
        Route::get('funcionarios/{id}', 'EmpresasController@funcionarios');

        Route::get('/profissionais', 'Empresa\ProfissionaisController@index')->name('profissionais');
        Route::post('/profissionais/post/{id}', 'Empresa\ProfissionaisController@post');
        Route::get('/profissionais/list/{id}', 'Empresa\ProfissionaisController@list');

        Route::get('filiais/{cnpj}', 'EmpresasController@filiais');

        Route::prefix('eventos')->group(function () {
            Route::get('/', 'Empresa\EventosController@index')->name('eventos');
            Route::post('/', 'Empresa\EventosController@store');
            Route::post('empresa', 'Empresa\EventosController@storeEmpresa');
            Route::get('list', 'Empresa\EventosController@list');
            Route::get('list/{id}', 'Empresa\EventosController@listEmpresa');
            Route::post('update/{id}', 'Empresa\EventosController@update');
            Route::get('remover/{id}', 'Empresa\EventosController@destroy');
            Route::get('remover/empresa/{id}', 'Empresa\EventosController@destroyEmpresa');
            Route::get('buscar/{selecionado}/{termo}', 'Empresa\EventosController@buscar');
        });

        Route::get('contratos/{id}', 'EmpresasController@contratos');
        Route::get('contratos/{id}/contratados', 'EmpresasController@contratados');
        Route::post('contratos/novo/{id}', 'EmpresasController@novoContrato');
        Route::post('contratos/atualizar/{id}', 'EmpresasController@atualizarContrato');
        Route::get('contratos/remover/{id}/{contrato}', 'EmpresasController@removerContrato');

        Route::get('epis/{id}', 'Empresa\EmpresasEpiController@index');
        Route::post('epis/novo/{id}', 'Empresa\EmpresasEpiController@create');
        Route::post('epis/atualizar/{id}', 'Empresa\EmpresasEpiController@update');
        Route::get('epis/remover/{id}/{epi}', 'Empresa\EmpresasEpiController@destroy');
        Route::get('epis/cas/{id}', 'Empresa\EmpresasEpiController@ca');
        Route::post('epis/cas/novo/{id}', 'Empresa\EmpresasEpiController@novoCa');
        Route::post('epis/cas/atualizar/{id}', 'Empresa\EmpresasEpiController@atualizarCa');
        Route::get('epis/cas/remover/{id}/{ca}', 'Empresa\EmpresasEpiController@removerCa');

     

        Route::prefix('ambientes-de-trabalho')->group(function () {
            Route::get('/', 'Empresa\AmbienteTrabalhoController@index')->name('ambientes-de-trabalho');
            Route::post('/', 'Empresa\AmbienteTrabalhoController@store');
            Route::get('list', 'Empresa\AmbienteTrabalhoController@list');
            Route::post('update/{id}', 'Empresa\AmbienteTrabalhoController@update');
            Route::get('remover/{id}', 'Empresa\AmbienteTrabalhoController@destroy');
            Route::get('remover/epi/{id}', 'Empresa\AmbienteTrabalhoController@destroyEpi');
            Route::get('buscar/{selecionado}/{termo}', 'Empresa\AmbienteTrabalhoController@buscar');
            Route::get('list/{cnpj}', 'Empresa\AmbienteTrabalhoController@subcodigo');
            Route::get('epis/{id}', 'Empresa\AmbienteTrabalhoController@epis');
            Route::post('epi/{id}', 'Empresa\AmbienteTrabalhoController@novoEpi');

            Route::get('capacitacoes/{id}', 'Empresa\AmbienteTrabalhoController@capacitacoes');
            Route::post('capacitacao/{id}', 'Empresa\AmbienteTrabalhoController@novaCapacitacao');

            Route::get('origem/{id}', 'Empresa\AmbienteTrabalhoController@origem');

            Route::get('{ambiente}/funcoes', 'Empresa\FuncaoController@funcaoAmbiente');

        });

        Route::prefix('funcao')->group(function () {
            Route::get('/', 'Empresa\FuncaoController@index')->name('funcao');
            Route::post('/', 'Empresa\FuncaoController@store');
            Route::get('list', 'Empresa\FuncaoController@list');
            Route::post('update/{id}', 'Empresa\FuncaoController@update');
            Route::get('remover/{id}', 'Empresa\FuncaoController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'Empresa\FuncaoController@buscar');
        });

        Route::prefix('jornadas-de-trabalho')->group(function () {
            Route::get('/', 'Empresa\JornadaController@index')->name('jornadas-de-trabalho');
            Route::post('/', 'Empresa\JornadaController@store');
            Route::get('list', 'Empresa\JornadaController@list');
            Route::post('update/{id}', 'Empresa\JornadaController@update');
            Route::get('remover/{id}', 'Empresa\JornadaController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'Empresa\JornadaController@buscar');
        });

        Route::prefix('empregados')->group(function () {
            Route::post('admissional', 'Empresa\EmpregadoController@admissional');
            Route::get('demitidos/{id}', 'Empresa\EmpregadoController@demitidos');
            Route::post('alteracao', 'Empresa\EmpregadoController@alteracao');
            Route::post('alteracao/movimentacao', 'Empresa\EmpregadoController@movimentacao');
            Route::get('historico/{idPessoa}/{empresa}', 'Empresa\EmpregadoController@historico');
        });
    });

    Route::prefix('pessoas')->group(function () {
        Route::get('/', 'PessoasController@index')->name('pessoas');
        Route::get('/detalhes/{id}', 'PessoasController@show');
        Route::post('{id}/editar', 'PessoasController@update');
        Route::post('/', 'PessoasController@store');
        Route::get('adicionar', 'PessoasController@create');
        Route::post('imagem', 'PessoasController@imagem');
        Route::get('list', 'PessoasController@list');

        Route::get('list/autonomo/{id}', 'PessoasController@listAutonomo');
        Route::get('list/empregado/{id}', 'PessoasController@listEmpregado');
        Route::get('cpf/{cpf}', 'PessoasController@cpf');

        Route::get('/capacitacao/list/{id}', 'Pessoa\CapacitacaoController@list');

        Route::get('/funcao/list/{id}', 'PessoasController@funcoes');

        Route::post('/capacitacao/list/{id}', 'Pessoa\CapacitacaoController@store');
        Route::get('/capacitacao/deletar/{id}/{pessoa}', 'Pessoa\CapacitacaoController@deletar');
    });

    Route::prefix('tabelas')->group(function () {

        Route::prefix('cbo')->group(function () {
            Route::get('/', 'CBOController@index')->name('cbo');
            Route::post('/', 'CBOController@store');
            Route::post('update/{id}', 'CBOController@update');
            Route::get('list', 'CBOController@list');
            Route::get('remover/{id}', 'CBOController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CBOController@buscar');
        });

        Route::prefix('clinica')->group(function () {
            Route::get('/', 'ClinicaController@index')->name('clinicas');
            Route::post('/', 'ClinicaController@store');
            Route::post('update/{id}', 'ClinicaController@update');
            Route::get('list', 'ClinicaController@list');
            Route::get('remover/{id}', 'ClinicaController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'ClinicaController@buscar');
        });

        Route::prefix('atividade-periculosa')->group(function () {
            Route::get('/', 'AtividadePericulosaController@index')->name('atividade-periculosa');
            Route::post('/', 'AtividadePericulosaController@store');
            Route::post('update/{id}', 'AtividadePericulosaController@update');
            Route::get('list', 'AtividadePericulosaController@list');
            Route::get('remover/{id}', 'AtividadePericulosaController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'AtividadePericulosaController@buscar');
        });

        Route::prefix('cidades')->group(function () {
            Route::get('/', 'CidadeController@index')->name('cidades');
            Route::post('/', 'CidadeController@store');
            Route::get('list', 'CidadeController@list');
            Route::post('update/{id}', 'CidadeController@update');
            Route::get('remover/{id}', 'CidadeController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CidadeController@buscar');
        });

        Route::prefix('paises')->group(function () {
            Route::get('/', 'PaisesController@index')->name('paises');
            Route::post('/', 'PaisesController@store');
            Route::get('list', 'PaisesController@list');
            Route::post('update/{id}', 'PaisesController@update');
            Route::get('remover/{id}', 'PaisesController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'PaisesController@buscar');
        });

        Route::prefix('jornadas-de-trabalho')->group(function () {
            Route::get('/', 'JornadasController@index');
            Route::post('/', 'JornadasController@store');
            Route::get('list', 'JornadasController@list');
            Route::post('update/{id}', 'JornadasController@update');
            Route::get('remover/{id}', 'JornadasController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'JornadasController@buscar');
        });

        Route::prefix('ambientes-de-trabalho')->group(function () {
            Route::get('list', 'AmbientesController@list');
        });

        Route::prefix('funcoes')->group(function () {
            Route::get('/', 'FuncoesController@index')->name('funcoes');
            Route::post('/', 'FuncoesController@store');
            Route::get('list', 'FuncoesController@list');
            Route::post('update/{id}', 'FuncoesController@update');
            Route::get('remover/{id}', 'FuncoesController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'FuncoesController@buscar');
        });

        Route::prefix('cid')->group(function () {
            Route::get('/', 'CIDController@index')->name('cid');
            Route::post('/', 'CIDController@store');
            Route::get('list', 'CIDController@list');
            Route::post('update/{id}', 'CIDController@update');
            Route::get('remover/{id}', 'CIDController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CIDController@buscar');
        });

        Route::prefix('fae')->group(function () {
            Route::get('/', 'GFIPController@index')->name('gfip');
            Route::post('/', 'GFIPController@store');
            Route::get('list', 'GFIPController@list');
            Route::post('update/{id}', 'GFIPController@update');
            Route::get('remover/{id}', 'GFIPController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'GFIPController@buscar');
        });

        Route::prefix('cnae')->group(function () {
            Route::get('/', 'CNAEController@index')->name('cnae');
            Route::post('/', 'CNAEController@store');
            Route::get('list', 'CNAEController@list');
            Route::post('update/{id}', 'CNAEController@update');
            Route::get('remover/{id}', 'CNAEController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CNAEController@buscar');
        });

        Route::prefix('capacitacao')->group(function () {
            Route::get('/', 'CapacitacaoController@index')->name('tabela.capacitacao');
            Route::post('/', 'CapacitacaoController@store');
            Route::get('list', 'CapacitacaoController@list');
            Route::post('update/{id}', 'CapacitacaoController@update');
            Route::get('remover/{id}', 'CapacitacaoController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CapacitacaoController@buscar');
        });

        Route::prefix('epi')->group(function () {
            Route::get('/', 'EpiController@index')->name('epi');
            Route::post('/', 'EpiController@store');
            Route::get('list', 'EpiController@list');
            Route::post('update/{id}', 'EpiController@update');
            Route::get('remover/{id}', 'EpiController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'EpiController@buscar');

            Route::get('categorias/list', 'EpiController@categoriasList');
            Route::post('categorias/', 'EpiController@categoriasPost');
            Route::post('categorias/{id}', 'EpiController@categoriasUpdate');
            Route::get('categorias', 'EpiController@categorias')->name('epi.categorias');
            Route::get('categorias/remover/{id}', 'EpiController@categoriasDestroy');
            Route::get('categorias/buscar/{selecionado}/{termo}', 'EpiController@buscarCategorias');

            Route::get('grupos/list', 'EpiController@gruposList');
            Route::post('grupos/', 'EpiController@gruposPost');
            Route::post('grupos/{id}', 'EpiController@gruposUpdate');
            Route::get('grupos', 'EpiController@grupos')->name('epi.grupos');
            Route::get('grupos/remover/{id}', 'EpiController@gruposDestroy');
            Route::get('grupos/buscar/{selecionado}/{termo}', 'EpiController@buscarCategorias');

            Route::get('/cor', 'Epi\CorController@index')->name('epi.cor');
            Route::post('/cor', 'Epi\CorController@post');
            Route::get('/cor/remover/{id}', 'Epi\CorController@destroy'); 

            Route::get('/tamanho', 'Epi\TamanhoController@index')->name('epi.tamanho');
            Route::post('/tamanho', 'Epi\TamanhoController@post');
            Route::get('/tamanho/remover/{id}', 'Epi\TamanhoController@destroy'); 
        });

        Route::prefix('riscos')->group(function () {
            Route::get('/', 'RiscoController@index')->name('riscos');
            Route::post('/', 'RiscoController@store');
            Route::get('list', 'RiscoController@list');
            Route::post('update/{id}', 'RiscoController@update');
            Route::get('remover/{id}', 'RiscoController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'RiscoController@buscar');
            Route::get('{id}/exames', 'RiscoController@exames');
            Route::get('{id}/unidades', 'RiscoController@unidades');

            Route::prefix('fontes-geradoras')->group(function () {
                Route::get('/', 'FonteGeradoraController@index')->name('fonte-geradora');
                Route::post('/', 'FonteGeradoraController@store');
                Route::get('list', 'FonteGeradoraController@list');
                Route::post('update/{id}', 'FonteGeradoraController@update');
                Route::get('remover/{id}', 'FonteGeradoraController@destroy');
                Route::get('buscar/{selecionado}/{termo}', 'FonteGeradoraController@buscar');
            });

            Route::prefix('unidades-de-medida')->group(function () {
                Route::get('/', 'UnidadeDeMedidaController@index')->name('unidade-de-medida');
                Route::post('/', 'UnidadeDeMedidaController@store');
                Route::get('list', 'UnidadeDeMedidaController@list');
                Route::post('update/{id}', 'UnidadeDeMedidaController@update');
                Route::get('remover/{id}', 'UnidadeDeMedidaController@destroy');
                Route::get('buscar/{selecionado}/{termo}', 'UnidadeDeMedidaController@buscar');
            });

        });

        Route::prefix('exames')->group(function () {
            Route::get('/', 'ExameController@index')->name('exames');
            Route::post('/', 'ExameController@store');
            Route::get('list', 'ExameController@list');
            Route::post('update/{id}', 'ExameController@update');
            Route::get('remover/{id}', 'ExameController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'ExameController@buscar');
        });

        Route::prefix('prontuarios')->group(function () {

            Route::prefix('agente-causador')->group(function () {
                Route::get('/', 'AgenteCausadorController@index')->name('agente-causador');
                Route::post('/', 'AgenteCausadorController@store');
                Route::get('list', 'AgenteCausadorController@list');
                Route::post('update/{id}', 'AgenteCausadorController@update');
                Route::get('remover/{id}', 'AgenteCausadorController@destroy');
                Route::get('buscar/{selecionado}/{termo}', 'AgenteCausadorController@buscar');
            });

            Route::prefix('necessidades')->group(function () {
                Route::get('/', 'NecessidadesController@index')->name('necessidades');
                Route::post('/', 'NecessidadesController@store');
                Route::get('list', 'NecessidadesController@list');
                Route::post('update/{id}', 'NecessidadesController@update');
                Route::get('remover/{id}', 'NecessidadesController@destroy');
                Route::get('buscar/{selecionado}/{termo}', 'NecessidadesController@buscar');
            });


            Route::prefix('grupo-controle')->group(function () {
                Route::get('/', 'GruposDeControleController@index')->name('grupo-controle');
                Route::post('/', 'GruposDeControleController@store');
                Route::get('list', 'GruposDeControleController@list');
                Route::post('update/{id}', 'GruposDeControleController@update');
                Route::get('remover/{id}', 'GruposDeControleController@destroy');
                Route::get('buscar/{selecionado}/{termo}', 'GruposDeControleController@buscar');
            });

        });

        Route::prefix('parte-do-corpo-atingida')->group(function () {
            Route::get('/', 'MembrosController@index')->name('membros');
            Route::post('/', 'MembrosController@store');
            Route::get('list', 'MembrosController@list');
            Route::post('update/{id}', 'MembrosController@update');
            Route::get('remover/{id}', 'MembrosController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'MembrosController@buscar');
        });

        Route::prefix('lesoes')->group(function () {
            Route::get('/', 'LesoesController@index')->name('lesoes');
            Route::post('/', 'LesoesController@store');
            Route::get('list', 'LesoesController@list');
            Route::post('update/{id}', 'LesoesController@update');
            Route::get('remover/{id}', 'LesoesController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'LesoesController@buscar');
        });

        Route::prefix('gerador-do-acidente-de-trabalho')->group(function () {
            Route::get('/', 'AtividadeController@index')->name('gerador-do-acidente-de-trabalho');
            Route::post('/', 'AtividadeController@store');
            Route::get('list', 'AtividadeController@list');
            Route::post('update/{id}', 'AtividadeController@update');
            Route::get('remover/{id}', 'AtividadeController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'AtividadeController@buscar');
        });

        Route::prefix('agente-causador-de-doenca-profissional')->group(function () {
            Route::get('/', 'AgenteCausadorDeDoencaProfissionalController@index')->name('agente-causador-de-doenca-profissional');
            Route::post('/', 'AgenteCausadorDeDoencaProfissionalController@store');
            Route::get('list', 'AgenteCausadorDeDoencaProfissionalController@list');
            Route::post('update/{id}', 'AgenteCausadorDeDoencaProfissionalController@update');
            Route::get('remover/{id}', 'AgenteCausadorDeDoencaProfissionalController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'AgenteCausadorDeDoencaProfissionalController@buscar');
        });

        Route::prefix('motivo-de-afastamento')->group(function () {
            Route::get('/', 'MotivoAfastamentoController@index')->name('motivo-de-afastamento');
            Route::post('/', 'MotivoAfastamentoController@store');
            Route::get('list', 'MotivoAfastamentoController@list');
            Route::post('update/{id}', 'MotivoAfastamentoController@update');
            Route::get('remover/{id}', 'MotivoAfastamentoController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'MotivoAfastamentoController@buscar');
        });

        Route::prefix('tipos-de-logradouro')->group(function () {
            Route::get('/', 'TipoDeLogradouroController@index')->name('tipos-de-logradouro');
            Route::post('/', 'TipoDeLogradouroController@store');
            Route::get('list', 'TipoDeLogradouroController@list');
            Route::post('update/{id}', 'TipoDeLogradouroController@update');
            Route::get('remover/{id}', 'TipoDeLogradouroController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'TipoDeLogradouroController@buscar');
        });

        Route::prefix('codificacao-acidente-de-trabalho')->group(function () {
            Route::get('/', 'CodificacaoAcidenteDeTrabalhoController@index')->name('codificacao-acidente-de-trabalho');
            Route::post('/', 'CodificacaoAcidenteDeTrabalhoController@store');
            Route::get('list', 'CodificacaoAcidenteDeTrabalhoController@list');
            Route::post('update/{id}', 'CodificacaoAcidenteDeTrabalhoController@update');
            Route::get('remover/{id}', 'CodificacaoAcidenteDeTrabalhoController@destroy');
            Route::get('buscar/{selecionado}/{termo}', 'CodificacaoAcidenteDeTrabalhoController@buscar');
        });

    });


    Route::prefix('capacitacao')->group(function () {
        Route::get('/', 'Empresa\CapacitacaoController@index')->name('capacitacao');
        Route::get('matriz', 'Empresa\CapacitacaoController@matriz')->name('capacitacao.matriz');
        Route::get('{id}/', 'Empresa\CapacitacaoController@show');
        Route::post('{id}/', 'Empresa\CapacitacaoController@store');
        Route::get('list', 'Empresa\CapacitacaoController@list');
        Route::post('update/{id}', 'Empresa\CapacitacaoController@update');
        Route::get('{empresa}/remover/{id}', 'Empresa\CapacitacaoController@destroy');

        Route::get('buscar/{selecionado}/{termo}', 'Empresa\CapacitacaoController@buscar');
    });

// PCMSO

    Route::get('pcmso', 'PCMSO\PCMSOController@index')->name('pcmso.index');
    Route::post('pcmso', 'PCMSO\PCMSOController@store');
    Route::post('pcmso/versao', 'PCMSO\PCMSOController@versao');
    Route::get('pcmso/list/', 'PCMSO\PCMSOController@list');
    Route::get('pcmso/list/{idContrato}', 'PCMSO\PCMSOController@listContrato');
    Route::get('pcmso/editar/{id}/', 'PCMSO\PCMSOController@edit')->name('pcmso.editar');
    Route::get('pcmso/deletar/{id}/', 'PCMSO\PCMSOController@destroy');
    Route::get('pcmso/adicionar/', 'PCMSO\PCMSOController@create');
    Route::post('pcmso/{pcmso}/upload', 'PCMSO\PCMSOController@upload');
    Route::get('pcmso/contratos/{id}', 'PCMSO\PCMSOController@contratos');

    Route::post('pcmso/ambiente', 'PCMSO\AmbienteController@store');

    Route::post('pcmso/medicos', 'PCMSO\RevisaoHistoricoController@medicos');

    Route::get('pcmso/ambientes/{id}', 'PCMSO\AmbienteController@index');

    Route::get('pcmso/{pcmso}/ambiente/{id}', 'PCMSO\AmbienteController@ambiente')->name('pcmso.ambiente');

    Route::get('pcmso/{pcmso}/capa', 'PCMSO\PCMSOController@capa');
    
    Route::get('pcmso/{pcmso}/relatorio', 'PCMSO\PCMSOController@relatorio');
	
	Route::get('pcmso/{pcmso}/exames', 'PCMSO\PCMSOController@exames');

	Route::get('pcmso/{pcmso}/exames/list', 'PCMSO\PCMSOController@listHistoricoExames');
	
	Route::post('pcmso/{pcmso}/exames', 'PCMSO\PCMSOController@historicoExame');

    Route::post('pcmso/{pcmso}/capa', 'PCMSO\PCMSOController@postCapa');

    Route::get('pcmso/{pcmso}/plano-acao', 'PCMSO\PCMSOController@planoAcao');

    Route::post('pcmso/{pcmso}/plano-acao', 'PCMSO\PCMSOController@postPlanoAcao');

    Route::get('pcmso/{pcmso}/plano-acao/remover/{id}', 'PCMSO\PCMSOController@destroyPlanoAcao');

    Route::get('pcmso/ambientes/{id}/list', 'PCMSO\AmbienteController@listAmbientes');

    Route::get('pcmso/ambiente/{ambiente}/{ppra}/funcoes', 'PCMSO\AmbienteController@funcoes');

    Route::get('pcmso/ambiente/funcoes/{funcao}', 'PCMSO\AmbienteController@funcoesAso');

    Route::post('pcmso/ambiente/funcoes/{funcao}', 'PCMSO\AmbienteController@postAso');

    Route::get('pcmso/ambiente/{ambiente}/funcoes/list', 'PCMSO\AmbienteController@listFuncoes');

    Route::post('pcmso/ambiente/{ambiente}/exames', 'PCMSO\AmbienteController@postExames');

    Route::post('pcmso/ambiente/{ambiente}/exames/list', 'PCMSO\AmbienteController@listExames');

    Route::get('pcmso/ambiente/{ambiente}/exames/{exame}/remover', 'PCMSO\AmbienteController@destroyExame');

    Route::post('pcmso/ambiente/{ambiente}/exames/atualizar', 'PCMSO\AmbienteController@atualizarExame');

    Route::get('pcmso/ambiente/{id}/remover/{ambiente}', 'PCMSO\AmbienteController@destroy');

    Route::post('pcmso/{pcmso}/revisao-historico', 'PCMSO\RevisaoHistoricoController@post');

    Route::get('pcmso/{pcmso}/revisao-historico', 'PCMSO\RevisaoHistoricoController@list');

    Route::get('pcmso/ambiente/{ambiente}/aso', 'PCMSO\AmbienteController@aso');

    Route::post('pcmso/ambiente/{ambiente}/aso', 'PCMSO\AmbienteController@postAso');

    Route::post('pcmso/ultimo/', 'PCMSO\PCMSOController@ultimo');

    Route::get('/pcmso/ambiente-risco/{idAmbiente}/{idPpra}/list', 'PCMSO\AmbienteController@listRiscos');


// TERMINOU PCMSO

    Route::get('/sessao/{id}/{rota?}', 'HomeController@sessao');

    Route::get('/limpar-sessao', 'HomeController@limparSessao');

    Route::get('/home', 'HomeController@index')->name('home');

// PPRA

Route::get('gro', 'PPRA\PPRAController@index')->name('gro.index');
Route::post('gro', 'PPRA\PPRAController@store');
Route::post('gro/versao', 'PPRA\PPRAController@versao');
Route::get('gro/list/', 'PPRA\PPRAController@list');
Route::get('gro/list/{idContrato}', 'PPRA\PPRAController@listContrato');
Route::get('gro/editar/{id}/', 'PPRA\PPRAController@edit')->name('gro.editar');
Route::get('gro/deletar/{id}/', 'PPRA\PPRAController@destroy');
Route::get('gro/adicionar/', 'PPRA\PPRAController@create');
Route::get('gro/contratos/{id}', 'PPRA\PPRAController@contratos');

Route::post('gro/empresacontrato', 'PPRA\PPRAController@contratoPeriodo');

Route::post('gro/ambiente', 'PPRA\AmbienteController@store');

Route::post('gro/medicos', 'PPRA\RevisaoHistoricoController@medicos');

Route::get('gro/ambientes/{id}', 'PPRA\AmbienteController@index');

Route::get('gro/{gro}/ambiente/{id}', 'PPRA\AmbienteController@ambiente')->name('gro.ambiente');

Route::get('gro/{gro}/capa', 'PPRA\PPRAController@capa');

Route::get('gro/{gro}/exames', 'PPRA\PPRAController@exames');

Route::get('gro/{gro}/exames/list', 'PPRA\PPRAController@listHistoricoExames');

Route::post('gro/{gro}/exames', 'PPRA\PPRAController@historicoExame');

Route::post('gro/{gro}/capa', 'PPRA\PPRAController@postCapa');

Route::get('gro/{gro}/plano-acao', 'PPRA\PPRAController@planoAcao');

Route::post('gro/{gro}/plano-acao', 'PPRA\PPRAController@postPlanoAcao');

Route::get('gro/{gro}/plano-acao/remover/{id}', 'PPRA\PPRAController@destroyPlanoAcao');

Route::get('gro/ambientes/{id}/list', 'PPRA\AmbienteController@listAmbientes');

Route::get('gro/ambiente/{ambiente}/funcoes', 'PPRA\AmbienteController@funcoes');

Route::get('gro/ambiente/funcoes/{funcao}', 'PPRA\AmbienteController@funcoesAso');

Route::post('gro/ambiente/funcoes/{funcao}', 'PPRA\AmbienteController@postAso');

Route::get('gro/ambiente/{ambiente}/funcoes/list', 'PPRA\AmbienteController@listFuncoes');

Route::post('gro/ambiente/{ambiente}/funcoes', 'PPRA\AmbienteController@postFuncoes');

Route::post('gro/ambiente/{ambiente}/exames', 'PPRA\AmbienteController@postExames');

Route::post('gro/ambiente/{ambiente}/exames/list', 'PPRA\AmbienteController@listExames');

Route::get('gro/ambiente/{ambiente}/exames/{exame}/remover', 'PPRA\AmbienteController@destroyExame');

Route::post('gro/ambiente/{ambiente}/exames/atualizar', 'PPRA\AmbienteController@atualizarExame');

Route::get('gro/ambiente/{id}/remover/{ambiente}', 'PPRA\AmbienteController@destroy');

Route::post('gro/{gro}/revisao-historico', 'PPRA\RevisaoHistoricoController@post');

Route::get('gro/{gro}/revisao-historico', 'PPRA\RevisaoHistoricoController@list');

Route::get('gro/ambiente/{ambiente}/aso', 'PPRA\AmbienteController@aso');

Route::get('gro/ambiente/{ambiente}/destroy-funcao/{funcao}', 'PPRA\AmbienteController@destroyFuncao');

Route::post('gro/ambiente/{ambiente}/aso', 'PPRA\AmbienteController@postAso');

Route::post('gro/ultimo/', 'PPRA\PPRAController@ultimo');

Route::post('/gro/ambiente-risco', 'PPRA\AmbienteRiscoController@post');

Route::get('/gro/ambiente-risco/{ambiente}/list', 'PPRA\AmbienteRiscoController@list');

Route::post('/gro/ambiente-risco/remover', 'PPRA\AmbienteRiscoController@destroy');

Route::post('/gro/ambiente-risco/historico', 'PPRA\AmbienteRiscoController@historico');

});


Route::get('matriz', 'MatrizController@index')->name('matriz');

Route::get('nivel-matriz/list', 'MatrizController@niveis');

Route::get('nivel-matriz/remover/{matriz}', 'MatrizController@removerNivel');

Route::post('nivel-matriz', 'MatrizController@postNivel');

Route::get('nivel-matriz/peso/{peso}/matriz/{id}', 'MatrizController@getNivel');

Route::post('matriz', 'MatrizController@store');

Route::get('matriz/m/{matriz}', 'MatrizController@show');

Route::get('matriz/list', 'MatrizController@list');


Route::get('eixo-x', 'EixosController@showEixoX')->name('eixox');

Route::get('eixo-x/remover/{eixo}', 'EixosController@destroyEixoX');

Route::post('eixo-x', 'EixosController@postEixoX');

Route::get('eixo-x/list', 'EixosController@listEixoX');


Route::get('eixo-y', 'EixosController@showEixoY')->name('eixoy');

Route::get('eixo-y/remover/{eixo}', 'EixosController@destroyEixoY');

Route::post('eixo-y', 'EixosController@postEixoY');

Route::get('eixo-y/list', 'EixosController@listEixoY');


Route::get('peso-x', 'PesosController@showPesoX')->name('pesox');

Route::get('peso-x/remover/{peso}', 'PesosController@destroyPesoX');

Route::post('peso-x', 'PesosController@postPesoX');

Route::get('peso-x/list', 'PesosController@listPesoX');

 
Route::get('peso-y', 'PesosController@showPesoY')->name('pesoy');

Route::get('peso-y/remover/{peso}', 'PesosController@destroyPesoY');

Route::post('peso-y', 'PesosController@postPesoY');

Route::get('peso-y/list', 'PesosController@listPesoY');


Route::get('criterio', 'CriterioController@show')->name('criterio');

Route::get('criterio/remover/{criterio}', 'CriterioController@destroy');

Route::post('criterio', 'CriterioController@store');

Route::get('criterio/list', 'CriterioController@list');


Route::get('login', 'AutenticacaoController@show')->name('login');

Route::get('logout', 'HomeController@logout');

Route::post('entrar', 'AutenticacaoController@entrar'); 


Route::prefix('exames-complementares')->group(function () {
    Route::get('/', 'Medicina\ExamesComplementares@index')->name('exames-complementares');
    Route::post('/', 'Medicina\ExamesComplementares@store');
    Route::post('list', 'Medicina\ExamesComplementares@list');
    Route::get('remover/{id}', 'Medicina\ExamesComplementares@destroy');
    Route::get('ultimo/{id}', 'Medicina\ExamesComplementares@ultimo');
    Route::get('/pessoas', 'Medicina\ExamesComplementares@pessoas');
    Route::get('buscar/{selecionado}/{termo}', 'Medicina\ExamesComplementares@buscar');
});

Route::prefix('solicitacao-exames')->group(function() {
    Route::get('/', 'Medicina\SolicitacaoExames@index')->name('solicitacao-exames');
    Route::post('/', 'Medicina\SolicitacaoExames@store');
    Route::post('/update', 'Medicina\SolicitacaoExames@update');
    Route::get('solicitacao/{id}', 'Medicina\SolicitacaoExames@solicitacao');
    Route::get('solicitacao/{id}/exames-pcmso', 'Medicina\SolicitacaoExames@buscarExamesPcmso');
    Route::get('solicitacao/{id}/relatorio', 'Medicina\SolicitacaoExames@relatorio');
});


Route::prefix('atestado-saude-ocupacional')->group(function() {
    Route::get('/', 'Medicina\AsoController@index')->name('aso');
    Route::post('/', 'Medicina\AsoController@store');
    Route::post('/update', 'Medicina\AsoController@update');
    Route::get('solicitacao/{id}', 'Medicina\AsoController@solicitacao');
    Route::get('solicitacao/{id}/exames-pcmso', 'Medicina\AsoController@buscarExamesPcmso');
    Route::post('/examinadores/', 'Medicina\AsoController@examinadores');
    Route::get('solicitacao/{id}/relatorio', 'Medicina\AsoController@relatorio');
    Route::post('/ultimo/', 'Medicina\AsoController@ultimo');
});


Route::prefix('prontuario-medico')->group(function() {
    Route::get('/', 'Medicina\ProntuarioMedico@index')->name('prontuario-medico');
    Route::post('/', 'Medicina\ProntuarioMedico@store');
    Route::post('/pcd/', 'Medicina\ProntuarioMedico@postPCD');
    Route::get('/pcd/{id}', 'Medicina\ProntuarioMedico@destroyPCD');
    Route::post('/update', 'Medicina\ProntuarioMedico@update');
    Route::get('solicitacao/{id}', 'Medicina\ProntuarioMedico@solicitacao');
    Route::post('/afastamento/', 'Medicina\ProntuarioMedico@afastamento');
    Route::post('/grupo/', 'Medicina\ProntuarioMedico@grupo');
    Route::get('solicitacao/{id}/exames-pcmso', 'Medicina\ProntuarioMedico@buscarExamesPcmso');
});
 

Route::prefix('cadastro-epi')->group(function() {
    Route::get('/', 'Seguranca\EpiEmpresaController@index')->name('cadastro-epi');
    Route::post('/grade/', 'Seguranca\EpiEmpresaController@postGrade');
    Route::get('/grade/{id}', 'Seguranca\EpiEmpresaController@destroyGrade');
});


Route::prefix('posto-entrega')->group(function() {
    Route::get('/', 'Seguranca\PostoEntregaController@index')->name('posto-entrega');
    Route::post('/', 'Seguranca\PostoEntregaController@store');
    Route::get('/excluir/{id}', 'Seguranca\PostoEntregaController@destroy');
    Route::get('/entrega', 'Seguranca\EntregaEpiController@index')->name('entrega-epi');
    Route::post('/entrega', 'Seguranca\EntregaEpiController@store');
    Route::post('/entrega/assinar', 'Seguranca\EntregaEpiController@assinar');
    Route::get('/entrega/remover-item/{id}', 'Seguranca\EntregaEpiController@removerItem');
    Route::post('/entrega/historico/', 'Seguranca\EntregaEpiController@historico');
    Route::get('/entrega/remover/{id}', 'Seguranca\EntregaEpiController@remover');
    Route::post('/entrega/validade/', 'Seguranca\EntregaEpiController@validade');
    Route::get('/{id}', 'Seguranca\PostoEntregaController@show')->name('posto-entrega.show');
    Route::post('/{id}', 'Seguranca\PostoEntregaController@postItem');
    Route::get('/excluir-item/{id}', 'Seguranca\PostoEntregaController@destroyItem');
    Route::post('{posto}/item/multiplos', 'Seguranca\PostoEntregaController@postItens');
    Route::get('{posto}/entrada/{entrada}/estoque', 'Seguranca\EntradaEpiController@estoque'); 
    Route::prefix('{posto}/item')->group(function() {
        Route::get('{id}', 'Seguranca\EntradaEpiController@index')->name('entrada-epi');
        Route::post('{id}', 'Seguranca\EntradaEpiController@store');
    });
});

Route::prefix('ficha-entrega')->group(function() {
    Route::get('/', 'Seguranca\FichaEntregaController@index')->name('ficha-entrega');
});

Route::prefix('fornecedores')->group(function() {
    Route::get('/', 'FornecedorController@index')->name('fornecedores');
    Route::post('/',  'FornecedorController@store');
    Route::get('/remover/{id}',  'FornecedorController@destroy');
});

Route::prefix('matriz-de-epi')->group(function() {
    Route::get('/', 'Seguranca\EpiEmpresaController@matriz')->name('matriz-de-epi');
});