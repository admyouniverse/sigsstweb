(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{164:function(t,e,a){"use strict";function i(t,e,a,i,o,r,s,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=n?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}a.d(e,"a",(function(){return i}))},68:function(t,e,a){"use strict";a.r(e);var i={props:["matriz"],data:function(){return{carregando:!1,eixosX:[],eixosY:[]}},methods:{abrirPesoX:function(){this.$refs.modalPesoX.show()},fechar:function(){},salvarPesoX:function(){}},mounted:function(){var t=this;axios.get("/peso-x/list").then((function(e){t.pesosY=e.data})),axios.get("/eixo-y/list").then((function(e){t.eixosY=e.data})),axios.get("/eixo-x/list").then((function(e){t.eixosX=e.data}))}},o=a(164),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.carregando?a("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),a("section",{staticClass:"content-header"},[a("h1",[t._v("\n            Matrizes de Risco - "+t._s(this.matriz.descricao)+"\n        ")])]),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-12"},[a("div",[a("b-card",{staticClass:"sig",attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Detalhes",active:""}},[a("b-card-text",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.matriz.idMatrizRisco,expression:"matriz.idMatrizRisco"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.matriz.idMatrizRisco},on:{input:function(e){e.target.composing||t.$set(t.matriz,"idMatrizRisco",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Descrição")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.matriz.descricao,expression:"matriz.descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.matriz.descricao},on:{input:function(e){e.target.composing||t.$set(t.matriz,"descricao",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Eixo")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.matriz.eixoX,expression:"matriz.eixoX"}],staticClass:"form-control",attrs:{id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.matriz,"eixoX",e.target.multiple?a:a[0])}}},t._l(t.eixosX,(function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e.descricao))])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Eixo")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.matriz.eixoY,expression:"matriz.eixoY"}],staticClass:"form-control",attrs:{id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.matriz,"eixoY",e.target.multiple?a:a[0])}}},t._l(t.eixosY,(function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e.descricao))])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Criterio")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.matriz.criterio,expression:"matriz.criterio"}],staticClass:"form-control",attrs:{id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.matriz,"criterio",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"SOMA"}},[t._v("SOMA")]),t._v(" "),a("option",{attrs:{value:"MULTIPLICACAO"}},[t._v("MULTIPLICAÇÃO")])])])])])])],1),t._v(" "),a("b-tab",{attrs:{title:"Peso X"}},[a("b-card-text",[a("div",{staticClass:"row"},[a("peso-x-componente",{attrs:{matriz:t.matriz}})],1)])],1),t._v(" "),a("b-tab",{attrs:{title:"Peso Y"}},[a("b-card-text",[a("peso-y-componente",{attrs:{matriz:t.matriz}})],1)],1),t._v(" "),a("b-tab",{attrs:{title:"Nivel"}},[a("b-card-text",[a("nivel-componente",{attrs:{matriz:t.matriz}})],1)],1)],1)],1)],1)])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);