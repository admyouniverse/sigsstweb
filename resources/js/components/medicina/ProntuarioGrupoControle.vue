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
            <h3 class="titulo">Lista de Grupos de Controle</h3>
        </div>
        <div class="col-md-12">
            <button class="btn btn-success btn-sm mb-2" @click="incluir" :disabled="gruposControle.length > 0 && !gruposControle[gruposControle.length - 1].dataRetorno"><i class="fas fa-plus"></i> Adicionar</button>
        </div>
        <div class="col-md-12">
            <table id="tabelaListagemEmpregados" class="table table-hover table-striped table-empregados">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Grupo de Controle</th>
                        <th>Dt. Inicial</th>
                        <th>Dt. Final</th>
                        <th>Dias</th>
                        <th>PDF</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
					<tr v-for="grupoControle in gruposControle">
						<td>{{grupoControle.idProntuarioGrupoControle}}</td>
						<td>{{grupoControle.grupoControle.nome }}</td>
						<td>{{grupoControle.dataIni | moment('DD/MM/YYYY')}}</td>
						<td>{{grupoControle.dataFim | moment('DD/MM/YYYY')}}</td>
						<td>{{dias(grupoControle)}}</td>
						<!-- <td>{{grupoControle.observacao}}</td> -->
						<td></td>
						<td><button class="btn btn-primary btn-sm" @click="editar(grupo)"><i class="fas fa-pencil-alt"></i></button></td>
					</tr>
                </tbody>
            </table>
        </div>
    </div>

    <b-modal size="lg" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" @ok="salvar" title="Grupo de Controle" ok-title="Salvar" cancel-title="Cancelar" ref="modalAfastamento" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" class="form-control" disabled v-model="grupoControle.idProntuarioGrupoControle">
                </div>
            </div>
            <div class="col-md-10">
                <div class="form-group">
                    <label for="">Grupo de Controle</label>
                    <select type="text" v-model="grupoControle.grupoControle" class="form-control">
                        <option :value="grupo" v-for="grupo in grupos">{{grupo.nome}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Data Inicial</label>
                    <input type="date" v-model="grupoControle.dataIni" v-on:blur="mudouAfastamento()" class="form-control">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Data Retorno</label>
                    <input type="date" v-model="grupoControle.dataFim" v-on:blur="mudouRetorno()" class="form-control">
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
            gruposControle: [],
            grupoControle: {
                idProntuarioGrupoControle: 0,
                grupoControle: {},
                prontuario: 0,
                dataIni: "",
                dataFim: "",
                caminhoPdf: ""
			},
			grupos: []
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
            var inicial = new Date(this.grupoControle.dataIni);

            var dataProntuario = new Date(this.prontuario.dataIni);

            if(inicial < dataProntuario) {
                this.$alert('Data de grupo deve ser maior ou igual a data inicial do prontuário', 'Ops!', 'error');
                this.grupoControle.dataIni = this.prontuario.dataIni;
            } else {
                if(this.gruposControle.length > 0) {
                    var dataUltimo = new Date(this.gruposControle[this.gruposControle.length - 1].dataFim);

                    if(inicial < dataUltimo) {
                        this.$alert('Data de grupo deve ser maior ou igual a data de retorno do último grupo', 'Ops!', 'error');
                        this.grupoControle.dataIni = this.gruposControle[this.gruposControle.length - 1].dataFim;
                    }
                }
            }

        },

        mudouRetorno() {
            if(this.grupoControle.dataFim) {
                var grupo = new Date(this.grupoControle.dataIni);
                var retorno = new Date(this.grupoControle.dataFim);

                if(retorno < grupo) {
                    this.grupoControle.dataFim = null;
                     this.$alert('Data final deve ser maior que a data inicial de grupo', 'Ops!', 'error');
                }

            }
        },

        dias(grupo) {
            var inicial = new Date(grupoControle.dataIni);
            if(grupoControle.dataFim) {
                var final = new Date(grupoControle.dataFim)
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

			axios.post('/prontuario-medico/grupo', {
				prontuario: that.prontuario,
				grupo: that.grupoControle
			}).then(function(response) {
				axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
					that.gruposControle = response.data;
        		});
			});
		},
		editar(grupo) {
            this.grupo = grupo;
            console.log(this.grupo);
            this.$refs.modalAfastamento.show();
		}
    },
    mounted() {
        var that = this;
        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/' + this.prontuario.idProntuario).then(function (response) {
            that.gruposControle = response.data;
            console.log('grupos', that.gruposControle);
        });

        axios.get('http://172.18.0.6:8080/ServicoSIGSSO/rest/grupos-controle').then(function (response) {
			that.grupos = response.data;
			console.log(that.grupos);
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
