<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <div v-if="montou" class="box box-info">

        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th class="text-center" >
                            Código
                           
                        </th>
                        <th class="text-center">Data Inicial</th>
                        <th class="text-center">Data Final</th>
                    </tr>
                    <tr v-for="historico in historicos">
                        <td class="text-center" style="vertical-align: middle" width="80px"><b>{{ historico.idEmpresaHistorico }}</b></td>
                        <td class="text-center">{{ historico.dataIni | moment("DD/MM/Y") }}</td>
                        <td v-if="historico.dataFim" class="text-center">{{ historico.dataFim | moment("DD/MM/Y") }}</td>
                        <td v-if="!historico.dataFim" class="text-center"><button @click="desativar()" class="btn btn-sm btn-outline-danger">Desativar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="box-footer clearfix">
            <div v-if="historicos[historicos.length - 1].dataFim" class="col-md-12 no-padding text-center">
                <button @click="ativar()" type="button" class="btn btn-success"><i class="fa fa-block"></i> Ativar Empresa</button>
            </div>
        </div>
    </div>
    <b-modal size="sm" centered :no-close-on-backdrop="true" :hide-header="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="" ok-title="Ok" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Data</label>
                    <input type="date" class="form-control" v-model="dataFinal">
                </div>
            </div>
        </div>
    </b-modal>
</section>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            historicos: '',
            erro: false,
            dataFinal: '',
            editar: false,
            carregando: true,
            mensagem: 'Carregando histórico...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
            idTabela: '#tabelaListagem',
            tipo: 'desativar',
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
        desativar: function () {
            this.tipo = 'desativar';
            this.abrir();
        },
        ativar: function () {
            this.tipo = 'ativar';
            this.abrir();
        },
        salvar: function () {

            this.carregar('Salvando...');
            var that = this;
            if (this.dataFinal) {
                axios.post('/empresas/historico/', {
                    empresa: that.empresa,
                    dataFinal: that.dataFinal,
                    tipo: that.tipo
                }).then(function (response) {
                    //console.log(response.data);
                    if (response.data == 'erro') {
                        // that.codigo = '';
                        // that.erro = true;
                        that.alerta('Erro ao salvar!')
                    } else {

                        that.historicos = response.data;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });
                    }
                });
            } else {
                that.alerta('Preencha a data final!')
            }
        },
        abrir: function () {

            this.$refs.myModal.show();

        },
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.salvar();
            } else {
                this.salvar();
            }
        },
        fechar: function () {
            this.$refs.myModal.hide();
        },
        ordenar: function (coluna) {
            if (this.coluna == coluna) {
                this.ordem = !this.ordem;
            } else {
                this.ordem = true;
            }

            this.coluna = coluna;

            if (coluna == 'codigo') {

                if (this.ordem == true) {

                    this.eventos.sort(function (a, b) {

                        if (a.idEvento > b.idEvento) {
                            return 1;
                        }

                        if (a.idEvento < b.idEvento) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function (a, b) {

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

                    this.eventos.sort(function (a, b) {

                        if (a.descricao > b.descricao) {
                            return 1;
                        }

                        if (a.descricao < b.descricao) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function (a, b) {

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
        pesquisar: function () {
            if (this.termo != '' && this.termo != ' ') {
                this.carregar('Realizando a busca...');
                //console.log(this.termo);
                //console.log(this.selecionado);

                var that = this;

                axios.get('/empresas/eventos/buscar/' + that.selecionado + "/" + that.termo).then(function (response) {

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
        voltar: function () {
            var that = this;
            this.carregar('Recuperando todos os itens...');
            axios.get('/empresas/eventos/list').then(function (response) {
                that.eventos = response.data;
                that.sucesso('Todas os itens recuperados com sucesso!');
                that.busca = false;
                that.termo = '';
            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/historico/' + that.empresa.idEmpresa).then(function (response) {
            //console.log(response.data);
            that.historicos = response.data;
            that.montou = true;
            setTimeout(function () {
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
