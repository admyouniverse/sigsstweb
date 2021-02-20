<template>
    <div class="container">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div class="row justify-content-end">
            <div class="box-header">
                <div v-if="editar" class="col-md-12 no-padding">
                    <button type="" class="btn btn-outline-danger"><i class="fa fa-trash"></i> Remover Pessoa</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div>
                    <b-card class="sig" no-body>
                        <b-tabs card>
                            <b-tab title="Detalhes" active>
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-md-9">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label for="">ID</label>
                                                        <input type="text" disabled class="form-control"
                                                            v-model="pessoa.idPessoa">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">CPF</label>
                                                        <input id="cpf" class="form-control" @blur="verificaCpf"
                                                            v-mask="'###.###.###-##'" v-model="pessoa.cpf">
                                                    </div>
                                                </div>

                                                <b-popover v-if="show" placement="topright" :show.sync="show" target="cpf"
                                                    no-title>
                                                   {{ msgCpf }}
                                                   <button class="btn btn-primary btn-sm editar-sair" @click="editarOutro"><i class="fas fa-pencil-alt"></i></button>
                                                   <button class="btn btn-secondary btn-sm editar-sair" @click="sair" ><i class="fas fa-sign-out-alt"></i></button>
                                                </b-popover>

                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label for="">Nome</label>
                                                        <input type="text" class="form-control"
                                                            v-model="pessoa.nomePessoa">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Nascimento</label>
                                                        <input type="date" class="form-control"
                                                            v-model="pessoa.dataNascimento">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">PIS</label>
                                                        <input class="form-control" v-mask="'###.#####.##-#'"
                                                            v-model="pessoa.pis">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="">CTPS</label>
                                                        <input class="form-control" v-model="pessoa.ctps"
                                                            placeholder="1111111 1111 AA">
                                                        <!--  <div class="input-group mb-3">

                                                        <input type="text" class="form-control" v-model="pessoa.ctps" placeholder="CTPS" name="">

                                                        <input type="text" class="form-control" placeholder="Série" name="">

                                                        <select class="form-control">
                                                            <option value="">UF</option>
                                                            <option :value="estado" v-for="estado in estados">{{ estado.sigla }}</option>
                                                        </select>

                                                    </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="">Gênero</label>
                                                        <select v-model="pessoa.sexo" class="form-control">
                                                            <option value="MASCULINO">Masculino</option>
                                                            <option value="FEMININO">Feminino</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Estado Civil</label>
                                                        <select v-model="pessoa.estadoCivil" class="form-control">
                                                            <option value="SELECIONE">Nenhum</option>
                                                            <option value="SOLTEIRO">Solteiro</option>
                                                            <option value="CASADO">Casado</option>
                                                            <option value="DIVORCIDADO">Divorciado</option>
                                                            <option value="VIÚVO">Viúvo</option>
                                                            <option value="UNIÃO_ESTAVEL">União Estável</option>
                                                            <option value="OUTROS">Outros</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Nacionalidade</label>
                                                        <select v-model="pessoa.pais" class="form-control">
                                                            <option v-for="pais in paises" :value="pais">{{ pais.nome }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="">Naturalidade</label>
                                                        <v-select
                                                            :disabled="!pessoa.pais || pessoa.pais.nome != 'Brasil'"
                                                            label="idCidade" v-model="cidade" :filterable="false"
                                                            :options="options" @search="onSearch">
                                                            <template slot="no-options">
                                                                digite para procurar um EPI...
                                                            </template>
                                                            <template slot="option" slot-scope="option">
                                                                <div class="d-center">
                                                                    {{ option.nomeCidade }} - {{ option.uf }}
                                                                </div>
                                                            </template>
                                                            <template slot="selected-option" slot-scope="option">
                                                                <div class="selected d-center">
                                                                    {{ option.nomeCidade }} - {{ option.uf }}
                                                                </div>
                                                            </template>
                                                        </v-select>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Tipo Sanguineo</label>
                                                        <input class="form-control" disabled
                                                            v-model="pessoa.tipoSangue">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <imagem-componente :imagem="this.pessoa"></imagem-componente>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Fone</label>
                                                        <input class="form-control" v-model="pessoa.telefone"></input>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="">Email</label>
                                                        <input type="email" v-model="pessoa.email" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label for="">Status</label>
                                                        <select disabled class="form-control" v-model="pessoa.status">
                                                            <option value="A">Ativo</option>
                                                            <option value="I">Inativo</option>
                                                            <option value="D">Afastado por doença</option>
                                                            <option value="AT">Afastado por acidente</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <button @click="digital" v-if="!pessoa.biometriaTemplate" class="btn btn-secondary btn-block mt-4"><i class="fa fa-fingerprint"></i> Registrar</button>
                                                    <button @click="digital" v-if="pessoa.biometriaTemplate" class="btn btn-success btn-block mt-4"><i class="fa fa-fingerprint"></i> Atualizar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="" class="btn btn-success" @click="salvar">Salvar</button>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Hist. Empresas">
                                <b-card-text>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Hist. Funções">
                                <b-card-text>
                                    <pessoa-funcao-componente v-if="editar && this.montou" :pessoa="pessoa"></pessoa-funcao-componente>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Capacitações">
                                <b-card-text>
                                    <pessoa-capacitacao-componente v-if="editar && this.montou" :pessoa="pessoa"></pessoa-capacitacao-componente>
                                </b-card-text>
                            </b-tab>

                        </b-tabs>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pessoadb', 'editar'],
        data() {
            return {
                pessoa: {
                    idPessoa: '',
                    nomePessoa: '',
                    cpf: '',
                    pis: '',
                    ctps: '',
                    dataNascimento: '',
                    sexo: '',
                    tipoSangue: '',
                    observacao: '',
                    pais: {
                        idPais: 1,
                        nome: "Brasil",
                        codigoPais: "1  ",
                    },
                    estrangeiro: '',
                    endereco: '',
                    bairro: '',
                    cep: '',
                    telefone: '',
                    email: '',
                    escolaridade: '',
                    status: 'A',
                    biometriaTemplate: ''
                },
                paises: [],
                outro: '',
                mensagem: 'Carregando dados da pessoa...',
                html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                carregando: true,
                options: [],
                cidade: [],
                msgCpf: '',
                montou: false,
                show: false,
                msgCpf: '',
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
            verificaCpf() {
                var that = this;
                if (/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(this.pessoa.cpf)) {
                    axios.get('/pessoas/cpf/' + this.pessoa.cpf).then(function(response) {
                        if(response.data != '') {
                            if(that.pessoa.idPessoa != response.data.idPessoa) {
                            that.msgCpf = 'CPF já usado por ' + response.data.nomePessoa;
                            that.outro = response.data.idPessoa;
                            that.show = true;
                            $('#cpf').focus();
                            }
                        } else {
                            that.show = false;
                        }
                    });
                } else {
                    this.show = false;
                }
            },
            digital() {
                var that = this;

                axios.get('http://localhost:9000/api/public/v1/captura/Enroll/1').then(function(response) {
                    
                    
                    that.pessoa.biometriaTemplate = response.data;
                    that.salvar();


                }).catch(function(error) {
                     that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
                }); 
            },
            editarOutro() {
                 window.location.href = "/pessoas/detalhes/" + this.outro; 
            },

            sair() {
                this.outro = '';
                this.show = false;
                this.pessoa.cpf = '';
                setTimeout(function() {
                    this.show = false;
                }, 2000);
                
                $('#cpf').blur();
            },
            salvar() {

                var that = this;
                this.carregando = true;
                this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                    this.mensagem = 'Aguarde...';

                if (this.editar) {
                    console.log('editar!!!');
                    axios.post('/pessoas/' + this.pessoa.idPessoa + "/editar", {
                        pessoa: that.pessoa,
                        cidade: that.cidade,
                        imagem: that.$store.state.avatar
                    }).then(function (response) {
                        if (response.data != 'erro') {
                            that.html = "<i class='fa fa-check fa-2x'></i>";
                            that.mensagem = 'Sucesso! Dados atualizados.';

                        } else {
                            that.html = "<i class='fa fa-close fa-2x'></i>";
                            that.mensagem = 'Falha! Verifique os dados.';
                        }

                        setTimeout(function () {
                            that.carregando = false;
                        }, 1000);

                    });

                } else {
                    axios.post('/pessoas', {

                        pessoa: that.pessoa,
                        cidade: that.cidade,
                        imagem: that.$store.state.avatar
                    }).then(function (response) {
                        if (response.data != 'erro') {

                            that.html = "<i class='fa fa-check fa-2x'></i>";
                            that.mensagem = 'Sucesso!';
                            window.location.href = "/pessoas/detalhes/" + response.data;

                        } else {

                            that.html = "<i class='fa fa-close fa-2x'></i>";
                            that.mensagem = 'Falha! Verifique os dados.';

                        }

                        setTimeout(function () {
                            that.carregando = false;
                        }, 1000);

                    });

                }

            },

            onSearch(search, loading) {
                loading(true);
                this.search(loading, search, this);
            },
            search: _.debounce((loading, search, vm) => {
                fetch(
                    `${window.location.origin}/tabelas/cidades/buscar/nome/${escape(search)}`
                ).then(data => {
                    console.log(data);
                    data.json().then(json => {
                        vm.options = json
                    });
                    loading(false);
                });
            }, 350)
        },
        mounted() {
            if (this.editar == true) {
                this.pessoa = this.pessoadb;
                console.log(this.pessoadb);
                this.$store.state.avatar = this.pessoa.urlImagem;
                this.cidade = this.pessoa.cidadeNatal;
            }

            this.carregando = false;

            var that = this;

            this.montou = true;

            axios.get('/tabelas/paises/list').then(function (response) {
                that.paises = response.data;
            });

        }
    }

</script>

<style lang="scss">
    .v-select input[type=search] {
        margin: 0px;
    }

    .v-select .selected-tag {
        margin-top: 0px;
        background-color: #fff;
        border-color: #fff;

    }

    .v-select .vs__selected-options {
        padding-top: 6px;
        padding-bottom: 6px;
    }

    .v-select .dropdown-toggle {
        padding: 0;
        background: white;
    }

    .editar-sair {
        margin-top: 5px;
    }

</style>
