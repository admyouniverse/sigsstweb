<template>
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
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
                                Capacitação
                            </th>
                            <th>Data</th>
                            <th>Vencimento</th>
                            <th>Carga Horária</th>
                            <th class="text-center no-sort">Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="capacitacao in capacitacoes">
                            <td style="vertical-align: middle" width="80px"><b>{{ capacitacao.idPessoaCapacitacao }}</b>
                            </td>
                            <td style="text-align:justify" v-if="capacitacao.capacitacao">
                                {{ capacitacao.capacitacao.descricao }}</td>
                            <td>{{ capacitacao.dataCapacitacao | moment("DD/MM/Y") }}</td>
                            <td>{{ capacitacao.dataVencimento | moment("DD/MM/Y") }}</td>
                            <td>{{ capacitacao.cargaHoraria }}</td>
                            <td width="100px" style="vertical-align: middle" class="text-center">
                                <button type="button" @click="remover(capacitacao)"
                                    class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(capacitacao)"
                                    class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <div class="col-md-12 no-padding text-center">
                    <button @click="abrir()" type="button" class="btn btn-success"><i class="fa fa-plus"></i>
                        Adicionar</button>
                </div>
            </div>
        </div>
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true"
            :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da capacitação" ok-title="Salvar"
            cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-1">
                    <div class="form-group">
                        <label for="">ID</label>
                        <input type="text" v-model="capacitacao.idPessoaCapacitacao" disabled class="form-control">
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Capacitação</label>
                        <select v-model="capacitacao.capacitacao" id="" class="form-control">
                            <option v-if="(!capacitacaoEmCapacitacoes(capacitacaodb)) || capacitacaodb.idCapacitacao === atual" v-for="capacitacaodb in capacitacoesdb" :value="capacitacaodb">
                                {{ capacitacaodb.descricao }}</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Data Capacitação</label>
                        <input type="date" v-model="capacitacao.dataCapacitacao" class="form-control">
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Data Vencimento</label>
                        <input type="date" v-model="capacitacao.dataVencimento" class="form-control">
                    </div>
                </div>

                <div class="col-md-1">
                    <div class="form-group">
                        <label for="">C. Hor.</label>
                        <input type="text" v-model="capacitacao.cargaHoraria" class="form-control">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Observação</label>
                        <input type="text" v-model="capacitacao.observacao" class="form-control">
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>
<script>
    export default {
        props: ['pessoa'],
        data() {
            return {
                capacitacao: {
                    idPessoaCapacitacao: 0
                },
                capacitacoes: [],
                capacitacoesdb: [],
                carregando: true,
                mensagem: 'Carregando capacitações cadastradas',
                html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                montou: false,
                atual: [],
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

            abrir: function () {
                this.$refs.myModal.show();
            },

            ok: function (evt) {
                var that = this;
                this.carregar('Salvando...');
                evt.preventDefault();
                axios.post('/pessoas/capacitacao/list/' + this.pessoa.idPessoa, {
                    capacitacao: that.capacitacao
                }).then(function (response) {
                    if(response.data != 'erro') {
                        that.capacitacoes = response.data;
                        that.sucesso('Capacitação salva!');
                        that.fechar();
                    } else {
                        that.alerta('Ocorreu um erro!');
                    }
                });
            },

            preencher: function(capacitacao) {
                this.capacitacao =  Object.assign({}, capacitacao);
                
                this.atual = this.capacitacao.capacitacao.idCapacitacao;

                this.abrir();
            },

            fechar: function () {
                this.capacitacao = {
                    idPessoaCapacitacao: 0
                };

                this.$refs.myModal.hide();

                this.atual = [];
            },

            capacitacaoEmCapacitacoes: function (capacitacao) {
                for (var i = 0; i < this.capacitacoes.length; i++) {
                    if (this.capacitacoes[i].capacitacao && this.capacitacoes[i].capacitacao.idCapacitacao === capacitacao.idCapacitacao) {
                        return true;
                    }
                }
                return false;
            },

            remover: function(capacitacao) {
                this.carregar('Removendo...');
                var that = this;
                axios.get('/pessoas/capacitacao/deletar/' + capacitacao.idPessoaCapacitacao + "/" + this.pessoa.idPessoa).then(function (response) {
                if(response.data != 'erro') {
                    that.capacitacoes = response.data;
                    that.sucesso('Removido com sucesso!');
                } else {
                    that.alerta('Ocorreu um erro!');
                }
                
            });
            }
        },
        mounted() {
            console.log(this.pessoa);

            var that = this;

            this.carregando = true;

            axios.get('/tabelas/capacitacao/list').then(function (response) {
                that.capacitacoesdb = response.data;
            });


            axios.get('/pessoas/capacitacao/list/' + this.pessoa.idPessoa).then(function (response) {
                that.capacitacoes = response.data;
                that.montou = true;
                console.log(that.capacitacoes);
                setTimeout(function () {
                    that.carregando = false;
                }, 200);
            });
        }
    }

</script>
<style lang="scss">

</style>
