<template>
<div>
    <div class="row">
        <div class="col-md-12 mb-3 text-center">
            <strong>Aso - Atestado de Saúde Ocupacional</strong>
        </div>
             <div class="col-md-2">
                <div class="form-group">
                    <label for="">Demissional</label>
                    <input type="number" class="form-control" v-model="aso.demissional">
                </div>
            </div>
             <div class="col-md-2">
                <div class="form-group">
                    <label for="">Período</label>
                    <input type="number" v-model="aso.periodo" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Recomendação</label>
                    <input type="text" v-model="aso.recomendacao" class="form-control">
                </div>
            </div>
           
           
            <div class="col-md-2">
                <button class="btn btn-block mt-4 btn-success" @click="salvarAso"><i class="fa fa-check"></i> Salvar</button>
            </div>
    </div>
    <div class="row">
        <div class="col-md-12 mb-3 text-center">
            <strong>Exames Complementares</strong>
        </div>
        
        <div class="col-md-12">
            <table class="table table-hover table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="100px">Ocupacional</th>
                    <th width="100px">Adm</th>
                    <th width="100px">Dem</th>
                    <th width="100px">Per</th>
                    <th>Periodicidade</th>
                    <th width="100px">Idade Min.</th>
                    <th width="100px">Idade Max.</th>
                    <th>Observação</th>
                    <th width="85px"></th>
                </thead>
                <tbody>
                    <tr v-if="examesPcmso.length > 0" v-for="(exame, key) in examesPcmso">
                        <td>{{ exame.exame.idExame }}</td>
                        <td>{{ exame.exame.nomeExame }}</td>
                        <td>
                            <select @change="mudouExame(key)" v-model="exame.ocupacional" :class="{'bg-danger': exame.ocupacional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td>
                            <select @change="mudouExame(key)" v-model="exame.admissional" :class="{'bg-danger': exame.admissional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td>
                            <select @change="mudouExame(key)" v-model="exame.demissional" :class="{'bg-danger': exame.demissional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td width="100px">
                            <select @change="mudouExame(key)" v-model="exame.periodico" :class="{'bg-danger': exame.periodico == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td width="110px">
                        <select @change="mudouExame(key)" class="form-control"  v-model="exame.periodo">
                            <option value="0" v-if="exame.periodico != 'S'">0 meses</option>
                            <option v-if="exame.periodico == 'S'" value="6">6 meses</option>
                            <option v-if="exame.periodico == 'S'" value="12">12 meses</option>
                            <option v-if="exame.periodico == 'S'" value="18">18 meses</option>
                            <option v-if="exame.periodico == 'S'" value="24">24 meses</option>
                        </select>
                        </td>
                    
                        <td><input type="text" disabled class="form-control" v-model="exame.idadeMinima"></td>
                        <td><input type="text" disabled class="form-control" v-model="exame.idadeMaxima"></td>
                        <td><input type="text" disabled v-model="exame.observacao" class="form-control"></td>
                        <td>
                            <button @click="remover(key)" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                            <button @click="editar(exame)" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div class="col-md-12 text-left">
            Total de Itens: {{ examesPcmso.length }}
        </div>
        <div class="col-md-12 text-right">
            <button class="btn btn-success" @click="adicionar()"><i class="fa fa-plus"></i> Adicionar</button>
        </div>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Selecione os exames" @ok="salvar" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="modalExames" id="modal1">
        <div class="row">
            <div class="col-md-12 mb-3 text-left">
                Total de exames selecionados: {{ selecionados.length }}
            </div>
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Unidade</th>
                        <th>Sexo</th>
                        <th>Grupo</th>
                        <th style="width: 90px">Tabela 27</th>
                    </thead>
                    <tbody>
                        <tr class="selecionar" v-if="!estaAdicionado(exame)" :class="{'selecionado': estaSelecionado(exame)}" v-for="(exame, index) in exames" @click="selecionar(exame)">
                            <td>{{ exame.idExame }}</td>
                            <td>{{ exame.nomeExame }}</td>
                            <td>{{ exame.descricao }}</td>
                            <td>{{ exame.unidadeMedida }}</td>
                            <td>{{ exame.sexo }}</td>
                            <td>{{ exame.grupoExame }}</td>
                            <td>{{ exame.tabela27 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>
    <b-modal size="md" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Editar exame" @ok="atualizar" @cancel="fecharAtualizar()" ok-title="Atualizar" cancel-title="Cancelar" ref="modalAtualizar" id="modal2">
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input type="text" disabled v-model="exame.exame.nomeExame" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Idade Minima</label>
                    <input type="number" class="form-control" v-model="exame.idadeMinima">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Idade Máxima</label>
                    <input type="number" class="form-control" v-model="exame.idadeMaxima">
                </div>
            </div>
            <div class="col-md-3" :class="{'col-md-4': exame.periodico == 'S'}">
                <div class="form-group">
                    <label for="">Ocupacional</label>
                    <select v-model="exame.ocupacional" :class="{'bg-danger': exame.ocupacional == 'A'}" class="form-control">
                        <option value="A">Ajustar</option>
                        <option value="N">Não</option>
                        <option value="S">Sim</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3" :class="{'col-md-4': exame.periodico == 'S'}">
                <div class="form-group">
                    <label for="">Admissional</label>
                    <select v-model="exame.admissional" :class="{'bg-danger': exame.admissional == 'A'}" class="form-control">
                        <option value="A">Ajustar</option>
                        <option value="N">Não</option>
                        <option value="S">Sim</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3" :class="{'col-md-4': exame.periodico == 'S'}">
                <div class="form-group">
                    <label for="">Demissional</label>
                    <select v-model="exame.demissional" :class="{'bg-danger': exame.demissional == 'A'}" class="form-control">
                        <option value="A">Ajustar</option>
                        <option value="N">Não</option>
                        <option value="S">Sim</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3" :class="{'col-md-6': exame.periodico == 'S'}">
                <div class="form-group">
                    <label for="">Periodico</label>
                    <select v-model="exame.periodico" :class="{'bg-danger': exame.periodico == 'A'}" class="form-control">
                        <option value="A">Ajustar</option>
                        <option value="N">Não</option>
                        <option value="S">Sim</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6" v-if="exame.periodico == 'S'">
                <div class="form-group">
                    <label for="">Periodo</label>
                    <select v-model="exame.periodo" class="form-control">
                        <option value="0" v-if="exame.periodico != 'S'">0 meses</option>
                        <option v-if="exame.periodico == 'S'" value="6">6 meses</option>
                        <option v-if="exame.periodico == 'S'" value="12">12 meses</option>
                        <option v-if="exame.periodico == 'S'" value="18">18 meses</option>
                        <option v-if="exame.periodico == 'S'" value="24">24 meses</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observações</label>
                    <textarea class="form-control" v-model="exame.observacao"></textarea>
                </div>
            </div>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['pcmso', 'ambiente', 'empresa'],
    data() {
        return {
            exames: [],
            selecionados: [],
            examesPcmso: [],
            exame: {
                exame: {}
            },
             aso: {}
        }
    },
    methods: {
        adicionar: function () {
            var that = this;
            axios.get('/tabelas/exames/list/').then(function (response) {
                that.exames = response.data;
                that.$refs.modalExames.show();
            });
        },

        selecionar(exame) {
            if (this.estaSelecionado(exame)) {
                var key = this.selecionados.findIndex(x => x.idExame == exame.idExame);
                this.selecionados.splice(key, 1);
            } else {
                this.selecionados.push(exame);
            }
        },

        estaSelecionado(exame) {
            return this.selecionados.includes(exame);
        },

        estaAdicionado(exame) {
            var key = this.examesPcmso.findIndex(x => x.exame.idExame == exame.idExame);

            if (key < 0) {
                return false;
            } else {
                return true;
            }
        },

        salvarAso() {
            var that = this;

            axios.post('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + '/aso', {
                aso: that.aso
            }).then(function(response) {
                that.aso = response.data[0];
            });
        },

        salvar() {
            var that = this;

            axios.post('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + '/exames', {
                exames: this.selecionados,
                pcmso: this.pcmso.idPcmso
            }).then(function (response) {
                console.log(response.data);
                that.examesPcmso = response.data;
            });
            this.selecionados = [];
        },

        mudouExame(key) {
            if(this.examesPcmso[key].ocupacional == 'S') {
                this.examesPcmso[key].admissional = 'S';
                this.examesPcmso[key].demissional = 'S';
                this.examesPcmso[key].periodico = 'S';
            }

            if(this.examesPcmso[key].periodico == 'N' || this.examesPcmso[key].periodico == 'A') {
                this.examesPcmso[key].periodo = '0';
            } else {
                if(this.examesPcmso[key].periodo == 0 || this.examesPcmso[key].periodo == '0') {
                    this.examesPcmso[key].periodo = '12';
                }
            }

            this.salvarExame(this.examesPcmso[key]);
        },

        salvarExame(exame) {

            
            axios.post('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + "/exames/atualizar", {
                pcmso: this.pcmso.idPcmso,
                exame: exame,
                ambiente: this.ambiente.idPcmsoAmbienteTrabalho
            }).then(function (response) {

            });
        },

        fechar() {
            this.selecionados = [];
        },

        remover(key) {
            var that = this;
            axios.get('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + '/exames/' + this.examesPcmso[key].idPcmsoExameAmbienteFuncao + '/remover/').then(function(response) {
               that.examesPcmso.splice(key, 1);
            });
            
        },

        editar(exame) {
            this.exame = exame;
            this.$refs.modalAtualizar.show();
        },

        atualizar() {
            this.salvarExame(this.exame)
        },

        fecharAtualizar() {
            
        }
    },
    mounted() {
        var that = this;
        axios.post('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + '/exames/list', {
            pcmso: this.pcmso.idPcmso,
            ambiente: this.ambiente.idPcmsoAmbienteTrabalho
        }).then(function (response) {
            that.examesPcmso = response.data;
            console.log(that.examesPcmso);
        });

        axios.get('/pcmso/ambiente/' + this.ambiente.idPcmsoAmbienteTrabalho + '/aso').then(function(response) {
            console.log(response.data);
            if(response.data.length > 0) {
                that.aso = response.data[0];
            } else {
                that.aso = {
                    idPcmsoAso: 0
                };
            }
        });

    }

}
</script>

<style>
.selecionar {
    cursor: pointer;
}

.selecionado {
    background-color: #71bb66;
}

.form-control.bg-danger {
    background-color: #cc5445 !important;
    color: #ffffff;
}
</style>
