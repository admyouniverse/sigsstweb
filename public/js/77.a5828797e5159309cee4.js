(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{0:function(a,t,e){"use strict";function c(a,t,e,c,o,i,s,r){var n,p="function"==typeof a?a.options:a;if(t&&(p.render=t,p.staticRenderFns=e,p._compiled=!0),c&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),s?(n=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),o&&o.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(s)},p._ssrRegister=n):o&&(n=r?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),n)if(p.functional){p._injectStyles=n;var l=p.render;p.render=function(a,t){return n.call(t),l(a,t)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,n):[n]}return{exports:a,options:p}}e.d(t,"a",(function(){return c}))},47:function(a,t,e){"use strict";e.r(t);var c={props:["empresa"],data:function(){return{carregando:!0,mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',capacitacoes:[],capacitacoesbanco:[],atual:"",deletar:"",empresaCapacitacao:{idEmpresaCapacitacao:0,capacitacao:{tabela29:""},cargaHr:"",tipo:"SELECIONE",conteudoProgramatico:""}}},methods:{ok:function(a){a.preventDefault(),this.editar?this.atualizar():this.salvar()},atualizar:function(){var a=this;this.carregar("Salvando..."),axios.post("/capacitacao/"+a.empresa.idEmpresa,{capacitacao:a.empresaCapacitacao}).then((function(t){a.capacitacoes=t.data,a.$nextTick((function(){a.sucesso("Capacitação atualizado."),a.fechar()}))}))},salvar:function(){this.carregar("Salvando...");var a=this;axios.post("/capacitacao/"+a.empresa.idEmpresa,{capacitacao:a.empresaCapacitacao}).then((function(t){a.capacitacoes=t.data,a.$nextTick((function(){a.sucesso("Capacitação incluído."),a.fechar()}))}))},alerta:function(a){this.mensagem=a,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),1e3)},carregar:function(a){this.mensagem=a,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},excluir:function(a){this.deletar=a.idEmpresaCapacitacao,this.$refs.modalCerteza.show()},fecharCerteza:function(){this.$refs.modalCerteza.hide()},certeza:function(){this.$refs.modalCerteza.hide(),this.carregar("Removendo capacitação...");var a=this;axios.get("/capacitacao/"+a.empresa.idEmpresa+"/remover/"+this.deletar).then((function(t){"erro"!=t.data?(a.capacitacoes=t.data,a.$nextTick((function(){a.sucesso("Excluido com sucesso!")}))):a.$nextTick((function(){a.alerta("Erro ao excluir!")}))}))},preencher:function(a){this.editar=!0,this.empresaCapacitacao=Object.assign({},a),this.atual=this.empresaCapacitacao.capacitacao.idCapacitacao,this.$refs.myModal.show()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.empresaCapacitacao={idEmpresaCapacitacao:0,capacitacao:{tabela29:""},cargaHr:"",tipo:"SELECIONE",conteudoProgramatico:""},this.$refs.myModal.hide()},sucesso:function(a){this.mensagem=a,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),800)},abrir:function(){this.empresaCapacitacao={idEmpresaCapacitacao:0,capacitacao:{tabela29:""},cargaHr:"",tipo:"SELECIONE",conteudoProgramatico:""},this.$refs.myModal.show()},capacitacaoEmCapacitacoes:function(a){for(var t=0;t<this.capacitacoes.length;t++)if(this.capacitacoes[t].capacitacao.idCapacitacao===a.idCapacitacao)return!0;return!1}},mounted:function(){var a=this;axios.get("/capacitacao/"+a.empresa.idEmpresa).then((function(t){a.capacitacoes=t.data})),axios.get("/tabelas/capacitacao/list/").then((function(t){a.capacitacoesbanco=t.data,a.sucesso("Carregadas as capacitações")}))}},o=e(0),i=Object(o.a)(c,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[a.carregando?e("BlockUI",{attrs:{message:a.mensagem,html:a.html}}):a._e(),a._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box box-default"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped"},[e("tbody",[a._m(0),a._v(" "),a._l(a.capacitacoes,(function(t){return e("tr",[e("td",[a._v("\n                                "+a._s(t.idEmpresaCapacitacao)+"\n                            ")]),a._v(" "),t.capacitacao?e("td",[a._v("\n                                "+a._s(t.capacitacao.descricao)+"\n                            ")]):a._e(),a._v(" "),e("td",[a._v("\n                                "+a._s(t.tipo)+"\n                            ")]),a._v(" "),e("td",["PERIODICO"==t.tipo?e("span",[a._v("\n                                    "+a._s(t.intervalo)+"\n                                ")]):a._e(),a._v(" "),"PERIODICO"!=t.tipo?e("span",[a._v("\n                                    NA\n                                ")]):a._e()]),a._v(" "),e("td",[a._v("\n                                "+a._s(t.cargaHr)+"\n                            ")]),a._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return a.preencher(t)}}},[e("i",{staticClass:"fas fa-pencil-alt"})]),a._v(" "),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return a.excluir(t)}}},[e("i",{staticClass:"fas fa-trash"})])])])}))],2)])])])]),a._v(" "),e("div",{staticClass:"col-md-12 text-center"},[e("br"),a._v(" "),e("button",{staticClass:"btn btn-success",on:{click:function(t){return a.abrir()}}},[e("i",{staticClass:"fa fa-plus"}),a._v("\n            Adicionar")])]),a._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes da Capacitação","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:a.ok,cancel:function(t){return a.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("ID")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.idEmpresaCapacitacao,expression:"empresaCapacitacao.idEmpresaCapacitacao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.idEmpresaCapacitacao},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao,"idEmpresaCapacitacao",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Descricao")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao,expression:"empresaCapacitacao.capacitacao"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.empresaCapacitacao,"capacitacao",t.target.multiple?e:e[0])}}},a._l(a.capacitacoesbanco,(function(t){return a.capacitacaoEmCapacitacoes(t)&&t.idCapacitacao!==a.atual?a._e():e("option",{domProps:{value:t}},[a._v("\n                            "+a._s(t.descricao)+"\n                        ")])})),0)])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Tabela 29")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao.tabela29,expression:"empresaCapacitacao.capacitacao.tabela29"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.capacitacao.tabela29},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao.capacitacao,"tabela29",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Tipo")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao.tipo,expression:"empresaCapacitacao.capacitacao.tipo"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.capacitacao.tipo},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao.capacitacao,"tipo",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Grupo de Capacitação")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao.grupoCapacitacao,expression:"empresaCapacitacao.capacitacao.grupoCapacitacao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.capacitacao.grupoCapacitacao},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao.capacitacao,"grupoCapacitacao",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Capacitação Pai")]),a._v(" "),a.empresaCapacitacao.capacitacao.capacitacaoPai?e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao.capacitacaoPai.descricao,expression:"empresaCapacitacao.capacitacao.capacitacaoPai.descricao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.capacitacao.capacitacaoPai.descricao},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao.capacitacao.capacitacaoPai,"descricao",t.target.value)}}}):a._e(),a._v(" "),a.empresaCapacitacao.capacitacao.capacitacaoPai?a._e():e("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"N/A"}})])]),a._v(" "),e("div",{class:{"col-md-3":"PERIODICO"!=a.empresaCapacitacao.tipo,"col-md-2":"PERIODICO"==a.empresaCapacitacao.tipo}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Carga Horária")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.cargaHr,expression:"empresaCapacitacao.cargaHr"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.empresaCapacitacao.cargaHr},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao,"cargaHr",t.target.value)}}})])]),a._v(" "),e("div",{class:{"col-md-3":"PERIODICO"!=a.empresaCapacitacao.tipo,"col-md-2":"PERIODICO"==a.empresaCapacitacao.tipo}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Tipo")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.tipo,expression:"empresaCapacitacao.tipo"}],staticClass:"form-control",on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.empresaCapacitacao,"tipo",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"SELECIONE",disabled:""}},[a._v("--- Selecione ---")]),a._v(" "),e("option",{attrs:{value:"INICIAL"}},[a._v("Inicial")]),a._v(" "),e("option",{attrs:{value:"PERIODICO"}},[a._v("Periodico")]),a._v(" "),e("option",{attrs:{value:"EVENTUAL"}},[a._v("Eventual")]),a._v(" "),e("option",{attrs:{value:"OUTROS"}},[a._v("Outros")]),a._v(" "),a.empresaCapacitacao.capacitacao.capacitacaoPai?e("option",{attrs:{value:"RECICLAGEM"}},[a._v("Reciclagem")]):a._e()])])]),a._v(" "),"PERIODICO"==a.empresaCapacitacao.tipo?e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Intervalo (M)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.intervalo,expression:"empresaCapacitacao.intervalo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.empresaCapacitacao.intervalo},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao,"intervalo",t.target.value)}}})])]):a._e(),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("ID de Origem")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text"}})])]),a._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Descrição Completa")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.capacitacao.descricaoCompleta,expression:"empresaCapacitacao.capacitacao.descricaoCompleta"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.empresaCapacitacao.capacitacao.descricaoCompleta},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao.capacitacao,"descricaoCompleta",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Conteúdo Programático")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.empresaCapacitacao.conteudoProgramatico,expression:"empresaCapacitacao.conteudoProgramatico"}],staticClass:"form-control",domProps:{value:a.empresaCapacitacao.conteudoProgramatico},on:{input:function(t){t.target.composing||a.$set(a.empresaCapacitacao,"conteudoProgramatico",t.target.value)}}})])])])]),a._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[a._v("Tem certeza que deseja excluir esta capacitação?")])])]),a._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-default btn-lg",attrs:{type:"button","data-dismiss":"modal"},on:{click:a.fecharCerteza}},[e("i",{staticClass:"fa fa-close"}),a._v(" Não")])]),a._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:a.certeza}},[e("i",{staticClass:"fa fa-check"}),a._v(" Sim")])])])])],1)}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",[e("th",[a._v("ID")]),a._v(" "),e("th",[a._v("Capacitacao")]),a._v(" "),e("th",[a._v("Tipo")]),a._v(" "),e("th",[a._v("Intervalo (M)")]),a._v(" "),e("th",[a._v("Carga Horária")]),a._v(" "),e("th",{staticStyle:{width:"150px"}},[a._v("Ações")])])}],!1,null,"7d55ab63",null);t.default=i.exports}}]);