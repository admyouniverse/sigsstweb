(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{0:function(t,e,a){"use strict";function o(t,e,a,o,s,i,r,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=n?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}a.d(e,"a",(function(){return o}))},60:function(t,e,a){"use strict";a.r(e);var o={data:function(){return{cores:[],erro:!1,editar:!1,carregando:!0,mensagem:"Carregando cores cadastradas...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",ordem:!0,termo:"",selecionado:"codigo",idTabela:"#tabelaListagem",cor:{idCor:0,descricao:"",observacao:""}}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando nova cor...");var t=this;axios.post("/tabelas/epi/cor",{cor:t.cor}).then((function(e){t.cores=e.data,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")}))}))},atualizar:function(){var t=this;this.carregar("Atualizando nova cor..."),""!=this.nome||""!=this.codigo?axios.post("/tabelas/epi/cores/"+this.id,{nome:t.nome,codigo:t.codigo,grupo:t.grupo.idGrupoEpi}).then((function(e){console.log(e.data),"existente"==e.data?(t.codigo="",t.erro=!0,t.alerta("Código já existente, verifique!")):(t.cores=e.data,t.nome="",t.codigo="",t.grupo="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))})):t.alerta("Preencha todos os campos")},abrir:function(){$(this.idTabela).DataTable().destroy(),this.cor={idCor:0,descricao:"",observacao:""},this.$refs.myModal.show()},preencher:function(t){this.carregar("Carregando dados..."),console.log(t),this.cor=t,this.editar=!0,$(this.idTabela).DataTable().destroy(),this.$refs.myModal.show(),this.sucesso("Dados carregados!")},remover:function(t){this.deletar=t.idCor,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(t){t.preventDefault(),this.salvar()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.descricao="",this.codigo="",this.nome="",this.grupo="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide()},certeza:function(){this.carregar("Removendo cor...");var t=this;axios.get("/tabelas/epi/cor/remover/"+this.deletar).then((function(e){"erro"!=e.data?(t.cores=e.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/cores").then((function(e){t.cores=e.data,t.montou=!0,setTimeout((function(){t.$root.$emit("montou",[t.idTabela]),t.carregando=!1}),200)}))}},s=a(0),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[t.carregando?a("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:t.abrir}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Incluir")]),t._v(" "),t.montou?a("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.cores,name:"cores.xls"}},[a("i",{staticClass:"far fa-save"}),t._v(" Exportar\n            ")]):t._e()],1)]),t._v(" "),t.montou?a("div",{staticClass:"box box-info"},[a("div",{staticClass:"box-body table-responsive"},[a("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[t._m(0),t._v(" "),a("tbody",t._l(t.cores,(function(e){return a("tr",[a("td",{staticStyle:{"vertical-align":"middle",width:"100px"}},[a("b",[t._v(t._s(e.idCor))])]),t._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[t._v(t._s(e.descricao))]),t._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[t._v(t._s(e.observacao))]),t._v(" "),a("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return t.remover(e)}}},[a("i",{staticClass:"fa fa-trash"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.preencher(e)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):t._e(),t._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes da Cor EPI","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(e){return t.fechar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cor.idCor,expression:"cor.idCor"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.cor.idCor},on:{input:function(e){e.target.composing||t.$set(t.cor,"idCor",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Descrição")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cor.descricao,expression:"cor.descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cor.descricao},on:{input:function(e){e.target.composing||t.$set(t.cor,"descricao",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Observação")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cor.observacao,expression:"cor.observacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cor.observacao},on:{input:function(e){e.target.composing||t.$set(t.cor,"observacao",e.target.value)}}})])])])]),t._v(" "),a("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h3",[t._v("Tem certeza que deseja excluir esta cor?")])])]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[a("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[a("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("\n                            Id\n                        ")]),this._v(" "),e("th",[this._v("\n                            Descrição\n                        ")]),this._v(" "),e("th",[this._v("\n                            Observação\n                        ")]),this._v(" "),e("th",{staticClass:"text-center no-sort"},[this._v("Ações")])])])}],!1,null,null,null);e.default=i.exports}}]);