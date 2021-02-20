<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div>
        <b-card class="sig" no-body>
            <b-tabs card>
                <b-tab title="Detalhes" active>
                    <b-card-text>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">ID</label>
                                    <input v-model="ambienteppra.idPpraAmbienteTrabalho" type="text" class="form-control" disabled>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="">ID Origem</label>
                                    <input type="text" v-model="ambiente.idOrigem" class="form-control" disabled>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="">Nome</label>
                                    <input type="text" v-model="ambiente.nomeAmbienteTrabalho" class="form-control" disabled>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Estabelecimento</label>
                                    <select name="" v-model="ambiente.estabelecimento" class="form-control" id="" disabled>
                                        <option value="SELECIONE"> </option>
                                        <option value="TERCEIROS">TERCEIROS</option>
                                        <option value="PRÓPRIO">PROPRIO</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Inscrição Terceiro</label>
                                    <input type="text" v-model="ambiente.inscricaoTerceiro" class="form-control" disabled>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">Subcódigo</label>
                                    <input type="text" v-model="ambiente.subCodigo" class="form-control" disabled>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Observação</label>
                                    <textarea class="form-control" v-model="ambienteppra.observacao" cols="30" rows="3"></textarea>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group text-right">
                                    <button class="btn btn-success"><i class="fa fa-floppy-o"></i> Salvar</button>
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>

                <b-tab title="Cargos">
                    <b-card-text>
                        <ppra-funcoes :ppra="ppra" :empresa="empresa" :ambiente="ambienteppra"></ppra-funcoes>
                    </b-card-text>
                </b-tab>

                <b-tab title="Exames" lazy>
                    <b-card-text>
                        <ppra-ambiente-exames :ppra="ppra" :empresa="empresa" :ambiente="ambienteppra">
                        </ppra-ambiente-exames>
                    </b-card-text>
                </b-tab>

                <b-tab title="Fatores de Risco" lazy>
                    <b-card-text>
                        <ppra-fatores :ppra="ppra" :empresa="empresa" :ambiente="ambienteppra"></ppra-fatores>
                    </b-card-text>
                </b-tab>

                <b-tab @click="getEpis()" title="EPI">
                    <b-card-text>
                        <div class="row">
                            <div class="col-md-12">
                                <table class="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>EPI</th>
                                            <th>Unidade</th>
                                            <th>Quantidade</th>
                                            <th>Validade (Dias)</th>
                                            <th>Uso</th>

                                        </tr>
                                        <tr v-for="epi in epis">
                                            <td>{{ epi.idAmbienteCadastroEpi }}</td>
                                            <td>{{ epi.cadastroEpi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.cadastroEpi.epi.categoriaEpi.codigoCategoria }}
                                                - {{ epi.cadastroEpi.epi.codigoNr6 }} |
                                                {{ epi.cadastroEpi.epi.descricao }}</td>
                                            <td>
                                                <span v-if="epi.cadastroEpi.epi.unidade == 'UN'">
                                                    PEÇA
                                                </span>
                                                <span v-if="epi.cadastroEpi.epi.unidade != 'UN'">
                                                    {{ epi.cadastroEpi.epi.unidade }}
                                                </span>
                                            </td>
                                            <td>{{ epi.quantidade }}</td>
                                            <td>{{ epi.validade }}</td>
                                            <td>{{ epi.uso }}</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                        </div>
                    </b-card-text>
                </b-tab>

                <b-tab @click="getCapacitacoes()" title="Capacitações">
                    <b-card-text>
                        <div class="row">
                            <div class="col-md-12">
                                <table class="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>Capacitação</th>
                                            <th>Periodicidade</th>
                                            <th>Observação</th>

                                        </tr>
                                        <tr v-for="capacitacao in capacitacoes">
                                            <td>{{ capacitacao.idAmbienteEmpresaCapacitacao }}</td>
                                            <td>{{ capacitacao.empresaCapacitacao.capacitacao.descricao }}</td>
                                            <td>{{ capacitacao.periodicidade }}</td>
                                            <td>{{ capacitacao.observacao }}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</section>
</template>

<script>
export default {
    props: ['ppra', 'empresa', 'ambienteppra', 'ambiente'],
    data() {
        return {
            selecionado: null,
            carregando: true,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            editar: false,
            funcoes: [],
            funcao: {},
            epis: [],
            asos: [],
            aso: {},
            exibir: false,
            capacitacoes: []
        }
    },
    methods: {

        preencheAmbiente: function () {
            if (this.selecionado) {
                this.ambiente = this.selecionado;
                console.log(this.ambiente);
            } else {
                this.ambiente = {};
            }

            this.ambiente.idPpraAmbienteTrabalho = 0;
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
            }, 5000);
        },

        abrir: function () {
            this.$refs.myModal.show();
        },

        fechar: function () {
            this.editar = false;
            this.ambiente = {
                idPpraAmbienteTrabalho: 0
            };

            this.$refs.myModal.hide();
        },
        preencher(dados) {
            this.ambiente = Object.assign({}, dados);
            this.editar = true;
            this.$refs.myModal.show();
        },

        salvar: function (evt) {
            var that = this;
            evt.preventDefault();

            that.mensagem = 'Salvando ambiente...';
            that.carregando = true;
            axios.post('/gro/ambiente', {
                ppra: that.ppra,
                editar: that.editar,
                ambiente: that.ambiente
            }).then(function (response) {
                if (response.data != 'erro') {
                    // console.log(response.data);
                    that.ambientes = response.data;
                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Salvo com sucesso!');
                    });

                } else {
                    that.mensagem = 'Erro!';
                    that.carregando = false;
                }
            });

        },

        getEpis: function () {
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/epis/' + this.ambiente.idAmbienteTrabalho).then(
                function (
                    response) {
                    that.epis = response.data;
                    console.log('epis', response.data);
                });
        },

        getCapacitacoes: function () {
            var that = this;
            axios.get('/empresas/ambientes-de-trabalho/capacitacoes/' + this.ambiente.idAmbienteTrabalho).then(
                function (
                    response) {
                    that.capacitacoes = response.data;
                    //console.log(response.data);
                });

        },

        remover: function (dados) {
            this.carregar('Removendo ambiente...');
            var that = this;
            axios.get('/gro/ambiente/' + this.ppra.idPpra + '/remover/' + dados.idPpraAmbienteTrabalho)
                .then(function (response) {
                    that.ambientes = response.data;
                    that.sucesso('Ambiente excluído');
                });

        },

    },

    mounted() {
        var that = this;

        console.log(this.ambienteppra);

        this.sucesso('Carregado!');

    }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active em versões anteriores a 2.1.8 */
    {
    transform: translateY(-10px);
    opacity: 0;
}

.title-table {
    background-color: #59AF50;
    color: #fff;
    padding: 4px;
}
</style>
