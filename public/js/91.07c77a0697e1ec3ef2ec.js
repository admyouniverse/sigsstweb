(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pcmso', 'ambiente'],
  data: function data() {
    return {
      riscos: [],
      fontes: [],
      pesosx: [],
      pesosy: [],
      eixoy: [],
      eixox: [],
      fatores: [],
      carregando: true,
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
    calculaNivel: function calculaNivel() {
      if (this.fator.pesoX && this.fator.pesoY) {
        if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
          this.resultado = parseInt(this.fator.pesoX.peso) * parseInt(this.fator.pesoY.peso);
        } else {
          this.resultado = parseInt(this.fator.pesoX.peso) + parseInt(this.fator.pesoY.peso);
        }

        var that = this;
        axios.get('/nivel-matriz/peso/' + this.resultado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
          that.nivel = response.data;
        });
      }
    },
    cor: function cor(risco) {
      if (risco == 'BIOLÓGICO') {
        return "background-color:rgb(148, 90, 30)";
      } else if (risco == 'ERGONÔMICO') {
        return "background-color:rgb(255, 255, 0)";
      } else if (risco == 'ACIDENTE') {
        return "background-color:rgb(0, 0, 255)";
      } else if (risco == 'FÍSICO') {
        return "background-color:rgb(0, 128, 0)";
      } else if (risco == 'QUÍMICO') {
        return "background-color:rgb(255, 0, 0)";
      } else if (risco == 'PERICULOSOS') {
        return "background-color:rgb(255, 255, 0)";
      } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
        return "background-color:rgb(0, 0, 0)";
      } else if (risco == 'PENOSOS') {
        return "background-color:rgb(254, 218, 71)";
      } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
        return "background-color:rgb(128, 128, 128)";
      }
    },
    grupoDeRisco: function grupoDeRisco(risco) {
      if (risco == 'BIOLÓGICO') {
        return "B";
      } else if (risco == 'ERGONÔMICO') {
        return "E";
      } else if (risco == 'ACIDENTE') {
        return "A";
      } else if (risco == 'FÍSICO') {
        return "F";
      } else if (risco == 'QUÍMICO') {
        return "Q";
      } else if (risco == 'PERICULOSOS') {
        return "P";
      } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
        return "AFR";
      } else if (risco == 'PENOSOS') {
        return "Pen";
      } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
        return "Aus FR";
      }
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/tabelas/riscos/list').then(function (response) {
      that.riscos = response.data;
    });
    axios.get('/tabelas/riscos/fontes-geradoras/list').then(function (response) {
      that.fontes = response.data;
    });
    axios.get('/peso-x/list').then(function (response) {
      that.pesosx = response.data;
    });
    axios.get('/peso-y/list').then(function (response) {
      that.pesosy = response.data;
    });
    axios.get('/eixo-y/list').then(function (response) {
      that.eixoy = response.data;
    });
    axios.get('/eixo-x/list').then(function (response) {
      that.eixox = response.data;
    });
    axios.get('/pcmso/ambiente-risco/' + this.ambiente.idOrigem + '/' + this.pcmso.ppra.idPpra + '/list').then(function (response) {
      that.fatores = response.data;
      that.carregando = false;
      that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0& ***!
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
    "div",
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 mb-2 text-center" }, [
          _c("h5", { staticClass: "bg-success p-3 text-light" }, [
            _vm._v(
              "Fatores de Risco do GR0 V " +
                _vm._s(_vm.pcmso.ppra.versao) +
                " de " +
                _vm._s(
                  _vm._f("moment")(_vm.pcmso.ppra.dataHora, "DD/MM/YYYY")
                ) +
                " "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              { staticClass: "table table-fatores table-hover table-striped" },
              [
                _c(
                  "tbody",
                  [
                    _c("tr", [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _vm.eixox[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixox[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.eixoy[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixoy[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _vm._m(8)
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.fatores, function(fat, key) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "justify",
                              "vertical-align": "middle"
                            }
                          },
                          [
                            _c("div", {
                              staticClass: "cx",
                              style: _vm.cor(fat.risco.grupoRisco)
                            }),
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.grupoDeRisco(fat.risco.grupoRisco)) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fat.risco.nomeRisco))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fat.fonteGeradora.descricao))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fat.exposicao))]),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO"
                          ? _c("td", [
                              _c(
                                "span",
                                {
                                  class: {
                                    "text-success":
                                      fat.medida.medida < fat.unidade.nivelAcao,
                                    "text-warning":
                                      fat.medida.medida >=
                                        fat.unidade.nivelAcao &&
                                      fat.medida.medida <
                                        fat.unidade.limiteTolerancia,
                                    "text-danger":
                                      fat.medida.medida >=
                                      fat.unidade.limiteTolerancia
                                  }
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(fat.medida.medida) +
                                        " " +
                                        _vm._s(
                                          fat.unidade.unidadeMedida.unidade
                                        )
                                    )
                                  ])
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO"
                          ? _c("td", [_vm._v("Qualitativo")])
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO"
                          ? _c("td", [
                              _vm._v(
                                _vm._s(fat.unidade.limiteTolerancia) +
                                  _vm._s(fat.unidade.unidadeMedida.unidade)
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO"
                          ? _c("td", [_vm._v("-")])
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO"
                          ? _c("td", [
                              _vm._v(
                                _vm._s(fat.unidade.nivelAcao) +
                                  _vm._s(fat.unidade.unidadeMedida.unidade)
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO"
                          ? _c("td", [_vm._v("-")])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoX,
                                  expression: "fat.pesoX"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              attrs: { disabled: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    fat,
                                    "pesoX",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.pesosx, function(pesox) {
                              return _c(
                                "option",
                                { domProps: { value: pesox } },
                                [
                                  _vm._v(
                                    "[" +
                                      _vm._s(pesox.peso) +
                                      "] " +
                                      _vm._s(pesox.descricao)
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoY,
                                  expression: "fat.pesoY"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              attrs: { disabled: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    fat,
                                    "pesoY",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.pesosy, function(pesoy) {
                              return _c(
                                "option",
                                { domProps: { value: pesoy } },
                                [
                                  _vm._v(
                                    "[" +
                                      _vm._s(pesoy.peso) +
                                      "] " +
                                      _vm._s(pesoy.descricao)
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { style: "background-color:" + fat.nivel.cor },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(fat.pesoX.peso * fat.pesoY.peso) +
                                " - " +
                                _vm._s(fat.nivel.descricao) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fat.medidasExistentes))])
                      ])
                    })
                  ],
                  2
                )
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Grupo ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "170px" } }, [
      _c("strong", [_vm._v(" Risco ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "130px" } }, [
      _c("strong", [_vm._v(" Fonte Geradora ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Exp. ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Valor ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "70px" } }, [
      _c("strong", [_vm._v(" L. Tol.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "80px" } }, [
      _c("strong", [_vm._v(" N. Ação ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "150px" } }, [
      _c("strong", [_vm._v("Nivel")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Medidas Existentes")])])
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

/***/ "./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0& */ "./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0&");
/* harmony import */ var _PcmsoAmbienteRiscos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PcmsoAmbienteRiscos.vue?vue&type=script&lang=js& */ "./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PcmsoAmbienteRiscos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoAmbienteRiscos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoAmbienteRiscos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoAmbienteRiscos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/ambiente/PcmsoAmbienteRiscos.vue?vue&type=template&id=5a2917d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoAmbienteRiscos_vue_vue_type_template_id_5a2917d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);