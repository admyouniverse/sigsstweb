(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{164:function(a,t,e){"use strict";function o(a,t,e,o,s,i,n,r){var c,l="function"==typeof a?a.options:a;if(t&&(l.render=t,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),n?(c=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),s&&s.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(a,t){return c.call(t),d(a,t)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:a,options:l}}e.d(t,"a",(function(){return o}))},218:function(a,t,e){var o=e(341);"string"==typeof o&&(o=[[a.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(133)(o,s);o.locals&&(a.exports=o.locals)},340:function(a,t,e){"use strict";e(218)},341:function(a,t,e){(a.exports=e(132)(!1)).push([a.i,".square[data-v-5dba74dd] {\n  float: left;\n  height: 20px;\n  width: 20px;\n  margin-right: 5px;\n}\n.square.green[data-v-5dba74dd] {\n  background-color: green;\n}\n.square.red[data-v-5dba74dd] {\n  background-color: red;\n}\n.square.yellow[data-v-5dba74dd] {\n  background-color: yellow;\n}\n.legenda[data-v-5dba74dd] {\n  margin-top: 5px;\n}\n.legenda span[data-v-5dba74dd] {\n  float: left;\n  margin-right: 10px;\n}",""])},86:function(a,t,e){"use strict";e.r(t);var o={props:["pcmso"],data:function(){return{eventosEmpresa:[],eventoEmpresaSelecionado:{},nomeEvento:"",tabIndex:1,eventosBase:[],carregando:!1,mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',nomeNovo:"",pessoas:[],nomePessoa:"",nomePessoaEditar:"",pessoaSelecionada:{},pessoaSelecionadaEditar:{},acoes:[],eventoSelecionado:{},efetivo:"NÃO",data:"",dataEfetivo:"",observacoes:"",acao:{evento:{},pessoa:{}},observacao:""}},methods:{fechar:function(){this.pessoaSelecionada={},this.nomePessoa="",this.pessoaSelecionadaEditar={},this.nomePessoaEditar={}},modalEvento:function(a){var t=this;this.tabIndex=a,axios.get("/empresas/eventos/list/").then((function(a){t.eventosBase=a.data,t.$refs.modalEventos.show()}))},modalPessoas:function(){var a=this;axios.get("/pessoas/list/empregado/"+a.pcmso.empresasContrato[0].empresa.idEmpresa).then((function(t){a.pessoas=t.data,a.$refs.modalPessoas.show()}))},verObservacao:function(a){this.observacao=a.obs,this.$refs.modalObservacao.show()},atualizar:function(){var a=this;this.carregar("Salvando..."),axios.post("/pcmso/"+this.pcmso.idPcmso+"/plano-acao",{evento:a.acao.evento.idEvento,pessoaSelecionada:a.pessoaSelecionadaEditar,descricaoFuncionario:a.nomePessoaEditar,data:a.acao.data,efetivada:a.acao.efetivada,dataEfetivo:a.acao.dataEfetivacao,observacoes:a.acao.obs,idPlanoAcao:a.acao.idPlanoAcao,complemento:a.acao.complemento}).then((function(t){a.acoes=t.data,a.nomeEvento="",a.eventoSelecionado={},a.nomePessoa="",a.pessoaSelecionada={},a.data="",a.efetivo="NÃO",a.dataEfetivo="",a.carregando=!1,a.$alert("Plano atualizado!","Sucesso!","success")}))},editar:function(a){this.acao=a,this.nomePessoaEditar=this.acao.descricaoFuncionario,this.pessoaSelecionada=this.acao.pessoa,this.$refs.modalEditar.show()},selecionarEvento:function(a){this.eventoSelecionado=a,this.nomeEvento=this.eventoSelecionado.descricao,this.$refs.modalEventos.hide()},verificaData:function(a){return new Date(a)>=new Date?"background-color: yellow":"background-color: red"},incluirEvento:function(){var a=this;this.carregar("Incluindo evento..."),axios.post("/empresas/eventos",{descricao:a.nomeNovo,codigo:0}).then((function(t){a.eventosBase=t.data,a.nomeNovo="",a.carregando=!1,a.$alert("Todos os dados foram carregados.","Sucesso!","success")}))},carregar:function(a){this.mensagem=a,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},selecionaPessoa:function(a){this.pessoaSelecionada=a,this.nomePessoa=this.pessoaSelecionada.nomePessoa,this.pessoaSelecionadaEditar=a,this.nomePessoaEditar=this.pessoaSelecionadaEditar.nomePessoa,this.$refs.modalPessoas.hide()},limparPessoa:function(){this.pessoaSelecionada={}},limparPessoaEditar:function(){this.pessoaSelecionadaEditar={}},incluir:function(){this.carregar("Armazenando...");var a=this;axios.post("/pcmso/"+this.pcmso.idPcmso+"/plano-acao",{evento:a.eventoSelecionado.idEvento,pessoaSelecionada:a.pessoaSelecionada,descricaoFuncionario:a.nomePessoa,data:a.data,efetivada:a.efetivo,dataEfetivo:a.dataEfetivo,observacoes:a.observacoes,idPlanoAcao:0,complemento:a.acao.complemento}).then((function(t){a.acoes=t.data,a.nomeEvento="",a.eventoSelecionado={},a.nomePessoa="",a.pessoaSelecionada={},a.data="",a.efetivo="NÃO",a.dataEfetivo="",a.carregando=!1,a.$alert("Plano inserido!","Sucesso!","success")}))},remover:function(a){var t=this;this.carregar("Removendo..."),axios.get("/pcmso/"+this.pcmso.idPcmso+"/plano-acao/remover/"+a.idPlanoAcao).then((function(a){t.acoes=a.data,t.carregando=!1,t.$alert("Plano removido!","Sucesso!","success")}))}},mounted:function(){var a=this;axios.get("/pcmso/"+this.pcmso.idPcmso+"/plano-acao/").then((function(t){a.acoes=t.data}))}},s=(e(340),e(164)),i=Object(s.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a.carregando?e("BlockUI",{attrs:{message:a.mensagem,html:a.html}}):a._e(),a._v(" "),e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("O que?")]),a._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nomeEvento,expression:"nomeEvento"}],staticClass:"form-control",attrs:{type:"text",readonly:"",placeholder:"Evento"},domProps:{value:a.nomeEvento},on:{input:function(t){t.target.composing||(a.nomeEvento=t.target.value)}}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){return a.modalEvento(0)}}},[e("i",{staticClass:"fa fa-search"})])])])])]),a._v(" "),a._m(0),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Pessoa Responsável")]),a._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nomePessoa,expression:"nomePessoa"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Pessoa"},domProps:{value:a.nomePessoa},on:{keydown:a.limparPessoa,input:function(t){t.target.composing||(a.nomePessoa=t.target.value)}}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:a.modalPessoas}},[e("i",{staticClass:"fa fa-search"})])])])])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Quando?")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.data,expression:"data"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.data},on:{input:function(t){t.target.composing||(a.data=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2",class:{"col-md-4":"SIM"==a.efetivo}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Efetivo")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.efetivo,expression:"efetivo"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.efetivo=t.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"SIM"}},[a._v("Sim")]),a._v(" "),e("option",{attrs:{value:"NÃO"}},[a._v("Não")])])])]),a._v(" "),"SIM"==a.efetivo?e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Efetivo")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.dataEfetivo,expression:"dataEfetivo"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.dataEfetivo},on:{input:function(t){t.target.composing||(a.dataEfetivo=t.target.value)}}})])]):a._e(),a._v(" "),"SIM"==a.efetivo?e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Observacao")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.observacoes,expression:"observacoes"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.observacoes},on:{input:function(t){t.target.composing||(a.observacoes=t.target.value)}}})])]):a._e(),a._v(" "),"SIM"==a.efetivo?e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-success",on:{click:a.incluir}},[a._v("\n                Salvar\n            ")])]):a._e(),a._v(" "),"NÃO"==a.efetivo?e("div",{staticClass:"col-md-2"},[e("button",{staticClass:"btn btn-success btn-block mt-4",on:{click:a.incluir}},[e("i",{staticClass:"fa fa-check"})])]):a._e()]),a._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table"},[e("tbody",[a._m(1),a._v(" "),a._l(a.acoes,(function(t,o){return e("tr",[t.evento?e("td",[e("strong",[a._v(a._s(o+1))]),a._v(") "+a._s(t.evento.descricao)+" "+a._s(t.complemento))]):a._e(),a._v(" "),t.evento?a._e():e("td",[a._v(" - ")]),a._v(" "),t.pessoa?e("td",[a._v(a._s(t.pessoa.nomePessoa))]):a._e(),a._v(" "),t.pessoa?a._e():e("td",[a._v(a._s(t.descricaoFuncionario))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.data,"DD/MM/YYYY")))]),a._v(" "),"SIM"==t.efetivada?e("td",{staticStyle:{"background-color":"green",color:"#fff"}},[a._v(a._s(a._f("moment")(t.dataEfetivacao,"DD/MM/YYYY")))]):a._e(),a._v(" "),"NÃO"==t.efetivada?e("td",{style:a.verificaData(t.data)},[a._v(" Não")]):a._e(),a._v(" "),e("td",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(e){return a.verObservacao(t)}}},[e("i",{staticClass:"fa fa-eye"})])]),a._v(" "),a._m(2,!0),a._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){return a.editar(t)}}},[e("i",{staticClass:"fas fa-pencil-alt"})]),a._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){return a.remover(t)}}},[e("i",{staticClass:"fa fa-trash"})])])])}))],2)])])]),a._v(" "),a._m(3),a._v(" "),e("b-modal",{ref:"modalEventos",attrs:{size:"lg",centered:"","hide-footer":!0,title:"Eventos",id:"modal1"}},[e("table",{staticClass:"table-striped table-hover table"},[a.eventosBase.length>0?e("tbody",a._l(a.eventosBase,(function(t){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return a.selecionarEvento(t)}}},[e("td",[a._v(a._s(t.descricao))])])})),0):a._e()]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Não encontrou? Adicione.")]),a._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nomeNovo,expression:"nomeNovo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome do Evento"},domProps:{value:a.nomeNovo},on:{input:function(t){t.target.composing||(a.nomeNovo=t.target.value)}}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:a.incluirEvento}},[e("i",{staticClass:"fa fa-check"})])])])])])]),a._v(" "),e("b-modal",{ref:"modalPessoas",attrs:{size:"lg",centered:"","hide-footer":!0,title:"Pessoas",id:"modal1"}},[e("table",{staticClass:"table-striped table-hover table"},[e("tbody",[e("tr",[e("th",[a._v("Nome")]),a._v(" "),e("th",[a._v("Genero")])]),a._v(" "),a._l(a.pessoas,(function(t){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return a.selecionaPessoa(t)}}},[e("td",[a._v(a._s(t.nomePessoa))]),a._v(" "),e("td",[a._v(a._s(t.sexo))])])}))],2)])]),a._v(" "),e("b-modal",{ref:"modalObservacao",attrs:{size:"lg",centered:"","hide-footer":!0,title:"Mais detalhes",id:"modal1"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Observações")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.observacao,expression:"observacao"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:a.observacao},on:{input:function(t){t.target.composing||(a.observacao=t.target.value)}}})])]),a._v(" "),e("b-modal",{ref:"modalEditar",attrs:{size:"lg","ok-title":"Salvar","cancel-title":"Cancelar",centered:"",title:"Editar Plano de Ação",id:"modal1"},on:{ok:a.atualizar,cancel:a.fechar}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Seq")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.idPlanoAcao,expression:"acao.idPlanoAcao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.acao.idPlanoAcao},on:{input:function(t){t.target.composing||a.$set(a.acao,"idPlanoAcao",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Evento")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.evento.descricao,expression:"acao.evento.descricao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.acao.evento.descricao},on:{input:function(t){t.target.composing||a.$set(a.acao.evento,"descricao",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Complemento")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.complemento,expression:"acao.complemento"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.acao.complemento},on:{input:function(t){t.target.composing||a.$set(a.acao,"complemento",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Limite")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.data,expression:"acao.data"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.acao.data},on:{input:function(t){t.target.composing||a.$set(a.acao,"data",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Pessoa")]),a._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.nomePessoaEditar,expression:"nomePessoaEditar"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Pessoa"},domProps:{value:a.nomePessoaEditar},on:{keydown:a.limparPessoaEditar,input:function(t){t.target.composing||(a.nomePessoaEditar=t.target.value)}}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:a.modalPessoas}},[e("i",{staticClass:"fa fa-search"})])])])])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Efetivo")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.acao.efetivada,expression:"acao.efetivada"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.acao,"efetivada",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"SIM"}},[a._v("Sim")]),a._v(" "),e("option",{attrs:{value:"NÃO"}},[a._v("Não")])])])]),a._v(" "),"SIM"==a.acao.efetivada?e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Efetivação")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.dataEfetivacao,expression:"acao.dataEfetivacao"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.acao.dataEfetivacao},on:{input:function(t){t.target.composing||a.$set(a.acao,"dataEfetivacao",t.target.value)}}})])]):a._e(),a._v(" "),"SIM"==a.acao.efetivada?e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Como foi efetivado")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.acao.obs,expression:"acao.obs"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.acao.obs},on:{input:function(t){t.target.composing||a.$set(a.acao,"obs",t.target.value)}}})])]):a._e()])])],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[this._v("Complemento")]),this._v(" "),t("input",{staticClass:"form-control",attrs:{type:"text"}})])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",[e("th",[a._v("O que?")]),a._v(" "),e("th",[a._v("Quem?")]),a._v(" "),e("th",[a._v("Quando?")]),a._v(" "),e("th",{staticStyle:{width:"105px"}},[a._v("Efetivo")]),a._v(" "),e("th",{staticClass:"text-center"},[a._v("Observação")]),a._v(" "),e("th",{staticClass:"text-center"},[a._v("Evidências")]),a._v(" "),e("th")])},function(){var a=this.$createElement,t=this._self._c||a;return t("td",{staticClass:"text-center"},[t("a",[t("img",{attrs:{src:"/img/pdf.png",width:"21px"}})])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"}),a._v(" "),e("div",{staticClass:"col-md-6 legenda"},[e("div",{staticClass:"square green"}),a._v(" "),e("span",[a._v("Efetivada")]),a._v(" "),e("div",{staticClass:"square yellow"}),a._v(" "),e("span",[a._v("Aberto no Período")]),a._v(" "),e("div",{staticClass:"square red"}),a._v(" "),e("span",[a._v("Aberto fora do Período")])])])}],!1,null,"5dba74dd",null);t.default=i.exports}}]);