(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{0:function(e,t,a){"use strict";function o(e,t,a,o,s,i,r,n){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=n?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(e,t){return l.call(t),m(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return o}))},130:function(e,t,a){var o=a(229);"string"==typeof o&&(o=[[e.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(2)(o,s);o.locals&&(e.exports=o.locals)},228:function(e,t,a){"use strict";a(130)},229:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,"th{font-weight:400;cursor:pointer}th.selecionado{font-weight:800}",""])},27:function(e,t,a){"use strict";a.r(t);var o={data:function(){return{exames:"",nome:"",homemMin:"",homemMax:"",mulherMin:"",mulherMax:"",codigo:"",descricao:"",tabela27:"",observacao:"",sexo:"",grupo:"",unidade:"",id:"",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando exames cadastrados",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",destaque:"",coluna:"",ordem:!0,termo:"",selecionado:"id",idTabela:"#tabelaListagem"}},methods:{carregar:function(e){this.mensagem=e,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(e){this.mensagem=e,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),800)},alerta:function(e){this.mensagem=e,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando novo exame...");var e=this;""!=this.descricao||""!=this.codigo?axios.post("/tabelas/exames",{nome:e.nome,unidadeMedida:e.unidade,sexo:e.sexo,grupo:e.grupo,tabela27:e.tabela27,observacao:e.observacao,descricao:e.descricao,homemMax:e.homemMax,homemMin:e.homemMin,mulherMax:e.mulherMax,mulherMin:e.mulherMin}).then((function(t){console.log(t.data),"existente"==t.data?(e.codigo="",e.erro=!0,e.alerta("Código exame já existente, verifique!")):(e.exames=t.data,e.sexo="",e.cuidado="",e.grupo="",e.nome="",e.tabela27="",e.observacao="",e.validade="",e.erro=!1,e.homemMax="",e.homemMin="",e.mulherMax="",e.mulherMin="",e.$nextTick((function(){e.fechar(),e.sucesso("Salvo com sucesso!")})))})):e.alerta("Preencha todos os campos")},atualizar:function(){var e=this;this.carregar("Atualizando novo exame..."),""!=this.descricao?axios.post("/tabelas/exames/update/"+this.id,{nome:e.nome,unidadeMedida:e.unidade,sexo:e.sexo,grupo:e.grupo,tabela27:e.tabela27,observacao:e.observacao,descricao:e.descricao,homemMax:e.homemMax,homemMin:e.homemMin,mulherMax:e.mulherMax,mulherMin:e.mulherMin}).then((function(t){console.log(t.data),"existente"==t.data?(e.codigo="",e.erro=!0,e.alerta("Código exame já existente, verifique!")):(e.exames=t.data,e.sexo="",e.cuidado="",e.grupo="",e.nome="",e.tabela27="",e.observacao="",e.validade="",e.erro=!1,e.homemMax="",e.homemMin="",e.mulherMax="",e.mulherMin="",e.$nextTick((function(){e.fechar(),e.sucesso("Atualizado com sucesso!")})))})):e.alerta("Preencha todos os campos")},abrir:function(){this.$refs.myModal.show(),$(this.idTabela).DataTable().destroy()},preencher:function(e){this.carregar("Carregando dados..."),this.id=e.idExame,this.sexo=e.sexo,this.descricao=e.descricao,this.grupo=e.grupoExame,this.nome=e.nomeExame,this.tabela27=e.tabela27,this.observacao=e.observacao,this.unidade=e.unidadeMedida,this.homemMax=e.referenciaMaxMasculino,this.homemMin=e.referenciaMinMasculino,this.mulherMax=e.referenciaMaxFeminino,this.mulherMin=e.referenciaMinFeminino,this.editar=!0,this.abrir(),this.sucesso("Dados carregados!")},remover:function(e){this.deletar=e.idCid,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(e){e.preventDefault(),this.editar?this.atualizar():this.salvar()},fechar:function(){this.editar=!1,this.id="",this.descricao="",this.codigo="",this.$root.$emit("montou",[this.idTabela]),this.$refs.myModal.hide()},fecharCerteza:function(){this.$refs.modalCerteza.hide(),this.$root.$emit("montou",[this.idTabela])},certeza:function(){this.carregar("Removendo CID...");var e=this;axios.get("/tabelas/cid/remover/"+this.deletar).then((function(t){"erro"!=t.data?(e.cids=t.data,e.$nextTick((function(){e.fecharCerteza(),e.sucesso("Excluido com sucesso!")}))):e.$nextTick((function(){e.fecharCerteza(),e.alerta("Erro ao excluir!")}))}))}},mounted:function(){var e=this;axios.get("/tabelas/exames/list").then((function(t){e.exames=t.data,e.montou=!0,setTimeout((function(){e.carregando=!1,e.$root.$emit("montou",[e.idTabela])}),200)}))}},s=(a(228),a(0)),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[e.carregando?a("BlockUI",{attrs:{message:e.mensagem,html:e.html}}):e._e(),e._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:e.abrir}},[a("i",{staticClass:"fa fa-plus"}),e._v(" Incluir")]),e._v(" "),e.montou?a("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.exames,name:"exames.xls"}},[a("i",{staticClass:"far fa-save"}),e._v(" Exportar\n            ")]):e._e()],1)]),e._v(" "),e.montou?a("div",{staticClass:"box box-info"},[a("div",{staticClass:"box-body table-responsive"},[a("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[e._m(0),e._v(" "),a("tbody",e._l(e.exames,(function(t){return a("tr",[a("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"80px"}},[a("b",[e._v(e._s(t.idExame))])]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.nomeExame))]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.grupoExame))]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.tabela27))]),e._v(" "),a("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return e.remover(t)}}},[a("i",{staticClass:"fa fa-trash"})]),e._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return e.preencher(t)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):e._e(),e._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do Exame","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:e.ok,cancel:function(t){return e.fechar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Tabela 27")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tabela27,expression:"tabela27"}],staticClass:"form-control",domProps:{value:e.tabela27},on:{input:function(t){t.target.composing||(e.tabela27=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Nome")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],staticClass:"form-control",domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Unidade de Medida")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.unidade,expression:"unidade"}],staticClass:"form-control",domProps:{value:e.unidade},on:{input:function(t){t.target.composing||(e.unidade=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Descrição do Exame")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.descricao,expression:"descricao"}],staticClass:"form-control",domProps:{value:e.descricao},on:{input:function(t){t.target.composing||(e.descricao=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Sexo")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.sexo,expression:"sexo"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sexo=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[e._v("Selecione")]),e._v(" "),a("option",{attrs:{value:"MASCULINO"}},[e._v("Masculino")]),e._v(" "),a("option",{attrs:{value:"FEMININO"}},[e._v("Feminino")]),e._v(" "),a("option",{attrs:{value:"AMBOS"}},[e._v("Ambos")])])])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Grupo")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.grupo,expression:"grupo"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.grupo=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"URINA"}},[e._v("Urina")]),e._v(" "),a("option",{attrs:{value:"SANGUE"}},[e._v("Sangue")]),e._v(" "),a("option",{attrs:{value:"APARELHO"}},[e._v("Aparelho")]),e._v(" "),a("option",{attrs:{value:"FEZES"}},[e._v("Fezes")]),e._v(" "),a("option",{attrs:{value:"IMAGEM"}},[e._v("Imagem")]),e._v(" "),a("option",{attrs:{value:"MATERIAL COLETADO"}},[e._v("Material Coletado")])])])]),e._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("H. Máximo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.homemMax,expression:"homemMax"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.homemMax},on:{input:function(t){t.target.composing||(e.homemMax=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("H. Minimo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.homemMin,expression:"homemMin"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.homemMin},on:{input:function(t){t.target.composing||(e.homemMin=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("M. Máximo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mulherMax,expression:"mulherMax"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.mulherMax},on:{input:function(t){t.target.composing||(e.mulherMax=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("M. Minimo")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mulherMin,expression:"mulherMin"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.mulherMin},on:{input:function(t){t.target.composing||(e.mulherMin=t.target.value)}}})])])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Observações")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.observacao,expression:"observacao"}],staticClass:"form-control",staticStyle:{height:"110px"},domProps:{value:e.observacao},on:{input:function(t){t.target.composing||(e.observacao=t.target.value)}}})])])])]),e._v(" "),a("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h3",[e._v("Tem certeza que deseja excluir este CID?")])])]),e._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:e.fecharCerteza}},[a("i",{staticClass:"fa fa-close"}),e._v(" Não")])]),e._v(" "),a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:e.certeza}},[a("i",{staticClass:"fa fa-check"}),e._v(" Sim")])])])])],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("\n                            ID\n                        ")]),e._v(" "),a("th",[e._v("\n                            Nome\n                        ")]),e._v(" "),a("th",[e._v("\n                            Grupo\n                        ")]),e._v(" "),a("th",[e._v("\n                            Tabela 27\n                        ")]),e._v(" "),a("th",{staticClass:"text-center no-sort"},[e._v("Ações")])])])}],!1,null,null,null);t.default=i.exports}}]);