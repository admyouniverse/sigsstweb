<template>
<div>
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
     <div class="row mt-2">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">O que?</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" readonly v-model="nomeEvento" placeholder="Evento">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="modalEvento(0)"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Complemento</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Pessoa Responsável</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="nomePessoa" @keydown="limparPessoa" placeholder="Pessoa">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" @click="modalPessoas" type="button"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-2">
            <div class="form-group">
                <label for="">Quando?</label>
                <input type="date" v-model="data" class="form-control">
            </div>
        </div>

        <div class="col-md-2" :class="{'col-md-4': efetivo == 'SIM'}">
            <div class="form-group">
                <label for="">Efetivo</label>
                <select v-model="efetivo" class="form-control">
                    <option value="SIM">Sim</option>
                    <option value="NÃO">Não</option>
                </select>
            </div>
        </div>

        <div v-if="efetivo == 'SIM' " class="col-md-3">
            <div class="form-group">
                <label for="">Data Efetivo</label>
                <input type="date" v-model="dataEfetivo" class="form-control">
            </div>
        </div>

        <div v-if="efetivo == 'SIM' " class="col-md-9">
            <div class="form-group">
                <label for="">Observacao</label>
                <input type="text" class="form-control" v-model="observacoes">
            </div>
        </div>

        <div v-if="efetivo == 'SIM' " class="col-md-6">
            <button @click="incluir" class="btn btn-success">
                Salvar
            </button>
        </div>

        <div class="col-md-2" v-if="efetivo == 'NÃO'">
            <button class="btn btn-success btn-block mt-4" @click="incluir"><i class="fa fa-check"></i></button>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-12">
            <table class="table">
                <tbody>
                    <tr>
                        <th>O que?</th>
                        <th>Quem?</th>
                        <th>Quando?</th>
                        <th style="width: 105px">Efetivo</th>
                        <th class="text-center">Observação</th>
                        <th class="text-center">Evidências</th>
                        <th></th>
                    </tr>
                    <tr v-for="(acao, key) in acoes">
                        <td v-if="acao.evento"> <strong>{{ key+1 }}</strong>) {{ acao.evento.descricao }} {{acao.complemento}}</td>
                        <td v-if="!acao.evento"> - </td>
                        <td v-if="acao.pessoa">{{ acao.pessoa.nomePessoa }}</td>
                        <td v-if="!acao.pessoa">{{ acao.descricaoFuncionario }}</td>
                        <td>{{ acao.data | moment('DD/MM/YYYY') }}</td>
                        <td v-if="acao.efetivada == 'SIM'" style="background-color: green; color: #fff">{{ acao.dataEfetivacao | moment('DD/MM/YYYY') }}</td>
                        <td v-if="acao.efetivada == 'NÃO'" :style="verificaData(acao.data)"> Não</td>
                        <td class="text-center"><button class="btn btn-sm btn-outline-success" @click="verObservacao(acao)"><i class="fa fa-eye"></i></button></td>
                        <td class="text-center">
                            <a><img src="/img/pdf.png" width="21px"></a>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline-primary" @click="editar(acao)"><i class="fas fa-pencil-alt"></i></button>
                            <button class="btn btn-sm btn-outline-danger" @click="remover(acao)"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
     <div class="row">
         <div class="col-md-3"></div>
        <div class="col-md-6 legenda">
            <div class="square green"></div> <span>Efetivada</span>

            <div class="square yellow"></div> <span>Aberto no Período</span>

            <div class="square red"></div> <span>Aberto fora do Período</span>
        </div>
    </div>
    <b-modal size="lg" centered :hide-footer="true" title="Eventos" ref="modalEventos" id="modal1">
        <table class="table-striped table-hover table">
            <tbody v-if="eventosBase.length > 0">
                <tr @click="selecionarEvento(evento)" style="cursor: pointer" v-for="evento in eventosBase">
                    <td>{{ evento.descricao }}</td>
                </tr>
            </tbody>
        </table>

        <div class="col-md-12">
            <div class="form-group">
                <label for="">Não encontrou? Adicione.</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="nomeNovo" placeholder="Nome do Evento">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" @click="incluirEvento" type="button"><i class="fa fa-check"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>

    <b-modal size="lg" centered :hide-footer="true" title="Pessoas" ref="modalPessoas" id="modal1">
        <table class="table-striped table-hover table">
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Genero</th>
                </tr>
                <tr style="cursor: pointer" @click="selecionaPessoa(pessoa)" v-for="pessoa in pessoas">
                    <td>{{ pessoa.nomePessoa }}</td>
                    <td>{{ pessoa.sexo }}</td>
                </tr>
            </tbody>
        </table>
    </b-modal>


    <b-modal size="lg" centered :hide-footer="true" title="Mais detalhes" ref="modalObservacao" id="modal1">
        <div class="form-group">    
            <label for="">Observações</label>
        <textarea type="text" v-model="observacao" class="form-control" readonly></textarea>
        </div>
    </b-modal>

    <b-modal size="lg"  @ok="atualizar" @cancel="fechar" ok-title="Salvar" cancel-title="Cancelar" centered title="Editar Plano de Ação" ref="modalEditar" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <label for="">Seq</label>
                    <input type="text" disabled v-model="acao.idPlanoAcao" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Evento</label>
                    <input type="text" disabled v-model="acao.evento.descricao" class="form-control">
                </div>
            </div>
             <div class="col-md-4">
                <div class="form-group">
                    <label for="">Complemento</label>
                    <input type="text" class="form-control" v-model="acao.complemento">
                </div>
            </div>

           
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Data Limite</label>
                    <input type="date" v-model="acao.data" class="form-control">
                </div>
            </div>
             <div class="col-md-5">
                <div class="form-group">
                    <label for="">Pessoa</label>
                     <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="nomePessoaEditar" @keydown="limparPessoaEditar" placeholder="Pessoa">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" @click="modalPessoas" type="button"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Efetivo</label>   
                    <select v-model="acao.efetivada" class="form-control">
                        <option value="SIM">Sim</option>
                        <option value="NÃO">Não</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4" v-if="acao.efetivada == 'SIM'">
                <div class="form-group">
                    <label for="">Data Efetivação</label>
                    <input type="date" class="form-control" v-model="acao.dataEfetivacao">
                </div>
            </div>
            <div v-if="acao.efetivada == 'SIM'" class="col-md-8">
                <div class="form-group">
                    <label for="">Como foi efetivado</label>
                    <input type="text" class="form-control" v-model="acao.obs">
                </div>
            </div>
        </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['pcmso'],
    data() {
        return {
            eventosEmpresa: [],
            eventoEmpresaSelecionado: {},
            nomeEvento: '',
            tabIndex: 1,
            eventosBase: [],
            carregando: false,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            nomeNovo: '',
            pessoas: [],
            nomePessoa: '',
            nomePessoaEditar: '',
            pessoaSelecionada: {},
            pessoaSelecionadaEditar: {},
            acoes: [],
            eventoSelecionado: {},
            efetivo: 'NÃO',
            data: '',
            dataEfetivo: '',
            observacoes: '',
            acao: {
                evento: {},
                pessoa: {}
            },
            observacao: '',
        }
    },

    methods: {
        fechar() {
            this.pessoaSelecionada = {};
            this.nomePessoa = '';
            
            this.pessoaSelecionadaEditar = {};
            this.nomePessoaEditar = {};

        },

        modalEvento(index) {
            var that = this;
            this.tabIndex = index;
            axios.get('/empresas/eventos/list/').then(function (response) {
                that.eventosBase = response.data;
                that.$refs.modalEventos.show();
            });
        },

        modalPessoas() {
            var that = this;

               axios.get('/pessoas/list/empregado/' + that.pcmso.empresasContrato[0].empresa.idEmpresa).then(function (response) {
                     that.pessoas = response.data;
                     that.$refs.modalPessoas.show();
              });


        },


        verObservacao(acao) {
           
           this.observacao = acao.obs;
   this.$refs.modalObservacao.show();

        },

        atualizar() {
            var that = this;
            this.carregar('Salvando...');
                axios.post('/pcmso/' + this.pcmso.idPcmso + '/plano-acao', {
                evento: that.acao.evento.idEvento,
                pessoaSelecionada: that.pessoaSelecionadaEditar,
                descricaoFuncionario: that.nomePessoaEditar,
                data: that.acao.data,
                efetivada: that.acao.efetivada,
                dataEfetivo: that.acao.dataEfetivacao,
                observacoes: that.acao.obs,
                idPlanoAcao: that.acao.idPlanoAcao,
                complemento: that.acao.complemento
            }).then(function (response) {
                that.acoes = response.data;
                that.nomeEvento = '';
                that.eventoSelecionado = {};
                that.nomePessoa = '';
                that.pessoaSelecionada = {};
                that.data = '';
                that.efetivo = 'NÃO';
                that.dataEfetivo = '';
                that.carregando = false;
                that.$alert('Plano atualizado!', 'Sucesso!', 'success');
            });

        },
        
        editar(acao) {
            this.acao = acao;
            this.nomePessoaEditar = this.acao.descricaoFuncionario;
             this.pessoaSelecionada =  this.acao.pessoa;
            this.$refs.modalEditar.show();

            // console.log(this.acao.evento.descricao);
        },

        selecionarEvento(evento) {
            this.eventoSelecionado = evento;

            this.nomeEvento = this.eventoSelecionado.descricao;
            this.$refs.modalEventos.hide();
        },

        verificaData(data) {
            var dt = new Date(data);
            var hoje = new Date();
            
            if(dt >= hoje) {
                return 'background-color: yellow';
            } else {
                return 'background-color: red';
            }
        },

        incluirEvento() {
            var that = this;

            this.carregar('Incluindo evento...');
            axios.post('/empresas/eventos', {
                descricao: that.nomeNovo,
                codigo: 0,
            }).then(function (response) {
                that.eventosBase = response.data;
                that.nomeNovo = '';
                that.carregando = false;
                that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
            });

        },

        carregar: function (msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        selecionaPessoa(pessoa) {
            this.pessoaSelecionada = pessoa;
            this.nomePessoa = this.pessoaSelecionada.nomePessoa;

            this.pessoaSelecionadaEditar = pessoa;
            this.nomePessoaEditar = this.pessoaSelecionadaEditar.nomePessoa;

            // console.log(this.nomePessoa);
            this.$refs.modalPessoas.hide();
        },

        limparPessoa() {
            // console.log(this.pessoaSelecionada);
            this.pessoaSelecionada = {};
        },
        limparPessoaEditar() {
            // console.log(this.pessoaSelecionada);
            this.pessoaSelecionadaEditar = {};
        },

        incluir() {
            this.carregar('Armazenando...');

            var that = this;

            axios.post('/pcmso/' + this.pcmso.idPcmso + '/plano-acao', {
                evento: that.eventoSelecionado.idEvento,
                pessoaSelecionada: that.pessoaSelecionada,
                descricaoFuncionario: that.nomePessoa,
                data: that.data,
                efetivada: that.efetivo,
                dataEfetivo: that.dataEfetivo,
                observacoes: that.observacoes,
                idPlanoAcao: 0,
                complemento: that.acao.complemento

            }).then(function (response) {
                that.acoes = response.data;
                that.nomeEvento = '';
                that.eventoSelecionado = {};
                that.nomePessoa = '';
                that.pessoaSelecionada = {};
                that.data = '';
                that.efetivo = 'NÃO';
                that.dataEfetivo = '';
                that.carregando = false;
                that.$alert('Plano inserido!', 'Sucesso!', 'success');
            });

        },

        remover(acao) {
            var that = this;
            this.carregar('Removendo...');
            axios.get('/pcmso/' + this.pcmso.idPcmso + '/plano-acao/remover/' + acao.idPlanoAcao).then(function (response) {
                that.acoes = response.data;
                that.carregando = false;
                that.$alert('Plano removido!', 'Sucesso!', 'success');
            })
        },

    },

    mounted() {
        var that = this;

        // console.log(this.pcmso);

        axios.get('/pcmso/' + this.pcmso.idPcmso + '/plano-acao/').then(function (response) {
            that.acoes = response.data;
        })
    }
}
</script>

<style lang="scss" scoped>
.square {
    float: left;
    height: 20px;
    width: 20px;
    margin-right: 5px;

    &.green {
        background-color: green;
    }

    &.red {
        background-color: red;
    }

    &.yellow {
        background-color: yellow;
    }

}

.legenda {
    span {
        float: left;
        margin-right: 10px;
    }

    margin-top: 5px;
}
</style>
