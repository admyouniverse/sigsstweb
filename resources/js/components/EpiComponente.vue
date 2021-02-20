<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.epis" name="categorias.xls">
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
                        <th style="width: 100px">
                            Código NR6
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th style="width: 150px">
                            EPI
                        </th>
                        <th>Unidade</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="epi in epis">
                        <td style="vertical-align: middle; width: 100px"><b v-if="epi.categoriaEpi">{{ epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.categoriaEpi.codigoCategoria}} - {{ epi.codigoNr6 }}</b></td>
                        <td style="text-align:justify" v-if="epi.categoriaEpi">{{ epi.categoriaEpi.nome }}</td>
                        <td style="text-align:justify" v-if="!epi.categoriaEpi">-</td>
                        <td style="text-align:justify; width: 50%">{{ epi.descricao }}</td>
                        <td>
                            <span v-if="epi.unidade == 'UN'">
                                PEÇA
                            </span>
                            <span v-if="epi.unidade != 'UN'">
                                {{ epi.unidade }}
                            </span>
                        </td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(epi)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(epi)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Grupo</label>
                    <select v-model="grupo" class="form-control">
                        <option :value="g" v-for="g in grupos">{{ g.codigoGrupoEpi }} | {{ g.nome }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Categoria</label>
                    <select v-model="categoria" class="form-control">
                        <option :value="c" v-for="c in categorias" v-if="c.grupoEpi.idGrupoEpi == grupo.idGrupoEpi">{{ grupo.codigoGrupoEpi }}.{{ c.codigoCategoria }} | {{ c.nome }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Codigo NR 06</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span v-if="grupo != '' && categoria != ''" class="input-group-text" id="basic-addon1">{{ grupo.codigoGrupoEpi }}.{{ categoria.codigoCategoria }} - </span>
                        </div>
                        <input class="form-control" v-model="codigo"></input>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Unidade</label>
                    <select v-model="unidade" class="form-control">
                        <option value="UN">PEÇA</option>
                        <option value="PAR">PAR</option>
                        <option value="CONJUNTO">CONJUNTO</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Descrição do EPI</label>
                    <input class="form-control" v-model="descricao"></input>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição Detalhada do EPI</label>
                    <input type="" class="form-control" v-model="observacao">
                </div>
            </div>
        </div>
        <!-- <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Saldo</label>
                            <input class="form-control" v-model="saldo" type="input"></input>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Classe</label>
                            <input class="form-control" type="text" v-model="classe">
                        </div>
                    </div>
                </div> -->
        <!--    <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Observações</label>
                        <textarea class="form-control" v-model="observacao" style="height: 80px"></textarea>
                    </div>
                </div>
            </div> -->
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
            epis: '',
            descricao: '',
            codigo: '',
            saldo: '',
            unidade: '',
            grupo: '',
            categoria: '',
            observacao: '',
            categorias: '',
            grupos: '',
            classe: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando capacitações cadastradas',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            destaque: '',
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
                axios.post('/tabelas/epi', {
                    descricao: that.descricao,
                    categoria: that.categoria.idCategoriaEpi,
                    saldo: that.saldo,
                    classe: that.classe,
                    codigo: that.codigo,
                    observacao: that.observacao,
                    unidade: that.unidade,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.epis = response.data;
                        that.nome = '';
                        that.codigo = '';
                        that.categoria = '';
                        that.grupo = '';
                        that.erro = false;
                        that.unidade = '';

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
            this.carregar('Atualizando novo epi...');
            if (this.nome != '' || this.codigo != '') {
                axios.post('/tabelas/epi/update/' + this.id, {
                    descricao: that.descricao,
                    categoria: that.categoria.idCategoriaEpi,
                    saldo: that.saldo,
                    classe: that.classe,
                    codigo: that.codigo,
                    observacao: that.observacao,
                    unidade: that.unidade
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.epis = response.data;
                        that.nome = '';
                        that.codigo = '';
                        that.grupo = '';
                        that.categoria = '';
                        that.unidade = '';
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

            this.descricao = dados.descricao;

            this.saldo = dados.saldo;
            this.classe = dados.classe;
            this.codigo = dados.codigoNr6;
            this.id = dados.idEpi;
            this.observacao = dados.observacao;
            this.unidade = dados.unidade;

            if (dados.categoriaEpi) {
                this.categoria = dados.categoriaEpi;
                this.grupo = dados.categoriaEpi.grupoEpi;
            }

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idEpi;
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
            this.categoria = '';
            this.nome = '';
            this.grupo = '';
            this.unidade = '';
            
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

        axios.get('/tabelas/epi/list').then(function (response) {
            that.epis = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);
        });

        axios.get('/tabelas/epi/categorias/list').then(function (response) {
            that.categorias = response.data;
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
