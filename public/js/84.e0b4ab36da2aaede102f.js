(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      idTabela: '#tabelaListagem',
      carregando: true,
      mensagem: 'Carregando itens cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      matrizes: [],
      termo: '',
      selecionado: 'codigo',
      montou: false,
      coluna: '',
      eixosX: [],
      eixosY: [],
      matriz: {
        idMatrizRisco: 0,
        descricao: '',
        eixoX: {},
        eixoY: {},
        criterio: 'SOMA'
      }
    };
  },
  methods: {
    voltar: function voltar() {},
    pesquisar: function pesquisar() {},
    salvar: function salvar() {
      var that = this;
      axios.post('/matriz', {
        matriz: that.matriz
      }).then(function (response) {
        that.matriz = response.data;
        that.$root.$emit('montou', [that.idTabela]);
      });
    },
    fechar: function fechar() {
      this.$root.$emit('montou', [this.idTabela]);
    },
    editar: function editar(matriz) {
      this.matriz = matriz;
      this.$refs.myModal.show();
      $(this.idTabela).DataTable().destroy();
    },
    abrir: function abrir() {
      this.matriz = {
        idMatrizRisco: 0,
        descricao: '',
        eixoX: {},
        eixoY: {}
      };
      $(this.idTabela).DataTable().destroy();
      this.$refs.myModal.show();
    },
    ir: function ir(matriz) {
      window.location.href = '/matriz/m/' + matriz.idMatrizRisco;
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/matriz/list').then(function (response) {
      that.matrizes = response.data;
      that.montou = true;
      setTimeout(function () {
        that.carregando = false;
        that.$root.$emit('montou', [that.idTabela]);
      }, 200);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "section",
        { staticClass: "content" },
        [
          _vm.carregando
            ? _c("BlockUI", {
                attrs: { message: _vm.mensagem, html: _vm.html }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row",
              staticStyle: { "margin-bottom": "15px", "margin-top": "10px" }
            },
            [
              _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.abrir()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Incluir")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.montou
        ? _c("div", { staticClass: "box box-info" }, [
            _c("div", { staticClass: "box-body table-responsive" }, [
              _c(
                "table",
                {
                  staticClass: "table table-hover table-striped",
                  attrs: { id: "tabelaListagem" }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.matrizes, function(matriz) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              return _vm.ir(matriz)
                            }
                          }
                        },
                        [
                          _c(
                            "td",
                            {
                              staticStyle: { "vertical-align": "middle" },
                              attrs: { width: "80px" }
                            },
                            [_c("b", [_vm._v(_vm._s(matriz.idMatrizRisco))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "justify" } },
                            [_vm._v(_vm._s(matriz.descricao))]
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(matriz.eixoX.descricao))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(matriz.eixoY.descricao))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-sm",
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.editar(matriz)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-pencil-alt" })]
                            )
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "myModal",
          attrs: {
            size: "md",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Matriz de Risco",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.salvar,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
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
                  domProps: { value: _vm.matriz.idMatrizRisco },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.matriz, "idMatrizRisco", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Descrição")]),
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
                      _vm.$set(_vm.matriz, "descricao", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Eixo")]),
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
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
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
                    return _c("option", { domProps: { value: eixo } }, [
                      _vm._v(_vm._s(eixo.descricao))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Eixo")]),
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
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
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
                    return _c("option", { domProps: { value: eixo } }, [
                      _vm._v(_vm._s(eixo.descricao))
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Criterio")]),
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
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
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
                    _c("option", { attrs: { value: "SOMA" } }, [
                      _vm._v("SOMA")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "MULTIPLICACAO" } }, [
                      _vm._v("MULTIPLICAÇÃO")
                    ])
                  ]
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
        _vm._v("\n            Matrizes de Risco\n            "),
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
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Matrizes de Risco")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v(
            "\n                            Código\n                           \n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Descrição\n                            \n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("\n\t\t\t\t\t\t\tEixo X\n\t\t\t\t\t\t")]),
        _vm._v(" "),
        _c("th", [_vm._v("\n\t\t\t\t\t\t\tEixo Y\n\t\t\t\t\t\t")]),
        _vm._v(" "),
        _c("th")
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

/***/ "./resources/js/components/matriz/MatrizComponente.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/matriz/MatrizComponente.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrizComponente.vue?vue&type=template&id=222e101c& */ "./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c&");
/* harmony import */ var _MatrizComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrizComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatrizComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/matriz/MatrizComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrizComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrizComponente.vue?vue&type=template&id=222e101c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/matriz/MatrizComponente.vue?vue&type=template&id=222e101c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrizComponente_vue_vue_type_template_id_222e101c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);