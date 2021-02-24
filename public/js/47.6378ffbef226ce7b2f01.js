(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['prontuario', 'empresa'],
  data: function data() {
    return {
      gruposControle: [],
      grupoControle: {
        idProntuarioGrupoControle: 0,
        grupoControle: {},
        prontuario: 0,
        dataIni: "",
        dataFim: "",
        caminhoPdf: ""
      },
      grupos: []
    };
  },
  computed: {
    idade: function idade() {
      var nascimento = new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento);
      var hoje = new Date();
      var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
      if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) diferencaAnos--;
      console.log(diferencaAnos);
      return diferencaAnos;
    }
  },
  methods: {
    mudouAfastamento: function mudouAfastamento() {
      var inicial = new Date(this.grupoControle.dataIni);
      var dataProntuario = new Date(this.prontuario.dataIni);

      if (inicial < dataProntuario) {
        this.$alert('Data de grupo deve ser maior ou igual a data inicial do prontuário', 'Ops!', 'error');
        this.grupoControle.dataIni = this.prontuario.dataIni;
      } else {
        if (this.gruposControle.length > 0) {
          var dataUltimo = new Date(this.gruposControle[this.gruposControle.length - 1].dataFim);

          if (inicial < dataUltimo) {
            this.$alert('Data de grupo deve ser maior ou igual a data de retorno do último grupo', 'Ops!', 'error');
            this.grupoControle.dataIni = this.gruposControle[this.gruposControle.length - 1].dataFim;
          }
        }
      }
    },
    mudouRetorno: function mudouRetorno() {
      if (this.grupoControle.dataFim) {
        var grupo = new Date(this.grupoControle.dataIni);
        var retorno = new Date(this.grupoControle.dataFim);

        if (retorno < grupo) {
          this.grupoControle.dataFim = null;
          this.$alert('Data final deve ser maior que a data inicial de grupo', 'Ops!', 'error');
        }
      }
    },
    dias: function dias(grupo) {
      var inicial = new Date(grupoControle.dataIni);

      if (grupoControle.dataFim) {
        var _final = new Date(grupoControle.dataFim);
      } else {
        var _final = new Date();
      }

      var diff = Math.abs(inicial.getTime() - _final.getTime());
      return Math.ceil(diff / (1000 * 60 * 60 * 24)) + ' dias';
    },
    incluir: function incluir() {
      this.$refs.modalAfastamento.show();
    },
    salvar: function salvar() {
      var that = this;
      axios.post('/prontuario-medico/grupo', {
        prontuario: that.prontuario,
        grupo: that.grupoControle
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
          that.gruposControle = response.data;
        });
      });
    },
    editar: function editar(grupo) {
      this.grupo = grupo;
      console.log(this.grupo);
      this.$refs.modalAfastamento.show();
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/' + this.prontuario.idProntuario).then(function (response) {
      that.gruposControle = response.data;
      console.log('grupos', that.gruposControle);
    });
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grupos-controle').then(function (response) {
      that.grupos = response.data;
      console.log(that.grupos);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.titulo[data-v-03addcca] {\n    text-align: center;\n    background-color: #00a65a;\n    padding: 6px;\n    color: white;\n    font-size: 17px;\n    margin-top: 5px;\n}\n.form-remove[type=\"date\"][data-v-03addcca]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
                  value: _vm.prontuario.empresaFuncionario.matricula,
                  expression: "prontuario.empresaFuncionario.matricula"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: "", type: "text" },
              domProps: { value: _vm.prontuario.empresaFuncionario.matricula },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.prontuario.empresaFuncionario,
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
                  value: _vm.prontuario.empresaFuncionario.pessoa.cpf,
                  expression: "prontuario.empresaFuncionario.pessoa.cpf"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: "", type: "text" },
              domProps: { value: _vm.prontuario.empresaFuncionario.pessoa.cpf },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.prontuario.empresaFuncionario.pessoa,
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
                  value: _vm.prontuario.empresaFuncionario.pessoa.nomePessoa,
                  expression: "prontuario.empresaFuncionario.pessoa.nomePessoa"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: "", type: "text" },
              domProps: {
                value: _vm.prontuario.empresaFuncionario.pessoa.nomePessoa
              },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.prontuario.empresaFuncionario.pessoa,
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
                  value:
                    _vm.prontuario.empresaFuncionario.pessoa.dataNascimento,
                  expression:
                    "prontuario.empresaFuncionario.pessoa.dataNascimento"
                }
              ],
              staticClass: "form-control form-remove",
              attrs: { type: "date", disabled: "" },
              domProps: {
                value: _vm.prontuario.empresaFuncionario.pessoa.dataNascimento
              },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.prontuario.empresaFuncionario.pessoa,
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
            _c("label", { attrs: { for: "" } }, [_vm._v("Data Inicial")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.prontuario.dataIni,
                  expression: "prontuario.dataIni"
                }
              ],
              staticClass: "form-control form-remove",
              attrs: { type: "date", disabled: "" },
              domProps: { value: _vm.prontuario.dataIni },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.prontuario, "dataIni", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success btn-sm mb-2",
              attrs: {
                disabled:
                  _vm.gruposControle.length > 0 &&
                  !_vm.gruposControle[_vm.gruposControle.length - 1].dataRetorno
              },
              on: { click: _vm.incluir }
            },
            [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Adicionar")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover table-striped table-empregados",
              attrs: { id: "tabelaListagemEmpregados" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.gruposControle, function(grupoControle) {
                  return _c("tr", [
                    _c("td", [
                      _vm._v(_vm._s(grupoControle.idProntuarioGrupoControle))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(grupoControle.grupoControle.nome))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(grupoControle.dataIni, "DD/MM/YYYY")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(grupoControle.dataFim, "DD/MM/YYYY")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.dias(grupoControle)))]),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          on: {
                            click: function($event) {
                              return _vm.editar(_vm.grupo)
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
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalAfastamento",
          attrs: {
            size: "lg",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Grupo de Controle",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: { ok: _vm.salvar }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.grupoControle.idProntuarioGrupoControle,
                      expression: "grupoControle.idProntuarioGrupoControle"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: {
                    value: _vm.grupoControle.idProntuarioGrupoControle
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.grupoControle,
                        "idProntuarioGrupoControle",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-10" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Grupo de Controle")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.grupoControle.grupoControle,
                        expression: "grupoControle.grupoControle"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
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
                          _vm.grupoControle,
                          "grupoControle",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.grupos, function(grupo) {
                    return _c("option", { domProps: { value: grupo } }, [
                      _vm._v(_vm._s(grupo.nome))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Inicial")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.grupoControle.dataIni,
                      expression: "grupoControle.dataIni"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.grupoControle.dataIni },
                  on: {
                    blur: function($event) {
                      return _vm.mudouAfastamento()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.grupoControle,
                        "dataIni",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Retorno")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.grupoControle.dataFim,
                      expression: "grupoControle.dataFim"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.grupoControle.dataFim },
                  on: {
                    blur: function($event) {
                      return _vm.mudouRetorno()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.grupoControle,
                        "dataFim",
                        $event.target.value
                      )
                    }
                  }
                })
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", { staticClass: "titulo" }, [
        _vm._v("Lista de Grupos de Controle")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grupo de Controle")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dt. Inicial")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dt. Final")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dias")]),
        _vm._v(" "),
        _c("th", [_vm._v("PDF")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ação")])
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

/***/ "./resources/js/components/medicina/ProntuarioGrupoControle.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioGrupoControle.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true& */ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true&");
/* harmony import */ var _ProntuarioGrupoControle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProntuarioGrupoControle.vue?vue&type=script&lang=js& */ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& */ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProntuarioGrupoControle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03addcca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/medicina/ProntuarioGrupoControle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioGrupoControle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=style&index=0&id=03addcca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_style_index_0_id_03addcca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioGrupoControle.vue?vue&type=template&id=03addcca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioGrupoControle_vue_vue_type_template_id_03addcca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);