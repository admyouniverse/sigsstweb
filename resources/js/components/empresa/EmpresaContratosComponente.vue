<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" v-if="empresa.tipoEmpresa == 'AMBAS' || empresa.tipoEmpresa == 'CONTRATADA'">
    
        <h3 class="ml-4">Contratantes</h3>
        
        <div class="col-md-12">
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th>Contratante</th>
                            <th>CNPJ</th>
                            <th>Unidade</th>
                            <th>Data Início</th>
                            <th>Data Final</th>
                            <th>Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="contrato in contratos" v-if="contrato.empresaContratante.idEmpresa != empresa.idEmpresa">
                            <td>{{ contrato.empresaContratante.razaoSocial }}</td>
                            <td>{{contrato.empresaContratante.inscricao}}</td>
                            <td>{{contrato.empresaContratante.nomeUnidade}}</td>
                            <td>{{ contrato.dataIni | moment("DD/MM/Y")}}</td>
                            <td v-if="contrato.dataFim">{{ contrato.dataFim | moment("DD/MM/Y")}}</td>
                            <td v-if="!contrato.dataFim">__/__/____</td>
                            <td>
                                <button type="button" @click="remover(contrato)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(contrato)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-12 ml-2 mb-4">
            <br>
            <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i> Adicionar</button>
        </div>

        
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do Contrato" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Contratante</label>
                        <select v-model="contrato.empresaContratante" name="" class="form-control">
                            <option :value="contratante" v-if="(contratante.tipoEmpresa == 'AMBAS' || contratante.tipoEmpresa == 'CONTRATANTE') && ((!contratanteEmContrato(contratante) && contratante.idEmpresa != empresa.idEmpresa) || contratante.idEmpresa == atual)" v-for="contratante in contratantes">{{ contratante.razaoSocial }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Data Inicial</label>
                        <input type="date" class="form-control" v-model="contrato.dataIni">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Data Final</label>
                        <input type="date" class="form-control" v-model="contrato.dataFim">
                    </div>
                </div>
            </div>
        </b-modal>
    </div>


      <div class="row" v-if="empresa.tipoEmpresa == 'AMBAS' || empresa.tipoEmpresa == 'CONTRATANTE'">
          
        <h3 class="ml-4">Contratadas</h3>
        
        <div class="col-md-12">
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th>Contratada</th>
                            <th>CNPJ</th>
                            <th>Unidade</th>
                            <th>Data Início</th>
                            <th>Data Final</th>
                            <th>Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="contratado in contratados"  v-if="contratado.empresa.idEmpresa != empresa.idEmpresa">
                            <td>{{ contratado.empresa.razaoSocial }}</td>
                            <td>{{contratado.empresa.inscricao}}</td>
                            <td>{{contratado.empresa.nomeUnidade}}</td>
                            <td>{{ contratado.dataIni | moment("DD/MM/Y")}}</td>
                            <td v-if="contratado.dataFim">{{ contratado.dataFim | moment("DD/MM/Y")}}</td>
                            <td v-if="!contratado.dataFim">__/__/____</td>
                            <td>
                                <button type="button" @click="remover(contratado)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(contratado)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este contrato?</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-default btn-lg" data-dismiss="modal"><i class="fa fa-close"></i> Não</button>
            </div>
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
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
            contratos: [],
            contrato: {
                empresaContratante: {},
                dataIni: '',
                dataFim: ''
            },
            contratantes: [],
            contratados: [],
            editar: false,
            atual: '',
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
        }
    },
    methods: {
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        preencher: function (contrato) {
            this.atual = contrato.empresaContratante.idEmpresa;
            this.contrato = contrato;
            this.editar = true;
            this.abrir();
        },
        abrir: function () {
            this.$refs.myModal.show();
        },
        fechar: function () {
            this.editar = false;
            this.contrato = {
                empresaContratante: {},
                dataIni: '',
                dataFim: ''
            };
            this.atual = '';
            this.$refs.myModal.hide();
        },
        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },
        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 800);
        },
        contratanteEmContrato: function (empresa) {

            /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */

            for (var i = 0; i < this.contratos.length; i++) {
                if (this.contratos[i].empresaContratante.idEmpresa === empresa.idEmpresa || empresa.tipoEmpresa == 'CONTRATADA' || empresa.tipoEmpresa == 'SELECIONE') {
                    return true;
                }
            }

            return false;
        },
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        remover: function (contrato) {
            this.deletar = contrato.idEmpresaContrato;
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();
        },

        certeza: function () {
            this.carregar('Removendo contrato...');
            var that = this;
            axios.get('/empresas/contratos/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function (response) {
                that.contratos = response.data;
                that.$nextTick(() => {
                    that.fecharCerteza();
                    that.sucesso('Excluido com sucesso!');
                });
            });
        },

        atualizar: function () {
            var that = this;
            axios.post('/empresas/contratos/atualizar/' + that.empresa.idEmpresa, {
                contrato: that.contrato.idEmpresaContrato,
                contratante: that.contrato.empresaContratante.idEmpresa,
                dataIni: that.contrato.dataIni,
                dataFim: that.contrato.dataFim
            }).then(function (response) {
                that.contratos = response.data;
                that.$nextTick(() => {
                    that.fechar();
                });
            });
        },

        salvar: function () {
            var that = this;

            axios.post('/empresas/contratos/novo/' + that.empresa.idEmpresa, {
                contratante: that.contrato.empresaContratante.idEmpresa,
                dataIni: that.contrato.dataIni,
                dataFim: that.contrato.dataFim
            }).then(function (response) {
                that.contratos = response.data;
                that.$nextTick(() => {
                    that.fechar();
                });
            });

        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
            that.contratos = response.data;
        });

        axios.get('/empresas/contratos/' + that.empresa.idEmpresa + '/contratados').then(function (response) {
            that.contratados = response.data;
        });

        axios.get('/empresas/list/').then(function (response) {
            that.contratantes = response.data;
            // //console.log(response.data);
        });

        this.sucesso('Carregados os contratos');
    }
}
</script>
