(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{164:function(e,a,t){"use strict";function i(e,a,t,i,o,s,r,n){var c,d="function"==typeof e?e.options:e;if(a&&(d.render=a,d.staticRenderFns=t,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):o&&(c=n?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,a){return c.call(a),l(e,a)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}t.d(a,"a",(function(){return i}))},214:function(e,a,t){var i=t(333);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(132)(i,o);i.locals&&(e.exports=i.locals)},332:function(e,a,t){"use strict";t(214)},333:function(e,a,t){(e.exports=t(131)(!1)).push([e.i,".titulo[data-v-d621477c] {\n  text-align: center;\n  background-color: #00a65a;\n  padding: 6px;\n  color: white;\n  font-size: 17px;\n  margin-top: 5px;\n}\n.form-remove[type=date][data-v-d621477c]::-webkit-calendar-picker-indicator {\n  display: none;\n  -webkit-appearance: none;\n}",""])},77:function(e,a,t){"use strict";t.r(a);var i;function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var s={props:["prontuario","empresa"],data:function(){return{deficiencia:"",necessidades:"",estados:[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amapá",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Ceará",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Espírito Santo",sigla:"ES"},{nome:"Goiás",sigla:"GO"},{nome:"Maranhão",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Pará",sigla:"PA"},{nome:"Paraíba",sigla:"PB"},{nome:"Paraná",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piauí",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rondônia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"São Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}],prontuarioNecessidade:{idProntuarioNecessidade:0,prontuario:{},urlPdf:"",observacao:"",descricaoDeficiencia:"",nomeMedico:"",crmMedico:"",ufMedico:"",necessidade:{},deficienciaOrigem:"",cid:{descricao:""},dataInicial:"",dataFinal:"",reabilitadoINSS:"",informacaoCota:"",usuario:1},prontuarioNecessidades:[],file:"",cids:[],pcd:"NÃO",carregando:!1,mensagem:"Carregando...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'}},computed:{idade:function(){var e=new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento),a=new Date,t=a.getFullYear()-e.getFullYear();return new Date(a.getFullYear(),a.getMonth(),a.getDate())<new Date(a.getFullYear(),e.getMonth(),e.getDate())&&t--,console.log(t),t}},methods:(i={pdf:function(e){e.urlPdf?window.open("http://200.98.201.236:8081/"+e.urlPdf):alert("Não há PDF anexado.")},incluirPCD:function(){this.prontuarioNecessidade={idProntuarioNecessidade:0,prontuario:{},urlPdf:"",observacao:"",descricaoDeficiencia:"",nomeMedico:"",crmMedico:"",ufMedico:"",necessidade:{},deficienciaOrigem:"",cid:{descricao:""},dataInicial:"",dataFinal:"",reabilitadoINSS:"",informacaoCota:"",usuario:1},this.$refs.modalPcd.show()},abrirUpload:function(){$("#file").click()},mudouInicial:function(){var e=new Date(this.prontuario.dataIni);new Date(this.prontuarioNecessidade.dataInicial)<e&&(this.prontuarioNecessidade.dataInicial=null,this.$alert("Data de inicial deve ser maior ou igual a data admissional","Ops!","error"))},mudouFinal:function(){var e=new Date(this.prontuarioNecessidade.dataFinal);new Date(this.prontuarioNecessidade.dataInicial)>e&&(this.prontuarioNecessidade.dataFinal=null,this.$alert("Data de final deve ser maior ou igual a data admissional","Ops!","error"))}},o(i,"pdf",(function(e){e.urlPdf?window.open("http://200.98.201.236:8081/"+e.urlPdf):alert("Não há PDF anexado.")})),o(i,"handleFileUpload",(function(){this.file=this.$refs.file.files[0],this.submitFile()})),o(i,"preencher",(function(e){this.prontuarioNecessidade=e,this.deficiencia=e.necessidade.tipo,this.$refs.modalPcd.show()})),o(i,"remover",(function(e){var a=this;axios.get("/prontuario-medico/pcd/"+e.idProntuarioNecessidade).then((function(e){axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/"+a.prontuario.idProntuario).then((function(e){a.prontuarioNecessidades=e.data}))}))})),o(i,"carregar",(function(e){this.mensagem=e,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0})),o(i,"salvar",(function(e){e.preventDefault();var a=this;this.prontuarioNecessidade.prontuario=this.prontuario,this.carregar("Salvando dados..."),axios.post("/prontuario-medico/pcd",{prontuarioNecessidade:a.prontuarioNecessidade}).then((function(e){console.log(e.data),"false"==e.data.status?(a.carregando=!1,a.$alert(e.data.msg,"Erro!","error")):axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/"+a.prontuario.idProntuario).then((function(e){a.prontuarioNecessidades=e.data,a.$refs.modalPcd.hide(),a.carregando=!1,a.$alert("Dados salvos!","Sucesso!","success")}))}))})),o(i,"submitFile",(function(){console.log("submentendo....");var e=new FormData;e.append("file",this.file);var a=this;axios.post("http://200.98.201.236:8081/upload-file",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.prontuarioNecessidade.urlPdf=e.data.data.new_file_name,console.log(a.prontuarioNecessidade.urlPdf),a.temPdf=!0})).catch((function(){}))})),i),mounted:function(){var e=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/necessidades").then((function(a){e.necessidades=a.data})),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/cids").then((function(a){e.cids=a.data})),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-necessidades/listaPorIdProntuario/"+this.prontuario.idProntuario).then((function(a){e.prontuarioNecessidades=a.data}))}},r=(t(332),t(164)),n=Object(r.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.carregando?t("BlockUI",{attrs:{message:e.mensagem,html:e.html}}):e._e(),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Matricula")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.matricula,expression:"prontuario.empresaFuncionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:e.prontuario.empresaFuncionario.matricula},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario,"matricula",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("CPF")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.pessoa.cpf,expression:"prontuario.empresaFuncionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:e.prontuario.empresaFuncionario.pessoa.cpf},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.pessoa,"cpf",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Nome")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.pessoa.nomePessoa,expression:"prontuario.empresaFuncionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:e.prontuario.empresaFuncionario.pessoa.nomePessoa},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.pessoa,"nomePessoa",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Dt. Nasc.")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.pessoa.dataNascimento,expression:"prontuario.empresaFuncionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:e.prontuario.empresaFuncionario.pessoa.dataNascimento},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.pessoa,"dataNascimento",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-1"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Idade")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.idade},on:{input:function(a){a.target.composing||(e.idade=a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Data de Admissão")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.dataIni,expression:"prontuario.dataIni"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:e.prontuario.dataIni},on:{input:function(a){a.target.composing||e.$set(e.prontuario,"dataIni",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Contrato")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia,expression:"prontuario.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.prontuario.empresaFuncionario.empresaContrato.empresaContratante.nomeFantasia},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.empresaContrato.empresaContratante,"nomeFantasia",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Ambiente Trabalho")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho,expression:"prontuario.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.prontuario.empresaFuncionario.ambienteTrabalho.nomeAmbienteTrabalho},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.ambienteTrabalho,"nomeAmbienteTrabalho",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Cargo")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuario.empresaFuncionario.funcao.cargo,expression:"prontuario.empresaFuncionario.funcao.cargo"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.prontuario.empresaFuncionario.funcao.cargo},on:{input:function(a){a.target.composing||e.$set(e.prontuario.empresaFuncionario.funcao,"cargo",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[e._m(0),e._v(" "),t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"form-group"},[t("label",[e._v("PCD?")]),e._v(" "),0==e.prontuarioNecessidades.length||e.prontuarioNecessidades.length>0&&e.prontuarioNecessidades[e.prontuarioNecessidades.length-1].dataFinal?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e(),e._v(" "),e.prontuarioNecessidades.length>0&&!e.prontuarioNecessidades[e.prontuarioNecessidades.length-1].dataFinal?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"SIM"}}):e._e()])]),e._v(" "),0==e.prontuarioNecessidades.length||e.prontuarioNecessidades.length>0&&e.prontuarioNecessidades[e.prontuarioNecessidades.length-1].dataFinal?t("div",{staticClass:"col-md-9 mt-4"},[t("button",{staticClass:"btn btn-success",on:{click:e.incluirPCD}},[t("i",{staticClass:"fa fa-plus"}),e._v(" Incluir")])]):e._e()]),e._v(" "),e.prontuarioNecessidades.length>0?t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("table",{staticClass:"table table-hover table-striped table-empregados"},[e._m(1),e._v(" "),t("tbody",e._l(e.prontuarioNecessidades,(function(a){return t("tr",[t("td",[e._v(e._s(a.idProntuarioNecessidade))]),e._v(" "),t("td",[e._v(e._s(a.necessidade.descricao))]),e._v(" "),t("td",[e._v(e._s(a.cid.codigoCid))]),e._v(" "),t("td",[e._v(e._s(a.necessidade.tipo))]),e._v(" "),t("td",[e._v(e._s(a.deficienciaOrigem))]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(a.dataInicial,"DD/MM/YYYY")))]),e._v(" "),t("td",[e._v(e._s(e._f("moment")(a.dataFinal,"DD/MM/YYYY")))]),e._v(" "),e._m(2,!0),e._v(" "),t("td",{staticClass:"text-center"},[t("a",{on:{click:function(t){return e.pdf(a)}}},[t("img",{attrs:{src:"/img/pdf.png",width:"21px"}})])]),e._v(" "),t("td",{staticClass:"text-center"},[a==e.prontuarioNecessidades[e.prontuarioNecessidades.length-1]?t("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(t){return e.remover(a)}}},[t("i",{staticClass:"fa fa-trash"})]):e._e(),e._v(" "),t("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(t){return e.preencher(a)}}},[t("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]):e._e(),e._v(" "),t("b-modal",{ref:"modalPcd",attrs:{"cancel-title":"Cancelar","ok-title":"Salvar",size:"xl",centered:"",title:"Nova Necessidade"},on:{ok:e.salvar}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Cota de PCD?")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.informacaoCota,expression:"prontuarioNecessidade.informacaoCota"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"informacaoCota",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"SIM"}},[e._v("Sim")]),e._v(" "),t("option",{attrs:{value:"NÃO"}},[e._v("Não")])])])]),e._v(" "),t("div",{staticClass:"col-md-9"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Descrição da Deficiencia")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.descricaoDeficiencia,expression:"prontuarioNecessidade.descricaoDeficiencia"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prontuarioNecessidade.descricaoDeficiencia},on:{input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"descricaoDeficiencia",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Origem")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.deficienciaOrigem,expression:"prontuarioNecessidade.deficienciaOrigem"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"deficienciaOrigem",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"ACIDENTE_DE_TRABALHO"}},[e._v("Acidente de Trabalho")]),e._v(" "),t("option",{attrs:{value:"CONGENITA"}},[e._v("Congenita")]),e._v(" "),t("option",{attrs:{value:"ADQUIRIDA_EM_POS_OPERATORIO"}},[e._v("Adquirida Em Pós Operatório")]),e._v(" "),t("option",{attrs:{value:"ACIDENTE_COMUM"}},[e._v("Acidente Comum")]),e._v(" "),t("option",{attrs:{value:"ACIDENTE_COMUM"}},[e._v("Doença do Trabalho")])])])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("CID")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.cid,expression:"prontuarioNecessidade.cid"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"cid",a.target.multiple?t:t[0])}}},e._l(e.cids,(function(a){return t("option",{domProps:{value:a}},[e._v(e._s(a.codigoCid))])})),0)])]),e._v(" "),t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Descrição do CID")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.cid.descricao,expression:"prontuarioNecessidade.cid.descricao"}],staticClass:"form-control",attrs:{disabled:""},domProps:{value:e.prontuarioNecessidade.cid.descricao},on:{input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade.cid,"descricao",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Deficiência Fisica?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},["FISICO"==e.deficiencia||""==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.deficiencia,expression:"deficiencia"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deficiencia=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"FISICO"}},[e._v("SIM")]),e._v(" "),t("option",{attrs:{value:""}},[e._v("NÃO")])]):e._e(),e._v(" "),"FISICO"!=e.deficiencia&&""!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e()]),e._v(" "),t("div",{staticClass:"col-md-8"},["FISICO"==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.necessidade,expression:"prontuarioNecessidade.necessidade"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"necessidade",a.target.multiple?t:t[0])}}},e._l(e.necessidades,(function(a){return"FISICO"==a.tipo?t("option",{domProps:{value:a}},[e._v(e._s(a.descricao))]):e._e()})),0):e._e(),e._v(" "),"FISICO"!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}}):e._e()])])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Deficiência Visual?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},["VISUAL"==e.deficiencia||""==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.deficiencia,expression:"deficiencia"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deficiencia=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"VISUAL"}},[e._v("SIM")]),e._v(" "),t("option",{attrs:{value:""}},[e._v("NÃO")])]):e._e(),e._v(" "),"VISUAL"!=e.deficiencia&&""!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e()]),e._v(" "),t("div",{staticClass:"col-md-8"},["VISUAL"==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.necessidade,expression:"prontuarioNecessidade.necessidade"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"necessidade",a.target.multiple?t:t[0])}}},e._l(e.necessidades,(function(a){return"VISUAL"==a.tipo?t("option",{domProps:{value:a}},[e._v(e._s(a.descricao))]):e._e()})),0):e._e(),e._v(" "),"VISUAL"!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}}):e._e()])])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Deficiência Auditiva?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},["AUDITIVO"==e.deficiencia||""==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.deficiencia,expression:"deficiencia"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deficiencia=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"AUDITIVO"}},[e._v("SIM")]),e._v(" "),t("option",{attrs:{value:""}},[e._v("NÃO")])]):e._e(),e._v(" "),"AUDITIVO"!=e.deficiencia&&""!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e()]),e._v(" "),t("div",{staticClass:"col-md-8"},["AUDITIVO"==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.necessidade,expression:"prontuarioNecessidade.necessidade"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"necessidade",a.target.multiple?t:t[0])}}},e._l(e.necessidades,(function(a){return"AUDITIVO"==a.tipo?t("option",{domProps:{value:a}},[e._v(e._s(a.descricao))]):e._e()})),0):e._e(),e._v(" "),"AUDITIVO"!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}}):e._e()])])])]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Deficiência Mental?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},["MENTAL"==e.deficiencia||""==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.deficiencia,expression:"deficiencia"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deficiencia=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"MENTAL"}},[e._v("SIM")]),e._v(" "),t("option",{attrs:{value:""}},[e._v("NÃO")])]):e._e(),e._v(" "),"MENTAL"!=e.deficiencia&&""!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e()]),e._v(" "),t("div",{staticClass:"col-md-8"},["MENTAL"==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.necessidade,expression:"prontuarioNecessidade.necessidade"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"necessidade",a.target.multiple?t:t[0])}}},e._l(e.necessidades,(function(a){return"MENTAL"==a.tipo?t("option",{domProps:{value:a}},[e._v(e._s(a.descricao))]):e._e()})),0):e._e(),e._v(" "),"MENTAL"!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}}):e._e()])])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Deficiência Intelectual?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},["INTELECTUAL"==e.deficiencia||""==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.deficiencia,expression:"deficiencia"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.deficiencia=a.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"INTELECTUAL"}},[e._v("SIM")]),e._v(" "),t("option",{attrs:{value:""}},[e._v("NÃO")])]):e._e(),e._v(" "),"INTELECTUAL"!=e.deficiencia&&""!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",value:"NÃO"}}):e._e()]),e._v(" "),t("div",{staticClass:"col-md-8"},["INTELECTUAL"==e.deficiencia?t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.necessidade,expression:"prontuarioNecessidade.necessidade"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"necessidade",a.target.multiple?t:t[0])}}},e._l(e.necessidades,(function(a){return"INTELECTUAL"==a.tipo?t("option",{domProps:{value:a}},[e._v(e._s(a.descricao))]):e._e()})),0):e._e(),e._v(" "),"INTELECTUAL"!=e.deficiencia?t("input",{staticClass:"form-control",attrs:{type:"text",disabled:""}}):e._e()])])]),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Reabilitado INSS?")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.reabilitadoINSS,expression:"prontuarioNecessidade.reabilitadoINSS"}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"reabilitadoINSS",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"SIM"}},[e._v("Sim")]),e._v(" "),t("option",{attrs:{value:"NÃO"}},[e._v("Não")])])]),e._v(" "),"SIM"==e.prontuarioNecessidade.reabilitadoINSS?t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"row"},[t("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:e.handleFileUpload}}),e._v(" "),e.prontuarioNecessidade.urlPdf?e._e():t("div",{staticClass:"col-md-12"},[t("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:e.abrirUpload}},[t("i",{staticClass:"fa fa-upload"}),e._v(" Inserir PDF")])]),e._v(" "),e.prontuarioNecessidade.urlPdf?t("div",{staticClass:"col-md-6"},[t("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:e.abrirUpload}},[t("i",{staticClass:"fa fa-upload"}),e._v(" Atualizar PDF")])]):e._e(),e._v(" "),e.prontuarioNecessidade.urlPdf?t("div",{staticClass:"col-md-6"},[t("button",{staticClass:"btn pull-right btn-success btn-block",on:{click:function(a){return e.pdf(e.prontuarioNecessidade)}}},[t("i",{staticClass:"fa fa-upload"}),e._v(" Visualizar PDF")])]):e._e()])]):e._e()])])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Observações")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.observacao,expression:"prontuarioNecessidade.observacao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prontuarioNecessidade.observacao},on:{input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"observacao",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Dt Inicial")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.dataInicial,expression:"prontuarioNecessidade.dataInicial"}],staticClass:"form-control",attrs:{type:"date",min:e.prontuario.dataIni},domProps:{value:e.prontuarioNecessidade.dataInicial},on:{blur:e.mudouInicial,input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"dataInicial",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Médico")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.nomeMedico,expression:"prontuarioNecessidade.nomeMedico"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prontuarioNecessidade.nomeMedico},on:{input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"nomeMedico",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("CRM")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.crmMedico,expression:"prontuarioNecessidade.crmMedico"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prontuarioNecessidade.crmMedico},on:{input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"crmMedico",a.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("UF")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.ufMedico,expression:"prontuarioNecessidade.ufMedico"}],staticClass:"form-control",on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.prontuarioNecessidade,"ufMedico",a.target.multiple?t:t[0])}}},e._l(e.estados,(function(a){return t("option",{domProps:{value:a.sigla}},[e._v(e._s(a.nome))])})),0)])]),e._v(" "),t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:""}},[e._v("Dt Final")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.prontuarioNecessidade.dataFinal,expression:"prontuarioNecessidade.dataFinal"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.prontuarioNecessidade.dataFinal},on:{blur:e.mudouFinal,input:function(a){a.target.composing||e.$set(e.prontuarioNecessidade,"dataFinal",a.target.value)}}})])])])])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"col-md-12"},[a("h3",{staticClass:"titulo"},[this._v("Necessidades Especiais")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("ID")]),e._v(" "),t("th",[e._v("Deficiencia")]),e._v(" "),t("th",[e._v("CID")]),e._v(" "),t("th",[e._v("Tipo")]),e._v(" "),t("th",[e._v("Origem")]),e._v(" "),t("th",[e._v("Dt. Inicial")]),e._v(" "),t("th",[e._v("Dt. Final")]),e._v(" "),t("th",[e._v("Observação")]),e._v(" "),t("th",[e._v("PDF")]),e._v(" "),t("th",[e._v("Ação")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-success btn-sm"},[a("i",{staticClass:"fas fa-eye"})])])}],!1,null,"d621477c",null);a.default=n.exports}}]);