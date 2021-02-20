<template>
    <b-card class="sig" no-body>
        <b-tabs card>
            <b-tab title="EPI na Empresa" active>
                <b-card-text>
                  
                </b-card-text>
            </b-tab>

            <b-tab title="Matriz de EPI">
                <b-card-text>
                     <empresa-ambiente-epi :empresa="empresa"></empresa-ambiente-epi>
                </b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>
</template>
<script>
    export default {
        props: ['empresa'],
        data() {
            return {
                epis: [],
                epi: {},
                episBanco: [],
                editar: false,
                titulo: '',
                atual: '',
                carregando: true,
                mensagem: '',
                cas: [],
                ca: {},
                html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
            }
        },
        methods: {
            testaValidade: function(validade) {
                var data = Vue.moment(validade, "YYYY-MM-DD");
                var hoje = Vue.moment().startOf('day');

               var diff = Vue.moment.duration(data.diff(hoje)).asDays();

                //console.log(Vue.moment(validade, "DD/MM/YYYY"));
               if (diff < 0) {
                   return "<span style='color: red'> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
               } else {
                    return "<span> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
               }
                // //console.log(new Date() | Vue.moment('YYYY-MM-DD'));
            },
            carregar: function (msg) {
                this.mensagem = msg;
                this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
                this.carregando = true;
            },

            preencher: function (epi) {
                this.atual = epi.epi.idEpi;
                this.epi = epi;
                this.editar = true;
                this.$refs.myModal.show();
            },
            abrir: function () {
                this.epi = {};
                this.$refs.myModal.show();
            },
            fechar: function () {
                this.editar = false;
                this.epi = {};
                this.atual = '';
                var that = this;
                axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
                    that.epis = response.data;
                    that.$refs.myModal.hide();
                });
            },
            fecharCerteza: function () {
                this.$refs.modalCerteza.hide();
            },
            sucesso: function (msg) {
                this.mensagem = msg;
                this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
                var that = this;
                setTimeout(function () {
                    that.carregando = false;
                }, 800);
            },
            epiEmEpi: function (empresa) {


                for (var i = 0; i < this.epis.length; i++) {
                    if (this.epis[i].epi.idEpi === empresa.idEpi) {
                        return true;
                    }
                }

                return false;
            },
            ok: function (evt) {
                evt.preventDefault();
                if (this.editar) {
                    this.atualizar();
                } else {
                    this.salvar();
                }
            },


            remover: function (dado) {
                this.deletar = dado.idEmpresaEpi;
                this.$refs.modalCerteza.show();
                $(this.idTabela).DataTable().destroy();
            },

            certeza: function () {
                this.carregar('Removendo epi...');
                var that = this;
                axios.get('/empresas/epis/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function (
                    response) {
                    that.epis = response.data;
                    that.$nextTick(() => {
                        that.fecharCerteza();
                        that.sucesso('Excluido com sucesso!');
                    });
                });
            },

            atualizar: function () {
                this.carregar('Atualizando...');
                var that = this;
                axios.post('/empresas/epis/atualizar/' + that.empresa.idEmpresa, {
                    dados: that.epi
                }).then(function (response) {
                    that.epis = response.data;
                    that.$nextTick(() => {
                        that.sucesso('EPI atualizado.');
                        that.fechar();
                    });
                });
            },

            salvar: function () {
                this.carregar('Salvando...');
                var that = this;
                //console.log(this.epi);
                axios.post('/empresas/epis/novo/' + that.empresa.idEmpresa, {
                    dados: that.epi
                }).then(function (response) {
                    that.epis = response.data;
                    that.$nextTick(() => {
                        that.sucesso("EPI incluído.");
                        that.fechar();
                    });
                });
            },

            listCa: function (dados) {
                var that = this;

                this.epi = dados;

                axios.get('/empresas/epis/cas/' + dados.idEmpresaEpi).then(function (response) {
                    that.cas = response.data;
                });

                this.titulo = dados.epi.descricao;
                //console.log(this.cas);

                this.$refs.modalCas.show();
            },

            abrirCa: function () {
                this.$refs.novoCa.show();
            },

            okCa: function () {

                console.log(this.epi);
                if (this.ca.idEmpresaEpiCa) {
                    this.carregar('Atualizando...');
                    var that = this;
                    axios.post('/empresas/epis/cas/atualizar/' + that.ca.idEmpresaEpiCa, {
                        dados: that.ca,
                        empresaEpi: that.epi.idEmpresaEpi
                    }).then(function (response) {
                        that.cas = response.data;
                        that.$nextTick(() => {
                            that.sucesso("CA atualizado!");
                            that.fecharCa();
                        });
                    });

                    // alert('ainda não edita.');

                } else {
                    this.carregar('Salvando...');
                    var that = this;
                    axios.post('/empresas/epis/cas/novo/' + that.epi.idEmpresaEpi, {
                        dados: that.ca,
                        empresaEpi: that.epi.idEmpresaEpi
                    }).then(function (response) {
                        that.cas = response.data;
                        that.$nextTick(() => {
                            that.sucesso("CA incluído.");
                            that.fecharCa();
                        });
                    });
                }

            },

            fecharCa: function () {
                this.ca = {};
            },

            preencherCa: function (dados) {
                //console.log(dados);
                this.ca = dados;
                this.$refs.novoCa.show();
            },

            removerCa: function (dados) {
                //console.log(dados);
                this.carregar('Removendo CA...');
                var that = this;
                axios.get('/empresas/epis/cas/remover/' + this.epi.idEmpresaEpi + '/' + dados.idEmpresaEpiCa).then(
                    function (response) {
                        that.cas = response.data;
                        that.$nextTick(() => {
                            that.sucesso('Excluido com sucesso!');
                        });
                    });
            }
        },
        mounted() {
            var that = this;
            //console.log(this.empresa);
            axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
                that.epis = response.data;
            });

            axios.get('/tabelas/epi/list/').then(function (response) {
                that.episBanco = response.data;
                // //console.log(response.data);
            });

            this.sucesso('Carregados os epis');
        }
    }

</script>
