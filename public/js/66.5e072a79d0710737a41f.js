(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{0:function(e,t,a){"use strict";function o(e,t,a,o,s,i,r,n){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=n?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return o}))},101:function(e,t,a){"use strict";a.r(t);var o={props:["ppra","ambiente","empresa"],data:function(){return{exames:[],selecionados:[],examesPpra:[],exame:{exame:{}},aso:{}}},methods:{},mounted:function(){if(this.ppra.pcmsos.length>0){var e=this;axios.post("/gro/ambiente/"+this.ambiente.idOrigem+"/exames/list",{pcmso:this.ppra.pcmsos[this.ppra.pcmsos.length-1].idPcmso,ambiente:this.ambiente.idOrigem}).then((function(t){e.examesPpra=t.data}))}}},s=(a(325),a(0)),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mb-2 text-center"},[a("h5",{staticClass:"bg-success p-3"},[e._v("Exames do PCMSO V "+e._s(e.ppra.pcmsos[e.ppra.pcmsos.length-1].versao)+" de "+e._s(e._f("moment")(e.ppra.pcmsos[e.ppra.pcmsos.length-1].dataHora,"DD/MM/YYYY"))+" ")])]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover table-striped"},[e._m(0),e._v(" "),a("tbody",e._l(e.examesPpra,(function(t,o){return e.examesPpra.length>0?a("tr",[a("td",[e._v(e._s(t.exame.idExame))]),e._v(" "),a("td",[e._v(e._s(t.exame.nomeExame))]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.ocupacional,expression:"exame.ocupacional"}],staticClass:"form-control",class:{"bg-danger":"A"==t.ocupacional},attrs:{disabled:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"ocupacional",a.target.multiple?o:o[0])}}},[a("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),a("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),a("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.admissional,expression:"exame.admissional"}],staticClass:"form-control",class:{"bg-danger":"A"==t.admissional},attrs:{disabled:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"admissional",a.target.multiple?o:o[0])}}},[a("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),a("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),a("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.demissional,expression:"exame.demissional"}],staticClass:"form-control",class:{"bg-danger":"A"==t.demissional},attrs:{disabled:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"demissional",a.target.multiple?o:o[0])}}},[a("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),a("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),a("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),a("td",{attrs:{width:"100px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.periodico,expression:"exame.periodico"}],staticClass:"form-control",class:{"bg-danger":"A"==t.periodico},attrs:{disabled:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"periodico",a.target.multiple?o:o[0])}}},[a("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),a("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),a("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),a("td",{attrs:{width:"110px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.periodo,expression:"exame.periodo"}],staticClass:"form-control",attrs:{disabled:""},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"periodo",a.target.multiple?o:o[0])}}},["S"!=t.periodico?a("option",{attrs:{value:"0"}},[e._v("0 meses")]):e._e(),e._v(" "),"S"==t.periodico?a("option",{attrs:{value:"6"}},[e._v("6 meses")]):e._e(),e._v(" "),"S"==t.periodico?a("option",{attrs:{value:"12"}},[e._v("12 meses")]):e._e(),e._v(" "),"S"==t.periodico?a("option",{attrs:{value:"18"}},[e._v("18 meses")]):e._e(),e._v(" "),"S"==t.periodico?a("option",{attrs:{value:"24"}},[e._v("24 meses")]):e._e()])]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idadeMinima,expression:"exame.idadeMinima"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.idadeMinima},on:{input:function(a){a.target.composing||e.$set(t,"idadeMinima",a.target.value)}}})]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idadeMaxima,expression:"exame.idadeMaxima"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.idadeMaxima},on:{input:function(a){a.target.composing||e.$set(t,"idadeMaxima",a.target.value)}}})]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.observacao,expression:"exame.observacao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.observacao},on:{input:function(a){a.target.composing||e.$set(t,"observacao",a.target.value)}}})])]):e._e()})),0)])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Nome")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Ocupacional")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Adm")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Dem")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Per")]),e._v(" "),a("th",[e._v("Periodicidade")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Idade Min.")]),e._v(" "),a("th",{attrs:{width:"100px"}},[e._v("Idade Max.")]),e._v(" "),a("th",[e._v("Observação")])])}],!1,null,null,null);t.default=i.exports},178:function(e,t,a){var o=a(326);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(2)(o,s);o.locals&&(e.exports=o.locals)},325:function(e,t,a){"use strict";a(178)},326:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,".selecionar{cursor:pointer}.selecionado{background-color:#71bb66}.form-control.bg-danger{background-color:#cc5445!important;color:#fff}",""])}}]);