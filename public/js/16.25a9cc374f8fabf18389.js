(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      exames: '',
      nome: '',
      homemMin: '',
      homemMax: '',
      mulherMin: '',
      mulherMax: '',
      codigo: '',
      descricao: '',
      tabela27: '',
      observacao: '',
      sexo: '',
      grupo: '',
      unidade: '',
      id: '',
      erro: false,
      editar: false,
      carregando: true,
      mensagem: 'Carregando exames cadastrados',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      montou: false,
      deletar: '',
      destaque: '',
      coluna: '',
      ordem: true,
      termo: '',
      selecionado: 'id',
      idTabela: '#tabelaListagem'
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
      this.carregar('Salvando novo exame...');
      var that = this;

      if (this.descricao != '' || this.codigo != '') {
        axios.post('/tabelas/exames', {
          nome: that.nome,
          unidadeMedida: that.unidade,
          sexo: that.sexo,
          grupo: that.grupo,
          tabela27: that.tabela27,
          observacao: that.observacao,
          descricao: that.descricao,
          homemMax: that.homemMax,
          homemMin: that.homemMin,
          mulherMax: that.mulherMax,
          mulherMin: that.mulherMin
        }).then(function (response) {
          console.log(response.data);

          if (response.data == 'existente') {
            that.codigo = '';
            that.erro = true;
            that.alerta('Código exame já existente, verifique!');
          } else {
            that.exames = response.data;
            that.sexo = '';
            that.cuidado = '';
            that.grupo = '';
            that.nome = '';
            that.tabela27 = '';
            that.observacao = '';
            that.validade = '';
            that.erro = false;
            that.homemMax = '';
            that.homemMin = '';
            that.mulherMax = '';
            that.mulherMin = '';
            that.$nextTick(function () {
              that.fechar();
              that.sucesso('Salvo com sucesso!');
            });
          }
        });
      } else {
        that.alerta('Preencha todos os campos');
      }
    },
    atualizar: function atualizar() {
      var that = this;
      this.carregar('Atualizando novo exame...');

      if (this.descricao != '') {
        axios.post('/tabelas/exames/update/' + this.id, {
          nome: that.nome,
          unidadeMedida: that.unidade,
          sexo: that.sexo,
          grupo: that.grupo,
          tabela27: that.tabela27,
          observacao: that.observacao,
          descricao: that.descricao,
          homemMax: that.homemMax,
          homemMin: that.homemMin,
          mulherMax: that.mulherMax,
          mulherMin: that.mulherMin
        }).then(function (response) {
          console.log(response.data);

          if (response.data == 'existente') {
            that.codigo = '';
            that.erro = true;
            that.alerta('Código exame já existente, verifique!');
          } else {
            that.exames = response.data;
            that.sexo = '';
            that.cuidado = '';
            that.grupo = '';
            that.nome = '';
            that.tabela27 = '';
            that.observacao = '';
            that.validade = '';
            that.erro = false;
            that.homemMax = '';
            that.homemMin = '';
            that.mulherMax = '';
            that.mulherMin = '';
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
      this.$refs.myModal.show();
      $(this.idTabela).DataTable().destroy();
    },
    preencher: function preencher(dados) {
      this.carregar('Carregando dados...');
      this.id = dados.idExame;
      this.sexo = dados.sexo;
      this.descricao = dados.descricao;
      this.grupo = dados.grupoExame;
      this.nome = dados.nomeExame;
      this.tabela27 = dados.tabela27;
      this.observacao = dados.observacao;
      this.unidade = dados.unidadeMedida;
      this.homemMax = dados.referenciaMaxMasculino;
      this.homemMin = dados.referenciaMinMasculino;
      this.mulherMax = dados.referenciaMaxFeminino;
      this.mulherMin = dados.referenciaMinFeminino;
      this.editar = true;
      this.abrir();
      this.sucesso('Dados carregados!');
    },
    remover: function remover(dados) {
      this.deletar = dados.idCid;
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
      this.editar = false;
      this.id = '';
      this.descricao = '';
      this.codigo = '';
      this.$root.$emit('montou', [this.idTabela]);
      this.$refs.myModal.hide();
    },
    fecharCerteza: function fecharCerteza() {
      this.$refs.modalCerteza.hide();
      this.$root.$emit('montou', [this.idTabela]);
    },
    certeza: function certeza() {
      this.carregar('Removendo CID...');
      var that = this;
      axios.get('/tabelas/cid/remover/' + this.deletar).then(function (response) {
        if (response.data != 'erro') {
          that.cids = response.data;
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
    axios.get('/tabelas/exames/list').then(function (response) {
      that.exames = response.data;
      that.montou = true;
      setTimeout(function () {
        that.carregando = false;
        that.$root.$emit('montou', [that.idTabela]);
      }, 200);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                      attrs: { data: this.exames, name: "exames.xls" }
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
                    _vm._l(_vm.exames, function(exame) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: { "vertical-align": "middle" },
                            attrs: { width: "80px" }
                          },
                          [_c("b", [_vm._v(_vm._s(exame.idExame))])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(exame.nomeExame))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(exame.grupoExame))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(exame.tabela27))
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
                                    return _vm.remover(exame)
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
                                    return _vm.preencher(exame)
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
            title: "Detalhes do Exame",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Tabela 27")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tabela27,
                      expression: "tabela27"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.tabela27 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.tabela27 = $event.target.value
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
                      value: _vm.nome,
                      expression: "nome"
                    }
                  ],
                  staticClass: "form-control",
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
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Unidade de Medida")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.unidade,
                      expression: "unidade"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.unidade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.unidade = $event.target.value
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Descrição do Exame")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.descricao,
                      expression: "descricao"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.descricao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.descricao = $event.target.value
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Sexo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.sexo,
                        expression: "sexo"
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
                        _vm.sexo = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "SELECIONE" } }, [
                      _vm._v("Selecione")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "MASCULINO" } }, [
                      _vm._v("Masculino")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "FEMININO" } }, [
                      _vm._v("Feminino")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AMBOS" } }, [
                      _vm._v("Ambos")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Grupo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.grupo,
                        expression: "grupo"
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
                        _vm.grupo = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "URINA" } }, [
                      _vm._v("Urina")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "SANGUE" } }, [
                      _vm._v("Sangue")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "APARELHO" } }, [
                      _vm._v("Aparelho")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "FEZES" } }, [
                      _vm._v("Fezes")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "IMAGEM" } }, [
                      _vm._v("Imagem")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "MATERIAL COLETADO" } }, [
                      _vm._v("Material Coletado")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("H. Máximo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.homemMax,
                          expression: "homemMax"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.homemMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.homemMax = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("H. Minimo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.homemMin,
                          expression: "homemMin"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.homemMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.homemMin = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("M. Máximo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.mulherMax,
                          expression: "mulherMax"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.mulherMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.mulherMax = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("M. Minimo")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.mulherMin,
                          expression: "mulherMin"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.mulherMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.mulherMin = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Observações")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.observacao,
                      expression: "observacao"
                    }
                  ],
                  staticClass: "form-control",
                  staticStyle: { height: "110px" },
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
              _c("h3", [_vm._v("Tem certeza que deseja excluir este CID?")])
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
          _vm._v("\n                            Nome\n                        ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Grupo\n                        "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                            Tabela 27\n                        "
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

/***/ "./resources/js/components/ExamesComponente.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExamesComponente.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamesComponente.vue?vue&type=template&id=51bdfbe0& */ "./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0&");
/* harmony import */ var _ExamesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamesComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamesComponente.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExamesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExamesComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExamesComponente.vue?vue&type=template&id=51bdfbe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExamesComponente.vue?vue&type=template&id=51bdfbe0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamesComponente_vue_vue_type_template_id_51bdfbe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);