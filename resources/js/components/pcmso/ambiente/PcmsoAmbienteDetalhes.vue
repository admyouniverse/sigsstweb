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
                                    <input v-model="ambientepcmso.idPcmsoAmbienteTrabalho" type="text" class="form-control" disabled>
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
                                    <textarea class="form-control" v-model="ambientepcmso.observacao" cols="30" rows="3"></textarea>
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

                <b-tab @click="getFuncoes" title="Funções">
                    <b-card-text>
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="title-table">
                                    Lista de Cargos do Ambiente {{ambiente.nomeAmbienteTrabalho}}
                                </h5>
                                <table class="table table-hover table-striped">

                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>ID RH</th>
                                            <th>Cargo</th>
                                            <th>CBO</th>
                                            <th>M</th>
                                            <th>F</th>
                                            <th>PCD</th>
                                            <th>Menor</th>
                                            <th>Todos</th>
                                            <th>Dt da Inclusão</th>
                                            <th>Ações</th>

                                        </tr>
                                        <tr v-for="funcaoAmbiente in funcoes" style="cursor: pointer">
                                            <td>{{ funcaoAmbiente.idPpraFuncao }}</td>
                                            <td>{{ funcaoAmbiente.idRH }}</td>
                                            <td>{{ funcaoAmbiente.cargo }}</td>
                                            <td>{{ funcaoAmbiente.cbo.codigoCbo }}</td>
                                            <td>{{ funcaoAmbiente.totalMasculino }}</td>
                                            <td>{{ funcaoAmbiente.totalFeminino }}</td>
                                            <td></td>
                                            <td>{{ funcaoAmbiente.totalMenor }}</td>
                                            <td>{{parseInt(funcaoAmbiente.totalMasculino) + parseInt(funcaoAmbiente.totalFeminino)}}</td>
                                            <td>
                                                {{ funcaoAmbiente.dataInclusao | moment("DD/MM/Y") }}
                                                <span v-if="funcaoAmbiente.anexada == 'SIM'">
                                                    - <strong>A</strong>
                                                </span>

                                                <span v-if="funcaoAmbiente.anexada != 'SIM'">
                                                    - <strong>I</strong>
                                                </span>
                                            </td>
                                            <td>
                                                    <button class="btn btn-primary btn-sm" @click="visualizarFuncao(funcaoAmbiente)"><i class="fas fa-eye"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Totais</strong>
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <strong>
                                                    {{ funcoes.length }}
                                                </strong>
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <strong>
                                                    {{funcoes.reduce((total, valor) => total + valor.totalMasculino, 0)}}
                                                </strong>
                                            </td>
                                            <td>
                                                <strong>
                                                    {{funcoes.reduce((total, valor) => total + valor.totalFeminino, 0)}}
                                                </strong>
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <strong>
                                                    {{funcoes.reduce((total, valor) => total + valor.totalMenor, 0)}}
                                                </strong>
                                            </td>
                                            <td>
                                                <strong>
                                                    {{funcoes.reduce((total, valor) => total + valor.totalMasculino, 0) + funcoes.reduce((total, valor) => total + valor.totalFeminino, 0)}}
                                                </strong>
                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div v-if="this.exibir" class="mt-2 w-100">
                                <div class="col-md-12 mb-3">
                                    <h4>Listagem de Asos</h4>
                                </div>
                                <div class="col-md-12">
                                    <table class="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td>ID</td>
                                                <td>Recomendação</td>
                                                <td>Demissional</td>
                                                <td>Periodo</td>
                                                <td></td>
                                            </tr>
                                            <tr v-for="aso in asos">
                                                <td>{{ aso.idPcmsoAso }}</td>
                                                <td>{{ aso.recomendacao }}</td>
                                                <td>{{ aso.demissional }}</td>
                                                <td>{{ aso.periodo }}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline-primary" @click="editarAso(aso)"><i class="fas fa-pencil-alt"></i></button>
                                                    <button class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-sm btn-success" @click="abrirAso()">+ Adicionar Aso</button>
                                </div>
                            </div>
                        </div>

                        <b-modal size="md" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Aso" @ok="salvarAso" @cancel="fecharAso()" ok-title="Salvar" cancel-title="Cancelar" ref="modalAso" id="modalAso">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="">Recomendação</label>
                                        <input type="text" v-model="aso.recomendacao" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">Demissional</label>
                                        <input type="text" v-model="aso.demissional" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">Periodo</label>
                                        <input type="text" v-model="aso.periodo" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </b-modal>
                    </b-card-text>
                </b-tab>

                <b-tab title="Exames" lazy>
                    <b-card-text>
                        <pcmso-ambiente-exames :pcmso="pcmso" :empresa="empresa" :ambiente="ambientepcmso">
                        </pcmso-ambiente-exames>
                    </b-card-text>
                </b-tab>

                <b-tab title="Fatores de Risco">
                    <b-card-text>
                        <pcmso-ambiente-riscos :pcmso="pcmso" :ambiente="ambientepcmso"></pcmso-ambiente-riscos>
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
                                            <td>{{ epi.idAmbienteEmpresaEpi }}</td>
                                            <td>{{ epi.empresaEpi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.empresaEpi.epi.categoriaEpi.codigoCategoria }}
                                                - {{ epi.empresaEpi.epi.codigoNr6 }} |
                                                {{ epi.empresaEpi.epi.descricao }}</td>
                                            <td>
                                                <span v-if="epi.empresaEpi.epi.unidade == 'UN'">
                                                    PEÇA
                                                </span>
                                                <span v-if="epi.empresaEpi.epi.unidade != 'UN'">
                                                    {{ epi.empresaEpi.epi.unidade }}
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



    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Detalhes do Cargo" ok-title="Fechar" :ok-only="true" ref="modalCargo" id="modal1">
        <div class="row">

            <div class="col-md-1">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" v-model="funcaoAmbiente.funcao.idFuncao" disabled class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cargo</label>
                    <select class="form-control" disabled>
                        <option selected >{{funcaoAmbiente.funcao.cargo}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">Id RH</label>
                    <input type="number" v-model="funcaoAmbiente.funcao.idRH" disabled class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div @click="abrirDescricaoRH" class="form-group">
                    <label for="">Descrição RH</label>
                    <input type="text" class="form-control" @click="abrirDescricaoRH" v-if="funcaoAmbiente.funcao.idRH" disabled value="Ver Descrição">
                    <input type="text" class="form-control" v-if="!funcaoAmbiente.funcao.idRH" disabled>
                </div>
            </div>
            <div class="col-md-3">
                <div @click="abrirDescricaoCBO" class="form-group">
                    <label for="">CBO</label>
                    <input type="text" class="form-control" @click="abrirDescricaoCBO" v-if="funcaoAmbiente.funcao.cbo.idCbo" disabled :value="funcaoAmbiente.funcao.cbo.codigoCbo + '- Ver Descrição'">
                    <input type="text" class="form-control" v-if="!funcaoAmbiente.funcao.cbo.idCbo" disabled>

                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Data Inclusão</label>
                    <input type="date" class="form-control" disabled v-model="funcaoAmbiente.dataInclusao">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Masculino</label>
                    <input type="number" disabled v-model="funcaoAmbiente.totalMasculino" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Feminino</label>
                    <input type="text" disabled v-model="funcaoAmbiente.totalFeminino" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Menor</label>
                    <input type="number" disabled v-model="funcaoAmbiente.totalMenor" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total PCD</label>
                    <input type="number" disabled v-model="funcaoAmbiente.totalPCD" class="form-control">
                </div>
            </div> 

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Empregados</label>
                    <input type="number" disabled v-model="funcaoAmbiente.total" class="form-control">
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Descrição Ocupacional</label>
                    <textarea v-model="funcaoAmbiente.descricaoOcupacional" disabled class="form-control" rows="5"></textarea>
                </div>

            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Máquinas</label>
                    <input type="text" v-model="funcaoAmbiente.maquinas" disabled class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Ferramentas</label>
                    <input type="text" v-model="funcaoAmbiente.ferramentas" disabled class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Equipamentos</label>
                    <input type="text" v-model="funcaoAmbiente.equipamentos" disabled class="form-control">
                </div>
            </div>
        </div>
    </b-modal>

      <b-modal size="md" centered title="Detalhes" cancel-title="Cancelar" ref="modalRH">
        <div class="form-group">
            <label for="">Descrição de RH</label>
            <textarea disabled class="form-control" v-model="funcaoAmbiente.funcao.descricaoRH"></textarea>
        </div>
    </b-modal>

    <b-modal size="md" centered title="Detalhes" cancel-title="Cancelar" ref="modalCBO">
        <div class="form-group">
            <label for="">Descrição do CBO</label>
            <textarea disabled class="form-control" rows="5" v-model="funcaoAmbiente.funcao.cbo.descricao"></textarea>
        </div>
    </b-modal>


</section>
</template>

<script>
export default {
    props: ['pcmso', 'empresa', 'ambientepcmso', 'ambiente'],
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
            capacitacoes: [],
            
                funcaoAmbiente: {
                funcao: {
                    cbo: {},
                    idRH: 0
                },
                idRH: '',
                cargo: '',
                descricaoRH: '',
                cbo: {},
                idPpraFuncao: 0,
                ppraAmbienteTrabalho: '',
                totalMasculino: '',
                totalMenor: '',
                totalFeminino: '',
                alterado: '',
                anexada: '',
                maquinas: '',
                equipamentos: '',
                ferramentas: '',
                descricaoOcupacional: '',
                dataInclusao: '',

            },
        }
    },
    methods: {
            visualizarFuncao(funcao) {
            var f = funcao;
            var that = this;

            // this.atual = funcao.idRH;

            console.log('funcao', funcao);

            if (f.anexada == 'SIM') {
                this.data = false;
            } else {
                this.data = true;
            }

            axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/funcoes/buscaPorIdRH/' + funcao.idRH).then(function (response) {
                f.funcao = response.data;
                that.funcaoAmbiente = f;
                that.totalPessoas();
                that.$refs.modalCargo.show();
                that.funcaoAmbiente.total = parseInt(that.funcaoAmbiente.totalMasculino) + parseInt(that.funcaoAmbiente.totalFeminino);
            });

        },
          abrirDescricaoRH() {
            if (this.funcaoAmbiente.funcao.idRH) {
                this.$refs.modalRH.show();
            }

        },
        abrirDescricaoCBO() {
            if (this.funcaoAmbiente.funcao.cbo) {
                this.$refs.modalCBO.show();
            }

        },
        totalPessoas() {
            this.funcaoAmbiente.total = parseInt(this.funcaoAmbiente.totalMasculino) + parseInt(this.funcaoAmbiente.totalFeminino);
        },
        preencheAmbiente: function () {
            if (this.selecionado) {
                this.ambiente = this.selecionado;
                console.log(this.ambiente);
            } else {
                this.ambiente = {};
            }

            this.ambiente.idPcmsoAmbienteTrabalho = 0;
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
                idPcmsoAmbienteTrabalho: 0
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
            axios.post('/pcmso/ambiente', {
                pcmso: that.pcmso,
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
                    console.log(response.data);
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
            axios.get('/pcmso/ambiente/' + this.pcmso.idPcmso + '/remover/' + dados.idPcmsoAmbienteTrabalho)
                .then(function (response) {
                    that.ambientes = response.data;
                    that.sucesso('Ambiente excluído');
                });

        },

        // FUNCOES

        getFuncoes: function () {
 
            var that = this;

            console.log(this.ambientepcmso);


            axios.get('/pcmso/ambiente/' + this.ambientepcmso.idOrigem + '/' + this.pcmso.ppra.idPpra +  '/funcoes').then(
                function (response) {
                    that.funcoes = response.data;
                    // that.sucesso('Funções recuperadas...');

                    console.log(that.funcoes);

                });

        },

        getAso(funcao) {
            var that = this;
            this.funcao = funcao;

            axios.get('/pcmso/ambiente/funcoes/' + funcao.idPcmsoFuncao).then(function (response) {
                that.asos = response.data;
                that.exibir = true;
                // console.log(that.asos);
            });
        },

        abrirAso() {
            this.aso = {
                idPcmsoAso: 0
            };
            this.$refs.modalAso.show();
        },

        editarAso(aso) {
            this.aso = aso;
            this.$refs.modalAso.show();
        },

        salvarAso() {
            axios.post('/pcmso/ambiente/funcoes/' + this.funcao.idPcmsoFuncao, {
                aso: this.aso
            }).then(function (response) {
                console.log(response);
            });
        },

        fecharAso() {

        }
    },

    mounted() {
        var that = this;

        console.log(this.ambientepcmso);

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
