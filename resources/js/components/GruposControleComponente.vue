<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.grupos" name="grupos.xls">
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
                        <th style="width: 130px">
                            Identificador
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="grupo in grupos">
                        <td style="vertical-align: middle"><b>{{ grupo.idGrupoControle }}</b></td>
                        <td style="text-align:justify; vertical-align: middle">{{ grupo.nome }}</td>

                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(grupo)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(grupo)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do Grupo de Controle" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" class="form-control" disabled v-model="id">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="nome">
                </div>
            </div>
        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este grupo? </h3>
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
            grupos: '',
            nome: '',
            sigla: '',
            codigo: '',
            nome_detalhada: '',
            tipo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando grupos cadastrados...',
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
            this.carregar('Salvando novo grupo...');
            var that = this;
            if (this.nome != '') {
                axios.post('/tabelas/prontuarios/grupo-controle', {
                    nome: that.nome,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.erro = true;
                    } else {
                        that.grupos = response.data;
                        that.nome = '';
                        that.erro = false;

                        that.fechar();

                        that.sucesso('Grupo de controle salvo com sucesso!');
                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Atualizando grupo...');
            if (this.nome != '') {
                axios.post('/tabelas/prontuarios/grupo-controle/update/' + this.id, {
                    nome: that.nome,
                }).then(function (response) {
                    if (response.data == 'existente') {
                        that.erro = true;
                        that.alerta('Código epi já existente, verifique!')
                    } else {
                        that.grupos = response.data;
						that.nome = '';
						
                        that.erro = false;

                        that.fechar();

                        that.sucesso('Necessidade atualizado com sucesso!');
                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        preencher: function (dados) {

            this.nome = dados.nome;
            this.sigla = dados.sigla;
            this.id = dados.idGrupoControle;
            this.nome_detalhada = dados.nome_detalhada;
            this.tipo = dados.tipo;

            this.editar = true;

            this.abrir();

        },

        abrir: function () {
            // $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        fechar: function () {
			
			
			// this.$root.$emit('montou', [this.idTabela]);
			


            this.$refs.myModal.hide();

            this.nome = '';
            this.editar = false;
            this.id = '';
            this.sigla = '';
        },

        fecharCerteza: function () {
            // this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        remover: function (dados) {

            this.deletar = dados.idGrupoControle;
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
            this.carregar('Removendo grupo de controle...');
            var that = this;
            axios.get('/tabelas/prontuarios/grupo-controle/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {

                    that.grupos = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });
                } else {

                    that.fecharCerteza();
                    that.alerta('Erro ao excluir.');
                }
            });
        }
    },
    mounted() {
        var that = this;
        axios.get('http://200.98.201.236/ServicoSIGSSO/rest/grupos-controle').then(function (response) {
            that.grupos = response.data;
            that.montou = true;
            setTimeout(function () {
                // that.$root.$emit('montou', [that.idTabela]);
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
