<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.lesoes" name="lesoes.xls">
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
                        <th>
                            Codigo NBR
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Observação
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="lesao in lesoes">
                        <td style="text-align:justify; vertical-align: middle">{{ lesao.nbr }}</td>
                        <td style="text-align:justify; vertical-align: middle">{{ lesao.descricao }}</td>
                        <td style="text-align:justify; vertical-align: middle">{{ lesao.observacao }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(lesao)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(lesao)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da lesão" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Código NBR</label>
                    <input type="text" class="form-control" v-model="nbr">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Descrição</label>
                    <input type="text" class="form-control" v-model="descricao">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Observação</label>
                    <input v-model="observacao" type="text" class="form-control">
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este lesao? </h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-default btn-lg" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
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
            lesoes: '',
            descricao: '',
            nbr: '',
            id: '',
            observacao: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando lesões cadastradas',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
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

        salvar: function () {
            this.carregar('Salvando nova lesão...');
            var that = this;
            if (this.descricao != '' || this.grupo != '') {
                axios.post('/tabelas/lesoes', {
                    descricao: that.descricao,
                    nbr: that.nbr,
                    observacao: that.observacao
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.nbr = '';
                        that.erro = true;
                        that.alerta('Código epi já existente, verifique!')
                    } else {
                        that.lesoes = response.data;
                        that.descricao = '';
                        that.nbr = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });

                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Atualizando lesão...');
            if (this.descricao != '') {
                axios.post('/tabelas/lesoes/update/' + this.id, {
                    descricao: that.descricao,
                    nbr: that.nbr,
                    observacao: that.observacao
                }).then(function (response) {
                    if (response.data == 'existente') {
                        that.nbr = '';
                        that.erro = true;
                        that.alerta('Código epi já existente, verifique!')
                    } else {
                        that.lesoes = response.data;
                        that.descricao = '';
                        that.nbr = '';

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

        preencher: function (dados) {

            this.descricao = dados.descricao;
            this.nbr = dados.nbr;
            this.id = dados.idLesao;
            this.observacao = dados.observacao;
            this.editar = true;

            this.abrir();

        },

        abrir: function () {
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.myModal.hide();

            this.descricao = '';
            this.editar = false;
            this.id = '';
            this.codigo = '';
            this.observacao = '';
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        remover: function (dados) {
            // var that = this;

            this.deletar = dados.idLesao;

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

        certeza: function () {
            this.carregar('Removendo lesao causador...');
            var that = this;
            axios.get('/tabelas/lesoes/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {

                    that.lesoes = response.data;

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
        axios.get('/tabelas/lesoes/list').then(function (response) {
            that.lesoes = response.data;
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
th {
    font-weight: 400;
    cursor: pointer;

    &.selecionado {
        font-weight: 800;
    }
}
</style>
