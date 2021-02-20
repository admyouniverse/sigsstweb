<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row">
        <div class="col-md-2">
            <div class="form-group">
                <label for="">Matricula</label>
                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.matricula">
            </div>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label for="">CPF</label>
                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.pessoa.cpf">
            </div>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label for="">Nome</label>
                <input disabled type="text" class="form-control" v-model="prontuario.empresaFuncionario.pessoa.nomePessoa">
            </div>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label for="">Dt. Nasc.</label>
                <input type="date" class="form-control form-remove" disabled v-model="prontuario.empresaFuncionario.pessoa.dataNascimento">
            </div>
        </div>
        <div class="col-md-1">
            <div class="form-group">
                <label for="">Idade</label>
                <input type="text" class="form-control" v-model="idade" disabled>
            </div>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label for="">Data de Admissão</label>
                <input type="date" disabled v-model="prontuario.dataIni" class="form-control form-remove">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Contrato</label>
                <input type="text" disabled v-model="prontuario.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia" class="form-control">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Ambiente Trabalho</label>
                <input type="text" disabled v-model="prontuario.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho" class="form-control">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label>Cargo</label>
                <input type="text" disabled v-model="prontuario.empresaFuncionario.funcao.cargo" class="form-control">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="titulo">Necessidades Especiais</h3>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label>PCD?</label>
                <input type="text" class="form-control" disabled value="NÃO" v-if="prontuarioNecessidades.length == 0 || (prontuarioNecessidades.length > 0 && prontuarioNecessidades[prontuarioNecessidades.length-1].dataFinal)">
                <input type="text" class="form-control" disabled value="SIM" v-if="prontuarioNecessidades.length > 0 && !prontuarioNecessidades[prontuarioNecessidades.length-1].dataFinal">
            </div>
        </div>
        <div class="col-md-9 mt-4" v-if="prontuarioNecessidades.length == 0 || (prontuarioNecessidades.length > 0 && prontuarioNecessidades[prontuarioNecessidades.length-1].dataFinal)">
            <button class="btn btn-success" @click="incluirPCD"><i class="fa fa-plus"></i> Incluir</button>
        </div>
    </div>

    <div class="row" v-if="prontuarioNecessidades.length > 0">
        <div class="col-md-12">
            <table class="table table-hover table-striped table-empregados">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Deficiencia</th>
                        <th>CID</th>
                        <th>Tipo</th>
                        <th>Origem</th>
                        <th>Dt. Inicial</th>
                        <th>Dt. Final</th>
                        <th>Observação</th>
                        <th>PDF</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prontuarioNec in prontuarioNecessidades">
                        <td>{{prontuarioNec.idProntuarioNecessidade}}</td>
                        <td>{{prontuarioNec.necessidade.descricao}}</td>
                        <td>{{prontuarioNec.cid.codigoCid}}</td>
                        <td>{{prontuarioNec.necessidade.tipo}}</td>
                        <td>{{prontuarioNec.deficienciaOrigem}}</td>
                        <td>{{prontuarioNec.dataInicial | moment('DD/MM/YYYY')}}</td>
                        <td>{{prontuarioNec.dataFinal | moment('DD/MM/YYYY')}}</td>
                        <td class="text-center"><button class="btn btn-outline-success btn-sm"> <i class="fas fa-eye"></i> </button></td>
                        <td class="text-center"><a @click="pdf(prontuarioNec)"><img src="/img/pdf.png" width="21px"></a></td>
                        <td class="text-center">
                            <button v-if="prontuarioNec == prontuarioNecessidades[prontuarioNecessidades.length-1]" type="button" @click="remover(prontuarioNec)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                            </button>
                            <button type="button" @click="preencher(prontuarioNec)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal @ok="salvar" cancel-title="Cancelar" ok-title="Salvar" size="xl" centered ref="modalPcd" title="Nova Necessidade">
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Cota de PCD?</label>
                    <select class="form-control" v-model="prontuarioNecessidade.informacaoCota">
                        <option value="SIM">Sim</option>
                        <option value="NÃO">Não</option>
                    </select>
                </div>
            </div>

            <div class="col-md-9">
                <div class="form-group">
                    <label for="">Descrição da Deficiencia</label>
                    <input type="text" v-model="prontuarioNecessidade.descricaoDeficiencia" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Origem</label>
                    <!-- <input type="text" class="form-control" v-model="prontuarioNecessidade.deficienciaOrigem"> -->
                    <select class="form-control" v-model="prontuarioNecessidade.deficienciaOrigem">
                        <option value="ACIDENTE_DE_TRABALHO">Acidente de Trabalho</option>
                        <option value="CONGENITA">Congenita</option>
                        <option value="ADQUIRIDA_EM_POS_OPERATORIO">Adquirida Em Pós Operatório</option>
                        <option value="ACIDENTE_COMUM">Acidente Comum</option>
                        <option value="ACIDENTE_COMUM">Doença do Trabalho</option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CID</label>
                    <select class="form-control" v-model="prontuarioNecessidade.cid">
                        <option :value="cid" v-for="cid in cids">{{cid.codigoCid}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label for="">Descrição do CID</label>
                    <input disabled v-model="prontuarioNecessidade.cid.descricao" class="form-control">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Deficiência Fisica?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select v-model="deficiencia" v-if="deficiencia == 'FISICO' || deficiencia == ''" class="form-control">
                                <option value="FISICO">SIM</option>
                                <option value="">NÃO</option>
                            </select>
                            <input class="form-control" type="text" disabled v-if="deficiencia != 'FISICO' && deficiencia != ''" value="NÃO">
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" v-model="prontuarioNecessidade.necessidade" v-if="deficiencia == 'FISICO'">
                                <option :value="nec" v-for="nec in necessidades" v-if="nec.tipo == 'FISICO'">{{ nec.descricao }}</option>
                            </select>
                            <input type="text" class="form-control" disabled v-if="deficiencia != 'FISICO'">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Deficiência Visual?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select v-model="deficiencia" v-if="deficiencia == 'VISUAL' || deficiencia == ''" class="form-control">
                                <option value="VISUAL">SIM</option>
                                <option value="">NÃO</option>
                            </select>
                            <input class="form-control" type="text" disabled v-if="deficiencia != 'VISUAL' && deficiencia != ''" value="NÃO">
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" v-model="prontuarioNecessidade.necessidade" v-if="deficiencia == 'VISUAL'">
                                <option :value="nec" v-for="nec in necessidades" v-if="nec.tipo == 'VISUAL'">{{ nec.descricao }}</option>
                            </select>
                            <input type="text" class="form-control" disabled v-if="deficiencia != 'VISUAL'">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Deficiência Auditiva?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select v-model="deficiencia" v-if="deficiencia == 'AUDITIVO' || deficiencia == ''" class="form-control">
                                <option value="AUDITIVO">SIM</option>
                                <option value="">NÃO</option>
                            </select>
                            <input class="form-control" type="text" disabled v-if="deficiencia != 'AUDITIVO' && deficiencia != ''" value="NÃO">
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" v-model="prontuarioNecessidade.necessidade" v-if="deficiencia == 'AUDITIVO'">
                                <option :value="nec" v-for="nec in necessidades" v-if="nec.tipo == 'AUDITIVO'">{{ nec.descricao }}</option>
                            </select>
                            <input type="text" class="form-control" disabled v-if="deficiencia != 'AUDITIVO'">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Deficiência Mental?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select v-model="deficiencia" v-if="deficiencia == 'MENTAL' || deficiencia == ''" class="form-control">
                                <option value="MENTAL">SIM</option>
                                <option value="">NÃO</option>
                            </select>
                            <input class="form-control" type="text" disabled v-if="deficiencia != 'MENTAL' && deficiencia != ''" value="NÃO">
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" v-model="prontuarioNecessidade.necessidade" v-if="deficiencia == 'MENTAL'">
                                <option :value="nec" v-for="nec in necessidades" v-if="nec.tipo == 'MENTAL'">{{ nec.descricao }}</option>
                            </select>
                            <input type="text" class="form-control" disabled v-if="deficiencia != 'MENTAL'">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Deficiência Intelectual?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select v-model="deficiencia" v-if="deficiencia == 'INTELECTUAL' || deficiencia == ''" class="form-control">
                                <option value="INTELECTUAL">SIM</option>
                                <option value="">NÃO</option>
                            </select>
                            <input class="form-control" type="text" disabled v-if="deficiencia != 'INTELECTUAL' && deficiencia != ''" value="NÃO">
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" v-model="prontuarioNecessidade.necessidade" v-if="deficiencia == 'INTELECTUAL'">
                                <option :value="nec" v-for="nec in necessidades" v-if="nec.tipo == 'INTELECTUAL'">{{ nec.descricao }}</option>
                            </select>
                            <input type="text" class="form-control" disabled v-if="deficiencia != 'INTELECTUAL'">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Reabilitado INSS?</label>
                    <div class="row">
                        <div class="col-md-4">
                            <select type="text" v-model="prontuarioNecessidade.reabilitadoINSS" class="form-control">
                                <option value="SIM">Sim</option>
                                <option value="NÃO">Não</option>
                            </select>
                        </div>

                        <div class="col-md-8" v-if="prontuarioNecessidade.reabilitadoINSS == 'SIM'">
                            <div class="row">
                                <input v-on:change="handleFileUpload" type="file" id="file" style="display: none" ref="file">
                                <div v-if="!prontuarioNecessidade.urlPdf" class="col-md-12">
                                    <button class="btn pull-right btn-success btn-block" @click="abrirUpload"><i class="fa fa-upload"></i> Inserir PDF</button>
                                </div>
                                <div v-if="prontuarioNecessidade.urlPdf" class="col-md-6">
                                    <button class="btn pull-right btn-success btn-block" @click="abrirUpload"><i class="fa fa-upload"></i> Atualizar PDF</button>
                                </div>
                                <div v-if="prontuarioNecessidade.urlPdf" class="col-md-6">
                                    <button @click="pdf(prontuarioNecessidade)" class="btn pull-right btn-success btn-block"><i class="fa fa-upload"></i> Visualizar PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Observações</label>
                    <input type="text" v-model="prontuarioNecessidade.observacao" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt Inicial</label>
                    <input type="date" v-on:blur="mudouInicial" :min="prontuario.dataIni" v-model="prontuarioNecessidade.dataInicial" class="form-control">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Médico</label>
                    <input type="text" v-model="prontuarioNecessidade.nomeMedico" class="form-control">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">CRM</label>
                    <input type="text" v-model="prontuarioNecessidade.crmMedico" class="form-control">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">UF</label>
                    <select v-model="prontuarioNecessidade.ufMedico" class="form-control">
                        <option :value="estado.sigla" v-for="estado in estados">{{estado.nome}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Dt Final</label>
                    <input v-on:blur="mudouFinal" v-model="prontuarioNecessidade.dataFinal" type="date" class="form-control">
                </div>
            </div>
        </div>

    </b-modal>
</div>
</template>

<script>
export default {
    props: ['prontuario', 'empresa'],
    data() {
        return {
            deficiencia: '',
            necessidades: '',
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
            prontuarioNecessidade: {
                "idProntuarioNecessidade": 0,
                "prontuario": {},
                "urlPdf": "",
                "observacao": "",
                "descricaoDeficiencia": "",
                "nomeMedico": "",
                "crmMedico": "",
                "ufMedico": "",
                "necessidade": {

                },
                "deficienciaOrigem": "",
                "cid": {
                    descricao: ''
                },
                "dataInicial": "",
                "dataFinal": "",
                "reabilitadoINSS": "",
                "informacaoCota": "",
                "usuario": 1
            },
            prontuarioNecessidades: [],
            file: '',
            cids: [],
            pcd: 'NÃO',
            carregando: false,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
        }
    },
    computed: {
        idade() {
            var nascimento = new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento);
            var hoje = new Date;
            var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
            if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
                new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
                diferencaAnos--;

            console.log(diferencaAnos)
            return diferencaAnos;
        }
    },
    methods: {
        pdf(prontuario) {
            if (prontuario.urlPdf) {
                window.open('http://200.98.201.236:8081/' + prontuario.urlPdf);
            } else {
                alert('Não há PDF anexado.')
            }
        },
        incluirPCD() {
            this.prontuarioNecessidade = {
                "idProntuarioNecessidade": 0,
                "prontuario": {},
                "urlPdf": "",
                "observacao": "",
                "descricaoDeficiencia": "",
                "nomeMedico": "",
                "crmMedico": "",
                "ufMedico": "",
                "necessidade": {

                },
                "deficienciaOrigem": "",
                "cid": {
                    descricao: ''
                },
                "dataInicial": "",
                "dataFinal": "",
                "reabilitadoINSS": "",
                "informacaoCota": "",
                "usuario": 1
            };
            this.$refs.modalPcd.show();
        },
        abrirUpload() {
            $("#file").click();
        },

        mudouInicial() {
            var admissional = new Date(this.prontuario.dataIni);
            var inicial = new Date(this.prontuarioNecessidade.dataInicial);

            if (inicial < admissional) {
                this.prontuarioNecessidade.dataInicial = null;
                this.$alert('Data de inicial deve ser maior ou igual a data admissional', 'Ops!', 'error');
            }
        },

        mudouFinal() {
            var final = new Date(this.prontuarioNecessidade.dataFinal);
            var inicial = new Date(this.prontuarioNecessidade.dataInicial);

            if (inicial > final) {
                this.prontuarioNecessidade.dataFinal = null;
                this.$alert('Data de final deve ser maior ou igual a data admissional', 'Ops!', 'error');
            }
        },

        pdf(complementar) {
            if (complementar.urlPdf) {
                window.open('http://200.98.201.236:8081/' + complementar.urlPdf);
            } else {
                alert('Não há PDF anexado.')
            }
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.submitFile();
        },

        preencher(prontuario) {
            this.prontuarioNecessidade = prontuario;
            this.deficiencia = prontuario.necessidade.tipo;
            this.$refs.modalPcd.show();
        },

        remover(prontuario) {
            var that = this;

            axios.get('/prontuario-medico/pcd/' + prontuario.idProntuarioNecessidade).then(function (response) {
                axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
                    that.prontuarioNecessidades = response.data;
                });
            });
        },
        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },
        salvar(evt) {
            evt.preventDefault();

            var that = this;

            this.prontuarioNecessidade.prontuario = this.prontuario;
            this.carregar("Salvando dados...");
            axios.post('/prontuario-medico/pcd', {
                prontuarioNecessidade: that.prontuarioNecessidade,
            }).then(function (response) {
                console.log(response.data);
                if (response.data.status == 'false') {
                    that.carregando = false;
                    that.$alert(response.data.msg, 'Erro!', 'error');
                } else {
                    axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
                        that.prontuarioNecessidades = response.data;
                        that.$refs.modalPcd.hide();
                        that.carregando = false;
                        that.$alert('Dados salvos!', 'Sucesso!', 'success');
                    });
                }

            });
        },

        submitFile() {

            console.log('submentendo....');
            /*
                    Initialize the form data
                */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

            /*
              Make the request to the POST /single-file URL
            */
            var that = this;
            axios.post('http://200.98.201.236:8081/upload-file',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (response) {
                    that.prontuarioNecessidade.urlPdf = response.data.data.new_file_name;
                    console.log(that.prontuarioNecessidade.urlPdf);
                    that.temPdf = true;
                    // that.salvar();
                })
                .catch(function () {});
        },
    },
    mounted() {
        var that = this;

        axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/necessidades').then(function (response) {
            that.necessidades = response.data;
        });

        axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/cids').then(function (response) {
            that.cids = response.data;
        });

        axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/' + this.prontuario.idProntuario).then(function (response) {
            that.prontuarioNecessidades = response.data;
        });
    }
}
</script>

<style lang="scss" scoped>
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
