(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['ambiente', 'ppra'],
  data: function data() {
    return {
      fator: {
        "idPpraAmbienteRisco": 0,
        "ambienteTrabalho": "",
        "fonteGeradora": "",
        "complemento": "",
        "epc": "",
        "eficaz": "",
        "exposicao": "",
        "criterio": "",
        "pesoX": "",
        "medidasExistentes": "",
        "pesoY": "",
        "pesoYAtenuado": {},
        "pesoXAtenuado": {},
        "dataLancamento": "",
        "observacao": "",
        "risco": "",
        "unidade": {
          "unidadeMedida": {}
        }
      },
      medidas: {
        "idPpraAmbienteRiscoMedida": 0,
        "ppraAmbienteRisco": 0,
        "medida": 0,
        "operadorRelacional": "",
        "dataMedida": "",
        "tecnicaUtilizada": "",
        "unidadeMedida": {
          "unidadeMedida": {
            "unidade": {}
          }
        }
      },
      riscos: [],
      fontes: [],
      unidades: [],
      pesosx: [],
      pesosy: [],
      resultado: 0,
      resultadoAtenuado: 0,
      eixox: {},
      eixoy: {},
      criterios: [],
      fatores: [],
      nivel: {},
      nivelAtenuado: {},
      atual: '',
      carregando: true,
      historicos: [],
      mensagem: '',
      html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      file: ''
    };
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
        that.fator.caminhoPdf = response.data.data.new_file_name;
        that.$forceUpdate();
      })["catch"](function () {
        console.log('FAILURE!!');
      });
    },
    validar: function validar(callback) {
      var that = this;

      if (this.fator.risco.enquadramento == 'QUANTITATIVO') {
        if (this.medidas.riscoUnidadeMedida != undefined && Object.keys(this.medidas.riscoUnidadeMedida).length > 0 && Object.keys(this.medidas.riscoUnidadeMedida.unidadeMedida).length) {
          callback();
        } else {
          that.$alert('Preencha a unidade de medida!', 'Ops.', 'warning');
        }
      } else {
        callback();
      }
    },
    mudouUnidadeMedida: function mudouUnidadeMedida() {
      console.log(this.medidas.riscoUnidadeMedida);
    },
    salvar: function salvar(evt) {
      evt.preventDefault();
      var that = this;
      this.validar(function () {
        that.carregar('Salvando...');
        that.fator.ambienteTrabalho = that.ambiente;
        console.log('MEDIDAS', that.medidas);
        that.fator.medidas = that.medidas;
        axios.post('/gro/ambiente-risco', {
          fator: that.fator,
          medidas: {
            data: that.medidas.dataMedida,
            riscoUnidadeMedida: that.medidas.riscoUnidadeMedida,
            medida: that.medidas.medida,
            tecnicaUtilizada: that.medidas.tecnicaUtilizada,
            idPpraAmbienteRiscoMedida: that.medidas.idPpraAmbienteRiscoMedida
          }
        }).then(function (response) {
          that.carregando = false;

          if (response.data != 'erro') {
            that.fatores = response.data;
            that.$alert('Salvo.', 'Sucesso!', 'success');
            that.fechar();
          } else {
            that.$alert('Verifique os dados.', 'Erro ao salvar!', 'warning');
          }
        });
      });
    },
    excluir: function excluir(fat) {
      var that = this;
      this.carregar('Excluindo...');
      axios.post('/gro/ambiente-risco/remover', {
        idAmbienteRiscoMedida: fat.medida.idPpraAmbienteRiscoMedida,
        idAmbienteRisco: fat.idPpraAmbienteRisco,
        ambiente: that.ambiente.idPpraAmbienteTrabalho
      }).then(function (response) {
        if (response.data != 'erro') {
          that.carregando = false;
          that.$alert('Excluido.', 'Sucesso!', 'success');
          that.fatores = response.data;
        } else {
          that.carregando = false;
          that.$alert('Verifique os dados.', 'Erro!', 'warning');
        }
      });
    },
    riscoEmRisco: function riscoEmRisco(risc) {
      for (var i = 0; i < this.fatores.length; i++) {
        if (this.fatores[i].risco.idRisco === risc.idRisco) {
          return true;
        }
      }

      return false;
    },
    calculaData: function calculaData() {
      var that = this;
      var dataInclusao = new Date(this.medidas.dataMedida);
      var data = new Date(this.ambiente.ppra.dataHora);

      if (dataInclusao > data) {
        data.setDate(data.getDate() + 1);
        this.$alert('Data precisa ser menor que ' + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
        that.medidas.dataMedida = that.ambiente.ppra.dataHora;
      }
    },
    carregar: function carregar(msg) {
      this.mensagem = msg;
      this.html = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>';
      this.carregando = true;
    },
    recalcular: function recalcular(fat, key) {
      this.fator = fat;
      this.medidas = fat.medida;
      var that = this;
      this.fator.ambienteTrabalho = that.ambiente;
      axios.post('/gro/ambiente-risco', {
        fator: that.fator,
        medidas: that.medidas
      }).then(function (response) {
        that.carregando = false;
        that.fatores = response.data;
      });
    },
    recalcularAtenuado: function recalcularAtenuado(fat, key) {
      this.fator = fat;
      this.medidas = fat.medida;
      var that = this;
      this.fator.ambienteTrabalho = that.ambiente;
      axios.post('/gro/ambiente-risco', {
        fator: that.fator,
        medidas: that.medidas
      }).then(function (response) {
        that.carregando = false;
        that.fatores = response.data;
      });
    },
    calculaNivel: function calculaNivel() {
      if (this.fator.pesoX && this.fator.pesoY) {
        if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
          this.resultado = parseInt(this.fator.pesoX.peso) * parseInt(this.fator.pesoY.peso);
        } else {
          this.resultado = parseInt(this.fator.pesoX.peso) + parseInt(this.fator.pesoY.peso);
        }

        var that = this;
        axios.get('/nivel-matriz/peso/' + this.resultado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
          that.nivel = response.data;
        });
      }
    },
    calculaNivelAtenuado: function calculaNivelAtenuado() {
      if (this.fator.pesoXAtenuado && this.fator.pesoYAtenuado) {
        if (this.ambiente.ppra.matrizRisco.criterio == 'MULTIPLICACAO') {
          this.resultadoAtenuado = parseInt(this.fator.pesoXAtenuado.peso) * parseInt(this.fator.pesoYAtenuado.peso);
        } else {
          this.resultadoAtenuado = parseInt(this.fator.pesoXAtenuado.peso) + parseInt(this.fator.pesoYAtenuado.peso);
        }

        var that = this;
        axios.get('/nivel-matriz/peso/' + this.resultadoAtenuado + '/matriz/' + this.ambiente.ppra.matrizRisco.idMatrizRisco).then(function (response) {
          that.nivelAtenuado = response.data;
        });
      }
    },
    editar: function editar(fat) {
      this.fator = Object.assign({}, fat);
      this.carregar("Buscando dados...");

      if (fat.medida) {
        this.medidas = fat.medida;
      } else {
        this.medidas = {
          "idPpraAmbienteRiscoMedida": 0,
          "ppraAmbienteRisco": 0,
          "medida": 0,
          "operadorRelacional": "",
          "dataMedida": "",
          "tecnicaUtilizada": "",
          "unidadeMedida": {
            "unidadeMedida": {
              "unidade": {}
            }
          }
        };
      }

      console.log(this.fator);
      var that = this;
      axios.post('/gro/ambiente-risco/historico', {
        idEmpresaContrato: that.ppra.empresasContrato[0].idEmpresaContrato,
        idOrigem: that.ambiente.idOrigem,
        idRisco: that.fator.risco.idRisco
      }).then(function (response) {
        that.historicos = response.data;
        console.log('historicos', that.historicos);
      });
      this.atual = this.fator.risco.idRisco;
      this.calculaNivel();
      this.calculaNivelAtenuado();
      this.getUnidades(function () {
        that.$refs.myModal.show();
        that.carregando = false;
      });
    },
    fechar: function fechar() {
      this.$refs.myModal.hide();
    },
    abrir: function abrir() {
      this.fator = {
        "idPpraAmbienteRisco": 0,
        "ambienteTrabalho": "",
        "fonteGeradora": "",
        "complemento": "",
        "epc": "",
        "eficaz": "",
        "exposicao": "",
        "criterio": "",
        "pesoX": "",
        "pesoY": "",
        "dataLancamento": "",
        "medidasExistentes": "",
        "observacao": "",
        "risco": "",
        "unidade": {
          "unidadeMedida": {}
        }
      };
      this.medidas = {
        "idPpraAmbienteRiscoMedida": 0,
        "ppraAmbienteRisco": 0,
        "medida": 0,
        "operadorRelacional": "",
        "dataMedida": "",
        "tecnicaUtilizada": "",
        "unidadeMedida": {}
      };
      this.historicos = [];
      this.nivel = {};
      this.atual = 0;
      this.$refs.myModal.show();
    },
    getUnidades: function getUnidades(callback) {
      var that = this;
      axios.get('/tabelas/riscos/' + this.fator.risco.idRisco + '/unidades').then(function (response) {
        that.unidades = response.data;

        if (!that.medidas.riscoUnidadeMedida) {
          if (that.unidades.length == 1 || that.medidas.idAmbienteRiscoMedida != 0) {
            that.medidas.riscoUnidadeMedida = that.unidades[0];
          } else {
            that.medidas.riscoUnidadeMedida = {
              "unidadeMedida": {
                "unidadeMedida": {
                  "unidade": {}
                }
              }
            };
          }
        }

        if (callback) callback();
      });
    },
    cor: function cor(risco) {
      if (risco == 'BIOLÓGICO') {
        return "background-color:rgb(148, 90, 30)";
      } else if (risco == 'ERGONÔMICO') {
        return "background-color:rgb(255, 255, 0)";
      } else if (risco == 'ACIDENTE') {
        return "background-color:rgb(0, 0, 255)";
      } else if (risco == 'FÍSICO') {
        return "background-color:rgb(0, 128, 0)";
      } else if (risco == 'QUÍMICO') {
        return "background-color:rgb(255, 0, 0)";
      } else if (risco == 'PERICULOSOS') {
        return "background-color:rgb(255, 255, 0)";
      } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
        return "background-color:rgb(0, 0, 0)";
      } else if (risco == 'PENOSOS') {
        return "background-color:rgb(254, 218, 71)";
      } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
        return "background-color:rgb(128, 128, 128)";
      }
    },
    grupoDeRisco: function grupoDeRisco(risco) {
      if (risco == 'BIOLÓGICO') {
        return "B";
      } else if (risco == 'ERGONÔMICO') {
        return "E";
      } else if (risco == 'ACIDENTE') {
        return "A";
      } else if (risco == 'FÍSICO') {
        return "F";
      } else if (risco == 'QUÍMICO') {
        return "Q";
      } else if (risco == 'PERICULOSOS') {
        return "P";
      } else if (risco == 'ASSOCIAÇÃO_DE_FATORES_DE_RISCO') {
        return "AFR";
      } else if (risco == 'PENOSOS') {
        return "Pen";
      } else if (risco == 'AUSÊNCIA_DE_FATORES_DE_RISCO') {
        return "Aus FR";
      }
    }
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/tabelas/riscos/list').then(function (response) {
      that.riscos = response.data;
    });
    axios.get('/tabelas/riscos/fontes-geradoras/list').then(function (response) {
      that.fontes = response.data;
    });
    axios.get('/peso-x/list').then(function (response) {
      that.pesosx = response.data;
    });
    axios.get('/peso-y/list').then(function (response) {
      that.pesosy = response.data;
    });
    axios.get('/eixo-y/list').then(function (response) {
      that.eixoy = response.data;
    });
    axios.get('/eixo-x/list').then(function (response) {
      that.eixox = response.data;
    });
    axios.get('/gro/ambiente-risco/' + this.ambiente.idPpraAmbienteTrabalho + '/list').then(function (response) {
      that.fatores = response.data;
      console.log(that.fatores);
      that.carregando = false;
      that.$alert('Todos os dados foram carregados.', 'Sucesso!', 'success');
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-sem-fundo {\n  background-color: transparent;\n  border: none;\n}\n.div-nivel {\n  width: 100%;\n  height: calc(1.6em + 0.75rem + 2px);\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  font-weight: 900;\n  padding: 6px;\n}\n.btn-50 {\n  width: 48%;\n}\n.table-fatores {\n  margin-bottom: 10px;\n}\n.table-fatores tr th {\n  font-weight: bold;\n}\n.table-fatores tr td {\n  cursor: pointer;\n}\n.table-fatores tr td,\n.table-fatores tr th {\n  white-space: nowrap;\n  border: 1px solid #dee2e6;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFatores.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e& ***!
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
      _vm.carregando
        ? _c("BlockUI", { attrs: { message: _vm.mensagem, html: _vm.html } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              { staticClass: "table table-fatores table-hover table-striped" },
              [
                _c(
                  "tbody",
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("tr", [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _vm._m(7),
                      _vm._v(" "),
                      _vm.eixox[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixox[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.eixoy[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixoy[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(8),
                      _vm._v(" "),
                      _vm._m(9),
                      _vm._v(" "),
                      _vm.eixox[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixox[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.eixoy[0]
                        ? _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                "text-align": "center"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  " " + _vm._s(_vm.eixoy[0].descricao) + " "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(10),
                      _vm._v(" "),
                      _c("td")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.fatores, function(fat, key) {
                      return _c("tr", [
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "justify",
                              "vertical-align": "middle"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editar(fat)
                              }
                            }
                          },
                          [
                            _c("div", {
                              staticClass: "cx",
                              style: _vm.cor(fat.risco.grupoRisco)
                            }),
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.grupoDeRisco(fat.risco.grupoRisco)) +
                                "\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            on: {
                              click: function($event) {
                                return _vm.editar(fat)
                              }
                            }
                          },
                          [_vm._v(_vm._s(fat.risco.nomeRisco))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            on: {
                              click: function($event) {
                                return _vm.editar(fat)
                              }
                            }
                          },
                          [
                            _vm._v(_vm._s(fat.fonteGeradora.descricao) + " "),
                            fat.complemento
                              ? _c("span", [
                                  _vm._v(" - " + _vm._s(fat.complemento))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(fat.exposicao))]),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO" &&
                        fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    class: {
                                      "text-success":
                                        fat.medida.medida <
                                        fat.medida.riscoUnidadeMedida.nivelAcao,
                                      "text-warning":
                                        fat.medida.medida >=
                                          fat.medida.riscoUnidadeMedida
                                            .nivelAcao &&
                                        fat.medida.medida <
                                          fat.medida.riscoUnidadeMedida
                                            .limiteTolerancia,
                                      "text-danger":
                                        fat.medida.medida >=
                                        fat.medida.riscoUnidadeMedida
                                          .limiteTolerancia
                                    }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(fat.medida.medida) +
                                          " " +
                                          _vm._s(
                                            fat.medida.riscoUnidadeMedida
                                              .unidadeMedida.unidade
                                          )
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO"
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [_vm._v("Qualitativo")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO" &&
                        !fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [_vm._v("Quantitativo")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO" &&
                        fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    fat.medida.riscoUnidadeMedida
                                      .limiteTolerancia
                                  ) +
                                    _vm._s(
                                      fat.medida.riscoUnidadeMedida
                                        .unidadeMedida.unidade
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO" ||
                        !fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(fat.medida.riscoUnidadeMedida))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUANTITATIVO" &&
                        fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    fat.medida.riscoUnidadeMedida.nivelAcao
                                  ) +
                                    _vm._s(
                                      fat.medida.riscoUnidadeMedida
                                        .unidadeMedida.unidade
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        fat.risco.enquadramento == "QUALITATIVO" ||
                        !fat.medida.riscoUnidadeMedida
                          ? _c(
                              "td",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(fat.medida.riscoUnidadeMedida))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoX,
                                  expression: "fat.pesoX"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      fat,
                                      "pesoX",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.recalcular(fat, key)
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.pesosx, function(pesox) {
                              return pesox.matrizRisco.idMatrizRisco ==
                                _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                                ? _c("option", { domProps: { value: pesox } }, [
                                    _vm._v(
                                      "[" +
                                        _vm._s(pesox.peso) +
                                        "] " +
                                        _vm._s(pesox.descricao)
                                    )
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoY,
                                  expression: "fat.pesoY"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      fat,
                                      "pesoY",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.recalcular(fat, key)
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.pesosy, function(pesoy) {
                              return pesoy.matrizRisco.idMatrizRisco ==
                                _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                                ? _c("option", { domProps: { value: pesoy } }, [
                                    _vm._v(
                                      "[" +
                                        _vm._s(pesoy.peso) +
                                        "] " +
                                        _vm._s(pesoy.descricao)
                                    )
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        fat.nivel
                          ? _c(
                              "td",
                              {
                                style: "background-color:" + fat.nivel.cor,
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(fat.pesoX.peso * fat.pesoY.peso) +
                                    " - " +
                                    _vm._s(fat.nivel.descricao) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !fat.nivel
                          ? _c("td", {
                              on: {
                                click: function($event) {
                                  return _vm.editar(fat)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            on: {
                              click: function($event) {
                                return _vm.editar(fat)
                              }
                            }
                          },
                          [_vm._v(_vm._s(fat.medidasExistentes))]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoXAtenuado,
                                  expression: "fat.pesoXAtenuado"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      fat,
                                      "pesoXAtenuado",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.recalcularAtenuado(fat, key)
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.pesosx, function(pesox) {
                              return pesox.matrizRisco.idMatrizRisco ==
                                _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                                ? _c("option", { domProps: { value: pesox } }, [
                                    _vm._v(
                                      "[" +
                                        _vm._s(pesox.peso) +
                                        "] " +
                                        _vm._s(pesox.descricao)
                                    )
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: fat.pesoYAtenuado,
                                  expression: "fat.pesoYAtenuado"
                                }
                              ],
                              staticClass: "form-control form-sem-fundo",
                              staticStyle: { width: "120px" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      fat,
                                      "pesoYAtenuado",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.recalcularAtenuado(fat, key)
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.pesosy, function(pesoy) {
                              return pesoy.matrizRisco.idMatrizRisco ==
                                _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                                ? _c("option", { domProps: { value: pesoy } }, [
                                    _vm._v(
                                      "[" +
                                        _vm._s(pesoy.peso) +
                                        "] " +
                                        _vm._s(pesoy.descricao)
                                    )
                                  ])
                                : _vm._e()
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        fat.nivelAtenuado
                          ? _c(
                              "td",
                              {
                                style:
                                  "background-color:" + fat.nivelAtenuado.cor,
                                on: {
                                  click: function($event) {
                                    return _vm.editar(fat)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      fat.pesoXAtenuado.peso *
                                        fat.pesoYAtenuado.peso
                                    ) +
                                    " - " +
                                    _vm._s(fat.nivelAtenuado.descricao) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !fat.nivelAtenuado
                          ? _c("td", {
                              on: {
                                click: function($event) {
                                  return _vm.editar(fat)
                                }
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.editar(fat)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-pencil-alt" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.excluir(fat)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
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
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "button",
            { staticClass: "btn btn-success", on: { click: _vm.abrir } },
            [_vm._v("Adicionar")]
          )
        ])
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
            title: "Detalhes do Fator de Risco",
            "ok-title": "Salvar",
            "cancel-title": "Cancelar",
            id: "modal1"
          },
          on: {
            ok: _vm.salvar,
            cancel: function($event) {
              return _vm.fechar()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Fator de Risco")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.risco,
                        expression: "fator.risco"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.$set(
                            _vm.fator,
                            "risco",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.getUnidades
                      ]
                    }
                  },
                  _vm._l(_vm.riscos, function(risco) {
                    return !_vm.riscoEmRisco(risco) ||
                      risco.idRisco == _vm.atual
                      ? _c(
                          "option",
                          {
                            attrs: { value: "risco" },
                            domProps: { value: risco }
                          },
                          [
                            _vm._v(
                              " [" +
                                _vm._s(risco.idRisco) +
                                "] " +
                                _vm._s(risco.nomeRisco)
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
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Fonte Geradora")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.fonteGeradora,
                        expression: "fator.fonteGeradora"
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
                          _vm.fator,
                          "fonteGeradora",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.fontes, function(fonte) {
                    return _c("option", { domProps: { value: fonte } }, [
                      _vm._v(
                        "[" +
                          _vm._s(fonte.idFonteGeradora) +
                          "] " +
                          _vm._s(fonte.descricao)
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Complemento")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.complemento,
                      expression: "fator.complemento"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fator.complemento },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fator, "complemento", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Insalubridade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.insalubridade,
                      expression: "fator.risco.insalubridade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.insalubridade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fator.risco,
                        "insalubridade",
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
                _c("label", [_vm._v("Periculosidade")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.periculosidade,
                      expression: "fator.risco.periculosidade"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.periculosidade },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fator.risco,
                        "periculosidade",
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
                _c("label", [_vm._v("LINACH")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.linac,
                      expression: "fator.risco.linac"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.linac },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fator.risco, "linac", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Ap. Especial")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.aposentadoriaEspecial,
                      expression: "fator.risco.aposentadoriaEspecial"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.aposentadoriaEspecial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fator.risco,
                        "aposentadoriaEspecial",
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
                _c("label", [_vm._v("Ativ. Especial")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.atividadeEspecial,
                      expression: "fator.risco.atividadeEspecial"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.atividadeEspecial },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fator.risco,
                        "atividadeEspecial",
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
                _c("label", [_vm._v("eSocial")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.risco.tabela23,
                      expression: "fator.risco.tabela23"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.fator.risco.tabela23 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fator.risco, "tabela23", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.fator.risco.enquadramento == "QUANTITATIVO"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Dt. Medição")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.medidas.dataMedida,
                          expression: "medidas.dataMedida"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", max: _vm.ambiente.ppra.dataHora },
                      domProps: { value: _vm.medidas.dataMedida },
                      on: {
                        blur: _vm.calculaData,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.medidas,
                            "dataMedida",
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
                    _c("label", [_vm._v("Un. Medida")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.medidas.riscoUnidadeMedida,
                            expression: "medidas.riscoUnidadeMedida"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { disabled: _vm.unidades.length == 1 },
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
                              _vm.$set(
                                _vm.medidas,
                                "riscoUnidadeMedida",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.mudouUnidadeMedida
                          ]
                        }
                      },
                      _vm._l(_vm.unidades, function(unidade) {
                        return _c("option", { domProps: { value: unidade } }, [
                          _vm._v(
                            " " + _vm._s(unidade.unidadeMedida.descricao) + " "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Resultado")]),
                    _vm._v(" "),
                    _vm.medidas.riscoUnidadeMedida
                      ? _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.medidas.medida,
                                expression: "medidas.medida"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.medidas.medida },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.medidas,
                                  "medida",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "span",
                              {
                                staticClass: "input-group-text",
                                attrs: { id: "basic-addon2" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.medidas.riscoUnidadeMedida.unidadeMedida
                                      .unidade
                                  )
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Limite Tole.")]),
                    _vm._v(" "),
                    _vm.medidas.riscoUnidadeMedida
                      ? _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.medidas.riscoUnidadeMedida
                                    .limiteTolerancia,
                                expression:
                                  "medidas.riscoUnidadeMedida.limiteTolerancia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value:
                                _vm.medidas.riscoUnidadeMedida.limiteTolerancia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.medidas.riscoUnidadeMedida,
                                  "limiteTolerancia",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "span",
                              {
                                staticClass: "input-group-text",
                                attrs: { id: "basic-addon2" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.medidas.riscoUnidadeMedida.unidadeMedida
                                      .unidade
                                  )
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("N. de Ação")]),
                    _vm._v(" "),
                    _vm.medidas.riscoUnidadeMedida
                      ? _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.medidas.riscoUnidadeMedida.nivelAcao,
                                expression:
                                  "medidas.riscoUnidadeMedida.nivelAcao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: _vm.medidas.riscoUnidadeMedida.nivelAcao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.medidas.riscoUnidadeMedida,
                                  "nivelAcao",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-group-append" }, [
                            _c(
                              "span",
                              {
                                staticClass: "input-group-text",
                                attrs: { id: "basic-addon2" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.medidas.riscoUnidadeMedida.unidadeMedida
                                      .unidade
                                  )
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Téc. Utilizada")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.medidas.tecnicaUtilizada,
                          expression: "medidas.tecnicaUtilizada"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.medidas.tecnicaUtilizada },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.medidas,
                            "tecnicaUtilizada",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("h6", [_vm._v("Classificação Inicial do Fator de Risco")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Exposição")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.exposicao,
                        expression: "fator.exposicao"
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
                          _vm.fator,
                          "exposicao",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "SELECIONE" } }, [
                      _vm._v("Selecione")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "HP" } }, [_vm._v("HP")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "HI" } }, [_vm._v("HI")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "EV" } }, [_vm._v("EV")])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Peso X - Probabilidade")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.pesoX,
                        expression: "fator.pesoX"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.$set(
                            _vm.fator,
                            "pesoX",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.calculaNivel
                      ]
                    }
                  },
                  _vm._l(_vm.pesosx, function(pesox) {
                    return pesox.matrizRisco.idMatrizRisco ==
                      _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                      ? _c("option", { domProps: { value: pesox } }, [
                          _vm._v(
                            "[" +
                              _vm._s(pesox.peso) +
                              "] " +
                              _vm._s(pesox.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Peso Y - Severidade")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.pesoY,
                        expression: "fator.pesoY"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.$set(
                            _vm.fator,
                            "pesoY",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.calculaNivel
                      ]
                    }
                  },
                  _vm._l(_vm.pesosy, function(pesoy) {
                    return pesoy.matrizRisco.idMatrizRisco ==
                      _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                      ? _c("option", { domProps: { value: pesoy } }, [
                          _vm._v(
                            "[" +
                              _vm._s(pesoy.peso) +
                              "] " +
                              _vm._s(pesoy.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Nivel")]),
                _vm._v(" "),
                Object.keys(_vm.nivel).length > 0
                  ? _c(
                      "div",
                      {
                        staticClass: "div-nivel",
                        style: "background-color:" + _vm.nivel.cor
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.resultado) +
                            " - " +
                            _vm._s(_vm.nivel.descricao) +
                            "\n                    "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !Object.keys(_vm.nivel).length
                  ? _c("div", { staticClass: "div-nivel" })
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Medidas Existentes")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.medidasExistentes,
                      expression: "fator.medidasExistentes"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fator.medidasExistentes },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fator,
                        "medidasExistentes",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm.fator.risco.enquadramento == "QUANTITATIVO"
              ? _c("div", { staticClass: "col-md-4" }, [
                  _vm._v(
                    "\n                Anexar o Resultado da Medição\n                "
                  ),
                  _vm.medidas.idPpraAmbienteRiscoMedida && !_vm.fator.caminhoPdf
                    ? _c(
                        "button",
                        {
                          staticClass: "btn pull-right btn-block btn-success",
                          on: { click: _vm.abrirUpload }
                        },
                        [
                          _c("i", { staticClass: "fa fa-upload" }),
                          _vm._v(" Inserir PDF")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.medidas.idPpraAmbienteRiscoMedida && _vm.fator.caminhoPdf
                    ? _c(
                        "button",
                        {
                          staticClass: "btn  btn-success btn-50",
                          on: { click: _vm.abrirUpload }
                        },
                        [
                          _c("i", { staticClass: "fa fa-upload" }),
                          _vm._v(" Atualizar PDF")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.medidas.idPpraAmbienteRiscoMedida && _vm.fator.caminhoPdf
                    ? _c(
                        "a",
                        {
                          staticClass: "btn  btn-secondary  btn-50",
                          attrs: {
                            target: "_blank",
                            href:
                              "http://200.98.201.236:8081/" +
                              _vm.fator.caminhoPdf
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
                  })
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("EPC")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.epc,
                      expression: "fator.epc"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.fator.epc },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fator, "epc", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Eficaz")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.eficaz,
                        expression: "fator.eficaz"
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
                          _vm.fator,
                          "eficaz",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "SELECIONE" } }, [
                      _vm._v("Selecione")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "SIM" } }, [_vm._v("Sim")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "NAO" } }, [_vm._v("Não")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 text-center" }, [
              _c("h6", [_vm._v("Classificação do Fator de Risco Atenuado")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Peso X - Probabilidade")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.pesoXAtenuado,
                        expression: "fator.pesoXAtenuado"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.$set(
                            _vm.fator,
                            "pesoXAtenuado",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.calculaNivelAtenuado
                      ]
                    }
                  },
                  _vm._l(_vm.pesosx, function(pesox) {
                    return pesox.matrizRisco.idMatrizRisco ==
                      _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                      ? _c("option", { domProps: { value: pesox } }, [
                          _vm._v(
                            "[" +
                              _vm._s(pesox.peso) +
                              "] " +
                              _vm._s(pesox.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Peso Y - Severidade")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fator.pesoYAtenuado,
                        expression: "fator.pesoYAtenuado"
                      }
                    ],
                    staticClass: "form-control",
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
                          _vm.$set(
                            _vm.fator,
                            "pesoYAtenuado",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        _vm.calculaNivelAtenuado
                      ]
                    }
                  },
                  _vm._l(_vm.pesosy, function(pesoy) {
                    return pesoy.matrizRisco.idMatrizRisco ==
                      _vm.ambiente.ppra.matrizRisco.idMatrizRisco
                      ? _c("option", { domProps: { value: pesoy } }, [
                          _vm._v(
                            "[" +
                              _vm._s(pesoy.peso) +
                              "] " +
                              _vm._s(pesoy.descricao)
                          )
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Nivel")]),
                _vm._v(" "),
                Object.keys(_vm.nivelAtenuado).length > 0
                  ? _c(
                      "div",
                      {
                        staticClass: "div-nivel",
                        style: "background-color:" + _vm.nivelAtenuado.cor
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.resultadoAtenuado) +
                            " - " +
                            _vm._s(_vm.nivelAtenuado.descricao) +
                            "\n                    "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !Object.keys(_vm.nivelAtenuado).length
                  ? _c("div", { staticClass: "div-nivel" })
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Observação")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fator.observacao,
                      expression: "fator.observacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "2" },
                  domProps: { value: _vm.fator.observacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fator, "observacao", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.historicos.length > 0 &&
          _vm.fator.risco.enquadramento == "QUANTITATIVO"
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-fatores table-hover table-striped"
                    },
                    [
                      _c(
                        "tbody",
                        [
                          _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\n                                GRO\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                Dt de Medição\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                Resultado\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                Téc Utilizada\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                                PDF\n                            "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.historicos, function(historico) {
                            return _vm.ambiente.idOrigem ==
                              historico.ppraAmbienteRisco.ppraAmbienteTrabalho
                                .idOrigem
                              ? _c("tr", [
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                V " +
                                        _vm._s(
                                          historico.ppraAmbienteRisco
                                            .ppraAmbienteTrabalho.ppra.versao
                                        ) +
                                        " de " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            historico.ppraAmbienteRisco
                                              .ppraAmbienteTrabalho.ppra
                                              .dataHora,
                                            "DD/MM/YYYY"
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            historico.dataMedida,
                                            "DD/MM/YYYY"
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    historico.riscoUnidadeMedida
                                      ? _c(
                                          "span",
                                          {
                                            class: {
                                              "text-success":
                                                historico.medida <
                                                historico.riscoUnidadeMedida
                                                  .nivelAcao,
                                              "text-warning":
                                                historico.medida >=
                                                  historico.riscoUnidadeMedida
                                                    .nivelAcao &&
                                                historico.medida <
                                                  historico.riscoUnidadeMedida
                                                    .limiteTolerancia,
                                              "text-danger":
                                                historico.medida >=
                                                historico.riscoUnidadeMedida
                                                  .limiteTolerancia
                                            }
                                          },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(historico.medida) +
                                                  " " +
                                                  _vm._s(
                                                    historico.riscoUnidadeMedida
                                                      .unidadeMedida.unidade
                                                  )
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(historico.tecnicaUtilizada) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    historico.ppraAmbienteRisco.caminhoPdf
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn  btn- secondary btn-sm",
                                            attrs: {
                                              target: "_blank",
                                              href:
                                                "http://200.98.201.236:8081/" +
                                                historico.ppraAmbienteRisco
                                                  .caminhoPdf
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            }),
                                            _vm._v(" Visualizar PDF")
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              : _vm._e()
                          })
                        ],
                        2
                      )
                    ]
                  )
                ])
              ])
            : _vm._e()
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
    return _c("tr", [
      _c("td", { attrs: { colspan: "7" } }),
      _vm._v(" "),
      _c("td", { staticClass: "text-center", attrs: { colspan: "4" } }, [
        _c("strong", [_vm._v("Classificação Inicial dos Riscos")])
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "text-center", attrs: { colspan: "3" } }, [
        _c("strong", [_vm._v("Classificação dos Riscos Atenuados")])
      ]),
      _vm._v(" "),
      _c("td")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Grupo ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "170px" } }, [
      _c("strong", [_vm._v(" Risco ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "130px" } }, [
      _c("strong", [_vm._v(" Fonte Geradora ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Exp. ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v(" Valor ")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "70px" } }, [
      _c("strong", [_vm._v(" L. Tol.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "80px" } }, [
      _c("strong", [_vm._v(" N. Ação ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "150px" } }, [
      _c("strong", [_vm._v("Nivel")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Medidas Existentes")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticStyle: { width: "150px" } }, [
      _c("strong", [_vm._v("Nivel")])
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

/***/ "./resources/js/components/ppra/ambiente/PpraFatores.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFatores.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PpraFatores.vue?vue&type=template&id=37698c7e& */ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e&");
/* harmony import */ var _PpraFatores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PpraFatores.vue?vue&type=script&lang=js& */ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PpraFatores.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PpraFatores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ppra/ambiente/PpraFatores.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFatores.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFatores.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PpraFatores.vue?vue&type=template&id=37698c7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ppra/ambiente/PpraFatores.vue?vue&type=template&id=37698c7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PpraFatores_vue_vue_type_template_id_37698c7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);