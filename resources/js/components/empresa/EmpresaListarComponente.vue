<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <a href="/empresas/adicionar" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Incluir</a>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.empresas" name="empresas.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>
        
    </div>
    <div v-if="montou" class="box box-info">

        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table id="tabelaListagem" class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th style="width: 100px">
                            Código
                           
                        </th>
                        <th>
                            Nome
                            
                        </th>
                        <th>
                            Unidade
                            
                        </th>
                        <th>
                            CNPJ/CEI
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="abrir(empresa)" style="cursor: pointer" v-for="empresa in empresas">
                        <td style="vertical-align: middle" width="80px"><b>{{ empresa.idEmpresa }}</b></td>
                        <td style="text-align:justify">{{ empresa.nomeFantasia }}</td>
                        <td style="text-align:justify">{{ empresa.nomeUnidade }}</td>
                        <td style="text-align:justify">{{ empresa.inscricao }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            empresas: [],
            descricao: '',
            codigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando itens cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
            idTabela: '#tabelaListagem'
        }
    },
    methods: {
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 800);
        },

        alerta: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 1000);
        },

        abrir: function (empresa) {
            this.carregar('Aguarde...');
            //console.log(empresa);
            window.location.href = "/empresas/detalhes/" + empresa.idEmpresa;
            // this.$refs.myModal.show();

        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/list').then(function (response) {
            that.empresas = response.data;
            that.montou = true;
            setTimeout(function () {
                that.carregando = false;
                that.$root.$emit('montou', [that.idTabela]);
            }, 200);

        });

    }
}
</script>

<style lang="scss">
th {
    font-weight: 400;
    cursor: pointer;

    &.selecionado {
        font-weight: 800;
    }
}
</style>
