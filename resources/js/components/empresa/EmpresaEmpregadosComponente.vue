<template>
<div class="row">
    <BlockUI v-if="carregando" :message="mensagem" :html="html">

    </BlockUI>
    <b-card class="sig" no-body>
        <b-tabs pills card>
            <b-tab title="Ativos" active @focus="alert('FOCOU!')">
                <b-card-text id="tabelaEmpregados">
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table id="tabelaListagemEmpregados" class="table table-hover table-striped table-empregados">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matrícula</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Dt. Adm</th>
                                        <th>Dt. Cargo</th>
                                        <th>Cargo</th>
                                        <th>Ambiente</th>
                                        <th>Dt. Nasc</th>
                                        <th>Sexo</th>
                                        <th>Tempo</th>
                                        <th>Contratante</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr @click="editar(funcionario, 'Ativo')" style="cursor: pointer" v-for="funcionario in funcionarios">
                                        <td>{{ funcionario.pessoa.idPessoa }}</td>
                                        <td>{{ funcionario.matricula }}</td>
                                        <td>{{ funcionario.pessoa.nomePessoa }}</td>
                                        <td>{{ funcionario.pessoa.cpf }}</td>
                                        <td>{{ funcionario.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ funcionario.dataFuncao | moment("DD/MM/Y") }}</td>
                                        <td>{{ funcionario.funcao.cargo }}</td>
                                        <td>{{ formataEstabelecimento(funcionario.ambienteTrabalho.estabelecimento) }}
                                            -
                                            {{ funcionario.ambienteTrabalho.nomeAmbienteTrabalho }}</td>

                                        <td>{{ funcionario.pessoa.dataNascimento | moment("DD/MM/Y")}}</td>
                                        <td>{{ formataSexo(funcionario.pessoa.sexo) }}</td>
                                        <td>{{ funcionario.ano }}A, {{ funcionario.mes }}M,
                                            {{ funcionario.dia }}D</td>
                                        <td>{{ funcionario.empresaContrato.empresaContratante.nomeFantasia }}</td>
                                        <td><button @click="editar(funcionario, 'Ativo')" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-success" @click="admissional()"><i class="fa fa-plus"></i> Adicionar
                            Empregado</button>
                    </div>

                    <!-- ADMISSIONAL -->
                    <b-modal :no-close-on-backdrop="true" @ok="salvarAdmissional" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharAdmissional()" size="xl" title="Incluir empregado" centered ref="modalAdmissional" id="modalAdmissional">

                        <template slot="modal-header" slot-scope="{ close }">
                            <div class="row d-flex w-100">
                                <div class="col-md-2 justify-content-center align-self-center">
                                    <h5>Incluir Empregado</h5>
                                </div>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Pesquisar por CPF</span>
                                        </div>
                                        <input v-model="cpf" v-mask="'###.###.###-##'" type="text" class="form-control" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-secondary" @click="buscaCpf()" type="button"><i class="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Tipo</span>
                                        </div>
                                        <select name="" class="form-control" disabled>
                                            <option value="" selected>Admissional</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <select v-model="idPessoa" @change="mudouPessoa()" class="form-control">
                                        <option v-if="!pessoaEmAdmissional(pessoa)" :value="pessoa.idPessoa" v-for="pessoa in pessoas">{{ pessoa.nomePessoa }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" id="matricula" v-model="funcionario.matricula" v-on:blur="verificaMatricula" class="form-control" :class="{'is-invalid': erroMatricula}">
                                    <div class="invalid-feedback" v-if="erroMatricula">
                                        {{ mensagemMatricula }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">PIS</label>
                                    <input type="text" v-mask="'###.#####.##-#'" v-model="funcionario.pessoa.pis" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CTPS</label>
                                    <input type="text" v-model="funcionario.pessoa.ctps" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Data da Adm.</label>
                                    <input v-model="funcionario.dataInicial" v-on:blur="mudouData()" type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Data Função</label>
                                    <input v-on:blur="getContratos(funcionario.dataFuncao)" v-model="funcionario.dataFuncao" disabled type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Contrato</label>
                                    <select v-model="funcionario.empresaContrato" @change="mudouContrato()" class="form-control">
                                        <option :value="contrato" v-for="contrato in contratos">
                                            {{ contrato.empresaContratante.nomeFantasia }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho</label>
                                    <select v-bind:disabled="ambientes.length == 0" v-model="funcionario.ambienteTrabalho" class="form-control">
                                        <option :value="{}" v-if="ambientes.length == 0" disabled selected> ---- SELECIONE PRIMEIRO UM CONTRATO ---- </option>
                                        <option :value="ambiente" v-for="ambiente in ambientes">
                                            {{ ambiente.idOrigem }} -
                                            {{ ambiente.nomeAmbienteTrabalho }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Função</label>
                                    <select v-bind:disabled="funcoes.length == 0" v-model="funcionario.funcao" class="form-control">
                                        <option :value="{}" v-if="funcoes.length == 0" disabled selected> ---- SELECIONE PRIMEIRO UM AMBIENTE ---- </option>
                                        <option :value="funcao" v-for="funcao in funcoes">{{ funcao.cargo }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <input type="text" v-model="funcionario.observacao" class="form-control">
                                </div>
                            </div>
                        </div>
                    </b-modal>

                    <!-- EDITAR EMPREGADO -->
                    <b-modal size="xl" hide-footer :title="'Editar empregado | ' + ativo" centered ref="modalEditar" id="modalEditar">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <input type="text" v-model="funcionario.pessoa.nomePessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" v-model="funcionario.matricula" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 title-modal">
                                <h5>Histórico de Movimentações</h5>
                            </div>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table  table-hover table-striped">
                                        <thead>
                                            <th>Ambiente</th>
                                            <th>Cargo</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Dt. Final</th>
                                            <th style="width:130px">Tempo</th>
                                            <th>Tipo Op.</th>
                                            <th>Contratante</th>
                                            <th>Ações</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(historico, index) in historicos">
                                                <td>{{ formataEstabelecimento(historico.ambienteTrabalho.estabelecimento) }}
                                                    -
                                                    {{ historico.ambienteTrabalho.nomeAmbienteTrabalho }}</td>
                                                <td>{{ historico.funcao.cargo }}</td>
                                                <td>{{ historico.dataInicial | moment("DD/MM/Y") }}</td>
                                                <td v-if="historico.tipoOperacao != 'DEMISSIONAL'">{{ historico.dataFuncao | moment("DD/MM/Y") }}</td>
                                                <td v-if="historico.tipoOperacao == 'DEMISSIONAL'">N/A</td>
                                                <td>{{ historico.dataFinal | moment("DD/MM/Y") }}</td>
                                                <td style="width:130px" v-if="historico.tipoOperacao != 'DEMISSIONAL'">
                                                    <span v-if="index == historicos.length - 1"> </span>
                                                    <span v-if="index != historicos.length - 1">{{ historico.ano }}A, {{ historico.mes }}M,
                                                        {{ historico.dia }}D</span>
                                                </td>
                                                <td style="width:250px" v-if="historico.tipoOperacao == 'DEMISSIONAL'">{{ funcionario.ano }}A, {{ funcionario.mes }}M,
                                                    {{ funcionario.dia }}D</td>
                                                <td>{{ formataTipo(historico.tipoOperacao) }}</td>
                                                <td>{{ historico.empresaContrato.empresaContratante.nomeFantasia }}
                                                </td>
                                                <td><button @click="abrirModalEditarAlteracao(historico)" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div v-if="this.ativo == 'Ativo'" class="row">
                            <div class="col-md-12">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-plus"></i> Adicionar Movimentação
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" @click="abrirModalFuncao(funcionario)">Mudança de Função</a>
                                        <a class="dropdown-item" @click="abrirModalTransferencia">Transferência</a>
                                        <a class="dropdown-item" @click="abrirModalContratante">Mudança de
                                            contratante</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" @click="abrirModalDemissional">Demissional</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-modal>

                    <!-- ALTERAÇAO -->
                    <b-modal :no-close-on-backdrop="true" @ok="salvarAlteracao" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharAlteracao()" size="xl" :title="ativo" centered ref="modalAlteracao" id="modalAlteracao">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <input type="text" v-model="funcionario.pessoa.nomePessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" v-model="funcionario.matricula" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">PIS</label>
                                    <input type="text" v-mask="'###.#####.##-#'" v-model="funcionario.pessoa.pis" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CTPS</label>
                                    <input type="text" v-model="funcionario.pessoa.ctps" disabled class="form-control">
                                </div>
                            </div>
                            <div :class="{'col-md-2': funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO', 'col-md-3': funcionario.tipoOperacao != 'MUDANÇA_DE_FUNÇÃO' }">
                                <div class="form-group">
                                    <label for="">Data da Adm.</label>
                                    <input v-model="funcionario.dataInicial" @change="funcionario.dataFuncao = funcionario.dataInicial" disabled type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2" v-if="funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO'">
                                <div class="form-group">
                                    <label for="">Data no Cargo</label>
                                    <input type="date" class="form-control" v-model="min" disabled>
                                </div>
                            </div>

                            <div :class="{'col-md-2': funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO', 'col-md-3': funcionario.tipoOperacao != 'MUDANÇA_DE_FUNÇÃO' }">
                                <div class="form-group">
                                    <label for="">Data M. Função</label>
                                    <input v-model="funcionario.dataFuncao" v-on:blur="verificarData" :min="min" :max="max" type="date" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Contrato</label>
                                    <select v-if="funcionario.tipoOperacao == 'MUDANÇA_DE_CONTRATANTE'" v-model="funcionario.empresaContrato" class="form-control">
                                        <option v-if="contrato.idEmpresaContrato != atual.idEmpresaContrato" :value="contrato" v-for="contrato in contratos">
                                            {{ contrato.empresaContratante.nomeFantasia }}
                                        </option>
                                    </select>

                                    <input type="text" v-if="funcionario.tipoOperacao != 'MUDANÇA_DE_CONTRATANTE' && funcionario.empresaContrato.empresaContratante" v-model="funcionario.empresaContrato.empresaContratante.nomeFantasia" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho</label>
                                    <select v-model="funcionario.ambienteTrabalho" @change="" class="form-control">
                                        <option :value="ambiente" v-for="ambiente in ambientes">
                                            {{ ambiente.idOrigem }} -
                                            {{ ambiente.nomeAmbienteTrabalho }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Função</label>
                                    <select v-if="funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO'" v-model="funcionario.funcao" class="form-control">
                                        <option :value="funcao" v-bind:disabled="funcao.idFuncao == atual.idFuncao" v-for="funcao in funcoes">{{ funcao.cargo }}</option>
                                    </select>
                                    <input type="text" disabled v-model="funcionario.funcao.cargo" v-if="funcionario.tipoOperacao != 'MUDANÇA_DE_FUNÇÃO'" class="form-control">
                                    <span id="emailHelp" class="form-text text-muted" v-if="funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO'"><strong>Função Atual: </strong> {{ atual.cargo }}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <input type="text" v-model="funcionario.observacao" class="form-control">
                                </div>
                            </div>
                        </div>

                    </b-modal>

                    <!-- DEMISSIONAL -->
                    <b-modal :no-close-on-backdrop="true" @ok="salvarDemissional" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharAlteracao()" size="xl" title="Demitir" centered ref="modalDemissional" id="modalDemissional">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <input type="text" v-model="funcionario.pessoa.nomePessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" v-model="funcionario.matricula" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Contrato</label>
                                    <input disabled v-model="funcionario.empresaContrato.empresaContratante.nomeFantasia" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">PIS</label>
                                    <input type="text" v-mask="'###.#####.##-#'" v-model="funcionario.pessoa.pis" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CTPS</label>
                                    <input type="text" v-model="funcionario.pessoa.ctps" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Função</label>
                                    <input disabled v-model="funcionario.funcao.cargo" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho</label>
                                    <input disabled v-model="funcionario.ambienteTrabalho.idOrigem + ' - ' + funcionario.ambienteTrabalho.descricao" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Data da Adm.</label>
                                    <input v-model="funcionario.dataInicial" @change="funcionario.dataFuncao = funcionario.dataInicial" disabled type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Data Função</label>
                                    <input disabled v-model="funcionario.dataFuncao" type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Data Final</label>
                                    <input type="date" v-model="funcionario.dataFinal" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <input type="text" v-model="funcionario.observacao" class="form-control">
                                </div>
                            </div>
                        </div>

                    </b-modal>

                    <!-- EDITAR ADMISSIONAL E ETC -->
                    <b-modal :no-close-on-backdrop="true" @ok="editarAlteracao" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharEditarMovimentacao()" size="xl" :title="'Editar movimentação | ' + ativo" centered ref="modalEditarAlteracao" id="modalEditarAlteracao">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <input type="text" v-model="funcionario.pessoa.nomePessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" v-model="funcionario.matricula" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">PIS</label>
                                    <input type="text" v-mask="'###.#####.##-#'" v-model="funcionario.pessoa.pis" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CTPS</label>
                                    <input type="text" v-model="funcionario.pessoa.ctps" disabled class="form-control">
                                </div>
                            </div>

                            <div v-bind:class="{'col-md-3': funcionario.tipoOperacao != 'DEMISSIONAL', 'col-md-2' : funcionario.tipoOperacao == 'DEMISSIONAL'}">
                                <div class="form-group">
                                    <label for="">Data da Adm.</label>
                                    <input v-model="funcionario.dataInicial" :disabled="funcionario.tipoOperacao != 'ADMISSIONAL'" @change="mudouData()" type="date" class="form-control">
                                </div>
                            </div>

                            <div v-bind:class="{'col-md-3': funcionario.tipoOperacao != 'DEMISSIONAL', 'col-md-2' : funcionario.tipoOperacao == 'DEMISSIONAL'}">
                                <div class="form-group">
                                    <label for="">Data Função</label>
                                    <input v-model="funcionario.dataFuncao" type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Contrato</label>
                                    <select v-model="funcionario.empresaContrato" @change="mudouContrato()" :disabled="funcionario.tipoOperacao != 'ADMISSIONAL'" class="form-control">
                                        <option :value="contrato" v-for="contrato in contratos">
                                            {{ contrato.empresaContratante.nomeFantasia }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho</label>

                                    <select v-model="funcionario.ambienteTrabalho" :disabled="funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO'" class="form-control">
                                        <option :value="ambiente" v-for="ambiente in ambientes">
                                            {{ ambiente.idOrigem }} -
                                            {{ ambiente.nomeAmbienteTrabalho }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Função</label>
                                    <select v-model="funcionario.funcao" class="form-control">
                                        <option :value="funcao" v-for="funcao in funcoes">{{ funcao.cargo }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2" v-if="funcionario.tipoOperacao == 'DEMISSIONAL'">
                                <div class="form-group">
                                    <label for="">Data Final</label>
                                    <input type="date" v-model="funcionario.dataFinal" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <input type="text" v-model="funcionario.observacao" class="form-control">
                                </div>
                            </div>
                        </div>
                    </b-modal>

                    <b-modal :no-close-on-backdrop="true" @ok="salvarTransferencia" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharFuncao()" size="xl" title="Transferencia entre empresas" centered ref="modalTransferencia" id="modalTransferencia">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Pessoa</label>
                                    <input type="text" v-model="funcionario.pessoa.nomePessoa" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Matrícula</label>
                                    <input type="text" v-model="funcionario.matricula" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="funcionario.pessoa.idPessoa" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Contrato</label>
                                    <select v-model="funcionario.empresaContrato" class="form-control">
                                        <option v-if="contrato.idEmpresaContrato != atual.idEmpresaContrato" :value="contrato" v-for="contrato in contratosTransferencia">
                                            {{ contrato.empresaContratante.nomeFantasia }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" v-mask="'###.###.###-##'" v-model="funcionario.pessoa.cpf" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">PIS</label>
                                    <input type="text" v-mask="'###.#####.##-#'" v-model="funcionario.pessoa.pis" disabled class="form-control">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">CTPS</label>
                                    <input type="text" v-model="funcionario.pessoa.ctps" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Função</label>
                                    <select v-model="funcionario.funcao" class="form-control">
                                        <option :value="funcao" v-if="funcao.idFuncao != atual.idFuncao" v-for="funcao in funcoes">{{ funcao.cargo }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Ambiente de Trabalho {{ ambientes.length }}</label>
                                    <select v-bind:disabled="!ambientes.length > 0" v-model="funcionario.ambienteTrabalho" class="form-control">
                                        <option :value="ambiente" v-for="ambiente in ambientes">
                                            {{ ambiente.idOrigem }} -
                                            {{ ambiente.nomeAmbienteTrabalho }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Data da Adm.</label>
                                    <input v-model="funcionario.dataInicial" @change="funcionario.dataFuncao = funcionario.dataInicial" type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Data Função</label>
                                    <input v-model="funcionario.dataFuncao" type="date" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <input type="text" v-model="funcionario.observacao" class="form-control">
                                </div>
                            </div>
                        </div>

                    </b-modal>
                </b-card-text>
            </b-tab>
            <b-tab @click="carregaAfastados()" title="Afastados">
                <b-card-text>
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table class="table table-hover table-striped table-empregados">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matrícula</th>
                                        <th>Nome</th>
                                        <th>Dt. Adm</th>
                                        <th>Dt. de Dem</th>
                                        <th>Tempo</th>
                                        <th>Histórico</th>

                                    </tr>
                                    <tr @click="editar(afastado, 'Inativo')" style="cursor: pointer" v-for="afastado in afastados">
                                        <td>{{ afastado.pessoa.idPessoa }}</td>
                                        <td>{{ afastado.matricula }}</td>
                                        <td>{{ afastado.pessoa.nomePessoa }}</td>
                                        <td>{{ afastado.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ afastado.dataFinal | moment("DD/MM/Y") }}</td>
                                        <td>{{ afastado.ano }}A, {{ afastado.mes }}M,
                                            {{ afastado.dia }}D</td>
                                        <td><button @click="editar(afastado, 'Inativo')" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
            <b-tab @click="carregaPcds()" title="PCD">
                <b-card-text>
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table class="table table-hover table-striped table-empregados">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matrícula</th>
                                        <th>Nome</th>
                                        <th>Dt. Adm</th>
                                        <th>Dt. de Dem</th>
                                        <th>Tempo</th>
                                        <th>Histórico</th>

                                    </tr>
                                    <tr @click="editar(pcd, 'Inativo')" style="cursor: pointer" v-for="pcd in pcds">
                                        <td>{{ pcd.pessoa.idPessoa }}</td>
                                        <td>{{ pcd.matricula }}</td>
                                        <td>{{ pcd.pessoa.nomePessoa }}</td>
                                        <td>{{ pcd.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ pcd.dataFinal | moment("DD/MM/Y") }}</td>
                                        <td>{{ pcd.ano }}A, {{ pcd.mes }}M,
                                            {{ pcd.dia }}D</td>
                                        <td><button @click="editar(afastado, 'Inativo')" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
            <b-tab @click="carregaDemitidos()" title="Inativos">
                <b-card-text>
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table class="table table-hover table-striped table-empregados">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matrícula</th>
                                        <th>Nome</th>
                                        <th>Dt. Adm</th>
                                        <th>Dt. de Dem</th>
                                        <th>Tempo</th>
                                        <th>Histórico</th>

                                    </tr>
                                    <tr @click="editar(demitido, 'Inativo')" style="cursor: pointer" v-for="demitido in demitidos">
                                        <td>{{ demitido.pessoa.idPessoa }}</td>
                                        <td>{{ demitido.matricula }}</td>
                                        <td>{{ demitido.pessoa.nomePessoa }}</td>
                                        <td>{{ demitido.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ demitido.dataFinal | moment("DD/MM/Y") }}</td>
                                        <td>{{ demitido.ano }}A, {{ demitido.mes }}M,
                                            {{ demitido.dia }}D</td>
                                        <td><button @click="editar(demitido, 'Inativo')" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
            <b-tab @click="carregaTemporarios()" title="Temporários">
                <b-card-text>
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table class="table table-hover table-striped table-empregados">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matrícula</th>
                                        <th>Nome</th>
                                        <th>Dt. Adm</th>
                                        <th>Dt. de Dem</th>
                                        <th>Tempo</th>
                                        <th>Histórico</th>

                                    </tr>
                                    <tr @click="editar(temporario, 'Inativo')" style="cursor: pointer" v-for="temporario in temporarios">
                                        <td>{{ temporario.pessoa.idPessoa }}</td>
                                        <td>{{ temporario.matricula }}</td>
                                        <td>{{ temporario.pessoa.nomePessoa }}</td>
                                        <td>{{ temporario.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ temporario.dataFinal | moment("DD/MM/Y") }}</td>
                                        <td>{{ temporario.ano }}A, {{ temporario.mes }}M,
                                            {{ temporario.dia }}D</td>
                                        <td><button @click="editar(temporario, 'Inativo')" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>

</div>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            funcionarios: [],
            cpf: '',
            funcionario: {
                idEmpresaFuncionario: 0,
                empresaContrato: {
                    empresaContratante: {}
                },
                ambienteTrabalho: {},
                funcao: {},
                jornadaTrabalho: {},
                pessoa: {
                    idPessoa: 0,
                    nomePessoa: '',
                    cpf: '',
                    pis: '',
                    ctps: '',
                    dataNascimento: '',
                    sexo: '',
                    tipoSangue: '',
                    observacao: '',
                    pais: {
                        idPais: 1,
                        nome: "Brasil",
                        codigoPais: "1  ",
                    },
                    estrangeiro: '',
                    endereco: '',
                    bairro: '',
                    cep: '',
                    telefone: '',
                    email: '',
                    escolaridade: '',
                    status: 'A',
                },
                matricula: '',
                tipoOperacao: '',
                flag: '',
                dataInicial: '',
                dataFuncao: '',
                dataFinal: '',
                observacao: ''
            },
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            pessoas: [],
            idPessoa: '',
            funcoes: [],
            demissional: false,
            ambientes: [],
            contratos: [],
            ativo: 'Ativo',
            historicos: [],
            atual: {},
            contratosTransferencia: [],
            filiais: {},
            demitidos: [],
            afastados: [],
            temporarios: [],
            pcds: [],
            min: '',
            max: '',
            ambientesAll: [],
            idTabela: '#tabelaListagemEmpregados',
            erroMatricula: false,
        }
    },
    computed: {
        hoje() {
            var data = new Date();
            return data.toISOString().slice(0, 10);
        }

    },
    methods: {
        nextItem: function () {

        },

        fecharEditarMovimentacao() {
            this.$refs.modalEditar.show();
        },

        formataEstabelecimento: function (estabelecimento) {
            if (estabelecimento == 'PRÓPRIO') {
                return 'P';
            } else if (estabelecimento == 'TERCEIROS') {
                return 'T';
            } else if (estabelecimento == 'SERVIÇOS_TERCEIROS') {
                return 'ST';
            }
        },
        formataTipo: function (tipo) {
            if (tipo == 'ADMISSIONAL') {
                return 'Adm';
            } else if (tipo == 'DEMISSIONAL') {
                return 'Dem';
            } else if (tipo == 'MUDANÇA_DE_FUNÇÃO') {
                return 'M. Fun';
            } else if (tipo == 'MUDANÇA_DE_CONTRATANTE') {
                return 'M. Con';
            } else if (tipo == 'TRANSFERÊNCIA') {
                return 'Trans';
            }
        },
        formataSexo: function (sexo) {
            if (sexo == 'MASCULINO') {
                return 'M';
            } else if (sexo == 'FEMININO') {
                return 'F';
            }
        },
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 1000);
        },

        alerta: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fas fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 2000);
        },

        editar: function (funcionario, ativo) {
            this.funcionario = funcionario;

            var that = this;

            this.ativo = ativo;

            axios.get('/empresas/empregados/historico/' + this.funcionario.matricula + "/" + this.empresa
                .idEmpresa).then(function (
                response) {
                that.historicos = response.data;
            });

            //console.log(this.historicos);

            this.$refs.modalEditar.show();
        },

        abrirModalFuncao: function (func, tipo) {
            this.funcionario = Object.assign(func);

            this.carregar('Carregando informações...');

            this.funcionario.tipoOperacao = 'MUDANÇA_DE_FUNÇÃO';

            this.ativo = 'Mudança de Função';

            this.min = this.funcionario.dataFuncao;

            // this.max = Vue.moment(this.funcionario.dataFuncao, "YYYY-MM-DD").add(30, 'days').format("YYYY-MM-DD");

            this.atual = this.funcionario.funcao;

            var that = this;

            that.$refs.modalEditar.hide();
            that.carregando = false;
            that.funcionario.dataFuncao = '';
            that.funcionario.funcao = {};
            that.funcionario.observacao = '';
            that.$refs.modalAlteracao.show();
            that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
        },

        getContratos(dataFuncionario) {

            this.contratos = this.contratosAll.filter(function (contrato) {
                var dataInicio = new Date(contrato.dataIni);
                var data = new Date(dataFuncionario);

                if (dataInicio <= data) {
                    if (contrato.dataFim) {
                        var dataFim = new Date(contrato.dataFim);

                        if (dataFim >= data) {
                            return true;
                        } else {
                            return false;
                        }

                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            });
        },

        mudouData() {

            var data = Vue.moment(this.funcionario.dataInicial, "YYYY-MM-DD");
            var hoje = Vue.moment().startOf('day');

            var diff = Vue.moment.duration(data.diff(hoje)).asDays();
            console.log(diff);
            if (diff <= 30) {

                if (this.funcionario.tipoOperacao == 'ADMISSIONAL') {
                    this.funcionario.dataFuncao = this.funcionario.dataInicial;
                }

                this.getContratos(this.funcionario.dataInicial);
            } else {
                this.funcionario.dataFuncao = Vue.moment().format("YYYY-MM-DD");
                this.funcionario.dataInicial = Vue.moment().format("YYYY-MM-DD");

                this.$alert("A data deve ser, no máximo, 30 dias maior que hoje.", "Atenção!", 'error');
                this.getContratos(hoje);
            }

        },

        verificarData() {

            var that = this;

            var dataFuncao = new Date(this.funcionario.dataFuncao);
            var data = new Date(this.min);

            if (dataFuncao < data) {

                data.setDate(data.getDate() + 1);

                this.$alert('Data precisa ser maior que ' + (data.getDate()) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
                that.funcionario.dataFuncao = that.min;
            }
        },

        mudouContrato() {
            this.carregar("Buscando último PCMSO...");

            var that = this;

            axios.post('/pcmso/ultimo', {
                'empresa': this.empresa.idEmpresa,
                'contrato': this.funcionario.empresaContrato.idEmpresaContrato,
                'data': this.funcionario.dataFuncao
            }).then(function (response) {
                setTimeout(function () {

                    if (response.data != "") {

                        that.carregando = false;
                        that.$alert('PCMSO encontrado!', 'Sucesso!', 'success');

                    } else {
                        that.carregando = false;
                        that.$alert('Não há nenhum PCMSO para este contrato.', 'Atenção!', 'error');
                    }

                }, 1000);
                console.log(response.data);
            });
        },

        // mudouAmbiente(ambiente) {

        //     this.carregar("Buscando funções deste ambiente...");

        //     var that = this;

        //     console.log(ambiente);

        //     axios.get('/pcmso/ambiente/' + ambiente.idPcmsoAmbienteTrabalho + '/funcoes/list').then(function (response) {
        //         console.log(response.data);
        //         that.funcoes = response.data;
        //         setTimeout(function () {
        //             that.carregando = false;
        //             that.$alert('Funções encontradas.', 'Sucesso!', 'success');
        //         }, 1000);

        //     });

        // },

        salvarAlteracao: function (evt) {
            evt.preventDefault();
            this.carregar('Alterando a função do empregado...');

            if (!this.funcionario.dataFuncao) {
                this.alerta('Preencha a data de função!');
            } else {

                var dataAntiga = new Date(this.min);
                var data = new Date(this.funcionario.dataFuncao);

                var that = this;

                //console.log(data < dataAntiga);

                if (data < dataAntiga) {
                    this.alerta('Data de função tem que ser maior que a anterior.');
                } else {

                    axios.post('/empresas/empregados/alteracao', {
                        empresa: that.empresa,
                        funcionario: that.funcionario,

                    }).then(function (response) {

                        that.funcionarios = response.data;
                        that.sucesso('Sucesso!');
                        that.$refs.modalAlteracao.hide();
                        that.$refs.modalDemissional.hide();

                    });

                }

            }
        },

        salvarDemissional: function (evt) {
            evt.preventDefault();
            this.carregar('Realizando demissão...');
            if (!this.funcionario.dataFinal) {
                this.alerta('Preencha a data final!');
            } else {
                var that = this;
                axios.post('/empresas/empregados/alteracao/movimentacao', {
                    empresa: that.empresa,
                    funcionario: that.funcionario,
                }).then(function (response) {
                    if (response.data.status == 'false') {
                        that.carregando = false;
                        that.$alert(response.data.msg, "Atenção!", 'error');
                    } else {
                        that.funcionarios = response.data;
                        that.sucesso('Sucesso!');
                        that.$refs.modalAlteracao.hide();
                        that.$refs.modalDemissional.hide();
                    }

                });
            }
        },

        abrirModalEditarAlteracao: function (funcionario) {
            this.funcionario = Object.assign({}, funcionario);

            this.carregar('Carregando informações...');

            if (this.funcionario.tipoOperacao == 'MUDANÇA_DE_CONTRATANTE') {
                this.ativo = 'Mudança de Contratante';
            }

            if (this.funcionario.tipoOperacao == 'MUDANÇA_DE_FUNÇÃO') {
                this.ativo = 'Mudança de Função';
            }

            if (this.funcionario.tipoOperacao == 'ADMISSIONAL') {
                this.ativo = 'Admissional';
            }

            this.getContratos(this.funcionario.dataFuncao);

            var that = this;
            
            that.funcionario.ambienteTrabalho = that.ambientes.find(function (elemento) {
                return elemento.idAmbienteTrabalho == that.funcionario.ambienteTrabalho.idAmbienteTrabalho;
            });

            console.log('func', this.funcionario);

            that.$refs.modalEditar.hide();
            that.carregando = false;
            that.$refs.modalEditarAlteracao.show();
            that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
        },

        recuperarDados(callback) {

            var that = this;
            axios.post('/pcmso/ultimo', {
                'empresa': this.empresa.idEmpresa,
                'contrato': this.funcionario.empresaContrato.idEmpresaContrato,
                'data': this.funcionario.dataFuncao
            }).then(function (response) {
                setTimeout(function () {
                    if (response.data != "") {
                        that.mensagem = "Pronto. Buscando ambientes...";

                        axios.get('/pcmso/ambientes/' + response.data.idPcmso + '/list').then(function (response) {
                            that.ambientes = response.data;

                            that.funcionario.ambienteTrabalho = that.ambientes.find(function (elemento) {
                                return elemento.idAmbienteTrabalho == that.funcionario.ambienteTrabalho.idAmbienteTrabalho;
                            });

                            setTimeout(function () {
                                that.mensagem = "Encontradas. Buscando funções...";

                                axios.get('/pcmso/ambiente/' + that.funcionario.ambienteTrabalho.idPcmsoAmbienteTrabalho + '/funcoes/list').then(function (response) {
                                    console.log(response.data);
                                    that.funcoes = response.data;
                                    setTimeout(function () {
                                        callback();
                                    }, 1000);

                                });

                            }, 500);
                        });

                    } else {
                        that.carregando = false;
                        that.funcionario.empresaContrato = {};
                        that.ambientes = [];
                        that.funcionario.ambienteTrabalho = {};
                        that.funcionario.funcao = {};
                        that.$alert('Não há nenhum PCMSO para este contrato.', 'Atenção!', 'error');
                    }

                }, 1000);
                console.log(response.data);
            });

        },

        abrirModalTransferencia: function () {
            this.$refs.modalEditar.hide();
            this.$refs.modalTransferencia.show();
        },

        editarAlteracao: function (evt) {
            evt.preventDefault();
            var that = this;
            this.carregar('Alterando a movimentação...');
            axios.post('/empresas/empregados/alteracao/movimentacao', {
                empresa: that.empresa,
                funcionario: that.funcionario,
            }).then(function (response) {
                that.funcionarios = response.data;
                that.carregando = false;
                that.$refs.modalEditarAlteracao.hide();
                that.$alert('Dados atualizados.', 'Sucesso!', 'success');
                that.editar(that.funcionario, 'Ativo');
            });
        },

        fecharAlteracao: function () {
            var that = this;
            that.$refs.modalFuncao.hide();
        },

        abrirModalContratante: function () {
            this.$refs.modalEditar.hide();
            this.funcionario.tipoOperacao = 'MUDANÇA_DE_CONTRATANTE';
            this.ativo = 'Mudança de Contratante';
            this.funcionario.dataFuncao = '';
            this.funcionario.observacao = '';
            this.atual = this.funcionario.empresaContrato;
            this.$refs.modalAlteracao.show();
        },

        abrirModalDemissional: function () {
            this.$refs.modalEditar.hide();
            this.demissional = true;
            this.funcionario.tipoOperacao = 'DEMISSIONAL';
            //console.log(this.funcionario);
            this.funcionario.observacao = '';
            this.$refs.modalDemissional.show();
        },

        salvarTransferencia: function () {

        },

        admissional: function () {
            this.cpf = '';
            this.funcionario = {
                idEmpresaFuncionario: 0,
                empresaContrato: {
                    empresaContratante: {

                    }
                },
                ambienteTrabalho: {},
                funcao: {},
                jornadaTrabalho: {},
                pessoa: {
                    idPessoa: 0,
                    nomePessoa: '',
                    cpf: '',
                    pis: '',
                    ctps: '',
                    dataNascimento: '',
                    sexo: '',
                    tipoSangue: '',
                    observacao: '',
                    pais: {
                        idPais: 1,
                        nome: "Brasil",
                        codigoPais: "1  ",
                    },
                    estrangeiro: '',
                    endereco: '',
                    bairro: '',
                    cep: '',
                    telefone: '',
                    email: '',
                    escolaridade: '',
                    status: 'A',
                },
                matricula: '',
                tipoOperacao: 'ADMISSIONAL',
                mensagemMatricula: '',
                flag: '',
                dataInicial: this.hoje,
                dataFuncao: this.hoje,
                observacao: ''
            };

            this.getContratos(this.hoje);

            var that = this;

            console.log(this.empresa.tipoEmpresa);

            if (this.empresa.tipoEmpresa == 'NENHUM' || this.empresa.tipoEmpresa == 'CONTRATANTE') {
                var contr = this.contratos.filter(function (cont) {
                    return cont.empresaContratante.idEmpresa == that.empresa.idEmpresa;
                });

                this.funcionario.empresaContrato = contr[0];

                this.$refs.modalAdmissional.show();

                this.mudouContrato();
            } else {
                this.$refs.modalAdmissional.show();
            }

        },

        buscaCpf: function () {
            var that = this;
            this.carregar('Buscando pessoa...');
            if (/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(this.cpf)) {
                axios.get('/pessoas/cpf/' + this.cpf).then(function (response) {
                    if (response.data != '') {
                        if (!that.pessoaEmAdmissional(response.data)) {
                            that.funcionario.pessoa = response.data;
                            that.idPessoa = response.data.idPessoa;
                            that.sucesso('Pessoa encontrada.');
                        } else {
                            that.alerta(response.data.nomePessoa + ' já está nesta empresa!');
                        }

                    } else {
                        that.alerta('Pessoa não encontrada!');
                    }
                });
            } else {
                that.alerta('CPF invalido. Verifique e tente novamente.');
            }
        },

        mudouPessoa: function () {
            var that = this;
            var filtrado = this.pessoas.filter(function (val) {
                //console.log(val.idPessoa, that.idPessoa, val.idPessoa == that.idPessoa);
                return val.idPessoa == that.idPessoa;
            });

            this.funcionario.pessoa = filtrado[0];
        },

        salvarAdmissional: function (evt) {
            evt.preventDefault();
            this.carregar('Salvando novo empregado...');
            
            this.verificaMatricula();

            if (!this.funcionario.dataInicial) {
                this.alerta('Preencha a data inicial');
            } else if (this.erroMatricula) {
                this.alerta('Corrija a matrícula!');
            } else {
                var that = this;

                axios.post('/empresas/empregados/admissional', {
                    empresa: that.empresa,
                    funcionario: that.funcionario,
                }).then(function (response) {
                    that.funcionarios = response.data;
                    that.sucesso('Empregado incluído!');
                    that.$refs.modalAdmissional.hide();
                });
            }
        },

        verificaMatricula: function () {
            // console.log('to aqui');
            var that = this;
            that.erroMatricula = false;
            if(!this.funcionario.matricula || this.funcionario.matricula == '') {
                that.erroMatricula = true;
                that.mensagemMatricula = 'Preenchimento obrigatório.'
                $("#matricula").focus();
            } else {
                for (var i = 0; i < this.funcionarios.length; i++) {
                if (this.funcionarios[i].matricula === this.funcionario.matricula) {
                    that.erroMatricula = true;
                    that.mensagemMatricula = 'Matricula já utilizada.'
                    $("#matricula").focus();
                }
            }
            }
            
        },

        pessoaEmAdmissional: function (pessoa) {
            for (var i = 0; i < this.funcionarios.length; i++) {
                if (this.funcionarios[i].pessoa.idPessoa === pessoa.idPessoa) {
                    return true;
                }
            }

            return false;
        },

        fecharAdmissional: function () {

        },

        carregaDemitidos: function () {
            this.carregar('Carregando demitidos...');
            var that = this;
            axios.get('/empresas/empregados/demitidos/' + that.empresa.idEmpresa).then(function (response) {
                that.demitidos = response.data;
                that.sucesso('Carregado com sucesso!');
            });
        },

        carregaAfastados: function () {
            this.carregar('Carregando afastados...');
            var that = this;
            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                that.afastados = response.data;
                that.sucesso('Carregado com sucesso!');
            });
        },
        carregaPcds: function () {
            this.carregar('Carregando PCD...');
            var that = this;
            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosPCDPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                that.pcds = response.data;
                that.sucesso('Carregado com sucesso!');
            });
        },

        carregaTemporarios: function () {
            this.carregar('Carregando temporários...');
            var that = this;
            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                that.temporarios = response.data;
                that.sucesso('Carregado com sucesso!');
            });
        }
    },
    mounted() {

        this.mensagem = 'Carregando empregados...';
        var that = this;
        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
            that.funcionarios = response.data;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.sucesso('Empregados carregados');
                that.carregando = false;
            }, 200);
        });

        axios.get('/pessoas/list').then(function (response) {
            that.pessoas = response.data;
        });

        axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
            that.contratosAll = response.data;
            // that.contratos = that.contratosAll;
        });

        axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(
            function (response) {
                that.ambientes = response.data;
                //console.log(response.data);
            });

        axios.get('/tabelas/funcoes/list').then(function (response) {
            that.funcoes = response.data;
        });

        axios.get('/empresas/filiais/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(function (response) {
            that.filiais = response.data;
            //console.log(that.filiais);
        });
    }
}
</script>

<style lang="scss">
input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}

.title-modal {
    text-align: center;

    h5 {
        background-color: green;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
    }
}

.align-self-center {
    h5 {
        margin-bottom: 0px;
    }
}

.box-empregados {
    padding-bottom: 20px;
}

.table-empregados {
    margin-bottom: 10px;

    tr {
        th {
            font-weight: bold;
        }

        td,
        th {
            white-space: nowrap;
            border: 1px solid #dee2e6;
        }
    }
}

.dropdown-item {
    cursor: pointer;
}

.sig {
    width: 100%;
}
</style>
