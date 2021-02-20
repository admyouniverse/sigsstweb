<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <th>ID SIGSST</th>
                        <th style="width:100px">ID Origem</th>
                        <th>Ambiente</th>
                        <th>Estabelecimento</th>
                        
                        <th style="width:450px">Descrição do Ambiente</th>
                        
                        <th style="width:110px">Ações</th>
                    </tr>
                    <tr style="cursor:pointer" @click="getFuncoes(ambiente)" v-for="ambiente in ambientes">
                        <td>{{ ambiente.idPcmsoAmbienteTrabalho }}</td>
                        <td>{{ ambiente.idOrigem }}</td>
                        <td>{{ ambiente.nomeAmbienteTrabalho }}</td>
                        <td>{{ camelize(ambiente.estabelecimento) }}</td>
                        
                        <td>{{ ambiente.observacao }}</td>
                        
                        <td>
                            <button class="btn btn-outline-primary" @click.stop="preencher(ambiente)"><i class="fa fa-eye"></i></button>
                            <button class="btn btn-outline-danger" @click.stop="remover(ambiente)"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-12">
            <button class="btn btn-success" @click="abrir()">Adicionar Ambiente</button>
        </div>
        <transition name="slide-fade">
            <div v-if="listarFuncoes" class="col-md-12 mt-4">
                <h4>Funções | <button class="btn btn-sm btn-danger" @click="listarFuncoes = false">Fechar</button></h4>
                <table class="table table-hover">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Cargo</th>
                        <th>Descricao RH</th>
                        <th>CBO</th>
                        <th>Masc.</th>
                        <th>Fem.</th>
                        <th>Ações</th>
                    </tr>
                    <tr v-for="funcao in funcoes">
                        <td>{{ funcao.idRH }}</td>
                        <td>{{ funcao.cargo }}</td>
                    </tr>
                </tbody>
                </table>

            </div>
        </transition>
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" :hide-header-close="true" :no-close-on-esc="true" title="Detalhes do Ambiente" @ok="salvar" @cancel="fechar()" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div v-if="!editar" class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Qual ambiente deseja inserir?</label>
                    <select @change="preencheAmbiente" v-model="selecionado" class="form-control">
                        <option :value="null">---- Selecione -----</option>
                        <option :value="ambiente" v-for="ambiente in listAmbientes">{{ ambiente.nomeAmbienteTrabalho }}</option>
                    </select>
                </div>
            </div>
        </div>
         <transition name="slide-fade">
        <div v-if="selecionado || editar" class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">ID</label>
                    <input v-model="ambiente.idPcmsoAmbienteTrabalho" type="text" class="form-control" disabled>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">ID Origem</label>
                    <input type="text" v-model="ambiente.idOrigem" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input type="text" v-model="ambiente.nomeAmbienteTrabalho" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Estabelecimento</label>
                    <select name="" v-model="ambiente.estabelecimento" class="form-control" id="" disabled>
                        <option value="SELECIONE"> </option>
                        <option value="TERCEIROS">TERCEIROS</option>
                        <option value="PRÓPRIO">PROPRIO</option>
                    </select>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Inscrição Terceiro</label>
                    <input type="text" v-model="ambiente.inscricaoTerceiro" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Subcódigo</label>
                    <input type="text" v-model="ambiente.subCodigo" class="form-control" disabled>
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Observação</label>
                    <textarea class="form-control" v-model="ambiente.observacao" cols="30" rows="3"></textarea>
                </div>
            </div>
        </div>
         </transition>
    </b-modal>

</div>
</template>

<script>
export default {
    props: ['pcmso', 'empresa'],
    data() {
        return {
            selecionado: null,
            ambientes: [],
            ambiente: {
                idPcmsoAmbienteTrabalho: 0
            },
            listAmbientes: [],
            carregando: true,
            mensagem: 'Carregando...',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            editar: false,
            listarFuncoes: false,
            funcoes: [],
        }
    },
    methods: {
        camelize(str) {
            if (str == 'PRÓPRIO') {
                return 'Próprio';
            } else if (str == 'TERCEIROS') {
                return 'Terceiros';
            } else if (str == 'SERVIÇOS_TERCEIROS') {
                return 'Serviços Terceiros';
                m
            }
        },
        preencheAmbiente: function() {
            if(this.selecionado) {
                this.ambiente = this.selecionado;
            console.log(this.ambiente);
            } else {
                this.ambiente = {};
            }
            
            this.ambiente.idPcmsoAmbienteTrabalho = 0;
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
            }, 5000);
        },

        abrir: function () {
            this.$refs.myModal.show();
        },
        
        fechar: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.ambiente = {
                 idPcmsoAmbienteTrabalho: 0
            };

            this.$refs.myModal.hide();
        },
        preencher(dados) {
            this.ambiente = Object.assign({}, dados);
            this.editar = true;
            this.$refs.myModal.show();
        },

        salvar: function (evt) {
            var that = this;
            evt.preventDefault();

            that.mensagem = 'Salvando ambiente...';
            that.carregando = true;
            axios.post('/pcmso/ambiente', {
                pcmso: that.pcmso,
                editar: that.editar,
                ambiente: that.ambiente
            }).then(function (response) {
                if (response.data != 'erro') {
                    // console.log(response.data);
                    that.ambientes = response.data;
                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Salvo com sucesso!');
                    });

                } else {
                    that.mensagem = 'Erro!';
                    that.carregando = false;
                }
            });

        },

        remover: function(dados) {
            this.carregar('Removendo ambiente...');
            var that = this;
            axios.get('/pcmso/ambiente/' + this.pcmso.idPcmso + '/remover/' + dados.idPcmsoAmbienteTrabalho).then(function(response) {
                that.ambientes = response.data;
                that.sucesso('Ambiente excluído');
            });
            
        },

        // FUNCOES

        getFuncoes: function(ambiente) {
            this.carregar('Redirecionando...');
            var that = this;

            window.location.href= "/pcmso/" + this.pcmso.idPcmso + "/ambiente/" + ambiente.idPcmsoAmbienteTrabalho;
            // axios.get('/pcmso/ambiente/' + ambiente.idPcmsoAmbienteTrabalho + '/funcoes').then(function(response) {
            //     console.log(response.data);
            //     that.funcoes = response.data;
            //     that.sucesso('Funções recuperadas...');
            //     that.listarFuncoes = true;
            // });
            
        }
    },

    mounted() {
        var that = this;
        
        axios.get('/empresas/ambientes-de-trabalho/list/' + this.empresa.inscricao).then(function(response) {
            that.listAmbientes = response.data;
            console.log(that.listAmbientes);
        });

   
        
        axios.get('/pcmso/ambientes/' + this.pcmso.idPcmso).then(function (response) {
            that.ambientes = response.data;
            that.sucesso('Ambientes carregados!');
        });
    }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
