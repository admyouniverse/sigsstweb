<template>
    <div class="row">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div class="col-md-12">
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Estabelecimento</th>
                            <th>Inscrição</th>
                            <th>Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="contrato in contratos">
                            <td>{{ contrato.empresaContratante.razaoSocial }}</td>
                            <td>{{ contrato.dataIni | moment("DD/MM/Y")}}</td>
                            <td v-if="contrato.dataFim">{{ contrato.dataFim | moment("DD/MM/Y")}}</td>
                            <td v-if="!contrato.dataFim">Não há</td>
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
        <div class="col-md-12 text-center">
            <br>
            <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i> Adicionar</button>
        </div>
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do Contrato" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Contratante</label>
                        <select v-model="contrato.empresaContratante" name="" class="form-control">
                            <option :value="contratante"  v-if="(!contratanteEmContrato(contratante.idEmpresa) && contratante.idEmpresa != empresa.idEmpresa) || contratante.idEmpresa == atual" v-for="contratante in contratantes">{{ contratante.razaoSocial }}</option>
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
            contratantes:[],
            editar: false,
            atual: '',
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
        }
    },
    methods: {
             carregar: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        preencher: function(contrato) {
            this.atual = contrato.empresaContratante.idEmpresa;
            this.contrato = contrato;
            this.editar = true;
            this.abrir();
        },
        abrir: function() {
$(this.idTabela).DataTable().destroy();
            this.$refs.myModal.show();
        }, 
        fechar: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.contrato = {
                empresaContratante: {},
                dataIni: '',
                dataFim: ''
            };
            this.atual = '';
             this.$refs.myModal.hide();
        },
          fecharCerteza: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },
         sucesso: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 800);
        },
        contratanteEmContrato: function(id) {

            /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */

            for (var i = 0; i < this.contratos.length; i++) {
                if (this.contratos[i].empresaContratante.idEmpresa === id) {
                    return true;
                }
            }

            return false;
        },
        ok: function(evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },


        remover: function(contrato) {
            this.deletar = contrato.idEmpresaContrato;
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();
        },

        certeza: function() {
            this.carregar('Removendo contrato...');
            var that = this;
            axios.get('/empresas/contratos/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function(response) {
                that.contratos = response.data;
                that.$nextTick(() => {
                    that.fecharCerteza();
                    that.sucesso('Excluido com sucesso!');
                });
            });
        },

        atualizar: function() {
            var that = this;
             axios.post('/empresas/contratos/atualizar/' + that.empresa.idEmpresa, {
                contrato: that.contrato.idEmpresaContrato,
                contratante: that.contrato.empresaContratante.idEmpresa,
                dataIni: that.contrato.dataIni,
                dataFim: that.contrato.dataFim
            }).then(function(response) {
                 that.contratos = response.data;
                 that.$nextTick(() => {
                    that.fechar();
                });
            });
        },

        salvar: function() {
            var that = this;

            
            axios.post('/empresas/contratos/novo/' + that.empresa.idEmpresa, {
                contratante: that.contrato.empresaContratante.idEmpresa,
                dataIni: that.contrato.dataIni,
                dataFim: that.contrato.dataFim
            }).then(function(response) {
                 that.contratos = response.data;
                 that.$nextTick(() => {
                    that.fechar();
                });
            });


        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function(response) {
            that.contratos = response.data;
        });

        axios.get('/empresas/list/').then(function(response) {
            that.contratantes = response.data;
            // //console.log(response.data);
        });

        this.sucesso('Carregados os contratos');
    }
}

</script>
