(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['matriz'],
  data: function data() {
    return {
      'carregando': false,
      'eixosX': [],
      'eixosY': []
    };
  },
  methods: {
    abrirPesoX: function abrirPesoX() {
      this.$refs.modalPesoX.show();
    },
    fechar: function fechar() {},
    salvarPesoX: function salvarPesoX() {}
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/peso-x/list').then(function (response) {
      that.pesosY = response.data;
    });
    axios.get('/eixo-y/list').then(function (response) {
      that.eixosY = response.data;
    });
    axios.get('/eixo-x/list').then(function (response) {
      that.eixosX = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c("section", { staticClass: "content-header" }, [
        _c("h1", [
          _vm._v(
            "\n            Matrizes de Risco - " +
              _vm._s(this.matriz.descricao) +
              "\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            [
              _c(
                "b-card",
                { staticClass: "sig", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-tabs",
                    { attrs: { card: "" } },
                    [
                      _c(
                        "b-tab",
                        { attrs: { title: "Detalhes", active: "" } },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("ID")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.matriz.idMatrizRisco,
                                        expression: "matriz.idMatrizRisco"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text", disabled: "" },
                                    domProps: {
                                      value: _vm.matriz.idMatrizRisco
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.matriz,
                                          "idMatrizRisco",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-9" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Descrição")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.matriz.descricao,
                                        expression: "matriz.descricao"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.matriz.descricao },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.matriz,
                                          "descricao",
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
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Eixo")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.matriz.eixoX,
                                          expression: "matriz.eixoX"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { id: "" },
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
                                            _vm.matriz,
                                            "eixoX",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.eixosX, function(eixo) {
                                      return _c(
                                        "option",
                                        { domProps: { value: eixo } },
                                        [_vm._v(_vm._s(eixo.descricao))]
                                      )
                                    }),
                                    0
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Eixo")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.matriz.eixoY,
                                          expression: "matriz.eixoY"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { id: "" },
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
                                            _vm.matriz,
                                            "eixoY",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.eixosY, function(eixo) {
                                      return _c(
                                        "option",
                                        { domProps: { value: eixo } },
                                        [_vm._v(_vm._s(eixo.descricao))]
                                      )
                                    }),
                                    0
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Criterio")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.matriz.criterio,
                                          expression: "matriz.criterio"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { id: "" },
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
                                            _vm.matriz,
                                            "criterio",
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
                                        { attrs: { value: "SOMA" } },
                                        [_vm._v("SOMA")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "MULTIPLICACAO" } },
                                        [_vm._v("MULTIPLICAÇÃO")]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Peso X" } },
                        [
                          _c("b-card-text", [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c("peso-x-componente", {
                                  attrs: { matriz: _vm.matriz }
                                })
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Peso Y" } },
                        [
                          _c(
                            "b-card-text",
                            [
                              _c("peso-y-componente", {
                                attrs: { matriz: _vm.matriz }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Nivel" } },
                        [
                          _c(
                            "b-card-text",
                            [
                              _c("nivel-componente", {
                                attrs: { matriz: _vm.matriz }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/components/matriz/MatrizDetalhes.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/matriz/MatrizDetalhes.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrizDetalhes.vue?vue&type=template&id=b70d9228& */ "./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228&");
/* harmony import */ var _MatrizDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrizDetalhes.vue?vue&type=script&lang=js& */ "./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatrizDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/matriz/MatrizDetalhes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrizDetalhes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrizDetalhes.vue?vue&type=template&id=b70d9228& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizDetalhes.vue?vue&type=template&id=b70d9228&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizDetalhes_vue_vue_type_template_id_b70d9228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);