<template>
 <b-tab title="Entrada de EPI" @click="ativaOrdem">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <b-card-text>
        <table v-if="entradas.length > 0" class="table table-hover table-striped" id="tabelaEntradas">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Fornecedor</th>
                    <th>CNPJ</th>
                    <th>Nota Fiscal</th>
                    <th class="text-center">Ef. ao Estoque</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entrada in entradas" :class="{'bg-primary': entrada.estoqueAtualizado != 'SIM'}">
                    <td>{{entrada.idEntradaEpi}} </td>
                    <td>{{entrada.data | moment('DD/MM/YYYY')}}</td>
                    <td>{{entrada.fornecedor.nomeFantasia}}</td>
                    <td>{{entrada.fornecedor.cnpj}}</td>
                    <td>{{entrada.numeroNotaFiscal}}</td>
                    <td class="text-center">{{entrada.estoqueAtualizado}}</td>
                    <td><button @click="editar(entrada)" class="btn btn-sm btn-outline-primary">
                        <i class="fas fa-pencil-alt" v-if="entrada.estoqueAtualizado == 'NAO'"></i>
                        <i class="far fa-eye" v-if="entrada.estoqueAtualizado == 'SIM'"></i>
                    </button>
                        <button @click="remover(entrada)" v-if="entrada.estoqueAtualizado != 'SIM'" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                        <button @click="atualizarEstoque(entrada)" v-if="entrada.estoqueAtualizado != 'SIM'" class="btn btn-sm btn-outline-secondary"><i class="fas fa-check"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="col-md-12 text-center">
            <br>
            <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                Adicionar</button>
        </div>
        <b-modal ref="myModal" title="Entrada de Item" @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" size="xl" :hide-footer="entrada.estoqueAtualizado == 'SIM'">
            <div class="row">
                <div class="col-md-2">
                    <label>ID</label>
                    <input type="text" v-model="entrada.idEntradaEpi" disabled class="form-control">
                </div>
                <div class="col-md-3">
                    <label>Número da Nota</label>
                    <input type="text" v-model="entrada.numeroNotaFiscal"  :disabled="entrada.estoqueAtualizado == 'SIM'" class="form-control">
                </div>
                <div class="col-md-3">
                    <label>Data</label>
                    <input type="date" v-model="entrada.data" :disabled="entrada.estoqueAtualizado == 'SIM'" class="form-control">
                </div>
                <div class="col-md-4">
                    <label>Fornecedor</label>
                    <select class="form-control" :disabled="entrada.estoqueAtualizado == 'SIM'" v-model="entrada.fornecedor">
                        <option :value="fornecedor" v-for="fornecedor in fornecedores">{{ fornecedor.razaoSocial }}</option>
                    </select>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <h5>Itens</h5>
                    <hr>
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th>Descrição</th>
                                <th>Cor</th>
                                <th class="text-center">Tamanho</th>
                                <th class="text-center">C.A</th>
                                <th>Fabricante</th>
                                <th style="width: 105px">Estoque Min</th>
                                <th style="width: 100px">Quantidade</th>
                                <th style="width: 150px">Valor Unitário</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(entradaitem, index) in entradaitens" :class="{'bg-warning': entradaitem.estoque.idEstoque == 0 }">
                                <td class="text-center">{{ entradaitem.estoque.gradeEmpresaEpi.idOrigem }}</td>
                                <td>{{entradaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao}}</td>
                                <td>{{entradaitem.estoque.gradeEmpresaEpi.cor.descricao}}</td>
                                <td class="text-center">{{entradaitem.estoque.gradeEmpresaEpi.tamanho.descricao}}</td>
                                <td class="text-center">{{ entradaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.ca }}</td>
                                <td>{{ entradaitem.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante }}</td>
                                <td class="text-center">
                                    <input type="number" v-model="entradaitem.estoque.quantidadeMinima" v-if="!entradaitem.estoque.idEstoque > 0" class="form-control">
                                    <span v-if="entradaitem.estoque.idEstoque > 0">
                                        {{ entradaitem.estoque.quantidadeMinima }}
                                    </span>
                                </td>
                                <td><input type="number" v-model="entradaitem.quantidade" :disabled="entrada.estoqueAtualizado == 'SIM'" class="form-control"></td>
                                <td>
                                    <money v-model="entradaitem.valorUnitario" class="form-control" :disabled="entrada.estoqueAtualizado == 'SIM'"  v-bind="money"></money>
                                </td>
                                <td><button v-if="entrada.estoqueAtualizado != 'SIM'" class="btn btn-outline-danger btn-sm" @click="removerItem(index)"><i class="fas fa-trash"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-md-12" v-if="entrada.estoqueAtualizado != 'SIM'">
                    <button class="btn btn-success" @click="listaItens"><i class="fa fa-plus"></i> Adicionar</button>
                        <button @click="atualizarEstoque(entrada)" v-if="entrada.estoqueAtualizado != 'SIM' && entrada.idEntradaEpi != 0" class="btn btn-success pull-right">Adicionar ao Estoque</button>
                </div>
            </div>
        </b-modal>

        <b-modal @shown="exibeTabela" ref="itensModal" title="Itens no Posto" @ok="adicionarItem" ok-title="Incluir" cancel-title="Cancelar" size="lg">
            <table class="table table-hover table-striped" id="tabelaItens" >
                <thead>
                    <tr>
                        <th class="text-center">ID</th> 
                        <th>Descrição</th>
                        <th>Cor</th>
                        <th class="text-center">Tamanho</th>
                        <th class="text-center">C.A</th>
                        <th>Fabricante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="gradeEmpresaEpi in gradeEmpresaEpis" v-if="!estaAdicionado(gradeEmpresaEpi)" @click="selecionar(gradeEmpresaEpi)" :class="{'selecionado': estaSelecionado(gradeEmpresaEpi)}" style="cursor: pointer">
                        <td class="text-center">{{ gradeEmpresaEpi.idOrigem }}</td>
                        <td>{{gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao}}</td>
                        <td>{{gradeEmpresaEpi.cor.descricao}}</td>
                        <td class="text-center">{{gradeEmpresaEpi.tamanho.descricao}}</td>
                        <td class="text-center">{{ gradeEmpresaEpi.cadastroEpiCa.ca }}</td>
                        <td>{{ gradeEmpresaEpi.cadastroEpiCa.fabricante }}</td>
                    </tr>
                </tbody>
            </table>
        </b-modal>
    </b-card-text>
 </b-tab>
</template>

<script>
import {
    Money
} from 'v-money'
export default {
    props: ['posto', 'empresa'],
    components: {
        Money
    },
    data() {
        return {
            itens: [],
            gradeEmpresaEpis: [],
            calcula: 0,
            entradas: [],
            fornecedores: [],
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
            entradaitens: [],
            epi: {},
            selecionados: [],
            carregando: false,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
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
        removerItem(index) {
            this.entradaitens.splice(index, 1);
        },
        adicionarItem(evt) {
            evt.preventDefault();

            // console.log(this.selecionados);

            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
                var estoques = response.data;
                // console.log(estoques);
                // console.log(that.selecionados);
                that.selecionados.forEach(function (selecionado) {

                    console.log(selecionado);
                    var key = estoques.findIndex(x => x.gradeEmpresaEpi.idGradeEmpresaEpi == selecionado.idGradeEmpresaEpi);
                    console.log(key);
                    if (key > 0) {
                        var estoque = estoques[key];
                    } else {
                        var estoque = {
                            "idEstoque": 0,
                            "gradeEmpresaEpi": selecionado,
                            "postoEntrega": that.posto,
                            "quantidadeEstoque": 0,
                            "quantidadeMinima": 0,
                            "valorUnitario": 0,
                            "usuario": 1
                        }
                    }

                    that.entradaitens.push({
                        idEntradaEpiItens: 0,
                        valorUnitario: 0,
                        entradaEpi: that.entradaEpi,
                        estoque: estoque,
                        quantidade: 0,
                        observacao: ''
                    });

                });

                that.$refs.itensModal.hide();
                that.selecionados = [];
            });

        },
        abrir() {
            var that = this;
            this.entrada = {
                tipo: 'ENTRADA',
                idEntradaEpi: 0,
                data: '',
                descricao: ''
            }

             this.entradaitens = [];
            this.$refs.myModal.show();

        },
        selecionar(gradeEmpresaEpi) {
            if (this.estaSelecionado(gradeEmpresaEpi)) {
                var key = this.selecionados.findIndex(x => x.idGradeEmpresaEpi == gradeEmpresaEpi.idGradeEmpresaEpi);
                this.selecionados.splice(key, 1);
            } else {
                this.selecionados.push(gradeEmpresaEpi);
            }
        },
        estaSelecionado(gradeEmpresaEpi) {
            return this.selecionados.includes(gradeEmpresaEpi);
        },
        estaAdicionado(gradeEmpresaEpi) {

            var key = this.entradaitens.findIndex(x => x.estoque.gradeEmpresaEpi.idGradeEmpresaEpi == gradeEmpresaEpi.idGradeEmpresaEpi);

            if (key < 0) {
                return false;
            } else {
                return true;
            }
        },
        listaItens() {
            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
                that.gradeEmpresaEpis = response.data;
                // that.carregando = false;
                $('#tabelaItens').DataTable().destroy();

                 
                that.$refs.itensModal.show();
            });
        },

        exibeTabela() {
            
            $('#tabelaItens').DataTable({
                    "lengthMenu": [
                        [50, -1],
                        [50, "Todos"]
                    ],
                    "columnDefs": [{
                        "targets": 'no-sort',
                        "orderable": false,
                    }],
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                    }
            });
        },

        salvar(evt) {
            evt.preventDefault();

            var that = this;
            
            this.carregar('Salvando entrada...');
            axios.post("/posto-entrega/" + this.posto.idPostoEntrega + "/item/multiplos", {
                entrada: that.entrada,
                itens: that.entradaitens
            }).then(function (response) {

                axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/entrada-epis/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
                    $('#tabelaEntradas').DataTable().destroy();
                    that.entradas = response.data;
                    that.$nextTick(() => {
                        that.ativaOrdem();
                    });

                    that.$refs.myModal.hide();
                    that.sucesso('Entrada salva com sucesso!');
                });

            });
        },
        editar(entrada) {
            this.entrada = entrada;
            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/entrada-epi-itens/listaPorIdEntradaEpi/' + this.entrada.idEntradaEpi).then(function (response) {
                that.entradaitens = response.data;
                that.$refs.myModal.show();
            });
        },
        atualizarEstoque(entrada) {
            var that = this;
            axios.get("/posto-entrega/" + this.posto.idPostoEntrega + "/entrada/" + entrada.idEntradaEpi + "/estoque").then(function (response) {
                axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/entrada-epis/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
                    that.entradas = response.data;
                    that.$nextTick(() => {
                        that.ativaOrdem();
                    });
                });

                that.$refs.myModal.hide();

            });

        },
        remover(entrada) {},
        ativaOrdem() {
             $('#tabelaEntradas').DataTable().destroy();

            $.fn.dataTable.moment('DD/MM/YYYY'); //Formatação sem Hora

            $('#tabelaEntradas').DataTable({
                    "order": [[1, "desc"]],
                    "lengthMenu": [
                        [50, -1],
                        [50, "Todos"]
                    ],
                    "columnDefs": [{
                        "targets": 'no-sort',
                        "orderable": false,
                    }],
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
                    }
            });
        }
    },
    mounted() {
        var that = this;

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/entrada-epis/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
            that.entradas = response.data;
        });

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/fornecedores/').then(function (response) {
            that.fornecedores = response.data;

        });
    }
}
</script>

<style lang="scss" scoped>
.selecionado {
    background-color: #71bb66 !important;
}

.bg-warning {
    background-color: #fde4bc !important;
}

tr.bg-primary {
    background-color: #c0b5fd !important;
}
</style>
