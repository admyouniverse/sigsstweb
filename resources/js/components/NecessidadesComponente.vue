<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.necessidades" name="necessidades.xls">
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
                        <th>
                            Tipo
                        </th>
                        <th class="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="necessidade in necessidades">
                        <td style="vertical-align: middle"><b>{{ necessidade.idNecessidade }}</b></td>
                        <td style="text-align:justify; vertical-align: middle">{{ necessidade.descricao }}</td>
                        <td style="text-align:justify; vertical-align: middle">{{ necessidade.tipo }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(necessidade)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(necessidade)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Necessidade" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" class="form-control" disabled v-model="id">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label>Tipo</label>
                    <select v-model="tipo" class="form-control">
                        <option value="FISICO">Físico</option>
                        <option value="VISUAL">Visual</option>
                        <option value="AUDITIVO">Auditivo</option>
                        <option value="INTELECTUAL">Intelectual</option>
                        <option value="MENTAL">Mental</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="descricao">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição Detalhada</label>
                    <textarea class="form-control" v-model="descricao_detalhada"></textarea>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este necessidade? </h3>
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
            necessidades: '',
            descricao: '',
            sigla: '',
            codigo: '',
            descricao_detalhada: '',
            tipo: '',
            id: '',
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
            this.carregar('Salvando nova necessidade...');
            var that = this;
            if (this.descricao != '' || this.grupo != '') {
                axios.post('/tabelas/prontuarios/necessidades', {
                    descricao: that.descricao,
                    sigla: that.sigla,
                    descricao_detalhada: that.descricao_detalhada,
                    tipo: that.tipo
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.sigla = '';
                        that.erro = true;
                        that.alerta('Código epi já existente, verifique!')
                    } else {
                        that.necessidades = response.data;
                        that.descricao = '';
                        that.sigla = '';
                        that.erro = false;

                        that.fechar();

                        that.sucesso('Necessidade salva com sucesso!');

                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Atualizando necessidade...');
            if (this.descricao != '') {
                axios.post('/tabelas/prontuarios/necessidades/update/' + this.id, {
                    descricao: that.descricao,
                    sigla: that.sigla,
                    tipo: that.tipo,
                    descricao_detalhada: that.descricao_detalhada
                }).then(function (response) {
                    if (response.data == 'existente') {
                        that.sigla = '';
                        that.erro = true;
                        that.alerta('Código epi já existente, verifique!')
                    } else {
                        that.necessidades = response.data;
                        that.descricao = '';
                        that.sigla = '';

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

            this.descricao = dados.descricao;
            this.sigla = dados.sigla;
            this.id = dados.idNecessidade;
            this.descricao_detalhada = dados.descricao_detalhada;
            this.tipo = dados.tipo;

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
            this.sigla = '';
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        remover: function (dados) {

            this.deletar = dados.idNecessidade;
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
            this.carregar('Removendo necessidade causador...');
            var that = this;
            axios.get('/tabelas/prontuarios/necessidades/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {

                    that.necessidades = response.data;

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
        axios.get('/tabelas/prontuarios/necessidades/list').then(function (response) {
            that.necessidades = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        axios.get('/tabelas/cid/list').then(function (response) {
            that.cids = response.data;
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
