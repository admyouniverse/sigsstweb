<template>
<div>
    <div class="row">
        <div class="col-md-5">
            <div class="form-group">
                <label for="">Médico Responsável do PCMSO</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" readonly v-model="'Dr. ' + medico.pessoa.nomePessoa" placeholder="Clique no botão">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="modalMedicos"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-7">
            <div class="form-group">
                <label for="">Representante dos Trabalhadores</label>
                <input type="text" class="form-control">
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
                        <th>Versão PCMSO</th>
                        <th>Data PCMSO</th>
                        <th>Elaborador(es)</th>
                        <th>Complemento</th>
                    </tr>
                    <tr v-for="historico in historicos">
                        <td>{{ pcmso.versao }}</td>
                        <td>{{ pcmso.dataHora | moment('DD/MM/YYYY') }}</td>
                        <td> <strong>Dr.</strong> {{historico.empresaProfissional.pessoa.nomePessoa}},  {{ historico.responsavel }} <button @click="modalResponsavel(historico)" class="btn btn-sm btn-link">Alterar</button> </td>
                        <td> <strong>{{tipoPcmso(pcmso.tipoPcmso)}}</strong>,  {{ historico.complemento }} <button @click="modalComplemento(historico)" class="btn btn-sm btn-link">Alterar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="lg" centered :hide-footer="true" title="Médicos" ref="modalMedicos" id="modal1">
        <table class="table-striped table-hover table">
            <tbody v-if="medicosBase.length > 0">
                <tr>
                    <th>Conselho</th>
                    <th>Nome</th>
                </tr>
                <tr @click="selecionarMedico(medico)" style="cursor: pointer" v-for="medico in medicosBase">
                    <td>{{ medico.numeroRegistro }}</td>
                    <td>{{ medico.pessoa.nomePessoa }}</td>
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
    props: ['pcmso'],
    data() {
        return {
            medico: {
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
            edicao: {}
        }
    },

    methods: {
        tipoPcmso(tipo) {
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
            axios.post('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico', {
                medico: that.edicao.empresaProfissional,
                representante: that.edicao.empresaFuncionario,
                nome: that.edicao.representante,
                cpf: that.edicao.cpf,
                cargo: that.edicao.cargo,
                complemento: that.edicao.complemento,
                responsavel: that.edicao.responsavel,
                idPcmsoHistoricoRevisao: that.edicao.idPcmsoHistoricoRevisao,
            }).then(function (response) {
                that.historicos = response.data;
                
                that.edicao = {};
            });
        },
        
        fechar() {

        },

        modalMedicos() {
            var that = this;

            axios.post('/pcmso/medicos', {
                data: that.pcmso.dataHora
            }).then(function (response) {
                that.medicosBase = response.data;
                that.$refs.modalMedicos.show();
                console.log(response.data);
            });
        },

        selecionarMedico(medico) {
            this.medico = medico;
            this.$refs.modalMedicos.hide();
        },

        modalPessoas() {
            var that = this;

            axios.get('/empresas/funcionarios/' + that.pcmso.empresasContrato[0].empresa.idEmpresa).then(function (response) {
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
            
            if(this.historicos.length > 0) {
                var id = this.historicos[0].idPcmsoHistoricoRevisao;
            } else {
                var id = 0;
            } 

            axios.post('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico', {
                medico: that.medico,
                representante: that.representanteSelecionado,
                nome: that.nomeRepresentante,
                cpf: that.cpfRepresentante,
                cargo: that.cargoRepresentante,
                complemento: that.complemento,
                responsavel: that.responsavel,
                idPcmsoHistoricoRevisao: id,
            }).then(function (response) {
                that.historicos = response.data;
                
                that.medico = {
                    pessoa: {}
                };
                that.representanteSelecionado = '';
                that.nomeRepresentante = '';
                that.cpfRepresentante = '';
                that.cargoRepresentante = '';
                that.complemento = '';
                that.responsavel = '';
            });
        }

    },

    mounted() {
        var that = this;
        // console.log(this.pcmso);
        axios.get('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico').then(function (response) {
            console.log(response.data);
            that.historicos = response.data;

            if(that.historicos.length > 0) {
                that.medico = that.historicos[0].empresaProfissional;
                that.nomeRepresentante = that.historicos[0].representante;
                that.representanteSelecionado = that.historicos[0].empresaFuncionario;
                that.cargoRepresentante = that.historicos[0].cargo;
                that.cpfRepresentante = that.historicos[0].cpf;
            }
        });
    }

}
</script>

<style lang="sass">

</style>
