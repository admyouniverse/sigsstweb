<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <b-card class="sig" no-body>
        <b-tabs card>
            <b-tab title="Entrada de EPI" active>
                <table v-if="entradas.length > 0" class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entrada in entradas">
                            <td>{{entrada.idEntradaEpi}}</td>
                            <td>{{entrada.data | moment('DD/MM/YYYY')}}</td>
                            <td>{{entrada.descricao}}</td>
                            <td><button @click="editar(entrada)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                            <button @click="remover(entrada)" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="col-md-12" v-if="entradas.length == 0">
                    <div class="alert pt-3 alert-info text-center">
                        <h5 class="mb-0">Ainda não ocorreram entradas.</h5>
                    </div>
                </div>
                <div class="col-md-12 text-center">
                    <br>
                    <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                        Adicionar</button>
                </div>

                <b-modal ref="myModal" title="Entrada de EPI" @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" size="xl">
                    <div class="row">
                        <div class="col-md-5">
                            <label>EPI NR6</label>
                            <input type="text" disabled class="form-control" :value="item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi + '.' +item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.categoriaEpi.codigoCategoria + '.' + item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.codigoNr6 + ' ' + item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao">
                        </div>
                        <div class="col-md-5">
                            <label>Epi na Empresa</label>
                            <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.complemento">
                        </div>
                        <div class="col-md-2">
                            <label>Unidade</label>
                            <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.unidade">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label>Descriçao Detalhada do EPI</label>
                            <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.observacao">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <hr>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <label>ID Origem</label>
                            <input type="text" class="form-control" disabled v-model="item.gradeEmpresaEpi.idOrigem">
                        </div>
                        <div class="col-md-3">
                            <label>Código Barras</label>
                            <input type="text" class="form-control" disabled v-model="item.gradeEmpresaEpi.ean13">
                        </div>
                        <div class="col-md-2">
                            <label>Cor</label>
                            <input type="text" class="form-control" disabled v-model="item.gradeEmpresaEpi.cor.descricao">
                        </div>
                        <div class="col-md-2">
                            <label>Tamanho</label>
                            <input type="text" class="form-control" disabled v-model="item.gradeEmpresaEpi.tamanho.descricao">
                        </div>
                        <div class="col-md-2">
                            <label>CA</label>
                            <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cadastroEpiCa.ca">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-2">
                            <label>Est. Minimo</label>
                            <input type="text" disabled class="form-control" v-model="item.quantidadeMinima">
                        </div>
                        <div class="col-md-2">
                            <label>Saldo</label>
                            <input type="text" disabled class="form-control" v-model="item.quantidadeEstoque">
                        </div>
                        <div class="col-md-2">
                            <label>Quantidade</label>
                            <input type="number" class="form-control" v-model="entradaitem.quantidade">
                        </div>
                        <div class="col-md-2">
                            <label>R$ Unitário</label>
                            <money v-model="entradaitem.valorUnitario" v-bind="money" class="form-control"></money>
                        </div>
                        <div class="col-md-2">
                            <label >Saldo Atualizado</label>
                            <input type="text" class="form-control" disabled>
                        </div>
                        <div class="col-md-2">
                            <label>R$ Un. Estoque</label>
                            <money v-model="calcula" v-bind="money" disabled class="form-control"></money>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <label>Data</label>
                            <input type="date" class="form-control" v-model="entrada.data">
                        </div>
                        <div class="col-md-8">
                            <label>Fabricante</label>
                            <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cadastroEpiCa.fabricante">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label>Descrição</label>
                            <input type="text" v-model="entrada.descricao" class="form-control">
                        </div>
                    </div>
                </b-modal>
            </b-tab>
        </b-tabs>
    </b-card>

</section>
</template>

<script>
import {
    Money
} from 'v-money'
export default {
    props: ['posto', 'empresa', 'item'],
    components: {
        Money
    },
    data() {
        return {
            itens: [],
            calcula: 0,
            entradas: [],
            carregando: false,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
            },
            entrada: {
                tipo: 'ENTRADA',
                idEntradaEpi: 0,
                data: '',
                descricao: ''
            },
            entradaitem: {
                idEntradaEpiItens: 0,
                valorUnitario: 0,
            },
            epi: {}
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
        abrir() {
            this.editando = false;
            var that = this;
            
            this.entrada = {
                tipo: 'ENTRADA',
                idEntradaEpi: 0,
                data: '',
                descricao: ''
            };

            this.$refs.myModal.show();
        },
        salvar() {
            var that = this;

            this.carregar('Salvando entrada...');
            this.entradaitem.estoque = this.item.idEstoque;

            axios.post("/posto-entrega/" + this.posto.idPostoEntrega +"/item/" + this.item.idEstoque, {
                entrada: that.entrada,
                item: that.entradaitem
            }).then(function(response) {
                axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/entrada-epis/listaPorIdEstoque/' + that.item.idEstoque).then(function(response) {
                    that.entradas = response.data;

                    that.sucesso('Entrada salva com sucesso!');
                });
            });
        },
        editar(entrada) {
            this.entrada = entrada;
            var that = this;
            axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/entrada-epi-itens/listaPorIdEntradaEpi/' + this.entrada.idEntradaEpi).then(function(response) {
                that.entradaitem = response.data[0];
                that.$refs.myModal.show();
            });
        },

        remover(entrada) {
            
        }
    },
    mounted() {
        var that = this;
        
        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/entrada-epis/listaPorIdEstoque/' + this.item.idEstoque).then(function(response) {
            that.entradas = response.data;
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
