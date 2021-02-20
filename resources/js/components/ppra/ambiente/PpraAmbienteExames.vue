<template>
<div>
    <div class="row">
        <div class="col-md-12 mb-2 text-center">
            <h5 class="bg-success p-3">Exames do PCMSO V {{ ppra.pcmsos[ppra.pcmsos.length - 1].versao }} de {{ ppra.pcmsos[ppra.pcmsos.length - 1].dataHora | moment('DD/MM/YYYY')  }} </h5>
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
                </thead>
                <tbody>
                    <tr v-if="examesPpra.length > 0" v-for="(exame, key) in examesPpra">
                        <td>{{ exame.exame.idExame }}</td>
                        <td>{{ exame.exame.nomeExame }}</td>
                        <td>
                            <select disabled v-model="exame.ocupacional" :class="{'bg-danger': exame.ocupacional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td>
                            <select disabled v-model="exame.admissional" :class="{'bg-danger': exame.admissional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td>
                            <select disabled v-model="exame.demissional" :class="{'bg-danger': exame.demissional == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td width="100px">
                            <select disabled v-model="exame.periodico" :class="{'bg-danger': exame.periodico == 'A'}" class="form-control">
                                <option value="A">Ajustar</option>
                                <option value="N">Não</option>
                                <option value="S">Sim</option>
                            </select>
                        </td>
                        <td width="110px">
                            <select disabled class="form-control" v-model="exame.periodo">
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

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['ppra', 'ambiente', 'empresa'],
    data() {
        return {
            exames: [],
            selecionados: [],
            examesPpra: [],
            exame: {
                exame: {}
            },
            aso: {}
        }
    },
    methods: {

    },
    mounted() {
        if (this.ppra.pcmsos.length > 0) {
            var that = this;
            axios.post('/gro/ambiente/' + this.ambiente.idOrigem + '/exames/list', {
                pcmso: this.ppra.pcmsos[this.ppra.pcmsos.length - 1].idPcmso,
                ambiente: this.ambiente.idOrigem
            }).then(function (response) {
                that.examesPpra = response.data;
            });
        } else {

        }
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
