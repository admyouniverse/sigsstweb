(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
      carregando: true,
      mensagem: '',
      cas: [],
      ca: {},
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    };
  },
  methods: {
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
      this.$refs.myModal.show();
    },
    abrir: function abrir() {
      this.epi = {};
      this.$refs.myModal.show();
    },
    fechar: function fechar() {
      this.editar = false;
      this.epi = {};
      this.atual = '';
      var that = this;
      axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
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
      this.deletar = dado.idEmpresaEpi;
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
      axios.get('/empresas/epis/cas/' + dados.idEmpresaEpi).then(function (response) {
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

      if (this.ca.idEmpresaEpiCa) {
        this.carregar('Atualizando...');
        var that = this;
        axios.post('/empresas/epis/cas/atualizar/' + that.ca.idEmpresaEpiCa, {
          dados: that.ca,
          empresaEpi: that.epi.idEmpresaEpi
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
        axios.post('/empresas/epis/cas/novo/' + that.epi.idEmpresaEpi, {
          dados: that.ca,
          empresaEpi: that.epi.idEmpresaEpi
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
      axios.get('/empresas/epis/cas/remover/' + this.epi.idEmpresaEpi + '/' + dados.idEmpresaEpiCa).then(function (response) {
        that.cas = response.data;
        that.$nextTick(function () {
          that.sucesso('Excluido com sucesso!');
        });
      });
    }
  },
  mounted: function mounted() {
    var that = this; //console.log(this.empresa);

    axios.get('/empresas/epis/' + that.empresa.idEmpresa).then(function (response) {
      that.epis = response.data;
    });
    axios.get('/tabelas/epi/list/').then(function (response) {
      that.episBanco = response.data; // //console.log(response.data);
    });
    this.sucesso('Carregados os epis');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "sig", attrs: { "no-body": "" } },
    [
      _c(
        "b-tabs",
        { attrs: { card: "" } },
        [
          _c(
            "b-tab",
            { attrs: { title: "EPI na Empresa", active: "" } },
            [_c("b-card-text")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-tab",
            { attrs: { title: "Matriz de EPI" } },
            [
              _c(
                "b-card-text",
                [
                  _c("empresa-ambiente-epi", {
                    attrs: { empresa: _vm.empresa }
                  })
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

/***/ "./resources/js/components/empresa/EmpresaEpiComponente.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEpiComponente.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee& */ "./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee&");
/* harmony import */ var _EmpresaEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmpresaEpiComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmpresaEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/empresa/EmpresaEpiComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEpiComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEpiComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/empresa/EmpresaEpiComponente.vue?vue&type=template&id=1848b6ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaEpiComponente_vue_vue_type_template_id_1848b6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);