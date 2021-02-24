(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{0:function(e,t,a){"use strict";function o(e,t,a,o,s,r,n,i){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=a,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),n?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=c):s&&(c=i?function(){s.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:d}}a.d(t,"a",(function(){return o}))},61:function(e,t,a){"use strict";a.r(t);var o={props:["empresa"],data:function(){return{fornecedores:[],erro:!1,editar:!1,carregando:!0,mensagem:"Carregando fornecedores cadastradas...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",cep:"",ordem:!0,cidades:[],estado:{},termo:"",selecionado:"codigo",idTabela:"#tabelaListagem",estados:[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amapá",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Ceará",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Espírito Santo",sigla:"ES"},{nome:"Goiás",sigla:"GO"},{nome:"Maranhão",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Pará",sigla:"PA"},{nome:"Paraíba",sigla:"PB"},{nome:"Paraná",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piauí",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rondônia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"São Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}],fornecedor:{idFornecedor:0,cnpj:"",nomeFantasia:"",razaoSocial:"",endereco:"",cidade:{},telefone:"",obs:""}}},methods:{carregarCidades:function(){var e=this;this.carregando=!0,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.mensagem="Buscando cidades...",axios.get("/tabelas/cidades/buscar/estado/"+e.estado).then((function(t){e.cidades=t.data,e.carregando=!1}))},buscaCep:function(){var e=this;this.carregando=!0,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.mensagem="Aguarde... Buscando CEP.",/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.cep)?axios.get("https://viacep.com.br/ws/"+this.cep.replace(/\D/g,"")+"/json").then((function(t){if(1!=t.data.erro){var a=t.data.ibge;if(t.data.logradouro&&(e.fornecedor.endereco=t.data.logradouro),t.data.uf)if(e.estado!=t.data.uf)e.estado=t.data.uf,axios.get("/tabelas/cidades/buscar/estado/"+e.estado).then((function(t){e.cidades=t.data;var o=e.cidades.filter((function(e){return e.codigoCidade==a}));e.fornecedor.cidade=o[0],e.html="<i class='fa fa-check fa-2x'></i>",e.mensagem="Sucesso, endereço encontrado!",e.carregando=!1}));else{var o=e.cidades.filter((function(e){return e.codigoCidade==a}));e.fornecedor.cidade=o[0],e.html="<i class='fa fa-check fa-2x'></i>",e.mensagem="Sucesso, endereço encontrado!",e.carregando=!1}}else e.erro=!0,e.mensagem="CEP inválido!",e.carregando=!1})).catch((function(e){})):""==!this.cep&&(e.erro=!0,$("#cep").focus(),e.mensagem="CEP inválido!",e.carregando=!1)},carregar:function(e){this.mensagem=e,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(e){this.mensagem=e,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),800)},alerta:function(e){this.mensagem=e,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando nova fornecedor...");var e=this;axios.post("/fornecedores",{fornecedor:e.fornecedor}).then((function(t){axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/fornecedores").then((function(t){e.fornecedores=t.data,e.$nextTick((function(){e.fechar(),e.sucesso("Salvo com sucesso!")}))}))}))},atualizar:function(){var e=this;this.carregar("Atualizando nova fornecedor..."),""!=this.nome||""!=this.codigo?axios.post("/fornecedores/"+this.id,{nome:e.nome,codigo:e.codigo,grupo:e.grupo.idGrupoEpi}).then((function(t){console.log(t.data),"existente"==t.data?(e.codigo="",e.erro=!0,e.alerta("Código já existente, verifique!")):(e.fornecedores=t.data,e.nome="",e.codigo="",e.grupo="",e.erro=!1,e.$nextTick((function(){e.fechar(),e.sucesso("Atualizado com sucesso!")})))})):e.alerta("Preencha todos os campos")},abrir:function(){$(this.idTabela).DataTable().destroy(),this.fornecedor={idFornecedor:0,descricao:"",observacao:""},this.$refs.myModal.show()},preencher:function(e){this.carregar("Carregando dados..."),console.log(e);var t=this;this.fornecedor=e,this.editar=!0,this.fornecedor.cidade&&(this.estado=this.fornecedor.cidade.uf,axios.get("/tabelas/cidades/buscar/estado/"+t.estado).then((function(e){t.cidades=e.data,t.carregando=!1}))),$(this.idTabela).DataTable().destroy(),this.$refs.myModal.show(),this.sucesso("Dados carregados!")},remover:function(e){this.deletar=e.idFornecedor,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(e){e.preventDefault(),this.salvar()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.descricao="",this.codigo="",this.nome="",this.grupo="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide()},certeza:function(){this.carregar("Removendo fornecedor...");var e=this;axios.get("/fornecedores/remover/"+this.deletar).then((function(t){"erro"!=t.data?axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/fornecedores").then((function(t){e.fornecedores=t.data,e.$nextTick((function(){e.fecharCerteza(),e.sucesso("Removido com sucesso!")}))})):e.$nextTick((function(){e.fecharCerteza(),e.alerta("Erro ao excluir!")}))}))}},mounted:function(){var e=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/fornecedores").then((function(t){e.fornecedores=t.data,e.montou=!0,setTimeout((function(){e.$root.$emit("montou",[e.idTabela]),e.carregando=!1}),200)}))}},s=a(0),r=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content"},[e.carregando?a("BlockUI",{attrs:{message:e.mensagem,html:e.html}}):e._e(),e._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:e.abrir}},[a("i",{staticClass:"fa fa-plus"}),e._v(" Incluir")]),e._v(" "),e.montou?a("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.fornecedores,name:"fornecedores.xls"}},[a("i",{staticClass:"far fa-save"}),e._v(" Exportar\n            ")]):e._e()],1)]),e._v(" "),e.montou?a("div",{staticClass:"box box-info"},[a("div",{staticClass:"box-body table-responsive"},[a("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[e._m(0),e._v(" "),a("tbody",e._l(e.fornecedores,(function(t){return a("tr",[a("td",{staticStyle:{"vertical-align":"middle",width:"100px"}},[a("b",[e._v(e._s(t.cnpj))])]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.nomeFantasia))]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.razaoSocial))]),e._v(" "),a("td",{staticStyle:{"text-align":"justify"}},[e._v(e._s(t.cidade.nomeCidade)+" | "+e._s(t.cidade.uf))]),e._v(" "),a("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return e.remover(t)}}},[a("i",{staticClass:"fa fa-trash"})]),e._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return e.preencher(t)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):e._e(),e._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes da Fornecedor EPI","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:e.ok,cancel:function(t){return e.fechar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-1"},[a("div",{staticClass:"form-group"},[a("label",[e._v("ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.idFornecedor,expression:"fornecedor.idFornecedor"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fornecedor.idFornecedor},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"idFornecedor",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[e._v("CNPJ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.cnpj,expression:"fornecedor.cnpj"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fornecedor.cnpj},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"cnpj",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Razao Social")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.razaoSocial,expression:"fornecedor.razaoSocial"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fornecedor.razaoSocial},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"razaoSocial",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Nome Fantasia")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.nomeFantasia,expression:"fornecedor.nomeFantasia"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fornecedor.nomeFantasia},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"nomeFantasia",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"checkout-company"}},[e._v("CEP")]),e._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.cep,expression:"cep"},{name:"mask",rawName:"v-mask",value:"##.###-###",expression:"'##.###-###'"}],staticClass:"form-control",attrs:{autocomplete:"nope",required:"",name:"cep",type:"text",id:"cep"},domProps:{value:e.cep},on:{input:function(t){t.target.composing||(e.cep=t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:e.buscaCep}},[a("i",{staticClass:"fa fa-search"})])])]),e._v(" "),e.erro?a("div",{staticClass:"form-control-feedback"},[e._v("CEP inválido\n                    ")]):e._e()])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"account-zip"}},[e._v("Endereço")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.endereco,expression:"fornecedor.endereco"}],staticClass:"form-control",attrs:{autocomplete:"nope",required:"",name:"rua",type:"text",required:""},domProps:{value:e.fornecedor.endereco},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"endereco",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"account-city"}},[e._v("Cidade")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fornecedor.cidade,expression:"fornecedor.cidade"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fornecedor,"cidade",t.target.multiple?a:a[0])}}},e._l(e.cidades,(function(t){return a("option",{domProps:{value:t}},[e._v("\n                            "+e._s(t.nomeCidade))])})),0)])]),e._v(" "),a("div",{staticClass:"col-sm-1"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"checkout-city"}},[e._v("Estado")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.estado,expression:"estado"}],staticClass:"form-control",attrs:{required:"",id:"account-country"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.estado=t.target.multiple?a:a[0]},e.carregarCidades]}},e._l(e.estados,(function(t){return a("option",{domProps:{value:t.sigla}},[e._v("\n                            "+e._s(t.sigla))])})),0)])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Telefone")]),e._v(" "),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"(##) ####-####",expression:"'(##) ####-####'"},{name:"model",rawName:"v-model",value:e.fornecedor.telefone,expression:"fornecedor.telefone"}],staticClass:"form-control",domProps:{value:e.fornecedor.telefone},on:{input:function(t){t.target.composing||e.$set(e.fornecedor,"telefone",t.target.value)}}})])])])]),e._v(" "),a("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h3",[e._v("Tem certeza que deseja excluir esta fornecedor?")])])]),e._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:e.fecharCerteza}},[a("i",{staticClass:"fa fa-close"}),e._v(" Não")])]),e._v(" "),a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:e.certeza}},[a("i",{staticClass:"fa fa-check"}),e._v(" Sim")])])])])],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("CNPJ")]),e._v(" "),a("th",{attrs:{width:"180px"}},[e._v("Nome Fantasia")]),e._v(" "),a("th",[e._v("Razão Social")]),e._v(" "),a("th",{attrs:{width:"150px"}},[e._v("Cidade")]),e._v(" "),a("th",{staticClass:"text-center no-sort"},[e._v("Ações")])])])}],!1,null,null,null);t.default=r.exports}}]);