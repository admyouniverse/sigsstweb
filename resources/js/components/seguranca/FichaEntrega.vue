<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="box box-default">
        <div class="box-body table-responsive">
        <b-card class="sig" no-body>
            <b-tabs pills card>
                <b-tab title="Ativos" active>
                    <b-card-text id="tabelaEmpregados">
                        <div class="col-md-12">
                            <div class="box-body box-empregados table-responsive">
                                <table id="tabelaListagemEmpregados" class="table table-hover table-striped table-empregados">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="cursor: pointer" @click="selecionar(funcionario)" v-for="funcionario in funcionarios">
                                            <td>{{ funcionario.pessoa.idPessoa }}</td>
                                            <td>{{ funcionario.matricula }}</td>
                                            <td>{{ funcionario.pessoa.nomePessoa }}</td>
                                            <td>{{ funcionario.pessoa.cpf }}</td>
                                            <td>{{ funcionario.dataInicial | moment("DD/MM/Y") }}</td>
                                            <td>{{ funcionario.dataFuncao | moment("DD/MM/Y") }}</td>
                                            <td>{{ funcionario.funcao.cargo }}</td>
                                            <td>{{ formataEstabelecimento(funcionario.ambienteTrabalho.estabelecimento) }}
                                                -
                                                {{ funcionario.ambienteTrabalho.nomeAmbienteTrabalho }}</td>

                                            <td>{{ funcionario.pessoa.dataNascimento | moment("DD/MM/Y")}}</td>
                                            <td>{{ formataSexo(funcionario.pessoa.sexo) }}</td>
                                            <td>{{ funcionario.ano }}A, {{ funcionario.mes }}M,
                                                {{ funcionario.dia }}D</td>
                                            <td>{{ funcionario.empresaContrato.empresaContratante.nomeFantasia }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab title="Inativos">
                    <b-card-text id="tabelaEmpregados">
                        <div class="col-md-12">
                            <div class="box-body box-empregados table-responsive">
                                <table id="tabelaListagemEmpregados" class="table table-hover table-striped table-empregados">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Matrícula</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Dt. Adm</th>
                                            <th>Dt. Cargo</th>
                                            <th>Cargo</th>
                                            <th>Ambiente</th>
                                            <th>Dt. Nasc</th>
                                            <th>Sexo</th>
                                            <th>Tempo</th>
                                            <th>Contratante</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="cursor: pointer" @click="selecionar(inativo)" v-for="inativo in inativos">
                                            <td>{{ inativo.pessoa.idPessoa }}</td>
                                            <td>{{ inativo.matricula }}</td>
                                            <td>{{ inativo.pessoa.nomePessoa }}</td>
                                            <td>{{ inativo.pessoa.cpf }}</td>
                                            <td>{{ inativo.dataInicial | moment("DD/MM/Y") }}</td>
                                            <td>{{ inativo.dataFuncao | moment("DD/MM/Y") }}</td>
                                            <td>{{ inativo.funcao.cargo }}</td>
                                            <td>{{ formataEstabelecimento(inativo.ambienteTrabalho.estabelecimento) }}
                                                -
                                                {{ inativo.ambienteTrabalho.nomeAmbienteTrabalho }}</td>

                                            <td>{{ inativo.pessoa.dataNascimento | moment("DD/MM/Y")}}</td>
                                            <td>{{ formataSexo(inativo.pessoa.sexo) }}</td>
                                            <td>{{ inativo.ano }}A, {{ inativo.mes }}M,
                                                {{ inativo.dia }}D</td>
                                            <td>{{ inativo.empresaContrato.empresaContratante.nomeFantasia }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
				<b-tab title="Outras Unidades"></b-tab>
            </b-tabs>
        </b-card>
        </div>
    </div>
</section>
    
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            entregas: [],
            funcionarios: [],
            inativos: []
        }
    },
    computed: {
        parametro() {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            return params.get("acao");
        }
    },
    methods: {
        abrir: function() {
            this.mensagem = 'Carregando empregados...';
            var that = this;
            
        },
        formataEstabelecimento: function (estabelecimento) {
            if (estabelecimento == 'PRÓPRIO') {
                return 'P';
            } else if (estabelecimento == 'TERCEIROS') {
                return 'T';
            } else if (estabelecimento == 'SERVIÇOS_TERCEIROS') {
                return 'ST';
            }
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
        },
        formataSexo: function (sexo) {
            if (sexo == 'MASCULINO') {
                return 'M';
            } else if (sexo == 'FEMININO') {
                return 'F';
            }
        },
        salvar: function() {

        }
    },
    mounted() {
        var that = this;
		axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
                that.funcionarios = response.data;
            });

            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaDemitidosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                that.inativos = response.data;

            });
            
    }
}
</script>

<style lang="scss" scoped>
	.sig {
		.card-body {
			padding: 0;
		}
	}
</style>
