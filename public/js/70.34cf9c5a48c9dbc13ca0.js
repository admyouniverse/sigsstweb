(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-money */ "./node_modules/v-money/dist/v-money.js");
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['posto', 'empresa', 'item'],
  components: {
    Money: v_money__WEBPACK_IMPORTED_MODULE_0__["Money"]
  },
  data: function data() {
    return {
      itens: [],
      calcula: 0,
      entradas: [],
      carregando: false,
      mensagem: 'Carregando...',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      entrada: {
        tipo: 'ENTRADA',
        idEntradaEpi: 0,
        data: '',
        descricao: ''
      },
      entradaitem: {
        idEntradaEpiItens: 0,
        valorUnitario: 0
      },
      epi: {}
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
    abrir: function abrir() {
      this.editando = false;
      var that = this;
      this.entrada = {
        tipo: 'ENTRADA',
        idEntradaEpi: 0,
        data: '',
        descricao: ''
      };
      this.$refs.myModal.show();
    },
    salvar: function salvar() {
      var that = this;
      this.carregar('Salvando entrada...');
      this.entradaitem.estoque = this.item.idEstoque;
      axios.post("/posto-entrega/" + this.posto.idPostoEntrega + "/item/" + this.item.idEstoque, {
        entrada: that.entrada,
        item: that.entradaitem
      }).then(function (response) {
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrada-epis/listaPorIdEstoque/' + that.item.idEstoque).then(function (response) {
          that.entradas = response.data;
          that.sucesso('Entrada salva com sucesso!');
        });
      });
    },
    editar: function editar(entrada) {
      this.entrada = entrada;
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrada-epi-itens/listaPorIdEntradaEpi/' + this.entrada.idEntradaEpi).then(function (response) {
        that.entradaitem = response.data[0];
        that.$refs.myModal.show();
      });
    },
    remover: function remover(entrada) {}
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/entrada-epis/listaPorIdEstoque/' + this.item.idEstoque).then(function (response) {
      that.entradas = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/v-money/dist/v-money.js":
/*!**********************************************!*\
  !*** ./node_modules/v-money/dist/v-money.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        "b-card",
        { staticClass: "sig", attrs: { "no-body": "" } },
        [
          _c(
            "b-tabs",
            { attrs: { card: "" } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Entrada de EPI", active: "" } },
                [
                  _vm.entradas.length > 0
                    ? _c(
                        "table",
                        { staticClass: "table table-hover table-striped" },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("ID")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Data")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Descrição")]),
                              _vm._v(" "),
                              _c("th")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.entradas, function(entrada) {
                              return _c("tr", [
                                _c("td", [
                                  _vm._v(_vm._s(entrada.idEntradaEpi))
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("moment")(
                                        entrada.data,
                                        "DD/MM/YYYY"
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(entrada.descricao))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-outline-primary",
                                      on: {
                                        click: function($event) {
                                          return _vm.editar(entrada)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-pencil-alt"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-outline-danger",
                                      on: {
                                        click: function($event) {
                                          return _vm.remover(entrada)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-trash-alt"
                                      })
                                    ]
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.entradas.length == 0
                    ? _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          { staticClass: "alert pt-3 alert-info text-center" },
                          [
                            _c("h5", { staticClass: "mb-0" }, [
                              _vm._v("Ainda não ocorreram entradas.")
                            ])
                          ]
                        )
                      ])
                    : _vm._e(),
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
                        _vm._v("\n                        Adicionar")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "myModal",
                      attrs: {
                        title: "Entrada de EPI",
                        "ok-title": "Salvar",
                        "cancel-title": "Cancelar",
                        size: "xl"
                      },
                      on: { ok: _vm.salvar }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("label", [_vm._v("EPI NR6")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.categoriaEpi.grupoEpi
                                  .codigoGrupoEpi +
                                "." +
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.categoriaEpi
                                  .codigoCategoria +
                                "." +
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.codigoNr6 +
                                " " +
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.descricao
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c("label", [_vm._v("Epi na Empresa")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi.complemento,
                                expression:
                                  "item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.complemento"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.complemento
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi,
                                  "complemento",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Unidade")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi.epi.unidade,
                                expression:
                                  "item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.unidade"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.unidade
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi.epi,
                                  "unidade",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("label", [_vm._v("Descriçao Detalhada do EPI")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi.epi.observacao,
                                expression:
                                  "item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi.epi.observacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .cadastroEpi.epi.observacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .cadastroEpi.epi,
                                  "observacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [_c("hr")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("label", [_vm._v("ID Origem")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item.gradeEmpresaEpi.idOrigem,
                                expression: "item.gradeEmpresaEpi.idOrigem"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.item.gradeEmpresaEpi.idOrigem
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi,
                                  "idOrigem",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("label", [_vm._v("Código Barras")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item.gradeEmpresaEpi.ean13,
                                expression: "item.gradeEmpresaEpi.ean13"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.item.gradeEmpresaEpi.ean13 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi,
                                  "ean13",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Cor")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item.gradeEmpresaEpi.cor.descricao,
                                expression: "item.gradeEmpresaEpi.cor.descricao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.item.gradeEmpresaEpi.cor.descricao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cor,
                                  "descricao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Tamanho")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.tamanho.descricao,
                                expression:
                                  "item.gradeEmpresaEpi.tamanho.descricao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.item.gradeEmpresaEpi.tamanho.descricao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.tamanho,
                                  "descricao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("CA")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa.ca,
                                expression:
                                  "item.gradeEmpresaEpi.cadastroEpiCa.ca"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.item.gradeEmpresaEpi.cadastroEpiCa.ca
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa,
                                  "ca",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Est. Minimo")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item.quantidadeMinima,
                                expression: "item.quantidadeMinima"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.item.quantidadeMinima },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item,
                                  "quantidadeMinima",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Saldo")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.item.quantidadeEstoque,
                                expression: "item.quantidadeEstoque"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: { value: _vm.item.quantidadeEstoque },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item,
                                  "quantidadeEstoque",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Quantidade")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.entradaitem.quantidade,
                                expression: "entradaitem.quantidade"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.entradaitem.quantidade },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.entradaitem,
                                  "quantidade",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2" },
                          [
                            _c("label", [_vm._v("R$ Unitário")]),
                            _vm._v(" "),
                            _c(
                              "money",
                              _vm._b(
                                {
                                  staticClass: "form-control",
                                  model: {
                                    value: _vm.entradaitem.valorUnitario,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.entradaitem,
                                        "valorUnitario",
                                        $$v
                                      )
                                    },
                                    expression: "entradaitem.valorUnitario"
                                  }
                                },
                                "money",
                                _vm.money,
                                false
                              )
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("label", [_vm._v("Saldo Atualizado")]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2" },
                          [
                            _c("label", [_vm._v("R$ Un. Estoque")]),
                            _vm._v(" "),
                            _c(
                              "money",
                              _vm._b(
                                {
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  model: {
                                    value: _vm.calcula,
                                    callback: function($$v) {
                                      _vm.calcula = $$v
                                    },
                                    expression: "calcula"
                                  }
                                },
                                "money",
                                _vm.money,
                                false
                              )
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("label", [_vm._v("Data")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.entrada.data,
                                expression: "entrada.data"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date" },
                            domProps: { value: _vm.entrada.data },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.entrada,
                                  "data",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-8" }, [
                          _c("label", [_vm._v("Fabricante")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                    .fabricante,
                                expression:
                                  "item.gradeEmpresaEpi.cadastroEpiCa.fabricante"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                  .fabricante
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.item.gradeEmpresaEpi.cadastroEpiCa,
                                  "fabricante",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("label", [_vm._v("Descrição")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.entrada.descricao,
                                expression: "entrada.descricao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.entrada.descricao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.entrada,
                                  "descricao",
                                  $event.target.value
                                )
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

/***/ "./resources/js/components/seguranca/EntradaEpi.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/seguranca/EntradaEpi.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true& */ "./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true&");
/* harmony import */ var _EntradaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntradaEpi.vue?vue&type=script&lang=js& */ "./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntradaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0dcd9b04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/seguranca/EntradaEpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntradaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntradaEpi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntradaEpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/EntradaEpi.vue?vue&type=template&id=0dcd9b04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntradaEpi_vue_vue_type_template_id_0dcd9b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);