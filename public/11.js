(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(t,a,e){"use strict";function o(t,a,e,o,s,i,n,r){var c,l="function"==typeof t?t.options:t;if(a&&(l.render=a,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,a){return c.call(a),d(t,a)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}e.d(a,"a",(function(){return o}))},174:function(t,a,e){var o=e(252);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(133)(o,s);o.locals&&(t.exports=o.locals)},23:function(t,a,e){"use strict";e.r(a);var o={data:function(){return{cidades:"",nome:"",ibge:"",uf:"",id:"",estado:"RS",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando itens cadastrados...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",ordem:!0,termo:"",selecionado:"codigo",idTabela:"#tabelaListagem"}},methods:{carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),800)},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var a=this;setTimeout((function(){a.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando nova cidade...");var t=this;""==this.ibge||""==this.nome||""==this.uf?t.alerta("Preencha todos os campos!"):axios.post("/tabelas/cidades",{nome:t.nome,ibge:t.ibge,uf:t.uf}).then((function(a){console.log(a.data),"existente"==a.data?(t.ibge="",t.erro=!0,t.alerta("Código IBGE já existente, verifique!")):(t.cidades=a.data,t.nome="",t.ibge="",t.uf="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")})))}))},atualizar:function(){var t=this;this.carregar("Atualizando cidade..."),""==this.ibge||""==this.nome||""==this.uf?t.alerta("Preencha todos os campos!"):axios.post("/tabelas/cidades/update/"+this.id,{nome:t.nome,ibge:t.ibge,uf:t.uf}).then((function(a){"existente"==a.data?(t.ibge="",t.erro=!0,t.alerta("Código IBGE já existente, verifique!!")):(t.cidades=a.data,t.nome="",t.ibge="",t.uf="",t.erro=!1,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))}))},abrir:function(){$(this.idTabela).DataTable().destroy(),$("#cidadeTable").DataTable().destroy(),this.$refs.myModal.show()},preencher:function(t){this.carregar("Carregando dados..."),this.nome=t.nomeCidade,this.ibge=t.codigoCidade,this.id=t.idCidade,this.uf=t.uf,this.editar=!0,this.abrir(),this.sucesso("Dados carregados!")},remover:function(t){this.deletar=t.idCidade,$("#cidadeTable").DataTable().destroy(),this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(t){t.preventDefault(),this.editar?this.atualizar():this.salvar()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.nome="",this.ibge="",this.id="",this.uf="",this.$root.$emit("montou",["#cidadeTable"]),this.$refs.myModal.hide()},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide(),this.$root.$emit("montou",["#cidadeTable"])},certeza:function(){this.carregar("Removendo cidade...");var t=this;axios.get("/tabelas/cidades/remover/"+this.deletar).then((function(a){"erro"!=a.data?(t.cidades=a.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))}},mounted:function(){var t=this;axios.get("/tabelas/cidades/list").then((function(a){t.cidades=a.data,t.montou=!0,setTimeout((function(){t.$root.$emit("montou",[t.idTabela]),t.carregando=!1}),200),t.$nextTick((function(){t.$root.$emit("montou",["#cidadeTable"])}))}))}},s=(e(251),e(164)),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content"},[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:t.abrir}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Incluir")]),t._v(" "),t.montou?e("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.cidades,name:"cidades.xls"}},[e("i",{staticClass:"far fa-save"}),t._v(" Exportar\n            ")]):t._e()],1),t._v(" "),this.busca?e("div",{staticClass:"col-md-6 text-right"},[e("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.voltar}},[e("i",{staticClass:"fa fa-undo"}),t._v(" Voltar")])]):t._e()]),t._v(" "),t.montou?e("div",{staticClass:"box box-info"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"cidadeTable"}},[e("thead",[e("tr",[e("th",[t._v("\n                            Código\n                            \n                            \n                        ")]),t._v(" "),e("th",{class:{selecionado:"nome"==this.coluna},on:{click:function(a){return t.ordenar("nome")}}},[t._v("\n                            Nome\n                            \n                            \n                        ")]),t._v(" "),e("th",{class:{selecionado:"estado"==this.coluna},on:{click:function(a){return t.ordenar("estado")}}},[t._v("\n                            Estado\n                            "),"estado"==this.coluna&&this.ordem?e("i",{staticClass:"fa fa-sort-alpha-asc"}):t._e(),t._v(" "),"estado"!=this.coluna||this.ordem?t._e():e("i",{staticClass:"fa fa-sort-alpha-desc"})]),t._v(" "),e("th",{staticClass:"text-center no-sort"},[t._v("Ações")])])]),t._v(" "),e("tbody",t._l(t.cidades,(function(a){return e("tr",[e("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"80px"}},[e("b",[t._v(t._s(a.codigoCidade))])]),t._v(" "),e("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[t._v(t._s(a.nomeCidade))]),t._v(" "),e("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[t._v(t._s(a.uf))]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return t.remover(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.preencher(a)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])]),t._v(" "),this.busca?e("div",{staticClass:"box-footer clearfix"},[e("div",{staticClass:"col-md-6 no-padding text-right pull-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.voltar}},[e("i",{staticClass:"fa fa-undo"}),t._v(" Voltar")])])]):t._e()]):t._e(),t._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes da Cidade","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(a){return t.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Nome")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nome},on:{input:function(a){a.target.composing||(t.nome=a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Estado")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.uf,expression:"uf"}],staticClass:"form-control",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.uf=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"AC"}},[t._v("Acre - AC")]),t._v(" "),e("option",{attrs:{value:"AL"}},[t._v("Alagoas - AL")]),t._v(" "),e("option",{attrs:{value:"AP"}},[t._v("Amapá - AP")]),t._v(" "),e("option",{attrs:{value:"AM"}},[t._v("Amazonas - AM")]),t._v(" "),e("option",{attrs:{value:"BA"}},[t._v("Bahia - BA")]),t._v(" "),e("option",{attrs:{value:"CE"}},[t._v("Ceará - CE")]),t._v(" "),e("option",{attrs:{value:"DF"}},[t._v("Distrito Federal - DF")]),t._v(" "),e("option",{attrs:{value:"ES"}},[t._v("Espírito Santo - ES")]),t._v(" "),e("option",{attrs:{value:"GO"}},[t._v("Goiás - GO")]),t._v(" "),e("option",{attrs:{value:"MA"}},[t._v("Maranhão - MA")]),t._v(" "),e("option",{attrs:{value:"MT"}},[t._v("Mato Grosso - MT")]),t._v(" "),e("option",{attrs:{value:"MS"}},[t._v("Mato Grosso do Sul - MS")]),t._v(" "),e("option",{attrs:{value:"MG"}},[t._v("Minas Gerais - MG")]),t._v(" "),e("option",{attrs:{value:"PA"}},[t._v("Pará - PA")]),t._v(" "),e("option",{attrs:{value:"PB"}},[t._v("Paraíba - PB")]),t._v(" "),e("option",{attrs:{value:"PR"}},[t._v("Paraná - PR")]),t._v(" "),e("option",{attrs:{value:"PE"}},[t._v("Pernambuco - PE")]),t._v(" "),e("option",{attrs:{value:"PI"}},[t._v("Piauí - PI")]),t._v(" "),e("option",{attrs:{value:"RJ"}},[t._v("Rio de Janeiro - RJ")]),t._v(" "),e("option",{attrs:{value:"RN"}},[t._v("Rio Grande do Norte - RN")]),t._v(" "),e("option",{attrs:{value:"RS"}},[t._v("Rio Grande do Sul - RS")]),t._v(" "),e("option",{attrs:{value:"RO"}},[t._v("Rondônia - RO")]),t._v(" "),e("option",{attrs:{value:"RR"}},[t._v("Roraima - RR")]),t._v(" "),e("option",{attrs:{value:"SC"}},[t._v("Santa Catarina - SC")]),t._v(" "),e("option",{attrs:{value:"SP"}},[t._v("São Paulo - SP")]),t._v(" "),e("option",{attrs:{value:"SE"}},[t._v("Sergipe - SE")]),t._v(" "),e("option",{attrs:{value:"TO"}},[t._v("Tocantins - TO")])])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("IBGE")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ibge,expression:"ibge"}],staticClass:"form-control",attrs:{type:"number",name:""},domProps:{value:t.ibge},on:{input:function(a){a.target.composing||(t.ibge=a.target.value)}}})])])])]),t._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[t._v("Tem certeza que deseja excluir esta cidade?")])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[e("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[e("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[],!1,null,null,null);a.default=i.exports},251:function(t,a,e){"use strict";e(174)},252:function(t,a,e){(t.exports=e(132)(!1)).push([t.i,"th {\n  font-weight: 400;\n  cursor: pointer;\n}\nth.selecionado {\n  font-weight: 800;\n}",""])}}]);