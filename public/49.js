(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{164:function(t,a,o){"use strict";function s(t,a,o,s,e,r,i,n){var c,l="function"==typeof t?t.options:t;if(a&&(l.render=a,l.staticRenderFns=o,l._compiled=!0),s&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):e&&(c=n?function(){e.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:e),c)if(l.functional){l._injectStyles=c;var m=l.render;l.render=function(t,a){return c.call(a),m(t,a)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}o.d(a,"a",(function(){return s}))},217:function(t,a,o){var s=o(339);"string"==typeof s&&(s=[[t.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};o(133)(s,e);s.locals&&(t.exports=s.locals)},338:function(t,a,o){"use strict";o(217)},339:function(t,a,o){(t.exports=o(132)(!1)).push([t.i,".box-sig .box-header[data-v-957a8706] {\n  background-color: #59AF50;\n  color: #fff;\n}\n.box-sig .box-body[data-v-957a8706] {\n  background-color: #e8fce8;\n}",""])},82:function(t,a,o){"use strict";o.r(a);var s={props:["editar","pcmsodb","empresadb"],data:function(){return{pcmso:{idPcmso:0,empresasContrato:[],versao:"",dataHora:"",status:"ELABORAÇÃO",liberado:"LIBERADO",tipoPcmso:"SELECIONE",atividadeLocal:"",introducao:"",objetivos:"",metodos:"",orientacoes:"",comentarios:"",caminhoPdf:"",ppra:""},carregando:!0,mensagem:"Carregando...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',contratosAll:[],contratos:[],empresas:[],empresa:"",file:"",contrato:{empresa:{},empresaContratante:{}},adicionar:!1,montou:!1}},methods:{abrirUpload:function(){$("#file").click()},handleFileUpload:function(){this.file=this.$refs.file.files[0],this.submitFile()},submitFile:function(){var t=new FormData;t.append("file",this.file);var a=this;axios.post("http://200.98.201.236:8081/upload-file",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log("SUCCESS!!"),a.pcmso.caminhoPdf=t.data.data.new_file_name,a.salvar()})).catch((function(){console.log("FAILURE!!")}))},formataPpra:function(){return"V "+this.pcmso.ppra.versao+" de "+Vue.moment(this.pcmso.ppra.dataHora).format("DD/MM/YYYY")},carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),5e3)},adicionarContrato:function(){this.pcmso.empresasContrato.push(this.contrato),this.contrato={empresa:{},empresaContratante:{}},this.adicionar=!1},excluirContrato:function(t){this.pcmso.empresasContrato.splice(t,1)},contratosEmContratos:function(t){for(var a=0;a<this.pcmso.empresasContrato.length;a++)if(this.pcmso.empresasContrato[a].idEmpresaContrato===t.idEmpresaContrato)return!0;return!1},valida:function(t){var a=this;if(this.editar)t();else{if(!a.contrato||""==a.pcmso.dataHora||"SELECIONE"==a.pcmso.tipoPcmso)return!1;a.carregar("Validando..."),axios.get("/pcmso/list/"+a.contrato.idEmpresaContrato).then((function(o){if(o.data){if(console.log(o.data),"EMISSÃO"==o.data.tipoPcmso&&"EMISSÃO"==a.pcmso.tipoPcmso)return a.alerta("O tipo não pode ser emissão!"),a.pcmso.tipoPcmso="SELECIONE",a.pcmso.versao="",!1;if("CONGELADO"!=o.data.liberado)return a.alerta("O PCMSO anterior, com este contrato, precisa ter a situação CONGELADO. Corrija."),!1;var s=new Date(o.data.dataHora);if(s>=new Date(a.pcmso.dataHora))return a.alerta("Data precisa ser maior que "+(s.getDate()+1)+"/"+(s.getMonth()+1)+"/"+s.getFullYear()),!1;console.log("Chegou aqui!"),a.pcmso.introducao=o.data.introducao,a.pcmso.objetivos=o.data.objetivos,a.pcmso.comentarios=o.data.comentarios,t()}else t()}))}},mudaData:function(){var t=this;t.carregar("Buscando contratos para esta data..."),this.contratos=this.contratosAll.filter((function(a){var o=new Date(a.dataIni),s=new Date(t.pcmso.dataHora);return o<=s&&(!a.dataFim||new Date(a.dataFim)>=s)})),this.sucesso("Contratos recuperados."),this.buscarGro()},buscarGro:function(){var t=this;this.contrato&&this.pcmso.dataHora&&(t.carregar("Buscando GRO..."),axios.post("/gro/empresacontrato",{empresaContrato:t.contrato.idEmpresaContrato,dataPpra:t.pcmso.dataHora,idEmpresa:t.empresadb.idEmpresa}).then((function(a){console.log(a.data),t.pcmso.ppra=a.data,""!=a.data?t.sucesso("GRO encontrado."):t.alerta("Não foi encontrado GRO!")})))},getVersao:function(){var t=this;this.buscarGro(),this.valida((function(){axios.post("/pcmso/versao",{contrato:t.contrato,data:t.pcmso.dataHora,tipo:t.pcmso.tipoPcmso}).then((function(a){console.log(a),"Erro"==a.data?(t.alerta("Verifique o tipo de PCMSO!"),t.pcmso.versao=""):(t.sucesso("Versão recuperada."),t.pcmso.versao=a.data)}))}))},getContratos:function(t){var a=this;a.mensagem="Carregando contratos das empresas...",a.carregando=!0,axios.get("/pcmso/contratos/"+this.empresa.idEmpresa).then((function(o){a.contratosAll=o.data,a.contratos=a.contratosAll,a.carregando=!1,(t||Function)()}))},salvar:function(){var t=this;this.valida((function(){t.pcmso.ppra?(t.mensagem="Salvando PCMSO...",t.carregando=!0,axios.post("/pcmso",{pcmso:t.pcmso,contrato:t.contrato}).then((function(a){"erro"!=a.data?window.location.href="/pcmso/editar/"+a.data:(t.mensagem="Erro!",t.carregando=!1)}))):t.alerta("Encontre um GRO!")}))}},mounted:function(){var t=this;console.log(this.empresadb),axios.get("/empresas/list").then((function(a){t.empresas=a.data,t.carregando=!1,t.montou=!0})),this.editar?(this.pcmso=this.pcmsodb,this.empresa=this.pcmso.empresasContrato[0].empresa,this.getContratos(),this.contrato=this.pcmso.empresasContrato[0],console.log(this.contrato)):(this.empresa=this.empresadb,this.getContratos((function(){"NENHUM"!=t.empresa.tipoEmpresa&&"CONTRATANTE"!=t.empresa.tipoEmpresa||t.contratos.forEach((function(a){a.empresaContratante.idEmpresa==t.empresa.idEmpresa&&(t.contrato=a)}))})))}},e=(o(338),o(164)),r=Object(e.a)(s,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"content"},[t.carregando?o("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),o("div",[o("b-card",{staticClass:"sig",attrs:{"no-body":""}},[o("b-tabs",{attrs:{card:""}},[o("b-tab",{attrs:{title:"Detalhes",active:""}},[o("b-card-text",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-1"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.idPcmso,expression:"pcmso.idPcmso"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.pcmso.idPcmso},on:{input:function(a){a.target.composing||t.$set(t.pcmso,"idPcmso",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Empresa")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.empresa.razaoSocial,expression:"empresa.razaoSocial"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.empresa.razaoSocial},on:{input:function(a){a.target.composing||t.$set(t.empresa,"razaoSocial",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Unidade")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.empresa.nomeUnidade,expression:"empresa.nomeUnidade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.empresa.nomeUnidade},on:{input:function(a){a.target.composing||t.$set(t.empresa,"nomeUnidade",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Data")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.dataHora,expression:"pcmso.dataHora"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.pcmso.dataHora},on:{blur:t.mudaData,input:function(a){a.target.composing||t.$set(t.pcmso,"dataHora",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Estabelecimento")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.contrato,expression:"contrato"}],staticClass:"form-control",attrs:{disabled:"NENHUM"==t.empresa.tipoEmpresa||"CONTRATANTE"==t.empresa.tipoEmpresa},on:{change:[function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.contrato=a.target.multiple?o:o[0]},t.getVersao]}},[t._l(t.contratos,(function(a){return a.empresaContratante.idEmpresa!=t.empresa.idEmpresa?o("option",{domProps:{value:a}},[t._v("\n                                            "+t._s(a.idEmpresaContrato)+" |\n                                            "+t._s(a.empresaContratante.nomeFantasia))]):t._e()})),t._v(" "),t._l(t.contratos,(function(a){return a.empresaContratante.idEmpresa==t.empresa.idEmpresa?o("option",{domProps:{value:a}},[t._v("\n                                            "+t._s(a.empresaContratante.nomeFantasia)+"\n                                        ")]):t._e()}))],2)])]),t._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Tipo")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.tipoPcmso,expression:"pcmso.tipoPcmso"}],staticClass:"form-control",on:{change:[function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pcmso,"tipoPcmso",a.target.multiple?o:o[0])},t.getVersao]}},[o("option",{attrs:{value:"SELECIONE",disabled:""}},[t._v("--- Selecione ---")]),t._v(" "),o("option",{attrs:{value:"EMISSÃO"}},[t._v("Emissão")]),t._v(" "),o("option",{attrs:{value:"REVISÃO_PARCIAL"}},[t._v("Revisão Parcial")]),t._v(" "),o("option",{attrs:{value:"REVISÃO_GERAL"}},[t._v("Revisão Geral")])])])]),t._v(" "),o("div",{staticClass:"col-md-1"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Versão")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.versao,expression:"pcmso.versao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.pcmso.versao},on:{input:function(a){a.target.composing||t.$set(t.pcmso,"versao",a.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("GRO Vinculado")]),t._v(" "),t.pcmso.ppra?o("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.formataPpra()}}):t._e(),t._v(" "),t.pcmso.ppra?t._e():o("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}})])]),t._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Status")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.status,expression:"pcmso.status"}],staticClass:"form-control",on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pcmso,"status",a.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"SELECIONE",disabled:""}},[t._v("--- Selecione ---")]),t._v(" "),o("option",{attrs:{value:"ELABORAÇÃO"}},[t._v("Elaboração")]),t._v(" "),o("option",{attrs:{value:"COMPLETO"}},[t._v("Completo")])])])]),t._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Situação")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.liberado,expression:"pcmso.liberado"}],staticClass:"form-control",on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.pcmso,"liberado",a.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"SELECIONE"}},[t._v("SELECIONE")]),t._v(" "),o("option",{attrs:{value:"LIBERADO"}},[t._v("Liberado")]),t._v(" "),"COMPLETO"==t.pcmso.status?o("option",{attrs:{value:"CONGELADO"}},[t._v("Congelado\n                                        ")]):t._e()])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[t.pcmso.idPcmso&&!t.pcmso.caminhoPdf?o("button",{staticClass:"btn pull-right btn-success",on:{click:t.abrirUpload}},[o("i",{staticClass:"fa fa-upload"}),t._v(" Inserir PDF")]):t._e(),t._v(" "),t.pcmso.idPcmso&&t.pcmso.caminhoPdf?o("button",{staticClass:"btn pull-right btn-success ml-3",on:{click:t.abrirUpload}},[o("i",{staticClass:"fa fa-upload"}),t._v(" Atualizar PDF")]):t._e(),t._v(" "),t.pcmso.idPcmso&&t.pcmso.caminhoPdf?o("button",{staticClass:"btn pull-right btn-success"},[o("i",{staticClass:"fa fa-upload"}),t._v(" Visualizar PDF")]):t._e(),t._v(" "),o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:function(a){return t.handleFileUpload()}}}),t._v(" "),o("button",{staticClass:"btn btn-success",on:{click:function(a){return t.salvar()}}},[o("i",{staticClass:"fa fa-floppy-o"}),t._v("\n                                    Salvar")])])])])],1),t._v(" "),o("b-tab",{attrs:{title:"Capas"}},[o("b-card-text",{staticClass:"sig"},[o("b-tabs",{attrs:{pills:""}},[o("b-tab",{attrs:{title:"Introdução"}},[o("b-card-text",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.introducao,expression:"pcmso.introducao"}],staticClass:"form-control mt-4",attrs:{rows:"12"},domProps:{value:t.pcmso.introducao},on:{input:function(a){a.target.composing||t.$set(t.pcmso,"introducao",a.target.value)}}})])],1),t._v(" "),o("b-tab",{attrs:{title:"Objetivo"}},[o("b-card-text",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.objetivos,expression:"pcmso.objetivos"}],staticClass:"form-control mt-4",attrs:{rows:"12"},domProps:{value:t.pcmso.objetivos},on:{input:function(a){a.target.composing||t.$set(t.pcmso,"objetivos",a.target.value)}}})])],1),t._v(" "),o("b-tab",{attrs:{title:"Orientação"}},[o("b-card-text",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.pcmso.orientacoes,expression:"pcmso.orientacoes"}],staticClass:"form-control mt-4",attrs:{rows:"12"},domProps:{value:t.pcmso.orientacoes},on:{input:function(a){a.target.composing||t.$set(t.pcmso,"orientacoes",a.target.value)}}})])],1),t._v(" "),o("b-tab",{attrs:{title:"Atividades"}},[o("b-card-text",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.empresa.descricaoAtividade,expression:"empresa.descricaoAtividade"}],staticClass:"form-control mt-4",attrs:{rows:"12",readonly:""},domProps:{value:t.empresa.descricaoAtividade},on:{input:function(a){a.target.composing||t.$set(t.empresa,"descricaoAtividade",a.target.value)}}})])],1)],1),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 mt-4"},[o("button",{staticClass:"btn btn-success",on:{click:function(a){return t.salvar()}}},[o("i",{staticClass:"fa fa-floppy-o"}),t._v("\n                                    Salvar")])])])],1)],1),t._v(" "),this.editar&&this.montou?o("b-tab",{attrs:{title:"Ambiente & Cargos"}},[o("b-card-text",[o("pcmso-ambiente",{attrs:{pcmso:this.pcmso,empresa:this.empresadb}})],1)],1):t._e(),t._v(" "),o("b-tab",{attrs:{title:"Plano de Ação"}},[this.editar&&this.montou?o("b-card-text",[o("pcmso-plano-acao",{attrs:{pcmso:this.pcmso}})],1):t._e()],1),t._v(" "),o("b-tab",{attrs:{title:"Histórico de Revisões"}},[this.editar&&this.montou?o("b-card-text",[o("pcmso-historico-revisao",{attrs:{pcmso:this.pcmso}})],1):t._e()],1),t._v(" "),o("b-tab",{attrs:{title:"Histórico de Exames"}},[this.editar&&this.montou?o("b-card-text",[o("pcmso-historico-exames",{attrs:{pcmso:this.pcmso}})],1):t._e()],1),t._v(" "),"NENHUM"!=t.empresadb.tipoEmpresa?o("b-tab",{attrs:{title:"Contrato"}},[this.editar&&this.montou?o("b-card-text",[o("pcmso-capa",{attrs:{pcmso:this.pcmso}})],1):t._e()],1):t._e()],1)],1)],1)],1)}),[],!1,null,"957a8706",null);a.default=r.exports}}]);