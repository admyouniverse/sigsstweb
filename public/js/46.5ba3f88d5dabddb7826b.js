(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['prontuario', 'empresa'],
  data: function data() {
    return {
      afastamentos: [],
      motivos: [],
      cids: [],
      estados: [{
        nome: "Acre",
        sigla: "AC"
      }, {
        nome: "Alagoas",
        sigla: "AL"
      }, {
        nome: "Amapá",
        sigla: "AP"
      }, {
        nome: "Amazonas",
        sigla: "AM"
      }, {
        nome: "Bahia",
        sigla: "BA"
      }, {
        nome: "Ceará",
        sigla: "CE"
      }, {
        nome: "Distrito Federal",
        sigla: "DF"
      }, {
        nome: "Espírito Santo",
        sigla: "ES"
      }, {
        nome: "Goiás",
        sigla: "GO"
      }, {
        nome: "Maranhão",
        sigla: "MA"
      }, {
        nome: "Mato Grosso",
        sigla: "MT"
      }, {
        nome: "Mato Grosso do Sul",
        sigla: "MS"
      }, {
        nome: "Minas Gerais",
        sigla: "MG"
      }, {
        nome: "Pará",
        sigla: "PA"
      }, {
        nome: "Paraíba",
        sigla: "PB"
      }, {
        nome: "Paraná",
        sigla: "PR"
      }, {
        nome: "Pernambuco",
        sigla: "PE"
      }, {
        nome: "Piauí",
        sigla: "PI"
      }, {
        nome: "Rio de Janeiro",
        sigla: "RJ"
      }, {
        nome: "Rio Grande do Norte",
        sigla: "RN"
      }, {
        nome: "Rio Grande do Sul",
        sigla: "RS"
      }, {
        nome: "Rondônia",
        sigla: "RO"
      }, {
        nome: "Roraima",
        sigla: "RR"
      }, {
        nome: "Santa Catarina",
        sigla: "SC"
      }, {
        nome: "São Paulo",
        sigla: "SP"
      }, {
        nome: "Sergipe",
        sigla: "SE"
      }, {
        nome: "Tocantins",
        sigla: "TO"
      }],
      afastamento: {
        idProntuarioAfastamento: 0,
        motivoAfastamento: 0,
        prontuario: 0,
        cid: 0,
        obito: "NÃO",
        dataAfastamento: "",
        dataRetorno: "",
        medico: "",
        numero: 0,
        conselho: "",
        uf: "",
        observacao: ""
      }
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
      var inicial = new Date(this.afastamento.dataAfastamento);
      var dataProntuario = new Date(this.prontuario.dataIni);

      if (inicial < dataProntuario) {
        this.$alert('Data de afastamento deve ser maior ou igual a data inicial do prontuário', 'Ops!', 'error');
        this.afastamento.dataAfastamento = this.prontuario.dataIni;
      } else {
        if (this.afastamentos.length > 0) {
          var dataUltimo = new Date(this.afastamentos[this.afastamentos.length - 1].dataRetorno);

          if (inicial < dataUltimo) {
            this.$alert('Data de afastamento deve ser maior ou igual a data de retorno do último afastamento', 'Ops!', 'error');
            this.afastamento.dataAfastamento = this.afastamentos[this.afastamentos.length - 1].dataRetorno;
          }
        }
      }
    },
    mudouRetorno: function mudouRetorno() {
      if (this.afastamento.dataRetorno) {
        var afastamento = new Date(this.afastamento.dataAfastamento);
        var retorno = new Date(this.afastamento.dataRetorno);

        if (retorno < afastamento) {
          this.afastamento.dataRetorno = null;
          this.$alert('Data de retorno deve ser maior que a data de afastamento', 'Ops!', 'error');
        }
      }
    },
    dias: function dias(afastamento) {
      var inicial = new Date(afastamento.dataAfastamento);

      if (afastamento.dataRetorno) {
        var _final = new Date(afastamento.dataRetorno);
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
      axios.post('/prontuario-medico/afastamento', {
        prontuario: that.prontuario,
        afastamento: that.afastamento
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/' + that.prontuario.idProntuario).then(function (response) {
          that.afastamentos = response.data;
        });
      });
    },
    editar: function editar(afastamento) {
      this.afastamento = afastamento;
      console.log(this.afastamento);
      this.$refs.modalAfastamento.show();
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/' + this.prontuario.idProntuario).then(function (response) {
      that.afastamentos = response.data;
    });
    axios.get('/tabelas/motivo-de-afastamento/list').then(function (response) {
      that.motivos = response.data;
    });
    axios.get('/tabelas/cid/list').then(function (response) {
      that.cids = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.titulo[data-v-c3937334] {\n    text-align: center;\n    background-color: #00a65a;\n    padding: 6px;\n    color: white;\n    font-size: 17px;\n    margin-top: 5px;\n}\n.form-remove[type=\"date\"][data-v-c3937334]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                  _vm.afastamentos.length > 0 &&
                  !_vm.afastamentos[_vm.afastamentos.length - 1].dataRetorno
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
                _vm._l(_vm.afastamentos, function(afastamento) {
                  return _c("tr", [
                    _c("td", [
                      _vm._v(_vm._s(afastamento.idProntuarioAfastamento))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(afastamento.cid.idCid) +
                          " - " +
                          _vm._s(afastamento.cid.descricao)
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(
                            afastamento.dataAfastamento,
                            "DD/MM/YYYY"
                          )
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(
                            afastamento.dataRetorno,
                            "DD/MM/YYYY"
                          )
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.dias(afastamento)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(afastamento.observacao))]),
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
                              return _vm.editar(afastamento)
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
            title: "Afastar",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: { ok: _vm.salvar }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.idProntuarioAfastamento,
                      expression: "afastamento.idProntuarioAfastamento"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.afastamento.idProntuarioAfastamento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.afastamento,
                        "idProntuarioAfastamento",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Obito")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.afastamento.obito,
                        expression: "afastamento.obito"
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
                          _vm.afastamento,
                          "obito",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "SIM" } }, [_vm._v("Sim")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "NÃO" } }, [_vm._v("Não")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Motivo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.afastamento.motivoAfastamento,
                        expression: "afastamento.motivoAfastamento"
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
                          _vm.afastamento,
                          "motivoAfastamento",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.motivos, function(motivo) {
                    return motivo.prontuario == "SIM"
                      ? _c("option", { domProps: { value: motivo } }, [
                          _vm._v(
                            _vm._s(motivo.codigoMotivo) +
                              " - " +
                              _vm._s(motivo.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("CID")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.afastamento.cid,
                        expression: "afastamento.cid"
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
                          _vm.afastamento,
                          "cid",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.cids, function(cid) {
                    return _c("option", { domProps: { value: cid } }, [
                      _vm._v(
                        _vm._s(cid.codigoCid) + " - " + _vm._s(cid.descricao)
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Afasta")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.dataAfastamento,
                      expression: "afastamento.dataAfastamento"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.afastamento.dataAfastamento },
                  on: {
                    blur: function($event) {
                      return _vm.mudouAfastamento()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.afastamento,
                        "dataAfastamento",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Dt. Retorno")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.dataRetorno,
                      expression: "afastamento.dataRetorno"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.afastamento.dataRetorno },
                  on: {
                    blur: function($event) {
                      return _vm.mudouRetorno()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.afastamento,
                        "dataRetorno",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("h3", { staticClass: "titulo" }, [
                _vm._v("Lista de afastamentos")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Observações")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.observacao,
                      expression: "afastamento.observacao"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.afastamento.observacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.afastamento,
                        "observacao",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Médico")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.medico,
                      expression: "afastamento.medico"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.afastamento.medico },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.afastamento, "medico", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Conselho")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.afastamento.conselho,
                        expression: "afastamento.conselho"
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
                          _vm.afastamento,
                          "conselho",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "CRO" } }, [_vm._v("CRO")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "CRM" } }, [_vm._v("CRM")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Número")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.afastamento.numero,
                      expression: "afastamento.numero"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.afastamento.numero },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.afastamento, "numero", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("UF")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.afastamento.uf,
                        expression: "afastamento.uf"
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
                          _vm.afastamento,
                          "uf",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.estados, function(estado) {
                    return _c("option", { domProps: { value: estado.sigla } }, [
                      _vm._v(_vm._s(estado.sigla))
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", { staticClass: "titulo" }, [_vm._v("Lista de afastamentos")])
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
        _c("th", [_vm._v("CID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dt. Afasta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dt. Retorno")]),
        _vm._v(" "),
        _c("th", [_vm._v("Dias At.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Observação")]),
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

/***/ "./resources/js/components/medicina/ProntuarioAfastamento.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioAfastamento.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true& */ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true&");
/* harmony import */ var _ProntuarioAfastamento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProntuarioAfastamento.vue?vue&type=script&lang=js& */ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& */ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProntuarioAfastamento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c3937334",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/medicina/ProntuarioAfastamento.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioAfastamento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=style&index=0&id=c3937334&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_style_index_0_id_c3937334_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/medicina/ProntuarioAfastamento.vue?vue&type=template&id=c3937334&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProntuarioAfastamento_vue_vue_type_template_id_c3937334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);