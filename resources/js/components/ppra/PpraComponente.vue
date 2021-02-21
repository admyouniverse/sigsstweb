<template>
<!-- /.container -->
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

    <div class="box box-default">
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th @click="ordenar('versao')" v-bind:class="{'selecionado': this.coluna == 'versao'}">
                            Versão
                            <i v-if="this.coluna == 'versao' && this.ordem" class="fa fa-sort-alpha-asc"></i>
                            <i v-if="this.coluna == 'versao' && !this.ordem" class="fa fa-sort-alpha-desc"></i>
                        </th>
                        <th @click="ordenar('contratante')" v-bind:class="{'selecionado': this.coluna == 'contratante'}">
                            Contrat.
                            <i v-if="this.coluna == 'contratante' && this.ordem" class="fa fa-sort-alpha-asc"></i>
                            <i v-if="this.coluna == 'contratante' && !this.ordem" class="fa fa-sort-alpha-desc"></i>
                        </th>
                        <th>Tipo PPRA</th>
                        <th @click="ordenar('data')" v-bind:class="{'selecionado': this.coluna == 'data'}">
                            Data
                            <i v-if="this.coluna == 'data' && this.ordem" class="fa fa-sort-alpha-asc"></i>
                            <i v-if="this.coluna == 'data' && !this.ordem" class="fa fa-sort-alpha-desc"></i>
                        </th>
                        <th>Status</th>
                        <th>Situação</th>
                        <th></th>
                    </tr>
                    <tr v-for="ppra in ppras">
                        <td>{{ ppra.versao }}</td>
                        <td> <strong>{{ ppra.empresasContrato[0].empresaContratante.idEmpresa }}</strong> - {{ ppra.empresasContrato[0].empresaContratante.nomeFantasia }} </td>
                        <td>{{ tipoPpra(ppra.tipoPpra) }}</td>
                        <td>{{ ppra.dataHora | moment('DD/MM/YYYY') }}</td>
                        <td v-html="status(ppra.status)"></td>
                        <td v-html="situacao(ppra.liberado)"></td>
                        <td>
                            <a :href="'/gro/editar/' + ppra.idPpra" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></a>
                            <a href="#" @click="pdf(ppra)" v-if="ppra.caminhoPdf"><img src="/img/pdf.png" width="21px"></a>
                            <button v-if="ppra.liberado == 'LIBERADO'" @click="remover(ppra.idPpra)" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
                        </td>
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
            ppras: [],
            montou: false,
            carregando: true,
            mensagem: 'Carregando itens cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
        }
    },

    methods: {
        pdf(ppra) {
            if(ppra.caminhoPdf) {
                window.open('http://200.98.201.236:8080:8081/' + ppra.caminhoPdf);
            } else {
                alert('Não há PDF anexado.')
            }
        },
        remover(id) {
            var that = this;
            axios.get('/gro/deletar/' + id).then(function (response) {
                that.ppras = response.data;
                that.carregando = false;
            });
        },

        tipoPpra(tipo) {
            if (tipo == 'EMISSÃO') {
                return 'Emissão';
            } else if (tipo == 'REVISÃO_PARCIAL') {
                return 'Revisão Parcial';
            } else if (tipo == 'REVISÃO_GERAL') {
                return 'Revisão Geral';
            }
        },

          ordenar: function(coluna) {

            if (this.coluna == coluna) {
                this.ordem = !this.ordem;
            } else {
                this.ordem = true;
            }

            this.coluna = coluna;

            if (coluna == 'versao') {

                if (this.ordem == true) {

                    this.ppras.sort(function(a, b) {

                        if (a.versao > b.versao) {
                            return 1;
                        }

                        if (a.versao < b.versao) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.ppras.sort(function(a, b) {

                        if (a.versao > b.versao) {
                            return -1;
                        }

                        if (a.versao < b.versao) {
                            return 1;
                        }

                        return 0;

                    });
                }

            } else if (coluna == 'descricao') {
                if (this.ordem == true) {

                    this.ppras.sort(function(a, b) {

                        if (a.empresasContrato > b.empresasContrato) {
                            return 1;
                        }

                        if (a.empresasContrato < b.empresasContrato) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.ppras.sort(function(a, b) {

                        if (a.empresasContrato > b.empresasContrato) {
                            return -1;
                        }

                        if (a.empresasContrato < b.empresasContrato) {
                            return 1;
                        }

                        return 0;

                    });
                }
            } else if (coluna == 'data') {
                if (this.ordem == true) {

                    this.ppras.sort(function(a, b) {

                        if (a.dataHora > b.dataHora) {
                            return 1;
                        }

                        if (a.dataHora < b.dataHora) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.ppras.sort(function(a, b) {

                        if (a.dataHora > b.dataHora) {
                            return -1;
                        }

                        if (a.dataHora < b.dataHora) {
                            return 1;
                        }

                        return 0;

                    });
                }
            } 


        },

        status(status) {
            if (status == 'ELABORAÇÃO') {
                return "<strong style='color: red'>Em Elaboração</strong>";
            } else {
                return "Completo";
            }
        },

        situacao(situacao) {
            if (situacao == 'LIBERADO') {
                return "<strong style='color: red'>Liberado</strong>";
            } else {
                return "Congelado";
            }
        }
    },

    mounted() {
        var that = this;

        axios.get('/gro/list').then(function (response) {
            that.ppras = response.data;
            that.carregando = false;
        });

    }
}
</script>

<style lang="scss" scoped>

</style>
