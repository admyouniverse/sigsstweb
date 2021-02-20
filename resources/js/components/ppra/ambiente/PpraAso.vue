<template>
    <div>
        <div class="row">
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="aso.idPpraAso" class="form-control">
                </div>
            </div>
            <div class="col-md-11">
                <div class="form-group">
                    <label for="">Recomendação</label>
                    <input type="text" v-model="aso.recomendacao" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Demissional</label>
                    <input type="number" class="form-control" v-model="aso.demissional">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Período</label>
                    <input type="number" v-model="aso.periodo" class="form-control">
                </div>
            </div>
            <div class="col-md-12">
                <button class="btn btn-success" @click="salvar"><i class="fa fa-check"></i> Salvar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['ppra', 'empresa', 'ambiente'],
    data() {
        return {
            aso: {}
        }
    },
    methods: {
        
    },
    mounted() {
        var that = this;

        
    }

}
</script>
<style lang="sass">

</style>