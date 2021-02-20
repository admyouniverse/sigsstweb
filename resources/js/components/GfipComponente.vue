<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.faes" name="faes.xls">
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
                            Código
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th @click="ordenar('observacao')" v-bind:class="{'selecionado': this.coluna == 'observacao'}">
                            Observação
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="fae in faes">
                        <td style="vertical-align: middle" width="80px"><b>{{ fae.codigoGfip }}</b></td>
                        <td style="text-align:justify">{{ fae.descricao }}</td>
                        <td style="text-align:justify">{{ fae.observacao }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(fae)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(fae)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do CID" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código FAE</label>
                    <input type="text" v-model="codigo" class="form-control" name="fae">
                    <!-- <span class="help-block">No máximo 7 caracteres. Deve ser único.</span> -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <textarea class="form-control" v-model="descricao" name="descricao" style="height: 120px"></textarea>
                    <span class="help-block">No máximo 100 caracteres.</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observação</label>
                    <textarea class="form-control" v-model="observacao" name="observacao" style="height: 120px"></textarea>
                    <span class="help-block">No máximo 100 caracteres.</span>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este GFIP?</h3>
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
</section>
</template>

<script>
export default {
    data() {
        return {
            faes: '',
            descricao: '',
            codigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando faes cadastrados',
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
            this.carregar('Salvando novo GFIP...');
            var that = this;
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/fae', {
                    descricao: that.descricao,
                    codigo: that.codigo,
                    observacao: that.observacao,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código GFIP já existente, verifique!')
                    } else {
                        that.faes = response.data;
                        that.descricao = '';
                        that.codigo = '';
                        that.observacao = '';
                        that.erro = false;

                        $('#myModal').modal('hide');
                        $('body').removeClass('modal-open');
                        $('.modal-backdrop').remove();

                        that.sucesso('GFIP salvo com sucesso!');

                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Atualizando novo GFIP...');
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/fae/update/' + this.id, {
                    descricao: that.descricao,
                    codigo: that.codigo,
                    observacao: that.observacao,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código GFIP já existente, verifique!')
                    } else {
                        that.faes = response.data;
                        that.descricao = '';
                        that.codigo = '';
                        that.observacao = '';
                        that.erro = false;

                        $('#myModal').modal('hide');
                        $('body').removeClass('modal-open');
                        $('.modal-backdrop').remove();

                        that.sucesso('GFIP atualizado com sucesso!');

                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        abrir: function (dados) {
            $(this.idTabela).DataTable().destroy();
            this.$refs.myModal.show();
        },
        preencher: function (dados) {

            this.carregar('Carregando dados...');
            this.descricao = dados.descricao;
            this.codigo = dados.codigoGfip;
            this.id = dados.idGfip;
            this.observacao = dados.observacao;
            this.editar = true;
            this.abrir();
            this.sucesso('Dados carregados!');

        },

        remover: function (dados) {
            this.deletar = dados.idGfip;
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

            this.id = '';
            this.descricao = '';
            this.codigo = '';
            this.descricao = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo fae...');
            var that = this;
            axios.get('/tabelas/fae/remover/' + this.deletar).then(function (response) {
                that.faes = response.data;
                that.$nextTick(() => {
                    that.fecharCerteza();
                    that.sucesso('Excluido com sucesso!');
                });
            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/tabelas/fae/list').then(function (response) {
            that.faes = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        $('#myModal').on('hidden.bs.modal', function (e) {
            that.descricao = '';
            that.codigo = '';
            that.editar = false;
            that.id = '';
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
