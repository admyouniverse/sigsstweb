<template>
<div>
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
                <label for="">Data Inicial</label>
                <input type="date" disabled v-model="prontuario.dataIni" class="form-control form-remove">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="titulo">Lista de afastamentos</h3>
        </div>
        <div class="col-md-12">
            <button class="btn btn-success btn-sm mb-2" @click="incluir" :disabled="afastamentos.length > 0 && !afastamentos[afastamentos.length - 1].dataRetorno"><i class="fas fa-plus"></i> Adicionar</button>
        </div>
        <div class="col-md-12">
            <table id="tabelaListagemEmpregados" class="table table-hover table-striped table-empregados">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CID</th>
                        <th>Dt. Afasta</th>
                        <th>Dt. Retorno</th>
                        <th>Dias At.</th>
                        <th>Observação</th>
                        <th>PDF</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
					<tr v-for="afastamento in afastamentos">
						<td>{{afastamento.idProntuarioAfastamento}}</td>
						<td>{{afastamento.cid.idCid}} - {{afastamento.cid.descricao}}</td>
						<td>{{afastamento.dataAfastamento | moment('DD/MM/YYYY')}}</td>
						<td>{{afastamento.dataRetorno | moment('DD/MM/YYYY')}}</td>
						<td>{{dias(afastamento)}}</td>
						<td>{{afastamento.observacao}}</td>
						<td></td>
						<td><button class="btn btn-primary btn-sm" @click="editar(afastamento)"><i class="fas fa-pencil-alt"></i></button></td>
					</tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="lg" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" @ok="salvar" title="Afastar" ok-title="Salvar" cancel-title="Cancelar" ref="modalAfastamento" id="modal1">
        <div class="row">
            <div class="col-md-1">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" class="form-control" disabled v-model="afastamento.idProntuarioAfastamento">
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Obito</label>
                    <select v-model="afastamento.obito" class="form-control">
                        <option value="SIM">Sim</option>
                        <option value="NÃO">Não</option>
                    </select>
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group">
                    <label for="">Motivo</label>
                    <select type="text" v-model="afastamento.motivoAfastamento" class="form-control">
                        <option :value="motivo" v-for="motivo in motivos" v-if="motivo.prontuario == 'SIM'">{{motivo.codigoMotivo}} - {{motivo.descricao}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">CID</label>
                    <select type="text" v-model="afastamento.cid" class="form-control">
                        <option :value="cid" v-for="cid in cids">{{cid.codigoCid}} - {{cid.descricao}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Dt. Afasta</label>
                    <input type="date" v-model="afastamento.dataAfastamento" v-on:blur="mudouAfastamento()" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Dt. Retorno</label>
                    <input type="date" v-model="afastamento.dataRetorno" v-on:blur="mudouRetorno()" class="form-control">
                </div>
            </div>

            <div class="col-md-12">
                <h3 class="titulo">Lista de afastamentos</h3>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observações</label>
                    <textarea class="form-control" v-model="afastamento.observacao"></textarea>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Médico</label>
                    <input type="text" class="form-control" v-model="afastamento.medico">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Conselho</label>
                    <select v-model="afastamento.conselho" class="form-control">
                        <option value="CRO">CRO</option>
                        <option value="CRM">CRM</option>
                    </select>
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Número</label>
                    <input type="text" v-model="afastamento.numero" class="form-control">
                </div>
            </div>

            <div class="col-md-2">
                <div class="form-group">
                    <label for="">UF</label>
                    <select v-model="afastamento.uf" class="form-control">
                        <option :value="estado.sigla" v-for="estado in estados">{{ estado.sigla }}</option>
                    </select>
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
            afastamentos: [],
            motivos: [],
            cids: [],
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
            afastamento: {
                idProntuarioAfastamento: 0,
                motivoAfastamento: 0,
                prontuario: 0,
                cid: 0,
                obito: "NÃO",
                dataAfastamento: "",
                dataRetorno: "",
                medico: "",
                numero: 0,
                conselho: "",
                uf: "",
                observacao: ""
            }
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
        mudouAfastamento() {
            var inicial = new Date(this.afastamento.dataAfastamento);

            var dataProntuario = new Date(this.prontuario.dataIni);

            if(inicial < dataProntuario) {
                this.$alert('Data de afastamento deve ser maior ou igual a data inicial do prontuário', 'Ops!', 'error');
                this.afastamento.dataAfastamento = this.prontuario.dataIni;
            } else {
                if(this.afastamentos.length > 0) {
                    var dataUltimo = new Date(this.afastamentos[this.afastamentos.length - 1].dataRetorno);

                    if(inicial < dataUltimo) {
                        this.$alert('Data de afastamento deve ser maior ou igual a data de retorno do último afastamento', 'Ops!', 'error');
                        this.afastamento.dataAfastamento = this.afastamentos[this.afastamentos.length - 1].dataRetorno;
                    }
                }
            }

        },

        mudouRetorno() {
            if(this.afastamento.dataRetorno) {
                var afastamento = new Date(this.afastamento.dataAfastamento);
                var retorno = new Date(this.afastamento.dataRetorno);

                if(retorno < afastamento) {
                    this.afastamento.dataRetorno = null;
                     this.$alert('Data de retorno deve ser maior que a data de afastamento', 'Ops!', 'error');
                }

            }
        },

        dias(afastamento) {
            var inicial = new Date(afastamento.dataAfastamento);
            if(afastamento.dataRetorno) {
                var final = new Date(afastamento.dataRetorno)
            } else {
                var final = new Date;
            }

            var diff = Math.abs(inicial.getTime() - final.getTime());

            return Math.ceil(diff / (1000 * 60 * 60 * 24)) + ' dias';
        },
        incluir() {
            this.$refs.modalAfastamento.show();
        },
        salvar() {
			var that = this;

			axios.post('/prontuario-medico/afastamento', {
				prontuario: that.prontuario,
				afastamento: that.afastamento
			}).then(function(response) {
				axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
					that.afastamentos = response.data;
        		});
			});
		},
		editar(afastamento) {
            this.afastamento = afastamento;
            console.log(this.afastamento);
            this.$refs.modalAfastamento.show();
		}
    },
    mounted() {
        var that = this;
        axios.get('http://200.98.201.236:8080/ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/' + this.prontuario.idProntuario).then(function (response) {
			that.afastamentos = response.data;
        });

        axios.get('/tabelas/motivo-de-afastamento/list').then(function (response) {
            that.motivos = response.data;
        });

        axios.get('/tabelas/cid/list').then(function (response) {
            that.cids = response.data;
        });
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
