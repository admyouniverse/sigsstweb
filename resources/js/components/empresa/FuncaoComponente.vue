<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.funcoes" name="funcoes.xls">
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
                        <th>Código RH</th>
                        <th>
                            Descrição
                        </th>
                        <th>Descrição RH</th>
                        <th>CBO</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="funcao in funcoes">
                        <td style="vertical-align: middle" width="100px"><b>{{ funcao.idFuncao }}</b></td>
                        <td>{{ funcao.idRH }}</td>
                        <td style="text-align:justify">{{ funcao.cargo }}</td>
                        <td>{{ funcao.descricaoRH }}</td>
                        <td>{{ funcao.cbo.codigoCbo }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(funcao)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(funcao)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do função" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código</label>
                    <input type="text" v-model="codigo" disabled class="form-control" name="funcao">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código RH</label>
                    <input type="text" v-model="origem" class="form-control" name="funcao">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cargo</label>
                    <input type="" class="form-control" v-model="descricao" name="">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">CBO</label>
                    <select class="form-control" v-model="cbo">
                        <option v-for="cbo in cbos" :value="cbo">{{ cbo.codigoCbo }}</option>
                    </select>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">CBO</label>
                    <textarea class="form-control" readonly> {{ cbo.descricao }}</textarea>
                </div>

                <div class="form-group">
                    <label for="">Descrição RH</label>
                    <textarea v-model="descricaorh" rows="10" class="form-control"></textarea>
                </div>

            </div>
        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta função?</h3>
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
            funcoes: '',
            descricao: '',
            codigo: '',
            cbos: [],
            descricaorh: '',
            origem: '',
            cbo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando funcões cadastrados',
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
            this.carregar('Salvando nova função...');
            var that = this;
            axios.post('/empresas/funcao', {
                descricao: that.descricao,
                codigo: that.codigo,
                origem: that.origem,
                descricaorh: that.descricaorh,
                cbo: that.cbo.idCbo
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'existente') {
                    that.codigo = '';
                    that.erro = true;
                    that.alerta('Código já existente, verifique!')
                } else {
                    that.funcoes = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Salvo com sucesso!');
                    });

                    that.sucesso('Salvo com sucesso!');
                }

            });
        },

        atualizar: function () {
            var that = this;
            axios.post('/empresas/funcao/update/' + this.id, {
                descricao: that.descricao,
                codigo: that.codigo,
                origem: that.origem,
                descricaorh: that.descricaorh,
                cbo: that.cbo.idCbo
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'erro') {
                    that.codigo = '';
                    that.erro = true;
                } else {
                    that.funcoes = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Atualizado com sucesso!');
                    });
                }

            });
        },

        abrir: function () {
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.descricao = dados.cargo;
            this.codigo = dados.idFuncao;
            this.id = dados.idFuncao;
            this.cbo = dados.cbo;
            this.descricaorh = dados.descricaoRH;
            this.origem = dados.idRH;

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idFuncao;
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

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo função...');
            var that = this;
            axios.get('/empresas/funcao/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.funcoes = response.data;

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
        axios.get('/empresas/funcao/list').then(function (response) {
            that.funcoes = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        axios.get('/tabelas/cbo/list').then(function (response) {
            that.cbos = response.data;
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
