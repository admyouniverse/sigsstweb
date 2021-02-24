(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['empresa'],
  data: function data() {
    return {
      idTabela: '#tabelaListagem',
      carregando: true,
      mensagem: 'Carregando itens cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      examesComplementares: [],
      termo: '',
      funcionarios: [],
      funcionario: {
        pessoa: {
          cidadeNatal: {}
        }
      },
      exames: [],
      solicitacoes: [],
      solicitacao: {
        pcmsoAmbienteExame: {
          exame: {}
        },
        asoSolicitacao: {}
      },
      selecionado: 'codigo',
      montou: false,
      coluna: '',
      pessoas: [],
      historico: [],
      complementares: [],
      complementar: {
        ordemExame: 'INICIAL',
        idExameComplementarExame: 0,
        exame: {}
      },
      exameComplementarExame: {
        "idExameComplementarExame": 0,
        "exameComplementar": 0,
        "exame": 0,
        "situacao": "",
        "resultado": ""
      },
      file: '',
      temporarios: [],
      temPdf: false
    };
  },
  watch: {
    historico: function historico() {
      if (this.historico.length == 0) {
        this.complementar.ordemExame = "INICIAL";
      }
    }
  },
  computed: {
    idade: function idade() {
      var nascimento = new Date(this.funcionario.pessoa.dataNascimento);
      var hoje = new Date();
      var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
      if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) diferencaAnos--;
      return diferencaAnos;
    }
  },
  methods: {
    abrirUpload: function abrirUpload() {
      $("#file").click();
    },
    pdf: function pdf(complementar) {
      if (complementar.caminhoPdf) {
        window.open('http://200.98.201.236:8081/' + complementar.caminhoPdf);
      } else {
        alert('Não há PDF anexado.');
      }
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.submitFile();
    },
    submitFile: function submitFile() {
      console.log('submentendo....');
      /*
              Initialize the form data
          */

      var formData = new FormData();
      /*
          Add the form data we need to submit
      */

      formData.append('file', this.file);
      /*
        Make the request to the POST /single-file URL
      */

      var that = this;
      axios.post('http://200.98.201.236:8081/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        that.complementar.caminhoPdf = response.data.data.new_file_name;
        console.log(that.complementar.caminhoPdf);
        that.temPdf = true; // that.salvar();
      })["catch"](function () {});
    },
    verificaData: function verificaData() {
      var solicitacao = new Date(this.solicitacao.data);
      var exame = new Date(this.complementar.data);

      if (solicitacao > exame) {
        this.complementar.data = null;
        this.$alert('Data de exame deve ser maior que data de solicitacao', 'Ops!', 'error');
      }

      if (this.historico.length > 0) {
        var historico = new Date(this.historico[0].dataExame);
        console.log(this.historico[0]); // alert(exames);

        if (historico > exame) {
          this.complementar.data = null;
          this.$alert('Data de exame deve ser maior que data do ultimo exame', 'Ops!', 'error');
        }
      }
    },
    remover: function remover(complementar) {
      var that = this;
      axios.get('exames-complementares/remover/' + complementar.idExameComplementarExame).then(function (response) {
        that.cancelarNovo();
      });
    },
    editar: function editar(complementar) {
      this.complementar = complementar;
      console.log(this.complementar);
      this.complementar.data = complementar.dataExame;
      this.complementar.grau = complementar.situacao;
      this.$refs.modalIncluir.show();
    },
    cancelarNovo: function cancelarNovo() {
      // alert('fechoU!');
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + this.funcionario.idEmpresaFuncionario).then(function (response) {
        that.complementares = response.data; // console.log(that.complementares);
        // that.$refs.modalComplementar.show();
      });
    },
    mudouIndicacao: function mudouIndicacao() {
      if (this.complementar.indicacaoResultado == 'NORMAL') {
        this.complementar.grau = 'NORMAL';
      }
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
    formataSexo: function formataSexo(sexo) {
      if (sexo == 'MASCULINO') {
        return 'M';
      } else if (sexo == 'FEMININO') {
        return 'F';
      }
    },
    abrir: function abrir(funcionario) {
      var that = this;
      this.funcionario = funcionario;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + funcionario.idEmpresaFuncionario).then(function (response) {
        that.complementares = response.data; // console.log(that.complementares);

        that.$refs.modalComplementar.show();
      });
    },
    abrirSolicitacoes: function abrirSolicitacoes() {
      var that = this;
      axios.get('/exames-complementares/ultimo/' + this.funcionario.idEmpresaFuncionario).then(function (response) {
        if (response.data.length > 0) {
          that.solicitacoes = response.data;
          that.$refs.modalSolicitacoes.show();
        } else {
          // that.$alert('Não há solicitação para esse funcionário.', 'Ops!', 'error');
          var options = {
            title: "Atenção!",
            text: 'Não há solicitação para esse funcionário. O que deseja fazer?',
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Inserir sem solicitação",
            cancelButtonText: "Sair",
            animation: true
          };
          that.$fire(options).then(function (r) {
            if (r.value == true) {
              that.semSolicitacao(); // that.editar(verif[0]);
            }
          });
        }
      });
    },
    semSolicitacao: function semSolicitacao() {
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames/').then(function (response) {
        that.exames = response.data;
        that.$refs.modalSemSolicitacao.show();
      });
    },
    incluir: function incluir(solicitacao) {
      var that = this;
      that.$refs.modalSolicitacoes.hide();
      that.$refs.modalSemSolicitacao.hide();
      that.solicitacao = solicitacao;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames/' + this.solicitacao.idExame).then(function (response) {
        that.exame = response.data;
        that.complementar.exame = response.data;
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/' + that.solicitacao.idExame).then(function (response) {
          that.historico = response.data.filter(function (hist) {
            return hist.exameComplementar.empresaFuncionario.idEmpresaFuncionario == that.funcionario.idEmpresaFuncionario;
          });

          if (that.historico.length == 0) {
            that.complementar.ordemExame = 'INICIAL';
          } else {
            that.complementar.ordemExame = 'SEQUENCIAL';
          }

          that.$refs.modalIncluir.show();
        });
      });
    },
    salvarNovo: function salvarNovo(evt) {
      var that = this;
      evt.preventDefault();
      axios.post('/exames-complementares', {
        solicitacao: that.solicitacao,
        complementar: that.complementar,
        funcionario: that.funcionario
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/' + that.complementar.exame.idExame).then(function (response) {
          that.cancelarNovo();
          that.complementar = {
            ordemExame: 'INICIAL',
            exame: {}
          };
          that.$alert('Dados inseridos!', 'Sucesso!', 'success');
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/' + that.funcionario.idEmpresaFuncionario).then(function (response) {
            that.complementares = response.data;
            that.$refs.modalIncluir.hide(); // console.log(that.complementares);
            // that.$refs.modalComplementar.show();

            that.abrirSolicitacoes();
          });
        });
      });
    },
    fechar: function fechar() {}
  },
  mounted: function mounted() {
    this.mensagem = 'Carregando empregados...';
    var that = this;
    axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
      that.funcionarios = response.data;
    });
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
      that.temporarios = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.titulo[data-v-300f1410] {\n    text-align: center;\n    background-color: #00a65a;\n    padding: 6px;\n    color: white;\n    font-size: 17px;\n    margin-top: 5px;\n}\n.form-remove[type=\"date\"][data-v-300f1410]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "sig", attrs: { "no-body": "" } },
        [
          _c(
            "b-tabs",
            { attrs: { pills: "", card: "" } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Ativos", active: "" } },
                [
                  _c("b-card-text", { attrs: { id: "tabelaEmpregados" } }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
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
                                          return _vm.abrir(funcionario)
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(funcionario.pessoa.idPessoa)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(funcionario.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(funcionario.pessoa.nomePessoa)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(funcionario.pessoa.cpf))
                                      ]),
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
                                              funcionario.ambienteTrabalho
                                                .estabelecimento
                                            )
                                          ) +
                                            "\n                                            -\n                                            " +
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
                                          _vm._s(
                                            _vm.formataSexo(
                                              funcionario.pessoa.sexo
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(funcionario.ano) +
                                            "A, " +
                                            _vm._s(funcionario.mes) +
                                            "M,\n                                            " +
                                            _vm._s(funcionario.dia) +
                                            "D"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            funcionario.empresaContrato
                                              .empresaContratante.nomeFantasia
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
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Temporários" } },
                [
                  _c("b-card-text", [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "box-body box-empregados table-responsive"
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass:
                                "table table-hover table-striped table-empregados"
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
                                _vm._l(_vm.temporarios, function(temporario) {
                                  return _c(
                                    "tr",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.abrir(temporario)
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(temporario.pessoa.idPessoa)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(temporario.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(temporario.pessoa.nomePessoa)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(temporario.pessoa.cpf))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("moment")(
                                              temporario.dataInicial,
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
                                              temporario.dataFuncao,
                                              "DD/MM/Y"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(temporario.funcao.cargo))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formataEstabelecimento(
                                              temporario.ambienteTrabalho
                                                .estabelecimento
                                            )
                                          ) +
                                            "\n                                            -\n                                            " +
                                            _vm._s(
                                              temporario.ambienteTrabalho
                                                .nomeAmbienteTrabalho
                                            )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("moment")(
                                              temporario.pessoa.dataNascimento,
                                              "DD/MM/Y"
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.formataSexo(
                                              temporario.pessoa.sexo
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(temporario.ano) +
                                            "A, " +
                                            _vm._s(temporario.mes) +
                                            "M,\n                                            " +
                                            _vm._s(temporario.dia) +
                                            "D"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            temporario.empresaContrato
                                              .empresaContratante.nomeFantasia
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
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalComplementar",
          attrs: {
            size: "xl",
            centered: "",
            "hide-footer": true,
            title: "Exames Complementar",
            id: "modal1"
          }
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
                      value: _vm.funcionario.matricula,
                      expression: "funcionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.matricula },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
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
                      value: _vm.funcionario.pessoa.cpf,
                      expression: "funcionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.cpf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "cpf",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.nomePessoa,
                      expression: "funcionario.pessoa.nomePessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.nomePessoa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "nomePessoa",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Nasc.")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.dataNascimento,
                      expression: "funcionario.pessoa.dataNascimento"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.pessoa.dataNascimento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "dataNascimento",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Idade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.idade,
                      expression: "idade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.idade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.idade = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Adm")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.dataInicial,
                      expression: "funcionario.dataInicial"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.dataInicial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
                        "dataInicial",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", { staticClass: "titulo" }, [
                _vm._v("Histórico de Exames")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 mb-3" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  on: { click: _vm.abrirSolicitacoes }
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v(" Adicionar Exame")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ID SIGSST")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("eSocial")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Exame")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Data")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Ordem do Exame")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Indicação dos Resultados")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Grau")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("PDF")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.complementares, function(complement) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(complement.exame.idExame))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(complement.exame.tabela27))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(complement.exame.nomeExame))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(complement.dataExame, "DD/MM/YYYY")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(complement.ordemExame))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(complement.indicacaoResultado))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(complement.situacao))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                return _vm.pdf(complement)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: "/img/pdf.png", width: "21px" }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-danger btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.remover(complement)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.editar(complement)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-pencil-alt" })]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalSolicitacoes",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Novo Exame Solicitacao",
            id: "modal1"
          }
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
                      value: _vm.funcionario.matricula,
                      expression: "funcionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.matricula },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
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
                      value: _vm.funcionario.pessoa.cpf,
                      expression: "funcionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.cpf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "cpf",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.nomePessoa,
                      expression: "funcionario.pessoa.nomePessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.nomePessoa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "nomePessoa",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Nasc.")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.dataNascimento,
                      expression: "funcionario.pessoa.dataNascimento"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.pessoa.dataNascimento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "dataNascimento",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Idade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.idade,
                      expression: "idade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.idade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.idade = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Adm")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.dataInicial,
                      expression: "funcionario.dataInicial"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.dataInicial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
                        "dataInicial",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", { staticClass: "titulo" }, [
                _vm._v("Lista de Exames Solicitados")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ID SIGSST")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("eSocial")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("N. Solicitacao")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Data")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Exame")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.solicitacoes, function(solicitacao) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(solicitacao.idExame))]),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(solicitacao.data, "DD/MM/YYYY")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(solicitacao.nomeExame))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.incluir(solicitacao)
                              }
                            }
                          },
                          [_vm._v("Incluir")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalSemSolicitacao",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Novo Exame"
          }
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
                      value: _vm.funcionario.matricula,
                      expression: "funcionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.matricula },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
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
                      value: _vm.funcionario.pessoa.cpf,
                      expression: "funcionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.cpf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "cpf",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.nomePessoa,
                      expression: "funcionario.pessoa.nomePessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.nomePessoa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "nomePessoa",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Nasc.")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.dataNascimento,
                      expression: "funcionario.pessoa.dataNascimento"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.pessoa.dataNascimento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "dataNascimento",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Idade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.idade,
                      expression: "idade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.idade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.idade = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Adm")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.dataInicial,
                      expression: "funcionario.dataInicial"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.dataInicial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
                        "dataInicial",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", { staticClass: "titulo" }, [
                _vm._v("Lista de Exames Solicitados")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ID SIGSST")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Exame")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.exames, function(exame) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(exame.idExame))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(exame.nomeExame))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.incluir(exame)
                              }
                            }
                          },
                          [_vm._v("Incluir")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalIncluir",
          attrs: {
            size: "xl",
            centered: "",
            "cancel-title": "Fechar",
            title: "Incluir novo exame",
            id: "modal1"
          },
          on: { ok: _vm.salvarNovo, cancel: _vm.cancelarNovo }
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
                      value: _vm.funcionario.matricula,
                      expression: "funcionario.matricula"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.matricula },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
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
                      value: _vm.funcionario.pessoa.cpf,
                      expression: "funcionario.pessoa.cpf"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.cpf },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "cpf",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.nomePessoa,
                      expression: "funcionario.pessoa.nomePessoa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.funcionario.pessoa.nomePessoa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "nomePessoa",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Nasc.")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.pessoa.dataNascimento,
                      expression: "funcionario.pessoa.dataNascimento"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.pessoa.dataNascimento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario.pessoa,
                        "dataNascimento",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Idade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.idade,
                      expression: "idade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.idade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.idade = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Adm")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcionario.dataInicial,
                      expression: "funcionario.dataInicial"
                    }
                  ],
                  staticClass: "form-control form-remove",
                  attrs: { type: "date", disabled: "" },
                  domProps: { value: _vm.funcionario.dataInicial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcionario,
                        "dataInicial",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Exame")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.complementar.data,
                      expression: "complementar.data"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date", min: _vm.solicitacao.data },
                  domProps: { value: _vm.complementar.data },
                  on: {
                    blur: _vm.verificaData,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.complementar, "data", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Exame")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.complementar.exame.nomeExame,
                      expression: "complementar.exame.nomeExame"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.complementar.exame.nomeExame },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.complementar.exame,
                        "nomeExame",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm.funcionario.pessoa.sexo == "MASCULINO"
              ? _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("H. Min")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.complementar.exame.referenciaMinMasculino,
                          expression:
                            "complementar.exame.referenciaMinMasculino"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value: _vm.complementar.exame.referenciaMinMasculino
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.complementar.exame,
                            "referenciaMinMasculino",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.funcionario.pessoa.sexo == "MASCULINO"
              ? _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("H. Max")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.complementar.exame.referenciaMaxMasculino,
                          expression:
                            "complementar.exame.referenciaMaxMasculino"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value: _vm.complementar.exame.referenciaMaxMasculino
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.complementar.exame,
                            "referenciaMaxMasculino",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.funcionario.pessoa.sexo == "FEMININO"
              ? _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("M. Min")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.complementar.exame.referenciaMinFeminino,
                          expression: "complementar.exame.referenciaMinFeminino"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value: _vm.complementar.exame.referenciaMinFeminino
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.complementar.exame,
                            "referenciaMinFeminino",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.funcionario.pessoa.sexo == "FEMININO"
              ? _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("M. Max")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.complementar.exame.referenciaMaxFeminino,
                          expression: "complementar.exame.referenciaMaxFeminino"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: {
                        value: _vm.complementar.exame.referenciaMaxFeminino
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.complementar.exame,
                            "referenciaMaxFeminino",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Resultado")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "span",
                      {
                        staticClass: "input-group-text",
                        attrs: { id: "basic-addon2" }
                      },
                      [_vm._v(_vm._s(_vm.complementar.exame.unidadeMedida))]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Ordem do Exame")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.complementar.ordemExame,
                        expression: "complementar.ordemExame"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: "" },
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
                          _vm.complementar,
                          "ordemExame",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "INICIAL" } }, [
                      _vm._v("Inicial")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "SEQUENCIAL" } }, [
                      _vm._v("Sequencial")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Indicação do Resultado")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.complementar.indicacaoResultado,
                        expression: "complementar.indicacaoResultado"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.complementar,
                            "indicacaoResultado",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.mudouIndicacao
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "NORMAL" } }, [
                      _vm._v("Normal")
                    ]),
                    _vm._v(" "),
                    (_vm.historico.length > 0 &&
                      _vm.historico[_vm.historico.length - 1]
                        .indicacaoResultado != "ALTERADO" &&
                      _vm.historico[_vm.historico.length - 1]
                        .indicacaoResultado != "ESTÁVEL") ||
                    _vm.complementar.ordemExame == "INICIAL"
                      ? _c("option", { attrs: { value: "ALTERADO" } }, [
                          _vm._v("Alterado")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.complementar.ordemExame != "INICIAL" &&
                    _vm.historico.length > 0 &&
                    _vm.historico[_vm.historico.length - 1]
                      .indicacaoResultado != "NORMAL"
                      ? _c("option", { attrs: { value: "ESTÁVEL" } }, [
                          _vm._v("Estável")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.complementar.ordemExame != "INICIAL" &&
                    _vm.historico.length > 0 &&
                    _vm.historico[_vm.historico.length - 1]
                      .indicacaoResultado != "NORMAL" &&
                    _vm.historico[_vm.historico.length - 1]
                      .indicacaoResultado != "AGRAVAMENTO"
                      ? _c("option", { attrs: { value: "AGRAVAMENTO" } }, [
                          _vm._v("Agravamento")
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Grau")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.complementar.grau,
                        expression: "complementar.grau"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      disabled: _vm.complementar.indicacaoResultado == "NORMAL"
                    },
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
                          _vm.complementar,
                          "grau",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _vm.complementar.indicacaoResultado == "NORMAL"
                      ? _c("option", { attrs: { value: "NORMAL" } }, [
                          _vm._v("Normal")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.complementar.indicacaoResultado != "NORMAL"
                      ? _c("option", { attrs: { value: "ALTERADO_LEVE" } }, [
                          _vm._v("Leve")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.complementar.indicacaoResultado != "NORMAL"
                      ? _c(
                          "option",
                          { attrs: { value: "ALTERADO_MODERADO" } },
                          [_vm._v("Moderado")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.complementar.indicacaoResultado != "NORMAL"
                      ? _c("option", { attrs: { value: "ALTERADO_SEVERO" } }, [
                          _vm._v("Severo")
                        ])
                      : _vm._e()
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 mt-4" }, [
              _c("span", { staticStyle: { display: "none" } }, [
                _vm._v(_vm._s(_vm.temPdf))
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "file",
                staticStyle: { display: "none" },
                attrs: { type: "file", id: "file" },
                on: { change: _vm.handleFileUpload }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                !_vm.complementar.caminhoPdf
                  ? _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn pull-right btn-success btn-block",
                          on: { click: _vm.abrirUpload }
                        },
                        [
                          _c("i", { staticClass: "fa fa-upload" }),
                          _vm._v(" Inserir PDF")
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm.complementar.caminhoPdf
                  ? _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn pull-right btn-success btn-block",
                          on: { click: _vm.abrirUpload }
                        },
                        [
                          _c("i", { staticClass: "fa fa-upload" }),
                          _vm._v(" Atualizar PDF")
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.complementar.caminhoPdf
                  ? _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn pull-right btn-success btn-block",
                          on: {
                            click: function($event) {
                              return _vm.pdf(_vm.complementar)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-upload" }),
                          _vm._v(" Visualizar PDF")
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Descrição do Resultado")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.complementar.observacao,
                      expression: "complementar.observacao"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.complementar.observacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.complementar,
                        "observacao",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", { staticClass: "titulo" }, [
                _vm._v("Histórico de Exames")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ID SIGSST")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("eSocial")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Exame")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Data")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Ordem do Exame")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Indicação dos Resultados")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Grau")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("PDF")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.historico, function(historic) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(historic.exame.idExame))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(historic.exame.tabela27))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(historic.exame.nomeExame))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(historic.dataExame, "DD/MM/YYYY")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(historic.ordemExame))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(historic.indicacaoResultado))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(historic.situacao))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                return _vm.pdf(historic)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: "/img/pdf.png", width: "21px" }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("\n            Exames Complementares\n            "),
        _c("small", [_vm._v("Listagem")])
      ]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-home" }),
            _vm._v(" Início")
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Medicina")])]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Exames Complementares")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/medicina/ExamesComplementaresComponente.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/medicina/ExamesComplementaresComponente.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true& */ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true&");
/* harmony import */ var _ExamesComplementaresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamesComplementaresComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& */ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExamesComplementaresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "300f1410",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/medicina/ExamesComplementaresComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComplementaresComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=style&index=0&id=300f1410&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_style_index_0_id_300f1410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ExamesComplementaresComponente.vue?vue&type=template&id=300f1410&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComplementaresComponente_vue_vue_type_template_id_300f1410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);