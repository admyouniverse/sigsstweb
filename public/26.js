(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{0:function(t,e,a){"use strict";function i(t,e,a,i,s,o,n,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}a.d(e,"a",(function(){return i}))},142:function(t,e,a){var i=a(254);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(2)(i,s);i.locals&&(t.exports=i.locals)},253:function(t,e,a){"use strict";a(142)},254:function(t,e,a){(t.exports=a(1)(!1)).push([t.i,".cx{float:left;height:20px;width:20px;margin-right:5px;border:1px solid #000}div.btn{cursor:pointer}.btn-editar{color:#008d4c}.btn-remover{color:red}.row-flex{flex-wrap:wrap;display:flex}.row-flex .col-box{margin-bottom:20px}.row-flex .col-box .box-default,.row-flex .col-box .box-successr{height:100%}.detalhes{padding-left:20px}th{font-weight:400;cursor:pointer}th.selecionado{font-weight:800}.input-group input,.input-group select{-webkit-appearance:none}.input-group.unidade-medida input{width:100%!important;-webkit-appearance:none}@-webkit-keyframes highlight{0%{background:rgba(0,141,76,.6)}to{background:#fff}}@keyframes highlight{0%{background:rgba(0,141,76,.6)}to{background:#fff}}.highlight{-webkit-animation:highlight 2s;animation:highlight 2s}.multiselect__tags{padding-top:8px}.multiselect__single{margin-bottom:8px}span.color{border:1px solid silver;vertical-align:middle;margin-right:5px;min-width:20px}",""])},40:function(t,e,a){"use strict";a.r(e);var i={data:function(){return a=[{title:"Biológico",valor:"BIOLÓGICO",color:"background-color:rgb(148, 90, 30)"},{title:"Ergonômico",valor:"ERGONÔMICO",color:"background-color:rgb(255, 255, 0)"},{title:"Acidente",valor:"ACIDENTE",color:"background-color:rgb(0, 0, 255)"},{title:"Físico",valor:"FÍSICO",color:"background-color:rgb(0, 128, 0)"},{title:"Químico",valor:"QUÍMICO",color:"background-color:rgb(255, 0, 0)"},{title:"Periculosos",valor:"PERICULOSOS",color:"background-color:rgb(255, 255, 0)"},{title:"Associação de fatores de risco",valor:"ASSOCIAÇÃO_DE_FATORES_DE_RISCO",color:"background-color:rgb(0, 0, 0)"},{title:"Ausência de fatores de risco",valor:"AUSÊNCIA_DE_FATORES_DE_RISCO",color:"background-color:rgb(128, 128, 128)"},{title:"Penosos",valor:"PENOSOS",color:"background-color:rgb(254, 218, 71)"}],(e="options")in(t={riscos:"",exames:[],exame:"",todosExames:[],descricao:"",unidade:"",unidades:[],nome:"",grupo:"",meio:"",dano:"",epis:[],id_unidade:"",todosEpis:"",todasUnidades:[],novo:!1,novoUn:!1,enquadramento:"",enquadramento_exame:"",interpretacao:"SELECIONE",ibpm:"",id_exame:"",numero:"",anexo:"",limite:"",nivel:"",insalubridade:"",periculosidade:"",complemento:"",linac:"",aposentadoria:"",tabela23:"",observacao:"",options:[],classe:"",id:"",erro:!1,editar:!1,carregando:!0,mensagem:"Carregando itens cadastros...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',montou:!1,deletar:"",destaque:"",coluna:"id",ordem:"az",termo:"",cas:"",atual:"",selecionado:"id",idTabela:"#tabelaListagem",value:"",atividadeEspecial:"NÃO"})?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t;var t,e,a},methods:{tratarEnquadramento:function(t){return"SELECIONE"==t?"Selecione":"AI_Q1"==t?"NR 07-A I-Q1":"AI_Q2"==t?"NR 07-A I-Q2":"AII"==t?"NR 07-A II":"AIII"==t?"NR 07-A III":"AIV"==t?"NR 07-A IV<":"AV"==t?"NR 07-A V":"OUTROS"==t?"Outros":void 0},customLabel:function(t){var e=t.title,a=t.desc;return"".concat(e," – ").concat(a)},cor:function(t){return"BIOLÓGICO"==t?"background-color:rgb(148, 90, 30)":"ERGONÔMICO"==t?"background-color:rgb(255, 255, 0)":"ACIDENTE"==t?"background-color:rgb(0, 0, 255)":"FÍSICO"==t?"background-color:rgb(0, 128, 0)":"QUÍMICO"==t?"background-color:rgb(255, 0, 0)":"PERICULOSOS"==t?"background-color:rgb(255, 255, 0)":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==t?"background-color:rgb(0, 0, 0)":"PENOSOS"==t?"background-color:rgb(254, 218, 71)":"AUSÊNCIA_DE_FATORES_DE_RISCO"==t?"background-color:rgb(128, 128, 128)":void 0},grupoDeRisco:function(t){return"BIOLÓGICO"==t?"Biológico":"ERGONÔMICO"==t?"Ergonômico":"ACIDENTE"==t?"Acidente":"FÍSICO"==t?"Físico":"QUÍMICO"==t?"Químico":"PERICULOSOS"==t?"Periculosos":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==t?"Associação de fatores de risco":"PENOSOS"==t?"Penosos":"AUSÊNCIA_DE_FATORES_DE_RISCO"==t?"Ausência de fatores de risco":void 0},mudouEnquadramento:function(){"AI_Q1"==this.enquadramento_exame&&(this.interpretacao="EE"),"AI_Q2"==this.enquadramento_exame&&(this.interpretacao="SC")},carregar:function(t){this.mensagem=t,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},sucesso:function(t){this.mensagem=t,this.html='<i class="fa fa-check-circle fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),800)},testaCas:function(){isNaN(this.cas)&&"N"!=this.cas&&"NA"!=this.cas&&(this.cas="")},alerta:function(t){this.mensagem=t,this.html='<i class="fa fa-close fa-2x fa-fw"></i>';var e=this;setTimeout((function(){e.carregando=!1}),1e3)},ok:function(t){t.preventDefault(),this.editar?this.atualizar():this.salvar()},cancelarExame:function(){this.exame="",this.id_exame=null,this.enquadramento_exame="",this.interpretacao="",this.ibpm="",this.novo=!1},cancelarUnidade:function(){this.unidade="",this.id_unidade=null,this.limite="",this.nivel="",this.novoUn=!1},editarExame:function(t,e){this.exame=t.exame,this.id_exame=e,this.enquadramento_exame=t.enquadramento,this.interpretacao=t.interpretacao,this.ibpm=t.ibpm,this.atual=t.exame.idExame,this.novo=!0},editarUnidade:function(t,e){this.unidade=t.unidadeMedida,this.id_unidade=e,this.nivel=t.nivelAcao,this.limite=t.limiteTolerancia,this.novoUn=!0},addExame:function(){("AI_Q1"==this.enquadramento_exame||"AI_Q2"==this.enquadramento_exame)&&""!=this.ibpm||"AI_Q1"!=this.enquadramento_exame&&"AI_Q2"!=this.enquadramento_exame?(null!=this.exames[this.id_exame]?(this.exames[this.id_exame].exame=this.exame,this.exames[this.id_exame].enquadramento=this.enquadramento_exame,this.exames[this.id_exame].interpretacao=this.interpretacao,this.exames[this.id_exame].ibpm=this.ibpm):(""!=this.interpretacao&&null!=this.interpretacao&&null!=this.interpretacao||(this.interpretacao="SELECIONE"),this.exames.push({exame:this.exame,enquadramento:this.enquadramento_exame,interpretacao:this.interpretacao,ibpm:this.ibpm})),this.cancelarExame()):alert("Preencha IBE obrigatoriamente!")},addUnidade:function(){null!=this.unidades[this.id_unidade]?(this.unidades[this.id_unidade].unidadeMedida=this.unidade,this.unidades[this.id_unidade].nivelAcao=this.nivel,this.unidades[this.id_unidade].limiteTolerancia=this.limite):this.unidades.push({unidadeMedida:this.unidade,nivelAcao:this.nivel,limiteTolerancia:this.limite}),this.cancelarUnidade()},excluirUnidade:function(t){this.unidades.splice(t,1)},excluirExame:function(t){this.exames.splice(t,1)},salvar:function(){this.carregar("Salvando novo risco..");var t=this;""!=this.descricao||""!=this.codigo?("QUALITATIVO"==t.enquadramento&&(t.nivel=t.limite="N/A"),axios.post("/tabelas/riscos",{descricao:t.descricao,nome:t.nome,grupo:t.grupo,meio:t.meio,dano:t.dano,enquadramento:t.enquadramento,numero:t.numero,anexo:t.anexo,limite:t.limite,nivel:t.nivel,insalubridade:t.insalubridade,periculosidade:t.periculosidade,linac:t.linac,cas:t.cas,aposentadoria:t.aposentadoria,tabela23:t.tabela23,unidade:t.unidade,observacao:t.observacao,exames:t.exames,epis:t.epis,complemento:t.complemento,atividadeEspecial:t.atividadeEspecial}).then((function(e){console.log(e.data),"existente"==e.data?(t.codigo="",t.erro=!0,t.alerta("Código já existente, verifique!")):t.$nextTick((function(){t.fechar(),t.sucesso("Salvo com sucesso!")}))}))):t.alerta("Preencha todos os campos")},atualizar:function(){var t=this;this.carregar("Atualizando risco..."),""!=this.descricao?axios.post("/tabelas/riscos/update/"+this.id,{descricao:t.descricao,nome:t.nome,grupo:t.grupo,meio:t.meio,dano:t.dano,enquadramento:t.enquadramento,numero:t.numero,anexo:t.anexo,limite:t.limite,nivel:t.nivel,insalubridade:t.insalubridade,periculosidade:t.periculosidade,linac:t.linac,aposentadoria:t.aposentadoria,tabela23:t.tabela23,unidade:t.unidade,observacao:t.observacao,exames:t.exames,epis:t.epis,cas:t.cas,unidades:t.unidades,complemento:t.complemento,atividadeEspecial:t.atividadeEspecial}).then((function(e){console.log(e.data),"existente"==e.data?(t.codigo="",t.erro=!0,t.alerta("Código já existente, verifique!")):(t.riscos=e.data,t.$nextTick((function(){t.fechar(),t.sucesso("Atualizado com sucesso!")})))})):t.alerta("Preencha todos os campos")},preencher:function(t){this.carregar("Carregando dados..."),this.descricao=t.descricaoRisco,this.nome=t.nomeRisco,this.grupo=t.grupoRisco,this.meio=t.meioPropagacao,this.dano=t.danoSaude,this.enquadramento=t.enquadramento,this.numero=t.numero,this.anexo=t.anexo,this.limite=t.limiteTolerancia,this.nivel=t.nivelAcao,this.insalubridade=t.insalubridade,this.periculosidade=t.periculosidade,this.linac=t.linac,this.aposentadoria=t.aposentadoriaEspecial,this.tabela23=t.tabela23,this.observacao=t.observacao,this.epis=t.epis,this.cas=t.cas,this.complemento=t.complemento,this.atividadeEspecial=t.atividadeEspecial,this.id=t.idRisco;var e=this;axios.get("/tabelas/riscos/"+this.id+"/exames/").then((function(t){e.exames=t.data,axios.get("/tabelas/riscos/"+e.id+"/unidades/").then((function(t){e.unidades=t.data,console.log(e.unidades),e.abrir(),e.sucesso("Dados carregados!")}))})),this.editar=!0,this.value={title:this.grupoDeRisco(this.grupo),valor:this.grupo,color:this.cor(this.grupo)}},abrir:function(){console.log(this.unidades);this.$refs.myModal.show()},fechar:function(){this.editar=!1,this.descricao="",this.nome="",this.grupo="",this.meio="",this.dano="",this.enquadramento="",this.numero="",this.anexo="",this.limite="",this.novo=!1,this.nivel="",this.insalubridade="",this.periculosidade="",this.linac="",this.aposentadoria="",this.tabela23="",this.unidade="",this.id="",this.exames=[],this.cas="",this.complemento="",this.atividadeEspecial="NÃO",this.$refs.myModal.hide()},fecharCerteza:function(){this.$refs.modalCerteza.hide()},remover:function(t){this.deletar=t.idRisco,this.$refs.modalCerteza.show(),$(this.idTabela).DataTable().destroy()},certeza:function(){this.carregar("Removendo risco...");var t=this;axios.get("/tabelas/riscos/remover/"+this.deletar).then((function(e){"erro"!=e.data?(t.riscos=e.data,t.$nextTick((function(){t.fecharCerteza(),t.sucesso("Excluido com sucesso!")}))):t.$nextTick((function(){t.fecharCerteza(),t.alerta("Erro ao excluir!")}))}))},selecionaGrupo:function(){null!=this.value&&(this.grupo=this.value.valor)},ordenar:function(){"id"==this.coluna?"az"==this.ordem?this.riscos.sort((function(t,e){return t.idRisco>e.idRisco?1:t.idRisco<e.idRisco?-1:0})):this.riscos.sort((function(t,e){return t.idRisco>e.idRisco?-1:t.idRisco<e.idRisco?1:0})):"descricao"==this.coluna?"az"==this.ordem?this.riscos.sort((function(t,e){return t.descricaoRisco>e.descricaoRisco?1:t.descricaoRisco<e.descricaoRisco?-1:0})):this.riscos.sort((function(t,e){return t.descricaoRisco>e.descricaoRisco?-1:t.descricaoRisco<e.descricaoRisco?1:0})):"nome"==this.coluna?"az"==this.ordem?this.riscos.sort((function(t,e){return t.nomeRisco>e.nomeRisco?1:t.nomeRisco<e.nomeRisco?-1:0})):this.riscos.sort((function(t,e){return t.nomeRisco>e.nomeRisco?-1:t.nomeRisco<e.nomeRisco?1:0})):"classe"==this.coluna&&("az"==this.ordem?this.riscos.sort((function(t,e){return t.classe>e.classe?1:t.classe<e.classe?-1:0})):this.riscos.sort((function(t,e){return t.classe>e.classe?-1:t.classe<e.classe?1:0})))},pesquisar:function(){if(""!=this.termo&&" "!=this.termo){this.carregar("Realizando a busca..."),console.log(this.termo),console.log(this.selecionado);var t=this;axios.get("/tabelas/riscos/buscar/"+t.selecionado+"/"+t.termo).then((function(e){e.data.length>0?(t.riscos=e.data,t.sucesso("Encontramos "+e.data.length+" resultado(s)."),t.busca=!0):(t.alerta("Nenhum resultado nesta busca"),t.busca=!1)}))}},voltar:function(){var t=this;this.carregar("Recuperando todos os riscos..."),axios.get("/tabelas/riscos/list").then((function(e){t.riscos=e.data,t.sucesso("Todos os itens recuperados com sucesso!"),t.busca=!1,t.termo=""}))},foco:function(t){scrollPageTo("#risco"+t),this.destaque=t;var e=this;setTimeout((function(){e.destaque="",console.log("foi")}),2e3)},exameEmRisco:function(t){for(var e=0;e<this.exames.length;e++)if(this.exames[e].exame.idExame===t)return!0;return!1},onSearch:function(t,e){e(!0),this.search(e,t,this)},search:_.debounce((function(t,e,a){fetch("".concat(window.location.origin,"/tabelas/epi/buscar/descricao/").concat(escape(e))).then((function(e){console.log(e),e.json().then((function(t){a.options=t})),t(!1)}))}),350)},mounted:function(){var t=this;axios.get("/tabelas/riscos/list").then((function(e){t.riscos=e.data,t.montou=!0,setTimeout((function(){t.$root.$emit("montou",[t.idTabela]),t.carregando=!1}),200)})),axios.get("/tabelas/riscos/unidades-de-medida/list").then((function(e){t.todasUnidades=e.data})),axios.get("/tabelas/exames/list").then((function(e){t.todosExames=e.data})),axios.get("/tabelas/epi/list").then((function(e){t.todosEpis=e.data}))}},s=(a(253),a(0)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[t.carregando?a("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","margin-top":"10px"}},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{id:"modal",type:"button"},on:{click:t.abrir}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Incluir")]),t._v(" "),t.montou?a("download-excel",{staticClass:"btn btn-sm btn-secondary",attrs:{data:this.riscos,name:"riscos.xls"}},[a("i",{staticClass:"far fa-save"}),t._v(" Exportar\n            ")]):t._e()],1)]),t._v(" "),t.montou?a("div",{staticClass:"box box-info"},[a("div",{staticClass:"box-body table-responsive"},[a("table",{staticClass:"table table-hover table-striped",attrs:{id:"tabelaListagem"}},[t._m(0),t._v(" "),a("tbody",t._l(t.riscos,(function(e){return a("tr",[a("td",{staticStyle:{"vertical-align":"middle"},attrs:{width:"80px"}},[a("b",[t._v(t._s(e.idRisco))])]),t._v(" "),a("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[a("div",{staticClass:"cx",style:t.cor(e.grupoRisco)}),t._v("\n                            "+t._s(t.grupoDeRisco(e.grupoRisco))+"\n                        ")]),t._v(" "),a("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[t._v(t._s(e.nomeRisco))]),t._v(" "),a("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"}},[t._v(t._s(e.tabela23))]),t._v(" "),a("td",{staticClass:"text-center",staticStyle:{"vertical-align":"middle"},attrs:{width:"100px"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return t.remover(e)}}},[a("i",{staticClass:"fa fa-trash"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.preencher(e)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):t._e(),t._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"no-close-on-esc":!0,"ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.ok,cancel:function(e){return t.fechar()},close:function(e){return t.fechar()}}},[a("div",{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-success"},[a("div",{staticClass:"card-header"},[t._v("\n                        Detalhes do Fator de Risco\n                    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{class:{"col-md-4":"QUÍMICO"==t.grupo,"col-md-5":"QUÍMICO"!=t.grupo}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"typo__label"},[t._v("Grupo")]),t._v(" "),a("multiselect",{attrs:{placeholder:"Selecione um grupo",label:"title","track-by":"title",options:t.options,"option-height":104,"custom-label":t.customLabel,"show-labels":!1},on:{input:t.selecionaGrupo},scopedSlots:t._u([{key:"singleLabel",fn:function(e){return[a("span",{staticClass:"color",style:e.option.color},[t._v("     ")]),t._v(" "),a("span",{staticClass:"option__desc"},[a("span",{staticClass:"option__title"},[t._v(t._s(e.option.title))])])]}},{key:"option",fn:function(e){return[a("span",{staticClass:"color",style:e.option.color},[t._v("     ")]),t._v(" "),a("span",{staticClass:"value"},[t._v(t._s(e.option.title))])]}}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t._v(" "),"QUÍMICO"==t.grupo?a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("CAS")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cas,expression:"cas"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cas},on:{keyup:t.testaCas,input:function(e){e.target.composing||(t.cas=e.target.value)}}})])]):t._e(),t._v(" "),a("div",{class:{"col-md-3":"QUÍMICO"==t.grupo,"col-md-4":"QUÍMICO"!=t.grupo}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Fatores de Risco")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],staticClass:"form-control",domProps:{value:t.nome},on:{input:function(e){e.target.composing||(t.nome=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-1"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{disabled:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[t._v("T23 eSocial")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tabela23,expression:"tabela23"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tabela23},on:{input:function(e){e.target.composing||(t.tabela23=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Complemento")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.complemento,expression:"complemento"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.complemento},on:{input:function(e){e.target.composing||(t.complemento=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Meio de propagação")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.meio,expression:"meio"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.meio},on:{input:function(e){e.target.composing||(t.meio=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Meio de absorcação")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.descricao,expression:"descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.descricao},on:{input:function(e){e.target.composing||(t.descricao=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Possíveis danos para saúde")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dano,expression:"dano"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.dano},on:{input:function(e){e.target.composing||(t.dano=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Insalubridade")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.insalubridade,expression:"insalubridade"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.insalubridade=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"SIM"}},[t._v("Sim")]),t._v(" "),a("option",{attrs:{value:"NÃO"}},[t._v("Não")])])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Periculosidade")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.periculosidade,expression:"periculosidade"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.periculosidade=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"SIM"}},[t._v("Sim")]),t._v(" "),a("option",{attrs:{value:"NÃO"}},[t._v("Não")])])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("LINACH")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.linac,expression:"linac"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.linac=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"NÃO"}},[t._v("Não")]),t._v(" "),a("option",{attrs:{value:"G1"}},[t._v("G1")]),t._v(" "),a("option",{attrs:{value:"G2A"}},[t._v("G2A")]),t._v(" "),a("option",{attrs:{value:"G2B"}},[t._v("G2B")])])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Apo. Especial")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.aposentadoria,expression:"aposentadoria"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.aposentadoria=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"SIM"}},[t._v("Sim")]),t._v(" "),a("option",{attrs:{value:"NÃO"}},[t._v("Não")])])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Atividade Especial")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.atividadeEspecial,expression:"atividadeEspecial"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.atividadeEspecial=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("-")]),t._v(" "),a("option",{attrs:{value:"SIM"}},[t._v("Sim")]),t._v(" "),a("option",{attrs:{value:"NÃO"}},[t._v("Não")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Enquadramento")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.enquadramento,expression:"enquadramento"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.enquadramento=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"QUANTITATIVO"}},[t._v("Quantitativo")]),t._v(" "),a("option",{attrs:{value:"QUALITATIVO"}},[t._v("Qualitativo")])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Fundamentação")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.numero},on:{input:function(e){e.target.composing||(t.numero=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Anexo")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.anexo,expression:"anexo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.anexo},on:{input:function(e){e.target.composing||(t.anexo=e.target.value)}}})])])])])])])]),t._v(" "),"QUALITATIVO"!=t.enquadramento?a("div",{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-success"},[a("div",{staticClass:"card-header"},[t._v("\n                        Unidades de Medida\n                    ")]),t._v(" "),t.novoUn?t._e():a("div",{staticClass:"card-body"},[0==t.unidades.length?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[t.editar?a("h6",[t._v("\n                                    Não há unidades de medida ligadas a este risco.\n                                ")]):t._e(),t._v(" "),t.editar?t._e():a("h6",[t._v("\n                                    Ainda não há unidades de medida ligadas a este risco.\n                                ")])])]):t._e(),t._v(" "),t.unidades.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-sm table-bordered"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[a("b",[t._v("Unidade")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Lim. Tolerancia")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Niv. de Ação")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Ações")])])])]),t._v(" "),a("tbody",t._l(t.unidades,(function(e,i){return a("tr",[e.unidadeMedida?a("td",[t._v(t._s(e.unidadeMedida.descricao)+"\n                                            ")]):t._e(),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.limiteTolerancia)+"\n                                                "+t._s(e.unidadeMedida.unidade))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.nivelAcao)+"\n                                                "+t._s(e.unidadeMedida.unidade))]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.excluirUnidade(i)}}},[a("i",{staticClass:"fa fa-trash"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){return t.editarUnidade(e,i)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("button",{staticClass:"btn btn-secondary btn-sm",on:{click:function(e){t.novoUn=!0}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Adicionar Unidade de Medida")])])])]),t._v(" "),t.novoUn?a("div",{staticClass:"card-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id_unidade,expression:"id_unidade"}],attrs:{type:"hidden"},domProps:{value:t.id_unidade},on:{input:function(e){e.target.composing||(t.id_unidade=e.target.value)}}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Unidade de Medida")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.unidade,expression:"unidade"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.unidade=e.target.multiple?a:a[0]}}},t._l(t.todasUnidades,(function(e){return a("option",{domProps:{value:e}},[t._v(" "+t._s(e.descricao)+"\n                                            ("+t._s(e.unidade)+")")])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Limite de tolerância")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limite,expression:"limite"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.limite},on:{input:function(e){e.target.composing||(t.limite=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Nivel de Ação")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nivel,expression:"nivel"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nivel},on:{input:function(e){e.target.composing||(t.nivel=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-right"},[a("button",{staticClass:"btn btn-secondary btn-sm",on:{click:t.cancelarUnidade}},[t._v("Cancelar")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.addUnidade}},[t._v("Adicionar")])])])]):t._e()])])]):t._e(),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-success"},[a("div",{staticClass:"card-header"},[t._v("\n                        EPI\n                    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("v-select",{attrs:{label:"idEpi",multiple:"",filterable:!1,options:t.options},on:{search:t.onSearch},scopedSlots:t._u([{key:"option",fn:function(e){return[a("div",{staticClass:"d-center"},[t._v("\n                                            "+t._s(e.descricao)+"\n                                        ")])]}},{key:"selected-option",fn:function(e){return[a("div",{staticClass:"selected d-center"},[t._v("\n                                            "+t._s(e.descricao)+"\n                                        ")])]}}]),model:{value:t.epis,callback:function(e){t.epis=e},expression:"epis"}},[a("template",{slot:"no-options"},[t._v("\n                                        digite para procurar um EPI...\n                                    ")])],2)],1)])])])])]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-success"},[a("div",{staticClass:"card-header"},[t._v("\n                        Exames\n                    ")]),t._v(" "),t.novo?t._e():a("div",{staticClass:"card-body"},[0==t.exames.length?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[t.editar?a("h6",[t._v("\n                                    Não há exames ligados a este risco.\n                                ")]):t._e(),t._v(" "),t.editar?t._e():a("h6",[t._v("\n                                    Ainda não há exames ligados a este risco.\n                                ")])])]):t._e(),t._v(" "),t.exames.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-sm table-bordered"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[a("b",[t._v("Exame")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Enquadramento")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("IBE")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Interpretação")])]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("b",[t._v("Ações")])])])]),t._v(" "),a("tbody",t._l(t.exames,(function(e,i){return a("tr",[e.exame?a("td",[t._v(t._s(e.exame.nomeExame))]):t._e(),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.tratarEnquadramento(e.enquadramento)))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.ibpm))]),t._v(" "),a("td",{staticClass:"text-center"},["NA"==e.interpretacao?a("span",[t._v("N/A")]):t._e(),t._v(" "),"SELECIONE"==e.interpretacao?a("span",[t._v("-")]):t._e(),t._v(" "),"NA"!=e.interpretacao&&"SELECIONE"!=e.interpretacao?a("span",[t._v("\n                                                    "+t._s(e.interpretacao)+"\n                                                ")]):t._e()]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.excluirExame(i)}}},[a("i",{staticClass:"fa fa-trash"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){return t.editarExame(e,i)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("button",{staticClass:"btn btn-secondary btn-sm",on:{click:function(e){t.novo=!0}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Adicionar Exame")])])])]),t._v(" "),t.novo?a("div",{staticClass:"card-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id_exame,expression:"id_exame"}],attrs:{type:"hidden"},domProps:{value:t.id_exame},on:{input:function(e){e.target.composing||(t.id_exame=e.target.value)}}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Exame")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.exame,expression:"exame"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.exame=e.target.multiple?a:a[0]}}},t._l(t.todosExames,(function(e){return t.exameEmRisco(e.idExame)&&e.idExame!=t.atual?t._e():a("option",{domProps:{value:e}},[t._v("\n                                            #"+t._s(e.idExame)+" - "+t._s(e.nomeExame)+" ")])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Material Organico")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.exame.grupoExame,expression:"exame.grupoExame"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.exame.grupoExame},on:{input:function(e){e.target.composing||t.$set(t.exame,"grupoExame",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Enquadramento")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.enquadramento_exame,expression:"enquadramento_exame"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.enquadramento_exame=e.target.multiple?a:a[0]},t.mudouEnquadramento]}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"AI_Q1"}},[t._v("NR 07-A I-Q1")]),t._v(" "),a("option",{attrs:{value:"AI_Q2"}},[t._v("NR 07-A I-Q2")]),t._v(" "),a("option",{attrs:{value:"AII"}},[t._v("NR 07-A II")]),t._v(" "),a("option",{attrs:{value:"AIII"}},[t._v("NR 07-A III")]),t._v(" "),a("option",{attrs:{value:"AIV"}},[t._v("NR 07-A IV")]),t._v(" "),a("option",{attrs:{value:"AV"}},[t._v("NR 07-A V")]),t._v(" "),a("option",{attrs:{value:"OUTROS"}},[t._v("Outros")])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("IBE")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ibpm,expression:"ibpm"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.ibpm},on:{input:function(e){e.target.composing||(t.ibpm=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Interpretação")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.interpretacao,expression:"interpretacao"}],staticClass:"form-control",attrs:{disabled:"AI_Q2"==t.enquadramento_exame||"AI_Q1"==t.enquadramento_exame},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.interpretacao=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"SELECIONE"}},[t._v("Selecione")]),t._v(" "),a("option",{attrs:{value:"EE"}},[t._v("EE")]),t._v(" "),a("option",{attrs:{value:"SC"}},[t._v("SC")]),t._v(" "),a("option",{attrs:{value:"NA"}},[t._v("N/A")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-right"},[a("button",{staticClass:"btn btn-secondary btn-sm",on:{click:t.cancelarExame}},[t._v("Cancelar")]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.addExame}},[t._v("Adicionar")])])])]):t._e()])])])]),t._v(" "),a("b-modal",{ref:"modalCerteza",attrs:{size:"sm","no-close-on-backdrop":!0,centered:"","hide-header":!0,"hide-footer":!0,"no-close-on-esc":!0,id:"modalCerteza"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h3",[t._v("Tem certeza que deseja excluir este risco?")])])]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-secondary btn-lg",attrs:{type:"button"},on:{click:t.fecharCerteza}},[a("i",{staticClass:"fa fa-close"}),t._v(" Não")])]),t._v(" "),a("div",{staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-block btn-danger btn-lg",attrs:{type:"button"},on:{click:t.certeza}},[a("i",{staticClass:"fa fa-check"}),t._v(" Sim")])])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("\n                            ID\n                        ")]),t._v(" "),a("th",[t._v("\n                            Grupo\n                        ")]),t._v(" "),a("th",[t._v("\n                            Nome\n                        ")]),t._v(" "),a("th",[t._v("\n                            Tabela23\n                        ")]),t._v(" "),a("th",{staticClass:"text-center no-sort"},[t._v("Ações")])])])}],!1,null,null,null);e.default=o.exports}}]);