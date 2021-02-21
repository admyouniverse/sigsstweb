<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <div class="col-md-6 pl-0 mb-3">
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-plus"></i> Adicionar Solicitação
            </button>
            <div class="dropdown-menu">
                <a @click="modalAdmissional" class="dropdown-item">Admissional</a>
                <a @click="modalPeriodico('PERIÓDICO')" class="dropdown-item">Periódico</a>
                <a class="dropdown-item" @click="modalPeriodico('MONITORAÇÃO_PONTUAL')">Monitoramento Pontual</a>
                <a class="dropdown-item" @click="modalPeriodico('MUDANÇA_RISCO')">Mudança de Função</a>
                <a class="dropdown-item" @click="modalPeriodico('DEMISSIONAL')">Demissional</a>
                <a class="dropdown-item" @click="modalPeriodico('RETORNO_TRABALHO')">Retorno ao Trabalho</a>
            </div>
        </div>
    </div>

    <div class="box box-default">
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID Soli.</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ambiente</th>
                        <th style="width: 170px">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="solicitacao in solicitacoes" v-if="solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == empresa.idEmpresa">
                        <td>{{solicitacao.idAsoSolicitacao}}</td>
                        <td>{{solicitacao.data | moment('DD/MM/YYYY')}}</td>
                        <td>{{solicitacao.tipoAtestado}}</td>
                        <td>{{solicitacao.empresaFuncionario.matricula}}</td>
                        <td>{{solicitacao.empresaFuncionario.pessoa.nomePessoa}}</td>
                        <td>{{solicitacao.empresaFuncionario.funcao.cargo}}</td>
                        <td>{{solicitacao.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho}}</td>
                        <td>
                            <button class="btn btn-outline-primary btn-sm" @click="relatorio(solicitacao)">Relatório</button>
                            <button class="btn btn-outline-success btn-sm" @click="editar(solicitacao)"><i class="fas fa-pencil-alt"></i></button>
                            <button class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" size="xl" title="Solicitação de Exame" centered ref="modalAdmissional" id="modalAdmissional">
        <template slot="modal-header" slot-scope="{ close }">
            <button type="button" class="close" @click="close()" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="row d-flex">
                <div class="col-md-12 mb-3 justify-content-center align-self-center">
                    <h5>Solicitação de Exame Admissional</h5>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Data</label>
                        <input type="date" @change="buscaPcmso" v-model="solicitacao.data" class="form-control" id="">
                    </div>
                </div>
                <div class="col-md-4 mt-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Tipo</span>
                        </div>
                        <select name="" class="form-control" disabled>
                            <option value="" selected>Admissional</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-5 mt-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Pesquisar por CPF</span>
                        </div>
                        <input v-model="cpf" :disabled="solicitacao.idAsoSolicitacao > 0" v-mask="'###.###.###-##'" type="text" class="form-control" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" @click="buscaCpf()" type="button"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label for="">ID</label>
                        <input type="text" disabled v-model="solicitacao.idAsoSolicitacao" class="form-control">
                    </div>
                </div>

            </div>
        </template>

        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label>Pessoa</label>
                    <select disabled v-model="solicitacao.empresaFuncionario.pessoa" class="form-control">
                        <option v-for="pessoa in pessoas" :value="pessoa">{{pessoa.nomePessoa}}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input type="text" class="form-control" v-model="solicitacao.empresaFuncionario.pessoa.cpf" disabled>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input type="text" class="form-control" v-model="solicitacao.empresaFuncionario.matricula" disabled>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" v-model="solicitacao.empresaFuncionario.pessoa.idPessoa" disabled class="form-control">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Contrato</label>
                    <select v-model="solicitacao.empresaFuncionario.empresaContrato" @change="buscaPcmso" class="form-control">
                        <option :value="contrato" v-for="contrato in contratos">
                            {{ contrato.empresaContratante.nomeFantasia }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Ambiente de Trabalho</label>
                    <select @change="buscaCargos" v-bind:disabled="ambientes.length == 0" v-model="solicitacao.empresaFuncionario.ambienteTrabalho" class="form-control">
                        <option :value="{}" v-if="ambientes.length == 0" disabled selected> ---- SELECIONE PRIMEIRO UM CONTRATO ---- </option>
                        <option :value="ambiente" v-for="ambiente in ambientes">
                            {{ ambiente.idOrigem }} -
                            {{ ambiente.nomeAmbienteTrabalho }}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cargo</label>
                    <select v-bind:disabled="funcoes.length == 0" v-model="solicitacao.empresaFuncionario.funcao" class="form-control">
                        <option :value="{}" v-if="funcoes.length == 0" disabled selected> ---- SELECIONE PRIMEIRO UM AMBIENTE ---- </option>
                        <option :value="funcao" v-for="funcao in funcoes">{{ funcao.cargo }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-1 mb-2 text-right">
                <button v-if="solicitacao.idAsoSolicitacao == 0" class="btn btn-warning" @click="salvarAdmissional">Buscar Exames</button>
                <button v-if="solicitacao.asoSolicitacaoExames.length == 0 && solicitacao.idAsoSolicitacao != 0 " class="btn btn-warning" @click="buscarExames">Buscar Exames</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-0 mb-1 text-center">
                <h5 class="bg-success p-2 text-light">Exames</h5>

            </div>
        </div>
        <div v-if="solicitacao.idAsoSolicitacao == 0" class="row">
            <div class="col-md-12">
                <div class="alert alert-warning text-center">
                    <strong>Espere...</strong>
                    <p> Esta é uma solicitação admissional. Você precisa armazena-la primeiro para poder visualizar os exames. </p>
                    <p>Clique no botão "Buscar Exames" <strong>após preencher todos os dados acima</strong> para armazenar os dados e buscar os exames</p>

                </div>
            </div>
        </div>
        <div v-if="solicitacao.asoSolicitacaoExames.length == 0 && solicitacao.idAsoSolicitacao != 0 " class="row">
            <div class="col-md-12">
                <div class="alert alert-warning text-center">
                    <strong>Ainda não há exames....</strong>
                    <p>Deseja utilizar o método de busca de exames? Clique no botão "Buscar Exames".</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="solicitacao.asoSolicitacaoExames.length > 0">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4 mt-3" v-for="exame in solicitacao.asoSolicitacaoExames">
                        <input type="text" disabled v-if="exame.idAsoSolicitacaoExame == 0" class="form-control" :class="{'input-warning': exame.idAsoSolicitacaoExame == 0}" v-model="exame.detalhes.nomeExame">
                        <input type="text" disabled v-if="exame.idAsoSolicitacaoExame != 0" class="form-control" :class="{'input-warning': exame.idAsoSolicitacaoExame == 0}" v-model="exame.pcmsoAmbienteExame.exame.nomeExame">
                    </div>

                    <div class="col-md-4 mt-3" v-for="exame in solicitacao.asoSolicitacaoExameAvulso">
                        <input type="text" v-model="exame.exame.nomeExame" disabled class="form-control" :class="{'input-warning': exame.idAsoSolicitacaoExameAvulso == 0}">
                    </div>
                </div>
            </div>

            <div class="col-md-12 text-right mt-3 mb-3">
                <button @click="adicionar" class="btn btn-warning">Exames Extras</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <input v-if="!solicitacao.medicoCoordenador" type="text" class="form-control" disabled>
                <div class="alert alert-dark p-2 text-center w-100" v-if="solicitacao.medicoCoordenador"> Médico Responsável pelo PCMSO V {{ solicitacao.pcmso.versao  }} de {{ solicitacao.pcmso.dataHora | moment('DD/MM/YYYY') }} Dr. {{ solicitacao.medicoCoordenador.pessoa.nomePessoa}} - CRM/{{ solicitacao.medicoCoordenador.uf}} {{ solicitacao.medicoCoordenador.numeroRegistro}} </div>
            </div>
        </div>

        <template v-slot:modal-footer="{ ok, cancel, hide }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <div class="alert alert-warning mb-0 text-center">
                <strong>Importante!</strong> Os exames em destaque (marcados com esta cor) ainda não estão salvos. Para salvar, clique no botão <i>"Salvar"</i> ao lado.
                <i class="fas fa-arrow-right"></i>
            </div>
            <b-button :disabled="solicitacao.idAsoSolicitacao == 0" variant="success" @click="ok()">
                Salvar
            </b-button>
            <b-button variant="danger" @click="cancel()">
                Fechar
            </b-button>
        </template>

    </b-modal>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Selecione os exames" @ok="salvarExames" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="modalExames" id="modal1">
        <div class="row">
            <div class="col-md-12 mb-3 text-left">
                Total de exames selecionados: {{ selecionados.length }}
            </div>
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Unidade</th>
                        <th>Sexo</th>
                        <th>Grupo</th>
                        <th style="width: 90px">Tabela 27</th>
                    </thead>
                    <tbody>
                        <tr class="selecionar" v-if="!estaAdicionado(exame)" :class="{'selecionado': estaSelecionado(exame)}" v-for="(exame, index) in exames" @click="selecionar(exame)">
                            <td>{{ exame.idExame }}</td>
                            <td>{{ exame.nomeExame }}</td>
                            <td>{{ exame.descricao }}</td>
                            <td>{{ exame.unidadeMedida }}</td>
                            <td>{{ exame.sexo }}</td>
                            <td>{{ exame.grupoExame }}</td>
                            <td>{{ exame.tabela27 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>

    <!-- INÍCIO DE MODAL PERIÓDICO E OUTRAS COISAS NECESSÁRIAS -->
    <b-modal @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" size="xl" title="Solicitação de Exame" centered ref="modalPeriodico" id="modalPeriodico">
        <template slot="modal-header" slot-scope="{ close }">
            <button type="button" class="close" @click="close()" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="row d-flex">
                <div class="col-md-12 mb-3 justify-content-center align-self-center">
                    <h5 v-if="solicitacao.tipoAtestado == 'PERIÓDICO'">Solicitação de Exame Periódico</h5>
                    <h5 v-if="solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL'">Solicitação de Exame para Monitoramento Pontual</h5>
                    <h5 v-if="solicitacao.tipoAtestado == 'MUDANÇA_RISCO'">Solicitação de Exame para Mudança de Função</h5>
                    <h5 v-if="solicitacao.tipoAtestado == 'DEMISSIONAL'">Solicitação de Exame Demissional</h5>
                    <h5 v-if="solicitacao.tipoAtestado == 'RETORNO_TRABALHO'">Solicitação de Exame para Retorno ao Trabalho</h5>

                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Data</label>
                        <input type="date" @change="buscaPcmso" v-model="solicitacao.data" class="form-control" id="">
                    </div>
                </div>
                <div class="col-md-4 mt-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Tipo</span>
                        </div>
                        <select v-model="solicitacao.tipoAtestado" class="form-control" disabled>
                            <option value="PERIÓDICO" selected>Periódico</option>
                            <option value="MONITORAÇÃO_PONTUAL" selected>Monitoramento Pontual</option>
                            <option value="MUDANÇA_RISCO" selected>Mudança de Função</option>
                            <option value="DEMISSIONAL" selected>Demissional</option>
                            <option value="RETORNO_TRABALHO" selected>Retorno ao Trabalho</option>

                        </select>
                    </div>
                </div>

                <div class="col-md-5 mt-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Pesquisar por CPF</span>
                        </div>
                        <input v-model="cpf" :disabled="solicitacao.idAsoSolicitacao > 0" v-mask="'###.###.###-##'" type="text" class="form-control" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" @click="buscaCpfPeriodico()" type="button"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label for="">ID</label>
                        <input type="text" disabled v-model="solicitacao.idAsoSolicitacao" class="form-control">
                    </div>
                </div>

            </div>
        </template>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label>Pessoa</label>
                    <select v-model="solicitacao.empresaFuncionario" @change="mudouPessoa" class="form-control" :disabled="solicitacao.idAsoSolicitacao > 0">
                        <option v-for="funcionario in funcionarios" :value="funcionario">{{funcionario.pessoa.nomePessoa}}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input type="text" class="form-control" v-model="solicitacao.empresaFuncionario.pessoa.cpf" disabled>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input type="text" class="form-control" v-model="solicitacao.empresaFuncionario.matricula" disabled>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" v-model="solicitacao.empresaFuncionario.pessoa.idPessoa" disabled class="form-control">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Contrato</label>
                    <!-- {{ solicitacao.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia }} -->
                    <input v-if="solicitacao.empresaFuncionario.empresaContrato.empresaContratante" type="text" v-model="solicitacao.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Ambiente de Trabalho</label>

                    <input v-if="solicitacao.empresaFuncionario.ambienteTrabalho" type="text" v-model="solicitacao.empresaFuncionario.ambienteTrabalho.idOrigem + ' - ' + solicitacao.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cargo</label>
                    <input v-if="solicitacao.empresaFuncionario.funcao" type="text" v-model="solicitacao.empresaFuncionario.funcao.cargo" class="form-control" disabled>
                </div>
            </div>
        </div>
        <div class="row" v-if="solicitacao.tipoAtestado != 'MONITORAÇÃO_PONTUAL'">
            <div class="col-md-12 mt-1 mb-2 text-right">
                <button v-if="solicitacao.idAsoSolicitacao == 0" class="btn btn-warning" @click="salvarAdmissional">Buscar Exames</button>
                <button v-if="solicitacao.asoSolicitacaoExames.length == 0 && solicitacao.idAsoSolicitacao != 0 " class="btn btn-warning" @click="buscarExames">Buscar Exames</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-0 mb-1 text-center">
                <h5 class="bg-success p-2 text-light">Exames</h5>
            </div>
        </div>
        <div v-if="solicitacao.idAsoSolicitacao == 0 && solicitacao.tipoAtestado != 'MONITORAÇÃO_PONTUAL'" class="row">
            <div class="col-md-12">
                <div class="alert alert-warning text-center">
                    <strong>Espere...</strong>
                    <p> Esta é uma solicitação admissional. Você precisa armazena-la primeiro para poder visualizar os exames. </p>
                    <p>Clique no botão "Buscar Exames" <strong>após preencher todos os dados acima</strong> para armazenar os dados e buscar os exames</p>

                </div>
            </div>
        </div>
        <div v-if="solicitacao.asoSolicitacaoExames.length == 0 && solicitacao.idAsoSolicitacao != 0 && solicitacao.tipoAtestado != 'MONITORAÇÃO_PONTUAL'" class="row">
            <div class="col-md-12">
                <div class="alert alert-warning text-center">
                    <strong>Ainda não há exames....</strong>
                    <p>Deseja utilizar o método de busca de exames? Clique no botão "Buscar Exames".</p>
                </div>
            </div>
        </div>

        <div v-if="solicitacao.asoSolicitacaoExameAvulso.length == 0 && solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL'" class="row">
            <div class="col-md-12">
                <div class="alert alert-warning text-center">
                    <strong>Ainda não há exames...</strong> <br>
                    <button @click="adicionarMonitoramento" class="btn btn-warning">Exames Extras</button>
                </div>
            </div>
        </div>

        <div class="row" v-if="solicitacao.asoSolicitacaoExames.length > 0 || solicitacao.asoSolicitacaoExameAvulso.length > 0 ">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4" v-for="exame in solicitacao.asoSolicitacaoExames">
                        <input v-if="exame.idAsoSolicitacaoExame == 0" class="form-control mt-2" :class="{'input-warning': exame.idAsoSolicitacaoExame == 0}" disabled v-model="exame.detalhes.nomeExame">
                        <input v-if="exame.idAsoSolicitacaoExame != 0" v-model="exame.pcmsoAmbienteExame.exame.nomeExame" disabled class="form-control mt-2" :class="{'input-warning': exame.idAsoSolicitacaoExame == 0}">
                    </div>

                    <div class="col-md-4" v-for="exame in solicitacao.asoSolicitacaoExameAvulso">
                        <input type="text" class="form-control mt-2" disabled v-model="exame.exame.nomeExame" :class="{'input-warning': exame.idAsoSolicitacaoExameAvulso == 0}">
                        <!-- <td v-if="exame.idAsoSolicitacaoExame != 0" >{{ exame.pcmsoAmbienteExame.exame.nomeExame }}</td> -->
                    </div>

                </div>
            </div>

            <div class="col-md-12 text-right mb-3 mt-3">
                <button @click="adicionar" class="btn btn-warning">Exames Extras</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <input v-if="!solicitacao.medicoCoordenador" type="text" class="form-control" disabled>
                <div class="alert alert-dark p-2 text-center w-100" v-if="solicitacao.medicoCoordenador"> Médico Responsável pelo PCMSO V {{ solicitacao.pcmso.versao  }} de {{ solicitacao.pcmso.dataHora | moment('DD/MM/YYYY') }} Dr. {{ solicitacao.medicoCoordenador.pessoa.nomePessoa}} - CRM/{{ solicitacao.medicoCoordenador.uf}} {{ solicitacao.medicoCoordenador.numeroRegistro}} </div>
            </div>
        </div>

        <template v-slot:modal-footer="{ ok, cancel, hide }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <div class="alert alert-warning mb-0 text-center">
                <strong>Importante!</strong> Os exames em destaque (marcados com esta cor) ainda não estão salvos. Para salvar, clique no botão <i>"Salvar"</i> ao lado.
                <i class="fas fa-arrow-right"></i>
            </div>
            <b-button :disabled="solicitacao.idAsoSolicitacao == 0" variant="success" @click="ok()">
                Salvar
            </b-button>
            <b-button variant="danger" @click="cancel()">
                Fechar
            </b-button>
        </template>

    </b-modal>

</section>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            selecionados: [],
            exames: [],
            carregando: false,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            pessoas: [],
            cpf: '',
            funcionarios: [],
            solicitacao: {
                empresaFuncionario: {
                    pessoa: {},
                    funcao: {},
                    ambienteTrabalho: {},
                    empresaContrato: {},
                },
                asoSolicitacaoExames: [],
                asoSolicitacaoExameAvulso: [],
            },
            solicitacoes: [],
            contratos: [],
            ambientes: [],
            funcoes: [],
            examesPcmso: []
        }
    },

    methods: {
        relatorio: function (solicitacao) {
            this.carregar("Gerando relatorio...");
            var that = this;
            axios.get('/solicitacao-exames/solicitacao/' + solicitacao.idAsoSolicitacao + '/relatorio').then(function (response) {
                window.open('http://' + response.data.report);
                that.carregando = false;
            });
        },
        adicionar: function () {
            var that = this;
            axios.get('/tabelas/exames/list/').then(function (response) {
                that.exames = response.data;
                that.$refs.modalExames.show();
            });
        },
        adicionarMonitoramento: function () {
            var that = this;

            this.carregar("Buscando exames...");

            var that = this;
            axios.post('/solicitacao-exames', {
                solicitacao: this.solicitacao
            }).then(function (response) {
                console.log(response.data);
                that.carregando = false;

                if (response.data.status != 'false') {
                    that.solicitacao = response.data;

                    if (that.solicitacao.tipoAtestado != 'ADMISSIONAL') {
                        that.funcionarios = [];
                        that.funcionarios.push(that.solicitacao.empresaFuncionario);
                    }
            
                    axios.get('/tabelas/exames/list/').then(function (response) {
                        that.exames = response.data;
                        that.$refs.modalExames.show();
                    });


                } else {
                    that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
                }

            });

        },
        fechar() {
            this.selecionados = [];
        },
        mudouPessoa() {
            var that = this;
            var verif = this.solicitacoes.filter(function (solicitacao) {
                return solicitacao.empresaFuncionario.pessoa.idPessoa == that.solicitacao.empresaFuncionario.pessoa.idPessoa && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa && solicitacao.tipoAtestado == that.solicitacao.tipoAtestado && that.dataDiff(solicitacao.data, that.solicitacao.data) <= 30;
            });

            if (verif.length > 0) {

                if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
                    var msg = "Essa pessoa já tem uma solicitação admissional de menos de 30 dias.";
                } else if (that.solicitacao.tipoAtestado == 'PERIÓDIOCO') {
                    var msg = "Essa pessoa já tem uma solicitação periodica de menos de 30 dias.";
                } else if (that.solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL') {
                    var msg = "Essa pessoa já tem uma solicitação de monitoração pontual de menos de 30 dias."
                } else if (that.solicitacao.tipoAtestado == 'DEMISSIONAL') {
                    var msg = "Essa pessoa já tem uma solicitação de exame demissional de menos de 30 dias."
                }

                var options = {
                    title: "Atenção!",
                    text: msg,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Editar",
                    cancelButtonText: "Sair",
                    animation: false,
                }

                this.$fire(options).then(r => {
                    if (r.value == true) {
                        that.editar(verif[0]);
                    }
                });

                this.solicitacao = {
                    data: new Date().toISOString().slice(0, 10),
                    empresaFuncionario: {
                        pessoa: {},
                        funcao: {
                            cargo: ''
                        },
                        empresaContrato: {
                            empresaContratante: {
                                nomeFantasia: ""
                            }
                        },
                        ambienteTrabalho: {
                            nomeAmbienteTrabalho: '',
                            idOrigem: ''
                        }
                    },
                    asoSolicitacaoExames: []
                };

            } else {
                this.buscaPcmso();
            }

        },
        estaSelecionado(exame) {
            return this.selecionados.includes(exame);
        },
        estaAdicionado(exame) {
            if(this.solicitacao.idAsoSolicitacao != 0) {
                var key = this.solicitacao.asoSolicitacaoExames.findIndex(x => x.pcmsoAmbienteExame.exame.idExame == exame.idExame);

                var key2 = this.solicitacao.asoSolicitacaoExameAvulso.findIndex(x => x.exame.idExame == exame.idExame);
                if (key < 0 && key2 < 0) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },

        salvarExames() {
            var that = this;
            this.selecionados.forEach(function (exame) {
                that.solicitacao.asoSolicitacaoExameAvulso.push({
                    exame: exame,
                    idAsoSolicitacaoExameAvulso: 0,
                    asoSolicitacao: 0,
                    usuario: 1
                });
            });

            this.selecionados = [];

        },

        buscarExames: function () {
            var that = this;
            this.carregar("Buscando exames...");
            axios.get('/solicitacao-exames/solicitacao/' + this.solicitacao.idAsoSolicitacao + '/exames-pcmso').then(function (response) {
                that.solicitacao.asoSolicitacaoExames = response.data;
                console.log(response.data);
                that.carregando = false;
                // that.$alert('Exames encontrados!', 'Sucesso!', 'success');
            });
        },
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },
        modalAdmissional: function () {
            var that = this;
            this.solicitacao = {
                data: new Date().toISOString().slice(0, 10),
                empresaFuncionario: {
                    pessoa: {},
                    funcao: {},
                    ambienteTrabalho: {},
                    empresaContrato: {},
                },
                asoSolicitacaoExames: [],
                asoSolicitacaoExameAvulso: []
            };

            this.cpf = '';

            this.solicitacao.idAsoSolicitacao = 0;
            this.solicitacao.tipo = 'SOLICITAÇÃO';
            this.solicitacao.tipoAtestado = 'ADMISSIONAL';

            this.buscarPessoasContratos(function () {
                that.$refs.modalAdmissional.show()
            });
        },

        modalPeriodico: function (tipo) {
            var that = this;
            
            this.carregar("Buscando funcionários...");

            this.solicitacao = {
                data: new Date().toISOString().slice(0, 10),
                empresaFuncionario: {
                    pessoa: {},
                    funcao: {
                        cargo: ''
                    },
                    empresaContrato: {
                        empresaContratante: {
                            nomeFantasia: ""
                        }
                    },
                    ambienteTrabalho: {
                        nomeAmbienteTrabalho: '',
                        idOrigem: ''
                    }
                },
                asoSolicitacaoExames: [],
                asoSolicitacaoExameAvulso: []
            };

            console.log(this.solicitacao);

            this.solicitacao.idAsoSolicitacao = 0;
            this.solicitacao.tipo = 'SOLICITAÇÃO';
            this.solicitacao.tipoAtestado = tipo;

            var that = this;

            if (tipo == 'RETORNO_TRABALHO') {
                axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                    that.funcionarios = response.data;
                    that.$refs.modalPeriodico.show();
                    that.carregando = false;
                    // that.sucesso('Carregado com sucesso!');
                });
            } else {
                axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
                    that.funcionarios = response.data;
                    that.$refs.modalPeriodico.show();
                    that.carregando = false;
                });
            }

        },

        buscarPessoasContratos: function (callback) {
            var that = this;
            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
                that.pessoas = response.data;

                axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
                    // that.contratosAll = response.data;
                    that.contratos = response.data;
                    (callback || Function)();
                });
            });
        },

        editar(solicitacao) {
            this.carregar("Carregando solicitação...");
            var that = this;
            axios.get('/solicitacao-exames/solicitacao/' + solicitacao.idAsoSolicitacao).then(function (response) {
                that.solicitacao = response.data;
                console.log(that.solicitacao);
                that.buscarPessoasContratos(function () {
                    if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
                        that.buscaPcmso(that.buscaCargos(that.$refs.modalAdmissional.show()))
                        that.pessoas.push(that.solicitacao.empresaFuncionario.pessoa);
                    } else {
                        that.buscaPcmso(that.buscaCargos(that.$refs.modalPeriodico.show()))
                        that.funcionarios = [];
                        that.funcionarios.push(that.solicitacao.empresaFuncionario);
                    }

                });
            });
        },

        dataDiff(dataSolicitacao, dataNova) {
            var data = Vue.moment(dataSolicitacao, "YYYY-MM-DD");
            var hoje = Vue.moment(dataNova, "YYYY-MM-DD");

            var diff = Vue.moment.duration(hoje.diff(data)).asDays();

            return diff;
        },

        buscaCpfPeriodico: function () {
            var that = this;

            this.carregar("Buscando pessoa...");

            var verif = this.solicitacoes.filter(function (solicitacao) {
                return solicitacao.empresaFuncionario.pessoa.cpf == that.cpf.replace(/\D/g, '') && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa && solicitacao.tipoAtestado == that.solicitacao.tipoAtestado;
            });

            if (verif.length > 0 && this.dataDiff(verif[0].data, this.solicitacao.data) <= 30) {

                console.log(this.dataDiff(verif[0].data, this.solicitacao.data));

                that.carregando = false;
                if (that.solicitacao.tipoAtestado == 'ADMISSIONAL') {
                    var msg = "Essa pessoa já tem uma solicitação admissional de menos de 30 dias.";
                } else if (that.solicitacao.tipoAtestado == 'PERIÓDIOCO') {
                    var msg = "Essa pessoa já tem uma solicitação periodica de menos de 30 dias.";
                } else if (that.solicitacao.tipoAtestado == 'MONITORAÇÃO_PONTUAL') {
                    var msg = "Essa pessoa já tem uma solicitação de monitoração pontual de menos de 30 dias."
                } else if (that.solicitacao.tipoAtestado == 'DEMISSIONAL') {
                    var msg = "Essa pessoa já tem uma solicitação de exame demissional de menos de 30 dias."
                }

                var options = {
                    title: "Atenção!",
                    text: msg,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Editar",
                    cancelButtonText: "Sair",
                    animation: false,
                }

                this.$fire(options).then(r => {
                    if (r.value == true) {
                        that.editar(verif[0]);
                    }
                });

            } else {

                var filtrada = this.funcionarios.filter(function (empregado) {
                    return empregado.pessoa.cpf == that.cpf.replace(/\D/g, '');;
                });

                if (filtrada.length == 0) {

                    axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                        var empregados = response.data;

                        var filtrada = empregados.filter(function (empregado) {
                            return empregado.cpf == that.cpf.replace(/\D/g, '');;
                        });

                        if (filtrada.length == 0) {
                            that.carregando = false;
                            that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
                        } else {
                            that.carregando = false;
                            that.$alert('Essa pessoa não está contratada.', 'Atenção!', 'error');
                        }

                    });

                } else {
                    that.carregando = false;
                    this.solicitacao.empresaFuncionario = filtrada[0];
                    this.mudouPessoa();
                }
            }

        },
        buscaCpf: function () {
            var that = this;

            this.carregar("Buscando pessoa...");

            // var verif = this.solicitacoes.filter(function (solicitacao) {
            //     return solicitacao.empresaFuncionario.pessoa.cpf == that.cpf.replace(/\D/g, '') && solicitacao.empresaFuncionario.empresaContrato.empresa.idEmpresa == that.empresa.idEmpresa;
            // });

            var verif = 0;

            if (verif.length > 0) {
                that.carregando = false;

                var options = {
                    title: "Atenção!",
                    text: "Essa pessoa já tem uma solicitação admissional de menos de 90 dias.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Editar",
                    cancelButtonText: "Sair",
                    animation: false,
                }

                this.$fire(options).then(r => {
                    if (r.value == true) {
                        that.editar(verif[0]);
                    }
                });

            } else {
                var filtrada = this.pessoas.filter(function (pessoa) {
                    return pessoa.cpf == that.cpf.replace(/\D/g, '');
                });

                console.log(filtrada);

                if (filtrada.length == 0) {

                    if (this.solicitacao.tipoAtestado == 'ADMISSIONAL') {

                        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/pessoas/comVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                            var empregados = response.data;

                            var filtrada = empregados.filter(function (empregado) {
                                return empregado.cpf == that.cpf.replace(/\D/g, '');;
                            });

                            if (filtrada.length == 0) {
                                that.carregando = false;
                                that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
                            } else {
                                that.carregando = false;
                                that.$alert('Essa pessoa já está contratada.', 'Atenção!', 'error');
                            }

                        });

                    } else {

                        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/pessoas/semVinculoEmpregaticioPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                            var empregados = response.data;

                            var filtrada = empregados.filter(function (empregado) {
                                return empregado.cpf == that.cpf.replace(/\D/g, '');;
                            });

                            if (filtrada.length == 0) {
                                that.carregando = false;
                                that.$alert('Não há ninguem com esse CPF.', 'Atenção!', 'error');
                            } else {
                                that.carregando = false;
                                that.$alert('Essa pessoa não é um funcionário ativo.', 'Atenção!', 'error');
                            }

                        });
                    }

                } else {
                    that.carregando = false;
                    this.solicitacao.empresaFuncionario.pessoa = filtrada[0];
                }
            }

        },

        buscaPcmso: function () {
            var that = this;
            if (this.solicitacao.data && this.solicitacao.empresaFuncionario.empresaContrato.idEmpresaContrato) {
                this.carregar("Buscando PCMSO...");
                axios.post('/pcmso/ultimo', {
                    'empresa': this.empresa.idEmpresa,
                    'contrato': this.solicitacao.empresaFuncionario.empresaContrato.idEmpresaContrato,
                    'data': this.solicitacao.data
                }).then(function (response) {
                    setTimeout(function () {
                        if (response.data != "") {
                            that.mensagem = "Pronto. Buscando ambientes...";
                            that.solicitacao.pcmso = response.data;
                            axios.get('/pcmso/ambientes/' + response.data.idPcmso + '/list?ambientes=true').then(function (response) {

                                that.ambientes = response.data;

                                console.log(that.ambientes);

                                that.mensagem = "Ok. Buscando o médico coordenador...";

                                axios.get('/pcmso/' + that.solicitacao.pcmso.idPcmso + '/revisao-historico').then(function (response) {
                                    console.log(response);
                                    that.solicitacao.medicoCoordenador = response.data[0].empresaProfissional;
                                    that.carregando = false;
                                    // that.$alert('Dados preenchidos!', 'Sucesso!', 'success');
                                });

                            });
                        } else {
                            that.carregando = false;
                            that.$alert('Não há PCMSO nesta data e com este contrato.', 'Atenção!', 'error');
                        }
                    }, 500);
                });
            }
        },

        buscaCargos: function () {
            var that = this;
            this.carregar("Buscando cargos...");
            axios.get('/pcmso/ambiente/' + this.solicitacao.empresaFuncionario.ambienteTrabalho.idPcmsoAmbienteTrabalho + '/funcoes/list').then(
                function (response) {
                    that.funcoes = response.data;
                    that.carregando = false;
                    // that.$alert('Cargos listados!', 'Sucesso!', 'success');
                });
        },

        salvarAdmissional() {
            this.carregar("Buscando exames...");

            var that = this;
            axios.post('/solicitacao-exames', {
                solicitacao: this.solicitacao
            }).then(function (response) {
                console.log(response.data);
                that.carregando = false;

                if (response.data.status != 'false') {
                    that.solicitacao = response.data;

                    if (that.solicitacao.tipoAtestado != 'ADMISSIONAL') {
                        that.funcionarios = [];
                        that.funcionarios.push(that.solicitacao.empresaFuncionario);
                    }

                    // that.$alert('Exames listados!', 'Sucesso!', 'success');
                } else {
                    that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
                }

            }); 
        },

        selecionar(exame) {
            if (this.estaSelecionado(exame)) {
                var key = this.selecionados.findIndex(x => x.idExame == exame.idExame);
                this.selecionados.splice(key, 1);
            } else {
                this.selecionados.push(exame);
            }
        },

        salvar(evt) {
            this.carregar("Salvando..");
            evt.preventDefault()
            var that = this;
            axios.post('/solicitacao-exames/update', {
                solicitacao: this.solicitacao
            }).then(function (response) {
                console.log(response.data);
                that.carregando = false;

                if (response.data.status != 'false') {
                    that.solicitacao = response.data;
                    //  that.$alert('Pronto. Dados salvos.!', 'Sucesso!', 'success');
                } else {
                    that.$alert('Erro. Verifique os dados!', 'Ops!', 'error');
                }
            });
        },

        chunk(array, size) {
            const chunked_arr = [];
            for (let i = 0; i < array.length; i++) {
                const last = chunked_arr[chunked_arr.length - 1];
                if (!last || last.length === size) {
                    chunked_arr.push([array[i]]);
                } else {
                    last.push(array[i]);
                }
            }
            return chunked_arr;
        }
    },

    mounted() {
        var that = this;

        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/solicitacoes').then(function (response) {
            that.solicitacoes = response.data;

            console.log(that.solicitacoes);
        });
    }
}
</script>

<style lang="scss" scoped>
.modal-header .close {
    position: absolute;
    right: 15px;
    z-index: 1000;
}

.selecionar {
    cursor: pointer;
}

.selecionado {
    background-color: #71bb66;
}

.form-group {
    margin-bottom: .5rem;
}

.input-warning {
    background-color: #fce3bd;
}
</style>
