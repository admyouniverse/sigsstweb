(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{0:function(e,a,t){"use strict";function o(e,a,t,o,s,i,n,r){var l,c="function"==typeof e?e.options:e;if(a&&(c.render=a,c.staticRenderFns=t,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(e,a){return l.call(a),m(e,a)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}t.d(a,"a",(function(){return o}))},171:function(e,a,t){var o=t(312);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,s);o.locals&&(e.exports=o.locals)},311:function(e,a,t){"use strict";t(171)},312:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,".selecionar{cursor:pointer}.selecionado{background-color:#71bb66}.form-control.bg-danger{background-color:#cc5445!important;color:#fff}",""])},86:function(e,a,t){"use strict";t.r(a);var o={props:["pcmso","ambiente","empresa"],data:function(){return{exames:[],selecionados:[],examesPcmso:[],exame:{exame:{}},aso:{}}},methods:{adicionar:function(){var e=this;axios.get("/tabelas/exames/list/").then((function(a){e.exames=a.data,e.$refs.modalExames.show()}))},selecionar:function(e){if(this.estaSelecionado(e)){var a=this.selecionados.findIndex((function(a){return a.idExame==e.idExame}));this.selecionados.splice(a,1)}else this.selecionados.push(e)},estaSelecionado:function(e){return this.selecionados.includes(e)},estaAdicionado:function(e){return!(this.examesPcmso.findIndex((function(a){return a.exame.idExame==e.idExame}))<0)},salvarAso:function(){var e=this;axios.post("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/aso",{aso:e.aso}).then((function(a){e.aso=a.data[0]}))},salvar:function(){var e=this;axios.post("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/exames",{exames:this.selecionados,pcmso:this.pcmso.idPcmso}).then((function(a){console.log(a.data),e.examesPcmso=a.data})),this.selecionados=[]},mudouExame:function(e){"S"==this.examesPcmso[e].ocupacional&&(this.examesPcmso[e].admissional="S",this.examesPcmso[e].demissional="S",this.examesPcmso[e].periodico="S"),"N"==this.examesPcmso[e].periodico||"A"==this.examesPcmso[e].periodico?this.examesPcmso[e].periodo="0":0!=this.examesPcmso[e].periodo&&"0"!=this.examesPcmso[e].periodo||(this.examesPcmso[e].periodo="12"),this.salvarExame(this.examesPcmso[e])},salvarExame:function(e){axios.post("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/exames/atualizar",{pcmso:this.pcmso.idPcmso,exame:e,ambiente:this.ambiente.idPcmsoAmbienteTrabalho}).then((function(e){}))},fechar:function(){this.selecionados=[]},remover:function(e){var a=this;axios.get("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/exames/"+this.examesPcmso[e].idPcmsoExameAmbienteFuncao+"/remover/").then((function(t){a.examesPcmso.splice(e,1)}))},editar:function(e){this.exame=e,this.$refs.modalAtualizar.show()},atualizar:function(){this.salvarExame(this.exame)},fecharAtualizar:function(){}},mounted:function(){var e=this;axios.post("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/exames/list",{pcmso:this.pcmso.idPcmso,ambiente:this.ambiente.idPcmsoAmbienteTrabalho}).then((function(a){e.examesPcmso=a.data,console.log(e.examesPcmso)})),axios.get("/pcmso/ambiente/"+this.ambiente.idPcmsoAmbienteTrabalho+"/aso").then((function(a){console.log(a.data),a.data.length>0?e.aso=a.data[0]:e.aso={idPcmsoAso:0}}))}},s=(t(311),t(0)),i=Object(s.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"row"},[e._m(0),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Demissional")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.aso.demissional,expression:"aso.demissional"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.aso.demissional},on:{input:function(a){a.target.composing||e.$set(e.aso,"demissional",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Período")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.aso.periodo,expression:"aso.periodo"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.aso.periodo},on:{input:function(a){a.target.composing||e.$set(e.aso,"periodo",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Recomendação")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.aso.recomendacao,expression:"aso.recomendacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.aso.recomendacao},on:{input:function(a){a.target.composing||e.$set(e.aso,"recomendacao",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("button",{staticClass:"btn btn-block mt-4 btn-success",on:{click:e.salvarAso}},[t("i",{staticClass:"fa fa-check"}),e._v(" Salvar")])])]),e._v(" "),t("div",{staticClass:"row"},[e._m(1),e._v(" "),t("div",{staticClass:"col-md-12"},[t("table",{staticClass:"table table-hover table-striped"},[e._m(2),e._v(" "),t("tbody",e._l(e.examesPcmso,(function(a,o){return e.examesPcmso.length>0?t("tr",[t("td",[e._v(e._s(a.exame.idExame))]),e._v(" "),t("td",[e._v(e._s(a.exame.nomeExame))]),e._v(" "),t("td",[t("select",{directives:[{name:"model",rawName:"v-model",value:a.ocupacional,expression:"exame.ocupacional"}],staticClass:"form-control",class:{"bg-danger":"A"==a.ocupacional},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"ocupacional",t.target.multiple?o:o[0])},function(a){return e.mudouExame(o)}]}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),t("td",[t("select",{directives:[{name:"model",rawName:"v-model",value:a.admissional,expression:"exame.admissional"}],staticClass:"form-control",class:{"bg-danger":"A"==a.admissional},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"admissional",t.target.multiple?o:o[0])},function(a){return e.mudouExame(o)}]}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),t("td",[t("select",{directives:[{name:"model",rawName:"v-model",value:a.demissional,expression:"exame.demissional"}],staticClass:"form-control",class:{"bg-danger":"A"==a.demissional},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"demissional",t.target.multiple?o:o[0])},function(a){return e.mudouExame(o)}]}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),t("td",{attrs:{width:"100px"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.periodico,expression:"exame.periodico"}],staticClass:"form-control",class:{"bg-danger":"A"==a.periodico},on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"periodico",t.target.multiple?o:o[0])},function(a){return e.mudouExame(o)}]}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])]),e._v(" "),t("td",{attrs:{width:"110px"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.periodo,expression:"exame.periodo"}],staticClass:"form-control",on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(a,"periodo",t.target.multiple?o:o[0])},function(a){return e.mudouExame(o)}]}},["S"!=a.periodico?t("option",{attrs:{value:"0"}},[e._v("0 meses")]):e._e(),e._v(" "),"S"==a.periodico?t("option",{attrs:{value:"6"}},[e._v("6 meses")]):e._e(),e._v(" "),"S"==a.periodico?t("option",{attrs:{value:"12"}},[e._v("12 meses")]):e._e(),e._v(" "),"S"==a.periodico?t("option",{attrs:{value:"18"}},[e._v("18 meses")]):e._e(),e._v(" "),"S"==a.periodico?t("option",{attrs:{value:"24"}},[e._v("24 meses")]):e._e()])]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.idadeMinima,expression:"exame.idadeMinima"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idadeMinima},on:{input:function(t){t.target.composing||e.$set(a,"idadeMinima",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.idadeMaxima,expression:"exame.idadeMaxima"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idadeMaxima},on:{input:function(t){t.target.composing||e.$set(a,"idadeMaxima",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.observacao,expression:"exame.observacao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.observacao},on:{input:function(t){t.target.composing||e.$set(a,"observacao",t.target.value)}}})]),e._v(" "),t("td",[t("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return e.remover(o)}}},[t("i",{staticClass:"fa fa-trash"})]),e._v(" "),t("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(t){return e.editar(a)}}},[t("i",{staticClass:"fas fa-pencil-alt"})])])]):e._e()})),0)])]),e._v(" "),t("div",{staticClass:"col-md-12 text-left"},[e._v("\n            Total de Itens: "+e._s(e.examesPcmso.length)+"\n        ")]),e._v(" "),t("div",{staticClass:"col-md-12 text-right"},[t("button",{staticClass:"btn btn-success",on:{click:function(a){return e.adicionar()}}},[t("i",{staticClass:"fa fa-plus"}),e._v(" Adicionar")])])]),e._v(" "),t("b-modal",{ref:"modalExames",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Selecione os exames","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:e.salvar,cancel:function(a){return e.fechar()}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 mb-3 text-left"},[e._v("\n                Total de exames selecionados: "+e._s(e.selecionados.length)+"\n            ")]),e._v(" "),t("div",{staticClass:"col-md-12"},[t("table",{staticClass:"table table-hover"},[t("thead",[t("th",[e._v("ID")]),e._v(" "),t("th",[e._v("Nome")]),e._v(" "),t("th",[e._v("Descrição")]),e._v(" "),t("th",[e._v("Unidade")]),e._v(" "),t("th",[e._v("Sexo")]),e._v(" "),t("th",[e._v("Grupo")]),e._v(" "),t("th",{staticStyle:{width:"90px"}},[e._v("Tabela 27")])]),e._v(" "),t("tbody",e._l(e.exames,(function(a,o){return e.estaAdicionado(a)?e._e():t("tr",{staticClass:"selecionar",class:{selecionado:e.estaSelecionado(a)},on:{click:function(t){return e.selecionar(a)}}},[t("td",[e._v(e._s(a.idExame))]),e._v(" "),t("td",[e._v(e._s(a.nomeExame))]),e._v(" "),t("td",[e._v(e._s(a.descricao))]),e._v(" "),t("td",[e._v(e._s(a.unidadeMedida))]),e._v(" "),t("td",[e._v(e._s(a.sexo))]),e._v(" "),t("td",[e._v(e._s(a.grupoExame))]),e._v(" "),t("td",[e._v(e._s(a.tabela27))])])})),0)])])])]),e._v(" "),t("b-modal",{ref:"modalAtualizar",attrs:{size:"md",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Editar exame","ok-title":"Atualizar","cancel-title":"Cancelar",id:"modal2"},on:{ok:e.atualizar,cancel:function(a){return e.fecharAtualizar()}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Nome")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.exame.nomeExame,expression:"exame.exame.nomeExame"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.exame.exame.nomeExame},on:{input:function(a){a.target.composing||e.$set(e.exame.exame,"nomeExame",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Idade Minima")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.idadeMinima,expression:"exame.idadeMinima"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.exame.idadeMinima},on:{input:function(a){a.target.composing||e.$set(e.exame,"idadeMinima",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Idade Máxima")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.exame.idadeMaxima,expression:"exame.idadeMaxima"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.exame.idadeMaxima},on:{input:function(a){a.target.composing||e.$set(e.exame,"idadeMaxima",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-3",class:{"col-md-4":"S"==e.exame.periodico}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Ocupacional")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.ocupacional,expression:"exame.ocupacional"}],staticClass:"form-control",class:{"bg-danger":"A"==e.exame.ocupacional},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"ocupacional",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])])]),e._v(" "),t("div",{staticClass:"col-md-3",class:{"col-md-4":"S"==e.exame.periodico}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Admissional")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.admissional,expression:"exame.admissional"}],staticClass:"form-control",class:{"bg-danger":"A"==e.exame.admissional},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"admissional",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])])]),e._v(" "),t("div",{staticClass:"col-md-3",class:{"col-md-4":"S"==e.exame.periodico}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Demissional")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.demissional,expression:"exame.demissional"}],staticClass:"form-control",class:{"bg-danger":"A"==e.exame.demissional},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"demissional",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])])]),e._v(" "),t("div",{staticClass:"col-md-3",class:{"col-md-6":"S"==e.exame.periodico}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Periodico")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.periodico,expression:"exame.periodico"}],staticClass:"form-control",class:{"bg-danger":"A"==e.exame.periodico},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"periodico",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"A"}},[e._v("Ajustar")]),e._v(" "),t("option",{attrs:{value:"N"}},[e._v("Não")]),e._v(" "),t("option",{attrs:{value:"S"}},[e._v("Sim")])])])]),e._v(" "),"S"==e.exame.periodico?t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Periodo")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.exame.periodo,expression:"exame.periodo"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.exame,"periodo",a.target.multiple?t:t[0])}}},["S"!=e.exame.periodico?t("option",{attrs:{value:"0"}},[e._v("0 meses")]):e._e(),e._v(" "),"S"==e.exame.periodico?t("option",{attrs:{value:"6"}},[e._v("6 meses")]):e._e(),e._v(" "),"S"==e.exame.periodico?t("option",{attrs:{value:"12"}},[e._v("12 meses")]):e._e(),e._v(" "),"S"==e.exame.periodico?t("option",{attrs:{value:"18"}},[e._v("18 meses")]):e._e(),e._v(" "),"S"==e.exame.periodico?t("option",{attrs:{value:"24"}},[e._v("24 meses")]):e._e()])])]):e._e(),e._v(" "),t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Observações")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.exame.observacao,expression:"exame.observacao"}],staticClass:"form-control",domProps:{value:e.exame.observacao},on:{input:function(a){a.target.composing||e.$set(e.exame,"observacao",a.target.value)}}})])])])])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12 mb-3 text-center"},[a("strong",[this._v("Aso - Atestado de Saúde Ocupacional")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12 mb-3 text-center"},[a("strong",[this._v("Exames Complementares")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("th",[e._v("ID")]),e._v(" "),t("th",[e._v("Nome")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Ocupacional")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Adm")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Dem")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Per")]),e._v(" "),t("th",[e._v("Periodicidade")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Idade Min.")]),e._v(" "),t("th",{attrs:{width:"100px"}},[e._v("Idade Max.")]),e._v(" "),t("th",[e._v("Observação")]),e._v(" "),t("th",{attrs:{width:"85px"}})])}],!1,null,null,null);a.default=i.exports}}]);