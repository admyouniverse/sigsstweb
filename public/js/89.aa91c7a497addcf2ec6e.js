(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pcmso'],
  data: function data() {
    return {
      exameSelecionado: {},
      exames: [],
      exame: {},
      historicos: []
    };
  },
  methods: {
    atualizar: function atualizar() {
      var that = this;
      console.log(this.exameSelecionado);
      axios.post('/pcmso/' + this.pcmso.idPcmso + '/exames', {
        exame: that.exameSelecionado.idExame,
        dados: that.exame
      }).then(function (response) {
        that.historicos = response.data;
        that.exameSelecionado = {};
        that.exame = {};
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/pcmso/' + this.pcmso.idPcmso + '/exames/').then(function (response) {
      that.exames = response.data;
    });
    axios.get('/pcmso/' + this.pcmso.idPcmso + '/exames/list').then(function (response) {
      that.historicos = response.data;
      console.log(response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Exame")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.exameSelecionado,
                expression: "exameSelecionado"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "exameSelecionado", id: "" },
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
                _vm.exameSelecionado = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          _vm._l(_vm.exames, function(exame) {
            return _c("option", { domProps: { value: exame } }, [
              _vm._v(_vm._s(exame.nomeExame) + " - " + _vm._s(exame.descricao))
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Idade Minima")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.exame.idadeMinima,
              expression: "exame.idadeMinima"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.exame.idadeMinima },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.exame, "idadeMinima", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Idade Máxima")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.exame.idadeMaxima,
              expression: "exame.idadeMaxima"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.exame.idadeMaxima },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.exame, "idadeMaxima", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Periodo")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.exame.periodo,
                expression: "exame.periodo"
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
                  _vm.exame,
                  "periodo",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _vm.exame.periodico != "S"
              ? _c("option", { attrs: { value: "0" } }, [_vm._v("0 meses")])
              : _vm._e(),
            _vm._v(" "),
            _c("option", { attrs: { value: "6" } }, [_vm._v("6 meses")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "12" } }, [_vm._v("12 meses")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "18" } }, [_vm._v("18 meses")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "24" } }, [_vm._v("24 meses")])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-10" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Observação")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.exame.observacao,
              expression: "exame.observacao"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text" },
          domProps: { value: _vm.exame.observacao },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.exame, "observacao", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2 mt-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-success btn-block",
          on: { click: _vm.atualizar }
        },
        [_vm._v("Atualizar")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("table", { staticClass: "table" }, [
        _c(
          "tbody",
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.historicos, function(historico) {
              return _c("tr", [
                _c("td", [
                  _vm._v(
                    " " +
                      _vm._s(historico.exame.nomeExame) +
                      " - " +
                      _vm._s(historico.exame.descricao) +
                      " "
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(historico.idadeMinima) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(historico.idadeMaxima) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(historico.periodo) + " ")]),
                _vm._v(" "),
                _c("td", [_vm._v(" " + _vm._s(historico.observacao) + " ")])
              ])
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Exame")]),
      _vm._v(" "),
      _c("th", [_vm._v("Idade Minima")]),
      _vm._v(" "),
      _c("th", [_vm._v("Idade Máxima")]),
      _vm._v(" "),
      _c("th", [_vm._v("Periodo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Observação")])
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

/***/ "./resources/js/components/pcmso/PcmsoHistoricoExames.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoExames.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true& */ "./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true&");
/* harmony import */ var _PcmsoHistoricoExames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PcmsoHistoricoExames.vue?vue&type=script&lang=js& */ "./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PcmsoHistoricoExames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0bc8c3eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pcmso/PcmsoHistoricoExames.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoExames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoHistoricoExames.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoExames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pcmso/PcmsoHistoricoExames.vue?vue&type=template&id=0bc8c3eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PcmsoHistoricoExames_vue_vue_type_template_id_0bc8c3eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);