<template>
    <div class="">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="capa.idPpraCapa" class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Estabelecimento</label>
                    <input type="text" v-model="capa.estabelecimento" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Número do Contrato</label>
                    <input type="text" class="form-control" v-model="capa.numeroContrato">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Vigência do Contrato</label>
                    <input type="text" v-model="capa.vigenciaContrato" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Gerência Geral</label>
                    <input type="text" v-model="capa.gerenciaGeral" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Gerência Area</label>
                    <input type="text" v-model="capa.gerenciaArea" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Gestor</label>
                    <input type="text" v-model="capa.gestor" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Fiscal</label>
                    <input type="text" v-model="capa.fiscal" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <button @click="salvar()" class="btn btn-success"><i class="fa fa-floppy"></i> Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['ppra'],
    data() {
        return { 
            carregando: true,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            capa: {
                'idPpraCapa': 0,
                'ppra': {},
                'estabelecimento': '',
                'numeroContrato': '',
                'vigenciaContrato': '',
                'gerenciaGeral': '',
                'gerenciaArea': '',
                'gestor': '',
                'fiscal': ''
            }
        }
    }, 
    methods: {
         carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        salvar() {
            var that = this;
            // this.carregar('Aguarde...');
            axios.post('/gro/' + this.ppra.idPpra + '/capa', {
                capa: this.capa
            }).then(function(response) {
                that.capa = response.data; 
                // that.carregando = false;
                // console.log('atualizou!');
                that.$alert('Capa atualizada!', 'Sucesso!', 'success');
            });
        }
    },
    mounted() {
        var that = this;

        axios.get('/gro/' + this.ppra.idPpra + '/capa').then(function(response) {
            console.log("teste", response.data);
            if(response.data == "") {

            } else {
                that.capa = response.data;
            }
        });
        
    }
}
</script>

<style>

</style>