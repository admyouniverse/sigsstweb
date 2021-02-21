<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div>
        <b-card class="sig" no-body>
            <b-tabs card>
                <b-tab title="Detalhes" active>
                    <b-card-text>
                        <div class="row">
                              <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input type="text" v-model="pcmso.idPcmso" disabled class="form-control">
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
                                    <input type="date" class="form-control" @blur="mudaData" v-model="pcmso.dataHora">
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
                                    <select @change="getVersao" v-model="pcmso.tipoPcmso" class="form-control">
                                        <option value="SELECIONE" disabled>--- Selecione ---</option>
                                        <option value="EMISSÃO">Emissão</option>
                                        <option value="REVISÃO_PARCIAL">Revisão Parcial</option>
                                        <option value="REVISÃO_GERAL">Revisão Geral</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-1">
                                <div class="form-group">
                                    <label for="">Versão</label>
                                    <input type="text" v-model="pcmso.versao" class="form-control">
                                </div>
                            </div>


                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">GRO Vinculado</label>
                                    <input type="text" disabled class="form-control" v-if="pcmso.ppra" :value="formataPpra()">
                                    <input type="text" disabled class="form-control" v-if="!pcmso.ppra">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Status</label>
                                    <select v-model="pcmso.status" class="form-control">
                                        <option value="SELECIONE" disabled>--- Selecione ---</option>
                                        <option value="ELABORAÇÃO">Elaboração</option>
                                        <option value="COMPLETO">Completo</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="">Situação</label>
                                    <select class="form-control" v-model="pcmso.liberado">
                                        <option value="SELECIONE">SELECIONE</option>
                                        <option value="LIBERADO">Liberado</option>
                                        <option v-if="pcmso.status == 'COMPLETO'" value="CONGELADO">Congelado
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn pull-right btn-success" v-if="pcmso.idPcmso && !pcmso.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Inserir PDF</button>
                                <button class="btn pull-right btn-success ml-3" v-if="pcmso.idPcmso && pcmso.caminhoPdf" @click="abrirUpload"><i class="fa fa-upload"></i> Atualizar PDF</button>
                                <button class="btn pull-right btn-success" v-if="pcmso.idPcmso && pcmso.caminhoPdf"><i class="fa fa-upload"></i> Visualizar PDF</button>
                                <input type="file" v-on:change="handleFileUpload()" id="file" ref="file" style="display:none">
                                <button class="btn btn-success" @click="salvar()"><i class="fa fa-floppy-o"></i>
                                    Salvar</button>
                            </div>
                        </div>

                    </b-card-text>
                </b-tab>
                
                   <b-tab title="Capas">
                    <b-card-text class="sig">
                        <b-tabs pills>
                            <b-tab title="Introdução">
                                <b-card-text>
                                    <textarea rows="12" v-model="pcmso.introducao" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Objetivo">
                                <b-card-text>
                                    <textarea rows="12" v-model="pcmso.objetivos" class="form-control mt-4"></textarea>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Orientação">
                                <b-card-text>
                                    <textarea rows="12" v-model="pcmso.orientacoes" class="form-control mt-4"></textarea>
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
                                <button class="btn btn-success" @click="salvar()"><i class="fa fa-floppy-o"></i>
                                    Salvar</button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>

                <b-tab v-if="this.editar && this.montou" title="Ambiente & Cargos">
                    <b-card-text>
                        <pcmso-ambiente :pcmso="this.pcmso" :empresa="this.empresadb"></pcmso-ambiente>
                    </b-card-text>
                </b-tab>

                <b-tab title="Plano de Ação">
                    <b-card-text v-if="this.editar && this.montou">
                        <pcmso-plano-acao :pcmso="this.pcmso"></pcmso-plano-acao>
                    </b-card-text>
                </b-tab>

                <b-tab title="Histórico de Revisões">
                    <b-card-text v-if="this.editar && this.montou">
                        <pcmso-historico-revisao :pcmso="this.pcmso"></pcmso-historico-revisao>
                    </b-card-text>
                </b-tab>

                <b-tab title="Histórico de Exames">
                    <b-card-text v-if="this.editar && this.montou">
                        <pcmso-historico-exames :pcmso="this.pcmso"></pcmso-historico-exames>
                    </b-card-text>
                </b-tab>

                <b-tab title="Contrato" v-if="empresadb.tipoEmpresa != 'NENHUM'">
                    <b-card-text v-if="this.editar && this.montou">
                        <pcmso-capa :pcmso="this.pcmso"></pcmso-capa>
                    </b-card-text>
                </b-tab>

            </b-tabs>
        </b-card>

    </div>

</section>
</template>

<script>

// const carbone = require('carbone');
export default {
    props: ['editar', 'pcmsodb', 'empresadb'],
    data() {
        return {
            pcmso: {
                idPcmso: 0,
                empresasContrato: [],
                versao: '',
                dataHora: '',
                status: 'ELABORAÇÃO',
                liberado: 'LIBERADO',
                tipoPcmso: 'SELECIONE',
                atividadeLocal: '',
                introducao: '',
                objetivos: '',
                metodos: '',
                orientacoes: '',
                comentarios: '',
                caminhoPdf: '',
                ppra: ''
            },
            carregando: true,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            contratosAll: [],
            contratos: [],
            empresas: [],
            empresa: '',
            file: '',
            contrato: {
                empresa: {},
                empresaContratante: {}
            },
            adicionar: false,
            montou: false,
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
            axios.post('http://200.98.201.236:8080:8081/upload-file',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (response) {
                    console.log('SUCCESS!!');
                    that.pcmso.caminhoPdf = response.data.data.new_file_name;
                    that.salvar();
                })
                .catch(function () {
                    console.log('FAILURE!!');
                });
        },
        
        formataPpra() {
            return 'V ' + this.pcmso.ppra.versao + " de " + Vue.moment(this.pcmso.ppra.dataHora).format('DD/MM/YYYY');
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
            this.pcmso.empresasContrato.push(this.contrato);
            this.contrato = {
                empresa: {},
                empresaContratante: {}
            };

            this.adicionar = false;
        },

        excluirContrato: function (key) {
            this.pcmso.empresasContrato.splice(key, 1);
        },

        contratosEmContratos(contrato) {
            for (var i = 0; i < this.pcmso.empresasContrato.length; i++) {
                if (this.pcmso.empresasContrato[i].idEmpresaContrato === contrato.idEmpresaContrato) {
                    return true;
                }
            }

            return false;
        },

        valida(callback) {

            var that = this;

            // console.log(this.pcmso.tipoPcmso);
            if (this.editar) {
                callback();
            } else {

                if (that.contrato && that.pcmso.dataHora != '' && that.pcmso.tipoPcmso != 'SELECIONE') {
                    that.carregar('Validando...');
                    axios.get('/pcmso/list/' + that.contrato.idEmpresaContrato).then(function (response) {
                        if (response.data) {
                            console.log(response.data);

                            if (response.data.tipoPcmso == 'EMISSÃO' && that.pcmso.tipoPcmso == 'EMISSÃO') {
                                that.alerta('O tipo não pode ser emissão!');
                                that.pcmso.tipoPcmso = 'SELECIONE';
                                that.pcmso.versao = '';
                                return false;
                            }

                            if (response.data.liberado != 'CONGELADO') {
                                that.alerta(
                                    'O PCMSO anterior, com este contrato, precisa ter a situação CONGELADO. Corrija.'
                                );
                                return false;
                            }

                            var dataBd = new Date(response.data.dataHora);
                            var data = new Date(that.pcmso.dataHora);

                            if (dataBd >= data) {
                                that.alerta('Data precisa ser maior que ' + (dataBd.getDate() + 1) + "/" + (
                                    dataBd.getMonth() + 1) + "/" + dataBd.getFullYear());

                                return false;
                            }

                            console.log('Chegou aqui!');

                            that.pcmso.introducao = response.data.introducao;
                            that.pcmso.objetivos = response.data.objetivos;
                            that.pcmso.comentarios = response.data.comentarios;

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
                var data = new Date(that.pcmso.dataHora);

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


            this.buscarGro();

        },


        buscarGro() {
            var that = this;
            if(this.contrato && this.pcmso.dataHora) {
                that.carregar('Buscando GRO...');
                axios.post('/gro/empresacontrato', {
                        empresaContrato: that.contrato.idEmpresaContrato,
                        dataPpra: that.pcmso.dataHora,
                        idEmpresa: that.empresadb.idEmpresa
                    }).then(function (response) {
                        console.log(response.data);
                            that.pcmso.ppra = response.data;

                            if(response.data != '') {
                            that.sucesso('GRO encontrado.');
                            }
                            else {
                            that.alerta('Não foi encontrado GRO!');
                            }
                        // }
                    });
            }
        },

        getVersao() {
            var that = this;
            
            this.buscarGro();

            this.valida(function () {
                {
                    axios.post('/pcmso/versao', {
                        contrato: that.contrato,
                        data: that.pcmso.dataHora,
                        tipo: that.pcmso.tipoPcmso
                    }).then(function (response) {
                        console.log(response);
                        if (response.data == 'Erro') {
                            that.alerta('Verifique o tipo de PCMSO!');

                            that.pcmso.versao = '';
                        } else {
                            that.sucesso('Versão recuperada.');
                            that.pcmso.versao = response.data;
                        }
                    });

                   
                }
            });
        },

        getContratos(callback) {
            var that = this;
            that.mensagem = 'Carregando contratos das empresas...';
            that.carregando = true;
            axios.get('/pcmso/contratos/' + this.empresa.idEmpresa).then(function (response) {
                that.contratosAll = response.data;
                that.contratos = that.contratosAll;
                that.carregando = false;

                (callback || Function)();
            });
        },

        salvar: function () {
            var that = this;

            this.valida(function () {

                if(that.pcmso.ppra) {
                    that.mensagem = 'Salvando PCMSO...';
                that.carregando = true;
                axios.post('/pcmso', {
                    pcmso: that.pcmso,
                    contrato: that.contrato
                }).then(function (response) {
                    if (response.data != 'erro') {
                        window.location.href = "/pcmso/editar/" + response.data;
                    } else {
                        that.mensagem = 'Erro!';
                        that.carregando = false;
                    }
                });
                } else {
                    that.alerta('Encontre um GRO!');
                }
                
            });
        }

    },
    mounted() {
        var that = this;

        console.log(this.empresadb);

        axios.get('/empresas/list').then(function (response) {
            that.empresas = response.data;
            that.carregando = false;
            that.montou = true;
        });

        if (this.editar) {
            this.pcmso = this.pcmsodb;
            this.empresa = this.pcmso.empresasContrato[0].empresa
            this.getContratos();
            this.contrato = this.pcmso.empresasContrato[0];

            console.log(this.contrato);
        } else {
            this.empresa = this.empresadb;
            this.getContratos(function () {
                if (that.empresa.tipoEmpresa == 'NENHUM' || that.empresa.tipoEmpresa == 'CONTRATANTE') {
                    that.contratos.forEach(function (contrato) {
                        // console.log(contrato);
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
