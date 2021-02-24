(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _epi_TamanhosEpiComponente_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../epi/TamanhosEpiComponente.vue */ "./resources/js/components/epi/TamanhosEpiComponente.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TamanhosEpiComponente: _epi_TamanhosEpiComponente_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['empresa', 'posto', 'usuario'],
  data: function data() {
    return {
      carregando: false,
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      entregas: [],
      funcionarios: [],
      liberados: [],
      liberado: {},
      inativos: [],
      entrega: {
        idEntregaEpi: 0,
        empresaFuncionario: {
          pessoa: {},
          ambienteTrabalho: {},
          empresaContrato: {
            empresaContratante: {}
          },
          funcao: {}
        }
      },
      dataMaxima: '',
      estoques: [],
      selecionado: {},
      historicos: '',
      entregaItens: [],
      entregaItemHistorico: {
        entregaEpiItens: {
          estoque: {
            gradeEmpresaEpi: {
              cadastroEpiCa: {
                cadastroEpi: {
                  epi: {}
                }
              },
              cor: {},
              tamanho: {}
            }
          },
          quantidade: 0
        },
        quantidade: 0
      },
      trocados: 0
    };
  },
  computed: {
    hoje: function hoje() {
      var currentDate = new Date();
      var y = currentDate.getFullYear();
      var m = currentDate.getMonth() + 1;
      if (m < 10) m = '0' + m;
      var d = currentDate.getDate();
      if (d < 10) d = '0' + d;
      return y + '-' + m + '-' + d;
    },
    parametro: function parametro() {
      var uri = window.location.search.substring(1);
      var params = new URLSearchParams(uri);
      return params.get("acao");
    }
  },
  methods: {
    abrirHistorico: function abrirHistorico(hist) {
      this.historicos = hist;
      this.$refs.modalHistorico.show();
    },
    formatarHistorico: function formatarHistorico(historico) {
      if (historico.ocorrencia == 'BLOQUEIO_POR_COR_ERRADA') {
        return 'Bloqueio por cor errada';
      } else if (historico.ocorrencia == 'BLOQUEIO_POR_TAMANHO_ERRADO') {
        return 'Bloqueia por tamanho errado';
      } else if (historico.ocorrencia == 'BLOQUEIO_POR_ENTREGA_ERRADA') {
        return 'Bloqueia por entrega errada';
      } else if (historico.ocorrencia == 'TROCA_POR_DEFEITO') {
        return 'Troca de ' + historico.quantidade + ' item(s) por defeito';
      } else if (historico.ocorrencia == 'TROCA_POR_AVARIA') {
        return 'Troca de ' + historico.quantidade + ' item(s) por avaria';
      } else if (historico.ocorrencia == 'TROCA_POR_EXTRAVIO') {
        return 'Troca de ' + historico.quantidade + ' item(s) por extravio';
      }
    },
    testaDataBloqueio: function testaDataBloqueio() {
      if (new Date(this.entrega.data) > new Date(this.entregaItemHistorico.data) || this.dataMaxima < new Date(this.entregaItemHistorico.data)) {
        this.$alert('A data deve ser maior que a data de entrega e só pode ser realizada 30 dias depois dela.', 'Atenção!', 'warning');
        this.entregaItemHistorico.data = this.entrega.data;
      }
    },
    testaDataTroca: function testaDataTroca() {
      if (new Date(this.entrega.data) > new Date(this.entregaItemHistorico.data) || new Date(this.entregaItemHistorico.data) > new Date(this.entregaItemHistorico.entregaEpiItens.validade)) {
        this.$alert('A data deve ser maior que a data de entrega e menor que o vencimento do EPI.', 'Atenção!', 'warning');
        this.entregaItemHistorico.data = this.entrega.data;
      }
    },
    salvarHistorico: function salvarHistorico(evt) {
      var that = this;
      evt.preventDefault();

      if (that.entregaItemHistorico.ocorrencia != '' && that.entregaItemHistorico.quantidade > 0) {
        axios.post('/posto-entrega/entrega/historico', {
          dados: that.entregaItemHistorico
        }).then(function (response) {
          that.visualizar(that.entrega);
          that.$refs.modalBloquear.hide();
          that.$refs.modalTrocar.hide();
        });
      }
    },
    abrirBloquear: function abrirBloquear(entregaItem) {
      this.entregaItemHistorico.entregaEpiItens = Object.assign({}, entregaItem);
      this.entregaItemHistorico.quantidade = this.entregaItemHistorico.entregaEpiItens.quantidade;
      var result = new Date(this.entrega.data);
      console.log('result', result);
      result.setDate(result.getDate() + 30);
      this.dataMaxima = result;
      this.$refs.modalBloquear.show();
    },
    abrirTrocar: function abrirTrocar(entregaItem) {
      this.entregaItemHistorico.entregaEpiItens = Object.assign({}, entregaItem);

      if (entregaItem.historico) {
        console.log('historico', entregaItem.historico); // this.historicos = entregaItem.historico;

        this.trocados = entregaItem.historico.reduce(function (a, b) {
          return a + b['quantidade'];
        }, 0);
      }

      this.$refs.modalTrocar.show();
    },
    vencido: function vencido(data) {
      var hoje = new Date();
      var vencimento = new Date(data);
      return hoje > vencimento ? true : false;
    },
    diff: function diff(data) {
      var vencimento = Vue.moment(data, "YYYY-MM-DD");
      var hoje = Vue.moment().startOf('day');
      var diff = Vue.moment.duration(hoje.diff(vencimento)).asDays();
      return diff <= 30 ? true : false;
    },
    certeza: function certeza() {
      this.$refs.modalCerteza.hide();
      var that = this;
      axios.get('/posto-entrega/entrega/remover/' + this.entrega.idEntregaEpi).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
          that.entregas = response.data;
          that.$refs.modalEntrega.hide();
        });
      });
    },
    fecharCerteza: function fecharCerteza() {
      this.$refs.modalCerteza.hide();
    },
    removerEntrega: function removerEntrega(entrega) {
      this.entrega = entrega;
      console.log(this.entrega);
      this.$refs.modalCerteza.show();
    },
    eHoje: function eHoje(entrega) {
      if (entrega.data == this.hoje) {
        return true;
      } else {
        return false;
      }

      return true;
    },
    digital: function digital() {
      var that = this;
      axios.post('/posto-entrega/entrega/assinar', {
        entrega: that.entrega
      }).then(function (response) {
        that.entrega.dataAssinatura = response.data;
        console.log(response.data);
        document.getElementById("data").dispatchEvent(new Event('input'));
      }); // if (!this.entrega.empresaFuncionario.pessoa.biometriaTemplate) {
      //     that.$alert('Ops. ', 'Ops!', 'alert');
      //     var options = {
      //         title: "Atenção!",
      //         text: "Essa pessoa não tem a biometria cadastrada. Gostaria de cadastrar?",
      //         type: "warning",
      //         showCancelButton: true,
      //         confirmButtonText: "Cadastrar",
      //         cancelButtonText: "Sair",
      //         animation: false,
      //     }
      //     this.$fire(options).then(r => {
      //         if (r.value == true) {
      //             axios.get('http://localhost:9000/api/public/v1/captura/Enroll/1').then(function (response) {
      //                 // that.pessoa.biometriaTemplate = response.data;
      //                 // that.salvar();
      //             }).catch(function (error) {
      //                 that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
      //             });
      //         }
      //     });
      // } else {
      //     axios.get('http://localhost:9000/api/public/v1/captura/Comparar?Digital=' + this.entrega.empresaFuncionario.pessoa.biometriaTemplate).then(function (response) {
      //         if (response.data == "OK") {
      //             axios.post('/posto-entrega/entrega/assinar', {
      //                 entrega: that.entrega
      //             }).then(function (response) {
      //                 that.entrega.dataAssinatura = response.data;
      //                 console.log(response.data);
      //                 document.getElementById("data").dispatchEvent(new Event('input'));
      //             });
      //         }
      //     }).catch(function (error) {
      //         that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
      //     });
      // }
    },
    exibeTabela: function exibeTabela() {
      $('#tabelaListagemEmpregados').DataTable({
        "order": [[1, "desc"]],
        "lengthMenu": [[50, -1], [50, "Todos"]],
        "columnDefs": [{
          "targets": 'no-sort',
          "orderable": false
        }],
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
        }
      });
    },
    visualizar: function visualizar(entrega) {
      console.log(entrega);
      var that = this;
      this.carregando = true;
      this.mensagem = 'Carregando dados...';
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrega-epi-itens/listaPorIdEntregaEpi/' + entrega.idEntregaEpi).then(function (response) {
        that.entrega = entrega;
        that.entregaItens = response.data;
        var rowLen = that.entregaItens.length;
        that.entregaItens.map(function (entregaItem, i) {
          axios.post('/posto-entrega/entrega/validade', {
            idAmbienteTrabalho: entregaItem.entregaEpi.empresaFuncionario.ambienteTrabalho.idAmbienteTrabalho,
            idEmpresa: entregaItem.entregaEpi.empresaFuncionario.empresaContrato.empresa.idEmpresa,
            idCadastroEpi: entregaItem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi
          }).then(function (response) {
            console.log('valide', response.data.validade);
            var result = new Date(that.entrega.data); // console.log('entrega', result);

            result.setDate(result.getDate() + response.data.validade);
            console.log('data de validade', result);
            entregaItem.validade = result;
            that.$forceUpdate(); // Vue.set(entregaItem, 'validade', result);
          });
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrega-epi-itens-historico/listaPorIdEntregaEpiItens/' + entregaItem.idEntregaEpiItens).then(function (response) {
            if (response.data.length > 0) {
              entregaItem.historico = response.data;
            } else {
              entregaItem.historico = null;
            }

            if (rowLen == i + 1) {
              console.log('ENTREGA ITENS', that.entregaItens);
              axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + entrega.empresaFuncionario.idEmpresaFuncionario).then(function (response) {
                that.liberados = response.data;
                that.liberados.map(function (item) {
                  item.carrinho = that.qtdCarrinho(item);
                });
                that.$refs.modalEntrega.show(); // that.$forceUpdate();

                that.carregando = false;
              });
            }
          });
        });
      });
    },
    removerItem: function removerItem(index) {
      console.log(this.entregaItens[index]);
      var that = this;

      if (this.entregaItens[index].idEntregaEpiItens > 0) {
        if (this.entregaItens.length == 1) {
          that.removerEntrega(that.entrega);
        } else {
          axios.get('/posto-entrega/entrega/remover-item/' + this.entregaItens[index].idEntregaEpiItens).then(function (response) {
            if (response.data.status == "true") {
              axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + that.entrega.empresaFuncionario.idEmpresaFuncionario).then(function (response) {
                that.liberados = response.data;
                that.entregaItens.splice(index, 1);
                that.liberados.map(function (item) {
                  item.carrinho = that.qtdCarrinho(item);
                  console.log(that.qtdCarrinho(item));
                });
                that.carregando = false;
              });
            }
          });
        }
      } else {
        this.entregaItens.splice(index, 1);
      }
    },
    qtdCarrinho: function qtdCarrinho(item) {
      // var key = this.entregaItens.findIndex(x => x.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == item.cadastroEpi.idCadastroEpi);
      var filtrados = this.entregaItens.filter(function (entregaItem) {
        // console.log(entregaItem);
        return entregaItem.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == item.cadastroEpi.idCadastroEpi;
      });

      if (filtrados.length > 0) {
        return filtrados.reduce(function (a, b) {
          return a + b['quantidade'];
        }, 0);
      } else {
        return 0;
      }
    },
    limite: function limite(item) {
      var key = this.liberados.findIndex(function (x) {
        return x.cadastroEpi.idCadastroEpi == item.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi;
      });
      var calc = this.liberados[key].quantidade - this.liberados[key].quantidadeEmUso - this.qtdCarrinho(this.liberados[key]);
      var limite = 0;

      if (item.estoque.quantidadeEstoque > calc) {
        limite = calc + item.quantidade;
      } else {
        if (item.estoque.quantidadeEstoque < 0) {
          limite = 0;
        } else {
          limite = item.estoque.quantidadeEstoque;
        }
      }

      if (item.idEntregaEpiItens > 0 && !item.entregaEpi.dataAssinatura) {
        return limite + this.liberados[key].carrinho;
      } else {
        return limite;
      }
    },
    selecionar: function selecionar(funcionario) {
      this.entrega = {
        idEntregaEpi: 0
      };
      this.entrega.empresaFuncionario = funcionario;
      this.entrega.entregador = this.usuario;
      var that = this;
      this.entregaItens = [];
      this.carregando = true;
      this.mensagem = 'Carregando dados...';
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/ambiente-cadastro-epis/listaPorIdEmpresaFuncionario/' + funcionario.idEmpresaFuncionario).then(function (response) {
        that.liberados = response.data;
        that.$refs.myModal.hide();
        $('#tabelaListagemEmpregados').DataTable().destroy();
        var currentDate = new Date();
        console.log(currentDate);
        var y = currentDate.getFullYear();
        var m = currentDate.getMonth() + 1;
        var d = currentDate.getDate();
        if (m < 10) m = "0" + m;
        if (d < 10) d = '0' + d;
        that.entrega.data = y + '-' + m + '-' + d;
        console.log('dataaa', that.entrega.data);
        that.$refs.modalEntrega.show();
        that.carregando = false;
      });
    },
    selecionarItem: function selecionarItem(item) {
      this.selecionado = item;
      console.log(item);

      if (item.quantidadeEstoque > 0) {
        this.adicionarItem();
      } else {
        alert('Estoque não disponivel');
      }
    },
    adicionarItem: function adicionarItem() {
      var that = this;
      var key = this.entregaItens.findIndex(function (x) {
        return x.estoque.idEstoque == that.selecionado.idEstoque;
      });

      if (key >= 0) {
        this.entregaItens[key].quantidade = this.entregaItens[key].quantidade + 1;
      } else {
        this.entregaItens.push({
          estoque: that.selecionado,
          observacao: '',
          quantidade: 1,
          valorUnitario: that.selecionado.valorUnitario,
          usuario: 0,
          entregaEpi: 0,
          idEntregaEpiItens: 0
        });
      }

      console.log(this.selecionado);
      this.$refs.itensModal.hide(); // var key = this.liberados.findIndex(x => x.cadastroEpi.idCadastroEpi == that.selecionado.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi);
      // this.liberados[key].quantidadeEmUso = this.liberados[key].quantidadeEmUso + 1;
    },
    abrir: function abrir() {
      this.mensagem = 'Carregando empregados...';
      var that = this;
      this.$refs.myModal.show();
    },
    estaAdicionado: function estaAdicionado(item) {
      var key = this.entregaItens.findIndex(function (x) {
        return x.estoque.idEstoque == item.idEstoque;
      });

      if (key >= 0) {
        return true;
      } else {
        return false;
      }
    },
    abrirEstoque: function abrirEstoque(liberado) {
      var that = this; // this.liberado = liberado;

      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
        that.estoques = response.data.filter(function (item) {
          // console.log(item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi);
          // console.log(liberado);
          return item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.idCadastroEpi == liberado.cadastroEpi.idCadastroEpi;
        });
        console.log(that.estoques);
        that.$refs.itensModal.show();
      });
    },
    formataEstabelecimento: function formataEstabelecimento(estabelecimento) {
      if (estabelecimento == 'PRÓPRIO') {
        return 'P';
      } else if (estabelecimento == 'TERCEIROS') {
        return 'T';
      } else if (estabelecimento == 'SERVIÇOS_TERCEIROS') {
        return 'ST';
      }
    },
    formataTipo: function formataTipo(tipo) {
      if (tipo == 'ADMISSIONAL') {
        return 'Adm';
      } else if (tipo == 'DEMISSIONAL') {
        return 'Dem';
      } else if (tipo == 'MUDANÇA_DE_FUNÇÃO') {
        return 'M. Fun';
      } else if (tipo == 'MUDANÇA_DE_CONTRATANTE') {
        return 'M. Con';
      } else if (tipo == 'TRANSFERÊNCIA') {
        return 'Trans';
      }
    },
    formataSexo: function formataSexo(sexo) {
      if (sexo == 'MASCULINO') {
        return 'M';
      } else if (sexo == 'FEMININO') {
        return 'F';
      }
    },
    salvar: function salvar(evt) {
      evt.preventDefault();
      var that = this;
      that.mensagem = 'Salvando...';
      that.carregando = true;
      axios.post('/posto-entrega/entrega', {
        entrega: that.entrega,
        entregaitens: that.entregaItens
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
          that.entregas = response.data;
          that.mensagem = 'Entrega salva!';
          that.$refs.modalEntrega.hide();
          that.carregando = false;
        });
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    this.entrega.entregador = this.usuario;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrega-epis/').then(function (response) {
      that.entregas = response.data;
      console.log(that.entregas);
    });
    axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
      that.funcionarios = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titulo[data-v-c87ea6fa] {\n  text-align: center;\n  background-color: #00a65a;\n  padding: 6px;\n  color: white;\n  font-size: 17px;\n  margin-top: 10px;\n}\n.selecionado[data-v-c87ea6fa] {\n  background-color: #71bb66 !important;\n}\n.bg-warning[data-v-c87ea6fa] {\n  background-color: #fde4bc !important;\n}\ntr.bg-primary[data-v-c87ea6fa] {\n  background-color: #c0b5fd !important;\n}\n.btn-digital[data-v-c87ea6fa] {\n  margin-top: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-text",
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _vm.entregas.length > 0
        ? _c(
            "table",
            {
              staticClass: "table table-hover table-striped",
              attrs: { id: "tabelaEntregas" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Data")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Funcionário")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Assinatura")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Ação")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.entregas, function(entrega) {
                  return _c(
                    "tr",
                    {
                      class: { "bg-primary": !entrega.dataAssinatura },
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.visualizar(entrega)
                        }
                      }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(entrega.idEntregaEpi))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("moment")(entrega.data, "DD/MM/YYYY"))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(entrega.empresaFuncionario.pessoa.nomePessoa)
                        )
                      ]),
                      _vm._v(" "),
                      !entrega.dataAssinatura
                        ? _c("td", [_vm._v("Pendente")])
                        : _vm._e(),
                      _vm._v(" "),
                      entrega.dataAssinatura
                        ? _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("moment")(
                                  entrega.dataAssinatura,
                                  "DD/MM/YYYY"
                                )
                              )
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-outline-primary",
                            on: {
                              click: function($event) {
                                return _vm.visualizar(entrega)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-pencil-alt" })]
                        ),
                        _vm._v(" "),
                        !entrega.dataAssinatura
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-danger btn-sm",
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.removerEntrega(entrega)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          : _vm._e()
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12 text-center" }, [
        _c("br"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            on: {
              click: function($event) {
                return _vm.abrir()
              }
            }
          },
          [
            _c("i", { staticClass: "fa fa-plus" }),
            _vm._v("\n            Adicionar")
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "myModal",
          attrs: {
            title: "Escolha o funcionário",
            "hide-footer": "",
            size: "xl"
          },
          on: { shown: _vm.exibeTabela }
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "box-body box-empregados table-responsive" },
              [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-hover table-striped table-empregados",
                    attrs: { id: "tabelaListagemEmpregados" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Matrícula")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nome")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("CPF")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Dt. Adm")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Dt. Cargo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Cargo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Ambiente")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Dt. Nasc")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Sexo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Tempo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Contratante")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.funcionarios, function(funcionario) {
                        return _c(
                          "tr",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function($event) {
                                return _vm.selecionar(funcionario)
                              }
                            }
                          },
                          [
                            _c("td", [
                              _vm._v(_vm._s(funcionario.pessoa.idPessoa))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(funcionario.matricula))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(funcionario.pessoa.nomePessoa))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(funcionario.pessoa.cpf))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("moment")(
                                    funcionario.dataInicial,
                                    "DD/MM/Y"
                                  )
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("moment")(
                                    funcionario.dataFuncao,
                                    "DD/MM/Y"
                                  )
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(funcionario.funcao.cargo))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.formataEstabelecimento(
                                    funcionario.ambienteTrabalho.estabelecimento
                                  )
                                ) +
                                  "\n                                -\n                                " +
                                  _vm._s(
                                    funcionario.ambienteTrabalho
                                      .nomeAmbienteTrabalho
                                  )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("moment")(
                                    funcionario.pessoa.dataNascimento,
                                    "DD/MM/Y"
                                  )
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.formataSexo(funcionario.pessoa.sexo))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(funcionario.ano) +
                                  "A, " +
                                  _vm._s(funcionario.mes) +
                                  "M,\n                                " +
                                  _vm._s(funcionario.dia) +
                                  "D"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  funcionario.empresaContrato.empresaContratante
                                    .nomeFantasia
                                )
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalEntrega",
          attrs: {
            title: "Entrega de EPI",
            "cancel-title": "Cancelar",
            "ok-title": "Salvar",
            size: "xl",
            "hide-footer":
              _vm.entrega.idEntregaEpi > 0 && !!_vm.entrega.dataAssinatura
          },
          on: { ok: _vm.salvar }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Matricula")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.empresaFuncionario.matricula,
                      expression: "entrega.empresaFuncionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.entrega.empresaFuncionario.matricula },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario,
                        "matricula",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.empresaFuncionario.pessoa.cpf,
                      expression: "entrega.empresaFuncionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: {
                    value: _vm.entrega.empresaFuncionario.pessoa.cpf
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario.pessoa,
                        "cpf",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.empresaFuncionario.pessoa.nomePessoa,
                      expression: "entrega.empresaFuncionario.pessoa.nomePessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: {
                    value: _vm.entrega.empresaFuncionario.pessoa.nomePessoa
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario.pessoa,
                        "nomePessoa",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Adm.")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.empresaFuncionario.dataInicial,
                      expression: "entrega.empresaFuncionario.dataInicial"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date", disabled: "" },
                  domProps: {
                    value: _vm.entrega.empresaFuncionario.dataInicial
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario,
                        "dataInicial",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Contratante")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value:
                        _vm.entrega.empresaFuncionario.empresaContrato
                          .empresaContratante.nomeFantasia,
                      expression:
                        "entrega.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value:
                      _vm.entrega.empresaFuncionario.empresaContrato
                        .empresaContratante.nomeFantasia
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario.empresaContrato
                          .empresaContratante,
                        "nomeFantasia",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Ambiente de Trabalho")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value:
                        _vm.entrega.empresaFuncionario.ambienteTrabalho
                          .nomeAmbienteTrabalho,
                      expression:
                        "entrega.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value:
                      _vm.entrega.empresaFuncionario.ambienteTrabalho
                        .nomeAmbienteTrabalho
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario.ambienteTrabalho,
                        "nomeAmbienteTrabalho",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Cargo")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.empresaFuncionario.funcao.cargo,
                      expression: "entrega.empresaFuncionario.funcao.cargo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.entrega.empresaFuncionario.funcao.cargo
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.entrega.empresaFuncionario.funcao,
                        "cargo",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Entregue por")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.entregador,
                      expression: "entrega.entregador"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.entrega.entregador },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entrega, "entregador", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Data de Entrega")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entrega.data,
                      expression: "entrega.data"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date", id: "data" },
                  domProps: { value: _vm.entrega.data },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.entrega, "data", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm.entrega.idEntregaEpi > 0
              ? _c("div", { staticClass: "col-md-1" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-lg btn-digital btn-success",
                      attrs: { disabled: _vm.entrega.dataAssinatura },
                      on: { click: _vm.digital }
                    },
                    [_c("i", { staticClass: "fas fa-lg fa-fingerprint" })]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.entrega.idEntregaEpi > 0
              ? _c("div", { staticClass: "col-md-2 btn-digital" }, [
                  !_vm.entrega.dataAssinatura
                    ? _c("span", { staticClass: "text-danger h5" }, [
                        _vm._v(
                          "\n                    Assinatura Pendente\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.entrega.dataAssinatura
                    ? _c("span", { staticClass: "text-success h5" }, [
                        _vm._v(
                          "\n                    Assinatura Coletada\n                "
                        )
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.entrega.idEntregaEpi == 0 ||
          !_vm.entrega.idEntregaEpi ||
          (!_vm.entrega.dataAssinatura &&
            _vm.eHoje(_vm.entrega) &&
            _vm.entrega.idEntregaEpi > 0)
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("h3", { staticClass: "titulo" }, [
                    _vm._v("Liberados para Entrega")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("EPI")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Unidade")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Programado")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Em Uso")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Liberado")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Carrinho")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Validade")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Uso")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Ação")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.liberados, function(liberado) {
                        return _c("tr", [
                          _c("td", [
                            _vm._v(_vm._s(liberado.cadastroEpi.epi.idEpi))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                liberado.cadastroEpi.epi.categoriaEpi.grupoEpi
                                  .codigoGrupoEpi
                              ) +
                                "." +
                                _vm._s(
                                  liberado.cadastroEpi.epi.categoriaEpi
                                    .codigoCategoria
                                ) +
                                " - " +
                                _vm._s(liberado.cadastroEpi.epi.codigoNr6) +
                                " " +
                                _vm._s(liberado.cadastroEpi.epi.descricao)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(liberado.cadastroEpi.epi.unidade))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(liberado.quantidade))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(liberado.quantidadeEmUso))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm.entrega.idEntregaEpi == 0 ||
                            !_vm.entrega.idEntregaEpi
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        liberado.quantidade -
                                          liberado.quantidadeEmUso -
                                          _vm.qtdCarrinho(liberado)
                                      ) +
                                      "\n                                "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.entrega.dataAssinatura &&
                            _vm.eHoje(_vm.entrega) &&
                            _vm.entrega.idEntregaEpi > 0
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        liberado.quantidade -
                                          liberado.quantidadeEmUso -
                                          _vm.qtdCarrinho(liberado) +
                                          liberado.carrinho
                                      ) +
                                      "\n                                "
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.qtdCarrinho(liberado)))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(liberado.validade))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(liberado.uso))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-success btn-sm",
                                attrs: {
                                  disabled:
                                    liberado.quantidade -
                                      liberado.quantidadeEmUso -
                                      _vm.qtdCarrinho(liberado) <=
                                    0
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.abrirEstoque(liberado)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-list" })]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm.entregaItens.length > 0 &&
            (_vm.entrega.idEntregaEpi == 0 || !_vm.entrega.idEntregaEpi)
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c("h3", { staticClass: "titulo" }, [
                    _vm._v("Itens Adicionados ao Carrinho")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.entregaItens.length > 0 && _vm.entrega.idEntregaEpi > 0
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c("h3", { staticClass: "titulo" }, [
                    _vm._v("Itens da entrega")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.entregaItens.length > 0
              ? _c("div", { staticClass: "col-md-12" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("ID")
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Descrição")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Cor")]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("Tamanho")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("C.A")
                        ]),
                        _vm._v(" "),
                        _vm.entregaItens.length > 0 &&
                        _vm.entrega.idEntregaEpi > 0
                          ? _c("th", [_vm._v("Val. do CA")])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("th", [_vm._v("Fabricante")]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "100px" } }, [
                          _vm._v("Quantidade")
                        ]),
                        _vm._v(" "),
                        _vm.entregaItens.length > 0 &&
                        _vm.entrega.idEntregaEpi > 0
                          ? _c("th", [_vm._v("Val. Max. Até")])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("th", [_vm._v("Intervenção")]),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: {
                              width: "103px",
                              "text-align": "center"
                            }
                          },
                          [_vm._v("Ação")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.entregaItens, function(entregaitem, index) {
                        return _c(
                          "tr",
                          {
                            class: {
                              "bg-warning": entregaitem.estoque.idEstoque == 0
                            }
                          },
                          [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi.idOrigem
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi
                                    .cadastroEpiCa.cadastroEpi.epi.descricao
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi.cor
                                    .descricao
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi.tamanho
                                    .descricao
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi
                                    .cadastroEpiCa.ca
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _vm.entregaItens.length > 0 &&
                            _vm.entrega.idEntregaEpi > 0
                              ? _c(
                                  "td",
                                  {
                                    class: {
                                      "text-danger": _vm.vencido(
                                        entregaitem.estoque.gradeEmpresaEpi
                                          .cadastroEpiCa.validade
                                      )
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            entregaitem.estoque.gradeEmpresaEpi
                                              .cadastroEpiCa.validade,
                                            "DD/MM/YYYY"
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  entregaitem.estoque.gradeEmpresaEpi
                                    .cadastroEpiCa.fabricante
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm.entrega.idEntregaEpi == 0 ||
                              !_vm.entrega.idEntregaEpi ||
                              !_vm.entrega.dataAssinatura
                                ? _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: entregaitem.quantidade,
                                          expression: "entregaitem.quantidade"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            entregaitem,
                                            "quantidade",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.limite(entregaitem), function(
                                      i
                                    ) {
                                      return _c(
                                        "option",
                                        { domProps: { value: i } },
                                        [_vm._v(_vm._s(i))]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.entrega.idEntregaEpi > 0 &&
                              _vm.entrega.dataAssinatura
                                ? _c("span", [
                                    _vm._v(_vm._s(entregaitem.quantidade))
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                class: {
                                  "text-danger": _vm.vencido(
                                    entregaitem.validade
                                  )
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        entregaitem.validade,
                                        "DD/MM/YYYY"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              entregaitem.historico
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          entregaitem.historico[0].ocorrencia.replace(
                                            /_.*/,
                                            ""
                                          )
                                        ) +
                                        " - " +
                                        _vm._s(
                                          entregaitem.historico.reduce(function(
                                            a,
                                            b
                                          ) {
                                            return a + b["quantidade"]
                                          },
                                          0)
                                        ) +
                                        "\n                                "
                                    )
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              entregaitem.historico
                                ? _c("span", [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-outline-primary btn-sm",
                                        on: {
                                          click: function($event) {
                                            return _vm.abrirHistorico(
                                              entregaitem.historico
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-eye" })]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              (entregaitem.historico &&
                                entregaitem.historico[0].ocorrencia.replace(
                                  /_.*/,
                                  ""
                                ) != "BLOQUEIO" &&
                                entregaitem.historico.reduce(function(a, b) {
                                  return a + b["quantidade"]
                                }, 0) < entregaitem.quantidade) ||
                              !entregaitem.historico
                                ? _c("span", { staticClass: "d-inline" }, [
                                    (_vm.entrega.idEntregaEpi == 0 ||
                                      !_vm.entrega.idEntregaEpi ||
                                      !!_vm.entrega.dataAssinatura) &&
                                    entregaitem.idEntregaEpiItens > 0 &&
                                    !_vm.vencido(entregaitem.validade)
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown d-inline-block"
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-outline-success btn-sm dropdown-toggle",
                                                attrs: {
                                                  type: "button",
                                                  id: "dropdownMenuButton",
                                                  "data-toggle": "dropdown",
                                                  "aria-haspopup": "true",
                                                  "aria-expanded": "false"
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "dropdown-menu",
                                                attrs: {
                                                  "aria-labelledby":
                                                    "dropdownMenuButton"
                                                }
                                              },
                                              [
                                                _vm.diff(_vm.entrega.data) &&
                                                !entregaitem.historico
                                                  ? _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "dropdown-item",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.abrirBloquear(
                                                              entregaitem
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Bloquear ")]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                !_vm.vencido(
                                                  entregaitem.validade
                                                )
                                                  ? _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "dropdown-item",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.abrirTrocar(
                                                              entregaitem
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Trocar")]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.entrega.idEntregaEpi == 0 ||
                              !_vm.entrega.idEntregaEpi ||
                              !_vm.entrega.dataAssinatura
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-outline-danger btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.removerItem(index)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  )
                                : _vm._e()
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ])
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "itensModal",
          attrs: { title: "Itens no Estoque", "hide-footer": "", size: "lg" },
          on: { ok: _vm.adicionarItem }
        },
        [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped",
              attrs: { id: "tabelaItens" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "text-center" }, [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Descrição")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Cor")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center" }, [_vm._v("Tamanho")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center" }, [_vm._v("C.A")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Fabricante")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Quantidade em Estoque")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.estoques, function(item) {
                  return !_vm.estaAdicionado(item)
                    ? _c(
                        "tr",
                        {
                          class: { selecionado: _vm.selecionado == item },
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              return _vm.selecionarItem(item)
                            }
                          }
                        },
                        [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(item.gradeEmpresaEpi.idOrigem))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi
                                  .epi.descricao
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(item.gradeEmpresaEpi.cor.descricao))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(item.gradeEmpresaEpi.tamanho.descricao)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(item.gradeEmpresaEpi.cadastroEpiCa.ca)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                item.gradeEmpresaEpi.cadastroEpiCa.fabricante
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.quantidadeEstoque))])
                        ]
                      )
                    : _vm._e()
                }),
                0
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalCerteza",
          attrs: {
            size: "sm",
            "no-close-on-backdrop": true,
            centered: "",
            "hide-header": true,
            "hide-footer": true,
            "no-close-on-esc": true,
            id: "modalCerteza"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("h3", [_vm._v("Tem certeza que deseja excluir? ")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-top": "20px" } },
            [
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-secondary btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.fecharCerteza }
                  },
                  [
                    _c("i", { staticClass: "fas fa-close" }),
                    _vm._v(" Não\n                ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-danger btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.certeza }
                  },
                  [
                    _c("i", { staticClass: "fa fa-check" }),
                    _vm._v(" Sim\n                ")
                  ]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalBloquear",
          attrs: {
            "no-close-on-backdrop": true,
            centered: "",
            title: "Bloquear entrega",
            "cancel-title": "Cancelar",
            "ok-title": "Salvar",
            "no-close-on-esc": true,
            id: "modalBloquear"
          },
          on: { ok: _vm.salvarHistorico }
        },
        [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Descrição")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi
                        .descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Cor")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cor.descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cor.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cor.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cor,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Cor")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.tamanho.descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.tamanho.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.tamanho.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.tamanho,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("label", [_vm._v("CA")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.ca,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.ca"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.ca
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa,
                      "ca",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Fabricante")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.fabricante,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.fabricante
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa,
                      "fabricante",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Qnt")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.entregaItemHistorico.entregaEpiItens.quantidade,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.quantidade"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", readonly: "" },
                domProps: {
                  value: _vm.entregaItemHistorico.entregaEpiItens.quantidade
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens,
                      "quantidade",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Data")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.entregaItemHistorico.data,
                    expression: "entregaItemHistorico.data"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "date",
                  max: _vm._f("moment")(_vm.dataMaxima, "YYYY-MM-DD"),
                  min: _vm.entrega.data
                },
                domProps: { value: _vm.entregaItemHistorico.data },
                on: {
                  blur: _vm.testaDataBloqueio,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico,
                      "data",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("label", [_vm._v("Motivo do Bloqueio")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entregaItemHistorico.ocorrencia,
                      expression: "entregaItemHistorico.ocorrencia"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.entregaItemHistorico,
                        "ocorrencia",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { value: "BLOQUEIO_POR_COR_ERRADA" } },
                    [_vm._v("Bloqueio por cor errada")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    { attrs: { value: "BLOQUEIO_POR_TAMANHO_ERRADO" } },
                    [_vm._v("Bloqueio por tamanho errado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    { attrs: { value: "BLOQUEIO_POR_ENTREGA_ERRADA" } },
                    [_vm._v("Bloqueio por entrega errada")]
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalTrocar",
          attrs: {
            "no-close-on-backdrop": true,
            centered: "",
            title: "Trocar entrega",
            "cancel-title": "Cancelar",
            "ok-title": "Salvar",
            "no-close-on-esc": true,
            id: "modalTrocar"
          },
          on: { ok: _vm.salvarHistorico }
        },
        [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Descrição")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi
                        .descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Cor")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cor.descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cor.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cor.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cor,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Tam")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.tamanho.descricao,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.tamanho.descricao"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.tamanho.descricao
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.tamanho,
                      "descricao",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("label", [_vm._v("CA")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.ca,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.ca"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.ca
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa,
                      "ca",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Fabricante")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa.fabricante,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.estoque.gradeEmpresaEpi.cadastroEpiCa.fabricante"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value:
                    _vm.entregaItemHistorico.entregaEpiItens.estoque
                      .gradeEmpresaEpi.cadastroEpiCa.fabricante
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens.estoque
                        .gradeEmpresaEpi.cadastroEpiCa,
                      "fabricante",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("label", [_vm._v("Qnt")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.entregaItemHistorico.entregaEpiItens.quantidade,
                    expression:
                      "entregaItemHistorico.entregaEpiItens.quantidade"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", disabled: "" },
                domProps: {
                  value: _vm.entregaItemHistorico.entregaEpiItens.quantidade
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico.entregaEpiItens,
                      "quantidade",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("label", [_vm._v("Data")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.entregaItemHistorico.data,
                    expression: "entregaItemHistorico.data"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "date",
                  max: _vm._f("moment")(
                    _vm.entregaItemHistorico.entregaEpiItens.validade,
                    "YYYY-MM-DD"
                  ),
                  min: _vm.entrega.data
                },
                domProps: { value: _vm.entregaItemHistorico.data },
                on: {
                  blur: _vm.testaDataTroca,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.entregaItemHistorico,
                      "data",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-9" }, [
              _c("label", [_vm._v("Motivo da troca")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.entregaItemHistorico.ocorrencia,
                      expression: "entregaItemHistorico.ocorrencia"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.entregaItemHistorico,
                        "ocorrencia",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "TROCA_POR_DEFEITO" } }, [
                    _vm._v("Troca por defeito")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "TROCA_POR_AVARIA" } }, [
                    _vm._v("Troca por avaria")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "TROCA_POR_EXTRAVIO" } }, [
                    _vm._v("Troca por extravio")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "TROCA_POR_DESGASTE" } }, [
                    _vm._v("Troca por desgaste")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("label", [_vm._v("Quantidade")]),
              _vm._v(" "),
              !isNaN(_vm.trocados)
                ? _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.entregaItemHistorico.quantidade,
                          expression: "entregaItemHistorico.quantidade"
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.entregaItemHistorico,
                            "quantidade",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(
                      _vm.entregaItemHistorico.entregaEpiItens.quantidade -
                        _vm.trocados,
                      function(i) {
                        return _c("option", { domProps: { value: i } }, [
                          _vm._v(_vm._s(i))
                        ])
                      }
                    ),
                    0
                  )
                : _vm._e()
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalHistorico",
          attrs: {
            "no-close-on-backdrop": true,
            size: "md",
            centered: "",
            title: "Histórico do item",
            "cancel-only": "",
            "cancel-title": "Fechar",
            "no-close-on-esc": true,
            id: "modalHistorico"
          }
        },
        [
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("ID")]),
                _vm._v(" "),
                _c("th", [_vm._v("Data")]),
                _vm._v(" "),
                _c("th", [_vm._v("Motivo")]),
                _vm._v(" "),
                _c("th", [_vm._v("Quantidade")]),
                _vm._v(" "),
                _c("th", [_vm._v("Realizado Por")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.historicos, function(historico) {
                return _c("tr", [
                  _c("td", [
                    _vm._v(_vm._s(historico.idEntregaEpiItensHistorico))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm._f("moment")(historico.data, "DD/MM/YYYY"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.formatarHistorico(historico)))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(historico.quantidade))
                  ]),
                  _vm._v(" "),
                  _c("td")
                ])
              }),
              0
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/seguranca/EntregaEpi.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/seguranca/EntregaEpi.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true& */ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true&");
/* harmony import */ var _EntregaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntregaEpi.vue?vue&type=script&lang=js& */ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& */ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EntregaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c87ea6fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/seguranca/EntregaEpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregaEpi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=style&index=0&id=c87ea6fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_style_index_0_id_c87ea6fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntregaEpi.vue?vue&type=template&id=c87ea6fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntregaEpi_vue_vue_type_template_id_c87ea6fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);