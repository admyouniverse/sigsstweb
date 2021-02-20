<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.ambientes" name="ambientes.xls">
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
                        <th>ID Origem</th>
                        <th>
                            Descrição
                        </th>
                        <th>ID Secundário</th>
                        <th>Estabelecimento</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ambiente in ambientes">
                        <td style="vertical-align: middle" width="100px"><b>{{ ambiente.idAmbienteTrabalho }}</b></td>
                        <td>{{ ambiente.idOrigem }}</td>
                        <td style="text-align:justify">{{ ambiente.nomeAmbienteTrabalho }}</td>
                        <td>{{ ambiente.subCodigo }}</td>
                        <td>{{ camelize(ambiente.estabelecimento) }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(ambiente)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(ambiente)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" :title="'Detalhes do Ambiente de Trabalho | ' + nome" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">ID</label>
                    <input type="text" v-model="codigo" disabled class="form-control" name="ambiente">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">ID de Origem</label>
                    <input type="text" class="form-control" v-model="origem" name="ambiente">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID secundário</label>
                    <input type="text" class="form-control" v-model="subcodigo">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <select class="form-control" v-model="estabelecimento">
                        <!-- <option value="SELECIONE">N/A</option> -->
                        <option value="PRÓPRIO">1 - Próprio</option>
                        <option value="TERCEIROS">2 - Terceiros</option>
                    </select>
                </div>
            </div>
            <div v-if="estabelecimento == 'TERCEIROS'" class="col-md-4">
                <div class="form-group">
                    <label for="">CNPJ Terceiro</label>
                    <input type="text" class="form-control" v-model="terceiro" v-mask="'##.###.###/####-##'">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Nome do Ambiente</label>
                    <input type="text" v-model="nome" class="form-control" name="ambiente">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observacao</label>
                    <input type="text" class="form-control" v-model="observacao">
                </div>
            </div>
        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este Ambiente de Trabalho?</h3>
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
            ambientes: '',
            origem: '',
            estabelecimento: '',
            nome: '',
            observacao: '',
            terceiro: '',
            codigo: '',
            subcodigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando Ambiente de Trabalho cadastrados',
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
        camelize(str) {
            if (str == 'PRÓPRIO') {
                return 'Próprio';
            } else if (str == 'TERCEIROS') {
                return 'Terceiros';
            } else if (str == 'SERVIÇOS_TERCEIROS') {
                return 'Serviços Terceiros';
                m
            }
        },

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
            this.carregar('Salvando novo Ambiente de Trabalho...');
            var that = this;
            axios.post('/empresas/ambientes-de-trabalho', {
                nome: that.nome,
                origem: that.origem,
                estabelecimento: that.estabelecimento,
                terceiro: that.terceiro,
                observacao: that.observacao,
                codigo: that.codigo,
                subcodigo: that.subcodigo,
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'existente') {
                    that.codigo = '';
                    that.erro = true;
                    that.alerta('Código já existente, verifique!')
                } else {
                    that.ambientes = response.data;
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
            axios.post('/empresas/ambientes-de-trabalho/update/' + this.id, {
                nome: that.nome,
                origem: that.origem,
                estabelecimento: that.estabelecimento,
                terceiro: that.terceiro,
                observacao: that.observacao,
                codigo: that.codigo,
                subcodigo: that.subcodigo
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'erro') {
                    that.codigo = '';
                    that.erro = true;
                } else {
                    that.ambientes = response.data;
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

            this.nome = dados.nomeAmbienteTrabalho;
            this.codigo = dados.idAmbienteTrabalho;
            this.id = dados.idAmbienteTrabalho;
            this.origem = dados.idOrigem;
            this.subcodigo = dados.subCodigo;
            this.estabelecimento = dados.estabelecimento;
            this.terceiro = dados.inscricaoTerceiro;
            this.observacao = dados.observacao;
            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idAmbienteTrabalho;
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
            this.nome = '';
            this.origem = '';
            this.estabelecimento = '';
            this.subcodigo = '';
            this.terceiro = '';
            this.observacao = '';
            this.codigo = '';
            this.id = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo Ambiente de Trabalho...');
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.ambientes = response.data;

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
        axios.get('/empresas/ambientes-de-trabalho/list').then(function (response) {
            that.ambientes = response.data;
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
