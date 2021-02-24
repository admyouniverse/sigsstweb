(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contratos: [],
      contrato: {
        empresaContratante: {},
        dataIni: '',
        dataFim: ''
      },
      contratantes: [],
      contratados: [],
      editar: false,
      atual: '',
      carregando: true,
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    preencher: function preencher(contrato) {
      this.atual = contrato.empresaContratante.idEmpresa;
      this.contrato = contrato;
      this.editar = true;
      this.abrir();
    },
    abrir: function abrir() {
      this.$refs.myModal.show();
    },
    fechar: function fechar() {
      this.editar = false;
      this.contrato = {
        empresaContratante: {},
        dataIni: '',
        dataFim: ''
      };
      this.atual = '';
      this.$refs.myModal.hide();
    },
    fecharCerteza: function fecharCerteza() {
      this.$refs.modalCerteza.hide();
    },
    sucesso: function sucesso(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-check-circle fa-2x fa-fw"></i>';
      var that = this;
      setTimeout(function () {
        that.carregando = false;
      }, 800);
    },
    contratanteEmContrato: function contratanteEmContrato(empresa) {
      /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */
      for (var i = 0; i < this.contratos.length; i++) {
        if (this.contratos[i].empresaContratante.idEmpresa === empresa.idEmpresa || empresa.tipoEmpresa == 'CONTRATADA' || empresa.tipoEmpresa == 'SELECIONE') {
          return true;
        }
      }

      return false;
    },
    ok: function ok(evt) {
      evt.preventDefault();

      if (this.editar) {
        this.atualizar();
      } else {
        this.salvar();
      }
    },
    remover: function remover(contrato) {
      this.deletar = contrato.idEmpresaContrato;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy();
    },
    certeza: function certeza() {
      this.carregar('Removendo contrato...');
      var that = this;
      axios.get('/empresas/contratos/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function (response) {
        that.contratos = response.data;
        that.$nextTick(function () {
          that.fecharCerteza();
          that.sucesso('Excluido com sucesso!');
        });
      });
    },
    atualizar: function atualizar() {
      var that = this;
      axios.post('/empresas/contratos/atualizar/' + that.empresa.idEmpresa, {
        contrato: that.contrato.idEmpresaContrato,
        contratante: that.contrato.empresaContratante.idEmpresa,
        dataIni: that.contrato.dataIni,
        dataFim: that.contrato.dataFim
      }).then(function (response) {
        that.contratos = response.data;
        that.$nextTick(function () {
          that.fechar();
        });
      });
    },
    salvar: function salvar() {
      var that = this;
      axios.post('/empresas/contratos/novo/' + that.empresa.idEmpresa, {
        contratante: that.contrato.empresaContratante.idEmpresa,
        dataIni: that.contrato.dataIni,
        dataFim: that.contrato.dataFim
      }).then(function (response) {
        that.contratos = response.data;
        that.$nextTick(function () {
          that.fechar();
        });
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
      that.contratos = response.data;
    });
    axios.get('/empresas/contratos/' + that.empresa.idEmpresa + '/contratados').then(function (response) {
      that.contratados = response.data;
    });
    axios.get('/empresas/list/').then(function (response) {
      that.contratantes = response.data; // //console.log(response.data);
    });
    this.sucesso('Carregados os contratos');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32& ***!
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
      _vm.empresa.tipoEmpresa == "AMBAS" ||
      _vm.empresa.tipoEmpresa == "CONTRATADA"
        ? _c(
            "div",
            { staticClass: "row" },
            [
              _c("h3", { staticClass: "ml-4" }, [_vm._v("Contratantes")]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
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
                        _vm._l(_vm.contratos, function(contrato) {
                          return contrato.empresaContratante.idEmpresa !=
                            _vm.empresa.idEmpresa
                            ? _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      contrato.empresaContratante.razaoSocial
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      contrato.empresaContratante.inscricao
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      contrato.empresaContratante.nomeUnidade
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("moment")(
                                        contrato.dataIni,
                                        "DD/MM/Y"
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                contrato.dataFim
                                  ? _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("moment")(
                                            contrato.dataFim,
                                            "DD/MM/Y"
                                          )
                                        )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !contrato.dataFim
                                  ? _c("td", [_vm._v("__/__/____")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-outline-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.remover(contrato)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-trash" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-outline-primary",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.preencher(contrato)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      })
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e()
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12 ml-2 mb-4" }, [
                _c("br"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: {
                      click: function($event) {
                        return _vm.abrir()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Adicionar")]
                )
              ]),
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
                    title: "Detalhes do Contrato",
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
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Contratante")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.contrato.empresaContratante,
                                expression: "contrato.empresaContratante"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "" },
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
                                  _vm.contrato,
                                  "empresaContratante",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.contratantes, function(contratante) {
                            return (contratante.tipoEmpresa == "AMBAS" ||
                              contratante.tipoEmpresa == "CONTRATANTE") &&
                              ((!_vm.contratanteEmContrato(contratante) &&
                                contratante.idEmpresa !=
                                  _vm.empresa.idEmpresa) ||
                                contratante.idEmpresa == _vm.atual)
                              ? _c(
                                  "option",
                                  { domProps: { value: contratante } },
                                  [_vm._v(_vm._s(contratante.razaoSocial))]
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Data Inicial")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contrato.dataIni,
                              expression: "contrato.dataIni"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.contrato.dataIni },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.contrato,
                                "dataIni",
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
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Data Final")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.contrato.dataFim,
                              expression: "contrato.dataFim"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.contrato.dataFim },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.contrato,
                                "dataFim",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.empresa.tipoEmpresa == "AMBAS" ||
      _vm.empresa.tipoEmpresa == "CONTRATANTE"
        ? _c("div", { staticClass: "row" }, [
            _c("h3", { staticClass: "ml-4" }, [_vm._v("Contratadas")]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
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
                      _vm._l(_vm.contratados, function(contratado) {
                        return contratado.empresa.idEmpresa !=
                          _vm.empresa.idEmpresa
                          ? _c("tr", [
                              _c("td", [
                                _vm._v(_vm._s(contratado.empresa.razaoSocial))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(contratado.empresa.inscricao))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(contratado.empresa.nomeUnidade))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("moment")(
                                      contratado.dataIni,
                                      "DD/MM/Y"
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              contratado.dataFim
                                ? _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("moment")(
                                          contratado.dataFim,
                                          "DD/MM/Y"
                                        )
                                      )
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              !contratado.dataFim
                                ? _c("td", [_vm._v("__/__/____")])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-danger",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.remover(contratado)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-outline-primary",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.preencher(contratado)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-pencil-alt"
                                    })
                                  ]
                                )
                              ])
                            ])
                          : _vm._e()
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          ])
        : _vm._e(),
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
              _c("h3", [
                _vm._v("Tem certeza que deseja excluir este contrato?")
              ])
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
                    staticClass: "btn btn-block btn-default btn-lg",
                    attrs: { type: "button", "data-dismiss": "modal" }
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
        _c("th", [_vm._v("Contratante")]),
        _vm._v(" "),
        _c("th", [_vm._v("CNPJ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data Início")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data Final")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ações")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Contratada")]),
        _vm._v(" "),
        _c("th", [_vm._v("CNPJ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data Início")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data Final")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ações")])
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

/***/ "./resources/js/components/empresa/EmpresaContratosComponente.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaContratosComponente.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaContratosComponente.vue?vue&type=template&id=087f4a32& */ "./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32&");
/* harmony import */ var _EmpresaContratosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaContratosComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresaContratosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaContratosComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaContratosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaContratosComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaContratosComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaContratosComponente.vue?vue&type=template&id=087f4a32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaContratosComponente.vue?vue&type=template&id=087f4a32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaContratosComponente_vue_vue_type_template_id_087f4a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);