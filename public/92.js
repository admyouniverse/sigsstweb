(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{0:function(t,e,s){"use strict";function o(t,e,s,o,i,a,n,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=s,d._compiled=!0),o&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:d}}s.d(e,"a",(function(){return o}))},87:function(t,e,s){"use strict";s.r(e);var o={props:["pcmso","ambiente"],data:function(){return{riscos:[],fontes:[],pesosx:[],pesosy:[],eixoy:[],eixox:[],fatores:[],carregando:!0,mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'}},methods:{calculaNivel:function(){if(this.fator.pesoX&&this.fator.pesoY){"MULTIPLICACAO"==this.ambiente.ppra.matrizRisco.criterio?this.resultado=parseInt(this.fator.pesoX.peso)*parseInt(this.fator.pesoY.peso):this.resultado=parseInt(this.fator.pesoX.peso)+parseInt(this.fator.pesoY.peso);var t=this;axios.get("/nivel-matriz/peso/"+this.resultado+"/matriz/"+this.ambiente.ppra.matrizRisco.idMatrizRisco).then((function(e){t.nivel=e.data}))}},cor:function(t){return"BIOLÓGICO"==t?"background-color:rgb(148, 90, 30)":"ERGONÔMICO"==t?"background-color:rgb(255, 255, 0)":"ACIDENTE"==t?"background-color:rgb(0, 0, 255)":"FÍSICO"==t?"background-color:rgb(0, 128, 0)":"QUÍMICO"==t?"background-color:rgb(255, 0, 0)":"PERICULOSOS"==t?"background-color:rgb(255, 255, 0)":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==t?"background-color:rgb(0, 0, 0)":"PENOSOS"==t?"background-color:rgb(254, 218, 71)":"AUSÊNCIA_DE_FATORES_DE_RISCO"==t?"background-color:rgb(128, 128, 128)":void 0},grupoDeRisco:function(t){return"BIOLÓGICO"==t?"B":"ERGONÔMICO"==t?"E":"ACIDENTE"==t?"A":"FÍSICO"==t?"F":"QUÍMICO"==t?"Q":"PERICULOSOS"==t?"P":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==t?"AFR":"PENOSOS"==t?"Pen":"AUSÊNCIA_DE_FATORES_DE_RISCO"==t?"Aus FR":void 0}},mounted:function(){var t=this;axios.get("/tabelas/riscos/list").then((function(e){t.riscos=e.data})),axios.get("/tabelas/riscos/fontes-geradoras/list").then((function(e){t.fontes=e.data})),axios.get("/peso-x/list").then((function(e){t.pesosx=e.data})),axios.get("/peso-y/list").then((function(e){t.pesosy=e.data})),axios.get("/eixo-y/list").then((function(e){t.eixoy=e.data})),axios.get("/eixo-x/list").then((function(e){t.eixox=e.data})),axios.get("/pcmso/ambiente-risco/"+this.ambiente.idOrigem+"/"+this.pcmso.ppra.idPpra+"/list").then((function(e){t.fatores=e.data,t.carregando=!1,t.$alert("Todos os dados foram carregados.","Sucesso!","success")}))}},i=s(0),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.carregando?s("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 mb-2 text-center"},[s("h5",{staticClass:"bg-success p-3 text-light"},[t._v("Fatores de Risco do GR0 V "+t._s(t.pcmso.ppra.versao)+" de "+t._s(t._f("moment")(t.pcmso.ppra.dataHora,"DD/MM/YYYY"))+" ")])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-fatores table-hover table-striped"},[s("tbody",[s("tr",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t.eixox[0]?s("td",{staticStyle:{width:"120px","text-align":"center"}},[s("strong",[t._v(" "+t._s(t.eixox[0].descricao)+" ")])]):t._e(),t._v(" "),t.eixoy[0]?s("td",{staticStyle:{width:"120px","text-align":"center"}},[s("strong",[t._v(" "+t._s(t.eixoy[0].descricao)+" ")])]):t._e(),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),t._l(t.fatores,(function(e,o){return s("tr",[s("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[s("div",{staticClass:"cx",style:t.cor(e.risco.grupoRisco)}),t._v("\n                                "+t._s(t.grupoDeRisco(e.risco.grupoRisco))+"\n                            ")]),t._v(" "),s("td",[t._v(t._s(e.risco.nomeRisco))]),t._v(" "),s("td",[t._v(t._s(e.fonteGeradora.descricao))]),t._v(" "),s("td",[t._v(t._s(e.exposicao))]),t._v(" "),"QUANTITATIVO"==e.risco.enquadramento?s("td",[s("span",{class:{"text-success":e.medida.medida<e.unidade.nivelAcao,"text-warning":e.medida.medida>=e.unidade.nivelAcao&&e.medida.medida<e.unidade.limiteTolerancia,"text-danger":e.medida.medida>=e.unidade.limiteTolerancia}},[s("strong",[t._v(t._s(e.medida.medida)+" "+t._s(e.unidade.unidadeMedida.unidade))])])]):t._e(),t._v(" "),"QUALITATIVO"==e.risco.enquadramento?s("td",[t._v("Qualitativo")]):t._e(),t._v(" "),"QUANTITATIVO"==e.risco.enquadramento?s("td",[t._v(t._s(e.unidade.limiteTolerancia)+t._s(e.unidade.unidadeMedida.unidade))]):t._e(),t._v(" "),"QUALITATIVO"==e.risco.enquadramento?s("td",[t._v("-")]):t._e(),t._v(" "),"QUANTITATIVO"==e.risco.enquadramento?s("td",[t._v(t._s(e.unidade.nivelAcao)+t._s(e.unidade.unidadeMedida.unidade))]):t._e(),t._v(" "),"QUALITATIVO"==e.risco.enquadramento?s("td",[t._v("-")]):t._e(),t._v(" "),s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.pesoX,expression:"fat.pesoX"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},attrs:{disabled:""},on:{change:function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"pesoX",s.target.multiple?o:o[0])}}},t._l(t.pesosx,(function(e){return s("option",{domProps:{value:e}},[t._v("["+t._s(e.peso)+"] "+t._s(e.descricao))])})),0)]),t._v(" "),s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.pesoY,expression:"fat.pesoY"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},attrs:{disabled:""},on:{change:function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"pesoY",s.target.multiple?o:o[0])}}},t._l(t.pesosy,(function(e){return s("option",{domProps:{value:e}},[t._v("["+t._s(e.peso)+"] "+t._s(e.descricao))])})),0)]),t._v(" "),s("td",{style:"background-color:"+e.nivel.cor},[t._v("\n                                "+t._s(e.pesoX.peso*e.pesoY.peso)+" - "+t._s(e.nivel.descricao)+"\n                            ")]),t._v(" "),s("td",[t._v(t._s(e.medidasExistentes))])])}))],2)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v(" Grupo ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"170px"}},[e("strong",[this._v(" Risco ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"130px"}},[e("strong",[this._v(" Fonte Geradora ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v(" Exp. ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v(" Valor ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"70px"}},[e("strong",[this._v(" L. Tol.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"80px"}},[e("strong",[this._v(" N. Ação ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"150px"}},[e("strong",[this._v("Nivel")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v("Medidas Existentes")])])}],!1,null,null,null);e.default=a.exports}}]);