<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.categorias" name="categorias.xls">
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
                        <th>
                            Grupo

                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categoria in categorias">
                        <td style="vertical-align: middle; width: 100px"><b>{{ categoria.grupoEpi.codigoGrupoEpi }}.{{ categoria.codigoCategoria }}</b></td>
                        <td style="text-align:justify">{{ categoria.nome }}</td>
                        <td style="text-align:justify; " v-if="categoria.grupoEpi">{{ categoria.grupoEpi.nome }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(categoria)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(categoria)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->

    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Categoria EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Grupo EPI</label>
                    <select v-model="grupo" class="form-control">
                        <option v-for="grupo in grupos" :value="grupo">{{ grupo.codigoGrupoEpi }} | {{ grupo.nome }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span v-if="grupo != ''" class="input-group-text" id="basic-addon1">{{ grupo.codigoGrupoEpi }}.</span>
                        </div>
                        <input type="text" v-model="codigo" class="form-control" name="cnae">
                    </div>
                    <!-- <span class="help-block">No máximo 7 caracteres. Deve ser único.</span> -->
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input class="form-control" v-model="nome" type="text">
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta categoria?</h3>
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
            categorias: '',
            grupos: '',
            nome: '',
            codigo: '',
            grupo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando categorias cadastradas...',
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

            this.carregar('Salvando nova categoria...');
            var that = this;
            if (this.nome != '' || this.codigo != '') {
                axios.post('/tabelas/epi/categorias', {
                    nome: that.nome,
                    codigo: that.codigo,
                    grupo: that.grupo.idGrupoEpi,

                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.categorias = response.data;
                        that.nome = '';
                        that.codigo = '';
                        that.grupo = '';
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
            this.carregar('Atualizando nova categoria...');
            if (this.nome != '' || this.codigo != '') {
                axios.post('/tabelas/epi/categorias/' + this.id, {
                    nome: that.nome,
                    codigo: that.codigo,
                    grupo: that.grupo.idGrupoEpi,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.categorias = response.data;
                        that.nome = '';
                        that.codigo = '';
                        that.grupo = '';
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

            this.nome = dados.nome;
            this.codigo = dados.codigoCategoria;
            this.id = dados.idCategoriaEpi;

            if (dados.grupoEpi) {
                this.grupo = dados.grupoEpi;
            }

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idCategoriaEpi;
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
            this.codigo = '';
            this.nome = '';
            this.grupo = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo categoria...');
            var that = this;
            axios.get('/tabelas/epi/categorias/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.categorias = response.data;

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
        axios.get('/tabelas/epi/categorias/list').then(function (response) {
            that.categorias = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        axios.get('/tabelas/epi/grupos/list').then(function (response) {
            that.grupos = response.data;
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
