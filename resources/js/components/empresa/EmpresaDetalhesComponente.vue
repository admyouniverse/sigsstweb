<template>
    <div class="container">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <!-- <div class="row justify-content-end">
            <div class="box-header">
                <div v-if="editar" class="col-md-12 no-padding">
                    <button type="" class="btn btn-outline-danger"><i class="fa fa-trash"></i> Remover Empresa</button>
                </div>
            </div>
        </div>  -->
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
                                                        <label>ID</label>
                                                        <input type="text" class="form-control" disabled
                                                            v-model="empresa.idEmpresa">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="">Inscrição</label>
                                                        <div class="input-group mb-3">
                                                            <select v-model="empresa.tipoInscricao"
                                                                @change="mascaraInscricao" class="form-control">
                                                                <option value="CPF"> CPF </option>
                                                                <option value="CNPJ"> CNPJ </option>
                                                                <option value="CAEPF"> CAEPF </option>
                                                            </select>
                                                            <div class="input-group-append" style="width: 70%">
                                                                <input v-model="empresa.inscricao" v-mask="mask"
                                                                    masked="false" class="form-control">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="form-group">
                                                        <label for="">Razão Social</label>
                                                        <input class="form-control" v-model="empresa.razaoSocial">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label for="">Nome Fantasia</label>
                                                        <input class="form-control" v-model="empresa.nomeFantasia">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="">Nome da Unidade</label>
                                                        <input type="text" class="form-control"
                                                            v-model="empresa.nomeUnidade">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="checkout-company">CEP</label>
                                                        <div class="input-group">
                                                            <input autocomplete="nope" class="form-control" required
                                                                name="cep" type="text" id="cep" v-model="empresa.cep"
                                                                v-mask="'##.###-###'">
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary" type="button"
                                                                    id="button-addon2" @click="buscaCep"><i
                                                                        class="fa fa-search"></i></button>
                                                            </div>
                                                        </div>
                                                        <div class="form-control-feedback" v-if="erro">CEP inválido
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- 
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label for="">Data de Início</label>
                                                        <input type="date" v-model="empresa.dataIni" class="form-control">
                                                    </div>
                                                </div> -->
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-9">
                                                    <div class="form-group">
                                                        <label for="account-city">Cidade</label>
                                                        <select required v-model="empresa.cidade" class="form-control">
                                                            <option v-for="cidade in cidades" :value="cidade">
                                                                {{cidade.nomeCidade}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-group">
                                                        <label for="checkout-city">Estado</label>
                                                        <select @change="carregarCidades" required class="form-control"
                                                            v-model="estado" id="account-country">
                                                            <option v-for="estado in estados" :value="estado.sigla">
                                                                {{estado.sigla}}</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <imagem-componente :empresa="this.empresa"></imagem-componente>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="account-zip">Endereço</label>
                                                <input autocomplete="nope" class="form-control" required name="rua"
                                                    type="text" v-model="empresa.endereco" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="account-address2">Bairro</label>
                                                <input autocomplete="nope" class="form-control" required name="bairro"
                                                    v-model="empresa.bairro" type="text" id="account-address2">
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="form-group">
                                                <label for="">Complemento</label>
                                                <input autocomplete="nope" type="text" name="complemento"
                                                    v-model="empresa.complemento" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Telefone</label>
                                                <input v-mask="'(##) ####-####'" v-model="empresa.telefone"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Celular</label>
                                                <input v-mask="'(##) 9####-####'" v-model="empresa.celular"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">E-mail</label>
                                                <input type="email" class="form-control" v-model="empresa.email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Relação Contratual</label>
                                                <select v-model="empresa.tipoEmpresa" class="form-control">
                                                    <option value="NENHUM">N/A</option>
                                                    <option value="CONTRATADA">Contratada</option>
                                                    <option value="CONTRATANTE">Contratante</option>
                                                    <option value="AMBAS">Ambas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Tipo de Programa</label>
                                                <select v-model="empresa.modulo" class="form-control">
                                                    <option value="SELECIONE">N/A</option>
                                                    <option value="PPRA">PPRA</option>
                                                    <option value="PGR">PGR</option>
                                                    <option value="PCMAT">PCMAT</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Data de Início</label>
                                                <input type="date" v-model="empresa.dataIni" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Data de Fim</label>
                                                <input type="date" v-model="empresa.dataFim" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="">Contato RH</label>
                                                <input class="form-control" v-model="empresa.contatoRh">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="">Fone do Contato RH</label>
                                                <input class="form-control" v-mask="'(##) #####-####'"
                                                    v-model="empresa.foneContato">
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label for="">Email RH</label>
                                                <input class="form-control" type="email" v-model="empresa.emailRh">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="">Descrição da Atividade</label>
                                                <textarea class="form-control"
                                                    v-model="empresa.descricaoAtividade"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style='margin-bottom: 20px'>
                                        <div class="col-md-12">
                                            <div class="card card-success">
                                                <div class="card-header">
                                                    CNAE
                                                </div>
                                                <div class="card-body">
                                                    <div v-if="novo == true" class="row">
                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <label for="">Selecione</label>
                                                                <select v-model="select" class="form-control">
                                                                    <option :value="cnae" v-for="cnae in cnaes">
                                                                        {{ cnae.codigoCnae }} - {{ cnae.descricao }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <button type="" @click="addCnae"
                                                                class="btn btn-sm btn-success">Incluir</button>
                                                            <button type="" class="btn btn-sm btn-danger"
                                                                @click="novo = false">Cancelar</button>
                                                        </div>
                                                    </div>
                                                    <div v-if="!novo" class="row">
                                                        <div v-if="empresa.cnaes.length > 0" class="col-md-12"
                                                            style="padding: 10px; border: 1px solid #000">
                                                            <b>CNAE Principal</b> <br>
                                                            {{ empresa.cnaes[0].codigoCnae }} -
                                                            {{ empresa.cnaes[0].descricao }} | <span
                                                                @click="excluirCnae(0)"
                                                                style="cursor: pointer; color: red"><i
                                                                    class="fas fa-trash"></i></span>
                                                        </div>
                                                        <div v-if="empresa.cnaes.length > 1" class="col-md-12"
                                                            style="padding: 10px; border: 1px solid #000; margin-top: 15px">
                                                            CNAE Secundário
                                                            <span v-if="key > 0" v-for="(cnae, key) in empresa.cnaes">
                                                                <br> {{ cnae.codigoCnae }} - {{ cnae.descricao }} |
                                                                <span @click="excluirCnae(key)"
                                                                    style="cursor: pointer; color: red"><i
                                                                        class="fas fa-trash"></i></span>
                                                            </span>
                                                            <br>
                                                        </div>

                                                        <div class="col-md-12 text-center" style="margin-top: 15px">
                                                            <button @click="novo = true"
                                                                class="btn btn-sm btn-success"><i
                                                                    class="fa fa-plus"></i> Adicionar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-right">
                                            <button @click="salvar" class="btn btn-success"><i class="fa fa-floppy"></i>
                                                Salvar</button>
                                            <a class="btn btn-danger" href="/empresas"><i class="fa fa-close"></i>
                                                Cancelar</a>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <!--  <b-tab title="Ambientes" v-if="editar">
                        <b-card-text>Conteudo 2</b-card-text>
                    </b-tab>   -->
                            <b-tab title="Gestão de SST" v-if="editar">
                                <b-card-text>Conteudo 2</b-card-text>
                            </b-tab>
                            <b-tab title="Ambientes" v-if="editar">
                                <b-card-text>
                                    <empresa-ambientes v-if="editar && this.montou" :empresa="empresa"></empresa-ambientes>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Empregados" v-if="editar" lazy>
                                <b-card-text>
                                    <empresa-empregados-componente v-if="editar && this.montou" :empresa="empresa">
                                    </empresa-empregados-componente>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Profissionais" v-if="editar">
                                <b-card-text>
                                    <profissional-componente v-if="editar && this.montou" :empresa="empresa">
                                    </profissional-componente>
                                </b-card-text>
                            </b-tab>
                            <!-- <b-tab title="EPI" v-if="editar">
                                <b-card-text>
                                    <empresa-epi-componente v-if="editar && this.montou" :empresa="empresa">
                                    </empresa-epi-componente>
                                </b-card-text>
                            </b-tab> -->
                            <b-tab title="Capacitação" v-if="editar">
                                <b-card-text>
                                    <empresa-capacitacao-componente v-if="editar && this.montou" :empresa="empresa"></empresa-capacitacao-componente>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Exames" v-if="editar">
                                <b-card-text>Conteudo 4</b-card-text>
                            </b-tab>
                            <b-tab title="Eventos" v-if="editar">
                                <b-card-text>
                                    <empresa-eventos-componente v-if="editar && this.montou" :empresa="empresa">
                                    </empresa-eventos-componente>
                                </b-card-text>
                            </b-tab>
                            <b-tab
                                v-if="editar && this.montou && this.empresa.tipoEmpresa != 'NENHUM'"
                                title="Contratos">
                                <b-card-text>
                                    <empresa-contratos-componente
                                        v-if="editar && this.montou"
                                        :empresa="empresa"></empresa-contratos-componente>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Histórico" v-if="editar">
                                <b-card-text>
                                    <empresa-historico-componente v-if="editar && this.montou" :empresa="empresa">
                                    </empresa-historico-componente>
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
        props: ['empresadb', 'editar'],
        data() {
            return {
                empresa: {
                    idEmpresa: 0,
                    tipoInscricao: '',
                    nomeFantasia: "",
                    inscricao: '',
                    razaoSocial: '',
                    endereco: '',
                    cep: '',
                    cidade: {},
                    bairro: "",
                    complemento: "",
                    telefone: "",
                    celular: "",
                    email: "",
                    nomeUnidade: "",
                    cnaes: [],
                    descricaoAtividade: "",
                    tipoEmpresa: "NENHUM",
                    modulo: "",
                    dataIni: "",
                    contatoRh: "",
                    emailRh: "",
                    foneContato: "",
                    cno: ""
                },
                montou: false,
                novo: false,
                mask: '###.###.###-##',
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
                erro: false,
                estado: '',
                cidades: '',
                carregando: true,
                options: [],
                cnaes: [],
                select: '',
                mensagem: 'Carregando dados da empresa...',
                funcionarios: [],
                contratos: [],
                ambientes: [],
                jornadas: [],
                contrato: {},
                funcoes: [],
                pessoas: [],
                funcionario: {},
                html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            }
        },
        methods: {
            addCnae: function () {
                //console.log(this.select);
                this.empresa.cnaes.push(this.select);
                this.novo = false;

            },

            excluirCnae: function (key) {
                this.empresa.cnaes.splice(key, 1);
            },

            mascaraInscricao: function () {
                if (this.empresa.tipoInscricao == 'CNPJ') {
                    this.mask = '##.###.###/####-##';
                } else {
                    this.mask = '###.###.###-##';
                }
            },
            buscaCep: function () {
                var that = this;
                this.carregando = true;
                this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                    this.mensagem = 'Aguarde... Buscando CEP.';


                if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.empresa.cep)) {

                    axios.get('https://viacep.com.br/ws/' + this.empresa.cep.replace(/\D/g, '') + "/json").then(
                        function (response) {
                            if (response.data.erro != true) {

                                var ibge = response.data.ibge;

                                if (response.data.logradouro)
                                    that.empresa.endereco = response.data.logradouro;
                                if (response.data.bairro)
                                    that.empresa.bairro = response.data.bairro;
                                if (response.data.uf) {
                                    if (that.estado != response.data.uf) {
                                        that.estado = response.data.uf;


                                        //console.log(ibge);

                                        axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(
                                            function (response) {

                                                that.cidades = response.data;

                                                var cidad = that.cidades.filter(function (cidade) {
                                                    return cidade.codigoCidade == ibge;
                                                });

                                                that.empresa.cidade = cidad[0];

                                                that.html = "<i class='fa fa-check fa-2x'></i>";
                                                that.mensagem = 'Sucesso, endereço encontrado!';

                                                that.carregando = false;
                                            });

                                    } else {
                                        var cidad = that.cidades.filter(function (cidade) {
                                            return cidade.codigoCidade == ibge;
                                        });


                                        that.empresa.cidade = cidad[0];

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

            salvar: function () {

                var that = this;
                if (this.editar) {
                    this.carregando = true;
                    this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                        this.mensagem = 'Aguarde... Atualizando os dados.';

                    var that = this;
                    axios.post('/empresas/' + this.empresa.idEmpresa + "/editar", {
                        empresa: that.empresa,
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

                    this.carregando = true;
                    this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
                        this.mensagem = 'Aguarde... Atualizando os dados.';

                    var that = this;
                    axios.post('/empresas', {
                        empresa: that.empresa,
                        imagem: that.$store.state.avatar
                    }).then(function (response) {
                        //console.log(response);
                        if (response.data != 'erro') {
                            that.html = "<i class='fa fa-check fa-2x'></i>";
                            that.mensagem = 'Sucesso! Redirecionando...';

                            window.location.href = "/empresas/detalhes/" + response.data;
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

            onSearch(search, loading) {
                loading(true);
                this.search(loading, search, this);
            },
            search: _.debounce((loading, search, vm) => {
                fetch(
                    `${window.location.origin}/tabelas/cnae/buscar/descricao/${escape(search)}`
                ).then(data => {
                    //console.log(data);
                    data.json().then(json => {
                        vm.options = json
                    });
                    loading(false);
                });
            }, 350),
        },
        mounted() {
            //console.log('Component mounted.');
            var that = this;

            if (this.editar) {
                this.empresa = this.empresadb;
                this.$store.state.avatar = this.empresa.urlImagem;
                if (this.empresa.cidade) {
                    this.estado = this.empresa.cidade.uf;

                    axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {

                        that.cidades = response.data;

                        that.carregando = false;

                    });
                }
                this.mascaraInscricao();

                axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
                    that.funcionarios = response.data;
                });

                axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
                    that.contratos = response.data;
                });

                axios.get('/tabelas/jornadas-de-trabalho/list').then(function (response) {
                    that.jornadas = response.data;
                });

                axios.get('/tabelas/ambientes-de-trabalho/list').then(function (response) {
                    that.ambientes = response.data;
                });

                axios.get('/tabelas/funcoes/list').then(function (response) {
                    that.funcoes = response.data;
                });

                axios.get('/pessoas/list').then(function (response) {
                    that.pessoas = response.data;
                });


                this.montou = true;

            } else {
                this.carregando = false;
            }

            axios.get('/tabelas/cnae/list').then(function (response) {
                that.cnaes = response.data;
            });


        }
    }

</script>
<style lang="scss" scoped>



</style>
