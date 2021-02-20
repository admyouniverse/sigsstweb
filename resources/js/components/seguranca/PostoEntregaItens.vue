<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <b-card class="sig" no-body >
        <b-tabs card>
            <b-tab title="Entrega de Epi" :active="parametro == 'entrega'" lazy>
                <entrega-epi :posto="posto" :empresa="empresa" :usuario="usuario"></entrega-epi>
            </b-tab>
            <entrada-epi-multipla :posto="posto" :empresa="empresa"></entrada-epi-multipla>
            <b-tab title="Itens de Estoque" :active="parametro != 'entrega'"  @click="atualiza">
                <b-card-text>
                    <table class="table table-hover table-striped" id="tabelaPosto">
                        <thead>
                            <tr>
                                <th class="text-center">ID do EPI</th>
                                <th>Descrição do EPI</th>
                                <th>Cor</th>
                                <th class="text-center">Tamanho</th>
                                <th class="text-center">Minimo</th>
                                <th class="text-center">Estoque</th>
                                <th class="text-center">C.A</th>
                                <th>Fabricante</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in itens" @click="abrirItem(item)">
                                <td class="text-center">{{ item.gradeEmpresaEpi.idOrigem }}</td>
                                <td>{{item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao}}</td>
                                <td>{{item.gradeEmpresaEpi.cor.descricao}}</td>
                                <td class="text-center">{{item.gradeEmpresaEpi.tamanho.descricao}}</td>
                                <td class="text-center">{{ item.quantidadeMinima }}</td>
                                <td class="text-center">{{ item.quantidadeEstoque }}</td>
                                <td class="text-center">{{ item.gradeEmpresaEpi.cadastroEpiCa.ca }}</td>
                                <td>{{ item.gradeEmpresaEpi.cadastroEpiCa.fabricante }}</td>
                                <td>
                                    <button type="button" @click.stop="editar(item)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                    </button>

                                    <!-- <button type="button" @click.stop="remover(item)" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i>
                                    </button> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="col-md-12 text-center">
                        <br>
                        <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                            Adicionar</button>
                    </div>
                    <b-modal ref="myModal" title="Item" @ok="salvar" ok-title="Salvar" cancel-title="Cancelar" size="lg">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="">Tipo do EPI</label>
                                    <select v-model="epi" @change="carregaGrade" class="form-control" :disabled="editando">
                                        <option :value="epi" v-for="epi in epis">{{epi.epi.descricao}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="">ID do Epi</label>
                                    <select v-model="item.gradeEmpresaEpi" class="form-control" :disabled="editando">
                                        <option v-if="(!itemEmEstoque(grade)) || grade.idGradeEmpresaEpi === atual" :value="grade" v-for="grade in grades">{{grade.idOrigem}} | {{grade.cor.descricao}} - {{grade.tamanho.descricao}} ({{ grade.cadastroEpiCa.fabricante }})</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Cor</label>
                                    <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.cor.descricao">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Tamanho</label>
                                    <input type="text" disabled class="form-control" v-model="item.gradeEmpresaEpi.tamanho.descricao">
                                </div>
                            </div>
                             <div class="col-md-2">
                                <div class="form-group">
                                    <label>CA</label>
                                    <input type="text" v-model="item.gradeEmpresaEpi.cadastroEpiCa.ca" class="form-control" disabled>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Fabricante</label>
                                    <input type="text" v-model="item.gradeEmpresaEpi.cadastroEpiCa.fabricante" class="form-control" disabled>
                                </div>
                            </div>
                           
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Quantidade Minima</label>
                                    <input type="number" v-model="item.quantidadeMinima" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Quantidade Estoque</label>
                                    <input type="number" disabled v-model="item.quantidadeEstoque" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Valor</label>
                                    <money disabled v-bind="money" class="form-control" v-model="item.valorUnitario"></money>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                </b-card-text>
            </b-tab>
            <b-tab title="Transferência"></b-tab>
            <b-tab title="Ajuste de Estoque"></b-tab>
        </b-tabs>
    </b-card>
</section>
</template>

<script>
import {
    Money
} from 'v-money'
export default {
    props: ['empresa', 'posto', 'usuario'],
    components: {
        Money
    },
    data() {
        return {
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            itens: [],
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false
            },
            item: {
                quantidadeEstoque: 0,
                gradeEmpresaEpi: {
                    cor: {},
                    tamanho: {},
                    cadastroEpiCa: {}
                },
            },
    
            epis: [],
            epi: {},
            grades: [],
            atual: 0,
            editando: false

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
        
        abrirItem(item) {
            window.location.href = "/posto-entrega/" + this.posto.idPostoEntrega +"/item/" + item.idEstoque;
        },
        abrir() {
            this.item = {
                quantidadeEstoque: 0,
                gradeEmpresaEpi: {
                    cor: {},
                    tamanho: {},
                    cadastroEpiCa: {}
                }
            }

            this.item.idEstoque = 0;
            this.item.postoEntrega = this.posto.idPostoEntrega;
            this.editando = false;
            var that = this;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/cadastro-epis/').then(function (response) {
                that.epis = response.data;
            });

            this.$refs.myModal.show();
        },
        carregaGrade() {
            var that = this;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
                that.grades = response.data;
            });
        },
        salvar() {
            var that = this;
            that.mensagem = 'Salvando...';
            that.carregando = true;
            this.item.postoEntrega = this.posto.idPostoEntrega;
            axios.post('/posto-entrega/' + this.posto.idPostoEntrega, {
                item: that.item
            }).then(function (response) {
                if (response.data.status == "true") {
                    axios.get('http://200.98.201.236/ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
                        that.itens = response.data;
                        that.carregando = false;
                    });
                }
            });
        },

        editar(item) {
            this.item = item;
            this.epi = item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi;
            this.atual = item.gradeEmpresaEpi.idGradeEmpresaEpi;
            this.editando = true;
            var that = this;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
                that.grades = response.data;
                axios.get('http://200.98.201.236/ServicoSIGSSO/rest/cadastro-epis/').then(function (response) {
                    that.epis = response.data;
                    that.$refs.myModal.show();
                });
            });
        },

        remover(item) {
            var that = this;

            axios.get('/posto-entrega/excluir-item/' + item.idEstoque).then(function (response) {
                if (response.data.status == "true") {
                    axios.get('http://200.98.201.236/ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
                        that.itens = response.data;
                        that.carregando = false;
                    });
                }
            });
        },

        atualiza() {
            var that = this;

            axios.get('http://200.98.201.236/ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
            that.itens = response.data;

                that.$nextTick(() => {
                        that.ativaOrdem();
                        that.carregando = false;
                });
            
            });
        },

        itemEmEstoque(epi) {
            for (var i = 0; i < this.itens.length; i++) {
                console.log('grade', this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi);
                console.log('epi', epi.idGradeEmpresaEpi);
                console.log('booelan', this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi == epi.idGradeEmpresaEpi);
                if (this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi == epi.idGradeEmpresaEpi) {
                    console.log('ENTROU!!!!');
                    return true;
                }
            }

            return false;
        },

        ativaOrdem() {
             $('#tabelaPosto').DataTable().destroy();

            $.fn.dataTable.moment('DD/MM/YYYY'); //Formatação sem Hora

            $('#tabelaPosto').DataTable({
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

        axios.get('http://200.98.201.236/ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
            that.itens = response.data;

            that.$nextTick(() => {
                setTimeout(function() {
                    that.ativaOrdem();
                    that.carregando = false;
                }, 200);
            });
           
        });

    }
}
</script>

<style lang="scss" scoped>
thead {
    tr {
        th {
            font-weight: bolder
        }
    }

}


     tr {
        cursor: pointer;
    }
</style>
