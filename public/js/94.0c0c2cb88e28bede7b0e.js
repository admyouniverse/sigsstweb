(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pessoa'],
  data: function data() {
    return {
      funcoes: [],
      carregando: true,
      mensagem: 'Carregando funções cadastradas',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      montou: false,
      atual: []
    };
  },
  methods: {
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    sucesso: function sucesso(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 800);
    },
    alerta: function alerta(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-close fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 1000);
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
    }
  },
  mounted: function mounted() {
    console.log(this.pessoa);
    var that = this;
    this.carregando = true;
    axios.get('/pessoas/funcao/list/' + this.pessoa.idPessoa).then(function (response) {
      that.funcoes = response.data;
      that.montou = true;
      console.log(that.capacitacoes);
      setTimeout(function () {
        that.carregando = false;
      }, 200);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _vm.montou
        ? _c("div", { staticClass: "box box-info" }, [
            _c("div", { staticClass: "box-body table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c(
                  "tbody",
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.funcoes, function(funcao) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "99px" }
                          },
                          [
                            _c("b", [
                              _vm._v(
                                _vm._s(funcao.empresaContrato.empresa.idEmpresa)
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [_c("b", [_vm._v(_vm._s(funcao.matricula))])]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [
                            _c("b", [
                              _vm._v(
                                _vm._s(
                                  funcao.ambienteTrabalho.nomeAmbienteTrabalho
                                )
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [_c("b", [_vm._v(_vm._s(funcao.funcao.cargo))])]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(funcao.dataInicial, "DD/MM/Y")
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(funcao.dataFuncao, "DD/MM/Y")
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(funcao.dataFinal, "DD/MM/Y")
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(funcao.ano) +
                              "A, " +
                              _vm._s(funcao.mes) +
                              "M,\n                            " +
                              _vm._s(funcao.dia) +
                              "D"
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.formataTipo(funcao.tipoOperacao)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              funcao.empresaContrato.empresaContratante
                                .nomeFantasia
                            )
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "th",
        {
          staticStyle: { "vertical-align": "middle" },
          attrs: { width: "80px" }
        },
        [
          _vm._v(
            "\n                            ID Empresa\n                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v(
          "\n                            Matricula\n                        "
        )
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Ambiente")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Cargo")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Dt Admissão")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Dt Mudança")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Dt Final")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Tempo")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Tipo Operação")
      ]),
      _vm._v(" "),
      _c("th", { staticStyle: { "vertical-align": "middle" } }, [
        _vm._v("Contratante")
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

/***/ "./resources/js/components/pessoa/PessoaFuncaoComponente.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaFuncaoComponente.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4& */ "./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4&");
/* harmony import */ var _PessoaFuncaoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PessoaFuncaoComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PessoaFuncaoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pessoa/PessoaFuncaoComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaFuncaoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaFuncaoComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaFuncaoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaFuncaoComponente.vue?vue&type=template&id=b6c2b5a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaFuncaoComponente_vue_vue_type_template_id_b6c2b5a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);