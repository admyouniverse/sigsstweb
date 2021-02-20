<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="box box-default">
        <div class="box-body table-responsive">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="posto in postos" @click="abrirPosto(posto)">
                        <td>{{ posto.idPostoEntrega }}</td>
                        <td>{{ posto.descricao }}</td>
                        <td>
                            <button type="button" @click.stop="editar(posto)" class="btn btn-sm btn-outline-primary"><i class="fas fa-pencil-alt"></i>
                            </button>

                            <button type="button" @click.stop="remover(posto)" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="col-md-12 text-center">
                <br>
                <button class="btn btn-success" @click="abrir()"><i class="fa fa-plus"></i>
                    Adicionar</button>
            </div>
        </div>

        <b-modal ref="myModal" title="Posto de Entrega" @ok="salvar" ok-title="Salvar" cancel-title="Cancelar">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Descrição</label>
                        <input type="text" v-model="posto.descricao" class="form-control">
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</section>
</template>

<script>
export default {
    props: ['empresa'],
    data() {
        return {
            carregando: true,
            mensagem: '',
            html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            postos: [],
            posto: {

            }
        }
    },
    computed: {
        parametro() {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            return params.get("acao");
        }
    },
    methods: {
        abrir() {
            this.posto.idPostoEntrega = 0;
            this.posto.empresa = this.empresa.idEmpresa;
            this.$refs.myModal.show();
        },
        abrirPosto(posto) {
            if(this.parametro == 'entrega') {
                window.location.href = "/posto-entrega/" + posto.idPostoEntrega + "?acao=entrega";
            } else {
                window.location.href = "/posto-entrega/" + posto.idPostoEntrega
            }
            
        },
        salvar() {
            var that = this;
            that.mensagem = 'Salvando...';
            that.carregando = true;
            this.posto.empresa = this.empresa.idEmpresa;
            axios.post('/posto-entrega', {
                posto: that.posto
            }).then(function (response) {
                if (response.data.status == "true") {
                    axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                        that.postos = response.data;
                        that.carregando = false;
                    });
                }
            });
        },

        editar(posto) {
            this.posto = posto;
            this.$refs.myModal.show();
        },

        remover(posto) {
            var that = this;
            axios.get('/posto-entrega/excluir/' + posto.idPostoEntrega).then(function (response) {
                if (response.data.status == "true") {
                    axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
                        that.postos = response.data;
                        that.carregando = false;
                    });
                }
            });
        }
    },
    mounted() {
        var that = this;
        axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/' + this.empresa.idEmpresa).then(function (response) {
            that.postos = response.data;
            that.carregando = false;
        });

    }
}
</script>

<style lang="scss" scoped>
tr {
    cursor: pointer;
}
</style>
