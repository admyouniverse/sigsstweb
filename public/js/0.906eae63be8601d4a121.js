(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tamanhos: [],
      erro: false,
      editar: false,
      carregando: true,
      mensagem: 'Carregando tamanhos cadastradas...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      montou: false,
      deletar: '',
      coluna: '',
      ordem: true,
      termo: '',
      selecionado: 'codigo',
      idTabela: '#tabelaListagem',
      tamanho: {
        idTamanho: 0,
        descricao: '',
        observacao: ''
      }
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
    salvar: function salvar() {
      this.carregar('Salvando nova tamanho...');
      var that = this;
      axios.post('/tabelas/epi/tamanho', {
        tamanho: that.tamanho
      }).then(function (response) {
        that.tamanhos = response.data;
        that.$nextTick(function () {
          that.fechar();
          that.sucesso('Salvo com sucesso!');
        });
      });
    },
    atualizar: function atualizar() {
      var that = this;
      this.carregar('Atualizando nova tamanho...');

      if (this.nome != '' || this.codigo != '') {
        axios.post('/tabelas/epi/tamanhos/' + this.id, {
          nome: that.nome,
          codigo: that.codigo,
          grupo: that.grupo.idGrupoEpi
        }).then(function (response) {
          console.log(response.data);

          if (response.data == 'existente') {
            that.codigo = '';
            that.erro = true;
            that.alerta('Código já existente, verifique!');
          } else {
            that.tamanhos = response.data;
            that.nome = '';
            that.codigo = '';
            that.grupo = '';
            that.erro = false;
            that.$nextTick(function () {
              that.fechar();
              that.sucesso('Atualizado com sucesso!');
            });
          }
        });
      } else {
        that.alerta('Preencha todos os campos');
      }
    },
    abrir: function abrir() {
      $(this.idTabela).DataTable().destroy();
      this.tamanho = {
        idTamanho: 0,
        descricao: '',
        observacao: ''
      };
      this.$refs.myModal.show();
    },
    preencher: function preencher(dados) {
      this.carregar('Carregando dados...');
      console.log(dados);
      this.tamanho = dados;
      this.editar = true;
      $(this.idTabela).DataTable().destroy();
      this.$refs.myModal.show();
      this.sucesso('Dados carregados!');
    },
    remover: function remover(dados) {
      this.deletar = dados.idTamanho;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy();
    },
    ok: function ok(evt) {
      evt.preventDefault();
      this.salvar();
    },
    fechar: function fechar() {
      this.$root.$emit('montou', [this.idTabela]);
      this.editar = false;
      this.descricao = '';
      this.codigo = '';
      this.nome = '';
      this.grupo = '';
      this.$refs.myModal.hide();
    },
    fecharCerteza: function fecharCerteza() {
      this.$root.$emit('montou', [this.idTabela]);
      this.$refs.modalCerteza.hide();
    },
    certeza: function certeza() {
      this.carregar('Removendo tamanho...');
      var that = this;
      axios.get('/tabelas/epi/tamanho/remover/' + this.deletar).then(function (response) {
        if (response.data != 'erro') {
          that.tamanhos = response.data;
          that.$nextTick(function () {
            that.fecharCerteza();
            that.sucesso('Excluido com sucesso!');
          });
        } else {
          that.$nextTick(function () {
            that.fecharCerteza();
            that.alerta('Erro ao excluir!');
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/tamanhos').then(function (response) {
      that.tamanhos = response.data;
      that.montou = true;
      setTimeout(function () {
        that.$root.$emit('montou', [that.idTabela]);
        that.carregando = false;
      }, 200);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticClass: "row",
          staticStyle: { "margin-bottom": "15px", "margin-top": "10px" }
        },
        [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-sm",
                  attrs: { id: "modal", type: "button" },
                  on: { click: _vm.abrir }
                },
                [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Incluir")]
              ),
              _vm._v(" "),
              _vm.montou
                ? _c(
                    "download-excel",
                    {
                      staticClass: "btn btn-sm btn-secondary",
                      attrs: { data: this.tamanhos, name: "tamanhos.xls" }
                    },
                    [
                      _c("i", { staticClass: "far fa-save" }),
                      _vm._v(" Exportar\n            ")
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ]
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
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.tamanhos, function(tamanho) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "vertical-align": "middle",
                              width: "100px"
                            }
                          },
                          [_c("b", [_vm._v(_vm._s(tamanho.idTamanho))])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(tamanho.descricao))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(tamanho.observacao))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "100px" }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.remover(tamanho)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-trash" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-primary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.preencher(tamanho)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-pencil-alt" })]
                            )
                          ]
                        )
                      ])
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
            size: "xl",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Detalhes da Cor EPI",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.ok,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tamanho.idTamanho,
                      expression: "tamanho.idTamanho"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.tamanho.idTamanho },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.tamanho, "idTamanho", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Descrição")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tamanho.descricao,
                      expression: "tamanho.descricao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.tamanho.descricao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.tamanho, "descricao", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Observação")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tamanho.observacao,
                      expression: "tamanho.observacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.tamanho.observacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.tamanho, "observacao", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalCerteza",
          attrs: {
            size: "sm",
            "no-close-on-backdrop": true,
            centered: "",
            "hide-header": true,
            "hide-footer": true,
            "no-close-on-esc": true,
            id: "modalCerteza"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("h3", [_vm._v("Tem certeza que deseja excluir esta tamanho?")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-top": "20px" } },
            [
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-secondary btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.fecharCerteza }
                  },
                  [_c("i", { staticClass: "fa fa-close" }), _vm._v(" Não")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-danger btn-lg",
                    attrs: { type: "button" },
                    on: { click: _vm.certeza }
                  },
                  [_c("i", { staticClass: "fa fa-check" }), _vm._v(" Sim")]
                )
              ])
            ]
          )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v("\n                            ID\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Descrição\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Observação\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center no-sort" }, [_vm._v("Ações")])
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

/***/ "./resources/js/components/epi/TamanhosEpiComponente.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/epi/TamanhosEpiComponente.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TamanhosEpiComponente.vue?vue&type=template&id=02f41aca& */ "./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca&");
/* harmony import */ var _TamanhosEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TamanhosEpiComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TamanhosEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/epi/TamanhosEpiComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamanhosEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TamanhosEpiComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamanhosEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TamanhosEpiComponente.vue?vue&type=template&id=02f41aca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/TamanhosEpiComponente.vue?vue&type=template&id=02f41aca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TamanhosEpiComponente_vue_vue_type_template_id_02f41aca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);