(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{164:function(t,e,s){"use strict";function a(t,e,s,a,o,i,n,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):o&&(c=r?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return a}))},207:function(t,e,s){var a=s(319);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(133)(a,o);a.locals&&(t.exports=a.locals)},318:function(t,e,s){"use strict";s(207)},319:function(t,e,s){(t.exports=s(132)(!1)).push([t.i,"th {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}",""])},70:function(t,e,s){"use strict";s.r(e);var a={props:["matriz"],data:function(){return{pesos:[],peso:{idPesoX:0,descricao:""},carregando:!0,mensagem:"Carregando itens cadastrados...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",idTabela:"#tabelaListagem"}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando novo peso...");var t=this;axios.post("/peso-x",{peso:t.peso,matriz:t.matriz}).then((function(e){t.pesos=e.data,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")}))}))},atualizar:function(){var t=this;this.carregar("Atualizando cidade..."),""==this.ibge||""==this.nome||""==this.uf?t.alerta("Preencha todos os campos!"):axios.post("/tabelas/cidades/update/"+this.id,{nome:t.nome,ibge:t.ibge,uf:t.uf}).then((function(e){"existente"==e.data?(t.ibge="",t.erro=!0,t.alerta("Código IBGE já existente, verifique!!")):(t.cidades=e.data,t.nome="",t.ibge="",t.uf="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))}))},abrir:function(){this.peso={idPesoX:0,descricao:""},this.$refs.myModal.show()},preencher:function(t){this.carregar("Carregando dados..."),this.peso=t,this.$refs.myModal.show(),this.sucesso("Dados carregados!")},remover:function(t){this.deletar=t.idPesoX,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},fechar:function(){this.editar=!1,this.nome="",this.ibge="",this.id="",this.uf="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$refs.modalCerteza.hide()},certeza:function(){this.carregar("Removendo peso...");var t=this;axios.get("/peso-x/remover/"+this.deletar).then((function(e){"erro"!=e.data?(t.pesos=e.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("/peso-x/list").then((function(e){t.pesos=e.data,t.montou=!0,setTimeout((function(){t.carregando=!1}),200)}))}},o=(s(318),s(164)),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-12"},[s("table",{staticClass:"table table-hover table-striped"},[s("tbody",[t._m(0),t._v(" "),t._l(t.pesos,(function(e){return e.matrizRisco.idMatrizRisco==t.matriz.idMatrizRisco?s("tr",[s("td",[t._v(t._s(e.idPesoX))]),t._v(" "),s("td",[t._v(t._s(e.descricao))]),t._v(" "),s("td",[t._v(t._s(e.peso))]),t._v(" "),s("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(s){return t.remover(e)}}},[s("i",{staticClass:"fa fa-trash"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(s){return t.preencher(e)}}},[s("i",{staticClass:"fas fa-pencil-alt"})])])]):t._e()}))],2)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-primary",on:{click:t.abrir}},[t._v("Adicionar")])])]),t._v(" "),s("b-modal",{ref:"myModal",attrs:{size:"md",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Peso X","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.salvar,cancel:function(e){return t.fechar()}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.peso.idPesoX,expression:"peso.idPesoX"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.peso.idPesoX},on:{input:function(e){e.target.composing||t.$set(t.peso,"idPesoX",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Descrição")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.peso.descricao,expression:"peso.descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.peso.descricao},on:{input:function(e){e.target.composing||t.$set(t.peso,"descricao",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Peso")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.peso.peso,expression:"peso.peso"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.peso.peso},on:{input:function(e){e.target.composing||t.$set(t.peso,"peso",e.target.value)}}})])])])]),t._v(" "),s("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 text-center"},[s("h3",[t._v("Tem certeza que deseja excluir este Peso X?")])])]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"col-md-6 text-center"},[s("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[s("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),s("div",{staticClass:"col-md-6 text-center"},[s("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[s("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("ID")]),this._v(" "),e("th",[this._v("Descrição")]),this._v(" "),e("th",[this._v("Peso")]),this._v(" "),e("th",{staticClass:"text-center no-sort"},[this._v("Ações")])])}],!1,null,null,null);e.default=i.exports}}]);