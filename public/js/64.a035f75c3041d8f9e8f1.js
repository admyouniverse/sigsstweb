(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{0:function(t,o,a){"use strict";function e(t,o,a,e,r,n,i,s){var l,u="function"==typeof t?t.options:t;if(o&&(u.render=o,u.staticRenderFns=a,u._compiled=!0),e&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var p=u.render;u.render=function(t,o){return l.call(o),p(t,o)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}a.d(o,"a",(function(){return e}))},163:function(t,o,a){var e=a(296);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(2)(e,r);e.locals&&(t.exports=e.locals)},295:function(t,o,a){"use strict";a(163)},296:function(t,o,a){(t.exports=a(1)(!1)).push([t.i,".titulo[data-v-6b3cc423]{text-align:center;background-color:#00a65a;padding:6px;color:#fff;font-size:17px;margin-top:5px}.form-remove[type=date][data-v-6b3cc423]::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}",""])},73:function(t,o,a){"use strict";a.r(o);var e={props:["prontuario","empresa"],data:function(){return{gruposControle:[],grupoControle:{idProntuarioGrupoControle:0,grupoControle:{},prontuario:0,dataIni:"",dataFim:"",caminhoPdf:""},grupos:[]}},computed:{idade:function(){var t=new Date(this.prontuario.empresaFuncionario.pessoa.dataNascimento),o=new Date,a=o.getFullYear()-t.getFullYear();return new Date(o.getFullYear(),o.getMonth(),o.getDate())<new Date(o.getFullYear(),t.getMonth(),t.getDate())&&a--,console.log(a),a}},methods:{mudouAfastamento:function(){var t=new Date(this.grupoControle.dataIni);t<new Date(this.prontuario.dataIni)?(this.$alert("Data de grupo deve ser maior ou igual a data inicial do prontuário","Ops!","error"),this.grupoControle.dataIni=this.prontuario.dataIni):this.gruposControle.length>0&&t<new Date(this.gruposControle[this.gruposControle.length-1].dataFim)&&(this.$alert("Data de grupo deve ser maior ou igual a data de retorno do último grupo","Ops!","error"),this.grupoControle.dataIni=this.gruposControle[this.gruposControle.length-1].dataFim)},mudouRetorno:function(){if(this.grupoControle.dataFim){var t=new Date(this.grupoControle.dataIni);new Date(this.grupoControle.dataFim)<t&&(this.grupoControle.dataFim=null,this.$alert("Data final deve ser maior que a data inicial de grupo","Ops!","error"))}},dias:function(t){var o=new Date(grupoControle.dataIni);if(grupoControle.dataFim)var a=new Date(grupoControle.dataFim);else a=new Date;var e=Math.abs(o.getTime()-a.getTime());return Math.ceil(e/864e5)+" dias"},incluir:function(){this.$refs.modalAfastamento.show()},salvar:function(){var t=this;axios.post("/prontuario-medico/grupo",{prontuario:t.prontuario,grupo:t.grupoControle}).then((function(o){axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/"+t.prontuario.idProntuario).then((function(o){t.gruposControle=o.data}))}))},editar:function(t){this.grupo=t,console.log(this.grupo),this.$refs.modalAfastamento.show()}},mounted:function(){var t=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/prontuario-grupos-controle/listaPorIdProntuario/"+this.prontuario.idProntuario).then((function(o){t.gruposControle=o.data,console.log("grupos",t.gruposControle)})),axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/grupos-controle").then((function(o){t.grupos=o.data,console.log(t.grupos)}))}},r=(a(295),a(0)),n=Object(r.a)(e,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Matricula")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.prontuario.empresaFuncionario.matricula,expression:"prontuario.empresaFuncionario.matricula"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:t.prontuario.empresaFuncionario.matricula},on:{input:function(o){o.target.composing||t.$set(t.prontuario.empresaFuncionario,"matricula",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("CPF")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.prontuario.empresaFuncionario.pessoa.cpf,expression:"prontuario.empresaFuncionario.pessoa.cpf"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:t.prontuario.empresaFuncionario.pessoa.cpf},on:{input:function(o){o.target.composing||t.$set(t.prontuario.empresaFuncionario.pessoa,"cpf",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Nome")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.prontuario.empresaFuncionario.pessoa.nomePessoa,expression:"prontuario.empresaFuncionario.pessoa.nomePessoa"}],staticClass:"form-control",attrs:{disabled:"",type:"text"},domProps:{value:t.prontuario.empresaFuncionario.pessoa.nomePessoa},on:{input:function(o){o.target.composing||t.$set(t.prontuario.empresaFuncionario.pessoa,"nomePessoa",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Dt. Nasc.")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.prontuario.empresaFuncionario.pessoa.dataNascimento,expression:"prontuario.empresaFuncionario.pessoa.dataNascimento"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:t.prontuario.empresaFuncionario.pessoa.dataNascimento},on:{input:function(o){o.target.composing||t.$set(t.prontuario.empresaFuncionario.pessoa,"dataNascimento",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-1"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Idade")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.idade,expression:"idade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.idade},on:{input:function(o){o.target.composing||(t.idade=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Data Inicial")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.prontuario.dataIni,expression:"prontuario.dataIni"}],staticClass:"form-control form-remove",attrs:{type:"date",disabled:""},domProps:{value:t.prontuario.dataIni},on:{input:function(o){o.target.composing||t.$set(t.prontuario,"dataIni",o.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-success btn-sm mb-2",attrs:{disabled:t.gruposControle.length>0&&!t.gruposControle[t.gruposControle.length-1].dataRetorno},on:{click:t.incluir}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Adicionar")])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-hover table-striped table-empregados",attrs:{id:"tabelaListagemEmpregados"}},[t._m(1),t._v(" "),a("tbody",t._l(t.gruposControle,(function(o){return a("tr",[a("td",[t._v(t._s(o.idProntuarioGrupoControle))]),t._v(" "),a("td",[t._v(t._s(o.grupoControle.nome))]),t._v(" "),a("td",[t._v(t._s(t._f("moment")(o.dataIni,"DD/MM/YYYY")))]),t._v(" "),a("td",[t._v(t._s(t._f("moment")(o.dataFim,"DD/MM/YYYY")))]),t._v(" "),a("td",[t._v(t._s(t.dias(o)))]),t._v(" "),a("td"),t._v(" "),a("td",[a("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(o){return t.editar(t.grupo)}}},[a("i",{staticClass:"fas fa-pencil-alt"})])])])})),0)])])]),t._v(" "),a("b-modal",{ref:"modalAfastamento",attrs:{size:"lg",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Grupo de Controle","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:t.salvar}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.grupoControle.idProntuarioGrupoControle,expression:"grupoControle.idProntuarioGrupoControle"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.grupoControle.idProntuarioGrupoControle},on:{input:function(o){o.target.composing||t.$set(t.grupoControle,"idProntuarioGrupoControle",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Grupo de Controle")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.grupoControle.grupoControle,expression:"grupoControle.grupoControle"}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.grupoControle,"grupoControle",o.target.multiple?a:a[0])}}},t._l(t.grupos,(function(o){return a("option",{domProps:{value:o}},[t._v(t._s(o.nome))])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Data Inicial")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.grupoControle.dataIni,expression:"grupoControle.dataIni"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.grupoControle.dataIni},on:{blur:function(o){return t.mudouAfastamento()},input:function(o){o.target.composing||t.$set(t.grupoControle,"dataIni",o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Data Retorno")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.grupoControle.dataFim,expression:"grupoControle.dataFim"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.grupoControle.dataFim},on:{blur:function(o){return t.mudouRetorno()},input:function(o){o.target.composing||t.$set(t.grupoControle,"dataFim",o.target.value)}}})])])])])],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"col-md-12"},[o("h3",{staticClass:"titulo"},[this._v("Lista de Grupos de Controle")])])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Grupo de Controle")]),t._v(" "),a("th",[t._v("Dt. Inicial")]),t._v(" "),a("th",[t._v("Dt. Final")]),t._v(" "),a("th",[t._v("Dias")]),t._v(" "),a("th",[t._v("PDF")]),t._v(" "),a("th",[t._v("Ação")])])])}],!1,null,"6b3cc423",null);o.default=n.exports}}]);