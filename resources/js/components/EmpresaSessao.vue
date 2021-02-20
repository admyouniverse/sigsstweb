<template>
    <span>
        <li class="nav-item">
            <button class="btn btn-sucess nav-link" @click="carregarEmpresa">
                <span v-if="empresa">
                    {{ empresa.idEmpresa }} - {{ empresa.nomeFantasia }}
                </span>
                <span v-if="!empresa">
                    Sem empresa na sessão
                </span>
            </button>
        </li>

        <b-modal ref="modalEmpresa" cancel-variant="success" cancel-title="Limpar sessão" @cancel="limparSessao()" size="lg" ok-title="Fechar" title="Escolha a empresa para adicionar na sessão">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <th class="text-center">
                                    <strong>ID</strong>
                                </th>
                                <th class="text-center">
                                    <strong>Nome</strong>
                                </th>
                                <th class="text-center">
                                    <strong>Unidade</strong>
                                </th>
                                <th class="text-center">
                                    <strong>CNPJ/CPF</strong>
                                </th>
                            </tr>

                            <tr @click="selecionarEmpresa(empresa)" style="cursor: pointer" v-for="empresa in empresas">
                                <td class="text-center">
                                    {{ empresa.idEmpresa }}
                                </td>
                                <td class="text-center">
                                    {{ empresa.nomeFantasia }}
                                </td>
                                <td class="text-center">
                                    {{ empresa.nomeUnidade }}
                                </td>
                                <td class="text-center">
                                    {{ empresa.inscricao }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </b-modal>
    </span>
</template>

<script>
export default {
    mounted() {
        var that = this;
    },
    data() {
        return {
            empresas: []
        };
    },
    methods: {
        limparSessao() {
            window.location.href = "/limpar-sessao/";
        },
        selecionarEmpresa(empresa) {
            this.$store.state.postos = null;
            window.location.href = '/sessao/' + empresa.idEmpresa;
        },
        carregarEmpresa() {
            var that = this;
            axios
                .get("http://200.98.201.236/ServicoSIGSSO/rest/empresas/")
                .then(function(response) {
                    that.empresas = response.data;
                    that.$refs.modalEmpresa.show();
                });
        }
    },
    props: ["empresa"]
};
</script>

<style></style>
