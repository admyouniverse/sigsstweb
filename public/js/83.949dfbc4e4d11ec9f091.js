(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      fornecedores: [],
      erro: false,
      editar: false,
      carregando: true,
      mensagem: 'Carregando fornecedores cadastradas...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      montou: false,
      deletar: '',
      coluna: '',
      cep: '',
      ordem: true,
      cidades: [],
      estado: {},
      termo: '',
      selecionado: 'codigo',
      idTabela: '#tabelaListagem',
      estados: [{
        nome: "Acre",
        sigla: "AC"
      }, {
        nome: "Alagoas",
        sigla: "AL"
      }, {
        nome: "Amapá",
        sigla: "AP"
      }, {
        nome: "Amazonas",
        sigla: "AM"
      }, {
        nome: "Bahia",
        sigla: "BA"
      }, {
        nome: "Ceará",
        sigla: "CE"
      }, {
        nome: "Distrito Federal",
        sigla: "DF"
      }, {
        nome: "Espírito Santo",
        sigla: "ES"
      }, {
        nome: "Goiás",
        sigla: "GO"
      }, {
        nome: "Maranhão",
        sigla: "MA"
      }, {
        nome: "Mato Grosso",
        sigla: "MT"
      }, {
        nome: "Mato Grosso do Sul",
        sigla: "MS"
      }, {
        nome: "Minas Gerais",
        sigla: "MG"
      }, {
        nome: "Pará",
        sigla: "PA"
      }, {
        nome: "Paraíba",
        sigla: "PB"
      }, {
        nome: "Paraná",
        sigla: "PR"
      }, {
        nome: "Pernambuco",
        sigla: "PE"
      }, {
        nome: "Piauí",
        sigla: "PI"
      }, {
        nome: "Rio de Janeiro",
        sigla: "RJ"
      }, {
        nome: "Rio Grande do Norte",
        sigla: "RN"
      }, {
        nome: "Rio Grande do Sul",
        sigla: "RS"
      }, {
        nome: "Rondônia",
        sigla: "RO"
      }, {
        nome: "Roraima",
        sigla: "RR"
      }, {
        nome: "Santa Catarina",
        sigla: "SC"
      }, {
        nome: "São Paulo",
        sigla: "SP"
      }, {
        nome: "Sergipe",
        sigla: "SE"
      }, {
        nome: "Tocantins",
        sigla: "TO"
      }],
      fornecedor: {
        idFornecedor: 0,
        cnpj: '',
        nomeFantasia: '',
        razaoSocial: '',
        endereco: '',
        cidade: {},
        telefone: '',
        obs: ''
      }
    };
  },
  methods: {
    carregarCidades: function carregarCidades() {
      var that = this;
      this.carregando = true;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Buscando cidades...';
      axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
        that.cidades = response.data;
        that.carregando = false;
      });
    },
    buscaCep: function buscaCep() {
      var that = this;
      this.carregando = true;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Aguarde... Buscando CEP.';

      if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cep)) {
        axios.get('https://viacep.com.br/ws/' + this.cep.replace(/\D/g, '') + "/json").then(function (response) {
          if (response.data.erro != true) {
            var ibge = response.data.ibge;
            if (response.data.logradouro) that.fornecedor.endereco = response.data.logradouro;

            if (response.data.uf) {
              if (that.estado != response.data.uf) {
                that.estado = response.data.uf;
                axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
                  that.cidades = response.data;
                  var cidad = that.cidades.filter(function (cidade) {
                    return cidade.codigoCidade == ibge;
                  });
                  that.fornecedor.cidade = cidad[0];
                  that.html = "<i class='fa fa-check fa-2x'></i>";
                  that.mensagem = 'Sucesso, endereço encontrado!';
                  that.carregando = false;
                });
              } else {
                var cidad = that.cidades.filter(function (cidade) {
                  return cidade.codigoCidade == ibge;
                });
                that.fornecedor.cidade = cidad[0];
                that.html = "<i class='fa fa-check fa-2x'></i>";
                that.mensagem = 'Sucesso, endereço encontrado!';
                that.carregando = false;
              }
            }
          } else {
            that.erro = true;
            that.mensagem = 'CEP inválido!'; // that.enderecos[key].erros.push('CEP inválido');

            that.carregando = false; // $("#cep").focus();
          }
        })["catch"](function (error) {//console.log(error);
        });
      } else {
        if (!this.cep == '') {
          that.erro = true;
          $("#cep").focus();
          that.mensagem = 'CEP inválido!';
          that.carregando = false;
        }
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
      this.carregar('Salvando nova fornecedor...');
      var that = this;
      axios.post('/fornecedores', {
        fornecedor: that.fornecedor
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/fornecedores').then(function (response) {
          that.fornecedores = response.data;
          that.$nextTick(function () {
            that.fechar();
            that.sucesso('Salvo com sucesso!');
          });
        });
      });
    },
    atualizar: function atualizar() {
      var that = this;
      this.carregar('Atualizando nova fornecedor...');

      if (this.nome != '' || this.codigo != '') {
        axios.post('/fornecedores/' + this.id, {
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
            that.fornecedores = response.data;
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
      this.fornecedor = {
        idFornecedor: 0,
        descricao: '',
        observacao: ''
      };
      this.$refs.myModal.show();
    },
    preencher: function preencher(dados) {
      this.carregar('Carregando dados...');
      console.log(dados);
      var that = this;
      this.fornecedor = dados;
      this.editar = true;

      if (this.fornecedor.cidade) {
        this.estado = this.fornecedor.cidade.uf;
        axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
          that.cidades = response.data;
          that.carregando = false;
        });
      }

      $(this.idTabela).DataTable().destroy();
      this.$refs.myModal.show();
      this.sucesso('Dados carregados!');
    },
    remover: function remover(dados) {
      this.deletar = dados.idFornecedor;
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
      this.carregar('Removendo fornecedor...');
      var that = this;
      axios.get('/fornecedores/remover/' + this.deletar).then(function (response) {
        if (response.data != 'erro') {
          // that.fornecedores = response.data;
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/fornecedores').then(function (response) {
            that.fornecedores = response.data;
            that.$nextTick(function () {
              that.fecharCerteza();
              that.sucesso('Removido com sucesso!');
            });
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
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/fornecedores').then(function (response) {
      that.fornecedores = response.data;
      that.montou = true;
      setTimeout(function () {
        that.$root.$emit('montou', [that.idTabela]);
        that.carregando = false;
      }, 200);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612& ***!
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
                      attrs: {
                        data: this.fornecedores,
                        name: "fornecedores.xls"
                      }
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
                    _vm._l(_vm.fornecedores, function(fornecedor) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "vertical-align": "middle",
                              width: "100px"
                            }
                          },
                          [_c("b", [_vm._v(_vm._s(fornecedor.cnpj))])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(fornecedor.nomeFantasia))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(_vm._s(fornecedor.razaoSocial))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "justify" } }, [
                          _vm._v(
                            _vm._s(fornecedor.cidade.nomeCidade) +
                              " | " +
                              _vm._s(fornecedor.cidade.uf)
                          )
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
                                    return _vm.remover(fornecedor)
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
                                    return _vm.preencher(fornecedor)
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
            title: "Detalhes da Fornecedor EPI",
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
            _c("div", { staticClass: "col-md-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("ID")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.idFornecedor,
                      expression: "fornecedor.idFornecedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fornecedor.idFornecedor },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fornecedor,
                        "idFornecedor",
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
                _c("label", [_vm._v("CNPJ")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.cnpj,
                      expression: "fornecedor.cnpj"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fornecedor.cnpj },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fornecedor, "cnpj", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Razao Social")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.razaoSocial,
                      expression: "fornecedor.razaoSocial"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fornecedor.razaoSocial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fornecedor,
                        "razaoSocial",
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
                _c("label", [_vm._v("Nome Fantasia")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.nomeFantasia,
                      expression: "fornecedor.nomeFantasia"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fornecedor.nomeFantasia },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fornecedor,
                        "nomeFantasia",
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
                _c("label", { attrs: { for: "checkout-company" } }, [
                  _vm._v("CEP")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cep,
                        expression: "cep"
                      },
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "##.###-###",
                        expression: "'##.###-###'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      autocomplete: "nope",
                      required: "",
                      name: "cep",
                      type: "text",
                      id: "cep"
                    },
                    domProps: { value: _vm.cep },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.cep = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-secondary",
                        attrs: { type: "button", id: "button-addon2" },
                        on: { click: _vm.buscaCep }
                      },
                      [_c("i", { staticClass: "fa fa-search" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.erro
                  ? _c("div", { staticClass: "form-control-feedback" }, [
                      _vm._v("CEP inválido\n                    ")
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "account-zip" } }, [
                  _vm._v("Endereço")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.endereco,
                      expression: "fornecedor.endereco"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    autocomplete: "nope",
                    required: "",
                    name: "rua",
                    type: "text",
                    required: ""
                  },
                  domProps: { value: _vm.fornecedor.endereco },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fornecedor, "endereco", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "account-city" } }, [
                  _vm._v("Cidade")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fornecedor.cidade,
                        expression: "fornecedor.cidade"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { required: "" },
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
                          _vm.fornecedor,
                          "cidade",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.cidades, function(cidade) {
                    return _c("option", { domProps: { value: cidade } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(cidade.nomeCidade)
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-1" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "checkout-city" } }, [
                  _vm._v("Estado")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.estado,
                        expression: "estado"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { required: "", id: "account-country" },
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
                          _vm.estado = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        _vm.carregarCidades
                      ]
                    }
                  },
                  _vm._l(_vm.estados, function(estado) {
                    return _c("option", { domProps: { value: estado.sigla } }, [
                      _vm._v(
                        "\n                            " + _vm._s(estado.sigla)
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Telefone")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "mask",
                      rawName: "v-mask",
                      value: "(##) ####-####",
                      expression: "'(##) ####-####'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fornecedor.telefone,
                      expression: "fornecedor.telefone"
                    }
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.fornecedor.telefone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fornecedor, "telefone", $event.target.value)
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
                _vm._v("Tem certeza que deseja excluir esta fornecedor?")
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
        _c("th", [_vm._v("CNPJ")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "180px" } }, [_vm._v("Nome Fantasia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Razão Social")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "150px" } }, [_vm._v("Cidade")]),
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

/***/ "./resources/js/components/epi/FornecedoresComponente.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/epi/FornecedoresComponente.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FornecedoresComponente.vue?vue&type=template&id=9f81f612& */ "./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612&");
/* harmony import */ var _FornecedoresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FornecedoresComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FornecedoresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/epi/FornecedoresComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FornecedoresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FornecedoresComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FornecedoresComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FornecedoresComponente.vue?vue&type=template&id=9f81f612& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/epi/FornecedoresComponente.vue?vue&type=template&id=9f81f612&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FornecedoresComponente_vue_vue_type_template_id_9f81f612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);