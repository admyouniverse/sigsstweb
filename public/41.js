(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{0:function(t,e,a){"use strict";function i(t,e,a,i,s,o,r,n){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=n?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}a.d(e,"a",(function(){return i}))},157:function(t,e,a){var i=a(284);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(2)(i,s);i.locals&&(t.exports=i.locals)},283:function(t,e,a){"use strict";a(157)},284:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,"th{font-weight:400;cursor:pointer}th.selecionado{font-weight:800}",""])},67:function(t,e,a){"use strict";a.r(e);var i={props:["matriz"],data:function(){return{nivels:[],nivel:{idMatrizRiscoNivel:0,descricao:""},carregando:!0,mensagem:"Carregando itens cadastrados...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",idTabela:"#tabelaListagem"}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando novo nivel...");var t=this;axios.post("/nivel-matriz",{nivel:t.nivel,matriz:t.matriz}).then((function(e){t.nivels=e.data,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")}))}))},atualizar:function(){var t=this;this.carregar("Atualizando cidade..."),""==this.ibge||""==this.nome||""==this.uf?t.alerta("Preencha todos os campos!"):axios.post("/tabelas/cidades/update/"+this.id,{nome:t.nome,ibge:t.ibge,uf:t.uf}).then((function(e){"existente"==e.data?(t.ibge="",t.erro=!0,t.alerta("Código IBGE já existente, verifique!!")):(t.cidades=e.data,t.nome="",t.ibge="",t.uf="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))}))},abrir:function(){this.nivel={idMatrizRiscoNivel:0,descricao:""},this.$refs.myModal.show()},preencher:function(t){this.carregar("Carregando dados..."),this.nivel=t,this.$refs.myModal.show(),this.sucesso("Dados carregados!")},remover:function(t){this.deletar=t.idMatrizRiscoNivel,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},fechar:function(){this.editar=!1,this.nome="",this.ibge="",this.id="",this.uf="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$refs.modalCerteza.hide()},certeza:function(){this.carregar("Removendo nivel...");var t=this;axios.get("/nivel-matriz/remover/"+this.deletar).then((function(e){"erro"!=e.data?(t.nivels=e.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("/nivel-matriz/list").then((function(e){t.nivels=e.data,t.montou=!0,setTimeout((function(){t.carregando=!1}),200)}))}},s=(a(283),a(0)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover table-striped"},[a("tbody",[t._m(0),t._v(" "),t._l(t.nivels,(function(e){return e.matrizRisco.idMatrizRisco==t.matriz.idMatrizRisco?a("tr",[a("td",[t._v(t._s(e.idMatrizRiscoNivel))]),t._v(" "),a("td",[t._v(t._s(e.descricao))]),t._v(" "),a("td",[t._v(t._s(e.valor))]),t._v(" "),a("td",{style:"width: 150px; background-color:"+e.cor}),t._v(" "),a("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return t.remover(e)}}},[a("i",{staticClass:"fa fa-trash"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.preencher(e)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])]):t._e()}))],2)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-primary",on:{click:t.abrir}},[t._v("Adicionar")])])]),t._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"md",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Nivel da \n    ","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.salvar,cancel:function(e){return t.fechar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nivel.idMatrizRiscoNivel,expression:"nivel.idMatrizRiscoNivel"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.nivel.idMatrizRiscoNivel},on:{input:function(e){e.target.composing||t.$set(t.nivel,"idMatrizRiscoNivel",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Descrição")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nivel.descricao,expression:"nivel.descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nivel.descricao},on:{input:function(e){e.target.composing||t.$set(t.nivel,"descricao",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Valor")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nivel.valor,expression:"nivel.valor"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nivel.valor},on:{input:function(e){e.target.composing||t.$set(t.nivel,"valor",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Cor")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nivel.cor,expression:"nivel.cor"}],staticClass:"form-control",attrs:{type:"color",name:"cor"},domProps:{value:t.nivel.cor},on:{input:function(e){e.target.composing||t.$set(t.nivel,"cor",e.target.value)}}})])])])]),t._v(" "),a("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h3",[t._v("Tem certeza que deseja excluir este nível de risco?")])])]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[a("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[a("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Descrição")]),t._v(" "),a("th",[t._v("Valor")]),t._v(" "),a("th",[t._v("Cor")]),t._v(" "),a("th",{staticClass:"text-center no-sort"},[t._v("Ações")])])}],!1,null,null,null);e.default=o.exports}}]);