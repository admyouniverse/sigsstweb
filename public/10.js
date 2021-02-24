(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,a,e){"use strict";function s(t,a,e,s,i,o,r,c){var n,d="function"==typeof t?t.options:t;if(a&&(d.render=a,d.staticRenderFns=e,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),r?(n=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=n):i&&(n=c?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),n)if(d.functional){d._injectStyles=n;var l=d.render;d.render=function(t,a){return n.call(a),l(t,a)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,n):[n]}return{exports:t,options:d}}e.d(a,"a",(function(){return s}))},124:function(t,a,e){var s=e(217);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(2)(s,i);s.locals&&(t.exports=s.locals)},20:function(t,a,e){"use strict";e.r(a);var s={data:function(){return e="#cidTabela",(a="idTabela")in(t={cids:"",descricao:"",codigo:"",id:"",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando itens cadastrados",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",ordem:!0,termo:"",selecionado:"codigo",idTabela:"#tabelaListagem"})?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t;var t,a,e},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando novo CID...");var t=this;""!=this.descricao||""!=this.codigo?axios.post("/tabelas/cid",{descricao:t.descricao,codigo:t.codigo}).then((function(a){console.log(a.data),"existente"==a.data?(t.codigo="",t.erro=!0,t.alerta("Código CID já existente, verifique!")):(t.cids=a.data,t.descricao="",t.codigo="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")})))})):t.alerta("Preencha todos os campos")},atualizar:function(){var t=this;this.carregar("Atualizando novo CID..."),""!=this.descricao||""!=this.codigo?axios.post("/tabelas/cid/update/"+this.id,{descricao:t.descricao,codigo:t.codigo}).then((function(a){console.log(a.data),"existente"==a.data?(t.codigo="",t.erro=!0,t.alerta("Código CID já existente, verifique!")):(t.cids=a.data,t.descricao="",t.codigo="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))})):t.alerta("Preencha todos os campos")},abrir:function(){$(this.idTabela).DataTable().destroy(),this.$refs.myModal.show(),$(this.idTabela).DataTable().destroy()},preencher:function(t){this.carregar("Carregando dados..."),this.descricao=t.descricao,this.codigo=t.codigoCid,this.id=t.idCid,this.editar=!0,this.abrir(),this.sucesso("Dados carregados!")},remover:function(t){this.deletar=t.idCid,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy(),$(this.idTabela).DataTable().destroy()},ok:function(t){t.preventDefault(),this.editar?this.atualizar():this.salvar()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.id="",this.descricao="",this.codigo="",this.$root.$emit("montou",[this.idTabela]),this.$refs.myModal.hide()},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide(),this.$root.$emit("montou",[this.idTabela])},certeza:function(){this.carregar("Removendo CID...");var t=this;axios.get("/tabelas/cid/remover/"+this.deletar).then((function(a){"erro"!=a.data?(t.cids=a.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("/tabelas/cid/list").then((function(a){t.cids=a.data,t.montou=!0,setTimeout((function(){t.carregando=!1,t.$root.$emit("montou",[t.idTabela])}),200)}))}},i=(e(216),e(0)),o=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:t.abrir}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Incluir")]),t._v(" "),t.montou?e("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.cids,name:"cids.xls"}},[e("i",{staticClass:"far fa-save"}),t._v(" Exportar\n            ")]):t._e()],1)]),t._v(" "),t.montou?e("div",{staticClass:"box box-info"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"cidTabela"}},[t._m(0),t._v(" "),e("tbody",t._l(t.cids,(function(a){return e("tr",[e("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"80px"}},[e("b",[t._v(t._s(a.codigoCid))])]),t._v(" "),e("td",{staticStyle:{"text-align":"justify"}},[t._v(t._s(a.descricao))]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.remover(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.preencher(a)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])]),t._v(" "),this.busca?e("div",{staticClass:"box-footer clearfix"},[e("div",{staticClass:"col-md-6 no-padding text-right pull-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.voltar}},[e("i",{staticClass:"fa fa-undo"}),t._v(" Voltar")])])]):t._e()]):t._e(),t._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do CID","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(a){return t.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group",class:{"has-error":t.erro}},[e("label",{attrs:{for:""}},[t._v("Código")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.codigo,expression:"codigo"}],staticClass:"form-control",attrs:{type:"text",name:"cid"},domProps:{value:t.codigo},on:{input:function(a){a.target.composing||(t.codigo=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Descrição")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descricao,expression:"descricao"}],staticClass:"form-control",staticStyle:{height:"120px"},attrs:{name:"descricao"},domProps:{value:t.descricao},on:{input:function(a){a.target.composing||(t.descricao=a.target.value)}}})])])])]),t._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[t._v("Tem certeza que deseja excluir este CID?")])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[e("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[e("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("\n                            Código\n\n                        ")]),this._v(" "),a("th",[this._v("\n                            Descrição\n\n                        ")]),this._v(" "),a("th",{staticClass:"text-center no-sort"},[this._v("Ações")])])])}],!1,null,null,null);a.default=o.exports},216:function(t,a,e){"use strict";e(124)},217:function(t,a,e){(t.exports=e(1)(!1)).push([t.i,"th{font-weight:400;cursor:pointer}th.selecionado{font-weight:800}",""])}}]);