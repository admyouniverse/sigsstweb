<template>
<div class="container">
    <section class="content-header">
        <h1>
            Prontuários Médicos
            <small>Listagem</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i> Início</a></li>
            <li><a href="#">Medicina</a></li>
            <li><a href="#">Prontuários Médicos</a></li>
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
            <b-tab title="Inativos">
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
                                    <tr style="cursor: pointer" @click="abrir(inativo)" v-for="inativo in inativos">
                                        <td>{{ inativo.pessoa.idPessoa }}</td>
                                        <td>{{ inativo.matricula }}</td>
                                        <td>{{ inativo.pessoa.nomePessoa }}</td>
                                        <td>{{ inativo.pessoa.cpf }}</td>
                                        <td>{{ inativo.dataInicial | moment("DD/MM/Y") }}</td>
                                        <td>{{ inativo.dataFuncao | moment("DD/MM/Y") }}</td>
                                        <td>{{ inativo.funcao.cargo }}</td>
                                        <td>{{ formataEstabelecimento(inativo.ambienteTrabalho.estabelecimento) }}
                                            -
                                            {{ inativo.ambienteTrabalho.nomeAmbienteTrabalho }}</td>

                                        <td>{{ inativo.pessoa.dataNascimento | moment("DD/MM/Y")}}</td>
                                        <td>{{ formataSexo(inativo.pessoa.sexo) }}</td>
                                        <td>{{ inativo.ano }}A, {{ inativo.mes }}M,
                                            {{ inativo.dia }}D</td>
                                        <td>{{ inativo.empresaContrato.empresaContratante.nomeFantasia }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" @ok="salvar" title="Prontuário Médico" ok-title="Salvar" cancel-title="Cancelar" @cancel="fechar()" ref="modalProntuario" id="modal1">
        <div>
            <b-card class="sig" no-body>
                <b-tabs card>
                    <b-tab title="Pessoa" active>
                        <b-card-text>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="">Matricula</label>
                                                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.matricula">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="">CPF</label>
                                                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.pessoa.cpf">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Nome</label>
                                                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.pessoa.nomePessoa">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Dt. Nasc.</label>
                                                <input type="date" class="form-control" disabled v-model="prontuario.empresaFuncionario.pessoa.dataNascimento">
                                            </div>
                                        </div>
                                        <div class="col-md-1">
                                            <div class="form-group">
                                                <label for="">Idade</label>
                                                <input type="text" class="form-control" v-model="idade" disabled>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="">Sexo</label>
                                                <input type="text" class="form-control" v-model="prontuario.empresaFuncionario.pessoa.sexo" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="">T.Sang.</label>
                                                <select v-model="prontuario.empresaFuncionario.pessoa.tipoSangue" class="form-control">
                                                    <option value="A+">A+</option>
                                                    <option value="A-">A-</option>
                                                    <option value="B+">B+</option>
                                                    <option value="B-">B-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                    <option value="O+">O+</option>
                                                    <option value="O-">O-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Naturalidade</label>
                                                <input type="text" disabled class="form-control" v-model="prontuario.empresaFuncionario.pessoa.cidadeNatal.nomeCidade + ' - ' + prontuario.empresaFuncionario.pessoa.cidadeNatal.uf">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="">Data Inicial</label>
                                                <input type="date" disabled v-model="prontuario.dataIni" class="form-control form-remove">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Data Final</label>
                                                <input type="date" disabled class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <img class="img-fluid" v-if="prontuario.empresaFuncionario.pessoa.urlImagem" :src="prontuario.empresaFuncionario.pessoa.urlImagem" alt="">
                                    <img class="img-fluid" v-if="!prontuario.empresaFuncionario.pessoa.urlImagem" src="/img/nofoto.png" alt="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="titulo">Anotações Médicas</h3>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-success btn-sm mb-2" @click="incluirAnotacao">Incluir</button>
                                    <div class="form-group">
                                        <textarea class="form-control" id="anotacao" @input="prontuario.anotacoes=anot" v-model="prontuario.anotacoes"></textarea>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Exames Extras">
                        <b-card-text>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Afast. Doença">
                        <b-card-text>
                            <prontuario-afastamento :prontuario="prontuario" v-if="prontuario.idProntuario > 0" :empresa="empresa"></prontuario-afastamento>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Grupo de Controle">
                        <b-card-text>
                            <prontuario-grupo-controle :prontuario="prontuario" v-if="prontuario.idProntuario > 0" :empresa="empresa"></prontuario-grupo-controle>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="PCD">
                        <b-card-text>
                            <prontuario-pcd :prontuario="prontuario" v-if="prontuario.idProntuario" :empresa="empresa"></prontuario-pcd>
                        </b-card-text>
                    </b-tab>

                </b-tabs>
            </b-card>
        </div>

    </b-modal>

    <b-modal size="lg" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" @ok="salvarAnotacao" title="Nova anotação" ok-title="Salvar" cancel-title="Cancelar" ref="modalAnotacao" id="modal1">

        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Matricula</label>
                    <input type="text" disabled v-model="prontuario.empresaFuncionario.matricula" class="form-control">
                </div>
            </div>

            <div class="col-md-7">
                <div class="form-group">
                    <label for="">Pessoa</label>
                    <input type="text" disabled v-model="prontuario.empresaFuncionario.pessoa.nomePessoa" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Data</label>
                    <input class="form-control" disabled v-model="data" type="date">
                </div>
            </div>
            <div class="col-md-7">
                <div class="form-group">
                    <label for="">Médico </label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" readonly v-if="medico.pessoa.idPessoa" v-model="'Dr. ' + medico.pessoa.nomePessoa + ' CRM/' + medico.uf + ' ' + medico.numeroRegistro " placeholder="Clique no botão">
                        <input type="text" class="form-control" readonly v-if="!medico.pessoa.idPessoa" placeholder="Clique no botão">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="modalMedicos"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Anotações</label>
                    <textarea v-model="anotacao" class="form-control"></textarea>
                </div>
            </div>
        </div>

    </b-modal>

    <b-modal size="lg" centered :hide-footer="true" title="Médicos" ref="modalMedicos" id="modal1">
        <table class="table-striped table-hover table">
            <tbody v-if="medicosBase.length > 0">
                <tr>
                    <th>Conselho</th>
                    <th>Nome</th>
                </tr>
                <tr @click="selecionarMedico(medico)" style="cursor: pointer" v-for="medico in medicosBase">
                    <td>{{ medico.numeroRegistro }}</td>
                    <td>{{ medico.pessoa.nomePessoa }}</td>
                </tr>
            </tbody>
        </table>
    </b-modal>

</div>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            medico: {
                pessoa: {}
            },
            medicosBase: [],
            anotacao: "",
            anot: "",
            prontuarios: [],
            montou: false,
            data: '',
            funcionarios: [],
            inativos: [],
            prontuario: {
                empresaFuncionario: {
                    pessoa: {
                        cidadeNatal: {

                        }
                    }
                },
                anotacoes: ''
            }
        }
    },
    computed: {
        idade() {
            var nascimento = new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento);
            var hoje = new Date;
            var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
            if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
                new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
                diferencaAnos--;

            console.log(diferencaAnos)
            return diferencaAnos;
        }
    },
    methods: {
        modalMedicos() {
            var that = this;

            axios.post('/pcmso/medicos', {
                data: that.data
            }).then(function (response) {
                that.medicosBase = response.data;
                that.$refs.modalMedicos.show();
                // console.log(response.data);
            });
        },

        selecionarMedico(medico) {
            this.medico = medico;
            this.$refs.modalMedicos.hide();
        },
        incluirAnotacao() {

            this.data = this.prontuario.dataIni;
            this.medico =  {
                pessoa: {}
            }
            this.anotacao = '';

            this.$refs.modalAnotacao.show();
        },
        salvarAnotacao() {
            if (this.prontuario.anotacoes != undefined) {
                this.anot = this.prontuario.anotacoes + "\n" + this.data + " -> " + "Dr." + this.medico.pessoa.nomePessoa + ' CRM/' + this.medico.uf + ' ' + this.medico.numeroRegistro + " - " + this.anotacao;
            } else {
                this.anot = this.data + " -> " + "Dr." + this.medico.pessoa.nomePessoa + ' CRM/' + this.medico.uf + ' ' + this.medico.numeroRegistro + " - " + this.anotacao;
            }
            document.getElementById("anotacao").dispatchEvent(new Event('input'));
        },
        abrir(funcionario) {
            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/prontuarios/listaProntuarioPorIdEmpresaFuncionario/' + funcionario.idEmpresaFuncionario).then(function (response) {
                that.prontuario = response.data;
                console.log('prontuario!', that.prontuario);
                if(that.prontuario) {
                    that.$refs.modalProntuario.show();
                } else {
                    alert('Não há prontuário.')
                }
                
            });

            
        },
        
        fechar() {
            this.prontuario = {
                idProntuario: 0,
                empresaFuncionario: {
                    pessoa: {
                        cidadeNatal: {

                        }
                    }
                },
                anotacoes: ''
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

        salvar: function () {
            var that = this;

            axios.post('/prontuario-medico/update', {
                prontuario: that.prontuario,
                pessoa: that.prontuario.empresaFuncionario.pessoa
            }).then(function (response) {
                console.log(response.data);
            });
        }
    },
    mounted() {

        this.mensagem = 'Carregando empregados...';
        var that = this;
        axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
            that.funcionarios = response.data;

        });

         axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaDemitidosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
            that.inativos = response.data;

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

.form-remove[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
