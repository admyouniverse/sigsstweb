(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{0:function(a,t,e){"use strict";function o(a,t,e,o,s,i,n,r){var c,l="function"==typeof a?a.options:a;if(t&&(l.render=t,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),n?(c=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),s&&s.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=r?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var m=l.render;l.render=function(a,t){return c.call(t),m(a,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:a,options:l}}e.d(t,"a",(function(){return o}))},161:function(a,t,e){var o=e(292);"string"==typeof o&&(o=[[a.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(2)(o,s);o.locals&&(a.exports=o.locals)},291:function(a,t,e){"use strict";e(161)},292:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,".titulo[data-v-4d418b08]{text-align:center;background-color:#00a65a;padding:6px;color:#fff;font-size:17px;margin-top:5px}.form-remove[type=date][data-v-4d418b08]::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}",""])},71:function(a,t,e){"use strict";e.r(t);var o={props:["empresa"],data:function(){return{idTabela:"#tabelaListagem",carregando:!0,mensagem:"Carregando itens cadastrados",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',examesComplementares:[],termo:"",funcionarios:[],funcionario:{pessoa:{cidadeNatal:{}}},exames:[],solicitacoes:[],solicitacao:{pcmsoAmbienteExame:{exame:{}},asoSolicitacao:{}},selecionado:"codigo",montou:!1,coluna:"",pessoas:[],historico:[],complementares:[],complementar:{ordemExame:"INICIAL",idExameComplementarExame:0,exame:{}},exameComplementarExame:{idExameComplementarExame:0,exameComplementar:0,exame:0,situacao:"",resultado:""},file:"",temporarios:[],temPdf:!1}},watch:{historico:function(){0==this.historico.length&&(this.complementar.ordemExame="INICIAL")}},computed:{idade:function(){var a=new Date(this.funcionario.pessoa.dataNascimento),t=new Date,e=t.getFullYear()-a.getFullYear();return new Date(t.getFullYear(),t.getMonth(),t.getDate())<new Date(t.getFullYear(),a.getMonth(),a.getDate())&&e--,e}},methods:{abrirUpload:function(){$("#file").click()},pdf:function(a){a.caminhoPdf?window.open("http://200.98.201.236:8081/"+a.caminhoPdf):alert("Não há PDF anexado.")},handleFileUpload:function(){this.file=this.$refs.file.files[0],this.submitFile()},submitFile:function(){console.log("submentendo....");var a=new FormData;a.append("file",this.file);var t=this;axios.post("http://200.98.201.236:8081/upload-file",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.complementar.caminhoPdf=a.data.data.new_file_name,console.log(t.complementar.caminhoPdf),t.temPdf=!0})).catch((function(){}))},verificaData:function(){var a=new Date(this.solicitacao.data),t=new Date(this.complementar.data);if(a>t&&(this.complementar.data=null,this.$alert("Data de exame deve ser maior que data de solicitacao","Ops!","error")),this.historico.length>0){var e=new Date(this.historico[0].dataExame);console.log(this.historico[0]),e>t&&(this.complementar.data=null,this.$alert("Data de exame deve ser maior que data do ultimo exame","Ops!","error"))}},remover:function(a){var t=this;axios.get("exames-complementares/remover/"+a.idExameComplementarExame).then((function(a){t.cancelarNovo()}))},editar:function(a){this.complementar=a,console.log(this.complementar),this.complementar.data=a.dataExame,this.complementar.grau=a.situacao,this.$refs.modalIncluir.show()},cancelarNovo:function(){var a=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/"+this.funcionario.idEmpresaFuncionario).then((function(t){a.complementares=t.data}))},mudouIndicacao:function(){"NORMAL"==this.complementar.indicacaoResultado&&(this.complementar.grau="NORMAL")},formataEstabelecimento:function(a){return"PRÓPRIO"==a?"P":"TERCEIROS"==a?"T":"SERVIÇOS_TERCEIROS"==a?"ST":void 0},formataSexo:function(a){return"MASCULINO"==a?"M":"FEMININO"==a?"F":void 0},abrir:function(a){var t=this;this.funcionario=a,axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/"+a.idEmpresaFuncionario).then((function(a){t.complementares=a.data,t.$refs.modalComplementar.show()}))},abrirSolicitacoes:function(){var a=this;axios.get("/exames-complementares/ultimo/"+this.funcionario.idEmpresaFuncionario).then((function(t){if(t.data.length>0)a.solicitacoes=t.data,a.$refs.modalSolicitacoes.show();else{a.$fire({title:"Atenção!",text:"Não há solicitação para esse funcionário. O que deseja fazer?",type:"warning",showCancelButton:!0,confirmButtonText:"Inserir sem solicitação",cancelButtonText:"Sair",animation:!0}).then((function(t){1==t.value&&a.semSolicitacao()}))}}))},semSolicitacao:function(){var a=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames/").then((function(t){a.exames=t.data,a.$refs.modalSemSolicitacao.show()}))},incluir:function(a){var t=this;t.$refs.modalSolicitacoes.hide(),t.$refs.modalSemSolicitacao.hide(),t.solicitacao=a,axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames/"+this.solicitacao.idExame).then((function(a){t.exame=a.data,t.complementar.exame=a.data,axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/"+t.solicitacao.idExame).then((function(a){t.historico=a.data.filter((function(a){return a.exameComplementar.empresaFuncionario.idEmpresaFuncionario==t.funcionario.idEmpresaFuncionario})),0==t.historico.length?t.complementar.ordemExame="INICIAL":t.complementar.ordemExame="SEQUENCIAL",t.$refs.modalIncluir.show()}))}))},salvarNovo:function(a){var t=this;a.preventDefault(),axios.post("/exames-complementares",{solicitacao:t.solicitacao,complementar:t.complementar,funcionario:t.funcionario}).then((function(a){axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdExame/"+t.complementar.exame.idExame).then((function(a){t.cancelarNovo(),t.complementar={ordemExame:"INICIAL",exame:{}},t.$alert("Dados inseridos!","Sucesso!","success"),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/exames-complementares-exames/listaPorIdEmpresaFuncionario/"+t.funcionario.idEmpresaFuncionario).then((function(a){t.complementares=a.data,t.$refs.modalIncluir.hide(),t.abrirSolicitacoes()}))}))}))},fechar:function(){}},mounted:function(){this.mensagem="Carregando empregados...";var a=this;axios.get("/empresas/funcionarios/"+a.empresa.idEmpresa).then((function(t){a.funcionarios=t.data})),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/empresaFuncionarios/listaFuncionariosTemporariosPorIdEmpresa/"+a.empresa.idEmpresa).then((function(t){a.temporarios=t.data}))}},s=(e(291),e(0)),i=Object(s.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[a._m(0),a._v(" "),e("b-card",{staticClass:"sig",attrs:{"no-body":""}},[e("b-tabs",{attrs:{pills:"",card:""}},[e("b-tab",{attrs:{title:"Ativos",active:""}},[e("b-card-text",{attrs:{id:"tabelaEmpregados"}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body box-empregados table-responsive"},[e("table",{staticClass:"table table-hover table-striped table-empregados",attrs:{id:"tabelaListagemEmpregados"}},[e("thead",[e("tr",[e("th",[a._v("ID")]),a._v(" "),e("th",[a._v("Matrícula")]),a._v(" "),e("th",[a._v("Nome")]),a._v(" "),e("th",[a._v("CPF")]),a._v(" "),e("th",[a._v("Dt. Adm")]),a._v(" "),e("th",[a._v("Dt. Cargo")]),a._v(" "),e("th",[a._v("Cargo")]),a._v(" "),e("th",[a._v("Ambiente")]),a._v(" "),e("th",[a._v("Dt. Nasc")]),a._v(" "),e("th",[a._v("Sexo")]),a._v(" "),e("th",[a._v("Tempo")]),a._v(" "),e("th",[a._v("Contratante")])])]),a._v(" "),e("tbody",a._l(a.funcionarios,(function(t){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return a.abrir(t)}}},[e("td",[a._v(a._s(t.pessoa.idPessoa))]),a._v(" "),e("td",[a._v(a._s(t.matricula))]),a._v(" "),e("td",[a._v(a._s(t.pessoa.nomePessoa))]),a._v(" "),e("td",[a._v(a._s(t.pessoa.cpf))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataInicial,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataFuncao,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(t.funcao.cargo))]),a._v(" "),e("td",[a._v(a._s(a.formataEstabelecimento(t.ambienteTrabalho.estabelecimento))+"\n                                            -\n                                            "+a._s(t.ambienteTrabalho.nomeAmbienteTrabalho))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.pessoa.dataNascimento,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(a.formataSexo(t.pessoa.sexo)))]),a._v(" "),e("td",[a._v(a._s(t.ano)+"A, "+a._s(t.mes)+"M,\n                                            "+a._s(t.dia)+"D")]),a._v(" "),e("td",[a._v(a._s(t.empresaContrato.empresaContratante.nomeFantasia))])])})),0)])])])])],1),a._v(" "),e("b-tab",{attrs:{title:"Temporários"}},[e("b-card-text",[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"box-body box-empregados table-responsive"},[e("table",{staticClass:"table table-hover table-striped table-empregados"},[e("thead",[e("tr",[e("th",[a._v("ID")]),a._v(" "),e("th",[a._v("Matrícula")]),a._v(" "),e("th",[a._v("Nome")]),a._v(" "),e("th",[a._v("CPF")]),a._v(" "),e("th",[a._v("Dt. Adm")]),a._v(" "),e("th",[a._v("Dt. Cargo")]),a._v(" "),e("th",[a._v("Cargo")]),a._v(" "),e("th",[a._v("Ambiente")]),a._v(" "),e("th",[a._v("Dt. Nasc")]),a._v(" "),e("th",[a._v("Sexo")]),a._v(" "),e("th",[a._v("Tempo")]),a._v(" "),e("th",[a._v("Contratante")])])]),a._v(" "),e("tbody",a._l(a.temporarios,(function(t){return e("tr",{staticStyle:{cursor:"pointer"},on:{click:function(e){return a.abrir(t)}}},[e("td",[a._v(a._s(t.pessoa.idPessoa))]),a._v(" "),e("td",[a._v(a._s(t.matricula))]),a._v(" "),e("td",[a._v(a._s(t.pessoa.nomePessoa))]),a._v(" "),e("td",[a._v(a._s(t.pessoa.cpf))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataInicial,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataFuncao,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(t.funcao.cargo))]),a._v(" "),e("td",[a._v(a._s(a.formataEstabelecimento(t.ambienteTrabalho.estabelecimento))+"\n                                            -\n                                            "+a._s(t.ambienteTrabalho.nomeAmbienteTrabalho))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.pessoa.dataNascimento,"DD/MM/Y")))]),a._v(" "),e("td",[a._v(a._s(a.formataSexo(t.pessoa.sexo)))]),a._v(" "),e("td",[a._v(a._s(t.ano)+"A, "+a._s(t.mes)+"M,\n                                            "+a._s(t.dia)+"D")]),a._v(" "),e("td",[a._v(a._s(t.empresaContrato.empresaContratante.nomeFantasia))])])})),0)])])])])],1)],1)],1),a._v(" "),e("b-modal",{ref:"modalComplementar",attrs:{size:"xl",centered:"","hide-footer":!0,title:"Exames Complementar",id:"modal1"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Matricula")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.matricula,expression:"funcionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.matricula},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"matricula",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CPF")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.cpf,expression:"funcionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.cpf},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"cpf",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.nomePessoa,expression:"funcionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.nomePessoa},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"nomePessoa",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Dt. Nasc.")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.dataNascimento,expression:"funcionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.pessoa.dataNascimento},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"dataNascimento",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Idade")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idade},on:{input:function(t){t.target.composing||(a.idade=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Adm")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.dataInicial,expression:"funcionario.dataInicial"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.dataInicial},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"dataInicial",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"titulo"},[a._v("Histórico de Exames")])]),a._v(" "),e("div",{staticClass:"col-md-12 mb-3"},[e("button",{staticClass:"btn btn-success btn-sm",on:{click:a.abrirSolicitacoes}},[e("i",{staticClass:"fa fa-plus"}),a._v(" Adicionar Exame")])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",[a._v("ID SIGSST")]),a._v(" "),e("th",[a._v("eSocial")]),a._v(" "),e("th",[a._v("Exame")]),a._v(" "),e("th",[a._v("Data")]),a._v(" "),e("th",[a._v("Ordem do Exame")]),a._v(" "),e("th",[a._v("Indicação dos Resultados")]),a._v(" "),e("th",[a._v("Grau")]),a._v(" "),e("th",[a._v("PDF")]),a._v(" "),e("th")])]),a._v(" "),e("tbody",a._l(a.complementares,(function(t){return e("tr",[e("td",[a._v(a._s(t.exame.idExame))]),a._v(" "),e("td",[a._v(a._s(t.exame.tabela27))]),a._v(" "),e("td",[a._v(a._s(t.exame.nomeExame))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataExame,"DD/MM/YYYY")))]),a._v(" "),e("td",[a._v(a._s(t.ordemExame))]),a._v(" "),e("td",[a._v(a._s(t.indicacaoResultado))]),a._v(" "),e("td",[a._v(a._s(t.situacao))]),a._v(" "),e("td",[e("a",{on:{click:function(e){return a.pdf(t)}}},[e("img",{attrs:{src:"/img/pdf.png",width:"21px"}})])]),a._v(" "),e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return a.remover(t)}}},[e("i",{staticClass:"fa fa-trash"})]),a._v(" "),e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return a.editar(t)}}},[e("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])])]),a._v(" "),e("b-modal",{ref:"modalSolicitacoes",attrs:{size:"lg",centered:"","hide-footer":!0,title:"Novo Exame Solicitacao",id:"modal1"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Matricula")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.matricula,expression:"funcionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.matricula},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"matricula",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CPF")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.cpf,expression:"funcionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.cpf},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"cpf",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.nomePessoa,expression:"funcionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.nomePessoa},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"nomePessoa",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Dt. Nasc.")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.dataNascimento,expression:"funcionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.pessoa.dataNascimento},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"dataNascimento",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Idade")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idade},on:{input:function(t){t.target.composing||(a.idade=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Adm")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.dataInicial,expression:"funcionario.dataInicial"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.dataInicial},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"dataInicial",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"titulo"},[a._v("Lista de Exames Solicitados")])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",[a._v("ID SIGSST")]),a._v(" "),e("th",[a._v("eSocial")]),a._v(" "),e("th",[a._v("N. Solicitacao")]),a._v(" "),e("th",[a._v("Data")]),a._v(" "),e("th",[a._v("Exame")]),a._v(" "),e("th")])]),a._v(" "),e("tbody",a._l(a.solicitacoes,(function(t){return e("tr",[e("td",[a._v(a._s(t.idExame))]),a._v(" "),e("td"),a._v(" "),e("td"),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.data,"DD/MM/YYYY")))]),a._v(" "),e("td",[a._v(a._s(t.nomeExame))]),a._v(" "),e("td",[e("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return a.incluir(t)}}},[a._v("Incluir")])])])})),0)])])])]),a._v(" "),e("b-modal",{ref:"modalSemSolicitacao",attrs:{size:"lg",centered:"","hide-footer":!0,title:"Novo Exame"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Matricula")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.matricula,expression:"funcionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.matricula},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"matricula",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CPF")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.cpf,expression:"funcionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.cpf},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"cpf",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.nomePessoa,expression:"funcionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.nomePessoa},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"nomePessoa",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Dt. Nasc.")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.dataNascimento,expression:"funcionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.pessoa.dataNascimento},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"dataNascimento",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Idade")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idade},on:{input:function(t){t.target.composing||(a.idade=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Adm")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.dataInicial,expression:"funcionario.dataInicial"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.dataInicial},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"dataInicial",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"titulo"},[a._v("Lista de Exames Solicitados")])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",[a._v("ID SIGSST")]),a._v(" "),e("th",[a._v("Exame")]),a._v(" "),e("th")])]),a._v(" "),e("tbody",a._l(a.exames,(function(t){return e("tr",[e("td",[a._v(a._s(t.idExame))]),a._v(" "),e("td",[a._v(a._s(t.nomeExame))]),a._v(" "),e("td",[e("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return a.incluir(t)}}},[a._v("Incluir")])])])})),0)])])])]),a._v(" "),e("b-modal",{ref:"modalIncluir",attrs:{size:"xl",centered:"","cancel-title":"Fechar",title:"Incluir novo exame",id:"modal1"},on:{ok:a.salvarNovo,cancel:a.cancelarNovo}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Matricula")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.matricula,expression:"funcionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.matricula},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"matricula",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("CPF")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.cpf,expression:"funcionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.cpf},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"cpf",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.nomePessoa,expression:"funcionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.funcionario.pessoa.nomePessoa},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"nomePessoa",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Dt. Nasc.")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.pessoa.dataNascimento,expression:"funcionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.pessoa.dataNascimento},on:{input:function(t){t.target.composing||a.$set(a.funcionario.pessoa,"dataNascimento",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-1"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Idade")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idade},on:{input:function(t){t.target.composing||(a.idade=t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Data Adm")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.funcionario.dataInicial,expression:"funcionario.dataInicial"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.funcionario.dataInicial},on:{input:function(t){t.target.composing||a.$set(a.funcionario,"dataInicial",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Dt. Exame")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.data,expression:"complementar.data"}],staticClass:"form-control",attrs:{type:"date",min:a.solicitacao.data},domProps:{value:a.complementar.data},on:{blur:a.verificaData,input:function(t){t.target.composing||a.$set(a.complementar,"data",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Exame")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.exame.nomeExame,expression:"complementar.exame.nomeExame"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.complementar.exame.nomeExame},on:{input:function(t){t.target.composing||a.$set(a.complementar.exame,"nomeExame",t.target.value)}}})])]),a._v(" "),"MASCULINO"==a.funcionario.pessoa.sexo?e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("H. Min")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.exame.referenciaMinMasculino,expression:"complementar.exame.referenciaMinMasculino"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.complementar.exame.referenciaMinMasculino},on:{input:function(t){t.target.composing||a.$set(a.complementar.exame,"referenciaMinMasculino",t.target.value)}}})])]):a._e(),a._v(" "),"MASCULINO"==a.funcionario.pessoa.sexo?e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("H. Max")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.exame.referenciaMaxMasculino,expression:"complementar.exame.referenciaMaxMasculino"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.complementar.exame.referenciaMaxMasculino},on:{input:function(t){t.target.composing||a.$set(a.complementar.exame,"referenciaMaxMasculino",t.target.value)}}})])]):a._e(),a._v(" "),"FEMININO"==a.funcionario.pessoa.sexo?e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("M. Min")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.exame.referenciaMinFeminino,expression:"complementar.exame.referenciaMinFeminino"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.complementar.exame.referenciaMinFeminino},on:{input:function(t){t.target.composing||a.$set(a.complementar.exame,"referenciaMinFeminino",t.target.value)}}})])]):a._e(),a._v(" "),"FEMININO"==a.funcionario.pessoa.sexo?e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("M. Max")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.complementar.exame.referenciaMaxFeminino,expression:"complementar.exame.referenciaMaxFeminino"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.complementar.exame.referenciaMaxFeminino},on:{input:function(t){t.target.composing||a.$set(a.complementar.exame,"referenciaMaxFeminino",t.target.value)}}})])]):a._e()]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Resultado")]),a._v(" "),e("div",{staticClass:"input-group mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text"}}),a._v(" "),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[a._v(a._s(a.complementar.exame.unidadeMedida))])])])])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Ordem do Exame")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.complementar.ordemExame,expression:"complementar.ordemExame"}],staticClass:"form-control",attrs:{disabled:""},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.complementar,"ordemExame",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"INICIAL"}},[a._v("Inicial")]),a._v(" "),e("option",{attrs:{value:"SEQUENCIAL"}},[a._v("Sequencial")])])])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Indicação do Resultado")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.complementar.indicacaoResultado,expression:"complementar.indicacaoResultado"}],staticClass:"form-control",on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.complementar,"indicacaoResultado",t.target.multiple?e:e[0])},a.mudouIndicacao]}},[e("option",{attrs:{value:"NORMAL"}},[a._v("Normal")]),a._v(" "),a.historico.length>0&&"ALTERADO"!=a.historico[a.historico.length-1].indicacaoResultado&&"ESTÁVEL"!=a.historico[a.historico.length-1].indicacaoResultado||"INICIAL"==a.complementar.ordemExame?e("option",{attrs:{value:"ALTERADO"}},[a._v("Alterado")]):a._e(),a._v(" "),"INICIAL"!=a.complementar.ordemExame&&a.historico.length>0&&"NORMAL"!=a.historico[a.historico.length-1].indicacaoResultado?e("option",{attrs:{value:"ESTÁVEL"}},[a._v("Estável")]):a._e(),a._v(" "),"INICIAL"!=a.complementar.ordemExame&&a.historico.length>0&&"NORMAL"!=a.historico[a.historico.length-1].indicacaoResultado&&"AGRAVAMENTO"!=a.historico[a.historico.length-1].indicacaoResultado?e("option",{attrs:{value:"AGRAVAMENTO"}},[a._v("Agravamento")]):a._e()])])]),a._v(" "),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Grau")]),a._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.complementar.grau,expression:"complementar.grau"}],staticClass:"form-control",attrs:{disabled:"NORMAL"==a.complementar.indicacaoResultado},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.complementar,"grau",t.target.multiple?e:e[0])}}},["NORMAL"==a.complementar.indicacaoResultado?e("option",{attrs:{value:"NORMAL"}},[a._v("Normal")]):a._e(),a._v(" "),"NORMAL"!=a.complementar.indicacaoResultado?e("option",{attrs:{value:"ALTERADO_LEVE"}},[a._v("Leve")]):a._e(),a._v(" "),"NORMAL"!=a.complementar.indicacaoResultado?e("option",{attrs:{value:"ALTERADO_MODERADO"}},[a._v("Moderado")]):a._e(),a._v(" "),"NORMAL"!=a.complementar.indicacaoResultado?e("option",{attrs:{value:"ALTERADO_SEVERO"}},[a._v("Severo")]):a._e()])])]),a._v(" "),e("div",{staticClass:"col-md-4 mt-4"},[e("span",{staticStyle:{display:"none"}},[a._v(a._s(a.temPdf))]),a._v(" "),e("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:a.handleFileUpload}}),a._v(" "),e("div",{staticClass:"row"},[a.complementar.caminhoPdf?a._e():e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:a.abrirUpload}},[e("i",{staticClass:"fa fa-upload"}),a._v(" Inserir PDF")])])]),a._v(" "),e("div",{staticClass:"row"},[a.complementar.caminhoPdf?e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:a.abrirUpload}},[e("i",{staticClass:"fa fa-upload"}),a._v(" Atualizar PDF")])]):a._e(),a._v(" "),a.complementar.caminhoPdf?e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:function(t){return a.pdf(a.complementar)}}},[e("i",{staticClass:"fa fa-upload"}),a._v(" Visualizar PDF")])]):a._e()])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[a._v("Descrição do Resultado")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.complementar.observacao,expression:"complementar.observacao"}],staticClass:"form-control",domProps:{value:a.complementar.observacao},on:{input:function(t){t.target.composing||a.$set(a.complementar,"observacao",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"titulo"},[a._v("Histórico de Exames")])]),a._v(" "),e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table table-hover table-striped"},[e("thead",[e("tr",[e("th",[a._v("ID SIGSST")]),a._v(" "),e("th",[a._v("eSocial")]),a._v(" "),e("th",[a._v("Exame")]),a._v(" "),e("th",[a._v("Data")]),a._v(" "),e("th",[a._v("Ordem do Exame")]),a._v(" "),e("th",[a._v("Indicação dos Resultados")]),a._v(" "),e("th",[a._v("Grau")]),a._v(" "),e("th",[a._v("PDF")]),a._v(" "),e("th")])]),a._v(" "),e("tbody",a._l(a.historico,(function(t){return e("tr",[e("td",[a._v(a._s(t.exame.idExame))]),a._v(" "),e("td",[a._v(a._s(t.exame.tabela27))]),a._v(" "),e("td",[a._v(a._s(t.exame.nomeExame))]),a._v(" "),e("td",[a._v(a._s(a._f("moment")(t.dataExame,"DD/MM/YYYY")))]),a._v(" "),e("td",[a._v(a._s(t.ordemExame))]),a._v(" "),e("td",[a._v(a._s(t.indicacaoResultado))]),a._v(" "),e("td",[a._v(a._s(t.situacao))]),a._v(" "),e("td",[e("a",{on:{click:function(e){return a.pdf(t)}}},[e("img",{attrs:{src:"/img/pdf.png",width:"21px"}})])]),a._v(" "),e("td")])})),0)])])])])],1)}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"content-header"},[e("h1",[a._v("\n            Exames Complementares\n            "),e("small",[a._v("Listagem")])]),a._v(" "),e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-home"}),a._v(" Início")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#"}},[a._v("Medicina")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#"}},[a._v("Exames Complementares")])])])])}],!1,null,"4d418b08",null);t.default=i.exports}}]);