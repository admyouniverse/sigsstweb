<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.exames" name="exames.xls">
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
                            ID
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Grupo
                        </th>
                        <th>
                            Tabela 27
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="exame in exames">
                        <td style="vertical-align: middle" width="80px"><b>{{ exame.idExame }}</b></td>
                        <td style="text-align:justify">{{ exame.nomeExame }}</td>
                        <td style="text-align:justify">{{ exame.grupoExame }}</td>
                        <td style="text-align:justify">{{ exame.tabela27 }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(exame)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(exame)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do Exame" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Tabela 27</label>
                    <input class="form-control" v-model="tabela27"></input>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input class="form-control" v-model="nome"></input>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Unidade de Medida</label>
                    <input class="form-control" v-model="unidade"></input>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição do Exame</label>
                    <input class="form-control" v-model="descricao"></input>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Sexo</label>
                    <select class="form-control" v-model="sexo">
                        <option value="SELECIONE">Selecione</option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMININO">Feminino</option>
                        <option value="AMBOS">Ambos</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Grupo</label>
                    <select class="form-control" v-model="grupo">
                        <option value="URINA">Urina</option>
                        <option value="SANGUE">Sangue</option>
                        <option value="APARELHO">Aparelho</option>
                        <option value="FEZES">Fezes</option>
                        <option value="IMAGEM">Imagem</option>
                        <option value="MATERIAL COLETADO">Material Coletado</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">H. Máximo</label>
                            <input type="number" v-model="homemMax" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">H. Minimo</label>
                            <input type="number" v-model="homemMin" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">M. Máximo</label>
                            <input type="number" v-model="mulherMax" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">M. Minimo</label>
                            <input type="number" v-model="mulherMin" class="form-control">
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observações</label>
                    <textarea class="form-control" v-model="observacao" style="height: 110px"></textarea>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este CID?</h3>
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
            exames: '',
            nome: '',
            homemMin: '',
            homemMax: '',
            mulherMin: '',
            mulherMax: '',
            codigo: '',
            descricao: '',
            tabela27: '',
            observacao: '',
            sexo: '',
            grupo: '',
            unidade: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando exames cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            destaque: '',
            coluna: '',
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

        salvar: function () {

            this.carregar('Salvando novo exame...');
            var that = this;
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/exames', {
                    nome: that.nome,
                    unidadeMedida: that.unidade,
                    sexo: that.sexo,
                    grupo: that.grupo,
                    tabela27: that.tabela27,
                    observacao: that.observacao,
                    descricao: that.descricao,
                    homemMax: that.homemMax,
                    homemMin: that.homemMin,
                    mulherMax: that.mulherMax,
                    mulherMin: that.mulherMin
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código exame já existente, verifique!')
                    } else {
                        that.exames = response.data;
                        that.sexo = '';
                        that.cuidado = '';
                        that.grupo = '';
                        that.nome = '';
                        that.tabela27 = '';
                        that.observacao = '';
                        that.validade = '';
                        that.erro = false;

                        that.homemMax = '';
                        that.homemMin = '';
                        that.mulherMax = '';
                        that.mulherMin = '';

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
            this.carregar('Atualizando novo exame...');
            if (this.descricao != '') {
                axios.post('/tabelas/exames/update/' + this.id, {
                    nome: that.nome,
                    unidadeMedida: that.unidade,
                    sexo: that.sexo,
                    grupo: that.grupo,
                    tabela27: that.tabela27,
                    observacao: that.observacao,
                    descricao: that.descricao,
                    homemMax: that.homemMax,
                    homemMin: that.homemMin,
                    mulherMax: that.mulherMax,
                    mulherMin: that.mulherMin
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código exame já existente, verifique!')
                    } else {
                        that.exames = response.data;
                        that.sexo = '';
                        that.cuidado = '';
                        that.grupo = '';
                        that.nome = '';
                        that.tabela27 = '';
                        that.observacao = '';
                        that.validade = '';
                        that.erro = false;

                        that.homemMax = '';
                        that.homemMin = '';
                        that.mulherMax = '';
                        that.mulherMin = '';

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

            this.$refs.myModal.show();
            $(this.idTabela).DataTable().destroy();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.id = dados.idExame;
            this.sexo = dados.sexo;
            this.descricao = dados.descricao;
            this.grupo = dados.grupoExame;
            this.nome = dados.nomeExame;
            this.tabela27 = dados.tabela27;
            this.observacao = dados.observacao;
            this.unidade = dados.unidadeMedida;

            this.homemMax = dados.referenciaMaxMasculino;
            this.homemMin = dados.referenciaMinMasculino;
            this.mulherMax = dados.referenciaMaxFeminino;
            this.mulherMin = dados.referenciaMinFeminino;

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idCid;
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
            this.editar = false;

            this.id = '';
            this.descricao = '';
            this.codigo = '';
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
            this.$root.$emit('montou', [this.idTabela]);
        },

        certeza: function () {
            this.carregar('Removendo CID...');
            var that = this;
            axios.get('/tabelas/cid/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {
                    that.cids = response.data;

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
        axios.get('/tabelas/exames/list').then(function (response) {
            that.exames = response.data;
            that.montou = true;
            setTimeout(function () {
                that.carregando = false;
                that.$root.$emit('montou', [that.idTabela]);
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
