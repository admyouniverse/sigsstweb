(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{0:function(t,a,e){"use strict";function s(t,a,e,s,n,o,r,i){var c,d="function"==typeof t?t.options:t;if(a&&(d.render=a,d.staticRenderFns=e,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):n&&(c=i?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,a){return c.call(a),l(t,a)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:d}}e.d(a,"a",(function(){return s}))},48:function(t,a,e){"use strict";e.r(a);var s={props:["empresa"],data:function(){return{contratos:[],contrato:{empresaContratante:{},dataIni:"",dataFim:""},contratantes:[],contratados:[],editar:!1,atual:"",carregando:!0,mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},preencher:function(t){this.atual=t.empresaContratante.idEmpresa,this.contrato=t,this.editar=!0,this.abrir()},abrir:function(){this.$refs.myModal.show()},fechar:function(){this.editar=!1,this.contrato={empresaContratante:{},dataIni:"",dataFim:""},this.atual="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$refs.modalCerteza.hide()},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),800)},contratanteEmContrato:function(t){for(var a=0;a<this.contratos.length;a++)if(this.contratos[a].empresaContratante.idEmpresa===t.idEmpresa||"CONTRATADA"==t.tipoEmpresa||"SELECIONE"==t.tipoEmpresa)return!0;return!1},ok:function(t){t.preventDefault(),this.editar?this.atualizar():this.salvar()},remover:function(t){this.deletar=t.idEmpresaContrato,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},certeza:function(){this.carregar("Removendo contrato...");var t=this;axios.get("/empresas/contratos/remover/"+this.empresa.idEmpresa+"/"+this.deletar).then((function(a){t.contratos=a.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))}))},atualizar:function(){var t=this;axios.post("/empresas/contratos/atualizar/"+t.empresa.idEmpresa,{contrato:t.contrato.idEmpresaContrato,contratante:t.contrato.empresaContratante.idEmpresa,dataIni:t.contrato.dataIni,dataFim:t.contrato.dataFim}).then((function(a){t.contratos=a.data,t.$nextTick((function(){t.fechar()}))}))},salvar:function(){var t=this;axios.post("/empresas/contratos/novo/"+t.empresa.idEmpresa,{contratante:t.contrato.empresaContratante.idEmpresa,dataIni:t.contrato.dataIni,dataFim:t.contrato.dataFim}).then((function(a){t.contratos=a.data,t.$nextTick((function(){t.fechar()}))}))}},mounted:function(){var t=this;axios.get("/empresas/contratos/"+t.empresa.idEmpresa).then((function(a){t.contratos=a.data})),axios.get("/empresas/contratos/"+t.empresa.idEmpresa+"/contratados").then((function(a){t.contratados=a.data})),axios.get("/empresas/list/").then((function(a){t.contratantes=a.data})),this.sucesso("Carregados os contratos")}},n=e(0),o=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),"AMBAS"==t.empresa.tipoEmpresa||"CONTRATADA"==t.empresa.tipoEmpresa?e("div",{staticClass:"row"},[e("h3",{staticClass:"ml-4"},[t._v("Contratantes")]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[t._m(0),t._v(" "),e("tbody",t._l(t.contratos,(function(a){return a.empresaContratante.idEmpresa!=t.empresa.idEmpresa?e("tr",[e("td",[t._v(t._s(a.empresaContratante.razaoSocial))]),t._v(" "),e("td",[t._v(t._s(a.empresaContratante.inscricao))]),t._v(" "),e("td",[t._v(t._s(a.empresaContratante.nomeUnidade))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataIni,"DD/MM/Y")))]),t._v(" "),a.dataFim?e("td",[t._v(t._s(t._f("moment")(a.dataFim,"DD/MM/Y")))]):t._e(),t._v(" "),a.dataFim?t._e():e("td",[t._v("__/__/____")]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.remover(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.preencher(a)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])]):t._e()})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-12 ml-2 mb-4"},[e("br"),t._v(" "),e("button",{staticClass:"btn btn-success",on:{click:function(a){return t.abrir()}}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Adicionar")])]),t._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do Contrato","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(a){return t.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Contratante")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.contrato.empresaContratante,expression:"contrato.empresaContratante"}],staticClass:"form-control",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.contrato,"empresaContratante",a.target.multiple?e:e[0])}}},t._l(t.contratantes,(function(a){return"AMBAS"!=a.tipoEmpresa&&"CONTRATANTE"!=a.tipoEmpresa||(t.contratanteEmContrato(a)||a.idEmpresa==t.empresa.idEmpresa)&&a.idEmpresa!=t.atual?t._e():e("option",{domProps:{value:a}},[t._v(t._s(a.razaoSocial))])})),0)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Data Inicial")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contrato.dataIni,expression:"contrato.dataIni"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.contrato.dataIni},on:{input:function(a){a.target.composing||t.$set(t.contrato,"dataIni",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Data Final")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contrato.dataFim,expression:"contrato.dataFim"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.contrato.dataFim},on:{input:function(a){a.target.composing||t.$set(t.contrato,"dataFim",a.target.value)}}})])])])])],1):t._e(),t._v(" "),"AMBAS"==t.empresa.tipoEmpresa||"CONTRATANTE"==t.empresa.tipoEmpresa?e("div",{staticClass:"row"},[e("h3",{staticClass:"ml-4"},[t._v("Contratadas")]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[t._m(1),t._v(" "),e("tbody",t._l(t.contratados,(function(a){return a.empresa.idEmpresa!=t.empresa.idEmpresa?e("tr",[e("td",[t._v(t._s(a.empresa.razaoSocial))]),t._v(" "),e("td",[t._v(t._s(a.empresa.inscricao))]),t._v(" "),e("td",[t._v(t._s(a.empresa.nomeUnidade))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataIni,"DD/MM/Y")))]),t._v(" "),a.dataFim?e("td",[t._v(t._s(t._f("moment")(a.dataFim,"DD/MM/Y")))]):t._e(),t._v(" "),a.dataFim?t._e():e("td",[t._v("__/__/____")]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.remover(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.preencher(a)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])]):t._e()})),0)])])])]):t._e(),t._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[t._v("Tem certeza que deseja excluir este contrato?")])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-default btn-lg",attrs:{type:"button","data-dismiss":"modal"}},[e("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[e("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Contratante")]),t._v(" "),e("th",[t._v("CNPJ")]),t._v(" "),e("th",[t._v("Unidade")]),t._v(" "),e("th",[t._v("Data Início")]),t._v(" "),e("th",[t._v("Data Final")]),t._v(" "),e("th",[t._v("Ações")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Contratada")]),t._v(" "),e("th",[t._v("CNPJ")]),t._v(" "),e("th",[t._v("Unidade")]),t._v(" "),e("th",[t._v("Data Início")]),t._v(" "),e("th",[t._v("Data Final")]),t._v(" "),e("th",[t._v("Ações")])])])}],!1,null,null,null);a.default=o.exports}}]);