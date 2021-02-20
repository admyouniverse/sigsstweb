<template>
<div class="row">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="col-md-12">
        <div class="box box-default">
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Capacitacao</th>
                            <th>Tipo</th>
                            <th>Intervalo (M)</th>
                            <th>Carga Horária</th>
                            <th style="width: 150px">Ações</th>
                        </tr>

                        <tr v-for="capacit in capacitacoes">
                            <td>
                                {{ capacit.idEmpresaCapacitacao }}
                            </td>
                            <td v-if="capacit.capacitacao">
                                {{ capacit.capacitacao.descricao }}
                            </td>
                            <td>
                                {{ capacit.tipo }}
                            </td>
                            <td>
                                <span v-if="capacit.tipo == 'PERIODICO'">
                                    {{ capacit.intervalo }}
                                </span>
                                <span v-if="capacit.tipo != 'PERIODICO'">
                                    NA
                                </span>
                            </td>
                            <td>
                                {{ capacit.cargaHr }}
                            </td>
                            <td>
                                <button @click="preencher(capacit)" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                <button @click="excluir(capacit)" class="btn btn-outline-danger btn-sm"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-12 text-center">
        <br>
        <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
            Adicionar</button>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Capacitação" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="empresaCapacitacao.idEmpresaCapacitacao" class="form-control">
                </div>
            </div>

            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Descricao</label>
                    <select v-model="empresaCapacitacao.capacitacao" class="form-control">
                        <option :value="capacitacaobanco" v-for="capacitacaobanco in capacitacoesbanco" v-if="!capacitacaoEmCapacitacoes(capacitacaobanco) || capacitacaobanco.idCapacitacao === atual">
                            {{ capacitacaobanco.descricao }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Tabela 29</label>
                    <input type="text" v-model="empresaCapacitacao.capacitacao.tabela29" disabled class="form-control">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <input type="text" v-model="empresaCapacitacao.capacitacao.tipo" disabled class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Grupo de Capacitação</label>
                    <input type="text" v-model="empresaCapacitacao.capacitacao.grupoCapacitacao" disabled class="form-control">
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Capacitação Pai</label>
                    <input type="text" v-if="empresaCapacitacao.capacitacao.capacitacaoPai" v-model="empresaCapacitacao.capacitacao.capacitacaoPai.descricao" disabled class="form-control">
                    <input type="text" v-if="!empresaCapacitacao.capacitacao.capacitacaoPai" disabled class="form-control" value="N/A">
                </div>
            </div>

            <div :class="{'col-md-3': empresaCapacitacao.tipo != 'PERIODICO', 'col-md-2': empresaCapacitacao.tipo == 'PERIODICO'}">
                <div class="form-group">
                    <label for="">Carga Horária</label>
                    <input type="text" class="form-control" v-model="empresaCapacitacao.cargaHr">
                </div>
            </div>

            <div :class="{'col-md-3': empresaCapacitacao.tipo != 'PERIODICO', 'col-md-2': empresaCapacitacao.tipo == 'PERIODICO'}">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <select v-model="empresaCapacitacao.tipo" class="form-control">
                        <option value="SELECIONE" disabled>--- Selecione ---</option>
                        <option value="INICIAL">Inicial</option>
                        <option value="PERIODICO">Periodico</option>
                        <option value="EVENTUAL">Eventual</option>
                        <option value="OUTROS">Outros</option>
                        <option value="RECICLAGEM" v-if="empresaCapacitacao.capacitacao.capacitacaoPai">Reciclagem</option>
                    </select>
                </div>
            </div>

            <div class="col-md-2" v-if="empresaCapacitacao.tipo == 'PERIODICO'">
                <div class="form-group">
                    <label for="">Intervalo (M)</label>
                    <input type="text" class="form-control" v-model="empresaCapacitacao.intervalo">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">ID de Origem</label>
                    <input type="text" class="form-control">
                </div>
            </div>

            <div class="col-md-8">
                <div class="form-group">
                    <label for="">Descrição Completa</label>
                    <input type="text" disabled v-model="empresaCapacitacao.capacitacao.descricaoCompleta" class="form-control">
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Conteúdo Programático</label>
                    <textarea v-model="empresaCapacitacao.conteudoProgramatico" class="form-control"></textarea>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta capacitação?</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-default btn-lg" data-dismiss="modal" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
            </div>
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
            </div>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            capacitacoes: [],
            capacitacoesbanco: [],
            atual: '',
            deletar: '',
            empresaCapacitacao: {
                idEmpresaCapacitacao: 0,
                capacitacao: {
                    tabela29: ''
                },
                cargaHr: '',
                tipo: 'SELECIONE',
                conteudoProgramatico: ''
            },
        }
    },

    methods: {
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        atualizar: function () {
            var that = this;
            this.carregar('Salvando...');
            //console.log(this.empresaCapacitacao);
            axios.post('/capacitacao/' + that.empresa.idEmpresa, {
                capacitacao: that.empresaCapacitacao
            }).then(function (response) {
                that.capacitacoes = response.data;
                that.$nextTick(() => {
                    that.sucesso("Capacitação atualizado.");
                    that.fechar();
                });
            });
        },

        salvar: function () {
            this.carregar('Salvando...');
            var that = this;
            //console.log(this.empresaCapacitacao);
            axios.post('/capacitacao/' + that.empresa.idEmpresa, {
                capacitacao: that.empresaCapacitacao
            }).then(function (response) {
                that.capacitacoes = response.data;
                that.$nextTick(() => {
                    that.sucesso("Capacitação incluído.");
                    that.fechar();
                });
            });
        },
        alerta: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 1000);
        },
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        excluir(dados) {
            this.deletar = dados.idEmpresaCapacitacao;
            this.$refs.modalCerteza.show();
        },

        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },
        certeza: function () {
            this.$refs.modalCerteza.hide();
            this.carregar('Removendo capacitação...');
            var that = this;
            axios.get('/capacitacao/' + that.empresa.idEmpresa + '/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.capacitacoes = response.data;

                    that.$nextTick(() => {
                        // that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        // that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        },

        preencher: function (dados) {
            this.editar = true;
            this.empresaCapacitacao = Object.assign({}, dados);
            this.atual = this.empresaCapacitacao.capacitacao.idCapacitacao;
            this.$refs.myModal.show();
        },

        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.empresaCapacitacao = {
                idEmpresaCapacitacao: 0,
                capacitacao: {
                    tabela29: ''
                },
                cargaHr: '',
                tipo: 'SELECIONE',
                conteudoProgramatico: ''
            };

            this.$refs.myModal.hide();
        },

        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 800);
        },

        abrir: function () {
            this.empresaCapacitacao = {
                idEmpresaCapacitacao: 0,
                capacitacao: {
                    tabela29: ''
                },
                cargaHr: '',
                tipo: 'SELECIONE',
                conteudoProgramatico: ''
            };

            this.$refs.myModal.show();
        },

        capacitacaoEmCapacitacoes: function (capacitacao) {
            for (var i = 0; i < this.capacitacoes.length; i++) {
                if (this.capacitacoes[i].capacitacao.idCapacitacao === capacitacao.idCapacitacao) {
                    //console.log(this.capacitacoes[i].capacitacao);
                    //console.log(capacitacao);
                    return true;
                }
            }

            return false;
        }

    },

    mounted() {

        var that = this;
        //console.log(this.empresa);
        axios.get('/capacitacao/' + that.empresa.idEmpresa).then(function (response) {
            that.capacitacoes = response.data;
        });

        axios.get('/tabelas/capacitacao/list/').then(function (response) {
            that.capacitacoesbanco = response.data;
            //console.log(that.capacitacoesbanco);
            that.sucesso('Carregadas as capacitações');
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
