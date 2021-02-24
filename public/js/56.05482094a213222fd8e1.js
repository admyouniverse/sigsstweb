(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['pessoadb', 'editar'],
  data: function data() {
    var _ref;

    return _ref = {
      pessoa: {
        idPessoa: '',
        nomePessoa: '',
        cpf: '',
        pis: '',
        ctps: '',
        dataNascimento: '',
        sexo: '',
        tipoSangue: '',
        observacao: '',
        pais: {
          idPais: 1,
          nome: "Brasil",
          codigoPais: "1  "
        },
        estrangeiro: '',
        endereco: '',
        bairro: '',
        cep: '',
        telefone: '',
        email: '',
        escolaridade: '',
        status: 'A',
        biometriaTemplate: ''
      },
      paises: [],
      outro: '',
      mensagem: 'Carregando dados da pessoa...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      carregando: true,
      options: [],
      cidade: [],
      msgCpf: '',
      montou: false,
      show: false
    }, _defineProperty(_ref, "msgCpf", ''), _defineProperty(_ref, "estados", [{
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
    }]), _ref;
  },
  methods: {
    verificaCpf: function verificaCpf() {
      var that = this;

      if (/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(this.pessoa.cpf)) {
        axios.get('/pessoas/cpf/' + this.pessoa.cpf).then(function (response) {
          if (response.data != '') {
            if (that.pessoa.idPessoa != response.data.idPessoa) {
              that.msgCpf = 'CPF já usado por ' + response.data.nomePessoa;
              that.outro = response.data.idPessoa;
              that.show = true;
              $('#cpf').focus();
            }
          } else {
            that.show = false;
          }
        });
      } else {
        this.show = false;
      }
    },
    digital: function digital() {
      var that = this;
      axios.get('http://localhost:9000/api/public/v1/captura/Enroll/1').then(function (response) {
        that.pessoa.biometriaTemplate = response.data;
        that.salvar();
      })["catch"](function (error) {
        that.$alert('Erro. Verifique se o software está instalado!', 'Ops!', 'error');
      });
    },
    editarOutro: function editarOutro() {
      window.location.href = "/pessoas/detalhes/" + this.outro;
    },
    sair: function sair() {
      this.outro = '';
      this.show = false;
      this.pessoa.cpf = '';
      setTimeout(function () {
        this.show = false;
      }, 2000);
      $('#cpf').blur();
    },
    salvar: function salvar() {
      var that = this;
      this.carregando = true;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>', this.mensagem = 'Aguarde...';

      if (this.editar) {
        console.log('editar!!!');
        axios.post('/pessoas/' + this.pessoa.idPessoa + "/editar", {
          pessoa: that.pessoa,
          cidade: that.cidade,
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
        axios.post('/pessoas', {
          pessoa: that.pessoa,
          cidade: that.cidade,
          imagem: that.$store.state.avatar
        }).then(function (response) {
          if (response.data != 'erro') {
            that.html = "<i class='fa fa-check fa-2x'></i>";
            that.mensagem = 'Sucesso!';
            window.location.href = "/pessoas/detalhes/" + response.data;
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
    onSearch: function onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce(function (loading, search, vm) {
      fetch("".concat(window.location.origin, "/tabelas/cidades/buscar/nome/").concat(escape(search))).then(function (data) {
        console.log(data);
        data.json().then(function (json) {
          vm.options = json;
        });
        loading(false);
      });
    }, 350)
  },
  mounted: function mounted() {
    if (this.editar == true) {
      this.pessoa = this.pessoadb;
      console.log(this.pessoadb);
      this.$store.state.avatar = this.pessoa.urlImagem;
      this.cidade = this.pessoa.cidadeNatal;
    }

    this.carregando = false;
    var that = this;
    this.montou = true;
    axios.get('/tabelas/paises/list').then(function (response) {
      that.paises = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select input[type=search] {\n  margin: 0px;\n}\n.v-select .selected-tag {\n  margin-top: 0px;\n  background-color: #fff;\n  border-color: #fff;\n}\n.v-select .vs__selected-options {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.v-select .dropdown-toggle {\n  padding: 0;\n  background: white;\n}\n.editar-sair {\n  margin-top: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row justify-content-end" }, [
        _c("div", { staticClass: "box-header" }, [
          _vm.editar
            ? _c("div", { staticClass: "col-md-12 no-padding" }, [_vm._m(0)])
            : _vm._e()
        ])
      ]),
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
                                _c(
                                  "div",
                                  { staticClass: "row" },
                                  [
                                    _c("div", { staticClass: "col-md-1" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", { attrs: { for: "" } }, [
                                          _vm._v("ID")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.idPessoa,
                                              expression: "pessoa.idPessoa"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text", disabled: "" },
                                          domProps: {
                                            value: _vm.pessoa.idPessoa
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.pessoa,
                                                "idPessoa",
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
                                          _vm._v("CPF")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "###.###.###-##",
                                              expression: "'###.###.###-##'"
                                            },
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.cpf,
                                              expression: "pessoa.cpf"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { id: "cpf" },
                                          domProps: { value: _vm.pessoa.cpf },
                                          on: {
                                            blur: _vm.verificaCpf,
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.pessoa,
                                                "cpf",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm.show
                                      ? _c(
                                          "b-popover",
                                          {
                                            attrs: {
                                              placement: "topright",
                                              show: _vm.show,
                                              target: "cpf",
                                              "no-title": ""
                                            },
                                            on: {
                                              "update:show": function($event) {
                                                _vm.show = $event
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                               " +
                                                _vm._s(_vm.msgCpf) +
                                                "\n                                               "
                                            ),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-sm editar-sair",
                                                on: { click: _vm.editarOutro }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-secondary btn-sm editar-sair",
                                                on: { click: _vm.sair }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-sign-out-alt"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-5" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", { attrs: { for: "" } }, [
                                          _vm._v("Nome")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.nomePessoa,
                                              expression: "pessoa.nomePessoa"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text" },
                                          domProps: {
                                            value: _vm.pessoa.nomePessoa
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.pessoa,
                                                "nomePessoa",
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
                                          _vm._v("Nascimento")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.dataNascimento,
                                              expression:
                                                "pessoa.dataNascimento"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "date" },
                                          domProps: {
                                            value: _vm.pessoa.dataNascimento
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.pessoa,
                                                "dataNascimento",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("PIS")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "mask",
                                            rawName: "v-mask",
                                            value: "###.#####.##-#",
                                            expression: "'###.#####.##-#'"
                                          },
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.pessoa.pis,
                                            expression: "pessoa.pis"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        domProps: { value: _vm.pessoa.pis },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.pessoa,
                                              "pis",
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
                                        _vm._v("CTPS")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.pessoa.ctps,
                                            expression: "pessoa.ctps"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          placeholder: "1111111 1111 AA"
                                        },
                                        domProps: { value: _vm.pessoa.ctps },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.pessoa,
                                              "ctps",
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
                                        _vm._v("Gênero")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.sexo,
                                              expression: "pessoa.sexo"
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
                                                _vm.pessoa,
                                                "sexo",
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
                                            { attrs: { value: "MASCULINO" } },
                                            [_vm._v("Masculino")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "FEMININO" } },
                                            [_vm._v("Feminino")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Estado Civil")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.estadoCivil,
                                              expression: "pessoa.estadoCivil"
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
                                                _vm.pessoa,
                                                "estadoCivil",
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
                                            [_vm._v("Nenhum")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "SOLTEIRO" } },
                                            [_vm._v("Solteiro")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "CASADO" } },
                                            [_vm._v("Casado")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "DIVORCIDADO" } },
                                            [_vm._v("Divorciado")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "VIÚVO" } },
                                            [_vm._v("Viúvo")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: { value: "UNIÃO_ESTAVEL" }
                                            },
                                            [_vm._v("União Estável")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "OUTROS" } },
                                            [_vm._v("Outros")]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Nacionalidade")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.pais,
                                              expression: "pessoa.pais"
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
                                                _vm.pessoa,
                                                "pais",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.paises, function(pais) {
                                          return _c(
                                            "option",
                                            { domProps: { value: pais } },
                                            [
                                              _vm._v(
                                                _vm._s(pais.nome) +
                                                  "\n                                                        "
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", { attrs: { for: "" } }, [
                                          _vm._v("Naturalidade")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-select",
                                          {
                                            attrs: {
                                              disabled:
                                                !_vm.pessoa.pais ||
                                                _vm.pessoa.pais.nome !=
                                                  "Brasil",
                                              label: "idCidade",
                                              filterable: false,
                                              options: _vm.options
                                            },
                                            on: { search: _vm.onSearch },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "option",
                                                fn: function(option) {
                                                  return [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "d-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                                " +
                                                            _vm._s(
                                                              option.nomeCidade
                                                            ) +
                                                            " - " +
                                                            _vm._s(option.uf) +
                                                            "\n                                                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              },
                                              {
                                                key: "selected-option",
                                                fn: function(option) {
                                                  return [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "selected d-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                                " +
                                                            _vm._s(
                                                              option.nomeCidade
                                                            ) +
                                                            " - " +
                                                            _vm._s(option.uf) +
                                                            "\n                                                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value: _vm.cidade,
                                              callback: function($$v) {
                                                _vm.cidade = $$v
                                              },
                                              expression: "cidade"
                                            }
                                          },
                                          [
                                            _c(
                                              "template",
                                              { slot: "no-options" },
                                              [
                                                _vm._v(
                                                  "\n                                                            digite para procurar um EPI...\n                                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          2
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Tipo Sanguineo")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.pessoa.tipoSangue,
                                            expression: "pessoa.tipoSangue"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { disabled: "" },
                                        domProps: {
                                          value: _vm.pessoa.tipoSangue
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.pessoa,
                                              "tipoSangue",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
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
                                    attrs: { imagem: this.pessoa }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-12" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-3" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", { attrs: { for: "" } }, [
                                        _vm._v("Fone")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.pessoa.telefone,
                                            expression: "pessoa.telefone"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        domProps: {
                                          value: _vm.pessoa.telefone
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.pessoa,
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
                                        _vm._v("Email")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.pessoa.email,
                                            expression: "pessoa.email"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "email" },
                                        domProps: { value: _vm.pessoa.email },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.pessoa,
                                              "email",
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
                                        _vm._v("Status")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.pessoa.status,
                                              expression: "pessoa.status"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { disabled: "" },
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
                                                _vm.pessoa,
                                                "status",
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
                                            { attrs: { value: "A" } },
                                            [_vm._v("Ativo")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "I" } },
                                            [_vm._v("Inativo")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "D" } },
                                            [_vm._v("Afastado por doença")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "AT" } },
                                            [_vm._v("Afastado por acidente")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-3" }, [
                                    !_vm.pessoa.biometriaTemplate
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-secondary btn-block mt-4",
                                            on: { click: _vm.digital }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-fingerprint"
                                            }),
                                            _vm._v(" Registrar")
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.pessoa.biometriaTemplate
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-success btn-block mt-4",
                                            on: { click: _vm.digital }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-fingerprint"
                                            }),
                                            _vm._v(" Atualizar")
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success",
                                    attrs: { type: "" },
                                    on: { click: _vm.salvar }
                                  },
                                  [_vm._v("Salvar")]
                                )
                              ])
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Hist. Empresas" } },
                        [_c("b-card-text")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Hist. Funções" } },
                        [
                          _c(
                            "b-card-text",
                            [
                              _vm.editar && this.montou
                                ? _c("pessoa-funcao-componente", {
                                    attrs: { pessoa: _vm.pessoa }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Capacitações" } },
                        [
                          _c(
                            "b-card-text",
                            [
                              _vm.editar && this.montou
                                ? _c("pessoa-capacitacao-componente", {
                                    attrs: { pessoa: _vm.pessoa }
                                  })
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-outline-danger", attrs: { type: "" } },
      [_c("i", { staticClass: "fa fa-trash" }), _vm._v(" Remover Pessoa")]
    )
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

/***/ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaDetalhesComponente.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PessoaDetalhesComponente.vue?vue&type=template&id=727ae094& */ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094&");
/* harmony import */ var _PessoaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PessoaDetalhesComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PessoaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pessoa/PessoaDetalhesComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaDetalhesComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PessoaDetalhesComponente.vue?vue&type=template&id=727ae094& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pessoa/PessoaDetalhesComponente.vue?vue&type=template&id=727ae094&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PessoaDetalhesComponente_vue_vue_type_template_id_727ae094___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);