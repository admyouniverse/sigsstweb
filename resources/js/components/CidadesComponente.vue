<template>
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div class="row" style="margin-bottom: 15px; margin-top: 10px">
            <div class="col-md-6">
                <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
                <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.cidades" name="cidades.xls">
                    <i class="far fa-save"></i> Exportar
                </download-excel>
            </div>
            <div v-if="this.busca" class="col-md-6 text-right">
                <button @click="voltar" type="button" class="btn btn-primary btn-sm"><i class="fa fa-undo"></i> Voltar</button>
            </div>
        </div>
        <div v-if="montou" class="box box-info">
            
            <!-- /.box-header -->
            <div class="box-body table-responsive">
                <table id="cidadeTable" class="table table-hover table-striped">
                        <thead>
                        <tr>
                            <th>
                                Código
                                
                                
                            </th>
                            <th @click="ordenar('nome')" v-bind:class="{'selecionado': this.coluna == 'nome'}">
                                Nome
                                
                                
                            </th>
                            <th @click="ordenar('estado')" v-bind:class="{'selecionado': this.coluna == 'estado'}">
                                Estado
                                <i v-if="this.coluna == 'estado' && this.ordem" class="fa fa-sort-alpha-asc"></i>
                                <i v-if="this.coluna == 'estado' && !this.ordem" class="fa fa-sort-alpha-desc"></i>
                            </th>
                            <th class="text-center no-sort">Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="cidade in cidades">
                            <td style="vertical-align: middle" width="80px"><b>{{ cidade.codigoCidade}}</b></td>
                            <td style="text-align:justify; vertical-align: middle">{{ cidade.nomeCidade }}</td>
                            <td style="text-align:justify; vertical-align: middle">{{ cidade.uf }}</td>
                            <td width="100px" style="vertical-align: middle" class="text-center">
                                <button type="button" @click="remover(cidade)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(cidade)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.box-body -->
            <div v-if="this.busca" class="box-footer clearfix">
                <div class="col-md-6 no-padding text-right pull-right">
                    <button @click="voltar" type="button" class="btn btn-primary"><i class="fa fa-undo"></i> Voltar</button>
                </div>
            </div>
        </div>
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Cidade" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Nome</label>
                        <input type="text" v-model="nome" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Estado</label>
                        <select v-model="uf" name="" class="form-control">
                            <option value="AC">Acre - AC</option> 
                            <option value="AL">Alagoas - AL</option>
                            <option value="AP">Amapá - AP</option>
                            <option value="AM">Amazonas - AM</option>
                            <option value="BA">Bahia - BA</option>
                            <option value="CE">Ceará - CE</option>
                            <option value="DF">Distrito Federal - DF</option>
                            <option value="ES">Espírito Santo - ES</option>
                            <option value="GO">Goiás - GO</option>
                            <option value="MA">Maranhão - MA</option>
                            <option value="MT">Mato Grosso - MT</option>
                            <option value="MS">Mato Grosso do Sul - MS</option>
                            <option value="MG">Minas Gerais - MG</option>
                            <option value="PA">Pará - PA</option>
                            <option value="PB">Paraíba - PB</option>
                            <option value="PR">Paraná - PR</option>
                            <option value="PE">Pernambuco - PE</option>
                            <option value="PI">Piauí - PI</option>
                            <option value="RJ">Rio de Janeiro - RJ</option>
                            <option value="RN">Rio Grande do Norte - RN</option>
                            <option value="RS">Rio Grande do Sul - RS</option>
                            <option value="RO">Rondônia - RO</option>
                            <option value="RR">Roraima - RR</option>
                            <option value="SC">Santa Catarina - SC</option>
                            <option value="SP">São Paulo - SP</option>
                            <option value="SE">Sergipe - SE</option>
                            <option value="TO">Tocantins - TO</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">IBGE</label>
                        <input v-model="ibge" type="number" name="" class="form-control">
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3>Tem certeza que deseja excluir esta cidade?</h3>
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
            cidades: '',
            nome: '',
            ibge: '',
            uf: '',
            id: '',
            estado: 'RS',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando itens cadastrados...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
            termo: '',
            selecionado: 'codigo',
            idTabela: '#tabelaListagem'
        }
    },
    methods: {
        carregar: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                
                that.carregando = false;
            }, 800);
        },

        alerta: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 1000);
        },

        salvar: function() {

            this.carregar('Salvando nova cidade...');
            var that = this;
            if (this.ibge == '' || this.nome == '' || this.uf == '') {
                that.alerta('Preencha todos os campos!');
            } else {
                axios.post('/tabelas/cidades', {
                    nome: that.nome,
                    ibge: that.ibge,
                    uf: that.uf,
                }).then(function(response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.ibge = '';
                        that.erro = true;
                        that.alerta('Código IBGE já existente, verifique!')
                    } else {
                        that.cidades = response.data;
                        that.nome = '';
                        that.ibge = '';
                        that.uf = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            
                            that.sucesso('Salvo com sucesso!');
                        });


                    }

                });

            }
        },

        atualizar: function() {


            var that = this;
            this.carregar('Atualizando cidade...');
            if (this.ibge == '' || this.nome == '' || this.uf == '') {
                that.alerta('Preencha todos os campos!');
            } else {
                axios.post('/tabelas/cidades/update/' + this.id, {
                    nome: that.nome,
                    ibge: that.ibge,
                    uf: that.uf,

                }).then(function(response) {
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

        abrir: function() {
$(this.idTabela).DataTable().destroy();

            $('#cidadeTable').DataTable().destroy();
            this.$refs.myModal.show();

        },

        preencher: function(dados) {

            this.carregar('Carregando dados...');

            this.nome = dados.nomeCidade;
            this.ibge = dados.codigoCidade;
            this.id = dados.idCidade;
            this.uf = dados.uf;
            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function(dados) {

            this.deletar = dados.idCidade;
            $('#cidadeTable').DataTable().destroy();
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();

        },

        ok: function(evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        fechar: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.nome = '';
            this.ibge = '';
            this.id = '';
            this.uf = '';

            this.$root.$emit('montou', ['#cidadeTable']);

            this.$refs.myModal.hide();
        },

        fecharCerteza: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
            this.$root.$emit('montou', ['#cidadeTable']);
        },
            certeza: function() {
            this.carregar('Removendo cidade...');
            var that = this;
            axios.get('/tabelas/cidades/remover/' + this.deletar).then(function(response) {

                if (response.data != 'erro') {
                    that.cidades = response.data;

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
        axios.get('/tabelas/cidades/list').then(function(response) {
            that.cidades = response.data;
            that.montou = true;
            setTimeout(function() {
that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

            that.$nextTick(() => {
               that.$root.$emit('montou', ['#cidadeTable']);
           });

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
