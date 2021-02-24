(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['ppra', 'empresa'],
  data: function data() {
    return {
      selecionado: null,
      ambientes: [],
      ambiente: {
        idPpraAmbienteTrabalho: 0
      },
      listAmbientes: [],
      carregando: true,
      mensagem: 'Carregando...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      editar: false,
      listarFuncoes: false,
      funcoes: []
    };
  },
  methods: {
    preencheAmbiente: function preencheAmbiente() {
      if (this.selecionado) {
        this.ambiente = this.selecionado;
        console.log(this.ambiente);
      } else {
        this.ambiente = {};
      }

      this.ambiente.idPpraAmbienteTrabalho = 0;
    },
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
      }, 5000);
    },
    abrir: function abrir() {
      this.$refs.myModal.show();
    },
    fechar: function fechar() {
      this.$root.$emit('montou', [this.idTabela]);
      this.editar = false;
      this.ambiente = {
        idPpraAmbienteTrabalho: 0
      };
      this.$refs.myModal.hide();
    },
    preencher: function preencher(dados) {
      this.ambiente = Object.assign({}, dados);
      this.editar = true;
      this.$refs.myModal.show();
    },
    salvar: function salvar(evt) {
      var that = this;
      evt.preventDefault();
      that.mensagem = 'Salvando ambiente...';
      that.carregando = true;
      axios.post('/gro/ambiente', {
        ppra: that.ppra,
        editar: that.editar,
        ambiente: that.ambiente
      }).then(function (response) {
        if (response.data != 'erro') {
          // console.log(response.data);
          that.ambientes = response.data;
          that.$nextTick(function () {
            that.fechar();
            that.sucesso('Salvo com sucesso!');
          });
        } else {
          that.mensagem = 'Erro!';
          that.carregando = false;
        }
      });
    },
    remover: function remover(dados) {
      this.carregar('Removendo ambiente...');
      var that = this;
      axios.get('/gro/ambiente/' + this.ppra.idPpra + '/remover/' + dados.idPpraAmbienteTrabalho).then(function (response) {
        that.ambientes = response.data;
        that.sucesso('Ambiente excluído');
      });
    },
    // FUNCOES
    getFuncoes: function getFuncoes(ambiente) {
      this.carregar('Redirecionando...');
      var that = this;
      window.location.href = "/gro/" + this.ppra.idPpra + "/ambiente/" + ambiente.idPpraAmbienteTrabalho; // axios.get('/gro/ambiente/' + ambiente.idPpraAmbienteTrabalho + '/funcoes').then(function(response) {
      //     console.log(response.data);
      //     that.funcoes = response.data;
      //     that.sucesso('Funções recuperadas...');
      //     that.listarFuncoes = true;
      // });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/empresas/ambientes-de-trabalho/list/' + this.empresa.inscricao).then(function (response) {
      that.listAmbientes = response.data;
      console.log(that.listAmbientes);
    });
    axios.get('/gro/ambientes/' + this.ppra.idPpra).then(function (response) {
      that.ambientes = response.data;
      that.sucesso('Ambientes carregados!');
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-fade-enter-active[data-v-22c73f61] {\n  transition: all 0.3s ease;\n}\n.slide-fade-leave-active[data-v-22c73f61] {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-22c73f61], .slide-fade-leave-to[data-v-22c73f61] {\n  transform: translateY(-10px);\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true& ***!
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
    "div",
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _c(
                "tbody",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.ambientes, function(ambiente) {
                    return _c(
                      "tr",
                      {
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function($event) {
                            return _vm.getFuncoes(ambiente)
                          }
                        }
                      },
                      [
                        _c("td", [
                          _vm._v(_vm._s(ambiente.idPpraAmbienteTrabalho))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(ambiente.nomeAmbienteTrabalho))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ambiente.estabelecimento))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ambiente.inscricaoTerceiro))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ambiente.observacao))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(ambiente.subcodigo))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.preencher(ambiente)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-eye" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-danger",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.remover(ambiente)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
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
              [_vm._v("Adicionar Ambiente")]
            )
          ]),
          _vm._v(" "),
          _c("transition", { attrs: { name: "slide-fade" } }, [
            _vm.listarFuncoes
              ? _c("div", { staticClass: "col-md-12 mt-4" }, [
                  _c("h4", [
                    _vm._v("Funções | "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        on: {
                          click: function($event) {
                            _vm.listarFuncoes = false
                          }
                        }
                      },
                      [_vm._v("Fechar")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v("ID")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Cargo")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Descricao RH")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("CBO")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Masc.")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Fem.")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Ações")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.funcoes, function(funcao) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(funcao.idRH))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(funcao.cargo))])
                          ])
                        })
                      ],
                      2
                    )
                  ])
                ])
              : _vm._e()
          ])
        ],
        1
      ),
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
            title: "Detalhes do Ambiente",
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
          !_vm.editar
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Qual ambiente deseja inserir?")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selecionado,
                            expression: "selecionado"
                          }
                        ],
                        staticClass: "form-control",
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.selecionado = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            _vm.preencheAmbiente
                          ]
                        }
                      },
                      [
                        _c("option", { domProps: { value: null } }, [
                          _vm._v("---- Selecione -----")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.listAmbientes, function(ambiente) {
                          return _c(
                            "option",
                            { domProps: { value: ambiente } },
                            [_vm._v(_vm._s(ambiente.nomeAmbienteTrabalho))]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("transition", { attrs: { name: "slide-fade" } }, [
            _vm.selecionado || _vm.editar
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.idPpraAmbienteTrabalho,
                            expression: "ambiente.idPpraAmbienteTrabalho"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: {
                          value: _vm.ambiente.idPpraAmbienteTrabalho
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "idPpraAmbienteTrabalho",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("ID Origem")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.idOrigem,
                            expression: "ambiente.idOrigem"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.ambiente.idOrigem },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "idOrigem",
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
                      _c("label", { attrs: { for: "" } }, [_vm._v("Nome")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.nomeAmbienteTrabalho,
                            expression: "ambiente.nomeAmbienteTrabalho"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.ambiente.nomeAmbienteTrabalho },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "nomeAmbienteTrabalho",
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
                        _vm._v("Estabelecimento")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ambiente.estabelecimento,
                              expression: "ambiente.estabelecimento"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "", id: "", disabled: "" },
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
                                _vm.ambiente,
                                "estabelecimento",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "SELECIONE" } }),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "TERCEIROS" } }, [
                            _vm._v("TERCEIROS")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "PRÓPRIO" } }, [
                            _vm._v("PROPRIO")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Inscrição Terceiro")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.inscricaoTerceiro,
                            expression: "ambiente.inscricaoTerceiro"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.ambiente.inscricaoTerceiro },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "inscricaoTerceiro",
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
                        _vm._v("Subcódigo")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.subCodigo,
                            expression: "ambiente.subCodigo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.ambiente.subCodigo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "subCodigo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Observação")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ambiente.observacao,
                            expression: "ambiente.observacao"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { cols: "30", rows: "3" },
                        domProps: { value: _vm.ambiente.observacao },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ambiente,
                              "observacao",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              : _vm._e()
          ])
        ],
        1
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
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("Nome")]),
      _vm._v(" "),
      _c("th", [_vm._v("Estabelecimento")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "150px" } }, [
        _vm._v("Inscrição Terceiros")
      ]),
      _vm._v(" "),
      _c("th", [_vm._v("Observação")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subcódigo")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "110px" } }, [_vm._v("Ações")])
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

/***/ "./resources/js/components/ppra/PpraAmbiente.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ppra/PpraAmbiente.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true& */ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true&");
/* harmony import */ var _PpraAmbiente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraAmbiente.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& */ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PpraAmbiente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22c73f61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/PpraAmbiente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraAmbiente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=style&index=0&id=22c73f61&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_style_index_0_id_22c73f61_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraAmbiente.vue?vue&type=template&id=22c73f61&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraAmbiente_vue_vue_type_template_id_22c73f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);