<template>
<section class="content">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="row" style="margin-bottom: 15px; margin-top: 10px">
        <div class="col-md-6">
            <a href="/pessoas/adicionar" class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Incluir</a>
            <download-excel v-if="montou" class="btn btn-sm btn-secondary" :data="this.pessoas" name="pessoas.xls">
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
                        <th>
                            Nome
                        </th>
                       
                        <th>
                            CPF
                        </th>
                        <th>
                            Nascimento
                        </th>
                         <th>
                            Cidade
                        </th>
                        <th>
                            Digital
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="abrir(pessoa)" style="cursor: pointer" v-for="pessoa in pessoas">
                        <td style="vertical-align: middle" width="80px"><b>{{ pessoa.idPessoa }}</b></td>
                        <td style="text-align:justify">{{ pessoa.nomePessoa }}</td>
                        <td style="text-align:justify">{{ pessoa.cpf }}</td>
                        <td style="text-align:justify">{{pessoa.dataNascimento | moment('DD/MM/YYYY')}}</td>
                        <td style="text-align:justify"><span v-if="pessoa.cidadeNatal">{{ pessoa.cidadeNatal.nomeCidade }}</span></td>
                        <td style="text-align:justify">
                            <span v-if="pessoa.biometriaTemplate">Sim</span>
                            <span v-if="!pessoa.biometriaTemplate">Não</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            pessoas: [],
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

        abrir: function (pessoa) {
            this.carregar('Aguarde...');
            console.log(pessoa);
            window.location.href = "/pessoas/detalhes/" + pessoa.idPessoa;
            // this.$refs.myModal.show();

        },

        preencher: function (dados) {

            this.carregar('Carregando dados...');

            this.descricao = dados.descricao;
            this.codigo = dados.codigoCid;
            this.id = dados.idCid;

            this.editar = true;

            this.abrir();
            this.sucesso('Dados carregados!');
        }
    },
    mounted() {
        var that = this;
        axios.get('/pessoas/list').then(function (response) {
            that.pessoas = response.data;
            that.montou = true;
            setTimeout(function () {
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
