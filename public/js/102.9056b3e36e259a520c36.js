(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_picture_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-picture-input */ "./node_modules/vue-picture-input/PictureInput.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      imagem: '',
      mensagem: ''
    };
  },
  mounted: function mounted() {
    if (this.$store.state.avatar != null && this.$store.state.avatar != undefined && this.$store.state.avatar != '') {
      this.mensagem = "Clique para trocar de imagem";
    } else {
      this.mensagem = "Clique para adicionar uma imagem";
    }

    console.log(this.imagem);
  },
  components: {// PictureInput
  },
  methods: {
    abreForm: function abreForm() {
      $('#file').click();
    },
    onChange: function onChange(e) {
      var _this = this;

      console.log('New picture selected!');
      console.log(e);
      var that = this;

      if (e) {
        // var formData = new FormData();
        // var imagefile = document.querySelector('#file');
        // formData.append("imagem", imagefile.files[0],imagefile.files[0].name);
        // console.log(imagefile.files[0])
        var file = e.target.files[0];

        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('Formatos aceitos: gif,jpeg,jpg,png,bmp');
          return false;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
          var data;
          console.log(e);

          if (_typeof(e.target.result) === 'object') {
            data = window.URL.createObjectURL(new Blob([e.target.result]));
          } else {
            data = e.target.result;
          }

          _this.$store.state.imagem = data;
          console.log(data);
        }; // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob


        reader.readAsArrayBuffer(file);
        $('#modalCrop').modal('show');
        $('#modalCrop').on('shown.bs.modal', function (e) {
          that.$store.state.showModal = true;
        });
        $('#modalCrop').on('hidden.bs.modal', function (e) {
          that.$store.state.showModal = false;
        }); // axios.post('/usuario/imagem', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        // .then(function(response){ 
        //   console.log(response);
        //   that.imagem = '/storage/' + response.data.imagem;
        // }).catch(function (error) {
        //   console.log(error);
        // });
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "tudo_as_foto" } }, [
    _c("div", { key: "menu", staticClass: "imagem" }, [
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "file" },
        on: { change: _vm.onChange }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: this.$store.state.avatar,
            expression: "this.$store.state.avatar"
          }
        ],
        staticStyle: { display: "none" },
        attrs: { type: "text", id: "imagem" },
        domProps: { value: this.$store.state.avatar },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(this.$store.state, "avatar", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      this.$store.state.avatar != null &&
      this.$store.state.avatar != undefined &&
      this.$store.state.avatar != ""
        ? _c("img", {
            staticStyle: { border: "'1px solid black'" },
            attrs: { src: this.$store.state.avatar, alt: "" }
          })
        : _vm._e(),
      _vm._v(" "),
      this.$store.state.avatar == null ||
      this.$store.state.avatar == undefined ||
      this.$store.state.avatar == ""
        ? _c("img", { attrs: { src: "/img/nofoto.png", alt: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.abreForm($event)
            }
          }
        },
        [_c("span", [_vm._v("\n        " + _vm._s(_vm.mensagem) + "\n      ")])]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ImagemComponente.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ImagemComponente.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagemComponente.vue?vue&type=template&id=1ad37085& */ "./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085&");
/* harmony import */ var _ImagemComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagemComponente.vue?vue&type=script&lang=js& */ "./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImagemComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImagemComponente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagemComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImagemComponente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagemComponente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagemComponente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImagemComponente.vue?vue&type=template&id=1ad37085& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagemComponente.vue?vue&type=template&id=1ad37085&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagemComponente_vue_vue_type_template_id_1ad37085___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);