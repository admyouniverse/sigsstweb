(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{0:function(e,a,t){"use strict";function o(e,a,t,o,s,i,r,n){var l,d="function"==typeof e?e.options:e;if(a&&(d.render=a,d.staticRenderFns=t,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=l):s&&(l=n?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,a){return l.call(a),c(e,a)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:d}}t.d(a,"a",(function(){return o}))},97:function(e,a,t){"use strict";t.r(a);var o={props:["ppra"],data:function(){return{exameSelecionado:{},exames:[],exame:{},historicos:[]}},methods:{atualizar:function(){var e=this;console.log(this.exameSelecionado),axios.post("/gro/"+this.ppra.idPpra+"/exames",{exame:e.exameSelecionado.idExame,dados:e.exame}).then((function(a){e.historicos=a.data,e.exameSelecionado={},e.exame={}}))}},mounted:function(){var e=this;axios.get("/gro/"+this.ppra.idPpra+"/exames/").then((function(a){e.exames=a.data})),axios.get("/gro/"+this.ppra.idPpra+"/exames/list").then((function(a){e.historicos=a.data,console.log(a.data)}))}},s=t(0),i=Object(s.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Exame")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exameSelecionado,expression:"exameSelecionado"}],staticClass:"form-control",attrs:{name:"exameSelecionado",id:""},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.exameSelecionado=a.target.multiple?t:t[0]}}},e._l(e.exames,(function(a){return t("option",{domProps:{value:a}},[e._v(e._s(a.nomeExame)+" - "+e._s(a.descricao))])})),0)])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Idade Minima")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.idadeMinima,expression:"exame.idadeMinima"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.exame.idadeMinima},on:{input:function(a){a.target.composing||e.$set(e.exame,"idadeMinima",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Idade Máxima")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.idadeMaxima,expression:"exame.idadeMaxima"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.exame.idadeMaxima},on:{input:function(a){a.target.composing||e.$set(e.exame,"idadeMaxima",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Periodo")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.periodo,expression:"exame.periodo"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"periodo",a.target.multiple?t:t[0])}}},["S"!=e.exame.periodico?t("option",{attrs:{value:"0"}},[e._v("0 meses")]):e._e(),e._v(" "),t("option",{attrs:{value:"6"}},[e._v("6 meses")]),e._v(" "),t("option",{attrs:{value:"12"}},[e._v("12 meses")]),e._v(" "),t("option",{attrs:{value:"18"}},[e._v("18 meses")]),e._v(" "),t("option",{attrs:{value:"24"}},[e._v("24 meses")])])])]),e._v(" "),t("div",{staticClass:"col-md-10"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Observação")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.observacao,expression:"exame.observacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.exame.observacao},on:{input:function(a){a.target.composing||e.$set(e.exame,"observacao",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2 mt-4"},[t("button",{staticClass:"btn btn-success btn-block",on:{click:e.atualizar}},[e._v("Atualizar")])]),e._v(" "),t("div",{staticClass:"col-md-12"},[t("table",{staticClass:"table"},[t("tbody",[e._m(0),e._v(" "),e._l(e.historicos,(function(a){return t("tr",[t("td",[e._v(" "+e._s(a.exame.nomeExame)+" - "+e._s(a.exame.descricao)+" ")]),e._v(" "),t("td",[e._v(" "+e._s(a.idadeMinima)+" ")]),e._v(" "),t("td",[e._v(" "+e._s(a.idadeMaxima)+" ")]),e._v(" "),t("td",[e._v(" "+e._s(a.periodo)+" ")]),e._v(" "),t("td",[e._v(" "+e._s(a.observacao)+" ")])])}))],2)])])])}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("tr",[t("th",[e._v("Exame")]),e._v(" "),t("th",[e._v("Idade Minima")]),e._v(" "),t("th",[e._v("Idade Máxima")]),e._v(" "),t("th",[e._v("Periodo")]),e._v(" "),t("th",[e._v("Observação")])])}],!1,null,"4343753b",null);a.default=i.exports}}]);