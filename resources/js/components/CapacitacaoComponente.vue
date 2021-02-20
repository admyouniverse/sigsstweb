<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.capacitacoes" name="capacitacoes.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>
    </div>

    <div v-if="montou" class="box box-info">
        
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="tabelaListagem">
                <thead>
                    <tr>
                        <th style="width: 100px" >
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Grupo / Complemento
                        </th>
                        <th>
                            T29 - eSocial
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="capacitacao in capacitacoes">
                        <td>{{ capacitacao.idCapacitacao }}</td>
                        <td>{{ capacitacao.descricao }}</td>
                        <td>{{ capacitacao.grupoCapacitacao }} - {{ capacitacao.complemento }}</td>
                        <td>{{ capacitacao.tabela29 }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(capacitacao)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(capacitacao)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Capacitação" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">

        <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <input class="form-control" v-model="descricao"></input>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Tabela 29</label>
                    <input class="form-control" v-model="tabela29"></input>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição Completa</label>
                    <input type="text" class="form-control" v-model="completa" name="descricao">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Grupo de Capacitação</label>
                    <select v-model="grupo" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="NR">NR</option>
                        <option value="OPERACIONAL">OPERACIONAL</option>
                        <option value="OUTROS">Outros</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Complemento</label>
                    <input type="text" class="form-control" v-model="complemento">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <select v-model="tipo" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="QUALIFICAÇÃO">Qualificação</option>
                        <option value="HABILITAÇÃO">Habilitação</option>
                        <option value="CAPACITAÇÃO">Habilitação</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Capacitação Pai</label>
                    <select class="form-control" v-model="pai">
                        <option :value="capacitacao.idCapacitacao" v-for="capacitacao in capacitacoes"> #{{ capacitacao.idCapacitacao }} - {{ capacitacao.descricao }}</option>
                    </select>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta capacitação?</h3>
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
    data() {
        return {
            capacitacoes: '',
            descricao: '',
            codigo: '',
            complemento: '',
            periodicidade: '',
            periodo: 'SELECIONE',
            grupo: 'SELECIONE',
            tipo: 'SELECIONE',
            habilitacao: 'SELECIONE',
            tabela29: '',
            observacao: '',
            completa: '',
            pai: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando capacitações cadastradas',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            destaque: '',
            coluna: 'id',
            ordem: true,
            termo: '',
            selecionado: 'id',
            idTabela: '#tabelaListagem'
        }
    },
    methods: {
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
            }, 1000);
        },

        foco: function (id) {
            scrollPageTo('#capacitacao' + id);
            this.destaque = id;
            var that = this;
            setTimeout(function () {
                that.destaque = '';
                console.log('foi');
            }, 2000);
        },

        salvar: function () {

            this.carregar('Salvando novo capacitacao...');
            var that = this;
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/capacitacao', {
                    descricao: that.descricao,
                    grupo: that.grupo,
                    periodo: that.periodo,
                    periodicidade: that.periodicidade,
                    tipo: that.tipo,
                    habilitacao: that.habilitacao,
                    tabela29: that.tabela29,
                    pai: that.pai,
                    completa: that.completa,
                    observacao: that.observacao,
                    complemento: that.complemento
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código capacitacao já existente, verifique!')
                    } else {
                        that.capacitacoes = response.data;
                        that.descricao = '';
                        that.grupo = '';
                        that.periodo = '';
                        that.periodicidade = '';
                        that.tipo = '';
                        that.habilitacao = '';
                        that.tabela29 = '';
                        that.pai = '';
                        that.complemento = '';
                        that.observacao = '';
                        that.completa = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });

                        var ultimo = that.capacitacoes[that.capacitacoes.length - 1];
                        console.log(ultimo);
                        setTimeout(function () {
                            scrollPageTo('#capacitacao' + ultimo.idCapacitacao);
                            that.destaque = ultimo.idCapacitacao;
                            setTimeout(function () {
                                that.destaque = '';

                            }, 2000);
                        }, 800);

                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }

        },

        atualizar: function () {

            var that = this;
            this.carregar('Atualizando novo capacitacao...');
            if (this.descricao != '') {
                axios.post('/tabelas/capacitacao/update/' + this.id, {
                    descricao: that.descricao,
                    grupo: that.grupo,
                    periodo: that.periodo,
                    periodicidade: that.periodicidade,
                    tipo: that.tipo,
                    habilitacao: that.habilitacao,
                    tabela29: that.tabela29,
                    pai: that.pai,
                    completa: that.completa,
                    complemento: that.complemento,
                    observacao: that.observacao,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código capacitacao já existente, verifique!')
                    } else {
                        that.capacitacoes = response.data;
                        that.descricao = '';
                        that.grupo = '';
                        that.periodo = '';
                        that.periodicidade = '';
                        that.complemento = '';
                        that.tipo = '';
                        that.habilitacao = '';
                        that.tabela29 = '';
                        that.completa = '';
                        that.pai = '';
                        that.observacao = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Atualizado com sucesso!');
                        });

                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }

        },

        abrir: function () {
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.complemento = dados.complemento;
            this.descricao = dados.descricao;
            this.grupo = dados.grupoCapacitacao;
            this.periodo = dados.periodo;
            this.periodicidade = dados.periodicidade;
            this.tipo = dados.tipo;
            this.habilitacao = dados.tipoHabilitacao;
            this.tabela29 = dados.tabela29;
            this.completa = dados.descricaoCompleta;
            this.id = dados.idCapacitacao;
            this.observacao = dados.observacao;

            if (dados.capacitacaoPai) {
                this.pai = dados.capacitacaoPai.idCapacitacao;
            }

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idCapacitacao;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();

        },

        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;

            this.descricao = '';
            this.grupo = '';
            this.periodo = '';
            this.periodicidade = '';
            this.tipo = '';
            this.habilitacao = '';
            this.tabela29 = '';
            this.completa = '';
            this.id = '';
            this.observacao = '';

            this.pai = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo capacitação...');
            var that = this;
            axios.get('/tabelas/capacitacao/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.capacitacoes = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/tabelas/capacitacao/list').then(function (response) {
            that.capacitacoes = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

    }
}
</script>

<style lang="scss">
.btn-editar {
    color: rgba(0, 141, 76, );
}

.btn-remover {
    color: red;
}

.row-flex {
    flex-wrap: wrap;
    display: flex;

    .col-box {
        margin-bottom: 10px;

        .box-default,
        .box-successr {
            height: 90%;
        }
    }
}

.detalhes {
    padding-left: 20px;
}

th {
    font-weight: 400;
    cursor: pointer;

    &.selecionado {
        font-weight: 800;
    }
}

@keyframes highlight {
    0% {
        background: rgba(0, 141, 76, .6);
        /* lovely yellow colour */
    }

    100% {
        background: #ffffff;
    }
}

.highlight {
    animation: highlight 2s;
}
</style>
