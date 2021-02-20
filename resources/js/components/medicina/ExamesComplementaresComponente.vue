<template>
<div class="container">
    <section class="content-header">
        <h1>
            Exames Complementares
            <small>Listagem</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i> Início</a></li>
            <li><a href="#">Medicina</a></li>
            <li><a href="#">Exames Complementares</a></li>
        </ol>
    </section>

    <b-card class="sig" no-body>
        <b-tabs pills card>
            <b-tab title="Ativos" active>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="cursor: pointer" @click="abrir(funcionario)" v-for="funcionario in funcionarios">
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
                </b-card-text>
            </b-tab>

            <b-tab title="Temporários"> 
                 <b-card-text>
                    <div class="col-md-12">
                        <div class="box-body box-empregados table-responsive">
                            <table class="table table-hover table-striped table-empregados">
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
                                    <tr style="cursor: pointer" @click="abrir(temporario)" v-for="temporario in temporarios">
                                        <td>{{ temporario.pessoa.idPessoa }}</td>
                                        <td>{{ temporario.matricula }}</td>
                                        <td>{{ temporario.pessoa.nomePessoa }}</td>
                                        <td>{{ temporario.pessoa.cpf }}</td>
                                        <td>{{ temporario.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ temporario.dataFuncao | moment("DD/MM/Y") }}</td>
                                        <td>{{ temporario.funcao.cargo }}</td>
                                        <td>{{ formataEstabelecimento(temporario.ambienteTrabalho.estabelecimento) }}
                                            -
                                            {{ temporario.ambienteTrabalho.nomeAmbienteTrabalho }}</td>
                                        <td>{{ temporario.pessoa.dataNascimento | moment("DD/MM/Y")}}</td>
                                        <td>{{ formataSexo(temporario.pessoa.sexo) }}</td>
                                        <td>{{ temporario.ano }}A, {{ temporario.mes }}M,
                                            {{ temporario.dia }}D</td>
                                        <td>{{ temporario.empresaContrato.empresaContratante.nomeFantasia }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>

    <b-modal size="xl" centered :hide-footer="true" title="Exames Complementar" ref="modalComplementar" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.matricula">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.cpf">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.nomePessoa">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt. Nasc.</label>
                    <input type="date" class="form-control form-remove" disabled v-model="funcionario.pessoa.dataNascimento">
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">Idade</label>
                    <input type="text" class="form-control" v-model="idade" disabled>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Data Adm</label>
                    <input type="date" disabled v-model="funcionario.dataInicial" class="form-control form-remove">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="titulo">Histórico de Exames</h3>
            </div>
            <div class="col-md-12 mb-3">
                <button class="btn btn-success btn-sm" @click="abrirSolicitacoes"><i class="fa fa-plus"></i> Adicionar Exame</button>
            </div>

            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID SIGSST</th>
                            <th>eSocial</th>
                            <th>Exame</th>
                            <th>Data</th>
                            <th>Ordem do Exame</th>
                            <th>Indicação dos Resultados</th>
                            <th>Grau</th>
                            <th>PDF</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="complement in complementares">
                            <td>{{complement.exame.idExame}}</td>
                            <td>{{complement.exame.tabela27}}</td>
                            <td>{{complement.exame.nomeExame}}</td>
                            <td>{{complement.dataExame | moment('DD/MM/YYYY')}}</td>
                            <td>{{complement.ordemExame}}</td>
                            <td>{{complement.indicacaoResultado}}</td>
                            <td>{{complement.situacao}}</td>
                            <td>
                                <a @click="pdf(complement)"><img src="/img/pdf.png" width="21px"></a>
                            </td>
                            <td>
                                <button class="btn btn-outline-danger btn-sm" @click="remover(complement)"><i class="fa fa-trash"></i></button>
                                <button class="btn btn-outline-primary btn-sm" @click="editar(complement)"><i class="fas fa-pencil-alt"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>

    <b-modal size="lg" centered :hide-footer="true" title="Novo Exame Solicitacao" ref="modalSolicitacoes" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.matricula">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.cpf">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.nomePessoa">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt. Nasc.</label>
                    <input type="date" class="form-control form-remove" disabled v-model="funcionario.pessoa.dataNascimento">
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">Idade</label>
                    <input type="text" class="form-control" v-model="idade" disabled>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Data Adm</label>
                    <input type="date" disabled v-model="funcionario.dataInicial" class="form-control form-remove">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="titulo">Lista de Exames Solicitados</h3>
            </div>
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID SIGSST</th>
                            <th>eSocial</th>
                            <th>N. Solicitacao</th>
                            <th>Data</th>
                            <th>Exame</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="solicitacao in solicitacoes">
                            <td>{{solicitacao.idExame}}</td>
                            <td></td>
                            <td>
                                <!-- {{solicitacao.asoSolicitacao.idAsoSolicitacao}} -->
                            </td>
                            <td>{{solicitacao.data | moment('DD/MM/YYYY')}}</td>
                            <td>{{solicitacao.nomeExame}}</td>
                            <td><button @click="incluir(solicitacao)" class="btn btn-success btn-sm">Incluir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>


 <b-modal size="lg" centered :hide-footer="true" title="Novo Exame" ref="modalSemSolicitacao">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.matricula">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.cpf">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.nomePessoa">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt. Nasc.</label>
                    <input type="date" class="form-control form-remove" disabled v-model="funcionario.pessoa.dataNascimento">
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">Idade</label>
                    <input type="text" class="form-control" v-model="idade" disabled>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Data Adm</label>
                    <input type="date" disabled v-model="funcionario.dataInicial" class="form-control form-remove">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="titulo">Lista de Exames Solicitados</h3>
            </div>
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID SIGSST</th>
                            <th>Exame</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="exame in exames">
                            <td>{{exame.idExame}}</td>
                            <td>{{exame.nomeExame}}</td>
                            <td><button @click="incluir(exame)" class="btn btn-success btn-sm">Incluir</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>


    <b-modal size="xl" centered @ok="salvarNovo" @cancel="cancelarNovo" :cancel-title="'Fechar'" title="Incluir novo exame" ref="modalIncluir" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.matricula">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CPF</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.cpf">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input disabled type="text" class="form-control" v-model="funcionario.pessoa.nomePessoa">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt. Nasc.</label>
                    <input type="date" class="form-control form-remove" disabled v-model="funcionario.pessoa.dataNascimento">
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">Idade</label>
                    <input type="text" class="form-control" v-model="idade" disabled>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Data Adm</label>
                    <input type="date" disabled v-model="funcionario.dataInicial" class="form-control form-remove">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Dt. Exame</label>
                    <input type="date" :min="solicitacao.data" v-model="complementar.data" @blur="verificaData" class="form-control">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Exame</label>
                    <input type="text" v-model="complementar.exame.nomeExame" disabled class="form-control">
                </div>
            </div>

            <div class="col-md-2" v-if="funcionario.pessoa.sexo == 'MASCULINO'">
                <div class="form-group">
                    <label for="">H. Min</label>
                    <input type="text" class="form-control" v-model="complementar.exame.referenciaMinMasculino" disabled>
                </div>
            </div>
            <div class="col-md-2" v-if="funcionario.pessoa.sexo == 'MASCULINO'">
                <div class="form-group">
                    <label for="">H. Max</label>
                    <input type="text" class="form-control" v-model="complementar.exame.referenciaMaxMasculino" disabled>
                </div>
            </div>
            <div class="col-md-2" v-if="funcionario.pessoa.sexo == 'FEMININO'">
                <div class="form-group">
                    <label for="">M. Min</label>
                    <input type="text" class="form-control" v-model="complementar.exame.referenciaMinFeminino" disabled>
                </div>
            </div>
            <div class="col-md-2" v-if="funcionario.pessoa.sexo == 'FEMININO'">
                <div class="form-group">
                    <label for="">M. Max</label>
                    <input type="text" class="form-control" v-model="complementar.exame.referenciaMaxFeminino" disabled>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Resultado</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">{{complementar.exame.unidadeMedida}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Ordem do Exame</label>
                    <select v-model="complementar.ordemExame" disabled class="form-control">
                        <option value="INICIAL">Inicial</option>
                        <option value="SEQUENCIAL">Sequencial</option>
                    </select>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">

                    <label for="">Indicação do Resultado</label>
                    <select v-model="complementar.indicacaoResultado" v-on:change="mudouIndicacao" class="form-control">
                        <option value="NORMAL">Normal</option>
                        <option value="ALTERADO" v-if="(historico.length > 0 && historico[historico.length - 1].indicacaoResultado != 'ALTERADO' && historico[historico.length - 1].indicacaoResultado != 'ESTÁVEL') || complementar.ordemExame == 'INICIAL'">Alterado</option>
                        <option value="ESTÁVEL" v-if="complementar.ordemExame != 'INICIAL' && historico.length > 0 && historico[historico.length - 1].indicacaoResultado != 'NORMAL'">Estável</option>
                        <option value="AGRAVAMENTO" v-if="complementar.ordemExame != 'INICIAL' && historico.length > 0 && historico[historico.length - 1].indicacaoResultado != 'NORMAL' && historico[historico.length - 1].indicacaoResultado != 'AGRAVAMENTO'">Agravamento</option>
                    </select>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Grau</label>
                    <select v-model="complementar.grau" :disabled="complementar.indicacaoResultado == 'NORMAL'" class="form-control">
                        <option value="NORMAL" v-if="complementar.indicacaoResultado == 'NORMAL'">Normal</option>
                        <option value="ALTERADO_LEVE" v-if="complementar.indicacaoResultado != 'NORMAL'">Leve</option>
                        <option value="ALTERADO_MODERADO" v-if="complementar.indicacaoResultado != 'NORMAL'">Moderado</option>
                        <option value="ALTERADO_SEVERO" v-if="complementar.indicacaoResultado != 'NORMAL'">Severo</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4 mt-4">
                    <span style="display: none">{{temPdf}}</span>
                    <input v-on:change="handleFileUpload" type="file" id="file" style="display: none" ref="file">
                    <div class="row">
                        <div  v-if="!complementar.caminhoPdf" class="col-md-12">
                            <button class="btn pull-right btn-success btn-block" @click="abrirUpload"><i class="fa fa-upload"></i> Inserir PDF</button>
                        </div>
                    </div>
                    <div class="row">
                        <div v-if="complementar.caminhoPdf" class="col-md-6">
                            <button class="btn pull-right btn-success btn-block" @click="abrirUpload"><i class="fa fa-upload"></i> Atualizar PDF</button>
                        </div>
                        <div v-if="complementar.caminhoPdf" class="col-md-6">
                            <button @click="pdf(complementar)" class="btn pull-right btn-success btn-block"><i class="fa fa-upload"></i> Visualizar PDF</button>
                        </div>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição do Resultado</label>
                    <textarea v-model="complementar.observacao" class="form-control"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="titulo">Histórico de Exames</h3>
            </div>

            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID SIGSST</th>
                            <th>eSocial</th>
                            <th>Exame</th>
                            <th>Data</th>
                            <th>Ordem do Exame</th>
                            <th>Indicação dos Resultados</th>
                            <th>Grau</th>
                            <th>PDF</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="historic in historico">
                            <td>{{historic.exame.idExame}}</td>
                            <td>{{historic.exame.tabela27}}</td>
                            <td>{{historic.exame.nomeExame}}</td>
                            <td>{{historic.dataExame | moment('DD/MM/YYYY')}}</td>
                            <td>{{historic.ordemExame}}</td>
                            <td>{{historic.indicacaoResultado}}</td>
                            <td>{{historic.situacao}}</td>
                            <td><a @click="pdf(historic)"><img src="/img/pdf.png" width="21px"></a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            idTabela: '#tabelaListagem',
            carregando: true,
            mensagem: 'Carregando itens cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            examesComplementares: [],
            termo: '',
            funcionarios: [],
            funcionario: {
                pessoa: {
                    cidadeNatal: {

                    }
                }
            },
            exames: [],
            solicitacoes: [],
            solicitacao: {
                pcmsoAmbienteExame: {
                    exame: {

                    }
                },
                asoSolicitacao: {
                    
                }
            },
            selecionado: 'codigo',
            montou: false,
            coluna: '',
            pessoas: [],
            historico: [],
            complementares: [],
            complementar: {
                ordemExame: 'INICIAL',
                idExameComplementarExame: 0,
                exame: {

                }
            },
            exameComplementarExame: {
                "idExameComplementarExame": 0,
                "exameComplementar": 0,
                "exame": 0,
                "situacao": "",
                "resultado": "",
            },
            file: '',
            temporarios: [],
            temPdf: false
        }
    },
    watch: {
        historico: function () {
            if (this.historico.length == 0) {
                this.complementar.ordemExame = "INICIAL";
            }
        }
    },
    computed: {
        idade() {
            var nascimento = new Date(this.funcionario.pessoa.dataNascimento);
            var hoje = new Date;
            var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
            if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
                new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
                diferencaAnos--;

            return diferencaAnos;
        }
    },
    methods: {
         abrirUpload() {
            $("#file").click();
        },
        pdf(complementar) {
            if(complementar.caminhoPdf) {
                window.open('http://200.98.201.236:8081/' + complementar.caminhoPdf);
            } else {
                alert('Não há PDF anexado.')
            }
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.submitFile();
        },

        submitFile() {

            console.log('submentendo....');
            /*
                    Initialize the form data
                */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

            /*
              Make the request to the POST /single-file URL
            */
           var that = this;
            axios.post('http://200.98.201.236:8081/upload-file',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (response) {
                    that.complementar.caminhoPdf = response.data.data.new_file_name;
                    console.log(that.complementar.caminhoPdf);
                    that.temPdf = true;
                    // that.salvar();
                })
                .catch(function () {
                });
        },
        verificaData: function () {
            var solicitacao = new Date(this.solicitacao.data);
            var exame = new Date(this.complementar.data);
            if (solicitacao > exame) {
                this.complementar.data = null;
                this.$alert('Data de exame deve ser maior que data de solicitacao', 'Ops!', 'error');
            }

            if(this.historico.length > 0) {
                var historico = new Date(this.historico[0].dataExame)
                console.log(this.historico[0]);
                // alert(exames);

                if(historico > exame) {
                    this.complementar.data = null;
                    this.$alert('Data de exame deve ser maior que data do ultimo exame', 'Ops!', 'error');
                }
            }
        },
        remover: function (complementar) {
            var that = this;

            axios.get('exames-complementares/remover/' + complementar.idExameComplementarExame).then(function (response) {
                that.cancelarNovo();
            })
        },

        editar(complementar) {
            this.complementar = complementar;
            console.log(this.complementar);
            this.complementar.data = complementar.dataExame;
            this.complementar.grau = complementar.situacao;
            this.$refs.modalIncluir.show();
        },
        cancelarNovo: function () {
            // alert('fechoU!');
            var that = this;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + this.funcionario.idEmpresaFuncionario).then(function (response) {
                that.complementares = response.data;
                // console.log(that.complementares);
                // that.$refs.modalComplementar.show();
            });
        },
        mudouIndicacao: function () {
            if (this.complementar.indicacaoResultado == 'NORMAL') {
                this.complementar.grau = 'NORMAL'
            }
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
        formataSexo: function (sexo) {
            if (sexo == 'MASCULINO') {
                return 'M';
            } else if (sexo == 'FEMININO') {
                return 'F';
            }
        },

        abrir(funcionario) {
            var that = this;

            this.funcionario = funcionario;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + funcionario.idEmpresaFuncionario).then(function (response) {
                that.complementares = response.data;
                // console.log(that.complementares);
                that.$refs.modalComplementar.show();
            });

        },

        abrirSolicitacoes() {
            var that = this;

            axios.get('/exames-complementares/ultimo/' + this.funcionario.idEmpresaFuncionario ).then(function (response) {
    
                if (response.data.length > 0) {
                    that.solicitacoes = response.data;
                    that.$refs.modalSolicitacoes.show();
                } else {
                    // that.$alert('Não há solicitação para esse funcionário.', 'Ops!', 'error');

                var options = {
                    title: "Atenção!",
                    text: 'Não há solicitação para esse funcionário. O que deseja fazer?',
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Inserir sem solicitação",
                    cancelButtonText: "Sair",
                    animation: true,
                }

                that.$fire(options).then(r => {
                    if (r.value == true) {
                        that.semSolicitacao();
                        // that.editar(verif[0]);
                    }
                });

                }
            });
        },


        semSolicitacao() {
            var that = this;
            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames/').then(function(response) {
                that.exames = response.data;
                that.$refs.modalSemSolicitacao.show();
            });
        },

        incluir(solicitacao) {
            var that = this;

            that.$refs.modalSolicitacoes.hide();
            that.$refs.modalSemSolicitacao.hide();
               

            that.solicitacao = solicitacao;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames/' + this.solicitacao.idExame).then(function(response) {
                that.exame = response.data;
                that.complementar.exame = response.data;
           
                axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/' + that.solicitacao.idExame).then(function (response) {
                    that.historico = response.data.filter(function (hist) {
                        return hist.exameComplementar.empresaFuncionario.idEmpresaFuncionario == that.funcionario.idEmpresaFuncionario
                    });

                    if (that.historico.length == 0) {
                        that.complementar.ordemExame = 'INICIAL';
                    } else {
                        that.complementar.ordemExame = 'SEQUENCIAL';
                    }

                    that.$refs.modalIncluir.show();
                });
             });

        },

        salvarNovo(evt) {
            var that = this;

            evt.preventDefault();

            axios.post('/exames-complementares', {
                solicitacao: that.solicitacao,
                complementar: that.complementar,
                funcionario: that.funcionario

            }).then(function (response) {

                axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/' + that.complementar.exame.idExame).then(function (response) {

                    that.cancelarNovo();

                    that.complementar = {
                        ordemExame: 'INICIAL',
                        exame: {

                        }
                    }

                    that.$alert('Dados inseridos!', 'Sucesso!', 'success');

                    axios.get('http://200.98.201.236/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + that.funcionario.idEmpresaFuncionario).then(function (response) {
                        that.complementares = response.data;
                        that.$refs.modalIncluir.hide();
                        // console.log(that.complementares);
                        // that.$refs.modalComplementar.show();
                        that.abrirSolicitacoes();
                    });
                    
                });

            });
        },

        fechar() {

        },

    },

    mounted() {

        this.mensagem = 'Carregando empregados...';

        var that = this;
        axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
            that.funcionarios = response.data;

        });

        axios.get('http://200.98.201.236/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
            that.temporarios = response.data;
        });

    }
}
</script>

<style scoped>
.titulo {
    text-align: center;
    background-color: #00a65a;
    padding: 6px;
    color: white;
    font-size: 17px;
    margin-top: 5px;
}

.form-remove[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
