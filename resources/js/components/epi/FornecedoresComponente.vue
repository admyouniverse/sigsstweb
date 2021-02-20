<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.fornecedores" name="fornecedores.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>

    </div>
    <div v-if="montou" class="box box-info">
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="tabelaListagem">
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th width="180px">Nome Fantasia</th>
                        <th>Razão Social</th>
                        <th width="150px">Cidade</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="fornecedor in fornecedores">
                        <td style="vertical-align: middle; width: 100px"><b>{{ fornecedor.cnpj }}</b></td>
                        <td style="text-align:justify">{{ fornecedor.nomeFantasia }}</td>
                        <td style="text-align:justify;">{{ fornecedor.razaoSocial }}</td>
                        <td style="text-align:justify;">{{ fornecedor.cidade.nomeCidade }} | {{ fornecedor.cidade.uf }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(fornecedor)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(fornecedor)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->

    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Fornecedor EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-1">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" disabled v-model="fornecedor.idFornecedor" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>CNPJ</label>
                    <input type="text" v-model="fornecedor.cnpj" class="form-control">
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label>Razao Social</label>
                    <input type="text" v-model="fornecedor.razaoSocial" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Nome Fantasia</label>
                    <input type="text" v-model="fornecedor.nomeFantasia" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="checkout-company">CEP</label>
                    <div class="input-group">
                        <input autocomplete="nope" class="form-control" required name="cep" type="text" id="cep" v-model="cep" v-mask="'##.###-###'">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="buscaCep"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div class="form-control-feedback" v-if="erro">CEP inválido
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label for="account-zip">Endereço</label>
                    <input autocomplete="nope" class="form-control" required name="rua" type="text" v-model="fornecedor.endereco" required>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="account-city">Cidade</label>
                    <select required v-model="fornecedor.cidade" class="form-control">
                        <option v-for="cidade in cidades" :value="cidade">
                            {{cidade.nomeCidade}}</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-group">
                    <label for="checkout-city">Estado</label>
                    <select @change="carregarCidades" required class="form-control" v-model="estado" id="account-country">
                        <option v-for="estado in estados" :value="estado.sigla">
                            {{estado.sigla}}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Telefone</label>
                    <input v-mask="'(##) ####-####'" v-model="fornecedor.telefone" class="form-control">
                </div>
            </div>
        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta fornecedor?</h3>
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
    props: ['empresa'],
    data() {
        return {
            fornecedores: [],
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando fornecedores cadastradas...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
			coluna: '',
			cep: '',
            ordem: true,
            cidades: [],
            estado: {},
            termo: '',
            selecionado: 'codigo',
            idTabela: '#tabelaListagem',
            estados: [{
                    nome: "Acre",
                    sigla: "AC"
                },
                {
                    nome: "Alagoas",
                    sigla: "AL"
                },
                {
                    nome: "Amapá",
                    sigla: "AP"
                },
                {
                    nome: "Amazonas",
                    sigla: "AM"
                },
                {
                    nome: "Bahia",
                    sigla: "BA"
                },
                {
                    nome: "Ceará",
                    sigla: "CE"
                },
                {
                    nome: "Distrito Federal",
                    sigla: "DF"
                },
                {
                    nome: "Espírito Santo",
                    sigla: "ES"
                },
                {
                    nome: "Goiás",
                    sigla: "GO"
                },
                {
                    nome: "Maranhão",
                    sigla: "MA"
                },
                {
                    nome: "Mato Grosso",
                    sigla: "MT"
                },
                {
                    nome: "Mato Grosso do Sul",
                    sigla: "MS"
                },
                {
                    nome: "Minas Gerais",
                    sigla: "MG"
                },
                {
                    nome: "Pará",
                    sigla: "PA"
                },
                {
                    nome: "Paraíba",
                    sigla: "PB"
                },
                {
                    nome: "Paraná",
                    sigla: "PR"
                },
                {
                    nome: "Pernambuco",
                    sigla: "PE"
                },
                {
                    nome: "Piauí",
                    sigla: "PI"
                },
                {
                    nome: "Rio de Janeiro",
                    sigla: "RJ"
                },
                {
                    nome: "Rio Grande do Norte",
                    sigla: "RN"
                },
                {
                    nome: "Rio Grande do Sul",
                    sigla: "RS"
                },
                {
                    nome: "Rondônia",
                    sigla: "RO"
                },
                {
                    nome: "Roraima",
                    sigla: "RR"
                },
                {
                    nome: "Santa Catarina",
                    sigla: "SC"
                },
                {
                    nome: "São Paulo",
                    sigla: "SP"
                },
                {
                    nome: "Sergipe",
                    sigla: "SE"
                },
                {
                    nome: "Tocantins",
                    sigla: "TO"
                }
            ],
            fornecedor: {
                idFornecedor: 0,
                cnpj: '',
                nomeFantasia: '',
                razaoSocial: '',
                endereco: '',
                cidade: {

                },
                telefone: '',
                obs: '',
            }
        }
    },
    methods: {
        carregarCidades: function () {
            var that = this;

            this.carregando = true;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                this.mensagem = 'Buscando cidades...';
            axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {

                that.cidades = response.data;

                that.carregando = false;

            });
        },
        buscaCep: function () {
            var that = this;
            this.carregando = true;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                this.mensagem = 'Aguarde... Buscando CEP.';

            if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cep)) {

                axios.get('https://viacep.com.br/ws/' + this.cep.replace(/\D/g, '') + "/json").then(
                    function (response) {
                        if (response.data.erro != true) {

                            var ibge = response.data.ibge;

                            if (response.data.logradouro)
                                that.fornecedor.endereco = response.data.logradouro;
                            if (response.data.uf) {
                                if (that.estado != response.data.uf) {
									that.estado = response.data.uf;
									
                                    axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(
                                        function (response) {

                                            that.cidades = response.data;

                                            var cidad = that.cidades.filter(function (cidade) {
                                                return cidade.codigoCidade == ibge;
                                            });

                                            that.fornecedor.cidade = cidad[0];

                                            that.html = "<i class='fa fa-check fa-2x'></i>";
                                            that.mensagem = 'Sucesso, endereço encontrado!';

                                            that.carregando = false;
                                        });

                                } else {
                                    var cidad = that.cidades.filter(function (cidade) {
                                        return cidade.codigoCidade == ibge;
                                    });

                                    that.fornecedor.cidade = cidad[0];

                                    that.html = "<i class='fa fa-check fa-2x'></i>";
                                    that.mensagem = 'Sucesso, endereço encontrado!';

                                    that.carregando = false;

                                }

                            }

                        } else {

                            that.erro = true;
                            that.mensagem = 'CEP inválido!';
                            // that.enderecos[key].erros.push('CEP inválido');
                            that.carregando = false;
                            // $("#cep").focus();
                        }

                    }).catch(function (error) {
                    //console.log(error);
                });
            } else {
                if (!this.cep == '') {

                    that.erro = true;
                    $("#cep").focus();

                    that.mensagem = 'CEP inválido!';
                    that.carregando = false;
                }

            }
        },
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
            this.carregar('Salvando nova fornecedor...');

            var that = this;

            axios.post('/fornecedores', {
                fornecedor: that.fornecedor,
            }).then(function (response) {
                  axios.get('http://200.98.201.236/ServicoSIGSSO/rest/fornecedores').then(function (response) {
            		that.fornecedores = response.data;
					that.$nextTick(() => {
						that.fechar();
						that.sucesso('Salvo com sucesso!');
					});
				  });
            });

        },

        atualizar: function () {

            var that = this;
            this.carregar('Atualizando nova fornecedor...');
            if (this.nome != '' || this.codigo != '') {
                axios.post('/fornecedores/' + this.id, {
                    nome: that.nome,
                    codigo: that.codigo,
                    grupo: that.grupo.idGrupoEpi,
                }).then(function (response) {
                    console.log(response.data);
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código já existente, verifique!')
                    } else {
                        that.fornecedores = response.data;
                        that.nome = '';
                        that.codigo = '';
                        that.grupo = '';
                        that.erro = false;

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Atualizado com sucesso!');
                        });

                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }
        },

        abrir: function () {
            $(this.idTabela).DataTable().destroy();

            this.fornecedor = {
                idFornecedor: 0,
                descricao: '',
                observacao: ''
            }
            this.$refs.myModal.show();

        },

        preencher: function (dados) {
            this.carregar('Carregando dados...');

			console.log(dados);
			var that = this;

            this.fornecedor = dados;

			this.editar = true;
			 if (this.fornecedor.cidade) {
                    this.estado = this.fornecedor.cidade.uf;

                    axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {

                        that.cidades = response.data;

                        that.carregando = false;

                    });
                }
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idFornecedor;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();

        },

        ok: function (evt) {
            evt.preventDefault();

            this.salvar();

        },

        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;

            this.descricao = '';
            this.codigo = '';
            this.nome = '';
            this.grupo = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo fornecedor...');
            var that = this;
            axios.get('/fornecedores/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    // that.fornecedores = response.data;

                axios.get('http://200.98.201.236/ServicoSIGSSO/rest/fornecedores').then(function (response) {
            		that.fornecedores = response.data;
					that.$nextTick(() => {
						that.fecharCerteza();
						that.sucesso('Removido com sucesso!');
					});
				  });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        }
    },
    mounted() {
        var that = this;
        axios.get('http://200.98.201.236/ServicoSIGSSO/rest/fornecedores').then(function (response) {
            that.fornecedores = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });
    }
}
</script>
