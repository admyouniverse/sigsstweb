(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{112:function(t,a,e){"use strict";e.r(a);var s={props:["empresa"],data:function(){return{entregas:[],funcionarios:[],inativos:[]}},computed:{parametro:function(){var t=window.location.search.substring(1);return new URLSearchParams(t).get("acao")}},methods:{abrir:function(){this.mensagem="Carregando empregados..."},formataEstabelecimento:function(t){return"PRÓPRIO"==t?"P":"TERCEIROS"==t?"T":"SERVIÇOS_TERCEIROS"==t?"ST":void 0},formataTipo:function(t){return"ADMISSIONAL"==t?"Adm":"DEMISSIONAL"==t?"Dem":"MUDANÇA_DE_FUNÇÃO"==t?"M. Fun":"MUDANÇA_DE_CONTRATANTE"==t?"M. Con":"TRANSFERÊNCIA"==t?"Trans":void 0},formataSexo:function(t){return"MASCULINO"==t?"M":"FEMININO"==t?"F":void 0},salvar:function(){}},mounted:function(){var t=this;axios.get("/empresas/funcionarios/"+t.empresa.idEmpresa).then((function(a){t.funcionarios=a.data})),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaDemitidosPorIdEmpresa/"+t.empresa.idEmpresa).then((function(a){t.inativos=a.data}))}},o=(e(368),e(164)),n=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),e("div",{staticClass:"box box-default"},[e("div",{staticClass:"box-body table-responsive"},[e("b-card",{staticClass:"sig",attrs:{"no-body":""}},[e("b-tabs",{attrs:{pills:"",card:""}},[e("b-tab",{attrs:{title:"Ativos",active:""}},[e("b-card-text",{attrs:{id:"tabelaEmpregados"}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body box-empregados table-responsive"},[e("table",{staticClass:"table table-hover table-striped table-empregados",attrs:{id:"tabelaListagemEmpregados"}},[e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Matrícula")]),t._v(" "),e("th",[t._v("Nome")]),t._v(" "),e("th",[t._v("CPF")]),t._v(" "),e("th",[t._v("Dt. Adm")]),t._v(" "),e("th",[t._v("Dt. Cargo")]),t._v(" "),e("th",[t._v("Cargo")]),t._v(" "),e("th",[t._v("Ambiente")]),t._v(" "),e("th",[t._v("Dt. Nasc")]),t._v(" "),e("th",[t._v("Sexo")]),t._v(" "),e("th",[t._v("Tempo")]),t._v(" "),e("th",[t._v("Contratante")])])]),t._v(" "),e("tbody",t._l(t.funcionarios,(function(a){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selecionar(a)}}},[e("td",[t._v(t._s(a.pessoa.idPessoa))]),t._v(" "),e("td",[t._v(t._s(a.matricula))]),t._v(" "),e("td",[t._v(t._s(a.pessoa.nomePessoa))]),t._v(" "),e("td",[t._v(t._s(a.pessoa.cpf))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataInicial,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataFuncao,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(a.funcao.cargo))]),t._v(" "),e("td",[t._v(t._s(t.formataEstabelecimento(a.ambienteTrabalho.estabelecimento))+"\n                                                -\n                                                "+t._s(a.ambienteTrabalho.nomeAmbienteTrabalho))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.pessoa.dataNascimento,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(t.formataSexo(a.pessoa.sexo)))]),t._v(" "),e("td",[t._v(t._s(a.ano)+"A, "+t._s(a.mes)+"M,\n                                                "+t._s(a.dia)+"D")]),t._v(" "),e("td",[t._v(t._s(a.empresaContrato.empresaContratante.nomeFantasia))])])})),0)])])])])],1),t._v(" "),e("b-tab",{attrs:{title:"Inativos"}},[e("b-card-text",{attrs:{id:"tabelaEmpregados"}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body box-empregados table-responsive"},[e("table",{staticClass:"table table-hover table-striped table-empregados",attrs:{id:"tabelaListagemEmpregados"}},[e("thead",[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Matrícula")]),t._v(" "),e("th",[t._v("Nome")]),t._v(" "),e("th",[t._v("CPF")]),t._v(" "),e("th",[t._v("Dt. Adm")]),t._v(" "),e("th",[t._v("Dt. Cargo")]),t._v(" "),e("th",[t._v("Cargo")]),t._v(" "),e("th",[t._v("Ambiente")]),t._v(" "),e("th",[t._v("Dt. Nasc")]),t._v(" "),e("th",[t._v("Sexo")]),t._v(" "),e("th",[t._v("Tempo")]),t._v(" "),e("th",[t._v("Contratante")])])]),t._v(" "),e("tbody",t._l(t.inativos,(function(a){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selecionar(a)}}},[e("td",[t._v(t._s(a.pessoa.idPessoa))]),t._v(" "),e("td",[t._v(t._s(a.matricula))]),t._v(" "),e("td",[t._v(t._s(a.pessoa.nomePessoa))]),t._v(" "),e("td",[t._v(t._s(a.pessoa.cpf))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataInicial,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.dataFuncao,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(a.funcao.cargo))]),t._v(" "),e("td",[t._v(t._s(t.formataEstabelecimento(a.ambienteTrabalho.estabelecimento))+"\n                                                -\n                                                "+t._s(a.ambienteTrabalho.nomeAmbienteTrabalho))]),t._v(" "),e("td",[t._v(t._s(t._f("moment")(a.pessoa.dataNascimento,"DD/MM/Y")))]),t._v(" "),e("td",[t._v(t._s(t.formataSexo(a.pessoa.sexo)))]),t._v(" "),e("td",[t._v(t._s(a.ano)+"A, "+t._s(a.mes)+"M,\n                                                "+t._s(a.dia)+"D")]),t._v(" "),e("td",[t._v(t._s(a.empresaContrato.empresaContratante.nomeFantasia))])])})),0)])])])])],1),t._v(" "),e("b-tab",{attrs:{title:"Outras Unidades"}})],1)],1)],1)])],1)}),[],!1,null,"9a91ae96",null);a.default=n.exports},164:function(t,a,e){"use strict";function s(t,a,e,s,o,n,r,i){var _,v="function"==typeof t?t.options:t;if(a&&(v.render=a,v.staticRenderFns=e,v._compiled=!0),s&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),r?(_=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},v._ssrRegister=_):o&&(_=i?function(){o.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:o),_)if(v.functional){v._injectStyles=_;var d=v.render;v.render=function(t,a){return _.call(a),d(t,a)}}else{var c=v.beforeCreate;v.beforeCreate=c?[].concat(c,_):[_]}return{exports:t,options:v}}e.d(a,"a",(function(){return s}))},232:function(t,a,e){var s=e(369);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(132)(s,o);s.locals&&(t.exports=s.locals)},368:function(t,a,e){"use strict";e(232)},369:function(t,a,e){(t.exports=e(131)(!1)).push([t.i,".sig .card-body[data-v-9a91ae96] {\n  padding: 0;\n}",""])}}]);