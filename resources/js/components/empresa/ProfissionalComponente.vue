<template>
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div v-if="montou" class="box box-info">
            <!-- /.box-header -->
            <div class="box-body table-responsive">
                <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                        <tr>
                            <th @click="ordenar('codigo')" style="width: 100px"
                                v-bind:class="{'selecionado': this.coluna == 'codigo'}">
                                Código
                                
                                
                            </th>
                            <th @click="ordenar('descricao')"
                                v-bind:class="{'selecionado': this.coluna == 'descricao'}">
                                Nome
                                
                                
                            </th>

                            <th @click="ordenar('descricao')"
                                v-bind:class="{'selecionado': this.coluna == 'descricao'}">
                                Grupo Profissional
                                
                                
                            </th>

                            <th>Data Inicial</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="preencher(profissional)" style="cursor: pointer" v-for="profissional in profissionais">
                            <td style="vertical-align: middle" width="80px"><b>{{ profissional.idEmpresaProfissional }}</b></td>
                            <td style="text-align:justify">{{ profissional.pessoa.nomePessoa }}</td>
                            <td style="text-align:justify">{{ listaGrupo(profissional) }}
                            </td>
                            <td>{{ profissional.dataInicial | moment("DD/MM/Y") }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <div class="col-md-12 no-padding text-center">
                    <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                        Adicionar</button>
                </div>
            </div>
        </div>

        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true"
            :no-close-on-esc="true" @cancel="fechar()" :title="'Detalhes do Profissional - ' + empresa.nomeFantasia" ok-title="Salvar"
            cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-1">
                    <div class="form-group">
                        <label for="">ID</label>
                        <input type="text" class="form-control" disabled v-model="profissional.idEmpresaProfissional">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Vinculo</label>
                        <select name="" id="" @change="mudaPessoas()" v-model="profissional.tipoProfissional"
                            class="form-control">
                            <option value="AUTÔNOMO">Autônomo</option>
                            <option value="EMPREGADO">Empregado</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">Pessoa</label>
                        <select v-model="profissional.pessoa" class="form-control">
                            <option v-for="pessoa in pessoas" :value="pessoa">{{ pessoa.nomePessoa }}</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">CPF</label>
                        <input type="text" disabled class="form-control" v-model="profissional.pessoa.cpf">
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group">
                        <label for="">PIS</label>
                        <input type="text" disabled class="form-control" v-model="profissional.pessoa.pis">
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="form-group">
                        <label for="">Grupo Profissional</label>
                        <select @change="mudaGrupo()"
                            v-if="this.profissional.pessoa && this.profissional.pessoa.sexo == 'MASCULINO'"
                            v-model="profissional.grupoProfissional" class="form-control">
                            <option value="MÉDICO_COORDENADOR_PCMSO" v-if="!profissinaisEmGrupo('MÉDICO_COORDENADOR_PCMSO') || 'MÉDICO_COORDENADOR_PCMSO' === atual">Médico Coordenador PCMSO</option>
                            <option value="MÉDICO_EXAMINADOR" v-if="!profissinaisEmGrupo('MÉDICO_EXAMINADOR') || 'MÉDICO_EXAMINADOR' === atual">Médico Examinador</option>
                            <option value="TÉCNICO_SEG_TRABALHO" v-if="!profissinaisEmGrupo('TÉCNICO_SEG_TRABALHO') || 'TÉCNICO_SEG_TRABALHO' === atual">Téc de Segurança do Trabalho</option>
                            <option value="TÉCNICO_ENF_TRABALHO" v-if="!profissinaisEmGrupo('TÉCNICO_ENF_TRABALHO') || 'TÉCNICO_ENF_TRABALHO' === atual">Téc de Enfermagem do Trabalho</option>
                            <option value="ENFERMEIRO_TRABALHO" v-if="!profissinaisEmGrupo('ENFERMEIRO_TRABALHO') || 'ENFERMEIRO_TRABALHO' === atual">Enfermeiro do Trabalho</option>
                            <option value="ENG_SEGURANÇA_TRABALHO" v-if="!profissinaisEmGrupo('ENG_SEGURANÇA_TRABALHO') || 'ENG_SEGURANÇA_TRABALHO' === atual">Eng Segurança do Trabalho</option>
                            <option value="PREPOSTO_PPP" v-if="!profissinaisEmGrupo('PREPOSTO_PPP') || 'PREPOSTO_PPP' === atual">Preposto PPP</option>
                        </select>

                        <select @change="mudaGrupo()"
                            v-if="this.profissional.pessoa && this.profissional.pessoa.sexo == 'FEMININO'"
                            v-model="profissional.grupoProfissional" class="form-control">
                            <option value="MÉDICO_COORDENADOR_PCMSO">Médica Coordenadora PCMSO</option>
                            <option value="MÉDICO_EXAMINADOR">Médica Examinadora</option>
                            <option value="TÉCNICO_SEG_TRABALHO">Técª de Segurança do Trabalho</option>
                            <option value="TÉCNICO_ENF_TRABALHO">Técª d Enfermagem do Trabalho</option>
                            <option value="ENFERMEIRO_TRABALHO">Enfermeira do Trabalho</option>
                            <option value="ENG_SEGURANÇA_TRABALHO">Eng Segurança do Trabalho</option>
                            <option value="PREPOSTO_PPP">Preposta PPP</option>
                        </select>

                        <input type="text" disabled v-if="!Object.keys(this.profissional.pessoa).length"
                            class="form-control" value="SELECIONE A PESSOA">
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Título</label>
                        <select disabled class="form-control" v-model="profissional.titulo">
                            <option value="DR">Dr</option>
                            <option value="DRª">Drª</option>
                            <option value="TST">TST</option>
                            <option value="TET">TET</option>
                            <option value="ENF">ENF</option>
                            <option value="PREPOSTO">PREPOSTO</option>
                            <option value="ENG">Eng</option>
                        </select>
                    </div>
                </div>


                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">Conselho</label>
                        <select v-model="profissional.conselho" disabled class="form-control">
                            <option value="CRM">CRM</option>
                            <option value="CREA">CREA</option>
                            <option value="COREN">COREN</option>
                            <option value="MTE">MTE</option>
                            <option value="CAU">CAU</option>
                            <option value="NA">NA</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-2">
                    <div class="form-group">
                        <label for="">UF</label>
                        <select v-model="profissional.uf" class="form-control">
                            <option v-for="estado in estados" :value="estado.sigla">
                                {{ estado.sigla }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="">Registro</label>
                        <input type="text" v-model="profissional.numeroRegistro" class="form-control">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">Data Inicial</label>
                        <input type="date" v-model="profissional.dataInicial" class="form-control">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">Data Final</label>
                        <input type="date" v-model="profissional.dataFinal" class="form-control">
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">Telefone</label>
                        <input type="text" v-model="profissional.telefone" v-mask="'(##)####-####?#'"
                            class="form-control">
                    </div>
                </div>

                <div v-if="profissional.grupoProfissional == 'MÉDICO_EXAMINADOR'" class="col-md-12">
                    <div class="form-group">
                        <label for="">Rodapé do ASO</label>
                        <input type="text" class="form-control" v-model="profissional.rodape">
                    </div>
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
                profissionais: [],
                profissional: {
                    idEmpresaProfissional: 0,
                    tipoProfissional: '',
                    pessoa: {},
                    grupoProfissional: '',
                    conselho: '',
                    titulo: '',
                    telefone: '',
                    numeroRegistro: '',
                },
                descricao: '',
                funcionarios: '',
                pessoas: '',
                codigo: '',
                id: '',
                atual: '',
                erro: false,
                editar: false,
                carregando: true,
                mensagem: 'Carregando itens cadastrados',
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

            sucesso: function (msg) {
                this.mensagem = msg;
                this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
                var that = this;
                setTimeout(function () {
                    that.carregando = false;
                }, 800);
            },

            ok: function () {

                var that = this;

                this.carregar('Salvando...');

                axios.post('/empresas/profissionais/post/'+ this.empresa.idEmpresa, {
                   
                   profissional: that.profissional,

                }).then(function (response) {

                    //console.log(response.data);

                    if (response.data == 'erro') {
                        that.codigo = '';
                        that.erro = true;
                    } else {
                        that.profissionais = response.data;
                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });
                    }
                });
            },

            mudaPessoas() {
                var that = this;
                this.carregar('Carregando pessoas..');

                if (this.profissional.tipoProfissional == 'AUTÔNOMO') {
                    axios.get('/pessoas/list/autonomo/' + that.empresa.idEmpresa).then(function (response) {
                        that.pessoas = response.data;
                        console.log(response.data);
                        that.sucesso('Pessoas carregadas!');
                    });
                } else {
                    axios.get('/pessoas/list/empregado/' + that.empresa.idEmpresa).then(function (response) {
                        that.pessoas = response.data;
                        that.sucesso('Pessoas carregadas!');
                    });
                }

            },

            mudaGrupo() {
                var that = this;

                if (this.profissional.grupoProfissional == 'MÉDICO_COORDENADOR_PCMSO' || this.profissional
                    .grupoProfissional == 'MÉDICO_EXAMINADOR') {
                    this.profissional.conselho = 'CRM';

                    if (this.profissional.pessoa.sexo == 'MASCULINO') {
                        this.profissional.titulo = 'DR';
                    } else {
                        this.profissional.titulo = 'DRª';
                    }

                } else if (this.profissional.grupoProfissional == 'TÉCNICO_SEG_TRABALHO') {
                    this.profissional.conselho = 'MTE';
                    this.profissional.titulo = 'TST';
                } else if (this.profissional.grupoProfissional == 'TÉCNICO_ENF_TRABALHO') {
                    this.profissional.conselho = 'MTE';
                    this.profissional.titulo = 'TET';
                } else if (this.profissional.grupoProfissional == 'ENFERMEIRO_TRABALHO') {
                    this.profissional.titulo = 'COREN';
                } else if (this.profissional.grupoProfissional == 'PREPOSTO_PPP') {
                    this.profissional.titulo = 'PREPOSTO';
                } else if(this.profissional.grupoProfissional == 'ENG_SEGURANÇA_TRABALHO') {
                    this.profissional.conselho = 'CREA';
                    this.profissional.titulo = 'ENG';
                }
            },

            listaGrupo(profissional) {
                  if (profissional.grupoProfissional == 'MÉDICO_COORDENADOR_PCMSO' ) {
                    if (profissional.pessoa.sexo == 'MASCULINO') {
                        return 'Médico Coordenado do PCMSO';
                    } else {
                        return 'Médico Coordenado do PCMSO';
                    }
                } else if (profissional.grupoProfissional == 'MÉDICO_EXAMINADOR') {
                   if (profissional.pessoa.sexo == 'MASCULINO') {
                        return 'Médico Examinador';
                    } else {
                        return 'Médica Examinadora';
                    }
                } else if (profissional.grupoProfissional == 'TÉCNICO_SEG_TRABALHO') {
                   if (profissional.pessoa.sexo == 'MASCULINO') {
                        return 'Téc de Segurança do Trabalho';
                    } else {
                        return 'Técª de Segurança do Trabalho';
                    }
                } else if (profissional.grupoProfissional == 'TÉCNICO_ENF_TRABALHO') {
                    if (profissional.pessoa.sexo == 'MASCULINO') {
                        return 'Téc de Enfermagem do Trabalho';
                    } else {
                        return 'Técª de Enfermagem do Trabalho';
                    }
                } else if (profissional.grupoProfissional == 'ENFERMEIRO_TRABALHO') {
                    if (profissional.pessoa.sexo == 'MASCULINO') {
                        return 'Enfermeiro do Trabalho';
                    } else {
                        return 'Enfermeira do Trabalho';
                    }
                } else if (profissional.grupoProfissional == 'PREPOSTO_PPP') {
                    return 'PREPOSTO';
                } else if (profissional.grupoProfissional == 'ENG_SEGURANÇA_TRABALHO') {
                    return 'Eng. Segurança do Trabalho';
                }
            },

            fechar() {
                this.profissional = {
                    idEmpresaProfissional: 0,
                    tipoProfissional: '',
                    pessoa: {},
                    grupoProfissional: '',
                    conselho: '',
                    titulo: '',
                    telefone: '',
                    numeroRegistro: '',
                }
            },

                profissinaisEmGrupo: function (grupo) {
                for (var i = 0; i < this.profissionais.length; i++) {
                    
                    if (this.profissionais[i].pessoa && this.profissional.pessoa && this.profissionais[i].pessoa.idPessoa === this.profissional.pessoa.idPessoa && this.profissionais[i].grupoProfissional && this.profissionais[i].grupoProfissional == grupo) {
                        return true;
                    }
                }
                return false;
            },

            alerta: function (msg) {
                this.mensagem = msg;
                this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
                var that = this;
                setTimeout(function () {
                    that.carregando = false;
                }, 1000);
            },

            preencher(profissional) {
                this.profissional = Object.assign({}, profissional);

                this.atual = this.profissional.grupoProfissional;

                this.abrir();
            },

            abrir: function () {

                this.$refs.myModal.show();

            },

            ordenar: function (coluna) {
                if (this.coluna == coluna) {
                    this.ordem = !this.ordem;
                } else {
                    this.ordem = true;
                }

                this.coluna = coluna;

                if (coluna == 'codigo') {

                    if (this.ordem == true) {

                        this.cids.sort(function (a, b) {

                            if (a.codigoCid > b.codigoCid) {
                                return 1;
                            }

                            if (a.codigoCid < b.codigoCid) {
                                return -1;
                            }

                            return 0;

                        });

                    } else {

                        this.cids.sort(function (a, b) {

                            if (a.codigoCid > b.codigoCid) {
                                return -1;
                            }

                            if (a.codigoCid < b.codigoCid) {
                                return 1;
                            }

                            return 0;

                        });
                    }

                } else if (coluna == 'descricao') {
                    if (this.ordem == true) {

                        this.cids.sort(function (a, b) {

                            if (a.descricao > b.descricao) {
                                return 1;
                            }

                            if (a.descricao < b.descricao) {
                                return -1;
                            }

                            return 0;

                        });

                    } else {

                        this.cids.sort(function (a, b) {

                            if (a.descricao > b.descricao) {
                                return -1;
                            }

                            if (a.descricao < b.descricao) {
                                return 1;
                            }

                            return 0;

                        });
                    }
                }
            },

            pesquisar: function () {
                if (this.termo != '' && this.termo != ' ') {
                    this.carregar('Realizando a busca...');
                    //console.log(this.termo);
                    //console.log(this.selecionado);

                    var that = this;

                    axios.get('/tabelas/cid/buscar/' + that.selecionado + "/" + that.termo).then(function (
                        response) {

                        if (response.data.length > 0) {

                            that.cids = response.data;
                            that.sucesso('Encontramos ' + response.data.length + ' resultado(s).');
                            that.busca = true;

                        } else {

                            that.alerta('Nenhum resultado nesta busca');
                            that.busca = false;

                        }

                    });
                }

            },
            mostraPessoa: function (pessoa) {
                // if(profissional.tipoProfissional == 'AUTÔNOMO') {

                // }
            },
            voltar: function () {
                var that = this;
                this.carregar('Recuperando todos os itens...');
                axios.get('/profissionais/list').then(function (response) {
                    that.profissionais = response.data;
                    that.sucesso('Todas os itens recuperados com sucesso!');
                    that.busca = false;
                    that.termo = '';
                });
            }
        },
        mounted() {
            var that = this;
            axios.get('/empresas/profissionais/list/' + this.empresa.idEmpresa).then(function (response) {
                that.profissionais = response.data;
                //console.log(that.profissionais);
                that.montou = true;
                setTimeout(function () {
                    that.carregando = false;
                }, 200);
            });

            axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
                that.funcionarios = response.data;
            });

            axios.get('/pessoas/list').then(function (response) {
                that.pessoas = response.data;
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
