<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="box box-default">
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th style="width: 120px">Código</th>
                        <th>EPI</th>
                        <th>EPI Empresa</th>
                        <th>Descrição detalhada do EPI</th>
                        <th style="width: 150px">Ações</th>
                    </tr>
                    <tr v-for="epi in epis">
                        <td>{{ epi.idCadastroEpi }}</td>
                        <td><strong v-if="epi.epi">{{ epi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epi.epi.categoriaEpi.codigoCategoria }}
                                - {{ epi.epi.codigoNr6 }} </strong></td>
                        <td v-if="epi.epi">{{ epi.epi.descricao }}</td>
                        <td>{{ epi.complemento}}</td>
                        <td>{{ epi.epi.observacao}}</td>

                        <td style="width: 150px">
                            <button type="button" @click="remover(epi)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(epi)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" @click="listCa(epi)" class="btn btn-sm btn-outline-dark">CA</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="col-md-12 text-center">
                <br>
                <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                    Adicionar</button>
            </div>
            <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do EPI" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">EPI</label>
                            <select v-model="epi.epi" name="" class="form-control">
                                <option :value="epiBanco" v-if="(!epiEmEpi(epiBanco) && epiBanco.idEpi != epi.idEpi) || epiBanco.idEpi == atual" v-for="epiBanco in episBanco">
                                    [{{ epiBanco.categoriaEpi.grupoEpi.codigoGrupoEpi }}.{{ epiBanco.categoriaEpi.codigoCategoria }}
                                    - {{ epiBanco.codigoNr6 }}] {{ epiBanco.descricao }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="">Complemento</label>
                            <input type="text" class="form-control" v-model="epi.complemento">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="">Descrição detalhada do EPI</label>
                            <input type="text" class="form-control" v-if="epi.epi" disabled v-model="epi.epi.observacao">
                            <input type="text" class="form-control" disabled v-if="!epi.epi">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">Validade</label>
                            <input type="date" class="form-control" v-model="epi.validade">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="form-group">
                            <label for="">Obervação</label>
                            <input type="text" v-model="epi.observacao" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row" v-if="epi.idCadastroEpi">
                    <div class="col-md-12">
                        <h3 class="titulo">Grade</h3>
                    </div>

                    <div class="col-md-12 text-center">
                        <table class="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>ID Origem</th>
                                    <th>C. Barras</th>
                                    <th>Cor</th>
                                    <th>Tamanho</th>
                                    <th>C.A</th>
                                    <th>Status do C.A</th>
                                    <th class="text-center" style="width: 150px">Ações</th>
                                </tr>
                                <tr v-for="grade in grades" v-if="epi.idCadastroEpi">
                                    <td>{{ grade.idGradeEmpresaEpi }}</td>
                                    <td>{{ grade.idOrigem }}</td>
                                    <td>{{ grade.ean13 }}</td>
                                    <td>{{ grade.cor.descricao }}</td>
                                    <td>{{ grade.tamanho.descricao }}</td>
                                    <td>{{ grade.cadastroEpiCa.ca }}</td>
                                    <td v-html="statusCA(grade.cadastroEpiCa)"></td>
                                    <td style="width: 150px" class="text-center">
                                        <button type="button" @click="removerGrade(grade)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                                        <button type="button" @click="editarGrade(grade)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-success" @click="novaGrade"><i class="fas fa-plus"></i> Adicionar</button>
                    </div>

                </div>

            </b-modal>

            <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3>Tem certeza que deseja excluir este epi?</h3>
                    </div>
                </div>
                <div class="row" style="margin-top: 20px">
                    <div class="col-md-6 text-center">
                        <button type="button" class="btn btn-block btn-default btn-lg" data-dismiss="modal" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
                    </div>
                    <div class="col-md-6 text-center">
                        <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
                    </div>
                </div>
            </b-modal>

            <b-modal ok-only size="lg" hide-footer :title="'Lista de CA do EPI ' + this.titulo " centered ref="modalCas" ok-title="Fechar" id="modalCas">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box-body table-responsive">
                            <table class="table table-hover table-striped">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>CA</th>
                                        <th>Validade</th>
                                        <th>Fabricante</th>
                                        <th>Bloqueio</th>
                                        <th class="text-center" style="width: 150px">Ações</th>
                                    </tr>
                                    <tr v-for="ca in cas">
                                        <td>{{ ca.idCadastroEpiCa }}</td>
                                        <td>{{ ca.ca }} </td>
                                        <td v-html="testaValidade(ca.validade)"></td>
                                        <td>{{ ca.fabricante }}</td>
                                        <td>{{ ca.dataBloqueio | moment('DD/MM/YYYY') }}</td>
                                        <td style="width: 150px" class="text-center">
                                            <button type="button" @click="removerCa(ca)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                                            <button type="button" @click="preencherCa(ca)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                                            <!-- <a :href="'https://consultaca.com/'+ca.ca"
                                                            class="btn btn-outline-secondary btn-sm" target="_blank"><i
                                                                class="fa fa-mouse-pointer"></i></a> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <br>
                        <button class="btn btn-success" @click="abrirCa()"><i class="fa fa-plus"></i>
                            Adicionar</button>
                    </div>
                </div>
            </b-modal>

            <b-modal :no-close-on-backdrop="true" @ok="okCa" :hide-header-close="true" :no-close-on-esc="true" ok-title="Salvar" cancel-title="Cancelar" @cancel="fecharCa()" size="lg" :title="'Novo CA no EPI ' + this.titulo " centered ref="novoCa" id="novoCa">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">Nº do CA</label>
                            <!-- <input v-if="!this.ca.idCadastroEpiCa" type="number" v-model="ca.ca"
                                            class="form-control"> -->

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" v-model="ca.ca" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <a :href="'https://consultaca.com/'+ca.ca" class="btn btn-outline-secondary" target="_blank" type="button"><i class="fa fa-mouse-pointer"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">Validade</label>
                            <input type="date" v-model="ca.validade" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">Fabricante</label>
                            <input type="text" class="form-control" v-model="ca.fabricante">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="">Bloqueio</label>
                            <input type="date" v-model="ca.dataBloqueio" class="form-control">
                        </div>
                    </div>
                </div>
            </b-modal>

            <b-modal ok-title="Salvar" @ok="salvarGrade" cancel-title="Cancelar" size="lg" :title="'Nova grade'" centered ref="novaGrade" id="novaGrade">
                <div class="row">
                    <div class="col">
                        <div class="form-contro">
                            <label for="">ID Origem</label>
                            <input type="text" v-model="grade.idOrigem" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-contro">
                            <label for="">Cod. de Barras</label>
                            <input type="text" v-model="grade.ean13" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-contro">
                            <label for="">Cores</label>
                            <select v-model="grade.cor" class="form-control">
                                <option :value="cor" v-for="cor in cores">{{cor.descricao}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-contro">
                            <label for="">Tamanho</label>
                            <select v-model="grade.tamanho" class="form-control">
                                <option :value="tamanho" v-for="tamanho in tamanhos">{{tamanho.descricao}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-contro">
                            <label for="">CA</label>
                            <select class="form-control" v-model="grade.cadastroEpiCa">
                                <option :value="ca" v-for="ca in cas">{{ca.ca}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Fabricante</label>
                            <input type="text" disabled v-model="grade.cadastroEpiCa.fabricante" class="form-control">
                        </div>
                    </div>
                </div>
            </b-modal>

        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            epis: [],
            epi: {},
            episBanco: [],
            editar: false,
            titulo: '',
            atual: '',
            grades: [],
            carregando: true,
            mensagem: '',
            cas: [],
            cores: [],
            tamanhos: [],
            grade: {
                idGradeEmpresaEpi: 0,
                cadastroEpiCa: []
            },
            ca: {},
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
        }
    },
    methods: {
        statusCA: function (ca) {
            if (!ca.dataBloqueio) {
                var data = Vue.moment(ca.validade, "YYYY-MM-DD");
                var hoje = Vue.moment().startOf('day');
                if (data < hoje) {
                    return "<span style='color: red'> Vencido </span>";
                } else {
                    return "<span style='color: green'> Valido </span>";
                }
            } else {
                var data = Vue.moment(ca.dataBloqueio, "YYYY-MM-DD");
                var hoje = Vue.moment().startOf('day');
                if (data < hoje) {
                    return "<span style='color: red'> Bloqueado </span>";
                }
            }
        },
        editarGrade: function (grade) {
            this.grade = grade;
            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
                that.cas = response.data;
                that.$refs.novaGrade.show();
            });
        },

        removerGrade: function (grade) {
            var that = this;

            axios.get('/cadastro-epi/grade/' + grade.idGradeEmpresaEpi).then(function (response) {
                if (response.data.status == 'true') {
                    axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + that.epi.idCadastroEpi).then(function (response) {
                        that.grades = response.data;
                    });
                }
            });
        },

        novaGrade: function () {
            var that = this;

            this.grade = {
                idGradeEmpresaEpi: 0,
                cadastroEpiCa: {},
                ean13: '',
                cor: {},
                tamanho: {}
            }

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
                that.cas = response.data;
                that.$refs.novaGrade.show();
            });
        },
        testaValidade: function (validade) {
            var data = Vue.moment(validade, "YYYY-MM-DD");
            var hoje = Vue.moment().startOf('day');

            var diff = Vue.moment.duration(data.diff(hoje)).asDays();

            //console.log(Vue.moment(validade, "DD/MM/YYYY"));
            if (diff < 0) {
                return "<span style='color: red'> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
            } else {
                return "<span> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
            }
            // //console.log(new Date() | Vue.moment('YYYY-MM-DD'));
        },
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        preencher: function (epi) {
            this.atual = epi.epi.idEpi;
            this.epi = epi;
            this.editar = true;
            var that = this;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + epi.idCadastroEpi).then(function (response) {
                that.grades = response.data;
                that.$refs.myModal.show();
            });

        },
        abrir: function () {
            this.epi = {};
            this.$refs.myModal.show();
        },

        salvarGrade: function (evt) {
            evt.preventDefault();
            var that = this;

            axios.post('/cadastro-epi/grade', {
                grade: that.grade,
                cadastroEpi: that.epi
            }).then(function (response) {
                axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + that.epi.idCadastroEpi).then(function (response) {
                    that.grades = response.data;
                    that.$refs.novaGrade.hide();
                });
            });
        },

        fechar: function () {
            this.editar = false;
            this.epi = {};
            this.atual = '';
            var that = this;
            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cadastro-epis').then(function (response) {
                that.epis = response.data;
                that.$refs.myModal.hide();
            });
        },
        fecharCerteza: function () {
            this.$refs.modalCerteza.hide();
        },
        sucesso: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function () {
                that.carregando = false;
            }, 800);
        },
        epiEmEpi: function (empresa) {

            for (var i = 0; i < this.epis.length; i++) {
                if (this.epis[i].epi.idEpi === empresa.idEpi) {
                    return true;
                }
            }

            return false;
        },
        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        remover: function (dado) {
            this.deletar = dado.idCadastroEpi;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();
        },

        certeza: function () {
            this.carregar('Removendo epi...');
            var that = this;
            axios.get('/empresas/epis/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function (
                response) {
                that.epis = response.data;
                that.$nextTick(() => {
                    that.fecharCerteza();
                    that.sucesso('Excluido com sucesso!');
                });
            });
        },

        atualizar: function () {
            this.carregar('Atualizando...');
            var that = this;
            axios.post('/empresas/epis/atualizar/' + that.empresa.idEmpresa, {
                dados: that.epi
            }).then(function (response) {
                that.epis = response.data;
                that.$nextTick(() => {
                    that.sucesso('EPI atualizado.');
                    that.fechar();
                });
            });
        },

        salvar: function () {
            this.carregar('Salvando...');
            var that = this;
            //console.log(this.epi);
            axios.post('/empresas/epis/novo/' + that.empresa.idEmpresa, {
                dados: that.epi
            }).then(function (response) {
                that.epis = response.data;
                that.$nextTick(() => {
                    that.sucesso("EPI incluído.");
                     that.fechar();
                });
            });
        },

        listCa: function (dados) {
            var that = this;

            this.epi = dados;

            axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
                that.cas = response.data;
            });

            this.titulo = dados.epi.descricao;
            //console.log(this.cas);

            this.$refs.modalCas.show();
        },

        abrirCa: function () {
            this.$refs.novoCa.show();
        },

        okCa: function () {

            console.log(this.epi);
            if (this.ca.idCadastroEpiCa) {
                this.carregar('Atualizando...');
                var that = this;
                axios.post('/empresas/epis/cas/atualizar/' + that.ca.idCadastroEpiCa, {
                    dados: that.ca,
                    cadastroEpi: that.epi.idCadastroEpi
                }).then(function (response) {
                    that.cas = response.data;
                    that.$nextTick(() => {
                        that.sucesso("CA atualizado!");
                        that.fecharCa();
                    });
                });

                // alert('ainda não edita.');

            } else {
                this.carregar('Salvando...');
                var that = this;
                axios.post('/empresas/epis/cas/novo/' + that.epi.idCadastroEpi, {
                    dados: that.ca,
                    cadastroEpi: that.epi.idCadastroEpi
                }).then(function (response) {
                    that.cas = response.data;
                    that.$nextTick(() => {
                        that.sucesso("CA incluído.");
                        that.fecharCa();
                    });
                });
            }

        },

        fecharCa: function () {
            this.ca = {};
        },

        preencherCa: function (dados) {
            //console.log(dados);
            this.ca = dados;
            this.$refs.novoCa.show();
        },

        removerCa: function (dados) {
            //console.log(dados);
            this.carregar('Removendo CA...');
            var that = this;
            axios.get('/empresas/epis/cas/remover/' + this.epi.idCadastroEpi + '/' + dados.idCadastroEpiCa).then(
                function (response) {
                    that.cas = response.data;
                    that.$nextTick(() => {
                        that.sucesso('Excluido com sucesso!');
                    });
                });
        }
    },
    mounted() {
        var that = this;
        //console.log(this.empresa);
        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cadastro-epis').then(function (response) {
            that.epis = response.data;
        });

        axios.get('/tabelas/epi/list/').then(function (response) {
            that.episBanco = response.data;
            // //console.log(response.data);
        });

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/cores').then(function (response) {
            that.cores = response.data;
        });

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/tamanhos').then(function (response) {
            that.tamanhos = response.data;
        })

        this.sucesso('Carregados os epis');
    }
}
</script>

<style scoped>
.titulo {
    text-align: center;
    background-color: #00a65a;
    padding: 6px;
    color: white;
    font-size: 17px;
    margin-top: 5px;
}

.form-remove[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
