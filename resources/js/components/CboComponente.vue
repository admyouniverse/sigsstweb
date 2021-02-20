<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.cbos" name="cbos.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>
        
    </div>
    <div v-if="montou" class="box box-info">

        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="cboTable">
                <thead>
                    <tr>
                        <th>
                            Código
                            
                        </th>
                        <th>
                            Descrição
                      
                        </th>
                        <th class="text-center no-sort">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cbo in cbos">
                        <td style="vertical-align: middle" width="100px"><b>{{ cbo.codigoCbo }}</b></td>
                        <td style="text-align:justify">{{ cbo.descricao }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center no-sort">
                            <button type="button" @click="remover(cbo)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(cbo)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->
        <div v-if="this.busca" class="box-footer clearfix">
            <div class="col-md-6 no-padding text-right pull-right">
                <button @click="voltar" type="button" class="btn btn-primary"><i class="fa fa-undo"></i> Voltar</button>
            </div>
        </div>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do CBO" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Código CBO</label>
                    <input type="text" v-model="codigo" v-mask="'####-##'" class="form-control" name="cbo">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <textarea class="form-control" v-model="descricao" name="descricao" style="height: 120px"></textarea>
                </div>
            </div>
        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este CBO?</h3>
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
            cbos: '',
            descricao: '',
            codigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando CBOs cadastrados',
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
            this.carregar('Salvando novo CBO...');
            var that = this;
            axios.post('/tabelas/cbo', {
                descricao: that.descricao,
                codigo: that.codigo,
            }).then(function (response) {
                console.log(response.data);
                if (response.data == 'existente') {
                    that.codigo = '';
                    that.erro = true;
                    that.alerta('Código já existente, verifique!')
                } else {
                    

                    that.cbos = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.$root.$emit('atualizou', ['#cboTable']);
                        that.sucesso('Salvo com sucesso!');
                    });

                    that.sucesso('Salvo com sucesso!');
                }

            });
        },

        atualizar: function () {
            var that = this;
            axios.post('/tabelas/cbo/update/' + this.id, {
                descricao: that.descricao,
                codigo: that.codigo,
            }).then(function (response) {
                console.log(response.data);
                if (response.data == 'erro') {
                    that.codigo = '';
                    that.erro = true;
                } else {



                    that.cbos = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.$root.$emit('atualizou', ['#cboTable']);
                        that.sucesso('Atualizado com sucesso!');
                    });
                }

            });
        },

        abrir: function () {

            this.$refs.myModal.show();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.descricao = dados.descricao;
            this.codigo = dados.codigoCbo;
            this.id = dados.idCbo;
            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idCbo;
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
            this.descricao = '';
            this.codigo = '';
            this.id = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo CBO...');
            var that = this;
            axios.get('/tabelas/cbo/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {
                    $('#cboTable').DataTable().destroy();

                    that.cbos = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.$root.$emit('montou', ['#cboTable']);
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        },

    },
    mounted() {
        var that = this;
        axios.get('/tabelas/cbo/list').then(function (response) {
            that.cbos = response.data;
            that.montou = true;
            
           that.$nextTick(() => {
               that.$root.$emit('montou', ['#cboTable']);
           });

            setTimeout(function () {
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
