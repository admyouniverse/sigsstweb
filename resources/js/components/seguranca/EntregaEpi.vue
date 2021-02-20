<template>
<b-card-text>
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <table v-if="entregas.length > 0" class="table table-hover table-striped" id="tabelaEntregas">
        <thead>
            <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Funcionário</th>
                <th>Assinatura</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entrega in entregas" style="cursor: pointer" :class="{'bg-primary': !entrega.dataAssinatura}" @click="visualizar(entrega)">
                <td>{{entrega.idEntregaEpi}}</td>
                <td>{{entrega.data | moment('DD/MM/YYYY')}}</td>
                <td>{{entrega.empresaFuncionario.pessoa.nomePessoa}}</td>
                <td v-if="!entrega.dataAssinatura">Pendente</td>
                <td v-if="entrega.dataAssinatura">{{ entrega.dataAssinatura | moment('DD/MM/YYYY') }}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" @click="visualizar(entrega)"><i class="fa fa-pencil-alt"></i></button>
                    <button @click.stop="removerEntrega(entrega)" class="btn btn-outline-danger btn-sm" v-if="!(entrega.dataAssinatura)"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="col-md-12 text-center">
        <br>
        <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
            Adicionar</button>
    </div>

    <b-modal ref="myModal" title="Escolha o funcionário" hide-footer size="xl" @shown="exibeTabela">

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
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="cursor: pointer" @click="selecionar(funcionario)" v-for="funcionario in funcionarios">
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>

    <b-modal ref="modalEntrega" title="Entrega de EPI" @ok="salvar" cancel-title="Cancelar" ok-title="Salvar" size="xl" :hide-footer="entrega.idEntregaEpi > 0 && !(!entrega.dataAssinatura)">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input disabled type="text" class="form-control" v-model="entrega.empresaFuncionario.matricula">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input disabled type="text" class="form-control" v-model="entrega.empresaFuncionario.pessoa.cpf">
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input disabled type="text" class="form-control" v-model="entrega.empresaFuncionario.pessoa.nomePessoa">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Dt. Adm.</label>
                    <input type="date" class="form-control" disabled v-model="entrega.empresaFuncionario.dataInicial">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>Contratante</label>
                    <input type="text" class="form-control" disabled v-model="entrega.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>Ambiente de Trabalho</label>
                    <input type="text" class="form-control" disabled v-model="entrega.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label>Cargo</label>
                    <input type="text" disabled v-model="entrega.empresaFuncionario.funcao.cargo" class="form-control">
                </div>
            </div>

            <div class="col-md-5">
                <div class="form-group">
                    <label>Entregue por</label>
                    <input type="text" class="form-control" v-model="entrega.entregador" disabled>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label>Data de Entrega</label>
                    <input type="date" class="form-control" id="data" v-model="entrega.data">
                </div>
            </div>

            <div class="col-md-1" v-if="entrega.idEntregaEpi > 0">
                <button class="btn btn-lg btn-digital btn-success" @click="digital" :disabled="entrega.dataAssinatura"><i class="fas fa-lg fa-fingerprint"></i></button>
            </div>
            <div class="col-md-2 btn-digital" v-if="entrega.idEntregaEpi > 0">
                <span class="text-danger h5" v-if="!entrega.dataAssinatura">
                    Assinatura Pendente
                </span>
                <span class="text-success h5" v-if="entrega.dataAssinatura">
                    Assinatura Coletada
                </span>
            </div>

        </div>

        <div class="row" v-if="(entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi) || !entrega.dataAssinatura && eHoje(entrega) && entrega.idEntregaEpi > 0">
            <div class="col-md-12">
                <h3 class="titulo">Liberados para Entrega</h3>
            </div>

            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EPI</th>
                            <th>Unidade</th>
                            <th>Programado</th>
                            <th>Em Uso</th>
                            <th>Liberado</th>
                            <th>Carrinho</th>
                            <th>Validade</th>
                            <th>Uso</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="liberado in liberados">
                            <td>{{liberado.cadastroEpi.epi.idEpi}}</td>
                            <td>{{liberado.cadastroEpi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi}}.{{liberado.cadastroEpi.epi.categoriaEpi.codigoCategoria}} - {{liberado.cadastroEpi.epi.codigoNr6}} {{liberado.cadastroEpi.epi.descricao}}</td>
                            <td>{{liberado.cadastroEpi.epi.unidade}}</td>
                            <td>{{liberado.quantidade}}</td>
                            <td>{{liberado.quantidadeEmUso}}</td>
                            <td>
                                <!-- SE NÃO TEM ID AINDA (OU SEJA, NAO FOI SALVO) -->
                                <span v-if="entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi">
                                    {{liberado.quantidade - liberado.quantidadeEmUso - qtdCarrinho(liberado) }}
                                </span>

                                <span v-if="!entrega.dataAssinatura && eHoje(entrega) && entrega.idEntregaEpi > 0">
                                    {{liberado.quantidade - liberado.quantidadeEmUso - qtdCarrinho(liberado) + liberado.carrinho}}
                                </span>
                            </td>

                            <td>{{qtdCarrinho(liberado)}}</td>
                            <td>{{liberado.validade}}</td>
                            <td>{{liberado.uso}}</td>
                            <td><button @click="abrirEstoque(liberado)" class="btn btn-outline-success btn-sm" :disabled="liberado.quantidade - liberado.quantidadeEmUso - qtdCarrinho(liberado) <= 0"><i class="fas fa-list"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" v-if="entregaItens.length > 0 && (entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi)">
                <h3 class="titulo">Itens Adicionados ao Carrinho</h3>
            </div>

            <div class="col-md-12" v-if="entregaItens.length > 0 && entrega.idEntregaEpi > 0">
                <h3 class="titulo">Itens da entrega</h3>
            </div>

            <div class="col-md-12" v-if="entregaItens.length > 0">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center">ID</th>
                            <th>Descrição</th>
                            <th>Cor</th>
                            <th class="text-center">Tamanho</th>
                            <th class="text-center">C.A</th>
                            <th v-if="entregaItens.length > 0 && entrega.idEntregaEpi > 0">Val. do CA</th>
                            <th>Fabricante</th>
                            <th style="width: 100px">Quantidade</th>
                            <th v-if="entregaItens.length > 0 && entrega.idEntregaEpi > 0">Val. Max. Até</th>
                            <th>Intervenção</th>
                            <th style="width: 103px; text-align: center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entregaitem, index) in entregaItens" :class="{'bg-warning': entregaitem.estoque.idEstoque == 0 }">
                            <td class="text-center">{{ entregaitem.estoque.gradeEmpresaEpi.idOrigem }}</td>
                            <td>{{entregaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao}}</td>
                            <td>{{entregaitem.estoque.gradeEmpresaEpi.cor.descricao}}</td>
                            <td class="text-center">{{entregaitem.estoque.gradeEmpresaEpi.tamanho.descricao}}</td>
                            <td class="text-center">{{ entregaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.ca }}</td>
                            <td v-if="entregaItens.length > 0 && entrega.idEntregaEpi > 0" :class="{'text-danger': vencido(entregaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.validade)}">
                                {{ entregaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.validade | moment('DD/MM/YYYY') }}
                            </td>
                            <td>{{ entregaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante }}</td>
                            <td class="text-center">
                                <select v-model="entregaitem.quantidade" class="form-control" v-if="(entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi) || !entrega.dataAssinatura">
                                    <option :value="i" v-for="i in limite(entregaitem)">{{i}}</option>
                                </select>

                                <span v-if="entrega.idEntregaEpi > 0 && entrega.dataAssinatura">{{ entregaitem.quantidade }}</span>
                            </td>
                            <td :class="{'text-danger': vencido(entregaitem.validade)}">
                                {{ entregaitem.validade | moment('DD/MM/YYYY') }}
                            </td>
                            <td>
                                <span v-if="entregaitem.historico">
                                    {{ (entregaitem.historico[0].ocorrencia).replace(/_.*/,'') }} - {{ entregaitem.historico.reduce((a, b) => a + b['quantidade'], 0) }}
                                </span>
                            </td>
                            <td class="text-center">
                                <span v-if="entregaitem.historico">
                                    <button class="btn btn-outline-primary btn-sm" @click="abrirHistorico(entregaitem.historico)"><i class="fas fa-eye"></i></button>
                                    </span>
                                <span class="d-inline" v-if="(entregaitem.historico && (entregaitem.historico[0].ocorrencia).replace(/_.*/,'') != 'BLOQUEIO' && entregaitem.historico.reduce((a, b) => a + b['quantidade'], 0) < entregaitem.quantidade )  || !entregaitem.historico">
                                    <div v-if="(((entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi) || !(!entrega.dataAssinatura)) && entregaitem.idEntregaEpiItens > 0) && !vencido(entregaitem.validade)" class="dropdown d-inline-block">
                                        <button class="btn btn-outline-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-pencil-alt"></i>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button class="dropdown-item" @click="abrirBloquear(entregaitem)" v-if="diff(entrega.data) && !entregaitem.historico">Bloquear </button>
                                            <button class="dropdown-item" @click="abrirTrocar(entregaitem)" v-if="!vencido(entregaitem.validade)">Trocar</button>
                                        </div>
                                    </div>
                                </span>
                                <button @click="removerItem(index)" v-if="(entrega.idEntregaEpi == 0 || !entrega.idEntregaEpi) || !entrega.dataAssinatura" class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>

    <b-modal ref="itensModal" title="Itens no Estoque" @ok="adicionarItem" hide-footer size="lg">
        <table class="table table-hover table-striped" id="tabelaItens">
            <thead>
                <tr>
                    <th class="text-center">ID</th>
                    <th>Descrição</th>
                    <th>Cor</th>
                    <th class="text-center">Tamanho</th>
                    <th class="text-center">C.A</th>
                    <th>Fabricante</th>
                    <th>Quantidade em Estoque</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!estaAdicionado(item)" v-for="item in estoques" @click="selecionarItem(item)" :class="{'selecionado': selecionado  == item}" style="cursor: pointer">
                    <td class="text-center">{{ item.gradeEmpresaEpi.idOrigem }}</td>
                    <td>{{item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao}}</td>
                    <td>{{item.gradeEmpresaEpi.cor.descricao}}</td>
                    <td class="text-center">{{item.gradeEmpresaEpi.tamanho.descricao}}</td>
                    <td class="text-center">{{item.gradeEmpresaEpi.cadastroEpiCa.ca }}</td>
                    <td>{{ item.gradeEmpresaEpi.cadastroEpiCa.fabricante }}</td>
                    <td>{{ item.quantidadeEstoque }}</td>
                </tr>
            </tbody>
        </table>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir? </h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-secondary btn-lg" @click="fecharCerteza"><i class="fas fa-close"></i> Não
                </button>
            </div>
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim
                </button>
            </div>
        </div>
    </b-modal>

    <b-modal :no-close-on-backdrop="true" centered title="Bloquear entrega" @ok="salvarHistorico" cancel-title="Cancelar" ok-title="Salvar" :no-close-on-esc="true" ref="modalBloquear" id="modalBloquear">
        <div class="row mt-3">
            <div class="col-md-5">
                <label>Descrição</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao">
            </div>
            <div class="col-md-2">
                <label>Cor</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cor.descricao">
            </div>

            <div class="col-md-2">
                <label>Cor</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.tamanho.descricao">
            </div>

            <div class="col-md-3">
                <label>CA</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.ca">
            </div>

        </div>
        <div class="row mt-3">
            <div class="col-md-5">
                <label>Fabricante</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante">
            </div>

            <div class="col-md-2">
                <label>Qnt</label>
                <input type="text" class="form-control" readonly v-model="entregaItemHistorico.entregaEpiItens.quantidade">
            </div>

            <div class="col-md-5">
                <label>Data</label>
                <input type="date" class="form-control" :max="dataMaxima | moment('YYYY-MM-DD')" :min="entrega.data" v-model="entregaItemHistorico.data" v-on:blur="testaDataBloqueio">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-12">
                <label>Motivo do Bloqueio</label>
                <select v-model="entregaItemHistorico.ocorrencia" class="form-control">
                    <option value="BLOQUEIO_POR_COR_ERRADA">Bloqueio por cor errada</option>
                    <option value="BLOQUEIO_POR_TAMANHO_ERRADO">Bloqueio por tamanho errado</option>
                    <option value="BLOQUEIO_POR_ENTREGA_ERRADA">Bloqueio por entrega errada</option>
                </select>
            </div>
        </div>
    </b-modal>

    <b-modal :no-close-on-backdrop="true" centered title="Trocar entrega" @ok="salvarHistorico" cancel-title="Cancelar" ok-title="Salvar" :no-close-on-esc="true" ref="modalTrocar" id="modalTrocar">
        <div class="row mt-3">
            <div class="col-md-5">
                <label>Descrição</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao">
            </div>
            <div class="col-md-2">
                <label>Cor</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cor.descricao">
            </div>

            <div class="col-md-2">
                <label>Tam</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.tamanho.descricao">
            </div>

            <div class="col-md-3">
                <label>CA</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.ca">
            </div>

        </div>
        <div class="row mt-3">
            <div class="col-md-5">
                <label>Fabricante</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante">
            </div>

            <div class="col-md-2">
                <label>Qnt</label>
                <input type="text" class="form-control" disabled v-model="entregaItemHistorico.entregaEpiItens.quantidade">
            </div>

            <div class="col-md-5">
                <label>Data</label>
                <input type="date" class="form-control" :max="entregaItemHistorico.entregaEpiItens.validade | moment('YYYY-MM-DD')" v-model="entregaItemHistorico.data" v-on:blur="testaDataTroca" :min="entrega.data">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-9">
                <label>Motivo da troca</label>
                <select v-model="entregaItemHistorico.ocorrencia" class="form-control">
                    <option value="TROCA_POR_DEFEITO">Troca por defeito</option>
                    <option value="TROCA_POR_AVARIA">Troca por avaria</option>
                    <option value="TROCA_POR_EXTRAVIO">Troca por extravio</option>
                    <option value="TROCA_POR_DESGASTE">Troca por desgaste</option>
                </select>
            </div>
            <div class="col-md-3">
                <label>Quantidade</label>
                <select v-model="entregaItemHistorico.quantidade" class="form-control" v-if="!isNaN(trocados)">
                    <option :value="i" v-for="i in (entregaItemHistorico.entregaEpiItens.quantidade - trocados)">{{i}}</option>
                </select>
            </div>
        </div>
    </b-modal>

    <b-modal :no-close-on-backdrop="true" size="md" centered title="Histórico do item" cancel-only cancel-title="Fechar" :no-close-on-esc="true" ref="modalHistorico" id="modalHistorico">
        <table class="table">
             <thead>
            <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Quantidade</th>
                <th>Realizado Por</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="historico in historicos">
                <td>{{historico.idEntregaEpiItensHistorico}}</td>
                <td>{{historico.data | moment('DD/MM/YYYY')}}</td>
                <td>{{formatarHistorico(historico)}}</td>
                <td class="text-center">{{historico.quantidade}}</td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </b-modal>

</b-card-text>
</template>

<script>
import TamanhosEpiComponente from '../epi/TamanhosEpiComponente.vue';
export default {
  components: { TamanhosEpiComponente },
    props: ['empresa', 'posto', 'usuario'],
    data() {
        return {
            carregando: false,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            entregas: [],
            funcionarios: [],
            liberados: [],
            liberado: {},
            inativos: [],
            entrega: {
                idEntregaEpi: 0,
                empresaFuncionario: {
                    pessoa: {},
                    ambienteTrabalho: {},
                    empresaContrato: {
                        empresaContratante: {}
                    },
                    funcao: {}
                }
            },
            dataMaxima: '',
            estoques: [],
            selecionado: {},
            historicos: '',
            entregaItens: [],
            entregaItemHistorico: {
                entregaEpiItens: {
                    estoque: {
                        gradeEmpresaEpi: {
                            cadastroEpiCa: {
                                cadastroEpi: {
                                    epi: {

                                    }
                                }
                            },
                            cor: {

                            },
                            tamanho: {

                            }
                        }
                    },
                    quantidade: 0
                },
                quantidade: 0,
            },
            trocados: 0
        }
    },
    computed: {

        hoje() {

            var currentDate = new Date();

            var y = currentDate.getFullYear();
            var m = currentDate.getMonth() + 1;
            if (m < 10)
                m = '0' + m;
            
            var d = currentDate.getDate();

            if (d < 10)
                d = '0' + d; 

            return y + '-' + m + '-' + d;

        },

        parametro() {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            return params.get("acao");
        }
    },
    methods: {
        abrirHistorico: function(hist) {
            this.historicos = hist;
            this.$refs.modalHistorico.show();
        },
        formatarHistorico: function (historico) {
            if (historico.ocorrencia == 'BLOQUEIO_POR_COR_ERRADA') {
                return 'Bloqueio por cor errada';
            } else if (historico.ocorrencia == 'BLOQUEIO_POR_TAMANHO_ERRADO') {
                return 'Bloqueia por tamanho errado';
            } else if (historico.ocorrencia == 'BLOQUEIO_POR_ENTREGA_ERRADA') {
                return 'Bloqueia por entrega errada';
            } else if (historico.ocorrencia == 'TROCA_POR_DEFEITO') {
                return 'Troca de ' + historico.quantidade + ' item(s) por defeito';
            } else if (historico.ocorrencia == 'TROCA_POR_AVARIA') {
                return 'Troca de ' + historico.quantidade + ' item(s) por avaria';
            } else if (historico.ocorrencia == 'TROCA_POR_EXTRAVIO') {
                return 'Troca de ' + historico.quantidade + ' item(s) por extravio';
            }
        },
        testaDataBloqueio: function () {
            if (new Date(this.entrega.data) > new Date(this.entregaItemHistorico.data) || this.dataMaxima < new Date(this.entregaItemHistorico.data)) {
                this.$alert('A data deve ser maior que a data de entrega e só pode ser realizada 30 dias depois dela.', 'Atenção!', 'warning');
                this.entregaItemHistorico.data = this.entrega.data;
            }
        },

        testaDataTroca: function () {

            if (new Date(this.entrega.data) > new Date(this.entregaItemHistorico.data) || new Date(this.entregaItemHistorico.data) > new Date(this.entregaItemHistorico.entregaEpiItens.validade)) {
                this.$alert('A data deve ser maior que a data de entrega e menor que o vencimento do EPI.', 'Atenção!', 'warning');
                this.entregaItemHistorico.data = this.entrega.data;
            }
        },

        salvarHistorico: function (evt) {
            var that = this;
            evt.preventDefault();
            if(that.entregaItemHistorico.ocorrencia != '' && that.entregaItemHistorico.quantidade > 0) {
                axios.post('/posto-entrega/entrega/historico', {
                dados: that.entregaItemHistorico
                }).then(function (response) {
                    that.visualizar(that.entrega);
                    that.$refs.modalBloquear.hide();
                    that.$refs.modalTrocar.hide();
                });
            }
            
        },
        abrirBloquear: function (entregaItem) {
            this.entregaItemHistorico.entregaEpiItens = Object.assign({}, entregaItem);

            this.entregaItemHistorico.quantidade = this.entregaItemHistorico.entregaEpiItens.quantidade;

            var result = new Date(this.entrega.data);
            console.log('result', result);
            result.setDate(result.getDate() + 30);

            this.dataMaxima = result;

            this.$refs.modalBloquear.show();
        },

        abrirTrocar: function (entregaItem) {
            this.entregaItemHistorico.entregaEpiItens = Object.assign({}, entregaItem);

            if(entregaItem.historico) {
                console.log('historico', entregaItem.historico);
                // this.historicos = entregaItem.historico;
                this.trocados = entregaItem.historico.reduce((a, b) => a + b['quantidade'], 0)
            } 

            this.$refs.modalTrocar.show();
        },

        vencido: function (data) {
            var hoje = new Date();

            var vencimento = new Date(data);

            return hoje > vencimento ? true : false
        },

        diff: function (data) {
            var vencimento = Vue.moment(data, "YYYY-MM-DD");
            var hoje = Vue.moment().startOf('day');

            var diff = Vue.moment.duration(hoje.diff(vencimento)).asDays();

            return (diff <= 30) ? true : false
        },

        certeza: function () {
            this.$refs.modalCerteza.hide();
            var that = this;

            axios.get('/posto-entrega/entrega/remover/' + this.entrega.idEntregaEpi).then((response) => {
                axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
                    that.entregas = response.data;

                    that.$refs.modalEntrega.hide();

                })
            });
        },

        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },

        removerEntrega: function (entrega) {
            this.entrega = entrega;
            console.log(this.entrega);
            this.$refs.modalCerteza.show();
        },

        eHoje: function (entrega) {

            if (entrega.data == this.hoje) {
                return true;
            } else {
                return false;
            }

            return true;
        },

        digital: function () {
            var that = this;

            axios.post('/posto-entrega/entrega/assinar', {
                entrega: that.entrega
            }).then(function (response) {
                that.entrega.dataAssinatura = response.data;

                console.log(response.data);
                document.getElementById("data").dispatchEvent(new Event('input'));

            });

            // if (!this.entrega.empresaFuncionario.pessoa.biometriaTemplate) {
            //     that.$alert('Ops. ', 'Ops!', 'alert');

            //     var options = {
            //         title: "Atenção!",
            //         text: "Essa pessoa não tem a biometria cadastrada. Gostaria de cadastrar?",
            //         type: "warning",
            //         showCancelButton: true,
            //         confirmButtonText: "Cadastrar",
            //         cancelButtonText: "Sair",
            //         animation: false,
            //     }

            //     this.$fire(options).then(r => {
            //         if (r.value == true) {
            //             axios.get('http://localhost:9000/api/public/v1/captura/Enroll/1').then(function (response) {

            //                 // that.pessoa.biometriaTemplate = response.data;
            //                 // that.salvar();

            //             }).catch(function (error) {
            //                 that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
            //             });
            //         }
            //     });
            // } else {
            //     axios.get('http://localhost:9000/api/public/v1/captura/Comparar?Digital=' + this.entrega.empresaFuncionario.pessoa.biometriaTemplate).then(function (response) {

            //         if (response.data == "OK") {

            //             axios.post('/posto-entrega/entrega/assinar', {
            //                 entrega: that.entrega
            //             }).then(function (response) {
            //                 that.entrega.dataAssinatura = response.data;

            //                 console.log(response.data);
            //                 document.getElementById("data").dispatchEvent(new Event('input'));

            //             });

            //         }

            //     }).catch(function (error) {
            //         that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
            //     });
            // }

        },
        exibeTabela: function () {

            $('#tabelaListagemEmpregados').DataTable({
                "order": [
                    [1, "desc"]
                ],
                "lengthMenu": [
                    [50, -1],
                    [50, "Todos"]
                ],
                "columnDefs": [{
                    "targets": 'no-sort',
                    "orderable": false,
                }],
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                }
            });

        },
        visualizar: function (entrega) {
            console.log(entrega);

            var that = this;

            this.carregando = true;
            this.mensagem = 'Carregando dados...';

            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/entrega-epi-itens/listaPorIdEntregaEpi/' + entrega.idEntregaEpi).then(function (response) {

                that.entrega = entrega;

                that.entregaItens = response.data;
                let rowLen = that.entregaItens.length;
                that.entregaItens.map((entregaItem, i) => {


                        axios.post('/posto-entrega/entrega/validade', {
                            idAmbienteTrabalho: entregaItem.entregaEpi.empresaFuncionario.ambienteTrabalho.idAmbienteTrabalho,
                            idEmpresa: entregaItem.entregaEpi.empresaFuncionario.empresaContrato.empresa.idEmpresa,
                            idCadastroEpi: entregaItem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi
                        }).then(function (response) {
                            console.log('valide', response.data.validade);

                            var result = new Date(that.entrega.data);
                            // console.log('entrega', result);
                            result.setDate(result.getDate() + response.data.validade);
                            console.log('data de validade', result);

                            entregaItem.validade = result;
                            that.$forceUpdate();
                            // Vue.set(entregaItem, 'validade', result);
                        });



                    axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/entrega-epi-itens-historico/listaPorIdEntregaEpiItens/' + entregaItem.idEntregaEpiItens).then(function (response) {
                        if (response.data.length > 0) {
                            entregaItem.historico = response.data;

                            
                        } else {
                            entregaItem.historico = null;
                        }   
                        

                        if (rowLen == i + 1) {
                            console.log('ENTREGA ITENS', that.entregaItens);
                            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + entrega.empresaFuncionario.idEmpresaFuncionario).then(function (response) {
                                that.liberados = response.data;
                                that.liberados.map((item) => {
                                    item.carrinho = that.qtdCarrinho(item);
                                });

                                that.$refs.modalEntrega.show();
                                // that.$forceUpdate();
                                that.carregando = false;

                            });
                        }

                    });

                });

            });
        },
        removerItem: function (index) {

            console.log(this.entregaItens[index]);

            var that = this;
            if (this.entregaItens[index].idEntregaEpiItens > 0) {
                if (this.entregaItens.length == 1) {

                    that.removerEntrega(that.entrega);

                } else {

                    axios.get('/posto-entrega/entrega/remover-item/' + this.entregaItens[index].idEntregaEpiItens).then((response) => {
                        if (response.data.status == "true") {
                            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + that.entrega.empresaFuncionario.idEmpresaFuncionario).then(function (response) {
                                that.liberados = response.data;

                                that.entregaItens.splice(index, 1);

                                that.liberados.map((item) => {
                                    item.carrinho = that.qtdCarrinho(item);

                                    console.log(that.qtdCarrinho(item));
                                });

                                that.carregando = false;

                            });
                        }
                    });

                }

            } else {
                this.entregaItens.splice(index, 1);
            }

        },
        qtdCarrinho: function (item) {
            // var key = this.entregaItens.findIndex(x => x.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == item.cadastroEpi.idCadastroEpi);

            var filtrados = this.entregaItens.filter(function (entregaItem) {
                // console.log(entregaItem);
                return entregaItem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == item.cadastroEpi.idCadastroEpi;
            });

            if (filtrados.length > 0) {
                return filtrados.reduce((a, b) => a + b['quantidade'], 0);
            } else {
                return 0;
            }
        },
        limite: function (item) {
            var key = this.liberados.findIndex(x => x.cadastroEpi.idCadastroEpi == item.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi);

            var calc = this.liberados[key].quantidade - this.liberados[key].quantidadeEmUso - this.qtdCarrinho(this.liberados[key]);

            var limite = 0;
            if (item.estoque.quantidadeEstoque > calc) {
                limite = calc + item.quantidade;
            } else {
                if (item.estoque.quantidadeEstoque < 0) {
                    limite = 0;
                } else {
                    limite = item.estoque.quantidadeEstoque;
                }
            }

            if (item.idEntregaEpiItens > 0 && !item.entregaEpi.dataAssinatura) {
                return limite + this.liberados[key].carrinho;
            } else {
                return limite;
            }

        },
        selecionar: function (funcionario) {
            this.entrega = {
                idEntregaEpi: 0
            };
            this.entrega.empresaFuncionario = funcionario;
            this.entrega.entregador = this.usuario;
            var that = this;

            this.entregaItens = [];

            this.carregando = true;
            this.mensagem = 'Carregando dados...';

            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + funcionario.idEmpresaFuncionario).then(function (response) {
                that.liberados = response.data;
                that.$refs.myModal.hide();
                $('#tabelaListagemEmpregados').DataTable().destroy();
                var currentDate = new Date();

                console.log(currentDate);

                var y = currentDate.getFullYear();
                var m = currentDate.getMonth() + 1;
                var d = currentDate.getDate();

                if(m < 10) 
                    m = "0" + m;

                if (d < 10)
                    d = '0' + d; 
                
                that.entrega.data = y + '-' + m + '-' + d;

                console.log('dataaa', that.entrega.data);

                that.$refs.modalEntrega.show();

                that.carregando = false;

            });

        },
        selecionarItem(item) {
            this.selecionado = item;

            console.log(item);
            if (item.quantidadeEstoque > 0) {
                this.adicionarItem();
            } else {
                alert('Estoque não disponivel');
            }
        },
        adicionarItem() {
            var that = this;

            var key = this.entregaItens.findIndex(x => x.estoque.idEstoque == that.selecionado.idEstoque);

            if (key >= 0) {
                this.entregaItens[key].quantidade = this.entregaItens[key].quantidade + 1;
            } else {
                this.entregaItens.push({
                    estoque: that.selecionado,
                    observacao: '',
                    quantidade: 1,
                    valorUnitario: that.selecionado.valorUnitario,
                    usuario: 0,
                    entregaEpi: 0,
                    idEntregaEpiItens: 0
                });
            }

            console.log(this.selecionado);

            this.$refs.itensModal.hide();

            // var key = this.liberados.findIndex(x => x.cadastroEpi.idCadastroEpi == that.selecionado.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi);

            // this.liberados[key].quantidadeEmUso = this.liberados[key].quantidadeEmUso + 1;

        },
        abrir: function () {
            this.mensagem = 'Carregando empregados...';
            var that = this;

            this.$refs.myModal.show();
        },
        estaAdicionado: function (item) {
            var key = this.entregaItens.findIndex(x => x.estoque.idEstoque == item.idEstoque)

            if (key >= 0) {
                return true;
            } else {
                return false;
            }
        },
        abrirEstoque: function (liberado) {
            var that = this;
            // this.liberado = liberado;
            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
                that.estoques = response.data.filter(function (item) {
                    // console.log(item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi);
                    // console.log(liberado);
                    return item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == liberado.cadastroEpi.idCadastroEpi;
                });

                console.log(that.estoques);
                that.$refs.itensModal.show();
            });
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
        salvar: function (evt) {
            evt.preventDefault();
            var that = this;
            that.mensagem = 'Salvando...';
            that.carregando = true;

            axios.post('/posto-entrega/entrega', {
                entrega: that.entrega,
                entregaitens: that.entregaItens
            }).then(function (response) {
                axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
                    that.entregas = response.data;
                    that.mensagem = 'Entrega salva!';
                    that.$refs.modalEntrega.hide();
                    that.carregando = false;
                });
            });

        }
    },
    mounted() {
        var that = this;
        this.entrega.entregador = this.usuario;

        axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
            that.entregas = response.data;
            console.log(that.entregas);
        })

        axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
            that.funcionarios = response.data;
        });

    }
}
</script>

<style lang="scss" scoped>
.titulo {
    text-align: center;
    background-color: #00a65a;
    padding: 6px;
    color: white;
    font-size: 17px;
    margin-top: 10px;
}

.selecionado {
    background-color: #71bb66 !important;
}

.bg-warning {
    background-color: #fde4bc !important;
}

tr.bg-primary {
    background-color: #c0b5fd !important;
}

.btn-digital {
    margin-top: 20px;
}
</style>
