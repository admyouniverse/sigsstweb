(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["empresa"],
  data: function data() {
    return {
      funcionarios: [],
      inativos: [],
      temporarios: [],
      afastados: [],
      carregando: false,
      clinicas: [],
      examinadores: [],
      mensagem: "Carregando...",
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      aso: {
        idAsoSolicitacao: 0,
        empresaFuncionario: {
          pessoa: {
            cidadeNatal: {}
          },
          ambienteTrabalho: {},
          empresaContrato: {
            empresaContratante: {}
          },
          funcao: {}
        },
        clinica: {},
        medicoExaminador: {}
      },
      tipo: ""
    };
  },
  computed: {
    hoje: function hoje() {
      var currentDate = new Date();
      console.log(currentDate);
      var y = currentDate.getFullYear();
      var m = currentDate.getMonth() + 1;
      var d = currentDate.getDate();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  },
  methods: {
    idade: function idade(nascimentoPessoa) {
      var nascimento = new Date(nascimentoPessoa);
      var hoje = new Date();
      var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
      if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) diferencaAnos--;
      return diferencaAnos;
    },
    formataEstabelecimento: function formataEstabelecimento(estabelecimento) {
      if (estabelecimento == "PRÓPRIO") {
        return "P";
      } else if (estabelecimento == "TERCEIROS") {
        return "T";
      } else if (estabelecimento == "SERVIÇOS_TERCEIROS") {
        return "ST";
      }
    },
    formataTipo: function formataTipo(tipo) {
      if (tipo == "ADMISSIONAL") {
        return "Adm";
      } else if (tipo == "DEMISSIONAL") {
        return "Dem";
      } else if (tipo == "MUDANÇA_DE_FUNÇÃO") {
        return "M. Fun";
      } else if (tipo == "MUDANÇA_DE_CONTRATANTE") {
        return "M. Con";
      } else if (tipo == "TRANSFERÊNCIA") {
        return "Trans";
      }
    },
    formataSexo: function formataSexo(sexo) {
      if (sexo == "MASCULINO") {
        return "M";
      } else if (sexo == "FEMININO") {
        return "F";
      }
    },
    salvar: function salvar() {},
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    abrir: function abrir(funcionario, tipo) {
      this.tipo = tipo;

      if (tipo == "temporario") {
        this.aso.idAsoSolicitacao = 0;
        this.aso.empresaFuncionario = funcionario;
        this.aso.tipoAtestado = "ADMISSIONAL";
        this.aso.data = this.hoje;
        var that = this;
        this.carregar("Carregando dados...");
        axios.post("/atestado-saude-ocupacional/ultimo", {
          empresa: this.empresa.idEmpresa,
          contrato: this.aso.empresaFuncionario.empresaContrato.idEmpresaContrato,
          data: this.aso.data,
          idOrigem: this.aso.empresaFuncionario.ambienteTrabalho.idOrigem
        }).then(function (response) {
          setTimeout(function () {
            if (response.data != "") {
              that.aso.pcmso = response.data.pcmso;
              console.log("retorno", response.data);
              that.examinadores = response.data.examinadores;
              axios.get("http://34.69.79.135:8080/" + "ServicoSIGSSO/rest/pcmso-historico-revisoes/listaPorIdPcmso/" + that.aso.pcmso.idPcmso).then(function (response) {
                that.aso.medicoCoordenador = response.data[0].empresaProfissional;
                that.carregando = false;
                that.$refs.modalAdmissional.show();
              });
            } else {
              that.carregando = false;
              that.$alert("Não há PCMSO nesta data e com este contrato.", "Atenção!", "error");
            }
          }, 500);
        });
      }
    },
    listaTemporarios: function listaTemporarios() {
      var that = this;
      this.carregar("Listando temporários...");
      axios.get("http://34.69.79.135:8080/" + "ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/" + that.empresa.idEmpresa).then(function (response) {
        that.temporarios = response.data;
        that.carregando = false;
      });
    }
  },
  mounted: function mounted() {
    this.carregar("Carregando empregados ativos...");
    var that = this;
    axios.get("http://34.69.79.135:8080/" + "ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAtivosPorIdEmpresa/" + that.empresa.idEmpresa).then(function (response) {
      that.funcionarios = response.data;
      that.carregando = false;
    }); // axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/empresaFuncionarios/listaDemitidosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
    //     that.inativos = response.data;
    // });
    // axios.get(process.env.MIX_APP_API + 'ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosAfastadosAtivosPorIdEmpresa/' + that.empresa.idEmpresa).then(function (response) {
    //     that.afastados = response.data;
    // });
    // axios.get('/tabelas/clinica/list').then(function (response) {
    //     that.clinicas = response.data;
    // });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header .close[data-v-4877a992] {\n  position: absolute;\n  right: 15px;\n  z-index: 1000;\n}\n.selecionar[data-v-4877a992] {\n  cursor: pointer;\n}\n.selecionado[data-v-4877a992] {\n  background-color: #71bb66;\n}\n.form-group[data-v-4877a992] {\n  margin-bottom: 0.5rem;\n}\n.input-warning[data-v-4877a992] {\n  background-color: #fce3bd;\n}\n.nowrap[data-v-4877a992] {\n  white-space: nowrap;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "content" },
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
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
                                          return _vm.abrir(funcionario, "ativo")
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              funcionario.pessoa.idPessoa
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(funcionario.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              funcionario.pessoa.nomePessoa
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(funcionario.pessoa.cpf) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.dataFuncao,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(funcionario.funcao.cargo) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
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
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                funcionario.pessoa
                                                  .dataNascimento,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataSexo(
                                                funcionario.pessoa.sexo
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(funcionario.ano) +
                                            "A,\n                                            " +
                                            _vm._s(funcionario.mes) +
                                            "M,\n                                            " +
                                            _vm._s(funcionario.dia) +
                                            "D\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              funcionario.empresaContrato
                                                .empresaContratante.nomeFantasia
                                            ) +
                                            "\n                                        "
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
                {
                  attrs: { title: "Temporários" },
                  on: { click: _vm.listaTemporarios }
                },
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
                                _vm._l(_vm.temporarios, function(temporario) {
                                  return _c(
                                    "tr",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.abrir(
                                            temporario,
                                            "temporario"
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(temporario.pessoa.idPessoa) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(temporario.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              temporario.pessoa.nomePessoa
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(temporario.pessoa.cpf))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                temporario.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                temporario.dataFuncao,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(temporario.funcao.cargo) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
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
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                temporario.pessoa
                                                  .dataNascimento,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataSexo(
                                                temporario.pessoa.sexo
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(temporario.ano) +
                                            "A,\n                                            " +
                                            _vm._s(temporario.mes) +
                                            "M,\n                                            " +
                                            _vm._s(temporario.dia) +
                                            "D\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              temporario.empresaContrato
                                                .empresaContratante.nomeFantasia
                                            ) +
                                            "\n                                        "
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
                { attrs: { title: "Afastados" } },
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
                                _vm._l(_vm.afastados, function(afastado) {
                                  return _c(
                                    "tr",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.abrir(afastado, "afastado")
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(afastado.pessoa.idPessoa) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(afastado.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(afastado.pessoa.nomePessoa) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(afastado.pessoa.cpf))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                afastado.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                afastado.dataFuncao,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(afastado.funcao.cargo))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataEstabelecimento(
                                                afastado.ambienteTrabalho
                                                  .estabelecimento
                                              )
                                            ) +
                                            "\n                                            -\n                                            " +
                                            _vm._s(
                                              afastado.ambienteTrabalho
                                                .nomeAmbienteTrabalho
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                afastado.pessoa.dataNascimento,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataSexo(
                                                afastado.pessoa.sexo
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(afastado.ano) +
                                            "A,\n                                            " +
                                            _vm._s(afastado.mes) +
                                            "M,\n                                            " +
                                            _vm._s(afastado.dia) +
                                            "D\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              afastado.empresaContrato
                                                .empresaContratante.nomeFantasia
                                            ) +
                                            "\n                                        "
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
                { attrs: { title: "Inativos" } },
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
                                _vm._l(_vm.inativos, function(inativo) {
                                  return _c(
                                    "tr",
                                    {
                                      staticStyle: { cursor: "pointer" },
                                      on: {
                                        click: function($event) {
                                          return _vm.abrir(inativo, "inativo")
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(inativo.pessoa.idPessoa) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(inativo.matricula))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(inativo.pessoa.nomePessoa) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(inativo.pessoa.cpf))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                inativo.dataInicial,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                inativo.dataFuncao,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(inativo.funcao.cargo))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataEstabelecimento(
                                                inativo.ambienteTrabalho
                                                  .estabelecimento
                                              )
                                            ) +
                                            "\n                                            -\n                                            " +
                                            _vm._s(
                                              inativo.ambienteTrabalho
                                                .nomeAmbienteTrabalho
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("moment")(
                                                inativo.pessoa.dataNascimento,
                                                "DD/MM/Y"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.formataSexo(
                                                inativo.pessoa.sexo
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(inativo.ano) +
                                            "A,\n                                            " +
                                            _vm._s(inativo.mes) +
                                            "M,\n                                            " +
                                            _vm._s(inativo.dia) +
                                            "D\n                                        "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              inativo.empresaContrato
                                                .empresaContratante.nomeFantasia
                                            ) +
                                            "\n                                        "
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
          ref: "modalAdmissional",
          attrs: {
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            size: "xl",
            title: "",
            centered: "",
            id: "modalAdmissional"
          },
          on: { ok: _vm.salvar },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
                return [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Fechar"
                      },
                      on: {
                        click: function($event) {
                          return close()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row d-flex" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-12 justify-content-center align-self-center"
                      },
                      [_c("h5", [_vm._v("Atestado de Saúde Ocupacional")])]
                    )
                  ])
                ]
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                var hide = ref.hide
                return [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "success" },
                      on: {
                        click: function($event) {
                          return ok()
                        }
                      }
                    },
                    [_vm._v("\n                Próximo\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "danger" },
                      on: {
                        click: function($event) {
                          return cancel()
                        }
                      }
                    },
                    [_vm._v("\n                Fechar\n            ")]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sig-modal" },
            [
              _c(
                "b-tabs",
                { attrs: { "content-class": "mt-3", fill: "" } },
                [
                  _c("b-tab", { attrs: { title: "Dados", active: "" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [_vm._v("Tipo")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              disabled: "",
                              value: "Admissional"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Data E. Clinico")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.data,
                                expression: "aso.data"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date" },
                            domProps: { value: _vm.aso.data },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.aso, "data", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-1" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("ID Pessoa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.aso.empresaFuncionario.pessoa.idPessoa,
                                expression:
                                  "\n                                        aso.empresaFuncionario.pessoa\n                                            .idPessoa\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { disabled: "", type: "text" },
                            domProps: {
                              value: _vm.aso.empresaFuncionario.pessoa.idPessoa
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario.pessoa,
                                  "idPessoa",
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
                                value:
                                  _vm.aso.empresaFuncionario.pessoa.nomePessoa,
                                expression:
                                  "\n                                        aso.empresaFuncionario.pessoa\n                                            .nomePessoa\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.aso.empresaFuncionario.pessoa.nomePessoa
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario.pessoa,
                                  "nomePessoa",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Idade")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.idade(
                                _vm.aso.empresaFuncionario.pessoa.dataNascimento
                              )
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Gênero")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.empresaFuncionario.pessoa.sexo,
                                expression:
                                  "\n                                        aso.empresaFuncionario.pessoa.sexo\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.aso.empresaFuncionario.pessoa.sexo
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario.pessoa,
                                  "sexo",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("ID ASO")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.idAsoSolicitacao,
                                expression: "aso.idAsoSolicitacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.aso.idAsoSolicitacao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso,
                                  "idAsoSolicitacao",
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
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.empresaFuncionario.pessoa.cpf,
                                expression:
                                  "\n                                        aso.empresaFuncionario.pessoa.cpf\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.aso.empresaFuncionario.pessoa.cpf
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario.pessoa,
                                  "cpf",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Matricula")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.empresaFuncionario.matricula,
                                expression:
                                  "\n                                        aso.empresaFuncionario.matricula\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.aso.empresaFuncionario.matricula
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario,
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Data Adm")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", value: "NA", disabled: "" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-1" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "nowrap" }, [
                            _vm._v("T. Empresa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", value: "NA", disabled: "" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-1" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("T. Cargo")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", value: "NA", disabled: "" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Válido Até")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "date" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Naturalidade")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.aso.empresaFuncionario.pessoa.cidadeNatal
                                    .nomeCidade +
                                  " - " +
                                  _vm.aso.empresaFuncionario.pessoa.cidadeNatal
                                    .uf,
                                expression:
                                  "\n                                        aso.empresaFuncionario.pessoa\n                                            .cidadeNatal.nomeCidade +\n                                            ' - ' +\n                                            aso.empresaFuncionario.pessoa\n                                                .cidadeNatal.uf\n                                    "
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.aso.empresaFuncionario.pessoa.cidadeNatal
                                  .nomeCidade +
                                " - " +
                                _vm.aso.empresaFuncionario.pessoa.cidadeNatal.uf
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aso.empresaFuncionario.pessoa.cidadeNatal
                                    .nomeCidade +
                                    " - " +
                                    _vm.aso.empresaFuncionario.pessoa
                                      .cidadeNatal,
                                  "uf",
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
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Contrato")
                          ]),
                          _vm._v(" "),
                          _vm.aso.empresaFuncionario.empresaContrato
                            .empresaContratante
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.aso.empresaFuncionario.empresaContrato
                                        .empresaContratante.nomeFantasia,
                                    expression:
                                      "\n                                        aso.empresaFuncionario\n                                            .empresaContrato\n                                            .empresaContratante.nomeFantasia\n                                    "
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", disabled: "" },
                                domProps: {
                                  value:
                                    _vm.aso.empresaFuncionario.empresaContrato
                                      .empresaContratante.nomeFantasia
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.aso.empresaFuncionario.empresaContrato
                                        .empresaContratante,
                                      "nomeFantasia",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Ambiente de Trabalho")
                          ]),
                          _vm._v(" "),
                          _vm.aso.empresaFuncionario.ambienteTrabalho
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.aso.empresaFuncionario
                                        .ambienteTrabalho.idOrigem +
                                      " - " +
                                      _vm.aso.empresaFuncionario
                                        .ambienteTrabalho.nomeAmbienteTrabalho,
                                    expression:
                                      "\n                                        aso.empresaFuncionario\n                                            .ambienteTrabalho.idOrigem +\n                                            ' - ' +\n                                            aso.empresaFuncionario\n                                                .ambienteTrabalho\n                                                .nomeAmbienteTrabalho\n                                    "
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", disabled: "" },
                                domProps: {
                                  value:
                                    _vm.aso.empresaFuncionario.ambienteTrabalho
                                      .idOrigem +
                                    " - " +
                                    _vm.aso.empresaFuncionario.ambienteTrabalho
                                      .nomeAmbienteTrabalho
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.aso.empresaFuncionario
                                        .ambienteTrabalho.idOrigem +
                                        " - " +
                                        _vm.aso.empresaFuncionario
                                          .ambienteTrabalho,
                                      "nomeAmbienteTrabalho",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Cargo")
                          ]),
                          _vm._v(" "),
                          _vm.aso.empresaFuncionario.funcao
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.aso.empresaFuncionario.funcao.cargo,
                                    expression:
                                      "\n                                        aso.empresaFuncionario.funcao.cargo\n                                    "
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", disabled: "" },
                                domProps: {
                                  value: _vm.aso.empresaFuncionario.funcao.cargo
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.aso.empresaFuncionario.funcao,
                                      "cargo",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-2" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Clínica")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.clinica,
                                expression: "aso.clinica"
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
                                  _vm.aso,
                                  "clinica",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.clinicas, function(clinica) {
                            return _c(
                              "option",
                              { domProps: { value: clinica } },
                              [_vm._v(_vm._s(clinica.nomeFantasiaClinica))]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Medico Examinador")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aso.medicoExaminador,
                                expression: "aso.medicoExaminador"
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
                                  _vm.aso,
                                  "medicoExaminador",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.examinadores, function(examinador) {
                            return _c(
                              "option",
                              { domProps: { value: examinador } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(examinador.titulo) +
                                    "\n                                    " +
                                    _vm._s(examinador.pessoa.nomePessoa)
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Observação")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "1.8rem" }
                        },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-block btn-success" },
                            [
                              _c("i", { staticClass: "fas fa-eye" }),
                              _vm._v(
                                " Recomendação do\n                                PCMSO\n                            "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-3",
                          staticStyle: { "margin-top": "1.8rem" }
                        },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-success btn-block" },
                            [
                              _c("i", { staticClass: "fas fa-eye" }),
                              _vm._v(
                                " Anotações no\n                                Prontuário\n                            "
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-3" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _vm.aso.medicoCoordenador
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "alert alert-dark p-2 text-center w-100"
                              },
                              [
                                _vm._v(
                                  "\n                                Médico Responsável pelo PCMSO V\n                                " +
                                    _vm._s(_vm.aso.pcmso.versao) +
                                    " de\n                                " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        _vm.aso.pcmso.dataHora,
                                        "DD/MM/YYYY"
                                      )
                                    ) +
                                    "\n                                Dr.\n                                " +
                                    _vm._s(
                                      _vm.aso.medicoCoordenador.pessoa
                                        .nomePessoa
                                    ) +
                                    "\n                                - CRM/" +
                                    _vm._s(_vm.aso.medicoCoordenador.uf) +
                                    "\n                                " +
                                    _vm._s(
                                      _vm.aso.medicoCoordenador.numeroRegistro
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", {
                    attrs: {
                      title: "Fatores de Risco",
                      disabled: _vm.aso.idAsoSolicitacao == 0
                    }
                  }),
                  _vm._v(" "),
                  _c("b-tab", {
                    attrs: {
                      title: "Exames Complementares",
                      disabled: _vm.aso.idAsoSolicitacao == 0
                    }
                  }),
                  _vm._v(" "),
                  _c("b-tab", {
                    attrs: {
                      title: "Anamnese",
                      disabled: _vm.aso.idAsoSolicitacao == 0
                    }
                  })
                ],
                1
              )
            ],
            1
          )
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
        _vm._v("\n            Atestado de Saúde Ocupacional\n            "),
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
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Medicina ")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Aso")])])
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

/***/ "./resources/js/components/medicina/AsoComponente.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/medicina/AsoComponente.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsoComponente.vue?vue&type=template&id=4877a992&scoped=true& */ "./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true&");
/* harmony import */ var _AsoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsoComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& */ "./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AsoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4877a992",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/medicina/AsoComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AsoComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=style&index=0&id=4877a992&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_style_index_0_id_4877a992_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AsoComponente.vue?vue&type=template&id=4877a992&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/AsoComponente.vue?vue&type=template&id=4877a992&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AsoComponente_vue_vue_type_template_id_4877a992_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);