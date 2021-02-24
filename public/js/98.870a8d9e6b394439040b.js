(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['ppra'],
  data: function data() {
    return {
      profissional01: {
        pessoa: {}
      },
      profissional02: {
        pessoa: {}
      },
      representanteSelecionado: {},
      medicosBase: [],
      nomeRepresentante: '',
      cpfRepresentante: '',
      cargoRepresentante: '',
      funcionarios: [],
      responsavel: '',
      complemento: '',
      historicos: [],
      edicao: {},
      tipoProfissional: 0
    };
  },
  methods: {
    listaGrupo: function listaGrupo(profissional) {
      if (profissional.grupoProfissional == 'MÉDICO_COORDENADOR_PCMSO') {
        if (profissional.pessoa.sexo == 'MASCULINO') {
          return 'Médico Coordenado do PCMSO';
        } else {
          return 'Médico Coordenado do PCMSO';
        }
      } else if (profissional.grupoProfissional == 'MÉDICO_EXAMINADOR') {
        if (profissional.pessoa.sexo == 'MASCULINO') {
          return 'Médico Examinador';
        } else {
          return 'Médica Examinadora';
        }
      } else if (profissional.grupoProfissional == 'TÉCNICO_SEG_TRABALHO') {
        if (profissional.pessoa.sexo == 'MASCULINO') {
          return 'Téc de Segurança do Trabalho';
        } else {
          return 'Técª de Segurança do Trabalho';
        }
      } else if (profissional.grupoProfissional == 'TÉCNICO_ENF_TRABALHO') {
        if (profissional.pessoa.sexo == 'MASCULINO') {
          return 'Téc de Enfermagem do Trabalho';
        } else {
          return 'Técª de Enfermagem do Trabalho';
        }
      } else if (profissional.grupoProfissional == 'ENFERMEIRO_TRABALHO') {
        if (profissional.pessoa.sexo == 'MASCULINO') {
          return 'Enfermeiro do Trabalho';
        } else {
          return 'Enfermeira do Trabalho';
        }
      } else if (profissional.grupoProfissional == 'PREPOSTO_PPP') {
        return 'PREPOSTO';
      }
    },
    tipoPpra: function tipoPpra(tipo) {
      if (tipo == 'EMISSÃO') {
        return 'Emissão';
      } else if (tipo == 'REVISÃO_PARCIAL') {
        return 'Revisão Parcial';
      } else if (tipo == 'REVISÃO_GERAL') {
        return 'Revisão Geral';
      }
    },
    modalResponsavel: function modalResponsavel(historico) {
      this.edicao = historico;
      this.$refs.modalResponsavel.show();
    },
    modalComplemento: function modalComplemento(historico) {
      this.edicao = historico;
      this.$refs.modalComplemento.show();
    },
    salvarResponsavel: function salvarResponsavel() {
      var that = this;
      axios.post('/gro/' + this.ppra.idPpra + '/revisao-historico', {
        empresaProfissional: that.edicao.empresaProfissional,
        empresaProfissional02: that.edicao.empresaProfissional02,
        representante: that.edicao.empresaFuncionario,
        nome: that.edicao.representante,
        cpf: that.edicao.cpf,
        cargo: that.edicao.cargo,
        complemento: that.edicao.complemento,
        responsavel: that.edicao.responsavel,
        idPpraHistoricoRevisao: that.edicao.idPpraHistoricoRevisao
      }).then(function (response) {
        that.historicos = response.data;
        that.edicao = {};
      });
    },
    fechar: function fechar() {},
    modalProfissional: function modalProfissional(tipo) {
      var that = this;
      this.tipoProfissional = tipo;
      axios.post('/gro/medicos', {
        data: that.ppra.dataHora
      }).then(function (response) {
        that.medicosBase = response.data;
        that.$refs.modalProfissional.show();
        console.log(response.data);
      });
    },
    selecionarProfissional: function selecionarProfissional(medico) {
      if (this.tipoProfissional == 1) {
        this.profissional01 = medico;
      } else {
        this.profissional02 = medico;
      }

      this.$refs.modalProfissional.hide();
    },
    modalPessoas: function modalPessoas() {
      var that = this;
      axios.get('/empresas/funcionarios/' + that.ppra.empresasContrato[0].empresa.idEmpresa).then(function (response) {
        that.funcionarios = response.data;
        console.log(response.data);
        that.$refs.modalPessoas.show();
      });
    },
    selecionaPessoa: function selecionaPessoa(funcionario) {
      this.representanteSelecionado = funcionario;
      this.nomeRepresentante = this.representanteSelecionado.pessoa.nomePessoa;
      this.cpfRepresentante = this.representanteSelecionado.pessoa.cpf;
      this.cargoRepresentante = this.representanteSelecionado.funcao.cargo;
      this.$refs.modalPessoas.hide();
    },
    limparPessoa: function limparPessoa() {
      this.representanteSelecionado = {};
    },
    salvar: function salvar() {
      var that = this;

      if (this.historicos.length > 0) {
        var id = this.historicos[0].idPpraHistoricoRevisao;
      } else {
        id = 0;
      }

      axios.post('/gro/' + this.ppra.idPpra + '/revisao-historico', {
        empresaProfissional: that.profissional01,
        empresaProfissional02: that.profissional02,
        representante: that.nomeRepresentante,
        nome: that.nomeRepresentante,
        cpf: that.cpfRepresentante,
        cargo: that.cargoRepresentante,
        complemento: that.complemento,
        responsavel: that.responsavel,
        idPpraHistoricoRevisao: id
      }).then(function (response) {
        that.historicos = response.data;
      });
    }
  },
  mounted: function mounted() {
    var that = this; // console.log(this.ppra);

    axios.get('/gro/' + this.ppra.idPpra + '/revisao-historico').then(function (response) {
      console.log(response.data);
      that.historicos = response.data;

      if (response.data.length > 0) {
        that.profissional01 = that.historicos[0].empresaProfissional;
        that.profissional02 = that.historicos[0].empresaProfissional02;
        that.nomeRepresentante = that.historicos[0].representante;
        that.cpfRepresentante = that.historicos[0].cpf;
        that.cargoRepresentante = that.historicos[0].cargo;
        that.responsavel = that.historicos[0].responsavel;
        that.complemento = that.historicos[0].complemento;
        that.edicao.complemento = that.historicos[0].complemento;
        that.edicao.responsavel = that.historicos[0].responsavel;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f& ***!
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
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Resp. Téc do GRO 01")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.profissional01.titulo +
                      ". " +
                      _vm.profissional01.pessoa.nomePessoa,
                    expression:
                      "profissional01.titulo + '. ' + profissional01.pessoa.nomePessoa"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  readonly: "",
                  placeholder: "Clique no botão"
                },
                domProps: {
                  value:
                    _vm.profissional01.titulo +
                    ". " +
                    _vm.profissional01.pessoa.nomePessoa
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.profissional01.titulo +
                        ". " +
                        _vm.profissional01.pessoa,
                      "nomePessoa",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.modalProfissional(1)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Resp. Téc do GRO 02")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value:
                      _vm.profissional02.titulo +
                      ". " +
                      _vm.profissional02.pessoa.nomePessoa,
                    expression:
                      "profissional02.titulo + '. ' + profissional02.pessoa.nomePessoa"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  readonly: "",
                  placeholder: "Clique no botão"
                },
                domProps: {
                  value:
                    _vm.profissional02.titulo +
                    ". " +
                    _vm.profissional02.pessoa.nomePessoa
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.profissional02.titulo +
                        ". " +
                        _vm.profissional02.pessoa,
                      "nomePessoa",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.modalProfissional(2)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Representante da Empresa")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nomeRepresentante,
                    expression: "nomeRepresentante"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Pessoa" },
                domProps: { value: _vm.nomeRepresentante },
                on: {
                  keydown: _vm.limparPessoa,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nomeRepresentante = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    on: { click: _vm.modalPessoas }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cpfRepresentante,
                  expression: "cpfRepresentante"
                },
                {
                  name: "mask",
                  rawName: "v-mask",
                  value: "###.###.###-##",
                  expression: "'###.###.###-##'"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.cpfRepresentante },
              on: {
                keydown: _vm.limparPessoa,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cpfRepresentante = $event.target.value
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
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cargoRepresentante,
                  expression: "cargoRepresentante"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" },
              domProps: { value: _vm.cargoRepresentante },
              on: {
                keydown: _vm.limparPessoa,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cargoRepresentante = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("CPF")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "mask",
                  rawName: "v-mask",
                  value: "###.###.###-##",
                  expression: "'###.###.###-##'"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text" }
            })
          ])
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "button",
            { staticClass: "btn btn-success", on: { click: _vm.salvar } },
            [_c("i", { staticClass: "fa fa-check" }), _vm._v(" Salvar")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("table", { staticClass: "table" }, [
            _c(
              "tbody",
              [
                _vm._m(2),
                _vm._v(" "),
                _vm._l(_vm.historicos, function(historico) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(_vm.ppra.versao))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(_vm.ppra.dataHora, "DD/MM/YYYY")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    !historico.empresaProfissional ? _c("td") : _vm._e(),
                    _vm._v(" "),
                    historico.empresaProfissional
                      ? _c("td", [
                          _c("strong", [
                            _vm._v(
                              _vm._s(historico.empresaProfissional.titulo) +
                                ". "
                            )
                          ]),
                          _vm._v(
                            " " +
                              _vm._s(
                                historico.empresaProfissional.pessoa.nomePessoa
                              )
                          ),
                          historico.empresaProfissional02
                            ? _c("span", [
                                _vm._v(", "),
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      historico.empresaProfissional02.titulo
                                    ) + ". "
                                  )
                                ]),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      historico.empresaProfissional02.pessoa
                                        .nomePessoa
                                    )
                                )
                              ])
                            : _vm._e(),
                          historico.responsavel
                            ? _c("span", [
                                _vm._v(
                                  ", " + _vm._s(historico.responsavel) + " "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-link",
                              on: {
                                click: function($event) {
                                  return _vm.modalResponsavel(historico)
                                }
                              }
                            },
                            [_vm._v("Alterar")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.tipoPpra(_vm.ppra.tipoPpra)))
                      ]),
                      _vm._v(", " + _vm._s(historico.complemento) + " "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-link",
                          on: {
                            click: function($event) {
                              return _vm.modalComplemento(historico)
                            }
                          }
                        },
                        [_vm._v("Alterar")]
                      )
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalProfissional",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Responsável Técnico PPRA",
            id: "modal1"
          }
        },
        [
          _c("table", { staticClass: "table-striped table-hover table" }, [
            _vm.medicosBase.length > 0
              ? _c(
                  "tbody",
                  [
                    _c("tr", [
                      _c("th", [_vm._v("Conselho")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Nome")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Grupo Profissional")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.medicosBase, function(medico) {
                      return medico.idEmpresaProfissional !=
                        _vm.profissional01.idEmpresaProfissional &&
                        medico.idEmpresaProfissional !=
                          _vm.profissional02.idEmpresaProfissional &&
                        medico.tipoProfissional != "PREPOSTO_PPP"
                        ? _c(
                            "tr",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.selecionarProfissional(medico)
                                }
                              }
                            },
                            [
                              _c("td", [_vm._v(_vm._s(medico.numeroRegistro))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(medico.pessoa.nomePessoa))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.listaGrupo(medico)))])
                            ]
                          )
                        : _vm._e()
                    })
                  ],
                  2
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalPessoas",
          attrs: {
            size: "lg",
            centered: "",
            "hide-footer": true,
            title: "Pessoas",
            id: "modal1"
          }
        },
        [
          _c("table", { staticClass: "table-striped table-hover table" }, [
            _c(
              "tbody",
              [
                _c("tr", [
                  _c("th", [_vm._v("Nome")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("CPF")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Cargo")])
                ]),
                _vm._v(" "),
                _vm._l(_vm.funcionarios, function(funcionario) {
                  return _c(
                    "tr",
                    {
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.selecionaPessoa(funcionario)
                        }
                      }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(funcionario.pessoa.nomePessoa))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcionario.pessoa.cpf))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(funcionario.funcao.cargo))])
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalResponsavel",
          attrs: {
            size: "xs",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Alterar Elaboradores",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.salvarResponsavel,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Elaborador(es)")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.edicao.responsavel,
                    expression: "edicao.responsavel"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.edicao.responsavel },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.edicao, "responsavel", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalComplemento",
          attrs: {
            size: "xs",
            centered: "",
            "no-close-on-backdrop": true,
            "hide-header-close": true,
            "no-close-on-esc": true,
            title: "Alterar Complemento",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal2"
          },
          on: {
            ok: _vm.salvarResponsavel,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Complemento")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.edicao.complemento,
                    expression: "edicao.complemento"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.edicao.complemento },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.edicao, "complemento", $event.target.value)
                  }
                }
              })
            ])
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
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [
          _vm._v("Representante dos Trabalhadores")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", disabled: "" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-outline-secondary",
                attrs: { disabled: "", type: "button" }
              },
              [_c("i", { staticClass: "fa fa-search" })]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Cargo")]),
        _vm._v(" "),
        _c("input", { staticClass: "form-control", attrs: { type: "text" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Versão GRO")]),
      _vm._v(" "),
      _c("th", [_vm._v("Data GRO")]),
      _vm._v(" "),
      _c("th", [_vm._v("Elaborador(es)")]),
      _vm._v(" "),
      _c("th", [_vm._v("Complemento")])
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

/***/ "./resources/js/components/ppra/PpraHistoricoRevisao.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ppra/PpraHistoricoRevisao.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f& */ "./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f&");
/* harmony import */ var _PpraHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraHistoricoRevisao.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PpraHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/PpraHistoricoRevisao.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraHistoricoRevisao.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraHistoricoRevisao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraHistoricoRevisao.vue?vue&type=template&id=5cbff37f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraHistoricoRevisao_vue_vue_type_template_id_5cbff37f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);