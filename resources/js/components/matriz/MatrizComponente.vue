<template>
<div class="container">
    <section class="content-header">
        <h1>
            Matrizes de Risco
            <small>Listagem</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i> Início</a></li>
            <li><a href="#">Matrizes de Risco</a></li>
        </ol>
    </section>

    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
        <div class="row" style="margin-bottom: 15px; margin-top: 10px">
            <div class="col-md-6">
                <button @click="abrir()" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Incluir</button>
            </div>
        </div>
    </section>

    <div v-if="montou" class="box box-info">
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="tabelaListagem">
                    <thead>
                    <tr>
                        <th >
                            Código
                           
                        </th>
                        <th >
                            Descrição
                            
                        </th>
						<th>
							Eixo X
						</th>
						<th>
							Eixo Y
						</th>
						<th>

						</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr @click="ir(matriz)" style="cursor: pointer" v-for="matriz in matrizes">
                        <td style="vertical-align: middle" width="80px"><b>{{ matriz.idMatrizRisco }}</b></td>
                        <td style="text-align:justify">{{ matriz.descricao }}</td>
						<td>{{matriz.eixoX.descricao}}</td>
						<td>{{matriz.eixoY.descricao}}</td>
						<td><button class="btn btn-primary btn-sm" @click.stop="editar(matriz)"><i class="fas fa-pencil-alt"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>


	 <b-modal size="md" centered :no-close-on-backdrop="true" @ok="salvar" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Matriz de Risco" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">ID</label>
                    <input type="text" disabled v-model="matriz.idMatrizRisco" class="form-control">
                </div>
            </div>

            <div class="col-md-9">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <input type="text" v-model="matriz.descricao" class="form-control">
                </div>
            </div>
			
			<div class="col-md-4"> 
				<div class="form-group">
					<label for="">Eixo</label>
					<select class="form-control" v-model="matriz.eixoX" id="">
						<option :value="eixo" v-for="eixo in eixosX">{{eixo.descricao}}</option>
					</select>
				</div>
			</div>

			<div class="col-md-4"> 
				<div class="form-group">
					<label for="">Eixo</label>
					<select class="form-control" v-model="matriz.eixoY" id="">
						<option :value="eixo" v-for="eixo in eixosY">{{eixo.descricao}}</option>
					</select>
				</div>
			</div>

			<div class="col-md-4"> 
				<div class="form-group">
					<label for="">Criterio</label>
					<select class="form-control" v-model="matriz.criterio" id="">
						<option value="SOMA">SOMA</option>
						<option value="MULTIPLICACAO">MULTIPLICAÇÃO</option>
					</select>
				</div>
			</div>

        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            idTabela: '#tabelaListagem',
            carregando: true,
            mensagem: 'Carregando itens cadastrados',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
			matrizes: [],
			termo: '',
			selecionado: 'codigo',
			montou: false,
			coluna: '',
			eixosX: [],
			eixosY: [],
			matriz: {
				idMatrizRisco: 0,
				descricao: '',
				eixoX: {},
				eixoY: {},
				criterio: 'SOMA',
			}
        }
    },

    methods: {
        voltar() {

		},
		
		pesquisar() {

		},

		salvar() {	
			var that = this;
			axios.post('/matriz', {
				matriz: that.matriz,
			}).then(function(response) {
                that.matriz = response.data;
                that.$root.$emit('montou', [that.idTabela]);
			});
		},	

		fechar() {
             this.$root.$emit('montou', [this.idTabela]);
        },
        
		editar(matriz) {
			this.matriz = matriz;
            this.$refs.myModal.show();
            $(this.idTabela).DataTable().destroy();
        },
        
		abrir() {
			this.matriz = {
				idMatrizRisco: 0,
				descricao: '',
				eixoX: {},
				eixoY: {}
            }
            $(this.idTabela).DataTable().destroy();
            this.$refs.myModal.show();
            
		},

		ir(matriz){
			window.location.href = '/matriz/m/' + matriz.idMatrizRisco;
		}
    },

    mounted() {
        var that = this;
        axios.get('/matriz/list').then(function (response) {
            that.matrizes = response.data;
            that.montou = true;
            setTimeout(function () {
                that.carregando = false;
                 that.$root.$emit('montou', [that.idTabela]);
            }, 200);
		});

		 axios.get('/eixo-y/list').then(function (response) {
			that.eixosY = response.data;
		 });

		 axios.get('/eixo-x/list').then(function (response) {
			that.eixosX = response.data;
		 });
		

    }
}
</script>

<style>

</style>
