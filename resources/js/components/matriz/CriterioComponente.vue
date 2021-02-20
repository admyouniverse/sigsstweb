<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
        </div>
    </div>
    <div v-if="montou" class="box box-info">

        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Operação</th>
                        <th>Cor</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                    <tr v-for="criterio in criterios">
                        <td>{{criterio.idCriterio}}</td>
                        <td>{{criterio.descricao}}</td>
                        <td>{{criterio.valor}}</td>
                        <td>{{criterio.operacao}}</td>
                        <td>{{criterio.cor}}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(criterio)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(criterio)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="md" centered :no-close-on-backdrop="true" @ok="salvar" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Critério" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="criterio.idCriterio" class="form-control">
                </div>
            </div>

            <div class="col-md-9">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <input type="text" v-model="criterio.descricao" class="form-control">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Valor</label>
                    <input type="text" class="form-control" v-model="criterio.valor">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Operação</label>
                    <select v-model="criterio.operacao" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="SOMA">Soma</option>
                        <option value="MULTIPLICACAO">Multiplicação</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Cor</label>
                    <select v-model="criterio.cor" class="form-control">
                        <option value="SELECIONE">Selecione</option>
                        <option value="AMARELO">Amarelo</option>
                        <option value="VERMELHO">Vermelho</option>
                        <option value="VERDE">Verde</option>
                    </select>
                </div>
            </div>


        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este critério?</h3>
            </div>
        </div>
        <div class="row" style="margin-top: 20px">
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-secondary btn-lg" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
            </div>
            <div class="col-md-6 text-center">
                <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
            </div>
        </div>
    </b-modal>
</section>
</template>

<script>
export default {
    data() {
        return {
            criterios: [],
            criterio: {
                "idCriterio": 0,
                "descricao": "",
                "valor": 0,
                "operacao": 'SELECIONE',
                "cor": 'SELECIONE'
            },
            carregando: true,
            mensagem: 'Carregando itens cadastrados...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
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

        salvar: function () {

            this.carregar('Salvando novo criterio...');
            var that = this;
          
                axios.post('/criterio', {
                    criterio: that.criterio
                }).then(function (response) {
                    that.criterios = response.data;

                       that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });

                });

            
        },

        atualizar: function () {

            var that = this;
            this.carregar('Atualizando cidade...');
            if (this.ibge == '' || this.nome == '' || this.uf == '') {
                that.alerta('Preencha todos os campos!');
            } else {
                axios.post('/tabelas/cidades/update/' + this.id, {
                    nome: that.nome,
                    ibge: that.ibge,
                    uf: that.uf,

                }).then(function (response) {
                    if (response.data == 'existente') {
                        that.ibge = '';
                        that.erro = true;
                        that.alerta('Código IBGE já existente, verifique!!')
                    } else {
                        that.cidades = response.data;
                        that.nome = '';
                        that.ibge = '';
                        that.uf = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Atualizado com sucesso!');
                        });

                    }

                });
            }

        },

        abrir: function () {

            this.criterio = {
                idCriterio: 0,
                descricao: ''
            }

            this.$refs.myModal.show();

        },

        preencher: function (dados) {
            this.carregar('Carregando dados...');

            this.criterio = dados;

            this.$refs.myModal.show();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {
            this.deletar = dados.idCriterio;
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();
        },

        fechar: function () {
            this.editar = false;
            this.nome = '';
            this.ibge = '';
            this.id = '';
            this.uf = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo criterio...');
            var that = this;
            axios.get('/criterio/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.criterios = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        },

    },
    mounted() {
        var that = this;
        axios.get('/criterio/list').then(function (response) {
            that.criterios = response.data;
            that.montou = true;
            setTimeout(function () {
                that.carregando = false;
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
