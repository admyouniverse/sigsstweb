<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <div>
        <b-card class="sig" no-body>
            <b-tabs card>
                <b-tab title="Detalhes" :active="parametro != 'capa'" @click="aba='detalhes'">
                    <b-card-text>
                        <div class="row">

                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="ppra.idPpra" disabled class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Empresa</label>
                                    <input type="text" disabled class="form-control" v-model="empresa.razaoSocial">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Unidade</label>
                                    <input type="text" disabled class="form-control" v-model="empresa.nomeUnidade">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Data</label>
                                    <input type="date" class="form-control" @blur="mudaData" v-model="ppra.dataHora">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Estabelecimento</label>
                                    <select v-model="contrato" @change="getVersao" class="form-control" :disabled="empresa.tipoEmpresa == 'NENHUM' || empresa.tipoEmpresa == 'CONTRATANTE'">
                                        <option :value="contrat" v-for="contrat in contratos" v-if="contrat.empresaContratante.idEmpresa != empresa.idEmpresa">
                                            {{ contrat.idEmpresaContrato }} |
                                            {{ contrat.empresaContratante.nomeFantasia }}</option>
                                        <option :value="contrat" v-for="contrat in contratos" v-if="contrat.empresaContratante.idEmpresa == empresa.idEmpresa">
                                            {{ contrat.empresaContratante.nomeFantasia }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Tipo</label>
                                    <select @change="getVersao" v-model="ppra.tipoPpra" class="form-control">
                                        <option value="SELECIONE" disabled>--- Selecione ---</option>
                                        <option value="EMISSÃO">Emissão</option>
                                        <option value="REVISÃO_PARCIAL">Revisão Parcial</option>
                                        <option value="REVISÃO_GERAL">Revisão Geral</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Versão</label>
                                    <input type="text" v-model="ppra.versao" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">Matriz de Risco</label>
                                    <select v-model="ppra.matrizRisco" class="form-control">
                                        <option :value="matriz" v-for="matriz in matrizes">{{matriz.descricao}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Status</label>
                                    <select v-model="ppra.status" class="form-control">
                                        <option value="SELECIONE" disabled>--- Selecione ---</option>
                                        <option value="ELABORAÇÃO">Elaboração</option>
                                        <option value="COMPLETO">Completo</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Situação</label>
                                    <select class="form-control" v-model="ppra.liberado">
                                        <option value="SELECIONE">SELECIONE</option>
                                        <option value="LIBERADO">Liberado</option>
                                        <option v-if="ppra.status == 'COMPLETO'" value="CONGELADO">Congelado
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn pull-right btn-success" v-if="ppra.idPpra && !ppra.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Inserir PDF</button>
                                <button class="btn pull-right btn-success ml-3" v-if="ppra.idPpra && ppra.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Atualizar PDF</button>
                                <a class="btn pull-right btn-success" target="_blank" v-if="ppra.idPpra && ppra.caminhoPdf" :href="'http://172.18.0.6:8080:8081/' + ppra.caminhoPdf"><i class="fas fa-eye"></i> Visualizar PDF</a>
                                <input type="file" v-on:change="handleFileUpload()" id="file" ref="file" style="display:none">

                                <button class="btn btn-success" @click="salvar()"><i class="fas fa-save"></i>
                                    Salvar</button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 mt-3 text-center">
                                <h5 class="bg-success p-3 text-light">PCMSO vinculado(s)</h5>
                            </div>
                            <div class="col-md-12">
                                <table class="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Versão
                                            </th>
                                            <th>Tipo PCMSO</th>
                                            <th>
                                                Data
                                            </th>
                                            <th>Status</th>
                                            <th>Situação</th>
                                        </tr>

                                        <tr v-for="pcmso in ppra.pcmsos">
                                            <td>{{ pcmso.versao }}</td>
                                            <td>{{ tipoPcmso(pcmso.tipoPcmso) }}</td>
                                            <td>{{ pcmso.dataHora | moment('DD/MM/YYYY') }}</td>
                                            <td v-html="status(pcmso.status)"></td>
                                            <td v-html="situacao(pcmso.liberado)"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab title="Capas" @click="aba='capa'" :active="parametro == 'capa'">
                    <b-card-text class="sig">
                        <b-tabs pills>
                            <b-tab title="Introdução">
                                <b-card-text>
                                    <textarea rows="12" v-model="ppra.introducao" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Objetivo">
                                <b-card-text>
                                    <textarea rows="12" v-model="ppra.objetivos" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Orientação">
                                <b-card-text>
                                    <textarea rows="12" v-model="ppra.orientacoes" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Atividades">
                                <b-card-text>
                                    <textarea rows="12" readonly v-model="empresa.descricaoAtividade" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                        <div class="row">
                            <div class="col-md-12 mt-4">

                                <button class="btn btn-success" @click="salvar()"><i class="fas fa-save"></i>
                                    Salvar</button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab v-if="this.editar && this.montou" title="Ambiente & Cargos">
                    <b-card-text>
                        <ppra-ambiente :ppra="this.ppra" :empresa="this.empresadb"></ppra-ambiente>
                    </b-card-text>
                </b-tab>
                <b-tab title="Plano de Ação">
                    <b-card-text v-if="this.editar && this.montou">
                        <ppra-plano-acao :ppra="this.ppra"></ppra-plano-acao>
                    </b-card-text>
                </b-tab>
                <b-tab title="Histórico de Revisões">
                    <b-card-text v-if="this.editar && this.montou">
                        <ppra-historico-revisao :ppra="this.ppra"></ppra-historico-revisao>
                    </b-card-text>
                </b-tab>
                <b-tab title="Contrato" v-if="empresadb.tipoEmpresa != 'NENHUM'" >
                    <b-card-text v-if="this.editar && this.montou">
                        <ppra-capa :ppra="this.ppra"></ppra-capa>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>

    </div>

</section>
</template>

<script>
export default {
    props: ['editar', 'ppradb', 'empresadb'],
    data() {
        return {
            ppra: {
                idPpra: 0,
                empresasContrato: [],
                versao: '',
                dataHora: '',
                status: 'ELABORAÇÃO',
                liberado: 'LIBERADO',
                tipoPpra: 'SELECIONE',
                atividadeLocal: '',
                introducao: '',
                objetivos: '',
                metodos: '',
                orientacoes: '',
                comentarios: '',
                caminhoPdf: '',
                ppra: ''
            },
            matrizes: [],
            carregando: true,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            contratosAll: [],
            contratos: [],
            empresas: [],
            empresa: '',
            contrato: {
                empresa: {},
                empresaContratante: {}
            },
            adicionar: false,
            montou: false,
            file: '',
            aba: ''
        }

    },
    computed: {
        parametro() {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            if(params.get("aba")) {
               
                return params.get("aba")
            } else {
                return 'detalhes';
            }
        }
    },
    methods: {

        abrirUpload() {
            $("#file").click();
        },

        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.submitFile();
        },

        submitFile() {
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
            axios.post('http://172.18.0.6:8080:8081/upload-file',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (response) {
                    console.log('SUCCESS!!');
                    that.ppra.caminhoPdf = response.data.data.new_file_name;
                    that.salvar();
                })
                .catch(function () {
                    console.log('FAILURE!!');
                });
        },

        status(status) {
            if (status == 'ELABORAÇÃO') {
                return "<strong style='color: red'>Em Elaboração</strong>";
            } else {
                return "Completo";
            }
        },

        situacao(situacao) {
            if (situacao == 'LIBERADO') {
                return "<strong style='color: red'>Liberado</strong>";
            } else {
                return "Congelado";
            }
        },

        tipoPcmso(tipo) {
            if (tipo == 'EMISSÃO') {
                return 'Emissão';
            } else if (tipo == 'REVISÃO_PARCIAL') {
                return 'Revisão Parcial';
            } else if (tipo == 'REVISÃO_GERAL') {
                return 'Revisão Geral';
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
            }, 800);
        },

        alerta: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 5000);
        },

        adicionarContrato: function () {
            this.ppra.empresasContrato.push(this.contrato);
            this.contrato = {
                empresa: {},
                empresaContratante: {}
            };

            this.adicionar = false;
        },

        excluirContrato: function (key) {
            this.ppra.empresasContrato.splice(key, 1);
        },

        contratosEmContratos(contrato) {
            for (var i = 0; i < this.ppra.empresasContrato.length; i++) {
                if (this.ppra.empresasContrato[i].idEmpresaContrato === contrato.idEmpresaContrato) {
                    return true;
                }
            }

            return false;
        },

        valida(callback) {

            var that = this;

            // console.log(this.ppra.tipoPpra);
            if (this.editar) {
                callback();
            } else {

                if (that.contrato && that.ppra.dataHora != '' && that.ppra.tipoPpra != 'SELECIONE') {
                    that.carregar('Validando...');
                    axios.get('/gro/list/' + that.contrato.idEmpresaContrato).then(function (response) {
                        if (response.data) {
                            console.log(response.data);

                            if (response.data.tipoPpra == 'EMISSÃO' && that.ppra.tipoPpra == 'EMISSÃO') {
                                that.alerta('O tipo não pode ser emissão!');
                                that.ppra.tipoPpra = 'SELECIONE';
                                that.ppra.versao = '';
                                return false;
                            }

                            if (response.data.liberado != 'CONGELADO') {
                                that.alerta(
                                    'O PPRA anterior, com este contrato, precisa ter a situação CONGELADO. Corrija.'
                                );
                                return false;
                            }

                            var dataBd = new Date(response.data.dataHora);
                            var data = new Date(that.ppra.dataHora);

                            if (dataBd >= data) {
                                that.alerta('Data precisa ser maior que ' + (dataBd.getDate() + 1) + "/" + (
                                    dataBd.getMonth() + 1) + "/" + dataBd.getFullYear());

                                return false;
                            }

                            console.log('Chegou aqui!');

                            that.ppra.introducao = response.data.introducao;
                            that.ppra.objetivos = response.data.objetivos;
                            that.ppra.comentarios = response.data.comentarios;

                            callback();

                        } else {

                            callback();
                        }
                    });

                } else {
                    return false;
                }
            }
        },

        mudaData() {
            var that = this;
            that.carregar('Buscando contratos para esta data...');
            this.contratos = this.contratosAll.filter(function (contrato) {
                var dataInicio = new Date(contrato.dataIni);
                var data = new Date(that.ppra.dataHora);

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

            this.sucesso('Contratos recuperados.');

        },

        getVersao() {
            var that = this;

            this.valida(function () {
                {
                    axios.post('/gro/versao', {
                        contrato: that.contrato,
                        data: that.ppra.dataHora,
                        tipo: that.ppra.tipoPpra
                    }).then(function (response) {
                        console.log(response);
                        if (response.data == 'Erro') {
                            that.alerta('Verifique o tipo de PPRA!');

                            that.ppra.versao = '';
                        } else {
                            that.sucesso('Versão recuperada.');
                            that.ppra.versao = response.data;
                        }

                    });
                }
            });

        },

        getContratos(callback) {
            var that = this;
            that.mensagem = 'Carregando contratos das empresas...';
            that.carregando = true;
            axios.get('/gro/contratos/' + this.empresa.idEmpresa).then(function (response) {
                that.contratosAll = response.data;
                that.contratos = that.contratosAll;
                that.carregando = false;

                (callback || Function)();
            });
        },

        salvar: function () {
            var that = this;

            this.valida(function () {

                that.mensagem = 'Salvando PPRA...';
                that.carregando = true;
                axios.post('/gro', {
                    ppra: that.ppra,
                    contrato: that.contrato
                }).then(function (response) {
                    if (response.data != 'erro') {
                        window.location.href = "/gro/editar/" + response.data + "/?aba=" + that.aba;
                    } else {
                        that.mensagem = 'Erro!';
                        that.carregando = false;
                    }
                });

            });
        }

    },
    mounted() {
        var that = this;

        console.log(this.empresadb);
        this.aba = this.parametro;

        console.log('parametro', this.parametro);

        axios.get('/matriz/list').then(function (response) {
            that.matrizes = response.data;
        });

        axios.get('/empresas/list').then(function (response) {
            that.empresas = response.data;
            that.carregando = false;
            that.montou = true;
        });

        if (this.editar) {
            this.ppra = this.ppradb;
            this.empresa = this.ppra.empresasContrato[0].empresa
            this.getContratos();
            this.contrato = this.ppra.empresasContrato[0];

            console.log(this.contrato);
        } else {
            this.empresa = this.empresadb;
            this.getContratos(function () {
                if (that.empresa.tipoEmpresa == 'NENHUM' || that.empresa.tipoEmpresa == 'CONTRATANTE') {
                    that.contratos.forEach(function (contrato) {
                        console.log(contrato);
                        if (contrato.empresaContratante.idEmpresa == that.empresa.idEmpresa) {
                            that.contrato = contrato;
                        }
                    });
                }
            });

        }

        

    }
}
</script>

<style lang="scss" scoped>
.box-sig {
    .box-header {
        background-color: #59AF50;
        color: #fff;
    }

    .box-body {
        background-color: #e8fce8;
    }
}
</style>
