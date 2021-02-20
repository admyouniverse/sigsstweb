<template>
      <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Exame</label>
                    <select name="exameSelecionado" v-model="exameSelecionado" id="" class="form-control">
                        <option :value="exame" v-for="exame in exames">{{exame.nomeExame}} - {{exame.descricao}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Idade Minima</label>
                    <input type="number" v-model="exame.idadeMinima" class="form-control" >
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Idade Máxima</label>
                    <input type="number" class="form-control" v-model="exame.idadeMaxima">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Periodo</label>
                    <select v-model="exame.periodo" class="form-control">
                        <option value="0" v-if="exame.periodico != 'S'">0 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="18">18 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
            </div>
            <div class="col-md-10">
                <div class="form-group">
                    <label for="">Observação</label>
                    <input type="text" class="form-control" v-model="exame.observacao">
                </div>
            </div>
            <div class="col-md-2 mt-4">
                <button class="btn btn-success btn-block" @click="atualizar">Atualizar</button>
            </div>

            <div class="col-md-12">
                
                    <table class="table">
                        <tbody>
                            <tr>
                            <th>Exame</th>
                            <th>Idade Minima</th>
                            <th>Idade Máxima</th>
                            <th>Periodo</th>
                            <th>Observação</th>
                            </tr>
                            <tr v-for="historico in historicos">
                                <td> {{historico.exame.nomeExame}} - {{historico.exame.descricao}} </td>
                                <td> {{historico.idadeMinima}} </td>
                                <td> {{historico.idadeMaxima}} </td>
                                <td> {{historico.periodo}} </td>
                                <td> {{historico.observacao}} </td>
                            </tr>
                        </tbody>
                    </table>
                
            </div>
        </div>
</template>
<script>
export default {
    props:['pcmso'],
    data() {
        return {
            exameSelecionado: {},
            exames:[],
            exame: {},
            historicos: []
        }
    },
    methods: {
        atualizar() {
            var that = this;
            console.log(this.exameSelecionado);
            axios.post('/pcmso/'+ this.pcmso.idPcmso + '/exames', {
                exame: that.exameSelecionado.idExame,
                dados: that.exame
            }).then(function(response) {
                that.historicos = response.data;
                that.exameSelecionado = {};
                that.exame = {};
            });
        }
    },
    mounted() {
        var that = this;

        axios.get('/pcmso/'+ this.pcmso.idPcmso + '/exames/').then(function(response) {
            that.exames = response.data;
        });

         axios.get('/pcmso/'+ this.pcmso.idPcmso + '/exames/list').then(function(response) {
            that.historicos = response.data;
            console.log(response.data);
        });
    }
}
</script>
<style lang="scss" scoped>

</style>
