(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['ppra', 'ambiente', 'empresa'],
  data: function data() {
    return {
      data: false,
      funcoes: [],
      funcoesAmbiente: [],
      funcaoAmbiente: {
        funcao: {
          cbo: {},
          idRH: 0
        },
        idRH: '',
        cargo: '',
        descricaoRH: '',
        cbo: {},
        idPpraFuncao: 0,
        ppraAmbienteTrabalho: '',
        totalMasculino: '',
        totalMenor: '',
        totalFeminino: '',
        alterado: '',
        anexada: '',
        maquinas: '',
        equipamentos: '',
        ferramentas: '',
        descricaoOcupacional: '',
        dataInclusao: ''
      },
      cbos: [],
      atual: 0
    };
  },
  methods: {
    remover: function remover(func) {
      var that = this;
      axios.get('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/destroy-funcao/' + func.idPpraFuncao).then(function (response) {
        that.funcoesAmbiente = response.data;
      });
    },
    funcaoEmFuncao: function funcaoEmFuncao(func) {
      for (var i = 0; i < this.funcoesAmbiente.length; i++) {
        if (this.funcoesAmbiente[i].idRH === func.idRH) {
          return true;
        }
      }

      return false;
    },
    verificaData: function verificaData() {
      var that = this;
      var dataInclusao = new Date(this.funcaoAmbiente.dataInclusao);
      var data = new Date(this.ppra.dataHora);

      if (dataInclusao < data) {
        data.setDate(data.getDate() + 1);
        this.$alert('Data precisa ser maior que ' + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
        that.funcaoAmbiente.dataInclusao = that.ppra.dataHora;
      }
    },
    totalPessoas: function totalPessoas() {
      this.funcaoAmbiente.total = parseInt(this.funcaoAmbiente.totalMasculino) + parseInt(this.funcaoAmbiente.totalFeminino);
    },
    editar: function editar(funcao) {
      var f = funcao;
      var that = this;
      this.atual = funcao.idRH;

      if (f.anexada == 'SIM') {
        this.data = false;
      } else {
        this.data = true;
      }

      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/funcoes/buscaPorIdRH/' + funcao.idRH).then(function (response) {
        f.funcao = response.data;
        that.funcaoAmbiente = f;
        that.totalPessoas();
        that.$refs.modalCargo.show();
        that.funcaoAmbiente.total = parseInt(that.funcaoAmbiente.totalMasculino) + parseInt(that.funcaoAmbiente.totalFeminino);
      });
    },
    abrirDescricaoRH: function abrirDescricaoRH() {
      if (this.funcaoAmbiente.funcao.idRH) {
        this.$refs.modalRH.show();
      }
    },
    abrirDescricaoCBO: function abrirDescricaoCBO() {
      if (this.funcaoAmbiente.funcao.cbo) {
        this.$refs.modalCBO.show();
      }
    },
    incluir: function incluir() {
      this.data = true;
      this.funcaoAmbiente = {
        idRH: '',
        cargo: '',
        descricaoRH: '',
        cbo: {},
        idPpraFuncao: 0,
        ppraAmbienteTrabalho: '',
        totalMasculino: 0,
        totalMenor: 0,
        totalFeminino: 0,
        alterado: 'S',
        anexada: 'NÃO',
        maquinas: '',
        equipamentos: '',
        ferramentas: '',
        descricaoOcupacional: '',
        dataInclusao: this.ppra.dataHora,
        funcao: {
          cbo: {},
          idRH: 0
        },
        total: 0
      };
      this.$refs.modalCargo.show();
    },
    abrir: function abrir() {
      this.data = false;
      this.funcaoAmbiente = {
        idRH: '',
        cargo: '',
        descricaoRH: '',
        cbo: {},
        idPpraFuncao: 0,
        ppraAmbienteTrabalho: '',
        totalMasculino: 0,
        totalMenor: 0,
        totalFeminino: 0,
        alterado: 'S',
        anexada: 'SIM',
        maquinas: '',
        equipamentos: '',
        ferramentas: '',
        descricaoOcupacional: '',
        dataInclusao: '',
        funcao: {
          cbo: {},
          idRH: 0
        },
        total: 0
      };
      this.$refs.modalCargo.show();
    },
    salvar: function salvar() {
      var that = this;
      this.funcaoAmbiente.ppraAmbienteTrabalho = this.ambiente.idPpraAmbienteTrabalho;
      this.funcaoAmbiente.alterado = 'S';
      axios.post('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/funcoes', {
        funcao: that.funcaoAmbiente
      }).then(function (response) {
        that.funcoesAmbiente = response.data;
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/gro/ambiente/' + this.ambiente.idPpraAmbienteTrabalho + '/funcoes').then(function (response) {
      that.funcoesAmbiente = response.data;
    });
    axios.get('/tabelas/cbo/list').then(function (response) {
      that.cbos = response.data;
    });
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/funcoes').then(function (response) {
      that.funcoes = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row" },
    [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h5", { staticClass: "title-table" }, [
          _vm._v(
            "\n            Lista de Cargos do Ambiente " +
              _vm._s(_vm.ambiente.nomeAmbienteTrabalho) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-hover table-striped" }, [
          _c(
            "tbody",
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.funcoesAmbiente, function(funcaoAmbiente) {
                return _c("tr", { staticStyle: { cursor: "pointer" } }, [
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.idPpraFuncao))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.idRH))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.cargo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.cbo.codigoCbo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.totalMasculino))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.totalFeminino))]),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(funcaoAmbiente.totalMenor))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        parseInt(funcaoAmbiente.totalMasculino) +
                          parseInt(funcaoAmbiente.totalFeminino)
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm._f("moment")(
                            funcaoAmbiente.dataInclusao,
                            "DD/MM/Y"
                          )
                        ) +
                        "\n                        "
                    ),
                    funcaoAmbiente.anexada == "SIM"
                      ? _c("span", [
                          _vm._v("\n                            - "),
                          _c("strong", [_vm._v("A")])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    funcaoAmbiente.anexada != "SIM"
                      ? _c("span", [
                          _vm._v("\n                            - "),
                          _c("strong", [_vm._v("I")])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.editar(funcaoAmbiente)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-pencil-alt" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.remover(funcaoAmbiente)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-trash" })]
                    )
                  ])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _vm._m(1),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [
                  _c("strong", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.funcoesAmbiente.length) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [
                  _c("strong", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm.funcoesAmbiente.reduce(function(total, valor) {
                            return total + valor.totalMasculino
                          }, 0)
                        ) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("strong", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm.funcoesAmbiente.reduce(function(total, valor) {
                            return total + valor.totalFeminino
                          }, 0)
                        ) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [
                  _c("strong", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm.funcoesAmbiente.reduce(function(total, valor) {
                            return total + valor.totalMenor
                          }, 0)
                        ) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("strong", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm.funcoesAmbiente.reduce(function(total, valor) {
                            return total + valor.totalMasculino
                          }, 0) +
                            _vm.funcoesAmbiente.reduce(function(total, valor) {
                              return total + valor.totalFeminino
                            }, 0)
                        ) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td")
              ])
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.abrir } },
          [_vm._v("Anexar Função")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.incluir } },
          [_vm._v("Incluir Função")]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalCargo",
          attrs: {
            size: "xl",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Detalhes do Cargo",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: { ok: _vm.salvar }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.idPpraFuncao,
                      expression: "funcaoAmbiente.idPpraFuncao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.funcaoAmbiente.idPpraFuncao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "idPpraFuncao",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.funcaoAmbiente.funcao,
                        expression: "funcaoAmbiente.funcao"
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
                          _vm.funcaoAmbiente,
                          "funcao",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.funcoes, function(funcao) {
                    return (!_vm.funcaoEmFuncao(funcao) &&
                      funcao.idRH != _vm.funcaoAmbiente.idRH) ||
                      funcao.idRH == _vm.atual
                      ? _c("option", { domProps: { value: funcao } }, [
                          _vm._v(_vm._s(funcao.cargo))
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Id RH")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.funcao.idRH,
                      expression: "funcaoAmbiente.funcao.idRH"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", disabled: "" },
                  domProps: { value: _vm.funcaoAmbiente.funcao.idRH },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente.funcao,
                        "idRH",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c(
                "div",
                {
                  staticClass: "form-group",
                  on: { click: _vm.abrirDescricaoRH }
                },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Descrição RH")]),
                  _vm._v(" "),
                  _vm.funcaoAmbiente.funcao.idRH
                    ? _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          disabled: "",
                          value: "Ver Descrição"
                        },
                        on: { click: _vm.abrirDescricaoRH }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.funcaoAmbiente.funcao.idRH
                    ? _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" }
                      })
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c(
                "div",
                {
                  staticClass: "form-group",
                  on: { click: _vm.abrirDescricaoCBO }
                },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("CBO")]),
                  _vm._v(" "),
                  _vm.funcaoAmbiente.funcao.cbo.idCbo
                    ? _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: {
                          value:
                            _vm.funcaoAmbiente.funcao.cbo.codigoCbo +
                            "- Ver Descrição"
                        },
                        on: { click: _vm.abrirDescricaoCBO }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.funcaoAmbiente.funcao.cbo.idCbo
                    ? _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" }
                      })
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Data Inclusão")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.dataInclusao,
                      expression: "funcaoAmbiente.dataInclusao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    min: _vm.ppra.dataHora,
                    disabled: _vm.data,
                    type: "date"
                  },
                  domProps: { value: _vm.funcaoAmbiente.dataInclusao },
                  on: {
                    blur: _vm.verificaData,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "dataInclusao",
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
                  _vm._v("Total Masculino")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.totalMasculino,
                      expression: "funcaoAmbiente.totalMasculino"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.funcaoAmbiente.totalMasculino },
                  on: {
                    change: _vm.totalPessoas,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "totalMasculino",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Total Feminino")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.totalFeminino,
                      expression: "funcaoAmbiente.totalFeminino"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.funcaoAmbiente.totalFeminino },
                  on: {
                    change: _vm.totalPessoas,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "totalFeminino",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Total Menor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.totalMenor,
                      expression: "funcaoAmbiente.totalMenor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.funcaoAmbiente.totalMenor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "totalMenor",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Total PCD")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.totalPCD,
                      expression: "funcaoAmbiente.totalPCD"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.funcaoAmbiente.totalPCD },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "totalPCD",
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
                  _vm._v("Total Empregados")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.total,
                      expression: "funcaoAmbiente.total"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", disabled: "" },
                  domProps: { value: _vm.funcaoAmbiente.total },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.funcaoAmbiente, "total", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Descrição Ocupacional")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.descricaoOcupacional,
                      expression: "funcaoAmbiente.descricaoOcupacional"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "5" },
                  domProps: { value: _vm.funcaoAmbiente.descricaoOcupacional },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "descricaoOcupacional",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Máquinas")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.maquinas,
                      expression: "funcaoAmbiente.maquinas"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.funcaoAmbiente.maquinas },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "maquinas",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Ferramentas")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.ferramentas,
                      expression: "funcaoAmbiente.ferramentas"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.funcaoAmbiente.ferramentas },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "ferramentas",
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Equipamentos")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.funcaoAmbiente.equipamentos,
                      expression: "funcaoAmbiente.equipamentos"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.funcaoAmbiente.equipamentos },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.funcaoAmbiente,
                        "equipamentos",
                        $event.target.value
                      )
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
          ref: "modalRH",
          attrs: {
            size: "md",
            centered: "",
            title: "Detalhes",
            "cancel-title": "Cancelar"
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Descrição de RH")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.funcaoAmbiente.funcao.descricaoRH,
                  expression: "funcaoAmbiente.funcao.descricaoRH"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: "" },
              domProps: { value: _vm.funcaoAmbiente.funcao.descricaoRH },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.funcaoAmbiente.funcao,
                    "descricaoRH",
                    $event.target.value
                  )
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalCBO",
          attrs: {
            size: "md",
            centered: "",
            title: "Detalhes",
            "cancel-title": "Cancelar"
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Descrição do CBO")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.funcaoAmbiente.funcao.cbo.descricao,
                  expression: "funcaoAmbiente.funcao.cbo.descricao"
                }
              ],
              staticClass: "form-control",
              attrs: { disabled: "", rows: "5" },
              domProps: { value: _vm.funcaoAmbiente.funcao.cbo.descricao },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.funcaoAmbiente.funcao.cbo,
                    "descricao",
                    $event.target.value
                  )
                }
              }
            })
          ])
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
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("ID RH")]),
      _vm._v(" "),
      _c("th", [_vm._v("Cargo")]),
      _vm._v(" "),
      _c("th", [_vm._v("CBO")]),
      _vm._v(" "),
      _c("th", [_vm._v("M")]),
      _vm._v(" "),
      _c("th", [_vm._v("F")]),
      _vm._v(" "),
      _c("th", [_vm._v("PCD")]),
      _vm._v(" "),
      _c("th", [_vm._v("Menor")]),
      _vm._v(" "),
      _c("th", [_vm._v("Todos")]),
      _vm._v(" "),
      _c("th", [_vm._v("Dt da Inclusão")]),
      _vm._v(" "),
      _c("th", [_vm._v("Ações")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Totais")])])
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

/***/ "./resources/js/components/ppra/ambiente/PpraFuncoes.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFuncoes.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true& */ "./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true&");
/* harmony import */ var _PpraFuncoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraFuncoes.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PpraFuncoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "564afcad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/ambiente/PpraFuncoes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFuncoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFuncoes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFuncoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFuncoes.vue?vue&type=template&id=564afcad&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFuncoes_vue_vue_type_template_id_564afcad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);