(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{0:function(a,t,o){"use strict";function e(a,t,o,e,s,n,i,r){var l,m="function"==typeof a?a.options:a;if(t&&(m.render=t,m.staticRenderFns=o,m._compiled=!0),e&&(m.functional=!0),n&&(m._scopeId="data-v-"+n),i?(l=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),s&&s.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(i)},m._ssrRegister=l):s&&(l=r?function(){s.call(this,(m.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(m.functional){m._injectStyles=l;var c=m.render;m.render=function(a,t){return l.call(t),c(a,t)}}else{var d=m.beforeCreate;m.beforeCreate=d?[].concat(d,l):[l]}return{exports:a,options:m}}o.d(t,"a",(function(){return e}))},162:function(a,t,o){var e=o(294);"string"==typeof e&&(e=[[a.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(2)(e,s);e.locals&&(a.exports=e.locals)},293:function(a,t,o){"use strict";o(162)},294:function(a,t,o){(a.exports=o(1)(!1)).push([a.i,".titulo[data-v-0f7c6eac]{text-align:center;background-color:#00a65a;padding:6px;color:#fff;font-size:17px;margin-top:5px}.form-remove[type=date][data-v-0f7c6eac]::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}",""])},72:function(a,t,o){"use strict";o.r(t);var e={props:["prontuario","empresa"],data:function(){return{afastamentos:[],motivos:[],cids:[],estados:[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amapá",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Ceará",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Espírito Santo",sigla:"ES"},{nome:"Goiás",sigla:"GO"},{nome:"Maranhão",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Pará",sigla:"PA"},{nome:"Paraíba",sigla:"PB"},{nome:"Paraná",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piauí",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rondônia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"São Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}],afastamento:{idProntuarioAfastamento:0,motivoAfastamento:0,prontuario:0,cid:0,obito:"NÃO",dataAfastamento:"",dataRetorno:"",medico:"",numero:0,conselho:"",uf:"",observacao:""}}},computed:{idade:function(){var a=new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento),t=new Date,o=t.getFullYear()-a.getFullYear();return new Date(t.getFullYear(),t.getMonth(),t.getDate())<new Date(t.getFullYear(),a.getMonth(),a.getDate())&&o--,console.log(o),o}},methods:{mudouAfastamento:function(){var a=new Date(this.afastamento.dataAfastamento);a<new Date(this.prontuario.dataIni)?(this.$alert("Data de afastamento deve ser maior ou igual a data inicial do prontuário","Ops!","error"),this.afastamento.dataAfastamento=this.prontuario.dataIni):this.afastamentos.length>0&&a<new Date(this.afastamentos[this.afastamentos.length-1].dataRetorno)&&(this.$alert("Data de afastamento deve ser maior ou igual a data de retorno do último afastamento","Ops!","error"),this.afastamento.dataAfastamento=this.afastamentos[this.afastamentos.length-1].dataRetorno)},mudouRetorno:function(){if(this.afastamento.dataRetorno){var a=new Date(this.afastamento.dataAfastamento);new Date(this.afastamento.dataRetorno)<a&&(this.afastamento.dataRetorno=null,this.$alert("Data de retorno deve ser maior que a data de afastamento","Ops!","error"))}},dias:function(a){var t=new Date(a.dataAfastamento);if(a.dataRetorno)var o=new Date(a.dataRetorno);else o=new Date;var e=Math.abs(t.getTime()-o.getTime());return Math.ceil(e/864e5)+" dias"},incluir:function(){this.$refs.modalAfastamento.show()},salvar:function(){var a=this;axios.post("/prontuario-medico/afastamento",{prontuario:a.prontuario,afastamento:a.afastamento}).then((function(t){axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/"+a.prontuario.idProntuario).then((function(t){a.afastamentos=t.data}))}))},editar:function(a){this.afastamento=a,console.log(this.afastamento),this.$refs.modalAfastamento.show()}},mounted:function(){var a=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-afastamentos/listaPorIdProntuario/"+this.prontuario.idProntuario).then((function(t){a.afastamentos=t.data})),axios.get("/tabelas/motivo-de-afastamento/list").then((function(t){a.motivos=t.data})),axios.get("/tabelas/cid/list").then((function(t){a.cids=t.data}))}},s=(o(293),o(0)),n=Object(s.a)(e,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Matricula")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.prontuario.empresaFuncionario.matricula,expression:"prontuario.empresaFuncionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.prontuario.empresaFuncionario.matricula},on:{input:function(t){t.target.composing||a.$set(a.prontuario.empresaFuncionario,"matricula",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("CPF")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.prontuario.empresaFuncionario.pessoa.cpf,expression:"prontuario.empresaFuncionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.prontuario.empresaFuncionario.pessoa.cpf},on:{input:function(t){t.target.composing||a.$set(a.prontuario.empresaFuncionario.pessoa,"cpf",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Nome")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.prontuario.empresaFuncionario.pessoa.nomePessoa,expression:"prontuario.empresaFuncionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:a.prontuario.empresaFuncionario.pessoa.nomePessoa},on:{input:function(t){t.target.composing||a.$set(a.prontuario.empresaFuncionario.pessoa,"nomePessoa",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Dt. Nasc.")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.prontuario.empresaFuncionario.pessoa.dataNascimento,expression:"prontuario.empresaFuncionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.prontuario.empresaFuncionario.pessoa.dataNascimento},on:{input:function(t){t.target.composing||a.$set(a.prontuario.empresaFuncionario.pessoa,"dataNascimento",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-1"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Idade")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.idade},on:{input:function(t){t.target.composing||(a.idade=t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Data Inicial")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.prontuario.dataIni,expression:"prontuario.dataIni"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:a.prontuario.dataIni},on:{input:function(t){t.target.composing||a.$set(a.prontuario,"dataIni",t.target.value)}}})])])]),a._v(" "),o("div",{staticClass:"row"},[a._m(0),a._v(" "),o("div",{staticClass:"col-md-12"},[o("button",{staticClass:"btn btn-success btn-sm mb-2",attrs:{disabled:a.afastamentos.length>0&&!a.afastamentos[a.afastamentos.length-1].dataRetorno},on:{click:a.incluir}},[o("i",{staticClass:"fas fa-plus"}),a._v(" Adicionar")])]),a._v(" "),o("div",{staticClass:"col-md-12"},[o("table",{staticClass:"table table-hover table-striped table-empregados",attrs:{id:"tabelaListagemEmpregados"}},[a._m(1),a._v(" "),o("tbody",a._l(a.afastamentos,(function(t){return o("tr",[o("td",[a._v(a._s(t.idProntuarioAfastamento))]),a._v(" "),o("td",[a._v(a._s(t.cid.idCid)+" - "+a._s(t.cid.descricao))]),a._v(" "),o("td",[a._v(a._s(a._f("moment")(t.dataAfastamento,"DD/MM/YYYY")))]),a._v(" "),o("td",[a._v(a._s(a._f("moment")(t.dataRetorno,"DD/MM/YYYY")))]),a._v(" "),o("td",[a._v(a._s(a.dias(t)))]),a._v(" "),o("td",[a._v(a._s(t.observacao))]),a._v(" "),o("td"),a._v(" "),o("td",[o("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(o){return a.editar(t)}}},[o("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]),a._v(" "),o("b-modal",{ref:"modalAfastamento",attrs:{size:"lg",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Afastar","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:a.salvar}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-1"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("ID")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.idProntuarioAfastamento,expression:"afastamento.idProntuarioAfastamento"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.afastamento.idProntuarioAfastamento},on:{input:function(t){t.target.composing||a.$set(a.afastamento,"idProntuarioAfastamento",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Obito")]),a._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.obito,expression:"afastamento.obito"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.afastamento,"obito",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"SIM"}},[a._v("Sim")]),a._v(" "),o("option",{attrs:{value:"NÃO"}},[a._v("Não")])])])]),a._v(" "),o("div",{staticClass:"col-md-9"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Motivo")]),a._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.motivoAfastamento,expression:"afastamento.motivoAfastamento"}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.afastamento,"motivoAfastamento",t.target.multiple?o:o[0])}}},a._l(a.motivos,(function(t){return"SIM"==t.prontuario?o("option",{domProps:{value:t}},[a._v(a._s(t.codigoMotivo)+" - "+a._s(t.descricao))]):a._e()})),0)])]),a._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("CID")]),a._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.cid,expression:"afastamento.cid"}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.afastamento,"cid",t.target.multiple?o:o[0])}}},a._l(a.cids,(function(t){return o("option",{domProps:{value:t}},[a._v(a._s(t.codigoCid)+" - "+a._s(t.descricao))])})),0)])]),a._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Dt. Afasta")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.dataAfastamento,expression:"afastamento.dataAfastamento"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.afastamento.dataAfastamento},on:{blur:function(t){return a.mudouAfastamento()},input:function(t){t.target.composing||a.$set(a.afastamento,"dataAfastamento",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Dt. Retorno")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.dataRetorno,expression:"afastamento.dataRetorno"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:a.afastamento.dataRetorno},on:{blur:function(t){return a.mudouRetorno()},input:function(t){t.target.composing||a.$set(a.afastamento,"dataRetorno",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-12"},[o("h3",{staticClass:"titulo"},[a._v("Lista de afastamentos")])]),a._v(" "),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Observações")]),a._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.observacao,expression:"afastamento.observacao"}],staticClass:"form-control",domProps:{value:a.afastamento.observacao},on:{input:function(t){t.target.composing||a.$set(a.afastamento,"observacao",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Médico")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.medico,expression:"afastamento.medico"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.afastamento.medico},on:{input:function(t){t.target.composing||a.$set(a.afastamento,"medico",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Conselho")]),a._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.conselho,expression:"afastamento.conselho"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.afastamento,"conselho",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"CRO"}},[a._v("CRO")]),a._v(" "),o("option",{attrs:{value:"CRM"}},[a._v("CRM")])])])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("Número")]),a._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.numero,expression:"afastamento.numero"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.afastamento.numero},on:{input:function(t){t.target.composing||a.$set(a.afastamento,"numero",t.target.value)}}})])]),a._v(" "),o("div",{staticClass:"col-md-2"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[a._v("UF")]),a._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:a.afastamento.uf,expression:"afastamento.uf"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.afastamento,"uf",t.target.multiple?o:o[0])}}},a._l(a.estados,(function(t){return o("option",{domProps:{value:t.sigla}},[a._v(a._s(t.sigla))])})),0)])])])])],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col-md-12"},[t("h3",{staticClass:"titulo"},[this._v("Lista de afastamentos")])])},function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("thead",[o("tr",[o("th",[a._v("ID")]),a._v(" "),o("th",[a._v("CID")]),a._v(" "),o("th",[a._v("Dt. Afasta")]),a._v(" "),o("th",[a._v("Dt. Retorno")]),a._v(" "),o("th",[a._v("Dias At.")]),a._v(" "),o("th",[a._v("Observação")]),a._v(" "),o("th",[a._v("PDF")]),a._v(" "),o("th",[a._v("Ação")])])])}],!1,null,"0f7c6eac",null);t.default=n.exports}}]);