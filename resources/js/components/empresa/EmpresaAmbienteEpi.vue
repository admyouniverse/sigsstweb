<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
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
                            <button type="button" @click="preencher(ambiente)" class="btn btn-sm btn-outline-danger">EPI</i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered title="Listagem de EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" :hide-footer="true" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>EPI</th>
                            <th>Unidade</th>
                            <th>Quantidade</th>
                            <th>Validade (Dias)</th>
                            <th>Uso</th>
                            <th>Ações</th>
                        </tr>
                        <tr v-for="epi in episAmbiente">
                            <td>{{ epi.idAmbienteCadastroEpi }}</td>
                            <td>{{ epi.cadastroEpi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.cadastroEpi.epi.categoriaEpi.codigoCategoria }}
                                - {{ epi.cadastroEpi.epi.codigoNr6 }} | {{ epi.cadastroEpi.epi.descricao }}</td>
                            <td>
                                <span v-if="epi.cadastroEpi.epi.unidade == 'UN'">
                                    PEÇA
                                </span>
                                <span v-if="epi.cadastroEpi.epi.unidade != 'UN'">
                                    {{ epi.cadastroEpi.epi.unidade }}
                                </span>
                            </td>
                            <td>{{ epi.quantidade }}</td>
                            <td>{{ epi.validade }}</td>
                            <td>{{ epi.uso }}</td>
                            <td>
                                <button type="button" @click="remover(epi)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></i>
                                </button>
                                <button type="button" @click="edit(epi)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></i>
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

    <b-modal size="lg" centered :no-close-on-backdrop="true" @ok="salvarEpi" :hide-header-close="true" :no-close-on-esc="true" title="Adicionar EPI" ok-title="Salvar" cancel-title="Cancelar" ref="novoEpi" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">EPI</label>
                    <select class="form-control" v-model="epi.cadastroEpi">
                        <option :value="epi" v-for="epi in epis" v-if="!epiEmAmbiente(epi)  || epi.idCadastroEpi === atual">{{ epi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.epi.categoriaEpi.codigoCategoria }}
                            - {{ epi.epi.codigoNr6 }} | {{ epi.epi.descricao }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="epi.idAmbienteCadastroEpi" class="form-control">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Validade (Dias)</label>
                    <input type="text" class="form-control" v-model="epi.validade">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Quantidade</label>
                    <input type="text" class="form-control" v-model="epi.quantidade">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Uso</label>
                    <select v-model="epi.uso" id="" class="form-control">
                        <option value="HP">HP</option>
                        <option value="HI">HI</option>
                        <option value="EV">EV</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Unidade</label>
                    <input type="text" disabled class="form-control" v-if="epi.cadastroEpi.epi && epi.cadastroEpi.epi.unidade != 'UN'" v-model="epi.cadastroEpi.epi.unidade">
                    <input type="text" disabled class="form-control" v-if="epi.cadastroEpi.epi && epi.cadastroEpi.epi.unidade == 'UN'" value="PEÇA">
                    <input type="text" disabled class="form-control" v-if="!epi.cadastroEpi.epi">
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
</section>
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
            epis: [],
            epi: {
                "idAmbienteCadastroEpi": 0,
                "ambienteTrabalho": {},
                "cadastroEpi": {},
                "validade": 0,
                "quantidade": 0,
                "uso": "",
            },
            episAmbiente: [],
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
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/epis/' + ambiente.idAmbienteTrabalho).then(function (
                response) {
                that.episAmbiente = response.data;
                //console.log(response.data);
            });
            this.ambiente = ambiente;
            this.editar = true;
            this.abrir();
        },
        edit: function (dados) {
            this.epi = Object.assign({}, dados);

            this.atual = this.epi.cadastroEpi.idCadastroEpi;

            this.$refs.novoEpi.show();
        },
        adicionarEpi: function (ambiente) {
            this.epi.ambienteTrabalho = ambiente;
            this.epi.idAmbienteCadastroEpi = 0;
            this.epi.cadastroEpi = {};
            this.epi.validade = 0;
            this.epi.quantidade = 0;
            this.atual = {};
            // this.epi.uso = 0;

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
        epiEmAmbiente: function (epi) {
            for (var i = 0; i < this.episAmbiente.length; i++) {
                if (this.episAmbiente[i].cadastroEpi.idCadastroEpi === epi.idCadastroEpi) {
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

        remover: function (epi) {
            this.deletar = epi;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();
        },

        certeza: function () {
            this.carregar('Removendo epi...');
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/remover/epi/' + this.deletar.idAmbienteCadastroEpi).then(
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

            //console.log(this.epi);
            axios.post('/empresas/ambientes-de-trabalho/epi/' + that.empresa.idEmpresa, {
                epi: that.epi
            }).then(function (response) {
                that.episAmbiente = response.data;
                //console.log(response.data);
                that.$refs.novoEpi.hide();
            });

        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
            that.epis = response.data;
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
