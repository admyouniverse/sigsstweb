(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      ambientes: [],
      carregando: false,
      ambiente: {},
      listar: false,
      mensagem: 'Carregando Ambiente de Trabalho cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
    camelize: function camelize(str) {
      if (str == 'PRÓPRIO') {
        return 'Próprio';
      } else if (str == 'TERCEIROS') {
        return 'Terceiros';
      } else if (str == 'SERVIÇOS_TERCEIROS') {
        return 'Serviços Terceiros';
      }
    },
    listarFuncoes: function listarFuncoes(ambiente) {
      this.ambiente = ambiente;
      this.listar = true;
    }
  },
  mounted: function mounted() {
    var that = this;
    console.log('cnpj', that.empresa.inscricao.replace(/[^0-9]/g, ''));
    axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(function (response) {
      that.ambientes = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "box box-info" }, [
        _c("div", { staticClass: "box-body table-responsive" }, [
          _c("table", { staticClass: "table table-hover table-striped" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.ambientes, function(ambiente) {
                return _c(
                  "tr",
                  {
                    on: {
                      click: function($event) {
                        return _vm.listarFuncoes(ambiente)
                      }
                    }
                  },
                  [
                    _c(
                      "td",
                      {
                        staticStyle: { "vertical-align": "middle" },
                        attrs: { width: "100px" }
                      },
                      [_c("b", [_vm._v(_vm._s(ambiente.idAmbienteTrabalho))])]
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(ambiente.idOrigem))]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "text-align": "justify" } }, [
                      _vm._v(_vm._s(ambiente.nomeAmbienteTrabalho))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(ambiente.subCodigo))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.camelize(ambiente.estabelecimento)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(ambiente.funcoes.length))
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.listar
        ? _c("div", { staticClass: "box box-info" }, [
            _c("div", { staticClass: "col-md-12 mt-3 text-center" }, [
              _c("h5", { staticClass: "bg-success p-3 text-light" }, [
                _vm._v("Cargos de " + _vm._s(_vm.ambiente.nomeAmbienteTrabalho))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "box-body table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.ambiente.funcoes, function(funcao) {
                    return _c("tr", [
                      _c(
                        "td",
                        {
                          staticStyle: { "vertical-align": "middle" },
                          attrs: { width: "100px" }
                        },
                        [_c("b", [_vm._v(_vm._s(funcao.idFuncao))])]
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcao.idRH))]),
                      _vm._v(" "),
                      _c("td", { staticStyle: { "text-align": "justify" } }, [
                        _vm._v(_vm._s(funcao.cargo))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcao.cbo.codigoCbo))])
                    ])
                  }),
                  0
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
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v("\n                            ID\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("ID Origem")]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Descrição\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("ID Secundário")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estabelecimento")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Cargos")])
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
        _c("th", [_vm._v("ID RH")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cargo")]),
        _vm._v(" "),
        _c("th", [_vm._v("CBO")])
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

/***/ "./resources/js/components/empresa/EmpresaAmbientes.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbientes.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e& */ "./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e&");
/* harmony import */ var _EmpresaAmbientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaAmbientes.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresaAmbientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaAmbientes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaAmbientes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbientes.vue?vue&type=template&id=08cd5d6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbientes_vue_vue_type_template_id_08cd5d6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);