(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ambiente: {
        empresaContratante: {},
        dataIni: '',
        dataFim: ''
      },
      epis: [],
      epi: {
        "idAmbienteCadastroEpi": 0,
        "ambienteTrabalho": {},
        "cadastroEpi": {},
        "validade": 0,
        "quantidade": 0,
        "uso": ""
      },
      episAmbiente: [],
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
    preencher: function preencher(ambiente) {
      var that = this;
      axios.get('/empresas/ambientes-de-trabalho/epis/' + ambiente.idAmbienteTrabalho).then(function (response) {
        that.episAmbiente = response.data; //console.log(response.data);
      });
      this.ambiente = ambiente;
      this.editar = true;
      this.abrir();
    },
    edit: function edit(dados) {
      this.epi = Object.assign({}, dados);
      this.atual = this.epi.cadastroEpi.idCadastroEpi;
      this.$refs.novoEpi.show();
    },
    adicionarEpi: function adicionarEpi(ambiente) {
      this.epi.ambienteTrabalho = ambiente;
      this.epi.idAmbienteCadastroEpi = 0;
      this.epi.cadastroEpi = {};
      this.epi.validade = 0;
      this.epi.quantidade = 0;
      this.atual = {}; // this.epi.uso = 0;

      this.$refs.novoEpi.show();
    },
    abrir: function abrir() {
      this.$refs.myModal.show();
    },
    fechar: function fechar() {
      this.editar = false;
      this.ambiente = {
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
    epiEmAmbiente: function epiEmAmbiente(epi) {
      for (var i = 0; i < this.episAmbiente.length; i++) {
        if (this.episAmbiente[i].cadastroEpi.idCadastroEpi === epi.idCadastroEpi) {
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
    remover: function remover(epi) {
      this.deletar = epi;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy();
    },
    certeza: function certeza() {
      this.carregar('Removendo epi...');
      var that = this;
      axios.get('/empresas/ambientes-de-trabalho/remover/epi/' + this.deletar.idAmbienteCadastroEpi).then(function (response) {
        //console.log(that.deletar);
        that.preencher(that.deletar.ambienteTrabalho);
        that.$nextTick(function () {
          that.fecharCerteza();
          that.sucesso('Excluido com sucesso!');
        });
      });
    },
    atualizar: function atualizar() {
      var that = this;
      axios.post('/empresas/ambientes/atualizar/' + that.empresa.idEmpresa, {
        ambiente: that.ambiente.idEmpresaContrato,
        contratante: that.ambiente.empresaContratante.idEmpresa,
        dataIni: that.ambiente.dataIni,
        dataFim: that.ambiente.dataFim
      }).then(function (response) {
        that.ambientes = response.data;
        that.$nextTick(function () {
          that.fechar();
        });
      });
    },
    salvarEpi: function salvarEpi(evt) {
      evt.preventDefault();
      var that = this; //console.log(this.epi);

      axios.post('/empresas/ambientes-de-trabalho/epi/' + that.empresa.idEmpresa, {
        epi: that.epi
      }).then(function (response) {
        that.episAmbiente = response.data; //console.log(response.data);

        that.$refs.novoEpi.hide();
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
      that.epis = response.data;
    });
    axios.get('/empresas/ambientes-de-trabalho/list/' + that.empresa.inscricao.replace(/[^0-9]/g, '')).then(function (response) {
      that.ambientes = response.data; //console.log(response.data);
    });
    this.sucesso('Carregados os ambientes');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                _vm._l(_vm.ambientes, function(ambiente) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(ambiente.idAmbienteTrabalho))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(ambiente.nomeAmbienteTrabalho))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-danger",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.preencher(ambiente)
                            }
                          }
                        },
                        [_vm._v("EPI")]
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "myModal",
          attrs: {
            size: "xl",
            centered: "",
            title: "Listagem de EPI",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            "hide-footer": true,
            id: "modal1"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _c(
                  "tbody",
                  [
                    _c("tr", [
                      _c("th", [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("EPI")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Unidade")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Quantidade")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Validade (Dias)")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Uso")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Ações")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.episAmbiente, function(epi) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(epi.idAmbienteCadastroEpi))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              epi.cadastroEpi.epi.categoriaEpi.grupoEpi
                                .codigoGrupoEpi
                            ) +
                              "." +
                              _vm._s(
                                epi.cadastroEpi.epi.categoriaEpi.codigoCategoria
                              ) +
                              "\n                                - " +
                              _vm._s(epi.cadastroEpi.epi.codigoNr6) +
                              " | " +
                              _vm._s(epi.cadastroEpi.epi.descricao)
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          epi.cadastroEpi.epi.unidade == "UN"
                            ? _c("span", [
                                _vm._v(
                                  "\n                                    PEÇA\n                                "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          epi.cadastroEpi.epi.unidade != "UN"
                            ? _c("span", [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(epi.cadastroEpi.epi.unidade) +
                                    "\n                                "
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(epi.quantidade))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(epi.validade))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(epi.uso))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-outline-danger",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.remover(epi)
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
                                  return _vm.edit(epi)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-pencil-alt" })]
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-lg",
                  on: {
                    click: function($event) {
                      return _vm.adicionarEpi(_vm.ambiente)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v("\n                    Adicionar")
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "novoEpi",
          attrs: {
            size: "lg",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Adicionar EPI",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: { ok: _vm.salvarEpi }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("EPI")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.epi.cadastroEpi,
                        expression: "epi.cadastroEpi"
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
                          _vm.epi,
                          "cadastroEpi",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.epis, function(epi) {
                    return !_vm.epiEmAmbiente(epi) ||
                      epi.idCadastroEpi === _vm.atual
                      ? _c("option", { domProps: { value: epi } }, [
                          _vm._v(
                            _vm._s(
                              epi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi
                            ) +
                              "." +
                              _vm._s(epi.epi.categoriaEpi.codigoCategoria) +
                              "\n                            - " +
                              _vm._s(epi.epi.codigoNr6) +
                              " | " +
                              _vm._s(epi.epi.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.epi.idAmbienteCadastroEpi,
                      expression: "epi.idAmbienteCadastroEpi"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.epi.idAmbienteCadastroEpi },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.epi,
                        "idAmbienteCadastroEpi",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Validade (Dias)")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.epi.validade,
                      expression: "epi.validade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.epi.validade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.epi, "validade", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Quantidade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.epi.quantidade,
                      expression: "epi.quantidade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.epi.quantidade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.epi, "quantidade", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Uso")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.epi.uso,
                        expression: "epi.uso"
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
                          _vm.epi,
                          "uso",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "HP" } }, [_vm._v("HP")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "HI" } }, [_vm._v("HI")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "EV" } }, [_vm._v("EV")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Unidade")]),
                _vm._v(" "),
                _vm.epi.cadastroEpi.epi &&
                _vm.epi.cadastroEpi.epi.unidade != "UN"
                  ? _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.epi.cadastroEpi.epi.unidade,
                          expression: "epi.cadastroEpi.epi.unidade"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" },
                      domProps: { value: _vm.epi.cadastroEpi.epi.unidade },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.epi.cadastroEpi.epi,
                            "unidade",
                            $event.target.value
                          )
                        }
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.epi.cadastroEpi.epi &&
                _vm.epi.cadastroEpi.epi.unidade == "UN"
                  ? _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "", value: "PEÇA" }
                    })
                  : _vm._e(),
                _vm._v(" "),
                !_vm.epi.cadastroEpi.epi
                  ? _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text", disabled: "" }
                    })
                  : _vm._e()
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
              _c("h3", [_vm._v("Tem certeza que deseja excluir este EPI?")])
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
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ambiente Trabalho")]),
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

/***/ "./resources/js/components/empresa/EmpresaAmbienteEpi.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbienteEpi.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e& */ "./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e&");
/* harmony import */ var _EmpresaAmbienteEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaAmbienteEpi.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresaAmbienteEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaAmbienteEpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbienteEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaAmbienteEpi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbienteEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaAmbienteEpi.vue?vue&type=template&id=0d54788e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaAmbienteEpi_vue_vue_type_template_id_0d54788e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);