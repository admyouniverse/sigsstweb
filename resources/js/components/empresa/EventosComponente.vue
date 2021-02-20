<template> 
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div class="row" style="margin-bottom: 15px; margin-top: 10px">
            <div class="col-md-6">
                <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
                <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.eventos" name="eventos.xls">
                    <i class="far fa-save"></i> Exportar
                </download-excel>
            </div>
            <div v-if="this.busca" class="col-md-6 text-right">
                <button @click="voltar" type="button" class="btn btn-primary btn-sm"><i class="fa fa-undo"></i> Voltar</button>
            </div>
        </div>
        <div v-if="montou" class="box box-info">
            <div class="box-header">
                <div class="col-md-12 no-padding">
                    <div class="input-group" style="width: 100%;">
                        <div class="input-group-prepend">
                            <select v-model="selecionado" class="form-control">
                                <option value="codigo">Código</option>
                                <option value="descricao">Descrição</option>
                            </select>
                        </div>
                        <input type="text" @keyup.enter="pesquisar" name="table_search" v-model="termo" class="form-control pull-right" placeholder="Pesquisar">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary" @click="pesquisar"><i class="fa fa-search"></i> Pesquisar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th >
                                Código
                                
                                
                            </th>
                            <th >
                                Descrição
                                
                                
                            </th>
                            <th class="text-center no-sort">Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="evento in eventos">
                            <td style="vertical-align: middle" width="80px"><b>{{ evento.idEvento }}</b></td>
                            <td style="text-align:justify">{{ evento.descricao }}</td>
                            <td width="100px" style="vertical-align: middle" class="text-center">
                                <button type="button" @click="remover(evento)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(evento)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
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
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do evento" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group" v-bind:class="{'has-error':erro}">
                        <label for="">Código</label>
                        <input type="text" v-model="codigo" disabled class="form-control" name="evento">
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
                    <h3>Tem certeza que deseja excluir este evento?</h3>
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
            eventos: '',
            descricao: '',
            codigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando itens cadastrados',
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
        carregar: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 800);
        },

        alerta: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 1000);
        },

        salvar: function() {

            this.carregar('Salvando novo evento...');
            var that = this;
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/empresas/eventos', {
                    descricao: that.descricao,
                    codigo: that.codigo,
                }).then(function(response) {
                    //console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código evento já existente, verifique!')
                    } else {
                        that.eventos = response.data;
                        that.descricao = '';
                        that.codigo = '';
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

        atualizar: function() {

            var that = this;
            this.carregar('Atualizando novo evento...');
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/empresas/eventos/update/' + this.id, {
                    descricao: that.descricao,
                    codigo: that.codigo,
                }).then(function(response) {
                    //console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código evento já existente, verifique!')
                    } else {
                        that.eventos = response.data;
                        that.descricao = '';
                        that.codigo = '';
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

        abrir: function() {
$(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        preencher: function(dados) {

            this.carregar('Carregando dados...');

            this.descricao = dados.descricao;
            this.codigo = dados.idEvento;
            this.id = dados.idEvento;

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function(dados) {

            this.deletar = dados.idEvento;
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();

        },

        ok: function(evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        fechar: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;

            this.id = '';
            this.descricao = '';
            this.codigo = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function() {
            this.carregar('Removendo evento...');
            var that = this;
            axios.get('/empresas/eventos/remover/' + this.deletar).then(function(response) {

                if (response.data != 'erro') {

                    that.eventos = response.data;

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
        },

        ordenar: function(coluna) {
            if (this.coluna == coluna) {
                this.ordem = !this.ordem;
            } else {
                this.ordem = true;
            }

            this.coluna = coluna;

            if (coluna == 'codigo') {

                if (this.ordem == true) {

                    this.eventos.sort(function(a, b) {

                        if (a.idEvento > b.idEvento) {
                            return 1;
                        }

                        if (a.idEvento < b.idEvento) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function(a, b) {

                        if (a.idEvento > b.idEvento) {
                            return -1;
                        }

                        if (a.idEvento < b.idEvento) {
                            return 1;
                        }

                        return 0;

                    });
                }

            } else if (coluna == 'descricao') {
                if (this.ordem == true) {

                    this.eventos.sort(function(a, b) {

                        if (a.descricao > b.descricao) {
                            return 1;
                        }

                        if (a.descricao < b.descricao) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function(a, b) {

                        if (a.descricao > b.descricao) {
                            return -1;
                        }

                        if (a.descricao < b.descricao) {
                            return 1;
                        }

                        return 0;

                    });
                }
            }
        },

        pesquisar: function() {
            if (this.termo != '' && this.termo != ' ') {
                this.carregar('Realizando a busca...');
                //console.log(this.termo);
                //console.log(this.selecionado);

                var that = this;

                axios.get('/empresas/eventos/buscar/' + that.selecionado + "/" + that.termo).then(function(response) {

                    if (response.data.length > 0) {

                        that.eventos = response.data;
                        that.sucesso('Encontramos ' + response.data.length + ' resultado(s).');
                        that.busca = true;

                    } else {

                        that.alerta('Nenhum resultado nesta busca');
                        that.busca = false;

                    }

                });
            }

        },

        voltar: function() {
            var that = this;
            this.carregar('Recuperando todos os itens...');
            axios.get('/empresas/eventos/list').then(function(response) {
                that.eventos = response.data;
                that.sucesso('Todas os itens recuperados com sucesso!');
                that.busca = false;
                that.termo = '';
            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/eventos/list').then(function(response) {
            that.eventos = response.data;
            that.montou = true;
            setTimeout(function() {
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
