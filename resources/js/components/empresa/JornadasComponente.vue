<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <button id="modal" type="button" class="btn btn-success btn-sm" @click="abrir"><i class="fa fa-plus"></i> Incluir</button>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.jornadas" name="jornadas.xls">
                <i class="far fa-save"></i> Exportar
            </download-excel>
        </div>

    </div>
    <div v-if="montou" class="box box-info">
        
        <!-- /.box-header -->
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped" id="tabelaListagem">
                <thead>
                    <tr>
                        <th>
                            Código
                        </th>
                        <th>Descrição</th>
                        <th>Tipo</th>
                        <th>Horário</th>
                        <th>Intervalo</th>
                        <th class="text-center no-sort">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="jornada in jornadas">
                        <td style="vertical-align: middle" width="100px"><b>{{ jornada.idJornadaTrabalho }}</b></td>
                        <td>{{ jornada.descricao }}</td>
                        <td style="text-align:justify">{{ jornada.tipoJornada }}</td>
                        <td>{{ jornada.entrada }} - {{ jornada.saida }}</td>
                        <td>{{ jornada.intervaloIni }} - {{ jornada.intervaloFim }}</td>
                        <td width="100px" style="vertical-align: middle" class="text-center">
                            <button type="button" @click="remover(jornada)" class="btn btn-sm btn-outline-danger"><i class="fa fa-trash"></i></button>
                            <button type="button" @click="preencher(jornada)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- /.box-body -->
      
    </div>

    <b-modal size="xl" centered :no-close-on-backdrop="true" @ok="ok" :hide-header-close="true" :no-close-on-esc="true" @cancel="fechar()" title="Detalhes da Jornada de Trabalho" ok-title="Salvar" cancel-title="Cancelar" ref="myModal" id="modal1">
        <div class="row">
            <div class="col-md-2">
                <div class="form-group" v-bind:class="{'has-error':erro}">
                    <label for="">Id</label>
                    <input type="text" v-model="jornada.idJornadaTrabalho" disabled class="form-control" name="jornada">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="">Descrição</label>
                    <input type="" class="form-control" v-model="jornada.descricao" name="">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Tipo</label>
                    <select name="" class="form-control" v-model="jornada.tipoJornada">
                        <option value="SELECIONE">Selecione</option>
                        <option value="NORMAL">Normal</option>
                        <option value="ESCALA_12X36">Escala 12x36</option>
                        <option value="ESCALA_24X72">Escala 24x72</option>
                        <option value="TURNO_REVEZAMENTO">Turno Revezamento</option>
                        <option value="OUTROS">Outros</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Entrada</label>
                    <input type="text" v-mask="'##:##'" class="form-control" v-model="jornada.entrada">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Saída</label>
                    <input type="text" v-mask="'##:##'" class="form-control" v-model="jornada.saida">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Início do Intervalo</label>
                    <input type="text" v-mask="'##:##'" class="form-control" v-model="jornada.intervaloIni">
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label for="">Final do Intervalo</label>
                    <input type="text" v-mask="'##:##'" class="form-control" v-model="jornada.intervaloFim">
                </div>
            </div>

        </div>
    </b-modal>

    <b-modal size="sm" :no-close-on-backdrop="true" centered :hide-header="true" :hide-footer="true" :no-close-on-esc="true" ref="modalCerteza" id="modalCerteza">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3>Tem certeza que deseja excluir esta jornada?</h3>
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
    data() {
        return {
            jornadas: '',
            jornada: {
                idJornadaTrabalho: 0,
                tipoJornada: 'SELECIONE',
                descricao: '',
                entrada: '',
                saida: '',
                intervaloIni: '',
                intervaloFim: ''

            },
            descricao: '',
            codigo: '',
            cbos: [],
            descricaorh: '',
            origem: '',
            idcbo: '',
            id: '',
            erro: false,
            editar: false,
            carregando: true,
            mensagem: 'Carregando funcões cadastrados',
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
            }, 1000);
        },

        salvar: function () {
            this.carregar('Salvando nova função...');
            var that = this;
            axios.post('/empresas/jornadas-de-trabalho', {
                jornada: that.jornada,
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'existente') {
                    that.codigo = '';
                    that.erro = true;
                    that.alerta('Código já existente, verifique!')
                } else {
                    that.jornadas = response.data;
                    that.jornada = {
                        idJornadaTrabalho: 0,
                        tipoJornada: 'SELECIONE',
                        descricao: '',
                        entrada: '',
                        saida: '',
                        intervaloIni: '',
                        intervaloFim: ''
                    };
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Salvo com sucesso!');
                    });

                    that.sucesso('Salvo com sucesso!');
                }

            });
        },

        atualizar: function () {
            var that = this;
            axios.post('/empresas/jornadas-de-trabalho/update/' + this.jornada.idJornadaTrabalho, {
                jornada: that.jornada
            }).then(function (response) {
                //console.log(response.data);
                if (response.data == 'erro') {
                    that.codigo = '';
                    that.erro = true;
                } else {
                    that.jornadas = response.data;
                    that.jornada = {
                        idJornadaTrabalho: 0,
                        tipoJornada: 'SELECIONE',
                        descricao: '',
                        entrada: '',
                        saida: '',
                        intervaloIni: '',
                        intervaloFim: ''
                    };
                    that.erro = false;

                    that.$nextTick(() => {
                        that.fechar();
                        that.sucesso('Atualizado com sucesso!');
                    });
                }

            });
        },

        abrir: function () {
            $(this.idTabela).DataTable().destroy();

            this.$refs.myModal.show();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.jornada = dados;
            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        },

        remover: function (dados) {

            this.deletar = dados.idJornadaTrabalho;
            this.$refs.modalCerteza.show();
            $(this.idTabela).DataTable().destroy();

        },

        ok: function (evt) {
            evt.preventDefault();
            if (this.editar) {
                this.atualizar();
            } else {
                this.salvar();
            }
        },

        fechar: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.editar = false;
            this.descricao = '';
            this.codigo = '';
            this.id = '';

            this.$refs.myModal.hide();
        },

        fecharCerteza: function () {
            this.$root.$emit('montou', [this.idTabela]);
            this.$refs.modalCerteza.hide();
        },

        certeza: function () {
            this.carregar('Removendo função...');
            var that = this;
            axios.get('/empresas/jornadas-de-trabalho/remover/' + this.deletar).then(function (response) {

                if (response.data != 'erro') {

                    that.jornadas = response.data;

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });

                } else {

                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.alerta('Erro ao excluir!');
                    });
                }

            });
        }
    },
    mounted() {
        var that = this;
        axios.get('/empresas/jornadas-de-trabalho/list').then(function (response) {
            that.jornadas = response.data;
            that.montou = true;
            setTimeout(function () {
                that.$root.$emit('montou', [that.idTabela]);
                that.carregando = false;
            }, 200);

        });

        axios.get('/tabelas/cbo/list').then(function (response) {
            that.cbos = response.data;
        });

        $('#myModal').on('hidden.bs.modal', function (e) {
            that.descricao = '';
            that.codigo = '';
            that.editar = false;
            that.id = '';
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
