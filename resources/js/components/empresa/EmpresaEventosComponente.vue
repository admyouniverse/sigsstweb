<template>
    <section class="content">
        <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>

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
                            <th>Tipo</th>
                            <th>Data Limite</th>
                            <th class="text-center no-sort">Ações</th>
                        </tr>
</thead>
<tbody>
                        <tr v-for="evento in eventos">
                            <td style="vertical-align: middle" width="80px"><b>{{ evento.idEmpresaEvento }}</b></td>
                            <td style="text-align:justify" v-if="evento.evento">{{ evento.evento.descricao }}</td>
                            <td>{{ evento.tipoEvento }}</td>
                            <td>{{ evento.dataLimite | moment("DD/MM/Y")}}</td>
                            <td width="100px" style="vertical-align: middle" class="text-center">
                                <button type="button" @click="remover(evento)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i>
                                </button>
                                <button type="button" @click="preencher(evento)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
                <div class="col-md-12 no-padding text-center">
                    <button @click="novo()" type="button" class="btn btn-success"><i class="fa fa-plus"></i> Adicionar</button>
                </div>
            </div>
        </div>
        <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes do evento" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
            <div class="row">
                <div class="col-md-2">
                    <div class="form-group" v-bind:class="{'has-error':erro}">
                        <label for="">Código</label>
                        <input type="text" v-model="evento.idEmpresaEvento" disabled class="form-control" name="evento">
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="form-group">
                        <label for="">Evento</label>
                        <select class="form-control" v-model="evento.evento" >
                            <option :value="eventodb" v-if="(!eventoEmEventos(eventodb))|| eventodb.idEvento === atual" v-for="eventodb in eventosdb">{{ eventodb.idEvento }} - {{ eventodb.descricao }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="">Tipo de Evento</label>
                        <select name="" v-model="evento.tipoEvento" id="" class="form-control">
                            <option value="PCMSO">PCMSO</option>
                            <option value="PPRA">PPRA</option>
                            <option value="LTCAT">LTCAT</option>
                            <option value="OUTROS">OUTROS</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">Data Limite</label>
                        <input type="date" class="form-control" v-model="evento.dataLimite">
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <label for="">Observacao</label> 
                    <input type="text" class="form-control" v-model="evento.observacao">
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3>Tem certeza que deseja excluir este evento?</h3>
                </div>
            </div>
            <div class="row" style="margin-top: 20px">
                <div class="col-md-6 text-center">
                    <button type="button" class="btn btn-block btn-secondary btn-lg" @click="fecharCerteza"><i class="fa fa-close"></i> Não</button>
                </div>
                <div class="col-md-6 text-center">
                    <button type="button" class="btn btn-block btn-danger btn-lg" @click="certeza"><i class="fa fa-check"></i> Sim</button>
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
            eventos: '',
            evento: {
                idEmpresaEvento: 0,
                evento:{},
            },
            eventosdb: [],
            atual: '',
            descricao: '',
            codigo: '',
            id: '',
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
            idTabela: '#tabelaListagem'
        }
    },
    methods: {
        carregar: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
            this.carregando = true;
        },

        sucesso: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 800);
        },

        alerta: function(msg) {
            this.mensagem = msg;
            this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
            var that = this;
            setTimeout(function() {
                that.carregando = false;
            }, 1000);
        },

        novo: function(){
            this.evento = {
                idEmpresaEvento: 0,
                evento:{},
                empresa: this.empresa
            };

            
            this.abrir();

        },
        salvar: function() {

            this.carregar('Salvando novo evento...');
            var that = this;
            if (this.evento) {
                axios.post('/empresas/eventos/empresa/', {
                   evento: that.evento,
                }).then(function(response) {
                    
                    if (response.data == 'erro') {
                        // that.codigo = '';
                        // that.erro = true;
                        that.alerta('Erro ao salvar!')
                    } else {
                        that.eventos = response.data;
                        
                        

                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Salvo com sucesso!');
                        });
                    }

                });
            } else {
                that.alerta('Preencha todos os campos')
            }

        },

         eventoEmEventos: function (event) {
                for (var i = 0; i < this.eventos.length; i++) {
                    
                    if (this.eventos[i].evento && this.eventos[i].evento.idEvento === event.idEvento) {
                        // 
                        // 
                        return true;
                    }
                }

                return false;
            },
        atualizar: function() {

            var that = this;
            this.carregar('Atualizando novo evento...');
            if (this.descricao != '' || this.codigo != '') {
                axios.post('/empresas/eventos/update/' + this.id, {
                    evento: that.evento,
                }).then(function(response) {
                    
                    if (response.data == 'existente') {
                        that.codigo = '';
                        that.erro = true;
                        that.alerta('Código evento já existente, verifique!')
                    } else {
                        that.eventos = response.data;
                        that.descricao = '';
                        that.codigo = '';
                        that.erro = false;


                        that.$nextTick(() => {
                            that.fechar();
                            that.sucesso('Atualizado com sucesso!');
                        });
                    }
                });
            } else {
                that.alerta('Preencha todos os campos')
            }

        },

        abrir: function() {
$(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        preencher: function(dados) {

            this.carregar('Carregando dados...');

            this.evento = Object.assign({}, dados);
            this.atual = dados.evento.idEvento;
            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function(dados) {

            this.deletar = dados.idEmpresaEvento;
            this.$refs.modalCerteza.show();
$(this.idTabela).DataTable().destroy();

        },

        ok: function(evt) {
            this.evento.empresa = this.empresa; 
            evt.preventDefault();
            if (this.editar) {
                this.salvar();
            } else {
                this.salvar();
            }
        },

        fechar: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;

            this.evento = {
                evento:{},
            };
            this.$refs.myModal.hide();
        },

        fecharCerteza: function() {
this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function() {
            this.carregar('Removendo evento...');
            var that = this;
            axios.get('/empresas/eventos/remover/empresa/' + this.deletar).then(function(response) {

                if (response.data != 'erro') {

                   axios.get('/empresas/eventos/list/' + that.empresa.idEmpresa ).then(function(response) {
                    that.eventos = response.data;
                    
                that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });
                        });

                   

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        },

        ordenar: function(coluna) {
            if (this.coluna == coluna) {
                this.ordem = !this.ordem;
            } else {
                this.ordem = true;
            }

            this.coluna = coluna;

            if (coluna == 'codigo') {

                if (this.ordem == true) {

                    this.eventos.sort(function(a, b) {

                        if (a.idEvento > b.idEvento) {
                            return 1;
                        }

                        if (a.idEvento < b.idEvento) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function(a, b) {

                        if (a.idEvento > b.idEvento) {
                            return -1;
                        }

                        if (a.idEvento < b.idEvento) {
                            return 1;
                        }

                        return 0;

                    });
                }

            } else if (coluna == 'descricao') {
                if (this.ordem == true) {

                    this.eventos.sort(function(a, b) {

                        if (a.descricao > b.descricao) {
                            return 1;
                        }

                        if (a.descricao < b.descricao) {
                            return -1;
                        }

                        return 0;

                    });

                } else {

                    this.eventos.sort(function(a, b) {

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

        pesquisar: function() {
            if (this.termo != '' && this.termo != ' ') {
                this.carregar('Realizando a busca...');
                
                

                var that = this;

                axios.get('/empresas/eventos/buscar/' + that.selecionado + "/" + that.termo).then(function(response) {

                    if (response.data.length > 0) {

                        that.eventos = response.data;
                        that.sucesso('Encontramos ' + response.data.length + ' resultado(s).');
                        that.busca = true;

                    } else {

                        that.alerta('Nenhum resultado nesta busca');
                        that.busca = false;

                    }

                });
            }

        },

        voltar: function() {
            var that = this;
            this.carregar('Recuperando todos os itens...');
            axios.get('/empresas/eventos/list').then(function(response) {
                that.eventos = response.data;
                that.sucesso('Todas os itens recuperados com sucesso!');
                that.busca = false;
                that.termo = '';
            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/eventos/list/').then(function(response) {
            that.eventosdb = response.data;
        });

        axios.get('/empresas/eventos/list/' + that.empresa.idEmpresa ).then(function(response) {
            that.eventos = response.data;
            that.montou = true;
            setTimeout(function() {
that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

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

