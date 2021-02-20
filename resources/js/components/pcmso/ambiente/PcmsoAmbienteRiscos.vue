<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html">
    </BlockUI>
    <div class="row">
         <div class="col-md-12 mb-2 text-center">
            <h5 class="bg-success p-3 text-light">Fatores de Risco do GR0 V {{ pcmso.ppra.versao }} de {{ pcmso.ppra.dataHora | moment('DD/MM/YYYY')  }} </h5>
        </div>
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-fatores table-hover table-striped">
                    <tbody>
                        <tr>
                            <td><strong> Grupo </strong></td>
                            <td style="width: 170px"><strong> Risco </strong></td>
                            <td style="width: 130px"><strong> Fonte Geradora </strong></td>
                            <td><strong> Exp. </strong></td>
                            <td><strong> Valor </strong></td>
                            <td style="width: 70px"><strong> L. Tol.</strong></td>
                            <td style="width: 80px"><strong> N. Ação </strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixox[0]"><strong> {{ eixox[0].descricao }} </strong></td>
                            <td style="width: 120px; text-align: center" v-if="eixoy[0]"><strong> {{ eixoy[0].descricao }} </strong></td>
                            <td style="width: 150px"><strong>Nivel</strong></td>
                            <td><strong>Medidas Existentes</strong></td>
                            
                        </tr>
                        <tr v-for="(fat, key) in fatores">
                            <td style="text-align:justify; vertical-align: middle">
                                <div class="cx" v-bind:style="cor(fat.risco.grupoRisco)"></div>
                                {{ grupoDeRisco(fat.risco.grupoRisco) }}
                            </td>
                            <td>{{fat.risco.nomeRisco}}</td>
                            <td>{{fat.fonteGeradora.descricao}}</td>
                            <td>{{fat.exposicao}}</td>

                            <td v-if="fat.risco.enquadramento == 'QUANTITATIVO'">
                                <span :class="{'text-success': fat.medida.medida < fat.unidade.nivelAcao, 'text-warning': fat.medida.medida >= fat.unidade.nivelAcao && fat.medida.medida < fat.unidade.limiteTolerancia, 'text-danger': fat.medida.medida >= fat.unidade.limiteTolerancia}">
                                    <strong>{{fat.medida.medida}} {{fat.unidade.unidadeMedida.unidade}}</strong>
                                </span>
                            </td>
                            <td v-if="fat.risco.enquadramento == 'QUALITATIVO'">Qualitativo</td>
                            

                            <td v-if="fat.risco.enquadramento == 'QUANTITATIVO'">{{fat.unidade.limiteTolerancia}}{{fat.unidade.unidadeMedida.unidade}}</td>
                            <td v-if="fat.risco.enquadramento == 'QUALITATIVO'">-</td>

                            <td v-if="fat.risco.enquadramento == 'QUANTITATIVO'">{{fat.unidade.nivelAcao}}{{fat.unidade.unidadeMedida.unidade}}</td>
                            <td v-if="fat.risco.enquadramento == 'QUALITATIVO'">-</td>

                            <td>
                                <select style="width: 120px;" v-model="fat.pesoX" disabled class="form-control form-sem-fundo">
                                    <option :value="pesox" v-for="pesox in pesosx">[{{pesox.peso}}] {{pesox.descricao}}</option>
                                </select>
                            </td>
                            <td>
                                <select style="width: 120px;" v-model="fat.pesoY" disabled class="form-control form-sem-fundo">
                                    <option  :value="pesoy" v-for="pesoy in pesosy">[{{pesoy.peso}}] {{pesoy.descricao}}</option>
                                </select>
                            </td>
                            <td :style="'background-color:' + fat.nivel.cor">
                                {{ fat.pesoX.peso * fat.pesoY.peso }} - {{ fat.nivel.descricao }}
                            </td>
                            <td>{{fat.medidasExistentes}}</td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['pcmso', 'ambiente'],
    data() {
        return {
            riscos:[],
            fontes:[],
            pesosx:[],
            pesosy:[],
            eixoy:[],
            eixox:[],
            fatores:[],
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
        }
    },
    methods: {
         calculaNivel() {
            if (this.fator.pesoX && this.fator.pesoY) {
                if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
                    this.resultado = parseInt(this.fator.pesoX.peso) * parseInt(this.fator.pesoY.peso);
                } else {
                    this.resultado = parseInt(this.fator.pesoX.peso) + parseInt(this.fator.pesoY.peso);
                }

                var that = this;

                axios.get('/nivel-matriz/peso/' + this.resultado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
                    that.nivel = response.data;
                });
            }
        },
          cor: function (risco) {
            if (risco == 'BIOLÓGICO') {
                return "background-color:rgb(148, 90, 30)";
            } else if (risco == 'ERGONÔMICO') {
                return "background-color:rgb(255, 255, 0)";
            } else if (risco == 'ACIDENTE') {
                return "background-color:rgb(0, 0, 255)";
            } else if (risco == 'FÍSICO') {
                return "background-color:rgb(0, 128, 0)";
            } else if (risco == 'QUÍMICO') {
                return "background-color:rgb(255, 0, 0)";
            } else if (risco == 'PERICULOSOS') {
                return "background-color:rgb(255, 255, 0)";
            } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
                return "background-color:rgb(0, 0, 0)";
            } else if (risco == 'PENOSOS') {
                return "background-color:rgb(254, 218, 71)";
            } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
                return "background-color:rgb(128, 128, 128)";
            }
        },

        grupoDeRisco: function (risco) {
            if (risco == 'BIOLÓGICO') {
                return "B";
            } else if (risco == 'ERGONÔMICO') {
                return "E";
            } else if (risco == 'ACIDENTE') {
                return "A";
            } else if (risco == 'FÍSICO') {
                return "F";
            } else if (risco == 'QUÍMICO') {
                return "Q";
            } else if (risco == 'PERICULOSOS') {
                return "P";
            } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
                return "AFR";
            } else if (risco == 'PENOSOS') {
                return "Pen";
            } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
                return "Aus FR";
            }

        },
    },

    mounted() {
        var that = this;
        axios.get('/tabelas/riscos/list').then(function (response) {
            that.riscos = response.data;
        });

        axios.get('/tabelas/riscos/fontes-geradoras/list').then(function (response) {
            that.fontes = response.data;
        });

        axios.get('/peso-x/list').then(function (response) {
            that.pesosx = response.data;
        });

        axios.get('/peso-y/list').then(function (response) {
            that.pesosy = response.data;
        });

        axios.get('/eixo-y/list').then(function (response) {
            that.eixoy = response.data;
        });

        axios.get('/eixo-x/list').then(function (response) {
            that.eixox = response.data;
        });

        axios.get('/pcmso/ambiente-risco/' + this.ambiente.idOrigem + '/' + this.pcmso.ppra.idPpra + '/list').then(function (response) {
            that.fatores = response.data;
            that.carregando = false;
            that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
        });
    }
}
</script>

<style>

</style>
