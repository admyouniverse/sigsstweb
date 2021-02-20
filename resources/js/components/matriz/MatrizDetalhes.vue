<template>
<div class="container">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <section class="content-header">
        <h1>
            Matrizes de Risco - {{ this.matriz.descricao }}
        </h1>
    </section>

    <div class="row mt-3">
        <div class="col-md-12">
            <div>
                <b-card class="sig" no-body>
                    <b-tabs card>
                        <b-tab title="Detalhes" active>
                            <b-card-text>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="">ID</label>
                                            <input type="text" disabled v-model="matriz.idMatrizRisco" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-9">
                                        <div class="form-group">
                                            <label for="">Descrição</label>
                                            <input type="text" v-model="matriz.descricao" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Eixo</label>
                                            <select class="form-control" v-model="matriz.eixoX" id="">
                                                <option :value="eixo" v-for="eixo in eixosX">{{eixo.descricao}}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Eixo</label>
                                            <select class="form-control" v-model="matriz.eixoY" id="">
                                                <option :value="eixo" v-for="eixo in eixosY">{{eixo.descricao}}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="">Criterio</label>
                                            <select class="form-control" v-model="matriz.criterio" id="">
                                                <option value="SOMA">SOMA</option>
                                                <option value="MULTIPLICACAO">MULTIPLICAÇÃO</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Peso X">
                            <b-card-text>
                                <div class="row">
                                    <peso-x-componente :matriz="matriz"></peso-x-componente>
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Peso Y">
                            <b-card-text>
                                <peso-y-componente :matriz="matriz"></peso-y-componente>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Nivel">
                            <b-card-text>
								<nivel-componente :matriz="matriz"></nivel-componente>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['matriz'],
    data() {
        return {
            'carregando': false,
			'eixosX': [],
			'eixosY': []
			
        }
    },
    methods: {
        abrirPesoX() {
            this.$refs.modalPesoX.show();
        },

        fechar() {

        },

        salvarPesoX() {

        }
    },
    mounted() {
        var that = this;

        axios.get('/peso-x/list').then(function (response) {
            that.pesosY = response.data;
		});
		
		 axios.get('/eixo-y/list').then(function (response) {
			that.eixosY = response.data;
		 });

		 axios.get('/eixo-x/list').then(function (response) {
			that.eixosX = response.data;
		 });

    }
}
</script>

<style>

</style>
