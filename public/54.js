(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{164:function(e,t,a){"use strict";function i(e,t,a,i,s,n,o,r){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var m=l.render;l.render=function(e,t){return c.call(t),m(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}a.d(t,"a",(function(){return i}))},223:function(e,t,a){var i=a(351);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(133)(i,s);i.locals&&(e.exports=i.locals)},350:function(e,t,a){"use strict";a(223)},351:function(e,t,a){(e.exports=a(132)(!1)).push([e.i,".slide-fade-enter-active[data-v-754e510f] {\n  transition: all 0.3s ease;\n}\n.slide-fade-leave-active[data-v-754e510f] {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-754e510f], .slide-fade-leave-to[data-v-754e510f] {\n  transform: translateY(-10px);\n  opacity: 0;\n}",""])},95:function(e,t,a){"use strict";a.r(t);var i={props:["ppra","empresa"],data:function(){return{selecionado:null,ambientes:[],ambiente:{idPpraAmbienteTrabalho:0},listAmbientes:[],carregando:!0,mensagem:"Carregando...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',editar:!1,listarFuncoes:!1,funcoes:[]}},methods:{preencheAmbiente:function(){this.selecionado?(this.ambiente=this.selecionado,console.log(this.ambiente)):this.ambiente={},this.ambiente.idPpraAmbienteTrabalho=0},carregar:function(e){this.mensagem=e,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(e){this.mensagem=e,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),800)},alerta:function(e){this.mensagem=e,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),5e3)},abrir:function(){this.$refs.myModal.show()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.ambiente={idPpraAmbienteTrabalho:0},this.$refs.myModal.hide()},preencher:function(e){this.ambiente=Object.assign({},e),this.editar=!0,this.$refs.myModal.show()},salvar:function(e){var t=this;e.preventDefault(),t.mensagem="Salvando ambiente...",t.carregando=!0,axios.post("/gro/ambiente",{ppra:t.ppra,editar:t.editar,ambiente:t.ambiente}).then((function(e){"erro"!=e.data?(t.ambientes=e.data,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")}))):(t.mensagem="Erro!",t.carregando=!1)}))},remover:function(e){this.carregar("Removendo ambiente...");var t=this;axios.get("/gro/ambiente/"+this.ppra.idPpra+"/remover/"+e.idPpraAmbienteTrabalho).then((function(e){t.ambientes=e.data,t.sucesso("Ambiente excluído")}))},getFuncoes:function(e){this.carregar("Redirecionando...");window.location.href="/gro/"+this.ppra.idPpra+"/ambiente/"+e.idPpraAmbienteTrabalho}},mounted:function(){var e=this;axios.get("/empresas/ambientes-de-trabalho/list/"+this.empresa.inscricao).then((function(t){e.listAmbientes=t.data,console.log(e.listAmbientes)})),axios.get("/gro/ambientes/"+this.ppra.idPpra).then((function(t){e.ambientes=t.data,e.sucesso("Ambientes carregados!")}))}},s=(a(350),a(164)),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.carregando?a("BlockUI",{attrs:{message:e.mensagem,html:e.html}}):e._e(),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover"},[a("tbody",[e._m(0),e._v(" "),e._l(e.ambientes,(function(t){return a("tr",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.getFuncoes(t)}}},[a("td",[e._v(e._s(t.idPpraAmbienteTrabalho))]),e._v(" "),a("td",[e._v(e._s(t.nomeAmbienteTrabalho))]),e._v(" "),a("td",[e._v(e._s(t.estabelecimento))]),e._v(" "),a("td",[e._v(e._s(t.inscricaoTerceiro))]),e._v(" "),a("td",[e._v(e._s(t.observacao))]),e._v(" "),a("td",[e._v(e._s(t.subcodigo))]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return a.stopPropagation(),e.preencher(t)}}},[a("i",{staticClass:"fa fa-eye"})]),e._v(" "),a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return a.stopPropagation(),e.remover(t)}}},[a("i",{staticClass:"fas fa-trash"})])])])}))],2)])]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-success",on:{click:function(t){return e.abrir()}}},[e._v("Adicionar Ambiente")])]),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[e.listarFuncoes?a("div",{staticClass:"col-md-12 mt-4"},[a("h4",[e._v("Funções | "),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(t){e.listarFuncoes=!1}}},[e._v("Fechar")])]),e._v(" "),a("table",{staticClass:"table table-hover"},[a("tbody",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Cargo")]),e._v(" "),a("th",[e._v("Descricao RH")]),e._v(" "),a("th",[e._v("CBO")]),e._v(" "),a("th",[e._v("Masc.")]),e._v(" "),a("th",[e._v("Fem.")]),e._v(" "),a("th",[e._v("Ações")])]),e._v(" "),e._l(e.funcoes,(function(t){return a("tr",[a("td",[e._v(e._s(t.idRH))]),e._v(" "),a("td",[e._v(e._s(t.cargo))])])}))],2)])]):e._e()])],1),e._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do Ambiente","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:e.salvar,cancel:function(t){return e.fechar()}}},[e.editar?e._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Qual ambiente deseja inserir?")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selecionado,expression:"selecionado"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selecionado=t.target.multiple?a:a[0]},e.preencheAmbiente]}},[a("option",{domProps:{value:null}},[e._v("---- Selecione -----")]),e._v(" "),e._l(e.listAmbientes,(function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t.nomeAmbienteTrabalho))])}))],2)])])]),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[e.selecionado||e.editar?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.idPpraAmbienteTrabalho,expression:"ambiente.idPpraAmbienteTrabalho"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.ambiente.idPpraAmbienteTrabalho},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"idPpraAmbienteTrabalho",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("ID Origem")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.idOrigem,expression:"ambiente.idOrigem"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.ambiente.idOrigem},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"idOrigem",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Nome")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.nomeAmbienteTrabalho,expression:"ambiente.nomeAmbienteTrabalho"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.ambiente.nomeAmbienteTrabalho},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"nomeAmbienteTrabalho",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Estabelecimento")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.estabelecimento,expression:"ambiente.estabelecimento"}],staticClass:"form-control",attrs:{name:"",id:"",disabled:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.ambiente,"estabelecimento",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"SELECIONE"}}),e._v(" "),a("option",{attrs:{value:"TERCEIROS"}},[e._v("TERCEIROS")]),e._v(" "),a("option",{attrs:{value:"PRÓPRIO"}},[e._v("PROPRIO")])])])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Inscrição Terceiro")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.inscricaoTerceiro,expression:"ambiente.inscricaoTerceiro"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.ambiente.inscricaoTerceiro},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"inscricaoTerceiro",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Subcódigo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.subCodigo,expression:"ambiente.subCodigo"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.ambiente.subCodigo},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"subCodigo",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Observação")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ambiente.observacao,expression:"ambiente.observacao"}],staticClass:"form-control",attrs:{cols:"30",rows:"3"},domProps:{value:e.ambiente.observacao},on:{input:function(t){t.target.composing||e.$set(e.ambiente,"observacao",t.target.value)}}})])])]):e._e()])],1)],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Nome")]),e._v(" "),a("th",[e._v("Estabelecimento")]),e._v(" "),a("th",{staticStyle:{width:"150px"}},[e._v("Inscrição Terceiros")]),e._v(" "),a("th",[e._v("Observação")]),e._v(" "),a("th",[e._v("Subcódigo")]),e._v(" "),a("th",{staticStyle:{width:"110px"}},[e._v("Ações")])])}],!1,null,"754e510f",null);t.default=n.exports}}]);