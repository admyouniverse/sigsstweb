(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{164:function(t,a,e){"use strict";function o(t,a,e,o,i,s,c,n){var r,d="function"==typeof t?t.options:t;if(a&&(d.render=a,d.staticRenderFns=e,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),c?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},d._ssrRegister=r):i&&(r=n?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),r)if(d.functional){d._injectStyles=r;var l=d.render;d.render=function(t,a){return r.call(a),l(t,a)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,r):[r]}return{exports:t,options:d}}e.d(a,"a",(function(){return o}))},177:function(t,a,e){var o=e(258);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(132)(o,i);o.locals&&(t.exports=o.locals)},257:function(t,a,e){"use strict";e(177)},258:function(t,a,e){(t.exports=e(131)(!1)).push([t.i,"th {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}",""])},26:function(t,a,e){"use strict";e.r(a);var o={data:function(){return{codificacoes:"",descricao:"",codigo:"",id:"",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando Codificações de Acidente de Trabalho cadastrados...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",ordem:!0,termo:"",selecionado:"codigo",idTabela:"#tabelaListagem"}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando nova Codificação de Acidente de Trabalho...");var t=this;""!=this.descricao||""!=this.grupo?axios.post("/tabelas/codificacao-acidente-de-trabalho",{descricao:t.descricao,codigo:t.codigo}).then((function(a){console.log(a.data),"existente"==a.data?(t.codigo="",t.erro=!0,t.alerta("Código de tipo de codificacao já existente, verifique!")):(t.codificacoes=a.data,t.descricao="",t.codigo="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")})))})):t.alerta("Preencha todos os campos")},atualizar:function(){var t=this;this.carregar("Atualizando nova Codificação de Acidente de Trabalho..."),""!=this.descricao?axios.post("/tabelas/codificacao-acidente-de-trabalho/update/"+this.id,{descricao:t.descricao,codigo:t.codigo}).then((function(a){"existente"==a.data?(t.codigo="",t.erro=!0,t.alerta("Código já existente, verifique!")):(t.codificacoes=a.data,t.descricao="",t.codigo="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))})):t.alerta("Preencha todos os campos")},preencher:function(t){this.descricao=t.descricao,this.codigo=t.codigoAcidente,this.id=t.idCodificacaoAcidente,this.editar=!0,this.abrir()},abrir:function(){$(this.idTabela).DataTable().destroy(),this.$refs.myModal.show()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.myModal.hide(),this.descricao="",this.editar=!1,this.id="",this.codigo=""},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide()},remover:function(t){this.deletar=t.idCodificacaoAcidente,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(t){t.preventDefault(),this.editar?this.atualizar():this.salvar()},certeza:function(){this.carregar("Removendo tipo de codificacao...");var t=this;axios.get("/tabelas/codificacao-acidente-de-trabalho/remover/"+this.deletar).then((function(a){"erro"!=a.data?(t.codificacoes=a.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("/tabelas/codificacao-acidente-de-trabalho/list").then((function(a){t.codificacoes=a.data,t.montou=!0,setTimeout((function(){t.$root.$emit("montou",[t.idTabela]),t.carregando=!1}),200)}))}},i=(e(257),e(164)),s=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:t.abrir}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Incluir")]),t._v(" "),t.montou?e("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.codificacoes,name:"codificacoes.xls"}},[e("i",{staticClass:"far fa-save"}),t._v(" Exportar\n            ")]):t._e()],1)]),t._v(" "),t.montou?e("div",{staticClass:"box box-info"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[t._m(0),t._v(" "),e("tbody",t._l(t.codificacoes,(function(a){return e("tr",[e("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"80px"}},[e("b",[t._v(t._s(a.codigoAcidente))])]),t._v(" "),e("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[t._v(t._s(a.descricao))]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.remover(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.preencher(a)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):t._e(),t._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes da codificação","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(a){return t.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Código")]),t._v(" "),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"#.#.##",expression:"'#.#.##'"},{name:"model",rawName:"v-model",value:t.codigo,expression:"codigo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.codigo},on:{input:function(a){a.target.composing||(t.codigo=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Observação")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.observacao,expression:"observacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.observacao},on:{input:function(a){a.target.composing||(t.observacao=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Descrição")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descricao,expression:"descricao"}],staticClass:"form-control",domProps:{value:t.descricao},on:{input:function(a){a.target.composing||(t.descricao=a.target.value)}}})])])])]),t._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[t._v("Tem certeza que deseja excluir esta Codificação de Acidente de Trabalho? ")])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-default btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[e("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[e("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("\n                            Código\n                        ")]),this._v(" "),a("th",[this._v("\n                            Descrição\n                        ")]),this._v(" "),a("th",{staticClass:"text-center no-sort"},[this._v("Ações")])])])}],!1,null,null,null);a.default=s.exports}}]);