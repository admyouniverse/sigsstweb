<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.cnaes" name="cnaes.xls">
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
                        <th @click="ordenar('grau')" style="width: 150px" v-bind:class="{'selecionado': this.coluna == 'grau'}">
                            Grau de Risco
                        </th>
                        <th @click="ordenar('rat')" v-bind:class="{'selecionado': this.coluna == 'rat'}">
                            RAT
                        </th>
                        <th @click="ordenar('cid')" v-bind:class="{'selecionado': this.coluna == 'cid'}">
                            CID X NTEP
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cnae in cnaes">
                        <td style="vertical-align: middle; width: 100px"><b>{{ cnae.codigoCnae }}</b></td>
                        <td style="text-align:justify">{{ cnae.descricao }}</td>
                        <td style="text-align:justify; width: 130px ">{{ cnae.grauRisco }}</td>
                        <td style="text-align:justify; width: 70px" v-if="cnae.rat">{{ cnae.rat }}%</td>
                        <td style="text-align:justify; width: 70px" v-if="!cnae.rat">-</td>
                        <td style="text-align:justify">{{ cnae.cidNted }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(cnae)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(cnae)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do CNAE" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código CNAE</label>
                    <input type="text" v-model="codigo" v-mask="'####-#/##'" class="form-control" name="cnae">
                    <!-- <span class="help-block">No máximo 7 caracteres. Deve ser único.</span> -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <textarea class="form-control" v-model="descricao" name="descricao" style="height: 80px"></textarea>
                    <span class="help-block">No máximo 255 caracteres.</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Grau de Risco</label>
                    <select v-model="grau" class="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">RAT</label>
                    <select v-model="rat" class="form-control">
                        <option value="1">1%</option>
                        <option value="2">2%</option>
                        <option value="3">3%</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">CID X NTEP</label>
                    <textarea class="form-control" v-model="cidnted" style="height: 80px"></textarea>
                    <span class="help-block">No máximo 500 caracteres.</span>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este CNAE?</h3>
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
            cnaes: '',
            descricao: '',
            codigo: '',
            grau: 0,
            rat: '',
            cidnted: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando CNAES cadastrados',
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

            this.carregar('Salvando novo CNAE...');
            var that = this;
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/cnae', {
                    descricao: that.descricao,
                    codigo: that.codigo,
                    grau: that.grau,
                    cidnted: that.cidnted,
                    rat: that.rat,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código CNAE já existente, verifique!')
                    } else {
                        that.cnaes = response.data;
                        that.descricao = '';
                        that.codigo = '';
                        that.grau = '';
                        that.cidnted = '';
                        that.rat = '';
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
            this.carregar('Atualizando novo cnae...');
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/tabelas/cnae/update/' + this.id, {
                    descricao: that.descricao,
                    codigo: that.codigo,
                    grau: that.grau,
                    cidnted: that.cidnted,
                    rat: that.rat,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código CNAE já existente, verifique!')
                    } else {
                        that.cnaes = response.data;
                        that.descricao = '';
                        that.codigo = '';
                        that.grau = '';
                        that.cidnted = '';
                        that.rat = '';
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
            this.codigo = dados.codigoCnae;
            this.id = dados.idCnae;
            this.grau = dados.grauRisco;
            this.cidnted = dados.cidNted;
            this.rat = dados.rat;

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idCnae;
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
            this.id = '';
            this.grau = '';
            this.cidnted = '';
            this.rat = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo CNAE...');
            var that = this;
            axios.get('/tabelas/cnae/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.cnaes = response.data;

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
        axios.get('/tabelas/cnae/list').then(function (response) {
            that.cnaes = response.data;
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
