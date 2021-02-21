<template>
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
                <tr v-for="funcaoAmbiente in funcoesAmbiente" style="cursor: pointer">
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
                         <button class="btn btn-primary btn-sm" @click="editar(funcaoAmbiente)"><i class="fas fa-pencil-alt"></i></button>
                         <button class="btn btn-danger btn-sm" @click="remover(funcaoAmbiente)"><i class="fas fa-trash"></i></button>
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
                            {{ funcoesAmbiente.length }}
                        </strong>
                    </td>
                    <td>

                    </td>
                    <td>
                        <strong>
                            {{funcoesAmbiente.reduce((total, valor) => total + valor.totalMasculino, 0)}}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            {{funcoesAmbiente.reduce((total, valor) => total + valor.totalFeminino, 0)}}
                        </strong>
                    </td>
                    <td>

                    </td>
                    <td>
                        <strong>
                            {{funcoesAmbiente.reduce((total, valor) => total + valor.totalMenor, 0)}}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            {{funcoesAmbiente.reduce((total, valor) => total + valor.totalMasculino, 0) + funcoesAmbiente.reduce((total, valor) => total + valor.totalFeminino, 0)}}
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

    <div class="col-md-12">
        <button class="btn btn-primary" @click="abrir">Anexar Função</button>
        <button class="btn btn-primary" @click="incluir">Incluir Função</button>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Detalhes do Cargo" @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" ref="modalCargo" id="modal1">
        <div class="row">

            <div class="col-md-1">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" v-model="funcaoAmbiente.idPpraFuncao" disabled class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cargo</label>
                    <select v-model="funcaoAmbiente.funcao" class="form-control">
                        <option :value="funcao" v-for="funcao in funcoes" v-if="(!funcaoEmFuncao(funcao) && funcao.idRH != funcaoAmbiente.idRH) || funcao.idRH == atual">{{funcao.cargo}}</option>
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
                    <input :min="ppra.dataHora" v-on:blur="verificaData" :disabled="data" type="date" class="form-control" v-model="funcaoAmbiente.dataInclusao">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Masculino</label>
                    <input type="number" @change="totalPessoas" v-model="funcaoAmbiente.totalMasculino" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Feminino</label>
                    <input type="text" @change="totalPessoas" v-model="funcaoAmbiente.totalFeminino" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total Menor</label>
                    <input type="number" v-model="funcaoAmbiente.totalMenor" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Total PCD</label>
                    <input type="number" v-model="funcaoAmbiente.totalPCD" class="form-control">
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
                    <textarea v-model="funcaoAmbiente.descricaoOcupacional" class="form-control" rows="5"></textarea>
                </div>

            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Máquinas</label>
                    <input type="text" v-model="funcaoAmbiente.maquinas" class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Ferramentas</label>
                    <input type="text" v-model="funcaoAmbiente.ferramentas" class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Equipamentos</label>
                    <input type="text" v-model="funcaoAmbiente.equipamentos" class="form-control">
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
</div>
</template>

<script>
export default {
    props: ['ppra', 'ambiente', 'empresa'],
    data() {
        return {
            data: false,
            funcoes: [],
            funcoesAmbiente: [],
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
            cbos: [],
            atual: 0
        }
    },

    methods: {
        remover(func) {
            var that = this;

            axios.get('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/destroy-funcao/' + func.idPpraFuncao).then(function(response) {
                that.funcoesAmbiente = response.data;
            });
        },  

        funcaoEmFuncao(func) {

                for (var i = 0; i < this.funcoesAmbiente.length; i++) {
                    if (this.funcoesAmbiente[i].idRH === func.idRH) {
                        return true;
                    }
                }

                return false;
        },

        verificaData() {
            var that = this;

            var dataInclusao = new Date(this.funcaoAmbiente.dataInclusao);
            var data = new Date(this.ppra.dataHora);
            
            if (dataInclusao < data) {
                
                data.setDate(data.getDate() + 1);

                this.$alert('Data precisa ser maior que ' + (data.getDate()) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
                that.funcaoAmbiente.dataInclusao = that.ppra.dataHora;
            }
        },

        totalPessoas() {
            this.funcaoAmbiente.total = parseInt(this.funcaoAmbiente.totalMasculino) + parseInt(this.funcaoAmbiente.totalFeminino);
        },

        editar(funcao) {
            var f = funcao;
            var that = this;

            this.atual = funcao.idRH;

            if (f.anexada == 'SIM') {
                this.data = false;
            } else {
                this.data = true;
            }

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/funcoes/buscaPorIdRH/' + funcao.idRH).then(function (response) {
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
        incluir() {
            this.data = true;
            this.funcaoAmbiente = {
                idRH: '',
                cargo: '',
                descricaoRH: '',
                cbo: {},
                idPpraFuncao: 0,
                ppraAmbienteTrabalho: '',
                totalMasculino: 0,
                totalMenor: 0,
                totalFeminino: 0,
                alterado: 'S',
                anexada: 'NÃO',
                maquinas: '',
                equipamentos: '',
                ferramentas: '',
                descricaoOcupacional: '',
                dataInclusao: this.ppra.dataHora,
                funcao: {
                    cbo: {},
                    idRH: 0
                },
                total: 0
            }

            this.$refs.modalCargo.show();
        },

        abrir() {

            this.data = false;

            this.funcaoAmbiente = {
                idRH: '',
                cargo: '',
                descricaoRH: '',
                cbo: {},
                idPpraFuncao: 0,
                ppraAmbienteTrabalho: '',
                totalMasculino: 0,
                totalMenor: 0,
                totalFeminino: 0,
                alterado: 'S',
                anexada: 'SIM',
                maquinas: '',
                equipamentos: '',
                ferramentas: '',
                descricaoOcupacional: '',
                dataInclusao: '',
                funcao: {
                    cbo: {},
                    idRH: 0
                },
                total: 0
            }

            this.$refs.modalCargo.show();
        },
        salvar() {
            var that = this;
            this.funcaoAmbiente.ppraAmbienteTrabalho = this.ambiente.idPpraAmbienteTrabalho;
            this.funcaoAmbiente.alterado = 'S';

            axios.post('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/funcoes', {
                funcao: that.funcaoAmbiente
            }).then(function (response) {
                that.funcoesAmbiente = response.data;
            });
        }
    },
    mounted() {
        var that = this;

        axios.get('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/funcoes').then(
            function (response) {
                that.funcoesAmbiente = response.data;
            });

        axios.get('/tabelas/cbo/list').then(function (response) {
            that.cbos = response.data;
        });

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/funcoes').then(function (response) {
            that.funcoes = response.data;
        });
    }

}
</script>

<style lang="scss" scoped>

</style>
