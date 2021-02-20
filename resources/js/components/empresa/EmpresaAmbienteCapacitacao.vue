<template>
<div class="row">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="col-md-12">
        <div class="box box-default">
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ambiente Trabalho</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ambiente in ambientes">
                            <td>{{ ambiente.idAmbienteTrabalho }}</td>
                            <td>{{ ambiente.nomeAmbienteTrabalho }}</td>
                            <td>
                                <button type="button" @click="preencher(ambiente)" class="btn btn-sm btn-outline-danger">Capacitação</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <b-modal size="xl" centered title="Listagem de Capacitacao" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" :hide-footer="true" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Capacitação</th>
                            <th>Periodicidade</th>
                            <th>Observação</th>
                            <th>Ações</th>
                        </tr>
                        <tr v-for="capacitacao in capacitacoesAmbiente">
                            <td>{{ capacitacao.idAmbienteEmpresaCapacitacao }}</td>
                            <td>{{ capacitacao.empresaCapacitacao.capacitacao.descricao }}</td>
                            <td>{{ capacitacao.periodicidade }}</td>
                            <td>{{ capacitacao.observacao }}</td>
                            <td>
                                <button type="button" @click="remover(capacitacao)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></i>
                                </button>
                                <button type="button" @click="edit(capacitacao)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div class="col-md-12 text-center">
                <button @click="adicionarEpi(ambiente)" class="btn btn-success btn-lg"><i class="fa fa-plus"></i>
                    Adicionar</button>
            </div>
        </div>

    </b-modal>

    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="salvarEpi" :hide-header-close="true" :no-close-on-esc="true" title="Detalhes da Capacitação" ok-title="Salvar" cancel-title="Cancelar" ref="novoEpi" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="capacitacao.idAmbienteEmpresaCapacitacao" class="form-control">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Descricao</label>
                    <select class="form-control" v-model="capacitacao.empresaCapacitacao">
                        <option v-if="!capacitacaoEmCapacitacoes(capacitacaodb) || capacitacaodb.idEmpresaCapacitacao === atual" :value="capacitacaodb" v-for="capacitacaodb in capacitacoes"> {{ capacitacaodb.capacitacao.descricao }}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Tabela 29</label>
                    <input type="text" v-model="capacitacao.empresaCapacitacao.capacitacao.tabela29" disabled class="form-control">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <input type="text" v-model="capacitacao.empresaCapacitacao.capacitacao.tipo" disabled class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="">Grupo de Capacitacao</label>
                    <input type="text" v-model="capacitacao.empresaCapacitacao.capacitacao.grupoCapacitacao" disabled class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="">Capacitação Pai</label>
                    <input type="text" disabled v-if="capacitacao.empresaCapacitacao.capacitacao.capacitacaoPai" v-model="capacitacao.empresaCapacitacao.capacitacao.capacitacaoPai.descricao" class="form-control">
                    <input type="text" disabled v-if="!capacitacao.empresaCapacitacao.capacitacao.capacitacaoPai" class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="">Carga Horária</label>
                    <input type="text" v-model="capacitacao.empresaCapacitacao.cargaHr" disabled class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <input type="text" disabled v-model="capacitacao.empresaCapacitacao.tipo" class="form-control">
                </div>
            </div>
            <div v-if="capacitacao.empresaCapacitacao.tipo != 'EVENTUAL' && capacitacao.empresaCapacitacao.tipo != 'INICIAL'" class="col">
                <div class="form-group">
                    <label for="">Periodicidade</label>
                    <input type="text" class="form-control" disabled v-model="capacitacao.periodicidade">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="">Observação</label>
                    <input type="text" class="form-control" v-model="capacitacao.observacao">
                </div>
            </div>
        </div>

    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este EPI?</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-secondary btn-lg" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
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
            ambientes: [],
            ambiente: {
                empresaContratante: {},
                dataIni: '',
                dataFim: ''
            },
            capacitacoes: [],
            capacitacao: {
                "idAmbienteEmpresaCapacitacao": 0,
                "ambienteTrabalho": {},
                "empresaCapacitacao": {
                    "capacitacao": {}
                },
                "periodicidade": 0,
                "observacao": 0,
            },
            capacitacoesAmbiente: [],
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

        preencher: function (ambiente) {
            this.ambiente = ambiente;
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/capacitacoes/' + ambiente.idAmbienteTrabalho).then(function (
                response) {
                that.capacitacoesAmbiente = response.data;
                //console.log(response.data);
            });

            this.editar = true;
            this.abrir();
        },
        edit: function (dados) {

            this.capacitacao = Object.assign({}, dados);

            this.atual = this.capacitacao.empresaCapacitacao.idEmpresaCapacitacao;

            this.$refs.novoEpi.show();
        },
        adicionarEpi: function (ambiente) {
            //console.log(ambiente);
            this.capacitacao.ambienteTrabalho = ambiente;
            this.$refs.novoEpi.show();
        },

        abrir: function () {
            this.$refs.myModal.show();
        },
        fechar: function () {
            this.editar = false;
            this.ambiente = {
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
        capacitacaoEmCapacitacoes: function (capacitacao) {
            for (var i = 0; i < this.capacitacoesAmbiente.length; i++) {
                if (this.capacitacoesAmbiente[i].empresaCapacitacao.idEmpresaCapacitacao === capacitacao.idEmpresaCapacitacao) {
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

        remover: function (capacitacao) {
            this.deletar = capacitacao;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();
        },

        certeza: function () {
            this.carregar('Removendo capacitacao...');
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/remover/capacitacao/' + this.deletar.idAmbienteEmpresaEpi).then(
                function (response) {
                    //console.log(that.deletar);
                    that.preencher(that.deletar.ambienteTrabalho);
                    that.$nextTick(() => {
                        that.fecharCerteza();

                        that.sucesso('Excluido com sucesso!');
                    });
                });
        },

        atualizar: function () {
            var that = this;
            axios.post('/empresas/ambientes/atualizar/' + that.empresa.idEmpresa, {
                ambiente: that.ambiente.idEmpresaContrato,
                contratante: that.ambiente.empresaContratante.idEmpresa,
                dataIni: that.ambiente.dataIni,
                dataFim: that.ambiente.dataFim
            }).then(function (response) {
                that.ambientes = response.data;
                that.$nextTick(() => {
                    that.fechar();
                });
            });
        },

        salvarEpi: function (evt) {
            evt.preventDefault();
            var that = this;

            //console.log(this.capacitacao);
            axios.post('/empresas/ambientes-de-trabalho/capacitacao/' + that.empresa.idEmpresa, {
                capacitacao: that.capacitacao
            }).then(function (response) {
                that.capacitacoesAmbiente = response.data;
                //console.log(response.data);
                that.$refs.novoEpi.hide();
            });

        }
    },
    mounted() {
        var that = this;
        axios.get('/capacitacao/' + that.empresa.idEmpresa).then(function (response) {
            that.capacitacoes = response.data;
        });

        axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(
            function (response) {
                that.ambientes = response.data;
                //console.log(response.data);
            });

        this.sucesso('Carregados os ambientes');
    }
}
</script>
