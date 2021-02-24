(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ambientes: '',
      origem: '',
      estabelecimento: '',
      nome: '',
      observacao: '',
      terceiro: '',
      codigo: '',
      subcodigo: '',
      id: '',
      erro: false,
      editar: false,
      carregando: true,
      mensagem: 'Carregando Ambiente de Trabalho cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      montou: false,
      deletar: '',
      coluna: '',
      ordem: true,
      termo: '',
      selecionado: 'codigo',
      idTabela: '#tabelaListagem'
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
        m;
      }
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
      }, 1000);
    },
    salvar: function salvar() {
      this.carregar('Salvando novo Ambiente de Trabalho...');
      var that = this;
      axios.post('/empresas/ambientes-de-trabalho', {
        nome: that.nome,
        origem: that.origem,
        estabelecimento: that.estabelecimento,
        terceiro: that.terceiro,
        observacao: that.observacao,
        codigo: that.codigo,
        subcodigo: that.subcodigo
      }).then(function (response) {
        //console.log(response.data);
        if (response.data == 'existente') {
          that.codigo = '';
          that.erro = true;
          that.alerta('Código já existente, verifique!');
        } else {
          that.ambientes = response.data;
          that.descricao = '';
          that.codigo = '';
          that.erro = false;
          that.$nextTick(function () {
            that.fechar();
            that.sucesso('Salvo com sucesso!');
          });
          that.sucesso('Salvo com sucesso!');
        }
      });
    },
    atualizar: function atualizar() {
      var that = this;
      axios.post('/empresas/ambientes-de-trabalho/update/' + this.id, {
        nome: that.nome,
        origem: that.origem,
        estabelecimento: that.estabelecimento,
        terceiro: that.terceiro,
        observacao: that.observacao,
        codigo: that.codigo,
        subcodigo: that.subcodigo
      }).then(function (response) {
        //console.log(response.data);
        if (response.data == 'erro') {
          that.codigo = '';
          that.erro = true;
        } else {
          that.ambientes = response.data;
          that.descricao = '';
          that.codigo = '';
          that.erro = false;
          that.$nextTick(function () {
            that.fechar();
            that.sucesso('Atualizado com sucesso!');
          });
        }
      });
    },
    abrir: function abrir() {
      $(this.idTabela).DataTable().destroy();
      this.$refs.myModal.show();
    },
    preencher: function preencher(dados) {
      this.carregar('Carregando dados...');
      this.nome = dados.nomeAmbienteTrabalho;
      this.codigo = dados.idAmbienteTrabalho;
      this.id = dados.idAmbienteTrabalho;
      this.origem = dados.idOrigem;
      this.subcodigo = dados.subCodigo;
      this.estabelecimento = dados.estabelecimento;
      this.terceiro = dados.inscricaoTerceiro;
      this.observacao = dados.observacao;
      this.editar = true;
      this.abrir();
      this.sucesso('Dados carregados!');
    },
    remover: function remover(dados) {
      this.deletar = dados.idAmbienteTrabalho;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy();
    },
    ok: function ok(evt) {
      evt.preventDefault();

      if (this.editar) {
        this.atualizar();
      } else {
        this.salvar();
      }
    },
    fechar: function fechar() {
      this.$root.$emit('montou', [this.idTabela]);
      this.editar = false;
      this.nome = '';
      this.origem = '';
      this.estabelecimento = '';
      this.subcodigo = '';
      this.terceiro = '';
      this.observacao = '';
      this.codigo = '';
      this.id = '';
      this.$refs.myModal.hide();
    },
    fecharCerteza: function fecharCerteza() {
      this.$root.$emit('montou', [this.idTabela]);
      this.$refs.modalCerteza.hide();
    },
    certeza: function certeza() {
      this.carregar('Removendo Ambiente de Trabalho...');
      var that = this;
      axios.get('/empresas/ambientes-de-trabalho/remover/' + this.deletar).then(function (response) {
        if (response.data != 'erro') {
          that.ambientes = response.data;
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
    axios.get('/empresas/ambientes-de-trabalho/list').then(function (response) {
      that.ambientes = response.data;
      that.montou = true;
      setTimeout(function () {
        that.$root.$emit('montou', [that.idTabela]);
        that.carregando = false;
      }, 200);
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
      that.descricao = '';
      that.codigo = '';
      that.editar = false;
      that.id = '';
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                      attrs: { data: this.ambientes, name: "ambientes.xls" }
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
                    _vm._l(_vm.ambientes, function(ambiente) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "100px" }
                          },
                          [
                            _c("b", [
                              _vm._v(_vm._s(ambiente.idAmbienteTrabalho))
                            ])
                          ]
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
                                    return _vm.remover(ambiente)
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
                                    return _vm.preencher(ambiente)
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
            title: "Detalhes do Ambiente de Trabalho | " + _vm.nome,
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
              _c(
                "div",
                { staticClass: "form-group", class: { "has-error": _vm.erro } },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.codigo,
                        expression: "codigo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: "", name: "ambiente" },
                    domProps: { value: _vm.codigo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.codigo = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c(
                "div",
                { staticClass: "form-group", class: { "has-error": _vm.erro } },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("ID de Origem")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.origem,
                        expression: "origem"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "ambiente" },
                    domProps: { value: _vm.origem },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.origem = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID secundário")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.subcodigo,
                      expression: "subcodigo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.subcodigo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.subcodigo = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Tipo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.estabelecimento,
                        expression: "estabelecimento"
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
                        _vm.estabelecimento = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "PRÓPRIO" } }, [
                      _vm._v("1 - Próprio")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "TERCEIROS" } }, [
                      _vm._v("2 - Terceiros")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.estabelecimento == "TERCEIROS"
              ? _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("CNPJ Terceiro")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.terceiro,
                          expression: "terceiro"
                        },
                        {
                          name: "mask",
                          rawName: "v-mask",
                          value: "##.###.###/####-##",
                          expression: "'##.###.###/####-##'"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.terceiro },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.terceiro = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c(
                "div",
                { staticClass: "form-group", class: { "has-error": _vm.erro } },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Nome do Ambiente")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.nome,
                        expression: "nome"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "ambiente" },
                    domProps: { value: _vm.nome },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.nome = $event.target.value
                      }
                    }
                  })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Observacao")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.observacao,
                      expression: "observacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.observacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.observacao = $event.target.value
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
              _c("h3", [
                _vm._v(
                  "Tem certeza que deseja excluir este Ambiente de Trabalho?"
                )
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

/***/ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8& */ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8&");
/* harmony import */ var _AmbienteDeTrabalhoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AmbienteDeTrabalhoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/AmbienteDeTrabalhoComponente.vue?vue&type=template&id=557482f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AmbienteDeTrabalhoComponente_vue_vue_type_template_id_557482f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);