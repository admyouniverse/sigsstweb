(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['empresa', 'posto', 'usuario'],
  components: {
    Money: v_money__WEBPACK_IMPORTED_MODULE_0__["Money"]
  },
  data: function data() {
    return {
      carregando: true,
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      itens: [],
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      item: {
        quantidadeEstoque: 0,
        gradeEmpresaEpi: {
          cor: {},
          tamanho: {},
          cadastroEpiCa: {}
        }
      },
      epis: [],
      epi: {},
      grades: [],
      atual: 0,
      editando: false
    };
  },
  computed: {
    parametro: function parametro() {
      var uri = window.location.search.substring(1);
      var params = new URLSearchParams(uri);
      return params.get("acao");
    }
  },
  methods: {
    abrirItem: function abrirItem(item) {
      window.location.href = "/posto-entrega/" + this.posto.idPostoEntrega + "/item/" + item.idEstoque;
    },
    abrir: function abrir() {
      this.item = {
        quantidadeEstoque: 0,
        gradeEmpresaEpi: {
          cor: {},
          tamanho: {},
          cadastroEpiCa: {}
        }
      };
      this.item.idEstoque = 0;
      this.item.postoEntrega = this.posto.idPostoEntrega;
      this.editando = false;
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epis/').then(function (response) {
        that.epis = response.data;
      });
      this.$refs.myModal.show();
    },
    carregaGrade: function carregaGrade() {
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
        that.grades = response.data;
      });
    },
    salvar: function salvar() {
      var that = this;
      that.mensagem = 'Salvando...';
      that.carregando = true;
      this.item.postoEntrega = this.posto.idPostoEntrega;
      axios.post('/posto-entrega/' + this.posto.idPostoEntrega, {
        item: that.item
      }).then(function (response) {
        if (response.data.status == "true") {
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
            that.itens = response.data;
            that.carregando = false;
          });
        }
      });
    },
    editar: function editar(item) {
      this.item = item;
      this.epi = item.gradeEmpresaEpi.cadastroEpiCa.cadastroEpi;
      this.atual = item.gradeEmpresaEpi.idGradeEmpresaEpi;
      this.editando = true;
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/grade-empresa-epis/listaPorIdCadastroEpi/' + this.epi.idCadastroEpi).then(function (response) {
        that.grades = response.data;
        axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/cadastro-epis/').then(function (response) {
          that.epis = response.data;
          that.$refs.myModal.show();
        });
      });
    },
    remover: function remover(item) {
      var that = this;
      axios.get('/posto-entrega/excluir-item/' + item.idEstoque).then(function (response) {
        if (response.data.status == "true") {
          axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + that.posto.idPostoEntrega).then(function (response) {
            that.itens = response.data;
            that.carregando = false;
          });
        }
      });
    },
    atualiza: function atualiza() {
      var that = this;
      axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
        that.itens = response.data;
        that.$nextTick(function () {
          that.ativaOrdem();
          that.carregando = false;
        });
      });
    },
    itemEmEstoque: function itemEmEstoque(epi) {
      for (var i = 0; i < this.itens.length; i++) {
        console.log('grade', this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi);
        console.log('epi', epi.idGradeEmpresaEpi);
        console.log('booelan', this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi == epi.idGradeEmpresaEpi);

        if (this.itens[i].gradeEmpresaEpi.idGradeEmpresaEpi == epi.idGradeEmpresaEpi) {
          console.log('ENTROU!!!!');
          return true;
        }
      }

      return false;
    },
    ativaOrdem: function ativaOrdem() {
      $('#tabelaPosto').DataTable().destroy();
      $.fn.dataTable.moment('DD/MM/YYYY'); //Formatação sem Hora

      $('#tabelaPosto').DataTable({
        "lengthMenu": [[50, -1], [50, "Todos"]],
        "columnDefs": [{
          "targets": 'no-sort',
          "orderable": false
        }],
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json"
        }
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get("http://34.69.79.135:8080/" + 'ServicoSIGSSO/rest/estoques/listaPorIdPostoEntrega/' + this.posto.idPostoEntrega).then(function (response) {
      that.itens = response.data;
      that.$nextTick(function () {
        setTimeout(function () {
          that.ativaOrdem();
          that.carregando = false;
        }, 200);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead tr th[data-v-c813246e] {\n  font-weight: bolder;\n}\ntr[data-v-c813246e] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&");

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

/***/ "./node_modules/v-money/dist/v-money.js":
/*!**********************************************!*\
  !*** ./node_modules/v-money/dist/v-money.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                {
                  attrs: {
                    title: "Entrega de Epi",
                    active: _vm.parametro == "entrega",
                    lazy: ""
                  }
                },
                [
                  _c("entrega-epi", {
                    attrs: {
                      posto: _vm.posto,
                      empresa: _vm.empresa,
                      usuario: _vm.usuario
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("entrada-epi-multipla", {
                attrs: { posto: _vm.posto, empresa: _vm.empresa }
              }),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: {
                    title: "Itens de Estoque",
                    active: _vm.parametro != "entrega"
                  },
                  on: { click: _vm.atualiza }
                },
                [
                  _c(
                    "b-card-text",
                    [
                      _c(
                        "table",
                        {
                          staticClass: "table table-hover table-striped",
                          attrs: { id: "tabelaPosto" }
                        },
                        [
                          _c("thead", [
                            _c("tr", [
                              _c("th", { staticClass: "text-center" }, [
                                _vm._v("ID do EPI")
                              ]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Descrição do EPI")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Cor")]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-center" }, [
                                _vm._v("Tamanho")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-center" }, [
                                _vm._v("Minimo")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-center" }, [
                                _vm._v("Estoque")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-center" }, [
                                _vm._v("C.A")
                              ]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Fabricante")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Ações")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.itens, function(item) {
                              return _c(
                                "tr",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.abrirItem(item)
                                    }
                                  }
                                },
                                [
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      _vm._s(item.gradeEmpresaEpi.idOrigem)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        item.gradeEmpresaEpi.cadastroEpiCa
                                          .cadastroEpi.epi.descricao
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(item.gradeEmpresaEpi.cor.descricao)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      _vm._s(
                                        item.gradeEmpresaEpi.tamanho.descricao
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.quantidadeMinima))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.quantidadeEstoque))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      _vm._s(
                                        item.gradeEmpresaEpi.cadastroEpiCa.ca
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        item.gradeEmpresaEpi.cadastroEpiCa
                                          .fabricante
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-outline-primary",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.editar(item)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-pencil-alt"
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
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
                            _vm._v("\n                            Adicionar")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          ref: "myModal",
                          attrs: {
                            title: "Item",
                            "ok-title": "Salvar",
                            "cancel-title": "Cancelar",
                            size: "lg"
                          },
                          on: { ok: _vm.salvar }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-8" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Tipo do EPI")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.epi,
                                        expression: "epi"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: _vm.editando },
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
                                          _vm.epi = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                        _vm.carregaGrade
                                      ]
                                    }
                                  },
                                  _vm._l(_vm.epis, function(epi) {
                                    return _c(
                                      "option",
                                      { domProps: { value: epi } },
                                      [_vm._v(_vm._s(epi.epi.descricao))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("ID do Epi")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.item.gradeEmpresaEpi,
                                        expression: "item.gradeEmpresaEpi"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { disabled: _vm.editando },
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
                                          _vm.item,
                                          "gradeEmpresaEpi",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.grades, function(grade) {
                                    return !_vm.itemEmEstoque(grade) ||
                                      grade.idGradeEmpresaEpi === _vm.atual
                                      ? _c(
                                          "option",
                                          { domProps: { value: grade } },
                                          [
                                            _vm._v(
                                              _vm._s(grade.idOrigem) +
                                                " | " +
                                                _vm._s(grade.cor.descricao) +
                                                " - " +
                                                _vm._s(
                                                  grade.tamanho.descricao
                                                ) +
                                                " (" +
                                                _vm._s(
                                                  grade.cadastroEpiCa.fabricante
                                                ) +
                                                ")"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Cor")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.item.gradeEmpresaEpi.cor.descricao,
                                      expression:
                                        "item.gradeEmpresaEpi.cor.descricao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value:
                                      _vm.item.gradeEmpresaEpi.cor.descricao
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Tamanho")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.item.gradeEmpresaEpi.tamanho
                                          .descricao,
                                      expression:
                                        "item.gradeEmpresaEpi.tamanho.descricao"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value:
                                      _vm.item.gradeEmpresaEpi.tamanho.descricao
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("CA")]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.item.gradeEmpresaEpi.cadastroEpiCa
                                          .ca,
                                      expression:
                                        "item.gradeEmpresaEpi.cadastroEpiCa.ca"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: {
                                    value:
                                      _vm.item.gradeEmpresaEpi.cadastroEpiCa.ca
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
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
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
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Quantidade Minima")]),
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
                                  attrs: { type: "number" },
                                  domProps: {
                                    value: _vm.item.quantidadeMinima
                                  },
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", [_vm._v("Quantidade Estoque")]),
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
                                  attrs: { type: "number", disabled: "" },
                                  domProps: {
                                    value: _vm.item.quantidadeEstoque
                                  },
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Valor")]),
                                  _vm._v(" "),
                                  _c(
                                    "money",
                                    _vm._b(
                                      {
                                        staticClass: "form-control",
                                        attrs: { disabled: "" },
                                        model: {
                                          value: _vm.item.valorUnitario,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.item,
                                              "valorUnitario",
                                              $$v
                                            )
                                          },
                                          expression: "item.valorUnitario"
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
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Transferência" } }),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Ajuste de Estoque" } })
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

/***/ "./resources/js/components/seguranca/PostoEntregaItens.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/seguranca/PostoEntregaItens.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true& */ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true&");
/* harmony import */ var _PostoEntregaItens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostoEntregaItens.vue?vue&type=script&lang=js& */ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& */ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostoEntregaItens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c813246e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/seguranca/PostoEntregaItens.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostoEntregaItens.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=style&index=0&id=c813246e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_style_index_0_id_c813246e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/seguranca/PostoEntregaItens.vue?vue&type=template&id=c813246e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostoEntregaItens_vue_vue_type_template_id_c813246e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);