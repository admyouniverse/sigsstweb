<template>
<div class="col-md-12">
    <table class="table table-hover table-striped">
        <tbody>
            <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Cor</th>
                <th class="text-center no-sort">Ações</th>
            </tr>
            <tr v-for="nivel in nivels" v-if="nivel.matrizRisco.idMatrizRisco == matriz.idMatrizRisco">
                <td>{{nivel.idMatrizRiscoNivel}}</td>
                <td>{{nivel.descricao}}</td>
                <td>{{nivel.valor}}</td>
                <td :style="'width: 150px; background-color:' + nivel.cor"></td>
                <td width="100px" style="vertical-align: middle" class="text-center">
                    <button type="button" @click="remover(nivel)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                    <button type="button" @click="preencher(nivel)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="row">
        <div class="col-md-12">
            <button class="btn btn-primary" @click="abrir">Adicionar</button>
        </div>
    </div>

    <b-modal size="md" centered :no-close-on-backdrop="true" @ok="salvar" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Nivel da 
    " ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="nivel.idMatrizRiscoNivel" class="form-control">
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <input type="text" v-model="nivel.descricao" class="form-control">
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Valor</label>
                    <input type="text" class="form-control" v-model="nivel.valor">
                </div>
            </div>

			<div class="col-md-12">
				<div class="form-group">
					<label for="">Cor</label>
					<input type="color" name="cor" class="form-control" v-model="nivel.cor">
				</div>
			</div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir este nível de risco?</h3>
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
</div>
</template>

<script>
export default {
    props: ['matriz'],
    data() {
        return {
            nivels: [],
            nivel: {
                "idMatrizRiscoNivel": 0,
                "descricao": "",
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

            this.carregar('Salvando novo nivel...');
            var that = this;

            axios.post('/nivel-matriz', {
                nivel: that.nivel,
                matriz: that.matriz
            }).then(function (response) {
                that.nivels = response.data;

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

            this.nivel = {
                idMatrizRiscoNivel: 0,
                descricao: ''
            }

            this.$refs.myModal.show();

        },

        preencher: function (dados) {
            this.carregar('Carregando dados...');

            this.nivel = dados;

            this.$refs.myModal.show();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {
            this.deletar = dados.idMatrizRiscoNivel;
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
            this.carregar('Removendo nivel...');
            var that = this;
            axios.get('/nivel-matriz/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.nivels = response.data;

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

        axios.get('/nivel-matriz/list').then(function (response) {
            that.nivels = response.data;
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
