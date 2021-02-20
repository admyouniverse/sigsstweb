<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <div class="box box-info">
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>ID Origem</th>
                        <th>
                            Descrição
                        </th>
                        <th>ID Secundário</th>
                        <th>Estabelecimento</th>
                        <th class="text-center">Cargos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="listarFuncoes(ambiente)" v-for="ambiente in ambientes">
                        <td style="vertical-align: middle" width="100px"><b>{{ ambiente.idAmbienteTrabalho }}</b></td>
                        <td>{{ ambiente.idOrigem }}</td>
                        <td style="text-align:justify">{{ ambiente.nomeAmbienteTrabalho }}</td>
                        <td>{{ ambiente.subCodigo }}</td>
                        <td>{{ camelize(ambiente.estabelecimento) }}</td>
                        <td class="text-center">{{ ambiente.funcoes.length }}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>

    <div class="box box-info" v-if="listar">
        <!-- /.box-header -->
        <div class="col-md-12 mt-3 text-center">
                <h5 class="bg-success p-3 text-light">Cargos de {{ambiente.nomeAmbienteTrabalho}}</h5>
            </div>
        <div class="box-body table-responsive">
            
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID RH</th>
                        <th>Cargo</th>
                        <th>CBO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="funcao in ambiente.funcoes">
                        <td style="vertical-align: middle" width="100px"><b>{{ funcao.idFuncao }}</b></td>
                        <td>{{ funcao.idRH }}</td>
                        <td style="text-align:justify">{{ funcao.cargo }}</td>
                        <td>{{ funcao.cbo.codigoCbo }}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    </div>
</section>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            ambientes: [],
            carregando: false,
            ambiente: {},
            listar: false,
            mensagem: 'Carregando Ambiente de Trabalho cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',

        }
    },
    methods: {
        camelize(str) {
            if (str == 'PRÓPRIO') {
                return 'Próprio';
            } else if (str == 'TERCEIROS') {
                return 'Terceiros';
            } else if (str == 'SERVIÇOS_TERCEIROS') {
                return 'Serviços Terceiros';

            }
        },

        listarFuncoes(ambiente) {
            this.ambiente = ambiente;
            this.listar = true;
        }
    },
    mounted() {
        var that = this;
        console.log('cnpj', that.empresa.inscricao.replace(/[^0-9]/g, ''));
        axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(
            function (response) {
                that.ambientes = response.data;
            });

    }
}
</script>

<style>

</style>
