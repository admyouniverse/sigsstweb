(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['empresadb', 'editar'],
  data: function data() {
    return {
      empresa: {
        idEmpresa: 0,
        tipoInscricao: '',
        nomeFantasia: "",
        inscricao: '',
        razaoSocial: '',
        endereco: '',
        cep: '',
        cidade: {},
        bairro: "",
        complemento: "",
        telefone: "",
        celular: "",
        email: "",
        nomeUnidade: "",
        cnaes: [],
        descricaoAtividade: "",
        tipoEmpresa: "NENHUM",
        modulo: "",
        dataIni: "",
        contatoRh: "",
        emailRh: "",
        foneContato: "",
        cno: ""
      },
      montou: false,
      novo: false,
      mask: '###.###.###-##',
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
      erro: false,
      estado: '',
      cidades: '',
      carregando: true,
      options: [],
      cnaes: [],
      select: '',
      mensagem: 'Carregando dados da empresa...',
      funcionarios: [],
      contratos: [],
      ambientes: [],
      jornadas: [],
      contrato: {},
      funcoes: [],
      pessoas: [],
      funcionario: {},
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
    addCnae: function addCnae() {
      //console.log(this.select);
      this.empresa.cnaes.push(this.select);
      this.novo = false;
    },
    excluirCnae: function excluirCnae(key) {
      this.empresa.cnaes.splice(key, 1);
    },
    mascaraInscricao: function mascaraInscricao() {
      if (this.empresa.tipoInscricao == 'CNPJ') {
        this.mask = '##.###.###/####-##';
      } else {
        this.mask = '###.###.###-##';
      }
    },
    buscaCep: function buscaCep() {
      var that = this;
      this.carregando = true;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Aguarde... Buscando CEP.';

      if (/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.empresa.cep)) {
        axios.get('https://viacep.com.br/ws/' + this.empresa.cep.replace(/\D/g, '') + "/json").then(function (response) {
          if (response.data.erro != true) {
            var ibge = response.data.ibge;
            if (response.data.logradouro) that.empresa.endereco = response.data.logradouro;
            if (response.data.bairro) that.empresa.bairro = response.data.bairro;

            if (response.data.uf) {
              if (that.estado != response.data.uf) {
                that.estado = response.data.uf; //console.log(ibge);

                axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
                  that.cidades = response.data;
                  var cidad = that.cidades.filter(function (cidade) {
                    return cidade.codigoCidade == ibge;
                  });
                  that.empresa.cidade = cidad[0];
                  that.html = "<i class='fa fa-check fa-2x'></i>";
                  that.mensagem = 'Sucesso, endereço encontrado!';
                  that.carregando = false;
                });
              } else {
                var cidad = that.cidades.filter(function (cidade) {
                  return cidade.codigoCidade == ibge;
                });
                that.empresa.cidade = cidad[0];
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
    salvar: function salvar() {
      var that = this;

      if (this.editar) {
        this.carregando = true;
        this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Aguarde... Atualizando os dados.';
        var that = this;
        axios.post('/empresas/' + this.empresa.idEmpresa + "/editar", {
          empresa: that.empresa,
          imagem: that.$store.state.avatar
        }).then(function (response) {
          if (response.data != 'erro') {
            that.html = "<i class='fa fa-check fa-2x'></i>";
            that.mensagem = 'Sucesso! Dados atualizados.';
          } else {
            that.html = "<i class='fa fa-close fa-2x'></i>";
            that.mensagem = 'Falha! Verifique os dados.';
          }

          setTimeout(function () {
            that.carregando = false;
          }, 1000);
        });
      } else {
        this.carregando = true;
        this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Aguarde... Atualizando os dados.';
        var that = this;
        axios.post('/empresas', {
          empresa: that.empresa,
          imagem: that.$store.state.avatar
        }).then(function (response) {
          //console.log(response);
          if (response.data != 'erro') {
            that.html = "<i class='fa fa-check fa-2x'></i>";
            that.mensagem = 'Sucesso! Redirecionando...';
            window.location.href = "/empresas/detalhes/" + response.data;
          } else {
            that.html = "<i class='fa fa-close fa-2x'></i>";
            that.mensagem = 'Falha! Verifique os dados.';
          }

          setTimeout(function () {
            that.carregando = false;
          }, 1000);
        });
      }
    },
    carregarCidades: function carregarCidades() {
      var that = this;
      this.carregando = true;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Buscando cidades...';
      axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
        that.cidades = response.data;
        that.carregando = false;
      });
    },
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce(function (loading, search, vm) {
      fetch("".concat(window.location.origin, "/tabelas/cnae/buscar/descricao/").concat(escape(search))).then(function (data) {
        //console.log(data);
        data.json().then(function (json) {
          vm.options = json;
        });
        loading(false);
      });
    }, 350)
  },
  mounted: function mounted() {
    //console.log('Component mounted.');
    var that = this;

    if (this.editar) {
      this.empresa = this.empresadb;
      this.$store.state.avatar = this.empresa.urlImagem;

      if (this.empresa.cidade) {
        this.estado = this.empresa.cidade.uf;
        axios.get('/tabelas/cidades/buscar/estado/' + that.estado).then(function (response) {
          that.cidades = response.data;
          that.carregando = false;
        });
      }

      this.mascaraInscricao();
      axios.get('/empresas/funcionarios/' + that.empresa.idEmpresa).then(function (response) {
        that.funcionarios = response.data;
      });
      axios.get('/empresas/contratos/' + that.empresa.idEmpresa).then(function (response) {
        that.contratos = response.data;
      });
      axios.get('/tabelas/jornadas-de-trabalho/list').then(function (response) {
        that.jornadas = response.data;
      });
      axios.get('/tabelas/ambientes-de-trabalho/list').then(function (response) {
        that.ambientes = response.data;
      });
      axios.get('/tabelas/funcoes/list').then(function (response) {
        that.funcoes = response.data;
      });
      axios.get('/pessoas/list').then(function (response) {
        that.pessoas = response.data;
      });
      this.montou = true;
    } else {
      this.carregando = false;
    }

    axios.get('/tabelas/cnae/list').then(function (response) {
      that.cnaes = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            [
              _c(
                "b-card",
                { staticClass: "sig", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-tabs",
                    { attrs: { card: "" } },
                    [
                      _c(
                        "b-tab",
                        { attrs: { title: "Detalhes", active: "" } },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-9" }, [
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
                                            value: _vm.empresa.idEmpresa,
                                            expression: "empresa.idEmpresa"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: {
                                          value: _vm.empresa.idEmpresa
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.empresa,
                                              "idEmpresa",
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
                                        _vm._v("Inscrição")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group mb-3" },
                                        [
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.empresa.tipoInscricao,
                                                  expression:
                                                    "empresa.tipoInscricao"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              on: {
                                                change: [
                                                  function($event) {
                                                    var $$selectedVal = Array.prototype.filter
                                                      .call(
                                                        $event.target.options,
                                                        function(o) {
                                                          return o.selected
                                                        }
                                                      )
                                                      .map(function(o) {
                                                        var val =
                                                          "_value" in o
                                                            ? o._value
                                                            : o.value
                                                        return val
                                                      })
                                                    _vm.$set(
                                                      _vm.empresa,
                                                      "tipoInscricao",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  },
                                                  _vm.mascaraInscricao
                                                ]
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                { attrs: { value: "CPF" } },
                                                [_vm._v(" CPF ")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "CNPJ" } },
                                                [_vm._v(" CNPJ ")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { attrs: { value: "CAEPF" } },
                                                [_vm._v(" CAEPF ")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append",
                                              staticStyle: { width: "70%" }
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.empresa.inscricao,
                                                    expression:
                                                      "empresa.inscricao"
                                                  },
                                                  {
                                                    name: "mask",
                                                    rawName: "v-mask",
                                                    value: _vm.mask,
                                                    expression: "mask"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: { masked: "false" },
                                                domProps: {
                                                  value: _vm.empresa.inscricao
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.empresa,
                                                      "inscricao",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-7" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Razão Social")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.empresa.razaoSocial,
                                            expression: "empresa.razaoSocial"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        domProps: {
                                          value: _vm.empresa.razaoSocial
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.empresa,
                                              "razaoSocial",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-5" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Nome Fantasia")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.empresa.nomeFantasia,
                                            expression: "empresa.nomeFantasia"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        domProps: {
                                          value: _vm.empresa.nomeFantasia
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.empresa,
                                              "nomeFantasia",
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
                                        _vm._v("Nome da Unidade")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.empresa.nomeUnidade,
                                            expression: "empresa.nomeUnidade"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: _vm.empresa.nomeUnidade
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.empresa,
                                              "nomeUnidade",
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
                                      _c(
                                        "label",
                                        { attrs: { for: "checkout-company" } },
                                        [_vm._v("CEP")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.empresa.cep,
                                                expression: "empresa.cep"
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
                                            domProps: {
                                              value: _vm.empresa.cep
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.empresa,
                                                  "cep",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-secondary",
                                                  attrs: {
                                                    type: "button",
                                                    id: "button-addon2"
                                                  },
                                                  on: { click: _vm.buscaCep }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-search"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.erro
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-control-feedback"
                                            },
                                            [
                                              _vm._v(
                                                "CEP inválido\n                                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "account-city" } },
                                        [_vm._v("Cidade")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.empresa.cidade,
                                              expression: "empresa.cidade"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { required: "" },
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.empresa,
                                                "cidade",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.cidades, function(cidade) {
                                          return _c(
                                            "option",
                                            { domProps: { value: cidade } },
                                            [
                                              _vm._v(
                                                "\n                                                            " +
                                                  _vm._s(cidade.nomeCidade)
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { attrs: { for: "checkout-city" } },
                                        [_vm._v("Estado")]
                                      ),
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
                                          attrs: {
                                            required: "",
                                            id: "account-country"
                                          },
                                          on: {
                                            change: [
                                              function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.estado = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                              _vm.carregarCidades
                                            ]
                                          }
                                        },
                                        _vm._l(_vm.estados, function(estado) {
                                          return _c(
                                            "option",
                                            {
                                              domProps: { value: estado.sigla }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                            " +
                                                  _vm._s(estado.sigla)
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-3" },
                                [
                                  _c("imagem-componente", {
                                    attrs: { empresa: this.empresa }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-6" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "account-zip" } },
                                    [_vm._v("Endereço")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.endereco,
                                        expression: "empresa.endereco"
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
                                    domProps: { value: _vm.empresa.endereco },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "endereco",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "account-address2" } },
                                    [_vm._v("Bairro")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.bairro,
                                        expression: "empresa.bairro"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      autocomplete: "nope",
                                      required: "",
                                      name: "bairro",
                                      type: "text",
                                      id: "account-address2"
                                    },
                                    domProps: { value: _vm.empresa.bairro },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "bairro",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Complemento")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.complemento,
                                        expression: "empresa.complemento"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      autocomplete: "nope",
                                      type: "text",
                                      name: "complemento"
                                    },
                                    domProps: {
                                      value: _vm.empresa.complemento
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "complemento",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Telefone")
                                  ]),
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
                                        value: _vm.empresa.telefone,
                                        expression: "empresa.telefone"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: _vm.empresa.telefone },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "telefone",
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
                                    _vm._v("Celular")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: "(##) 9####-####",
                                        expression: "'(##) 9####-####'"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.celular,
                                        expression: "empresa.celular"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: _vm.empresa.celular },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "celular",
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
                                    _vm._v("E-mail")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.email,
                                        expression: "empresa.email"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "email" },
                                    domProps: { value: _vm.empresa.email },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "email",
                                          $event.target.value
                                        )
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
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Relação Contratual")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.empresa.tipoEmpresa,
                                          expression: "empresa.tipoEmpresa"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.empresa,
                                            "tipoEmpresa",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "NENHUM" } },
                                        [_vm._v("N/A")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "CONTRATADA" } },
                                        [_vm._v("Contratada")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "CONTRATANTE" } },
                                        [_vm._v("Contratante")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "AMBAS" } },
                                        [_vm._v("Ambas")]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Tipo de Programa")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.empresa.modulo,
                                          expression: "empresa.modulo"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.empresa,
                                            "modulo",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "SELECIONE" } },
                                        [_vm._v("N/A")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "PPRA" } },
                                        [_vm._v("PPRA")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "PGR" } },
                                        [_vm._v("PGR")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "PCMAT" } },
                                        [_vm._v("PCMAT")]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Data de Início")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.dataIni,
                                        expression: "empresa.dataIni"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "date" },
                                    domProps: { value: _vm.empresa.dataIni },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "dataIni",
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
                                    _vm._v("Data de Fim")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.dataFim,
                                        expression: "empresa.dataFim"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "date" },
                                    domProps: { value: _vm.empresa.dataFim },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "dataFim",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Contato RH")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.contatoRh,
                                        expression: "empresa.contatoRh"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: { value: _vm.empresa.contatoRh },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "contatoRh",
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
                                    _vm._v("Fone do Contato RH")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: "(##) #####-####",
                                        expression: "'(##) #####-####'"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.foneContato,
                                        expression: "empresa.foneContato"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.empresa.foneContato
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "foneContato",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-5" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Email RH")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.emailRh,
                                        expression: "empresa.emailRh"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "email" },
                                    domProps: { value: _vm.empresa.emailRh },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "emailRh",
                                          $event.target.value
                                        )
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
                                    _vm._v("Descrição da Atividade")
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.empresa.descricaoAtividade,
                                        expression: "empresa.descricaoAtividade"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    domProps: {
                                      value: _vm.empresa.descricaoAtividade
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.empresa,
                                          "descricaoAtividade",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "row",
                                staticStyle: { "margin-bottom": "20px" }
                              },
                              [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c(
                                    "div",
                                    { staticClass: "card card-success" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "card-header" },
                                        [
                                          _vm._v(
                                            "\n                                                CNAE\n                                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "card-body" }, [
                                        _vm.novo == true
                                          ? _c("div", { staticClass: "row" }, [
                                              _c(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "form-group"
                                                    },
                                                    [
                                                      _c(
                                                        "label",
                                                        { attrs: { for: "" } },
                                                        [_vm._v("Selecione")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "select",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: _vm.select,
                                                              expression:
                                                                "select"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$selectedVal = Array.prototype.filter
                                                                .call(
                                                                  $event.target
                                                                    .options,
                                                                  function(o) {
                                                                    return o.selected
                                                                  }
                                                                )
                                                                .map(function(
                                                                  o
                                                                ) {
                                                                  var val =
                                                                    "_value" in
                                                                    o
                                                                      ? o._value
                                                                      : o.value
                                                                  return val
                                                                })
                                                              _vm.select = $event
                                                                .target.multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            }
                                                          }
                                                        },
                                                        _vm._l(
                                                          _vm.cnaes,
                                                          function(cnae) {
                                                            return _c(
                                                              "option",
                                                              {
                                                                domProps: {
                                                                  value: cnae
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                                    " +
                                                                    _vm._s(
                                                                      cnae.codigoCnae
                                                                    ) +
                                                                    " - " +
                                                                    _vm._s(
                                                                      cnae.descricao
                                                                    ) +
                                                                    "\n                                                                "
                                                                )
                                                              ]
                                                            )
                                                          }
                                                        ),
                                                        0
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-md-12" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-success",
                                                      attrs: { type: "" },
                                                      on: { click: _vm.addCnae }
                                                    },
                                                    [_vm._v("Incluir")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-danger",
                                                      attrs: { type: "" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.novo = false
                                                        }
                                                      }
                                                    },
                                                    [_vm._v("Cancelar")]
                                                  )
                                                ]
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !_vm.novo
                                          ? _c("div", { staticClass: "row" }, [
                                              _vm.empresa.cnaes.length > 0
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
                                                      staticStyle: {
                                                        padding: "10px",
                                                        border: "1px solid #000"
                                                      }
                                                    },
                                                    [
                                                      _c("b", [
                                                        _vm._v("CNAE Principal")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(
                                                        "\n                                                        " +
                                                          _vm._s(
                                                            _vm.empresa.cnaes[0]
                                                              .codigoCnae
                                                          ) +
                                                          " -\n                                                        " +
                                                          _vm._s(
                                                            _vm.empresa.cnaes[0]
                                                              .descricao
                                                          ) +
                                                          " | "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            cursor: "pointer",
                                                            color: "red"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.excluirCnae(
                                                                0
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-trash"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.empresa.cnaes.length > 1
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "col-md-12",
                                                      staticStyle: {
                                                        padding: "10px",
                                                        border:
                                                          "1px solid #000",
                                                        "margin-top": "15px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                        CNAE Secundário\n                                                        "
                                                      ),
                                                      _vm._l(
                                                        _vm.empresa.cnaes,
                                                        function(cnae, key) {
                                                          return key > 0
                                                            ? _c("span", [
                                                                _c("br"),
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      cnae.codigoCnae
                                                                    ) +
                                                                    " - " +
                                                                    _vm._s(
                                                                      cnae.descricao
                                                                    ) +
                                                                    " |\n                                                            "
                                                                ),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticStyle: {
                                                                      cursor:
                                                                        "pointer",
                                                                      color:
                                                                        "red"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.excluirCnae(
                                                                          key
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-trash"
                                                                    })
                                                                  ]
                                                                )
                                                              ])
                                                            : _vm._e()
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c("br")
                                                    ],
                                                    2
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-md-12 text-center",
                                                  staticStyle: {
                                                    "margin-top": "15px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-success",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.novo = true
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-plus"
                                                      }),
                                                      _vm._v(" Adicionar")
                                                    ]
                                                  )
                                                ]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12 text-right" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      on: { click: _vm.salvar }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-floppy" }),
                                      _vm._v(
                                        "\n                                            Salvar"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { href: "/empresas" }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-close" }),
                                      _vm._v(
                                        "\n                                            Cancelar"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Gestão de SST" } },
                            [_c("b-card-text", [_vm._v("Conteudo 2")])],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Ambientes" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-ambientes", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Empregados", lazy: "" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-empregados-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Profissionais" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("profissional-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Capacitação" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-capacitacao-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Exames" } },
                            [_c("b-card-text", [_vm._v("Conteudo 4")])],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Eventos" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-eventos-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar &&
                      this.montou &&
                      this.empresa.tipoEmpresa != "NENHUM"
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Contratos" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-contratos-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-tab",
                            { attrs: { title: "Histórico" } },
                            [
                              _c(
                                "b-card-text",
                                [
                                  _vm.editar && this.montou
                                    ? _c("empresa-historico-componente", {
                                        attrs: { empresa: _vm.empresa }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/components/empresa/EmpresaDetalhesComponente.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaDetalhesComponente.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true& */ "./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true&");
/* harmony import */ var _EmpresaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaDetalhesComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37622408",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaDetalhesComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaDetalhesComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaDetalhesComponente.vue?vue&type=template&id=37622408&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaDetalhesComponente_vue_vue_type_template_id_37622408_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);