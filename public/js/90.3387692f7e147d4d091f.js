(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pcmso'],
  data: function data() {
    return {
      medico: {
        pessoa: {}
      },
      representanteSelecionado: {},
      medicosBase: [],
      nomeRepresentante: '',
      cpfRepresentante: '',
      cargoRepresentante: '',
      funcionarios: [],
      responsavel: '',
      complemento: '',
      historicos: [],
      edicao: {}
    };
  },
  methods: {
    tipoPcmso: function tipoPcmso(tipo) {
      if (tipo == 'EMISSÃO') {
        return 'Emissão';
      } else if (tipo == 'REVISÃO_PARCIAL') {
        return 'Revisão Parcial';
      } else if (tipo == 'REVISÃO_GERAL') {
        return 'Revisão Geral';
      }
    },
    modalResponsavel: function modalResponsavel(historico) {
      this.edicao = historico;
      this.$refs.modalResponsavel.show();
    },
    modalComplemento: function modalComplemento(historico) {
      this.edicao = historico;
      this.$refs.modalComplemento.show();
    },
    salvarResponsavel: function salvarResponsavel() {
      var that = this;
      axios.post('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico', {
        medico: that.edicao.empresaProfissional,
        representante: that.edicao.empresaFuncionario,
        nome: that.edicao.representante,
        cpf: that.edicao.cpf,
        cargo: that.edicao.cargo,
        complemento: that.edicao.complemento,
        responsavel: that.edicao.responsavel,
        idPcmsoHistoricoRevisao: that.edicao.idPcmsoHistoricoRevisao
      }).then(function (response) {
        that.historicos = response.data;
        that.edicao = {};
      });
    },
    fechar: function fechar() {},
    modalMedicos: function modalMedicos() {
      var that = this;
      axios.post('/pcmso/medicos', {
        data: that.pcmso.dataHora
      }).then(function (response) {
        that.medicosBase = response.data;
        that.$refs.modalMedicos.show();
        console.log(response.data);
      });
    },
    selecionarMedico: function selecionarMedico(medico) {
      this.medico = medico;
      this.$refs.modalMedicos.hide();
    },
    modalPessoas: function modalPessoas() {
      var that = this;
      axios.get('/empresas/funcionarios/' + that.pcmso.empresasContrato[0].empresa.idEmpresa).then(function (response) {
        that.funcionarios = response.data;
        console.log(response.data);
        that.$refs.modalPessoas.show();
      });
    },
    selecionaPessoa: function selecionaPessoa(funcionario) {
      this.representanteSelecionado = funcionario;
      this.nomeRepresentante = this.representanteSelecionado.pessoa.nomePessoa;
      this.cpfRepresentante = this.representanteSelecionado.pessoa.cpf;
      this.cargoRepresentante = this.representanteSelecionado.funcao.cargo;
      this.$refs.modalPessoas.hide();
    },
    limparPessoa: function limparPessoa() {
      this.representanteSelecionado = {};
    },
    salvar: function salvar() {
      var that = this;

      if (this.historicos.length > 0) {
        var id = this.historicos[0].idPcmsoHistoricoRevisao;
      } else {
        var id = 0;
      }

      axios.post('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico', {
        medico: that.medico,
        representante: that.representanteSelecionado,
        nome: that.nomeRepresentante,
        cpf: that.cpfRepresentante,
        cargo: that.cargoRepresentante,
        complemento: that.complemento,
        responsavel: that.responsavel,
        idPcmsoHistoricoRevisao: id
      }).then(function (response) {
        that.historicos = response.data;
        that.medico = {
          pessoa: {}
        };
        that.representanteSelecionado = '';
        that.nomeRepresentante = '';
        that.cpfRepresentante = '';
        that.cargoRepresentante = '';
        that.complemento = '';
        that.responsavel = '';
      });
    }
  },
  mounted: function mounted() {
    var that = this; // console.log(this.pcmso);

    axios.get('/pcmso/' + this.pcmso.idPcmso + '/revisao-historico').then(function (response) {
      console.log(response.data);
      that.historicos = response.data;

      if (that.historicos.length > 0) {
        that.medico = that.historicos[0].empresaProfissional;
        that.nomeRepresentante = that.historicos[0].representante;
        that.representanteSelecionado = that.historicos[0].empresaFuncionario;
        that.cargoRepresentante = that.historicos[0].cargo;
        that.cpfRepresentante = that.historicos[0].cpf;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-5" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Médico Responsável do PCMSO")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: "Dr. " + _vm.medico.pessoa.nomePessoa,
                    expression: "'Dr. ' + medico.pessoa.nomePessoa"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  readonly: "",
                  placeholder: "Clique no botão"
                },
                domProps: { value: "Dr. " + _vm.medico.pessoa.nomePessoa },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      "Dr. " + _vm.medico.pessoa,
                      "nomePessoa",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    on: { click: _vm.modalMedicos }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Representante da Empresa")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nomeRepresentante,
                    expression: "nomeRepresentante"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Pessoa" },
                domProps: { value: _vm.nomeRepresentante },
                on: {
                  keydown: _vm.limparPessoa,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nomeRepresentante = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    on: { click: _vm.modalPessoas }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cpfRepresentante,
                  expression: "cpfRepresentante"
                },
                {
                  name: "mask",
                  rawName: "v-mask",
                  value: "###.###.###-##",
                  expression: "'###.###.###-##'"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.cpfRepresentante },
              on: {
                keydown: _vm.limparPessoa,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cpfRepresentante = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cargoRepresentante,
                  expression: "cargoRepresentante"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.cargoRepresentante },
              on: {
                keydown: _vm.limparPessoa,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cargoRepresentante = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "button",
            { staticClass: "btn btn-success", on: { click: _vm.salvar } },
            [_c("i", { staticClass: "fa fa-check" }), _vm._v(" Salvar")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("table", { staticClass: "table" }, [
            _c(
              "tbody",
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.historicos, function(historico) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(_vm.pcmso.versao))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(_vm.pcmso.dataHora, "DD/MM/YYYY")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [_vm._v("Dr.")]),
                      _vm._v(
                        " " +
                          _vm._s(
                            historico.empresaProfissional.pessoa.nomePessoa
                          ) +
                          ",  " +
                          _vm._s(historico.responsavel) +
                          " "
                      ),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-link",
                          on: {
                            click: function($event) {
                              return _vm.modalResponsavel(historico)
                            }
                          }
                        },
                        [_vm._v("Alterar")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.tipoPcmso(_vm.pcmso.tipoPcmso)))
                      ]),
                      _vm._v(",  " + _vm._s(historico.complemento) + " "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-link",
                          on: {
                            click: function($event) {
                              return _vm.modalComplemento(historico)
                            }
                          }
                        },
                        [_vm._v("Alterar")]
                      )
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalMedicos",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Médicos",
            id: "modal1"
          }
        },
        [
          _c("table", { staticClass: "table-striped table-hover table" }, [
            _vm.medicosBase.length > 0
              ? _c(
                  "tbody",
                  [
                    _c("tr", [
                      _c("th", [_vm._v("Conselho")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Nome")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.medicosBase, function(medico) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              return _vm.selecionarMedico(medico)
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(medico.numeroRegistro))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(medico.pessoa.nomePessoa))])
                        ]
                      )
                    })
                  ],
                  2
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalPessoas",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Pessoas",
            id: "modal1"
          }
        },
        [
          _c("table", { staticClass: "table-striped table-hover table" }, [
            _c(
              "tbody",
              [
                _c("tr", [
                  _c("th", [_vm._v("Nome")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("CPF")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Cargo")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.funcionarios, function(funcionario) {
                  return _c(
                    "tr",
                    {
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.selecionaPessoa(funcionario)
                        }
                      }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(funcionario.pessoa.nomePessoa))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcionario.pessoa.cpf))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcionario.funcao.cargo))])
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalResponsavel",
          attrs: {
            size: "xs",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Alterar Elaboradores",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.salvarResponsavel,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Elaborador(es)")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.edicao.responsavel,
                    expression: "edicao.responsavel"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.edicao.responsavel },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.edicao, "responsavel", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalComplemento",
          attrs: {
            size: "xs",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Alterar Complemento",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal2"
          },
          on: {
            ok: _vm.salvarResponsavel,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Complemento")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.edicao.complemento,
                    expression: "edicao.complemento"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.edicao.complemento },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.edicao, "complemento", $event.target.value)
                  }
                }
              })
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
    return _c("div", { staticClass: "col-md-7" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [
          _vm._v("Representante dos Trabalhadores")
        ]),
        _vm._v(" "),
        _c("input", { staticClass: "form-control", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Versão PCMSO")]),
      _vm._v(" "),
      _c("th", [_vm._v("Data PCMSO")]),
      _vm._v(" "),
      _c("th", [_vm._v("Elaborador(es)")]),
      _vm._v(" "),
      _c("th", [_vm._v("Complemento")])
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

/***/ "./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d& */ "./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d&");
/* harmony import */ var _PcmsoHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PcmsoHistoricoRevisao.vue?vue&type=script&lang=js& */ "./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PcmsoHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pcmso/PcmsoHistoricoRevisao.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoHistoricoRevisao.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoRevisao.vue?vue&type=template&id=2ee5150d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoRevisao_vue_vue_type_template_id_2ee5150d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);