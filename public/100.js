(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{0:function(t,o,e){"use strict";function s(t,o,e,s,a,n,r,i){var l,c="function"==typeof t?t.options:t;if(o&&(c.render=o,c.staticRenderFns=e,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):a&&(l=i?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,o){return l.call(o),d(t,o)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}e.d(o,"a",(function(){return s}))},102:function(t,o,e){"use strict";e.r(o);var s={props:["ppra","empresa","ambiente"],data:function(){return{aso:{}}},methods:{},mounted:function(){}},a=e(0),n=Object(a.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.aso.idPpraAso,expression:"aso.idPpraAso"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.aso.idPpraAso},on:{input:function(o){o.target.composing||t.$set(t.aso,"idPpraAso",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-11"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Recomendação")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.aso.recomendacao,expression:"aso.recomendacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.aso.recomendacao},on:{input:function(o){o.target.composing||t.$set(t.aso,"recomendacao",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Demissional")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.aso.demissional,expression:"aso.demissional"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.aso.demissional},on:{input:function(o){o.target.composing||t.$set(t.aso,"demissional",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Período")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.aso.periodo,expression:"aso.periodo"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.aso.periodo},on:{input:function(o){o.target.composing||t.$set(t.aso,"periodo",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-success",on:{click:t.salvar}},[e("i",{staticClass:"fa fa-check"}),t._v(" Salvar")])])])])}),[],!1,null,null,null);o.default=n.exports}}]);