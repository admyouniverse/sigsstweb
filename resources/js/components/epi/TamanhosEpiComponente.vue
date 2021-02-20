<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.tamanhos" name="tamanhos.xls">
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
                            Descrição
                        </th>
                        <th>
                            Observação
                        </th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tamanho in tamanhos">
                        <td style="vertical-align: middle; width: 100px"><b>{{ tamanho.idTamanho }}</b></td>
                        <td style="text-align:justify">{{ tamanho.descricao }}</td>
                        <td style="text-align:justify;">{{ tamanho.observacao }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(tamanho)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(tamanho)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->

    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Cor EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" disabled v-model="tamanho.idTamanho" class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>Descrição</label>
                    <input type="text" v-model="tamanho.descricao" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Observação</label>
                    <input type="text" v-model="tamanho.observacao" class="form-control">
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta tamanho?</h3>
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
            tamanhos: [],
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando tamanhos cadastradas...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
            idTabela: '#tabelaListagem',
            tamanho: {
                idTamanho: 0,
                descricao: '',
                observacao: ''
            }
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
            this.carregar('Salvando nova tamanho...');

            var that = this;

            axios.post('/tabelas/epi/tamanho', {
                tamanho: that.tamanho,
            }).then(function (response) {
                that.tamanhos = response.data;
                that.$nextTick(() => {
                    that.fechar();
                    that.sucesso('Salvo com sucesso!');
                });
            });

        },

        atualizar: function () {

            var that = this;
            this.carregar('Atualizando nova tamanho...');
            if (this.nome != '' || this.codigo != '') {
                axios.post('/tabelas/epi/tamanhos/' + this.id, {
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
                        that.tamanhos = response.data;
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

            this.tamanho = {
                idTamanho: 0,
                descricao: '',
                observacao: ''
            }
            this.$refs.myModal.show();

        },

        preencher: function (dados) {
            this.carregar('Carregando dados...');
            
            console.log(dados);

            this.tamanho = dados;

            this.editar = true;
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();
            
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idTamanho;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();

        },

        ok: function (evt) {
            evt.preventDefault();
           
                this.salvar();
           
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
            this.carregar('Removendo tamanho...');
            var that = this;
            axios.get('/tabelas/epi/tamanho/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.tamanhos = response.data;
                    
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
        axios.get('http://200.98.201.236/ServicoSIGSSO/rest/tamanhos').then(function (response) {
            that.tamanhos = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });
    }
}
</script>
