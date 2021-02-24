(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['editar', 'ppradb', 'empresadb'],
  data: function data() {
    return {
      ppra: {
        idPpra: 0,
        empresasContrato: [],
        versao: '',
        dataHora: '',
        status: 'ELABORAÇÃO',
        liberado: 'LIBERADO',
        tipoPpra: 'SELECIONE',
        atividadeLocal: '',
        introducao: '',
        objetivos: '',
        metodos: '',
        orientacoes: '',
        comentarios: '',
        caminhoPdf: '',
        ppra: ''
      },
      matrizes: [],
      carregando: true,
      mensagem: 'Carregando...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      contratosAll: [],
      contratos: [],
      empresas: [],
      empresa: '',
      contrato: {
        empresa: {},
        empresaContratante: {}
      },
      adicionar: false,
      montou: false,
      file: '',
      aba: ''
    };
  },
  computed: {
    parametro: function parametro() {
      var uri = window.location.search.substring(1);
      var params = new URLSearchParams(uri);

      if (params.get("aba")) {
        return params.get("aba");
      } else {
        return 'detalhes';
      }
    }
  },
  methods: {
    abrirUpload: function abrirUpload() {
      $("#file").click();
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.submitFile();
    },
    submitFile: function submitFile() {
      /*
              Initialize the form data
          */
      var formData = new FormData();
      /*
          Add the form data we need to submit
      */

      formData.append('file', this.file);
      /*
        Make the request to the POST /single-file URL
      */

      var that = this;
      axios.post('http://200.98.201.236:8081/upload-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        console.log('SUCCESS!!');
        that.ppra.caminhoPdf = response.data.data.new_file_name;
        that.salvar();
      })["catch"](function () {
        console.log('FAILURE!!');
      });
    },
    status: function status(_status) {
      if (_status == 'ELABORAÇÃO') {
        return "<strong style='color: red'>Em Elaboração</strong>";
      } else {
        return "Completo";
      }
    },
    situacao: function situacao(_situacao) {
      if (_situacao == 'LIBERADO') {
        return "<strong style='color: red'>Liberado</strong>";
      } else {
        return "Congelado";
      }
    },
    tipoPcmso: function tipoPcmso(tipo) {
      if (tipo == 'EMISSÃO') {
        return 'Emissão';
      } else if (tipo == 'REVISÃO_PARCIAL') {
        return 'Revisão Parcial';
      } else if (tipo == 'REVISÃO_GERAL') {
        return 'Revisão Geral';
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
      }, 5000);
    },
    adicionarContrato: function adicionarContrato() {
      this.ppra.empresasContrato.push(this.contrato);
      this.contrato = {
        empresa: {},
        empresaContratante: {}
      };
      this.adicionar = false;
    },
    excluirContrato: function excluirContrato(key) {
      this.ppra.empresasContrato.splice(key, 1);
    },
    contratosEmContratos: function contratosEmContratos(contrato) {
      for (var i = 0; i < this.ppra.empresasContrato.length; i++) {
        if (this.ppra.empresasContrato[i].idEmpresaContrato === contrato.idEmpresaContrato) {
          return true;
        }
      }

      return false;
    },
    valida: function valida(callback) {
      var that = this; // console.log(this.ppra.tipoPpra);

      if (this.editar) {
        callback();
      } else {
        if (that.contrato && that.ppra.dataHora != '' && that.ppra.tipoPpra != 'SELECIONE') {
          that.carregar('Validando...');
          axios.get('/gro/list/' + that.contrato.idEmpresaContrato).then(function (response) {
            if (response.data) {
              console.log(response.data);

              if (response.data.tipoPpra == 'EMISSÃO' && that.ppra.tipoPpra == 'EMISSÃO') {
                that.alerta('O tipo não pode ser emissão!');
                that.ppra.tipoPpra = 'SELECIONE';
                that.ppra.versao = '';
                return false;
              }

              if (response.data.liberado != 'CONGELADO') {
                that.alerta('O PPRA anterior, com este contrato, precisa ter a situação CONGELADO. Corrija.');
                return false;
              }

              var dataBd = new Date(response.data.dataHora);
              var data = new Date(that.ppra.dataHora);

              if (dataBd >= data) {
                that.alerta('Data precisa ser maior que ' + (dataBd.getDate() + 1) + "/" + (dataBd.getMonth() + 1) + "/" + dataBd.getFullYear());
                return false;
              }

              console.log('Chegou aqui!');
              that.ppra.introducao = response.data.introducao;
              that.ppra.objetivos = response.data.objetivos;
              that.ppra.comentarios = response.data.comentarios;
              callback();
            } else {
              callback();
            }
          });
        } else {
          return false;
        }
      }
    },
    mudaData: function mudaData() {
      var that = this;
      that.carregar('Buscando contratos para esta data...');
      this.contratos = this.contratosAll.filter(function (contrato) {
        var dataInicio = new Date(contrato.dataIni);
        var data = new Date(that.ppra.dataHora);

        if (dataInicio <= data) {
          if (contrato.dataFim) {
            var dataFim = new Date(contrato.dataFim);

            if (dataFim >= data) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        } else {
          return false;
        }
      });
      this.sucesso('Contratos recuperados.');
    },
    getVersao: function getVersao() {
      var that = this;
      this.valida(function () {
        {
          axios.post('/gro/versao', {
            contrato: that.contrato,
            data: that.ppra.dataHora,
            tipo: that.ppra.tipoPpra
          }).then(function (response) {
            console.log(response);

            if (response.data == 'Erro') {
              that.alerta('Verifique o tipo de PPRA!');
              that.ppra.versao = '';
            } else {
              that.sucesso('Versão recuperada.');
              that.ppra.versao = response.data;
            }
          });
        }
      });
    },
    getContratos: function getContratos(callback) {
      var that = this;
      that.mensagem = 'Carregando contratos das empresas...';
      that.carregando = true;
      axios.get('/gro/contratos/' + this.empresa.idEmpresa).then(function (response) {
        that.contratosAll = response.data;
        that.contratos = that.contratosAll;
        that.carregando = false;
        (callback || Function)();
      });
    },
    salvar: function salvar() {
      var that = this;
      this.valida(function () {
        that.mensagem = 'Salvando PPRA...';
        that.carregando = true;
        axios.post('/gro', {
          ppra: that.ppra,
          contrato: that.contrato
        }).then(function (response) {
          if (response.data != 'erro') {
            window.location.href = "/gro/editar/" + response.data + "/?aba=" + that.aba;
          } else {
            that.mensagem = 'Erro!';
            that.carregando = false;
          }
        });
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    console.log(this.empresadb);
    this.aba = this.parametro;
    console.log('parametro', this.parametro);
    axios.get('/matriz/list').then(function (response) {
      that.matrizes = response.data;
    });
    axios.get('/empresas/list').then(function (response) {
      that.empresas = response.data;
      that.carregando = false;
      that.montou = true;
    });

    if (this.editar) {
      this.ppra = this.ppradb;
      this.empresa = this.ppra.empresasContrato[0].empresa;
      this.getContratos();
      this.contrato = this.ppra.empresasContrato[0];
      console.log(this.contrato);
    } else {
      this.empresa = this.empresadb;
      this.getContratos(function () {
        if (that.empresa.tipoEmpresa == 'NENHUM' || that.empresa.tipoEmpresa == 'CONTRATANTE') {
          that.contratos.forEach(function (contrato) {
            console.log(contrato);

            if (contrato.empresaContratante.idEmpresa == that.empresa.idEmpresa) {
              that.contrato = contrato;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-sig .box-header[data-v-c2a6f828] {\n  background-color: #59AF50;\n  color: #fff;\n}\n.box-sig .box-body[data-v-c2a6f828] {\n  background-color: #e8fce8;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true& ***!
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
    "section",
    { staticClass: "content" },
    [
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
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
                    {
                      attrs: {
                        title: "Detalhes",
                        active: _vm.parametro != "capa"
                      },
                      on: {
                        click: function($event) {
                          _vm.aba = "detalhes"
                        }
                      }
                    },
                    [
                      _c("b-card-text", [
                        _c("div", { staticClass: "row" }, [
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
                                    value: _vm.ppra.idPpra,
                                    expression: "ppra.idPpra"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", disabled: "" },
                                domProps: { value: _vm.ppra.idPpra },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.ppra,
                                      "idPpra",
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
                                _vm._v("Empresa")
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
                                attrs: { type: "text", disabled: "" },
                                domProps: { value: _vm.empresa.razaoSocial },
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Unidade")
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
                                attrs: { type: "text", disabled: "" },
                                domProps: { value: _vm.empresa.nomeUnidade },
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
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Data")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.ppra.dataHora,
                                    expression: "ppra.dataHora"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.ppra.dataHora },
                                on: {
                                  blur: _vm.mudaData,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.ppra,
                                      "dataHora",
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
                                      value: _vm.contrato,
                                      expression: "contrato"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled:
                                      _vm.empresa.tipoEmpresa == "NENHUM" ||
                                      _vm.empresa.tipoEmpresa == "CONTRATANTE"
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.contrato = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                      _vm.getVersao
                                    ]
                                  }
                                },
                                [
                                  _vm._l(_vm.contratos, function(contrat) {
                                    return contrat.empresaContratante
                                      .idEmpresa != _vm.empresa.idEmpresa
                                      ? _c(
                                          "option",
                                          { domProps: { value: contrat } },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  contrat.idEmpresaContrato
                                                ) +
                                                " |\n                                            " +
                                                _vm._s(
                                                  contrat.empresaContratante
                                                    .nomeFantasia
                                                )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.contratos, function(contrat) {
                                    return contrat.empresaContratante
                                      .idEmpresa == _vm.empresa.idEmpresa
                                      ? _c(
                                          "option",
                                          { domProps: { value: contrat } },
                                          [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  contrat.empresaContratante
                                                    .nomeFantasia
                                                ) +
                                                "\n                                        "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-3" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Tipo")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.ppra.tipoPpra,
                                      expression: "ppra.tipoPpra"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.ppra,
                                          "tipoPpra",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      _vm.getVersao
                                    ]
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        value: "SELECIONE",
                                        disabled: ""
                                      }
                                    },
                                    [_vm._v("--- Selecione ---")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "EMISSÃO" } },
                                    [_vm._v("Emissão")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "REVISÃO_PARCIAL" } },
                                    [_vm._v("Revisão Parcial")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "REVISÃO_GERAL" } },
                                    [_vm._v("Revisão Geral")]
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Versão")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.ppra.versao,
                                    expression: "ppra.versao"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: _vm.ppra.versao },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.ppra,
                                      "versao",
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
                                _vm._v("Matriz de Risco")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.ppra.matrizRisco,
                                      expression: "ppra.matrizRisco"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.ppra,
                                        "matrizRisco",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.matrizes, function(matriz) {
                                  return _c(
                                    "option",
                                    { domProps: { value: matriz } },
                                    [_vm._v(_vm._s(matriz.descricao))]
                                  )
                                }),
                                0
                              )
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
                                      value: _vm.ppra.status,
                                      expression: "ppra.status"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.ppra,
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
                                    {
                                      attrs: {
                                        value: "SELECIONE",
                                        disabled: ""
                                      }
                                    },
                                    [_vm._v("--- Selecione ---")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "ELABORAÇÃO" } },
                                    [_vm._v("Elaboração")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "COMPLETO" } },
                                    [_vm._v("Completo")]
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "" } }, [
                                _vm._v("Situação")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.ppra.liberado,
                                      expression: "ppra.liberado"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.ppra,
                                        "liberado",
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
                                    [_vm._v("SELECIONE")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "LIBERADO" } },
                                    [_vm._v("Liberado")]
                                  ),
                                  _vm._v(" "),
                                  _vm.ppra.status == "COMPLETO"
                                    ? _c(
                                        "option",
                                        { attrs: { value: "CONGELADO" } },
                                        [
                                          _vm._v(
                                            "Congelado\n                                        "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _vm.ppra.idPpra && !_vm.ppra.caminhoPdf
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn pull-right btn-success",
                                    on: { click: _vm.abrirUpload }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-upload" }),
                                    _vm._v(" Inserir PDF")
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.ppra.idPpra && _vm.ppra.caminhoPdf
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn pull-right btn-success ml-3",
                                    on: { click: _vm.abrirUpload }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-upload" }),
                                    _vm._v(" Atualizar PDF")
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.ppra.idPpra && _vm.ppra.caminhoPdf
                              ? _c(
                                  "a",
                                  {
                                    staticClass: "btn pull-right btn-success",
                                    attrs: {
                                      target: "_blank",
                                      href:
                                        "http://200.98.201.236:8081/" +
                                        _vm.ppra.caminhoPdf
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-eye" }),
                                    _vm._v(" Visualizar PDF")
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("input", {
                              ref: "file",
                              staticStyle: { display: "none" },
                              attrs: { type: "file", id: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.handleFileUpload()
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                on: {
                                  click: function($event) {
                                    return _vm.salvar()
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-save" }),
                                _vm._v(
                                  "\n                                    Salvar"
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-12 mt-3 text-center" },
                            [
                              _c(
                                "h5",
                                { staticClass: "bg-success p-3 text-light" },
                                [_vm._v("PCMSO vinculado(s)")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "table",
                              {
                                staticClass: "table table-hover table-striped"
                              },
                              [
                                _c(
                                  "tbody",
                                  [
                                    _c("tr", [
                                      _c("th", [
                                        _vm._v(
                                          "\n                                                Versão\n                                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Tipo PCMSO")]),
                                      _vm._v(" "),
                                      _c("th", [
                                        _vm._v(
                                          "\n                                                Data\n                                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Status")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Situação")])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.ppra.pcmsos, function(pcmso) {
                                      return _c("tr", [
                                        _c("td", [
                                          _vm._v(_vm._s(pcmso.versao))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.tipoPcmso(pcmso.tipoPcmso)
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                pcmso.dataHora,
                                                "DD/MM/YYYY"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.status(pcmso.status)
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.situacao(pcmso.liberado)
                                            )
                                          }
                                        })
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ]
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
                    {
                      attrs: {
                        title: "Capas",
                        active: _vm.parametro == "capa"
                      },
                      on: {
                        click: function($event) {
                          _vm.aba = "capa"
                        }
                      }
                    },
                    [
                      _c(
                        "b-card-text",
                        { staticClass: "sig" },
                        [
                          _c(
                            "b-tabs",
                            { attrs: { pills: "" } },
                            [
                              _c(
                                "b-tab",
                                { attrs: { title: "Introdução" } },
                                [
                                  _c("b-card-text", [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.ppra.introducao,
                                          expression: "ppra.introducao"
                                        }
                                      ],
                                      staticClass: "form-control mt-4",
                                      attrs: { rows: "12" },
                                      domProps: { value: _vm.ppra.introducao },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.ppra,
                                            "introducao",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Objetivo" } },
                                [
                                  _c("b-card-text", [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.ppra.objetivos,
                                          expression: "ppra.objetivos"
                                        }
                                      ],
                                      staticClass: "form-control mt-4",
                                      attrs: { rows: "12" },
                                      domProps: { value: _vm.ppra.objetivos },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.ppra,
                                            "objetivos",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Orientação" } },
                                [
                                  _c("b-card-text", [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.ppra.orientacoes,
                                          expression: "ppra.orientacoes"
                                        }
                                      ],
                                      staticClass: "form-control mt-4",
                                      attrs: { rows: "12" },
                                      domProps: { value: _vm.ppra.orientacoes },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.ppra,
                                            "orientacoes",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tab",
                                { attrs: { title: "Atividades" } },
                                [
                                  _c("b-card-text", [
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.empresa.descricaoAtividade,
                                          expression:
                                            "empresa.descricaoAtividade"
                                        }
                                      ],
                                      staticClass: "form-control mt-4",
                                      attrs: { rows: "12", readonly: "" },
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
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-12 mt-4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  on: {
                                    click: function($event) {
                                      return _vm.salvar()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-save" }),
                                  _vm._v(
                                    "\n                                    Salvar"
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  this.editar && this.montou
                    ? _c(
                        "b-tab",
                        { attrs: { title: "Ambiente & Cargos" } },
                        [
                          _c(
                            "b-card-text",
                            [
                              _c("ppra-ambiente", {
                                attrs: {
                                  ppra: this.ppra,
                                  empresa: this.empresadb
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "Plano de Ação" } },
                    [
                      this.editar && this.montou
                        ? _c(
                            "b-card-text",
                            [
                              _c("ppra-plano-acao", {
                                attrs: { ppra: this.ppra }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "Histórico de Revisões" } },
                    [
                      this.editar && this.montou
                        ? _c(
                            "b-card-text",
                            [
                              _c("ppra-historico-revisao", {
                                attrs: { ppra: this.ppra }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.empresadb.tipoEmpresa != "NENHUM"
                    ? _c(
                        "b-tab",
                        { attrs: { title: "Contrato" } },
                        [
                          this.editar && this.montou
                            ? _c(
                                "b-card-text",
                                [
                                  _c("ppra-capa", {
                                    attrs: { ppra: this.ppra }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
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

/***/ "./resources/js/components/ppra/PpraDetalhes.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ppra/PpraDetalhes.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true& */ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true&");
/* harmony import */ var _PpraDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraDetalhes.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& */ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PpraDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c2a6f828",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/PpraDetalhes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraDetalhes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=style&index=0&id=c2a6f828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_style_index_0_id_c2a6f828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/PpraDetalhes.vue?vue&type=template&id=c2a6f828&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraDetalhes_vue_vue_type_template_id_c2a6f828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);