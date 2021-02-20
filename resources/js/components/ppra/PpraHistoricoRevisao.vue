<template>
<div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Resp. Téc do GRO 01</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" readonly v-model="profissional01.titulo + '. ' + profissional01.pessoa.nomePessoa" placeholder="Clique no botão">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="modalProfissional(1)"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="">Resp. Téc do GRO 02</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" readonly v-model="profissional02.titulo + '. ' + profissional02.pessoa.nomePessoa" placeholder="Clique no botão">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="modalProfissional(2)"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label for="">Representante da Empresa</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="nomeRepresentante" @keydown="limparPessoa" placeholder="Pessoa">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" @click="modalPessoas" type="button"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">CPF</label>
                <input type="text" v-model="cpfRepresentante" v-mask="'###.###.###-##'" @keydown="limparPessoa" class="form-control">
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label for="">Cargo</label>
                <input type="text" v-model="cargoRepresentante" @keydown="limparPessoa" class="form-control">
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label for="">Representante dos Trabalhadores</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" disabled>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" disabled type="button"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label for="">CPF</label>
                <input type="text" v-mask="'###.###.###-##'" class="form-control">
            </div>
        </div>

        <div class="col-md-4">
            <div class="form-group">
                <label for="">Cargo</label>
                <input type="text" class="form-control">
            </div>
        </div>

        <div class="col-md-12">
            <button class="btn btn-success" @click="salvar"><i class="fa fa-check"></i> Salvar</button>
        </div>
    </div>

    <hr>

    <div class="row">
        <div class="col-md-12">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Versão GRO</th>
                        <th>Data GRO</th>
                        <th>Elaborador(es)</th>
                        <th>Complemento</th>
                    </tr>
                    <tr v-for="historico in historicos">
                        <td>{{ ppra.versao }}</td>
                        <td>{{ ppra.dataHora | moment('DD/MM/YYYY') }}</td>
                        <td v-if="!historico.empresaProfissional"></td>
                        <td v-if="historico.empresaProfissional"> <strong>{{ historico.empresaProfissional.titulo }}. </strong> {{historico.empresaProfissional.pessoa.nomePessoa}}<span v-if="historico.empresaProfissional02">, <strong>{{ historico.empresaProfissional02.titulo }}. </strong> {{historico.empresaProfissional02.pessoa.nomePessoa}}</span><span v-if="historico.responsavel">, {{historico.responsavel}} </span>
                        
                        <button @click="modalResponsavel(historico)" class="btn btn-sm btn-link">Alterar</button> </td>
            
                        <td> <strong>{{tipoPpra(ppra.tipoPpra)}}</strong>, {{ historico.complemento }} <button @click="modalComplemento(historico)" class="btn btn-sm btn-link">Alterar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="lg" centered :hide-footer="true" title="Responsável Técnico PPRA" ref="modalProfissional" id="modal1">
        <table class="table-striped table-hover table">
            <tbody v-if="medicosBase.length > 0">
                <tr>
                    <th>Conselho</th>
                    <th>Nome</th>
                    <th>Grupo Profissional</th>
                </tr>
                <tr @click="selecionarProfissional(medico)" v-if="medico.idEmpresaProfissional != profissional01.idEmpresaProfissional && medico.idEmpresaProfissional != profissional02.idEmpresaProfissional && medico.tipoProfissional != 'PREPOSTO_PPP'" style="cursor: pointer" v-for="medico in medicosBase">
                    <td>{{ medico.numeroRegistro }}</td>
                    <td>{{ medico.pessoa.nomePessoa }}</td>
                    <td>{{ listaGrupo(medico) }}</td>
                </tr>
            </tbody>
        </table>
    </b-modal>

    <b-modal size="lg" centered :hide-footer="true" title="Pessoas" ref="modalPessoas" id="modal1">
        <table class="table-striped table-hover table">
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Cargo</th>
                </tr>
                <tr style="cursor: pointer" @click="selecionaPessoa(funcionario)" v-for="funcionario in funcionarios">
                    <td>{{ funcionario.pessoa.nomePessoa }}</td>
                    <td>{{ funcionario.pessoa.cpf }}</td>
                    <td>{{ funcionario.funcao.cargo }}</td>
                </tr>
            </tbody>
        </table>
    </b-modal>

    <b-modal size="xs" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Alterar Elaboradores" @ok="salvarResponsavel" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="modalResponsavel" id="modal1">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Elaborador(es)</label>
                <input type="text" class="form-control" v-model="edicao.responsavel">
            </div>
        </div>
    </b-modal>

    <b-modal size="xs" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Alterar Complemento" @ok="salvarResponsavel" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="modalComplemento" id="modal2">
        <div class="col-md-12">
            <div class="form-group">
                <label for="">Complemento</label>
                <input type="text" class="form-control" v-model="edicao.complemento">
            </div>
        </div>
    </b-modal>

</div>
</template>

<script>
export default {
    props: ['ppra'],
    data() {
        return {
            profissional01: {
                pessoa: {}
            },
            profissional02: {
                pessoa: {}
            },
            representanteSelecionado: {},
            medicosBase: [],
            nomeRepresentante: '',
            cpfRepresentante: '',
            cargoRepresentante: '',
            funcionarios: [],
            responsavel: '',
            complemento: '',
            historicos: [],
            edicao: {},
            tipoProfissional: 0
        }
    },

    methods: {
        listaGrupo(profissional) {
            if (profissional.grupoProfissional == 'MÉDICO_COORDENADOR_PCMSO') {
                if (profissional.pessoa.sexo == 'MASCULINO') {
                    return 'Médico Coordenado do PCMSO';
                } else {
                    return 'Médico Coordenado do PCMSO';
                }
            } else if (profissional.grupoProfissional == 'MÉDICO_EXAMINADOR') {
                if (profissional.pessoa.sexo == 'MASCULINO') {
                    return 'Médico Examinador';
                } else {
                    return 'Médica Examinadora';
                }
            } else if (profissional.grupoProfissional == 'TÉCNICO_SEG_TRABALHO') {
                if (profissional.pessoa.sexo == 'MASCULINO') {
                    return 'Téc de Segurança do Trabalho';
                } else {
                    return 'Técª de Segurança do Trabalho';
                }
            } else if (profissional.grupoProfissional == 'TÉCNICO_ENF_TRABALHO') {
                if (profissional.pessoa.sexo == 'MASCULINO') {
                    return 'Téc de Enfermagem do Trabalho';
                } else {
                    return 'Técª de Enfermagem do Trabalho';
                }
            } else if (profissional.grupoProfissional == 'ENFERMEIRO_TRABALHO') {
                if (profissional.pessoa.sexo == 'MASCULINO') {
                    return 'Enfermeiro do Trabalho';
                } else {
                    return 'Enfermeira do Trabalho';
                }
            } else if (profissional.grupoProfissional == 'PREPOSTO_PPP') {
                return 'PREPOSTO';
            }
        },
        tipoPpra(tipo) {
            if (tipo == 'EMISSÃO') {
                return 'Emissão';
            } else if (tipo == 'REVISÃO_PARCIAL') {
                return 'Revisão Parcial';
            } else if (tipo == 'REVISÃO_GERAL') {
                return 'Revisão Geral';
            }
        },

        modalResponsavel(historico) {
            this.edicao = historico;
            this.$refs.modalResponsavel.show();
        },

        modalComplemento(historico) {
            this.edicao = historico;
            this.$refs.modalComplemento.show();
        },

        salvarResponsavel() {
            var that = this;
            axios.post('/gro/' + this.ppra.idPpra + '/revisao-historico', {
                empresaProfissional: that.edicao.empresaProfissional,
                empresaProfissional02: that.edicao.empresaProfissional02,
                representante: that.edicao.empresaFuncionario,
                nome: that.edicao.representante,
                cpf: that.edicao.cpf,
                cargo: that.edicao.cargo,
                complemento: that.edicao.complemento,
                responsavel: that.edicao.responsavel,
                idPpraHistoricoRevisao: that.edicao.idPpraHistoricoRevisao,
            }).then(function (response) {
                that.historicos = response.data;

                that.edicao = {};
            });
        },

        fechar() {

        },

        modalProfissional(tipo) {
            var that = this;
            this.tipoProfissional = tipo;

            axios.post('/gro/medicos', {
                data: that.ppra.dataHora
            }).then(function (response) {
                that.medicosBase = response.data;
                that.$refs.modalProfissional.show();
                console.log(response.data);
            });
        },

        selecionarProfissional(medico) {
            if (this.tipoProfissional == 1) {
                this.profissional01 = medico;
            } else {
                this.profissional02 = medico;
            }

            this.$refs.modalProfissional.hide();
        },

        modalPessoas() {
            var that = this;

            axios.get('/empresas/funcionarios/' + that.ppra.empresasContrato[0].empresa.idEmpresa).then(function (response) {
                that.funcionarios = response.data;
                console.log(response.data);
                that.$refs.modalPessoas.show();
            });
        },

        selecionaPessoa(funcionario) {
            this.representanteSelecionado = funcionario;
            this.nomeRepresentante = this.representanteSelecionado.pessoa.nomePessoa;
            this.cpfRepresentante = this.representanteSelecionado.pessoa.cpf;
            this.cargoRepresentante = this.representanteSelecionado.funcao.cargo;
            this.$refs.modalPessoas.hide();
        },

        limparPessoa() {

            this.representanteSelecionado = {};
        },

        salvar() {
            var that = this;

            if (this.historicos.length > 0) {
                var id = this.historicos[0].idPpraHistoricoRevisao;
            } else {
                id = 0;
            }

            axios.post('/gro/' + this.ppra.idPpra + '/revisao-historico', {
                empresaProfissional: that.profissional01,
                empresaProfissional02: that.profissional02,
                representante: that.nomeRepresentante,
                nome: that.nomeRepresentante,
                cpf: that.cpfRepresentante,
                cargo: that.cargoRepresentante,
                complemento: that.complemento,
                responsavel: that.responsavel,
                idPpraHistoricoRevisao: id,
            }).then(function (response) {
                that.historicos = response.data;
            });
        }

    },

    mounted() {
        var that = this;
        // console.log(this.ppra);
        axios.get('/gro/' + this.ppra.idPpra + '/revisao-historico').then(function (response) {
            console.log(response.data);
            that.historicos = response.data;
            if (response.data.length > 0) {
                that.profissional01 = that.historicos[0].empresaProfissional;
                that.profissional02 = that.historicos[0].empresaProfissional02;
                that.nomeRepresentante = that.historicos[0].representante;
                that.cpfRepresentante = that.historicos[0].cpf;
                that.cargoRepresentante = that.historicos[0].cargo;
                that.responsavel = that.historicos[0].responsavel;
                that.complemento = that.historicos[0].complemento;
                that.edicao.complemento = that.historicos[0].complemento;
                that.edicao.responsavel = that.historicos[0].responsavel;
            }
        });
    }

}
</script>

<style lang="sass">

</style>
