(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa'],
  data: function data() {
    return {
      epis: [],
      epi: {},
      episBanco: [],
      editar: false,
      titulo: '',
      atual: '',
      grades: [],
      carregando: true,
      mensagem: '',
      cas: [],
      cores: [],
      tamanhos: [],
      grade: {
        idGradeEmpresaEpi: 0,
        cadastroEpiCa: []
      },
      ca: {},
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
    statusCA: function statusCA(ca) {
      if (!ca.dataBloqueio) {
        var data = Vue.moment(ca.validade, "YYYY-MM-DD");
        var hoje = Vue.moment().startOf('day');

        if (data < hoje) {
          return "<span style='color: red'> Vencido </span>";
        } else {
          return "<span style='color: green'> Valido </span>";
        }
      } else {
        var data = Vue.moment(ca.dataBloqueio, "YYYY-MM-DD");
        var hoje = Vue.moment().startOf('day');

        if (data < hoje) {
          return "<span style='color: red'> Bloqueado </span>";
        }
      }
    },
    editarGrade: function editarGrade(grade) {
      this.grade = grade;
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
        that.cas = response.data;
        that.$refs.novaGrade.show();
      });
    },
    removerGrade: function removerGrade(grade) {
      var that = this;
      axios.get('/cadastro-epi/grade/' + grade.idGradeEmpresaEpi).then(function (response) {
        if (response.data.status == 'true') {
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + that.epi.idCadastroEpi).then(function (response) {
            that.grades = response.data;
          });
        }
      });
    },
    novaGrade: function novaGrade() {
      var that = this;
      this.grade = {
        idGradeEmpresaEpi: 0,
        cadastroEpiCa: {},
        ean13: '',
        cor: {},
        tamanho: {}
      };
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
        that.cas = response.data;
        that.$refs.novaGrade.show();
      });
    },
    testaValidade: function testaValidade(validade) {
      var data = Vue.moment(validade, "YYYY-MM-DD");
      var hoje = Vue.moment().startOf('day');
      var diff = Vue.moment.duration(data.diff(hoje)).asDays(); //console.log(Vue.moment(validade, "DD/MM/YYYY"));

      if (diff < 0) {
        return "<span style='color: red'> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
      } else {
        return "<span> " + Vue.moment(validade).format("DD/MM/YYYY") + "</span>";
      } // //console.log(new Date() | Vue.moment('YYYY-MM-DD'));

    },
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    preencher: function preencher(epi) {
      this.atual = epi.epi.idEpi;
      this.epi = epi;
      this.editar = true;
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + epi.idCadastroEpi).then(function (response) {
        that.grades = response.data;
        that.$refs.myModal.show();
      });
    },
    abrir: function abrir() {
      this.epi = {};
      this.$refs.myModal.show();
    },
    salvarGrade: function salvarGrade(evt) {
      evt.preventDefault();
      var that = this;
      axios.post('/cadastro-epi/grade', {
        grade: that.grade,
        cadastroEpi: that.epi
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + that.epi.idCadastroEpi).then(function (response) {
          that.grades = response.data;
          that.$refs.novaGrade.hide();
        });
      });
    },
    fechar: function fechar() {
      this.editar = false;
      this.epi = {};
      this.atual = '';
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epis').then(function (response) {
        that.epis = response.data;
        that.$refs.myModal.hide();
      });
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
    epiEmEpi: function epiEmEpi(empresa) {
      for (var i = 0; i < this.epis.length; i++) {
        if (this.epis[i].epi.idEpi === empresa.idEpi) {
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
    remover: function remover(dado) {
      this.deletar = dado.idCadastroEpi;
      this.$refs.modalCerteza.show();
      $(this.idTabela).DataTable().destroy();
    },
    certeza: function certeza() {
      this.carregar('Removendo epi...');
      var that = this;
      axios.get('/empresas/epis/remover/' + this.empresa.idEmpresa + '/' + this.deletar).then(function (response) {
        that.epis = response.data;
        that.$nextTick(function () {
          that.fecharCerteza();
          that.sucesso('Excluido com sucesso!');
        });
      });
    },
    atualizar: function atualizar() {
      this.carregar('Atualizando...');
      var that = this;
      axios.post('/empresas/epis/atualizar/' + that.empresa.idEmpresa, {
        dados: that.epi
      }).then(function (response) {
        that.epis = response.data;
        that.$nextTick(function () {
          that.sucesso('EPI atualizado.');
          that.fechar();
        });
      });
    },
    salvar: function salvar() {
      this.carregar('Salvando...');
      var that = this; //console.log(this.epi);

      axios.post('/empresas/epis/novo/' + that.empresa.idEmpresa, {
        dados: that.epi
      }).then(function (response) {
        that.epis = response.data;
        that.$nextTick(function () {
          that.sucesso("EPI incluído.");
          that.fechar();
        });
      });
    },
    listCa: function listCa(dados) {
      var that = this;
      this.epi = dados;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epi-cas/listaCadastroEpiCaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
        that.cas = response.data;
      });
      this.titulo = dados.epi.descricao; //console.log(this.cas);

      this.$refs.modalCas.show();
    },
    abrirCa: function abrirCa() {
      this.$refs.novoCa.show();
    },
    okCa: function okCa() {
      console.log(this.epi);

      if (this.ca.idCadastroEpiCa) {
        this.carregar('Atualizando...');
        var that = this;
        axios.post('/empresas/epis/cas/atualizar/' + that.ca.idCadastroEpiCa, {
          dados: that.ca,
          cadastroEpi: that.epi.idCadastroEpi
        }).then(function (response) {
          that.cas = response.data;
          that.$nextTick(function () {
            that.sucesso("CA atualizado!");
            that.fecharCa();
          });
        }); // alert('ainda não edita.');
      } else {
        this.carregar('Salvando...');
        var that = this;
        axios.post('/empresas/epis/cas/novo/' + that.epi.idCadastroEpi, {
          dados: that.ca,
          cadastroEpi: that.epi.idCadastroEpi
        }).then(function (response) {
          that.cas = response.data;
          that.$nextTick(function () {
            that.sucesso("CA incluído.");
            that.fecharCa();
          });
        });
      }
    },
    fecharCa: function fecharCa() {
      this.ca = {};
    },
    preencherCa: function preencherCa(dados) {
      //console.log(dados);
      this.ca = dados;
      this.$refs.novoCa.show();
    },
    removerCa: function removerCa(dados) {
      //console.log(dados);
      this.carregar('Removendo CA...');
      var that = this;
      axios.get('/empresas/epis/cas/remover/' + this.epi.idCadastroEpi + '/' + dados.idCadastroEpiCa).then(function (response) {
        that.cas = response.data;
        that.$nextTick(function () {
          that.sucesso('Excluido com sucesso!');
        });
      });
    }
  },
  mounted: function mounted() {
    var that = this; //console.log(this.empresa);

    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epis').then(function (response) {
      that.epis = response.data;
    });
    axios.get('/tabelas/epi/list/').then(function (response) {
      that.episBanco = response.data; // //console.log(response.data);
    });
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cores').then(function (response) {
      that.cores = response.data;
    });
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/tamanhos').then(function (response) {
      that.tamanhos = response.data;
    });
    this.sucesso('Carregados os epis');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.titulo[data-v-18f34270] {\n    text-align: center;\n    background-color: #00a65a;\n    padding: 6px;\n    color: white;\n    font-size: 17px;\n    margin-top: 5px;\n}\n.form-remove[type=\"date\"][data-v-18f34270]::-webkit-calendar-picker-indicator {\n    display: none;\n    -webkit-appearance: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "box-body table-responsive" },
          [
            _c("table", { staticClass: "table table-hover table-striped" }, [
              _c(
                "tbody",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.epis, function(epi) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(epi.idCadastroEpi))]),
                      _vm._v(" "),
                      _c("td", [
                        epi.epi
                          ? _c("strong", [
                              _vm._v(
                                _vm._s(
                                  epi.epi.categoriaEpi.grupoEpi.codigoGrupoEpi
                                ) +
                                  "." +
                                  _vm._s(epi.epi.categoriaEpi.codigoCategoria) +
                                  "\n                                - " +
                                  _vm._s(epi.epi.codigoNr6) +
                                  " "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      epi.epi
                        ? _c("td", [_vm._v(_vm._s(epi.epi.descricao))])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(epi.complemento))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(epi.epi.observacao))]),
                      _vm._v(" "),
                      _c("td", { staticStyle: { width: "150px" } }, [
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
                                return _vm.preencher(epi)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-pencil-alt" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-outline-dark",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.listCa(epi)
                              }
                            }
                          },
                          [_vm._v("CA")]
                        )
                      ])
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("br"),
              _vm._v(" "),
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
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v("\n                    Adicionar")
                ]
              )
            ]),
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
                  title: "Detalhes do EPI",
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
                  _c("div", { staticClass: "col-md-6" }, [
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
                              value: _vm.epi.epi,
                              expression: "epi.epi"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "" },
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
                                "epi",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.episBanco, function(epiBanco) {
                          return (!_vm.epiEmEpi(epiBanco) &&
                            epiBanco.idEpi != _vm.epi.idEpi) ||
                            epiBanco.idEpi == _vm.atual
                            ? _c("option", { domProps: { value: epiBanco } }, [
                                _vm._v(
                                  "\n                                    [" +
                                    _vm._s(
                                      epiBanco.categoriaEpi.grupoEpi
                                        .codigoGrupoEpi
                                    ) +
                                    "." +
                                    _vm._s(
                                      epiBanco.categoriaEpi.codigoCategoria
                                    ) +
                                    "\n                                    - " +
                                    _vm._s(epiBanco.codigoNr6) +
                                    "] " +
                                    _vm._s(epiBanco.descricao)
                                )
                              ])
                            : _vm._e()
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
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
                            value: _vm.epi.complemento,
                            expression: "epi.complemento"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.epi.complemento },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.epi,
                              "complemento",
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
                        _vm._v("Descrição detalhada do EPI")
                      ]),
                      _vm._v(" "),
                      _vm.epi.epi
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.epi.epi.observacao,
                                expression: "epi.epi.observacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.epi.epi.observacao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.epi.epi,
                                  "observacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.epi.epi
                        ? _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Validade")]),
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
                        attrs: { type: "date" },
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
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Obervação")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.epi.observacao,
                            expression: "epi.observacao"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.epi.observacao },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.epi, "observacao", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm.epi.idCadastroEpi
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("h3", { staticClass: "titulo" }, [_vm._v("Grade")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12 text-center" }, [
                        _c(
                          "table",
                          { staticClass: "table table-hover table-striped" },
                          [
                            _c(
                              "tbody",
                              [
                                _c("tr", [
                                  _c("th", [_vm._v("ID")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("ID Origem")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("C. Barras")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Cor")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Tamanho")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("C.A")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Status do C.A")]),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "150px" }
                                    },
                                    [_vm._v("Ações")]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.grades, function(grade) {
                                  return _vm.epi.idCadastroEpi
                                    ? _c("tr", [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(grade.idGradeEmpresaEpi)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(grade.idOrigem))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(grade.ean13))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(grade.cor.descricao))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(grade.tamanho.descricao)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(grade.cadastroEpiCa.ca))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.statusCA(grade.cadastroEpiCa)
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          {
                                            staticClass: "text-center",
                                            staticStyle: { width: "150px" }
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-outline-danger",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.removerGrade(
                                                      grade
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-trash"
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-outline-primary",
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editarGrade(
                                                      grade
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                })
                              ],
                              2
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            on: { click: _vm.novaGrade }
                          },
                          [
                            _c("i", { staticClass: "fas fa-plus" }),
                            _vm._v(" Adicionar")
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
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
                      _vm._v("Tem certeza que deseja excluir este epi?")
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
                          staticClass: "btn btn-block btn-default btn-lg",
                          attrs: { type: "button", "data-dismiss": "modal" },
                          on: { click: _vm.fecharCerteza }
                        },
                        [
                          _c("i", { staticClass: "fa fa-close" }),
                          _vm._v(" Não")
                        ]
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
                        [
                          _c("i", { staticClass: "fa fa-check" }),
                          _vm._v(" Sim")
                        ]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "modalCas",
                attrs: {
                  "ok-only": "",
                  size: "lg",
                  "hide-footer": "",
                  title: "Lista de CA do EPI " + this.titulo,
                  centered: "",
                  "ok-title": "Fechar",
                  id: "modalCas"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "box-body table-responsive" }, [
                      _c(
                        "table",
                        { staticClass: "table table-hover table-striped" },
                        [
                          _c(
                            "tbody",
                            [
                              _c("tr", [
                                _c("th", [_vm._v("ID")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("CA")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Validade")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Fabricante")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Bloqueio")]),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { width: "150px" }
                                  },
                                  [_vm._v("Ações")]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.cas, function(ca) {
                                return _c("tr", [
                                  _c("td", [
                                    _vm._v(_vm._s(ca.idCadastroEpiCa))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(ca.ca) + " ")]),
                                  _vm._v(" "),
                                  _c("td", {
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.testaValidade(ca.validade)
                                      )
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(ca.fabricante))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("moment")(
                                          ca.dataBloqueio,
                                          "DD/MM/YYYY"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "150px" }
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-outline-danger",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.removerCa(ca)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-outline-primary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.preencherCa(ca)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-pencil-alt"
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              })
                            ],
                            2
                          )
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 text-center" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: {
                          click: function($event) {
                            return _vm.abrirCa()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-plus" }),
                        _vm._v("\n                            Adicionar")
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
                ref: "novoCa",
                attrs: {
                  "no-close-on-backdrop": true,
                  "hide-header-close": true,
                  "no-close-on-esc": true,
                  "ok-title": "Salvar",
                  "cancel-title": "Cancelar",
                  size: "lg",
                  title: "Novo CA no EPI " + this.titulo,
                  centered: "",
                  id: "novoCa"
                },
                on: {
                  ok: _vm.okCa,
                  cancel: function($event) {
                    return _vm.fecharCa()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Nº do CA")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group mb-3" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ca.ca,
                              expression: "ca.ca"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            "aria-describedby": "basic-addon2"
                          },
                          domProps: { value: _vm.ca.ca },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.ca, "ca", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-outline-secondary",
                              attrs: {
                                href: "https://consultaca.com/" + _vm.ca.ca,
                                target: "_blank",
                                type: "button"
                              }
                            },
                            [_c("i", { staticClass: "fa fa-mouse-pointer" })]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Validade")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ca.validade,
                            expression: "ca.validade"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.ca.validade },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.ca, "validade", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Fabricante")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ca.fabricante,
                            expression: "ca.fabricante"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ca.fabricante },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.ca, "fabricante", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Bloqueio")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ca.dataBloqueio,
                            expression: "ca.dataBloqueio"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.ca.dataBloqueio },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.ca,
                              "dataBloqueio",
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
                ref: "novaGrade",
                attrs: {
                  "ok-title": "Salvar",
                  "cancel-title": "Cancelar",
                  size: "lg",
                  title: "Nova grade",
                  centered: "",
                  id: "novaGrade"
                },
                on: { ok: _vm.salvarGrade }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-contro" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("ID Origem")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.grade.idOrigem,
                            expression: "grade.idOrigem"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.grade.idOrigem },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.grade, "idOrigem", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-contro" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Cod. de Barras")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.grade.ean13,
                            expression: "grade.ean13"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.grade.ean13 },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.grade, "ean13", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-contro" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Cores")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.grade.cor,
                              expression: "grade.cor"
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
                                _vm.grade,
                                "cor",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.cores, function(cor) {
                          return _c("option", { domProps: { value: cor } }, [
                            _vm._v(_vm._s(cor.descricao))
                          ])
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-contro" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Tamanho")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.grade.tamanho,
                              expression: "grade.tamanho"
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
                                _vm.grade,
                                "tamanho",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.tamanhos, function(tamanho) {
                          return _c(
                            "option",
                            { domProps: { value: tamanho } },
                            [_vm._v(_vm._s(tamanho.descricao))]
                          )
                        }),
                        0
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("div", { staticClass: "form-contro" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("CA")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.grade.cadastroEpiCa,
                              expression: "grade.cadastroEpiCa"
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
                                _vm.grade,
                                "cadastroEpiCa",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.cas, function(ca) {
                          return _c("option", { domProps: { value: ca } }, [
                            _vm._v(_vm._s(ca.ca))
                          ])
                        }),
                        0
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Fabricante")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.grade.cadastroEpiCa.fabricante,
                            expression: "grade.cadastroEpiCa.fabricante"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", disabled: "" },
                        domProps: { value: _vm.grade.cadastroEpiCa.fabricante },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.grade.cadastroEpiCa,
                              "fabricante",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]
            )
          ],
          1
        )
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
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "120px" } }, [_vm._v("Código")]),
      _vm._v(" "),
      _c("th", [_vm._v("EPI")]),
      _vm._v(" "),
      _c("th", [_vm._v("EPI Empresa")]),
      _vm._v(" "),
      _c("th", [_vm._v("Descrição detalhada do EPI")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "150px" } }, [_vm._v("Ações")])
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

/***/ "./resources/js/components/seguranca/EpiEmpresaComponente.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/seguranca/EpiEmpresaComponente.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true& */ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true&");
/* harmony import */ var _EpiEmpresaComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EpiEmpresaComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& */ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EpiEmpresaComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18f34270",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/seguranca/EpiEmpresaComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EpiEmpresaComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=style&index=0&id=18f34270&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_style_index_0_id_18f34270_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EpiEmpresaComponente.vue?vue&type=template&id=18f34270&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EpiEmpresaComponente_vue_vue_type_template_id_18f34270_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);