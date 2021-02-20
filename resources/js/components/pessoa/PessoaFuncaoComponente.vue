<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div v-if="montou" class="box box-info">

        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th style="vertical-align: middle" width="80px">
                            ID Empresa
                        </th>
                        <th style="vertical-align: middle">
                            Matricula
                        </th>
                        <th style="vertical-align: middle">Ambiente</th>
                        <th style="vertical-align: middle">Cargo</th>
                        <th style="vertical-align: middle">Dt Admissão</th>
                        <th style="vertical-align: middle">Dt Mudança</th>
                        <th style="vertical-align: middle">Dt Final</th>
                        <th style="vertical-align: middle">Tempo</th>
                        <th style="vertical-align: middle">Tipo Operação</th>
                        <th style="vertical-align: middle">Contratante</th>
                    </tr>
                    <tr v-for="funcao in funcoes">
                        <td style="vertical-align: middle" width="99px"><b>{{ funcao.empresaContrato.empresa.idEmpresa }}</b></td>
                        <td style="vertical-align: middle"><b>{{ funcao.matricula }}</b></td>
                        <td style="vertical-align: middle"><b>{{ funcao.ambienteTrabalho.nomeAmbienteTrabalho }}</b></td>
                        <td style="vertical-align: middle"><b>{{ funcao.funcao.cargo }}</b></td>
                        <td>{{ funcao.dataInicial | moment("DD/MM/Y") }}</td>
                        <td>{{ funcao.dataFuncao | moment("DD/MM/Y") }}</td>
                        <td>{{ funcao.dataFinal | moment("DD/MM/Y") }}</td>
                        <td>{{ funcao.ano }}A, {{ funcao.mes }}M,
                            {{ funcao.dia }}D</td>
                        <td>{{ formataTipo(funcao.tipoOperacao) }}</td>
                        <td>{{ funcao.empresaContrato.empresaContratante.nomeFantasia }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->

    </div>
</section>
</template>

<script>
export default {
    props: ['pessoa'],
    data() {
        return {
            funcoes: [],

            carregando: true,
            mensagem: 'Carregando funções cadastradas',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            atual: [],
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

        formataTipo: function (tipo) {
            if (tipo == 'ADMISSIONAL') {
                return 'Adm';
            } else if (tipo == 'DEMISSIONAL') {
                return 'Dem';
            } else if (tipo == 'MUDANÇA_DE_FUNÇÃO') {
                return 'M. Fun';
            } else if (tipo == 'MUDANÇA_DE_CONTRATANTE') {
                return 'M. Con';
            } else if (tipo == 'TRANSFERÊNCIA') {
                return 'Trans';
            }
        }
    },
    mounted() {
        console.log(this.pessoa);

        var that = this;

        this.carregando = true;

        axios.get('/pessoas/funcao/list/' + this.pessoa.idPessoa).then(function (response) {
            that.funcoes = response.data;
            that.montou = true;
            console.log(that.capacitacoes);
            setTimeout(function () {
                that.carregando = false;
            }, 200);
        });
    }
}
</script>

<style lang="scss">

</style>
