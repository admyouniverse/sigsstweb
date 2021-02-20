<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.clinicas" name="clinicas.xls">
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
                        <th>Código</th>
                        <th>CNPJ</th>
                        <th>Descrição</th>
                        <th>Nome Fantasia</th>
                        <th>Cidade</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="clinica in clinicas">
                        <td style="vertical-align: middle" width="100px"><b>{{ clinica.idClinica }}</b></td>
                        <td><b>{{ clinica.cnpj }}</b></td>
                        <td style="text-align:justify">{{ clinica.nomeClinica }}</td>
                        <td style="text-align:justify">{{ clinica.nomeFantasiaClinica }}</td>
                        <td>{{ clinica.cidadeClinica.nomeCidade }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(clinica)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(clinica)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do clinica" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-1">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">ID clinica</label>
                    <input type="text" disabled v-mask="'####-##'" class="form-control" v-model="clinica.idClinica">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">CNPJ</label>
                    <input type="" v-mask="'##.###.###/####-##'" class="form-control" v-model="clinica.cnpj">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input type="text" class="form-control" v-model="clinica.nomeClinica">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Nome Fantasia</label>
                    <input type="" class="form-control" v-model="clinica.nomeFantasiaClinica">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CNES</label>
                    <input type="text" class="form-control" v-model="clinica.cnes">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="checkout-company">CEP</label>
                    <div class="input-group">
                        <input autocomplete="nope" class="form-control" required type="text" id="cep" v-model="clinica.cep" v-mask="'##.###-###'">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="buscaCep"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div class="form-control-feedback" v-if="erro">CEP inválido</div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Endereço</label>
                    <input class="form-control" v-model="clinica.endereco">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="account-city">Cidade</label>
                    <select required v-model="clinica.cidadeClinica" class="form-control">
                        <option v-for="cidade in cidades" :value="cidade">{{cidade.nomeCidade}}</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-1">
                <div class="form-group">
                    <label for="checkout-city">Estado</label>
                    <select @change="carregarCidades" required class="form-control" v-model="estado" id="account-country">
                        <option v-for="estado in estados" :value="estado.sigla">{{estado.sigla}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Bairro</label>
                    <input class="form-control" v-model="clinica.bairro">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" v-model="clinica.email">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">HomePage</label>
                    <input type="text" class="form-control" v-model="clinica.homePage">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Telefone</label>
                    <input class="form-control" v-model="clinica.telefone1"></input>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Telefone</label>
                    <input class="form-control" v-model="clinica.telefone2"></input>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Rodape ASO</label>
                    <input type="text" class="form-control" v-model="clinica.rodapeAso">
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta clinica?</h3>
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
            clinicas: '',
            clinica: {
                idClinica: 0,
                nomeClinica: '',
            },
            cidades: '',
            estado: '',
            descricao: '',
            codigo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando clinicas cadastradas',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            montou: false,
            deletar: '',
            coluna: '',
            ordem: true,
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
        }
    },
    methods: {
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },
        buscaCep: function () {
            var that = this;
            this.carregando = true;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                this.mensagem = 'Aguarde... Buscando CEP.';
            if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.clinica.cep)) {
                axios.get('https://viacep.com.br/ws/' + this.clinica.cep.replace(/\D/g, '') + "/json").then(function (response) {
                    if (response.data.erro != true) {
                        that.erro = false;
                        var ibge = response.data.ibge;
                        if (response.data.logradouro)
                            that.clinica.endereco = response.data.logradouro;
                        if (response.data.bairro)
                            that.clinica.bairro = response.data.bairro;
                        if (response.data.uf) {
                            if (that.estado != response.data.uf) {
                                that.estado = response.data.uf;
                                console.log(ibge);
                                axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
                                    that.cidades = response.data;
                                    var cidad = that.cidades.filter(function (cidade) {
                                        return cidade.codigoCidade == ibge;
                                    });
                                    that.clinica.cidade = cidad[0];
                                    that.html = "<i class='fa fa-check fa-2x'></i>";
                                    that.mensagem = 'Sucesso, endereço encontrado!';
                                    that.carregando = false;
                                });
                            } else {
                                var cidad = that.cidades.filter(function (cidade) {
                                    return cidade.codigoCidade == ibge;
                                });
                                that.clinica.cidade = cidad[0];
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
                    console.log(error);
                });
            } else {

                this.erro = true;
                $("#cep").focus();
                this.mensagem = 'CEP inválido!';
                this.carregando = false;

            }
        },

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
            this.carregar('Salvando nova clinica...');
            var that = this;
            axios.post('/tabelas/clinica', {
                clinica: that.clinica,
            }).then(function (response) {
                console.log(response.data);
                if (response.data == 'existente') {
                    that.codigo = '';
                    that.erro = true;
                    that.alerta('Código já existente, verifique!')
                } else {
                    that.clinicas = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;
                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Salvo com sucesso!');
                    });
                    that.sucesso('Salvo com sucesso!');
                }
            });
        },
        atualizar: function () {
            var that = this;
            axios.post('/tabelas/clinica/update/' + this.clinica.idClinica, {
                clinica: that.clinica,
            }).then(function (response) {
                console.log(response.data);
                if (response.data == 'erro') {
                    that.codigo = '';
                    that.erro = true;
                } else {
                    that.clinicas = response.data;
                    that.descricao = '';
                    that.codigo = '';
                    that.erro = false;
                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Atualizado com sucesso!');
                    });
                }
            });
        },
        abrir: function () {
            $(this.idTabela).DataTable().destroy();
            this.$refs.myModal.show();
        },
        preencher: function (dados) {
            this.carregar('Carregando dados...');
            this.clinica = dados;
            this.editar = true;
            var that = this;

            if (this.clinica.cidadeClinica) {
                this.estado = this.clinica.cidadeClinica.uf;

                axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {

                    that.cidades = response.data;

                    that.carregando = false;

                });
            }

            this.abrir();
            this.sucesso('Dados carregados!');
        },
        remover: function (dados) {
            this.deletar = dados.idClinica;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();
        },
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },
        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.clinica = {};
            this.estado = '';
            this.$refs.myModal.hide();
        },
        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },
        certeza: function () {
            this.carregar('Removendo clinica...');
            var that = this;
            axios.get('/tabelas/clinica/remover/' + this.deletar).then(function (response) {
                if (response.data != 'erro') {
                    that.clinicas = response.data;
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
        }
    },
    mounted() {
        var that = this;
        axios.get('/tabelas/clinica/list').then(function (response) {
            that.clinicas = response.data;
            that.montou = true;
            setTimeout(function () {
                that.carregando = false;
                 that.$root.$emit('montou', [that.idTabela]);
            }, 200);
        });
        $('#myModal').on('hidden.bs.modal', function (e) {
            that.descricao = '';
            that.codigo = '';
            that.editar = false;
            that.id = '';
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
