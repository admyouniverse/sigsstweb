(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{0:function(a,t,e){"use strict";function i(a,t,e,i,s,o,n,c){var r,l="function"==typeof a?a.options:a;if(t&&(l.render=t,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),n?(r=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),s&&s.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(n)},l._ssrRegister=r):s&&(r=c?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),r)if(l.functional){l._injectStyles=r;var d=l.render;l.render=function(a,t){return r.call(t),d(a,t)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,r):[r]}return{exports:a,options:l}}e.d(t,"a",(function(){return i}))},126:function(a,t,e){var i=e(221);"string"==typeof i&&(i=[[a.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(2)(i,s);i.locals&&(a.exports=i.locals)},22:function(a,t,e){"use strict";e.r(t);var i={data:function(){return{clinicas:"",clinica:{idClinica:0,nomeClinica:""},cidades:"",estado:"",descricao:"",codigo:"",id:"",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando clinicas cadastradas",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",coluna:"",ordem:!0,termo:"",selecionado:"codigo",idTabela:"#tabelaListagem",estados:[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amapá",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Ceará",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Espírito Santo",sigla:"ES"},{nome:"Goiás",sigla:"GO"},{nome:"Maranhão",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Pará",sigla:"PA"},{nome:"Paraíba",sigla:"PB"},{nome:"Paraná",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piauí",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rondônia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"São Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}]}},methods:{carregar:function(a){this.mensagem=a,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},buscaCep:function(){var a=this;this.carregando=!0,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.mensagem="Aguarde... Buscando CEP.",/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(this.clinica.cep)?axios.get("https://viacep.com.br/ws/"+this.clinica.cep.replace(/\D/g,"")+"/json").then((function(t){if(1!=t.data.erro){a.erro=!1;var e=t.data.ibge;if(t.data.logradouro&&(a.clinica.endereco=t.data.logradouro),t.data.bairro&&(a.clinica.bairro=t.data.bairro),t.data.uf)if(a.estado!=t.data.uf)a.estado=t.data.uf,console.log(e),axios.get("/tabelas/cidades/buscar/estado/"+a.estado).then((function(t){a.cidades=t.data;var i=a.cidades.filter((function(a){return a.codigoCidade==e}));a.clinica.cidade=i[0],a.html="<i class='fa fa-check fa-2x'></i>",a.mensagem="Sucesso, endereço encontrado!",a.carregando=!1}));else{var i=a.cidades.filter((function(a){return a.codigoCidade==e}));a.clinica.cidade=i[0],a.html="<i class='fa fa-check fa-2x'></i>",a.mensagem="Sucesso, endereço encontrado!",a.carregando=!1}}else a.erro=!0,a.mensagem="CEP inválido!",a.carregando=!1})).catch((function(a){console.log(a)})):(this.erro=!0,$("#cep").focus(),this.mensagem="CEP inválido!",this.carregando=!1)},carregarCidades:function(){var a=this;this.carregando=!0,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.mensagem="Buscando cidades...",axios.get("/tabelas/cidades/buscar/estado/"+a.estado).then((function(t){a.cidades=t.data,a.carregando=!1}))},sucesso:function(a){this.mensagem=a,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),800)},alerta:function(a){this.mensagem=a,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var t=this;setTimeout((function(){t.carregando=!1}),1e3)},salvar:function(){this.carregar("Salvando nova clinica...");var a=this;axios.post("/tabelas/clinica",{clinica:a.clinica}).then((function(t){console.log(t.data),"existente"==t.data?(a.codigo="",a.erro=!0,a.alerta("Código já existente, verifique!")):(a.clinicas=t.data,a.descricao="",a.codigo="",a.erro=!1,a.$nextTick((function(){a.fechar(),a.sucesso("Salvo com sucesso!")})),a.sucesso("Salvo com sucesso!"))}))},atualizar:function(){var a=this;axios.post("/tabelas/clinica/update/"+this.clinica.idClinica,{clinica:a.clinica}).then((function(t){console.log(t.data),"erro"==t.data?(a.codigo="",a.erro=!0):(a.clinicas=t.data,a.descricao="",a.codigo="",a.erro=!1,a.$nextTick((function(){a.fechar(),a.sucesso("Atualizado com sucesso!")})))}))},abrir:function(){$(this.idTabela).DataTable().destroy(),this.$refs.myModal.show()},preencher:function(a){this.carregar("Carregando dados..."),this.clinica=a,this.editar=!0;var t=this;this.clinica.cidadeClinica&&(this.estado=this.clinica.cidadeClinica.uf,axios.get("/tabelas/cidades/buscar/estado/"+t.estado).then((function(a){t.cidades=a.data,t.carregando=!1}))),this.abrir(),this.sucesso("Dados carregados!")},remover:function(a){this.deletar=a.idClinica,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},ok:function(a){a.preventDefault(),this.editar?this.atualizar():this.salvar()},fechar:function(){this.$root.$emit("montou",[this.idTabela]),this.editar=!1,this.clinica={},this.estado="",this.$refs.myModal.hide()},fecharCerteza:function(){this.$root.$emit("montou",[this.idTabela]),this.$refs.modalCerteza.hide()},certeza:function(){this.carregar("Removendo clinica...");var a=this;axios.get("/tabelas/clinica/remover/"+this.deletar).then((function(t){"erro"!=t.data?(a.clinicas=t.data,a.$nextTick((function(){a.fecharCerteza(),a.sucesso("Excluido com sucesso!")}))):a.$nextTick((function(){a.fecharCerteza(),a.alerta("Erro ao excluir!")}))}))}},mounted:function(){var a=this;axios.get("/tabelas/clinica/list").then((function(t){a.clinicas=t.data,a.montou=!0,setTimeout((function(){a.carregando=!1,a.$root.$emit("montou",[a.idTabela])}),200)})),$("#myModal").on("hidden.bs.modal",(function(t){a.descricao="",a.codigo="",a.editar=!1,a.id=""}))}},s=(e(220),e(0)),o=Object(s.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"content"},[a.carregando?e("BlockUI",{attrs:{message:a.mensagem,html:a.html}}):a._e(),a._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:a.abrir}},[e("i",{staticClass:"fa fa-plus"}),a._v(" Incluir")]),a._v(" "),a.montou?e("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.clinicas,name:"clinicas.xls"}},[e("i",{staticClass:"far fa-save"}),a._v(" Exportar\n            ")]):a._e()],1)]),a._v(" "),a.montou?e("div",{staticClass:"box box-info"},[e("div",{staticClass:"box-body table-responsive"},[e("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[a._m(0),a._v(" "),e("tbody",a._l(a.clinicas,(function(t){return e("tr",[e("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[e("b",[a._v(a._s(t.idClinica))])]),a._v(" "),e("td",[e("b",[a._v(a._s(t.cnpj))])]),a._v(" "),e("td",{staticStyle:{"text-align":"justify"}},[a._v(a._s(t.nomeClinica))]),a._v(" "),e("td",{staticStyle:{"text-align":"justify"}},[a._v(a._s(t.nomeFantasiaClinica))]),a._v(" "),e("td",[a._v(a._s(t.cidadeClinica.nomeCidade))]),a._v(" "),e("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[e("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){return a.remover(t)}}},[e("i",{staticClass:"fa fa-trash"})]),a._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return a.preencher(t)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):a._e(),a._v(" "),e("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do clinica","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:a.ok,cancel:function(t){return a.fechar()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group",class:{"has-error":a.erro}},[e("label",{attrs:{for:""}},[a._v("ID clinica")]),a._v(" "),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"####-##",expression:"'####-##'"},{name:"model",rawName:"v-model",value:a.clinica.idClinica,expression:"clinica.idClinica"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.clinica.idClinica},on:{input:function(t){t.target.composing||a.$set(a.clinica,"idClinica",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CNPJ")]),a._v(" "),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"},{name:"model",rawName:"v-model",value:a.clinica.cnpj,expression:"clinica.cnpj"}],staticClass:"form-control",attrs:{type:""},domProps:{value:a.clinica.cnpj},on:{input:function(t){t.target.composing||a.$set(a.clinica,"cnpj",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.nomeClinica,expression:"clinica.nomeClinica"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.clinica.nomeClinica},on:{input:function(t){t.target.composing||a.$set(a.clinica,"nomeClinica",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome Fantasia")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.nomeFantasiaClinica,expression:"clinica.nomeFantasiaClinica"}],staticClass:"form-control",attrs:{type:""},domProps:{value:a.clinica.nomeFantasiaClinica},on:{input:function(t){t.target.composing||a.$set(a.clinica,"nomeFantasiaClinica",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CNES")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.cnes,expression:"clinica.cnes"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.clinica.cnes},on:{input:function(t){t.target.composing||a.$set(a.clinica,"cnes",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"checkout-company"}},[a._v("CEP")]),a._v(" "),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.cep,expression:"clinica.cep"},{name:"mask",rawName:"v-mask",value:"##.###-###",expression:"'##.###-###'"}],staticClass:"form-control",attrs:{autocomplete:"nope",required:"",type:"text",id:"cep"},domProps:{value:a.clinica.cep},on:{input:function(t){t.target.composing||a.$set(a.clinica,"cep",t.target.value)}}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:a.buscaCep}},[e("i",{staticClass:"fa fa-search"})])])]),a._v(" "),a.erro?e("div",{staticClass:"form-control-feedback"},[a._v("CEP inválido")]):a._e()])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Endereço")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.endereco,expression:"clinica.endereco"}],staticClass:"form-control",domProps:{value:a.clinica.endereco},on:{input:function(t){t.target.composing||a.$set(a.clinica,"endereco",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"account-city"}},[a._v("Cidade")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.clinica.cidadeClinica,expression:"clinica.cidadeClinica"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.clinica,"cidadeClinica",t.target.multiple?e:e[0])}}},a._l(a.cidades,(function(t){return e("option",{domProps:{value:t}},[a._v(a._s(t.nomeCidade))])})),0)])]),a._v(" "),e("div",{staticClass:"col-sm-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"checkout-city"}},[a._v("Estado")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.estado,expression:"estado"}],staticClass:"form-control",attrs:{required:"",id:"account-country"},on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.estado=t.target.multiple?e:e[0]},a.carregarCidades]}},a._l(a.estados,(function(t){return e("option",{domProps:{value:t.sigla}},[a._v(a._s(t.sigla))])})),0)])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Bairro")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.bairro,expression:"clinica.bairro"}],staticClass:"form-control",domProps:{value:a.clinica.bairro},on:{input:function(t){t.target.composing||a.$set(a.clinica,"bairro",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Email")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.email,expression:"clinica.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:a.clinica.email},on:{input:function(t){t.target.composing||a.$set(a.clinica,"email",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("HomePage")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.homePage,expression:"clinica.homePage"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.clinica.homePage},on:{input:function(t){t.target.composing||a.$set(a.clinica,"homePage",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Telefone")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.telefone1,expression:"clinica.telefone1"}],staticClass:"form-control",domProps:{value:a.clinica.telefone1},on:{input:function(t){t.target.composing||a.$set(a.clinica,"telefone1",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Telefone")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.telefone2,expression:"clinica.telefone2"}],staticClass:"form-control",domProps:{value:a.clinica.telefone2},on:{input:function(t){t.target.composing||a.$set(a.clinica,"telefone2",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Rodape ASO")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.clinica.rodapeAso,expression:"clinica.rodapeAso"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.clinica.rodapeAso},on:{input:function(t){t.target.composing||a.$set(a.clinica,"rodapeAso",t.target.value)}}})])])])]),a._v(" "),e("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-center"},[e("h3",[a._v("Tem certeza que deseja excluir esta clinica?")])])]),a._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:a.fecharCerteza}},[e("i",{staticClass:"fa fa-close"}),a._v(" Não")])]),a._v(" "),e("div",{staticClass:"col-md-6 text-center"},[e("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:a.certeza}},[e("i",{staticClass:"fa fa-check"}),a._v(" Sim")])])])])],1)}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[a._v("Código")]),a._v(" "),e("th",[a._v("CNPJ")]),a._v(" "),e("th",[a._v("Descrição")]),a._v(" "),e("th",[a._v("Nome Fantasia")]),a._v(" "),e("th",[a._v("Cidade")]),a._v(" "),e("th",{staticClass:"text-center no-sort"},[a._v("Ações")])])])}],!1,null,null,null);t.default=o.exports},220:function(a,t,e){"use strict";e(126)},221:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"th{font-weight:400;cursor:pointer}th.selecionado{font-weight:800}",""])}}]);