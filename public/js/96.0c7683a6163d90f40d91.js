(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      ppras: [],
      montou: false,
      carregando: true,
      mensagem: 'Carregando itens cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      coluna: '',
      ordem: true,
      termo: '',
      selecionado: 'codigo'
    };
  },
  methods: {
    pdf: function pdf(ppra) {
      if (ppra.caminhoPdf) {
        window.open('http://200.98.201.236:8081/' + ppra.caminhoPdf);
      } else {
        alert('Não há PDF anexado.');
      }
    },
    remover: function remover(id) {
      var that = this;
      axios.get('/gro/deletar/' + id).then(function (response) {
        that.ppras = response.data;
        that.carregando = false;
      });
    },
    tipoPpra: function tipoPpra(tipo) {
      if (tipo == 'EMISSÃO') {
        return 'Emissão';
      } else if (tipo == 'REVISÃO_PARCIAL') {
        return 'Revisão Parcial';
      } else if (tipo == 'REVISÃO_GERAL') {
        return 'Revisão Geral';
      }
    },
    ordenar: function ordenar(coluna) {
      if (this.coluna == coluna) {
        this.ordem = !this.ordem;
      } else {
        this.ordem = true;
      }

      this.coluna = coluna;

      if (coluna == 'versao') {
        if (this.ordem == true) {
          this.ppras.sort(function (a, b) {
            if (a.versao > b.versao) {
              return 1;
            }

            if (a.versao < b.versao) {
              return -1;
            }

            return 0;
          });
        } else {
          this.ppras.sort(function (a, b) {
            if (a.versao > b.versao) {
              return -1;
            }

            if (a.versao < b.versao) {
              return 1;
            }

            return 0;
          });
        }
      } else if (coluna == 'descricao') {
        if (this.ordem == true) {
          this.ppras.sort(function (a, b) {
            if (a.empresasContrato > b.empresasContrato) {
              return 1;
            }

            if (a.empresasContrato < b.empresasContrato) {
              return -1;
            }

            return 0;
          });
        } else {
          this.ppras.sort(function (a, b) {
            if (a.empresasContrato > b.empresasContrato) {
              return -1;
            }

            if (a.empresasContrato < b.empresasContrato) {
              return 1;
            }

            return 0;
          });
        }
      } else if (coluna == 'data') {
        if (this.ordem == true) {
          this.ppras.sort(function (a, b) {
            if (a.dataHora > b.dataHora) {
              return 1;
            }

            if (a.dataHora < b.dataHora) {
              return -1;
            }

            return 0;
          });
        } else {
          this.ppras.sort(function (a, b) {
            if (a.dataHora > b.dataHora) {
              return -1;
            }

            if (a.dataHora < b.dataHora) {
              return 1;
            }

            return 0;
          });
        }
      }
    },
    status: function status(_status) {
      if (_status == 'ELABORAÇÃO') {
        return "<strong style='color: red'>Em Elaboração</strong>";
      } else {
        return "Completo";
      }
    },
    situacao: function situacao(_situacao) {
      if (_situacao == 'LIBERADO') {
        return "<strong style='color: red'>Liberado</strong>";
      } else {
        return "Congelado";
      }
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/gro/list').then(function (response) {
      that.ppras = response.data;
      that.carregando = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "box box-default" }, [
        _c("div", { staticClass: "box-body table-responsive" }, [
          _c("table", { staticClass: "table table-hover table-striped" }, [
            _c(
              "tbody",
              [
                _c("tr", [
                  _c(
                    "th",
                    {
                      class: { selecionado: this.coluna == "versao" },
                      on: {
                        click: function($event) {
                          return _vm.ordenar("versao")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Versão\n                            "
                      ),
                      this.coluna == "versao" && this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-asc" })
                        : _vm._e(),
                      _vm._v(" "),
                      this.coluna == "versao" && !this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-desc" })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      class: { selecionado: this.coluna == "contratante" },
                      on: {
                        click: function($event) {
                          return _vm.ordenar("contratante")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Contrat.\n                            "
                      ),
                      this.coluna == "contratante" && this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-asc" })
                        : _vm._e(),
                      _vm._v(" "),
                      this.coluna == "contratante" && !this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-desc" })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v("Tipo PPRA")]),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      class: { selecionado: this.coluna == "data" },
                      on: {
                        click: function($event) {
                          return _vm.ordenar("data")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Data\n                            "
                      ),
                      this.coluna == "data" && this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-asc" })
                        : _vm._e(),
                      _vm._v(" "),
                      this.coluna == "data" && !this.ordem
                        ? _c("i", { staticClass: "fa fa-sort-alpha-desc" })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Situação")]),
                  _vm._v(" "),
                  _c("th")
                ]),
                _vm._v(" "),
                _vm._l(_vm.ppras, function(ppra) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(ppra.versao))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            ppra.empresasContrato[0].empresaContratante
                              .idEmpresa
                          )
                        )
                      ]),
                      _vm._v(
                        " - " +
                          _vm._s(
                            ppra.empresasContrato[0].empresaContratante
                              .nomeFantasia
                          ) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.tipoPpra(ppra.tipoPpra)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("moment")(ppra.dataHora, "DD/MM/YYYY"))
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", {
                      domProps: { innerHTML: _vm._s(_vm.status(ppra.status)) }
                    }),
                    _vm._v(" "),
                    _c("td", {
                      domProps: {
                        innerHTML: _vm._s(_vm.situacao(ppra.liberado))
                      }
                    }),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-outline-primary",
                          attrs: { href: "/gro/editar/" + ppra.idPpra }
                        },
                        [_c("i", { staticClass: "fas fa-pencil-alt" })]
                      ),
                      _vm._v(" "),
                      ppra.caminhoPdf
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.pdf(ppra)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: { src: "/img/pdf.png", width: "21px" }
                              })
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      ppra.liberado == "LIBERADO"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-danger",
                              on: {
                                click: function($event) {
                                  return _vm.remover(ppra.idPpra)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        : _vm._e()
                    ])
                  ])
                })
              ],
              2
            )
          ])
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

/***/ "./resources/js/components/ppra/PpraComponente.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ppra/PpraComponente.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true& */ "./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true&");
/* harmony import */ var _PpraComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PpraComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cc21d1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/PpraComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraComponente.vue?vue&type=template&id=5cc21d1c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraComponente_vue_vue_type_template_id_5cc21d1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);