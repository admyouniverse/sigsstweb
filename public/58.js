(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{0:function(e,t,a){"use strict";function i(e,t,a,i,o,s,r,d){var n,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(n=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=n):o&&(n=d?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),n)if(c.functional){c._injectStyles=n;var l=c.render;c.render=function(e,t){return n.call(t),l(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,n):[n]}return{exports:e,options:c}}a.d(t,"a",(function(){return i}))},103:function(e,t,a){"use strict";a.r(t);var i={props:["ambiente","ppra"],data:function(){return{fator:{idPpraAmbienteRisco:0,ambienteTrabalho:"",fonteGeradora:"",complemento:"",epc:"",eficaz:"",exposicao:"",criterio:"",pesoX:"",medidasExistentes:"",pesoY:"",pesoYAtenuado:{},pesoXAtenuado:{},dataLancamento:"",observacao:"",risco:"",unidade:{unidadeMedida:{}}},medidas:{idPpraAmbienteRiscoMedida:0,ppraAmbienteRisco:0,medida:0,operadorRelacional:"",dataMedida:"",tecnicaUtilizada:"",unidadeMedida:{unidadeMedida:{unidade:{}}}},riscos:[],fontes:[],unidades:[],pesosx:[],pesosy:[],resultado:0,resultadoAtenuado:0,eixox:{},eixoy:{},criterios:[],fatores:[],nivel:{},nivelAtenuado:{},atual:"",carregando:!0,historicos:[],mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',file:""}},methods:{abrirUpload:function(){$("#file").click()},handleFileUpload:function(){this.file=this.$refs.file.files[0],this.submitFile()},submitFile:function(){var e=new FormData;e.append("file",this.file);var t=this;axios.post("http://200.98.201.236:8081/upload-file",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("SUCCESS!!"),t.fator.caminhoPdf=e.data.data.new_file_name,t.$forceUpdate()})).catch((function(){console.log("FAILURE!!")}))},validar:function(e){"QUANTITATIVO"==this.fator.risco.enquadramento?null!=this.medidas.riscoUnidadeMedida&&Object.keys(this.medidas.riscoUnidadeMedida).length>0&&Object.keys(this.medidas.riscoUnidadeMedida.unidadeMedida).length?e():this.$alert("Preencha a unidade de medida!","Ops.","warning"):e()},mudouUnidadeMedida:function(){console.log(this.medidas.riscoUnidadeMedida)},salvar:function(e){e.preventDefault();var t=this;this.validar((function(){t.carregar("Salvando..."),t.fator.ambienteTrabalho=t.ambiente,console.log("MEDIDAS",t.medidas),t.fator.medidas=t.medidas,axios.post("/gro/ambiente-risco",{fator:t.fator,medidas:{data:t.medidas.dataMedida,riscoUnidadeMedida:t.medidas.riscoUnidadeMedida,medida:t.medidas.medida,tecnicaUtilizada:t.medidas.tecnicaUtilizada,idPpraAmbienteRiscoMedida:t.medidas.idPpraAmbienteRiscoMedida}}).then((function(e){t.carregando=!1,"erro"!=e.data?(t.fatores=e.data,t.$alert("Salvo.","Sucesso!","success"),t.fechar()):t.$alert("Verifique os dados.","Erro ao salvar!","warning")}))}))},excluir:function(e){var t=this;this.carregar("Excluindo..."),axios.post("/gro/ambiente-risco/remover",{idAmbienteRiscoMedida:e.medida.idPpraAmbienteRiscoMedida,idAmbienteRisco:e.idPpraAmbienteRisco,ambiente:t.ambiente.idPpraAmbienteTrabalho}).then((function(e){"erro"!=e.data?(t.carregando=!1,t.$alert("Excluido.","Sucesso!","success"),t.fatores=e.data):(t.carregando=!1,t.$alert("Verifique os dados.","Erro!","warning"))}))},riscoEmRisco:function(e){for(var t=0;t<this.fatores.length;t++)if(this.fatores[t].risco.idRisco===e.idRisco)return!0;return!1},calculaData:function(){var e=new Date(this.medidas.dataMedida),t=new Date(this.ambiente.ppra.dataHora);e>t&&(t.setDate(t.getDate()+1),this.$alert("Data precisa ser menor que "+t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()),this.medidas.dataMedida=this.ambiente.ppra.dataHora)},carregar:function(e){this.mensagem=e,this.html='<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',this.carregando=!0},recalcular:function(e,t){this.fator=e,this.medidas=e.medida;var a=this;this.fator.ambienteTrabalho=a.ambiente,axios.post("/gro/ambiente-risco",{fator:a.fator,medidas:a.medidas}).then((function(e){a.carregando=!1,a.fatores=e.data}))},recalcularAtenuado:function(e,t){this.fator=e,this.medidas=e.medida;var a=this;this.fator.ambienteTrabalho=a.ambiente,axios.post("/gro/ambiente-risco",{fator:a.fator,medidas:a.medidas}).then((function(e){a.carregando=!1,a.fatores=e.data}))},calculaNivel:function(){if(this.fator.pesoX&&this.fator.pesoY){"MULTIPLICACAO"==this.ambiente.ppra.matrizRisco.criterio?this.resultado=parseInt(this.fator.pesoX.peso)*parseInt(this.fator.pesoY.peso):this.resultado=parseInt(this.fator.pesoX.peso)+parseInt(this.fator.pesoY.peso);var e=this;axios.get("/nivel-matriz/peso/"+this.resultado+"/matriz/"+this.ambiente.ppra.matrizRisco.idMatrizRisco).then((function(t){e.nivel=t.data}))}},calculaNivelAtenuado:function(){if(this.fator.pesoXAtenuado&&this.fator.pesoYAtenuado){"MULTIPLICACAO"==this.ambiente.ppra.matrizRisco.criterio?this.resultadoAtenuado=parseInt(this.fator.pesoXAtenuado.peso)*parseInt(this.fator.pesoYAtenuado.peso):this.resultadoAtenuado=parseInt(this.fator.pesoXAtenuado.peso)+parseInt(this.fator.pesoYAtenuado.peso);var e=this;axios.get("/nivel-matriz/peso/"+this.resultadoAtenuado+"/matriz/"+this.ambiente.ppra.matrizRisco.idMatrizRisco).then((function(t){e.nivelAtenuado=t.data}))}},editar:function(e){this.fator=Object.assign({},e),this.carregar("Buscando dados..."),e.medida?this.medidas=e.medida:this.medidas={idPpraAmbienteRiscoMedida:0,ppraAmbienteRisco:0,medida:0,operadorRelacional:"",dataMedida:"",tecnicaUtilizada:"",unidadeMedida:{unidadeMedida:{unidade:{}}}},console.log(this.fator);var t=this;axios.post("/gro/ambiente-risco/historico",{idEmpresaContrato:t.ppra.empresasContrato[0].idEmpresaContrato,idOrigem:t.ambiente.idOrigem,idRisco:t.fator.risco.idRisco}).then((function(e){t.historicos=e.data,console.log("historicos",t.historicos)})),this.atual=this.fator.risco.idRisco,this.calculaNivel(),this.calculaNivelAtenuado(),this.getUnidades((function(){t.$refs.myModal.show(),t.carregando=!1}))},fechar:function(){this.$refs.myModal.hide()},abrir:function(){this.fator={idPpraAmbienteRisco:0,ambienteTrabalho:"",fonteGeradora:"",complemento:"",epc:"",eficaz:"",exposicao:"",criterio:"",pesoX:"",pesoY:"",dataLancamento:"",medidasExistentes:"",observacao:"",risco:"",unidade:{unidadeMedida:{}}},this.medidas={idPpraAmbienteRiscoMedida:0,ppraAmbienteRisco:0,medida:0,operadorRelacional:"",dataMedida:"",tecnicaUtilizada:"",unidadeMedida:{}},this.historicos=[],this.nivel={},this.atual=0,this.$refs.myModal.show()},getUnidades:function(e){var t=this;axios.get("/tabelas/riscos/"+this.fator.risco.idRisco+"/unidades").then((function(a){t.unidades=a.data,t.medidas.riscoUnidadeMedida||(1==t.unidades.length||0!=t.medidas.idAmbienteRiscoMedida?t.medidas.riscoUnidadeMedida=t.unidades[0]:t.medidas.riscoUnidadeMedida={unidadeMedida:{unidadeMedida:{unidade:{}}}}),e&&e()}))},cor:function(e){return"BIOLÓGICO"==e?"background-color:rgb(148, 90, 30)":"ERGONÔMICO"==e?"background-color:rgb(255, 255, 0)":"ACIDENTE"==e?"background-color:rgb(0, 0, 255)":"FÍSICO"==e?"background-color:rgb(0, 128, 0)":"QUÍMICO"==e?"background-color:rgb(255, 0, 0)":"PERICULOSOS"==e?"background-color:rgb(255, 255, 0)":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==e?"background-color:rgb(0, 0, 0)":"PENOSOS"==e?"background-color:rgb(254, 218, 71)":"AUSÊNCIA_DE_FATORES_DE_RISCO"==e?"background-color:rgb(128, 128, 128)":void 0},grupoDeRisco:function(e){return"BIOLÓGICO"==e?"B":"ERGONÔMICO"==e?"E":"ACIDENTE"==e?"A":"FÍSICO"==e?"F":"QUÍMICO"==e?"Q":"PERICULOSOS"==e?"P":"ASSOCIAÇÃO_DE_FATORES_DE_RISCO"==e?"AFR":"PENOSOS"==e?"Pen":"AUSÊNCIA_DE_FATORES_DE_RISCO"==e?"Aus FR":void 0}},mounted:function(){var e=this;axios.get("/tabelas/riscos/list").then((function(t){e.riscos=t.data})),axios.get("/tabelas/riscos/fontes-geradoras/list").then((function(t){e.fontes=t.data})),axios.get("/peso-x/list").then((function(t){e.pesosx=t.data})),axios.get("/peso-y/list").then((function(t){e.pesosy=t.data})),axios.get("/eixo-y/list").then((function(t){e.eixoy=t.data})),axios.get("/eixo-x/list").then((function(t){e.eixox=t.data})),axios.get("/gro/ambiente-risco/"+this.ambiente.idPpraAmbienteTrabalho+"/list").then((function(t){e.fatores=t.data,console.log(e.fatores),e.carregando=!1,e.$alert("Todos os dados foram carregados.","Sucesso!","success")}))}},o=(a(327),a(0)),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.carregando?a("BlockUI",{attrs:{message:e.mensagem,html:e.html}}):e._e(),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-fatores table-hover table-striped"},[a("tbody",[e._m(0),e._v(" "),a("tr",[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e.eixox[0]?a("td",{staticStyle:{width:"120px","text-align":"center"}},[a("strong",[e._v(" "+e._s(e.eixox[0].descricao)+" ")])]):e._e(),e._v(" "),e.eixoy[0]?a("td",{staticStyle:{width:"120px","text-align":"center"}},[a("strong",[e._v(" "+e._s(e.eixoy[0].descricao)+" ")])]):e._e(),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e.eixox[0]?a("td",{staticStyle:{width:"120px","text-align":"center"}},[a("strong",[e._v(" "+e._s(e.eixox[0].descricao)+" ")])]):e._e(),e._v(" "),e.eixoy[0]?a("td",{staticStyle:{width:"120px","text-align":"center"}},[a("strong",[e._v(" "+e._s(e.eixoy[0].descricao)+" ")])]):e._e(),e._v(" "),e._m(10),e._v(" "),a("td")]),e._v(" "),e._l(e.fatores,(function(t,i){return a("tr",[a("td",{staticStyle:{"text-align":"justify","vertical-align":"middle"},on:{click:function(a){return e.editar(t)}}},[a("div",{staticClass:"cx",style:e.cor(t.risco.grupoRisco)}),e._v("\n                                "+e._s(e.grupoDeRisco(t.risco.grupoRisco))+"\n                            ")]),e._v(" "),a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.risco.nomeRisco))]),e._v(" "),a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.fonteGeradora.descricao)+" "),t.complemento?a("span",[e._v(" - "+e._s(t.complemento))]):e._e()]),e._v(" "),a("td",[e._v(e._s(t.exposicao))]),e._v(" "),"QUANTITATIVO"==t.risco.enquadramento&&t.medida.riscoUnidadeMedida?a("td",{on:{click:function(a){return e.editar(t)}}},[a("span",{class:{"text-success":t.medida.medida<t.medida.riscoUnidadeMedida.nivelAcao,"text-warning":t.medida.medida>=t.medida.riscoUnidadeMedida.nivelAcao&&t.medida.medida<t.medida.riscoUnidadeMedida.limiteTolerancia,"text-danger":t.medida.medida>=t.medida.riscoUnidadeMedida.limiteTolerancia}},[a("strong",[e._v(e._s(t.medida.medida)+" "+e._s(t.medida.riscoUnidadeMedida.unidadeMedida.unidade))])])]):e._e(),e._v(" "),"QUALITATIVO"==t.risco.enquadramento?a("td",{on:{click:function(a){return e.editar(t)}}},[e._v("Qualitativo")]):e._e(),e._v(" "),"QUANTITATIVO"!=t.risco.enquadramento||t.medida.riscoUnidadeMedida?e._e():a("td",{on:{click:function(a){return e.editar(t)}}},[e._v("Quantitativo")]),e._v(" "),"QUANTITATIVO"==t.risco.enquadramento&&t.medida.riscoUnidadeMedida?a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.medida.riscoUnidadeMedida.limiteTolerancia)+e._s(t.medida.riscoUnidadeMedida.unidadeMedida.unidade))]):e._e(),e._v(" "),"QUALITATIVO"!=t.risco.enquadramento&&t.medida.riscoUnidadeMedida?e._e():a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.medida.riscoUnidadeMedida))]),e._v(" "),"QUANTITATIVO"==t.risco.enquadramento&&t.medida.riscoUnidadeMedida?a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.medida.riscoUnidadeMedida.nivelAcao)+e._s(t.medida.riscoUnidadeMedida.unidadeMedida.unidade))]):e._e(),e._v(" "),"QUALITATIVO"!=t.risco.enquadramento&&t.medida.riscoUnidadeMedida?e._e():a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.medida.riscoUnidadeMedida))]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pesoX,expression:"fat.pesoX"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"pesoX",a.target.multiple?i:i[0])},function(a){return e.recalcular(t,i)}]}},e._l(e.pesosx,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pesoY,expression:"fat.pesoY"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"pesoY",a.target.multiple?i:i[0])},function(a){return e.recalcular(t,i)}]}},e._l(e.pesosy,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)]),e._v(" "),t.nivel?a("td",{style:"background-color:"+t.nivel.cor,on:{click:function(a){return e.editar(t)}}},[e._v("\n                                "+e._s(t.pesoX.peso*t.pesoY.peso)+" - "+e._s(t.nivel.descricao)+"\n                            ")]):e._e(),e._v(" "),t.nivel?e._e():a("td",{on:{click:function(a){return e.editar(t)}}}),e._v(" "),a("td",{on:{click:function(a){return e.editar(t)}}},[e._v(e._s(t.medidasExistentes))]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pesoXAtenuado,expression:"fat.pesoXAtenuado"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"pesoXAtenuado",a.target.multiple?i:i[0])},function(a){return e.recalcularAtenuado(t,i)}]}},e._l(e.pesosx,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)]),e._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pesoYAtenuado,expression:"fat.pesoYAtenuado"}],staticClass:"form-control form-sem-fundo",staticStyle:{width:"120px"},on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"pesoYAtenuado",a.target.multiple?i:i[0])},function(a){return e.recalcularAtenuado(t,i)}]}},e._l(e.pesosy,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)]),e._v(" "),t.nivelAtenuado?a("td",{style:"background-color:"+t.nivelAtenuado.cor,on:{click:function(a){return e.editar(t)}}},[e._v("\n                                "+e._s(t.pesoXAtenuado.peso*t.pesoYAtenuado.peso)+" - "+e._s(t.nivelAtenuado.descricao)+"\n                            ")]):e._e(),e._v(" "),t.nivelAtenuado?e._e():a("td",{on:{click:function(a){return e.editar(t)}}}),e._v(" "),a("td",[a("button",{staticClass:"btn btn-success btn-sm",on:{click:function(a){return e.editar(t)}}},[a("i",{staticClass:"fas fa-pencil-alt"})]),e._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return a.stopPropagation(),e.excluir(t)}}},[a("i",{staticClass:"fas fa-trash"})])])])}))],2)])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-success",on:{click:e.abrir}},[e._v("Adicionar")])])]),e._v(" "),a("b-modal",{ref:"myModal",attrs:{size:"xl",centered:"","no-close-on-backdrop":!0,"hide-header-close":!0,"no-close-on-esc":!0,title:"Detalhes do Fator de Risco","ok-title":"Salvar","cancel-title":"Cancelar",id:"modal1"},on:{ok:e.salvar,cancel:function(t){return e.fechar()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Fator de Risco")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco,expression:"fator.risco"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"risco",t.target.multiple?a:a[0])},e.getUnidades]}},e._l(e.riscos,(function(t){return e.riscoEmRisco(t)&&t.idRisco!=e.atual?e._e():a("option",{attrs:{value:"risco"},domProps:{value:t}},[e._v(" ["+e._s(t.idRisco)+"] "+e._s(t.nomeRisco))])})),0)])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Fonte Geradora")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.fonteGeradora,expression:"fator.fonteGeradora"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"fonteGeradora",t.target.multiple?a:a[0])}}},e._l(e.fontes,(function(t){return a("option",{domProps:{value:t}},[e._v("["+e._s(t.idFonteGeradora)+"] "+e._s(t.descricao))])})),0)])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Complemento")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.complemento,expression:"fator.complemento"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fator.complemento},on:{input:function(t){t.target.composing||e.$set(e.fator,"complemento",t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Insalubridade")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.insalubridade,expression:"fator.risco.insalubridade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.insalubridade},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"insalubridade",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Periculosidade")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.periculosidade,expression:"fator.risco.periculosidade"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.periculosidade},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"periculosidade",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("LINACH")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.linac,expression:"fator.risco.linac"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.linac},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"linac",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Ap. Especial")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.aposentadoriaEspecial,expression:"fator.risco.aposentadoriaEspecial"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.aposentadoriaEspecial},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"aposentadoriaEspecial",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Ativ. Especial")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.atividadeEspecial,expression:"fator.risco.atividadeEspecial"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.atividadeEspecial},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"atividadeEspecial",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("eSocial")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.risco.tabela23,expression:"fator.risco.tabela23"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.fator.risco.tabela23},on:{input:function(t){t.target.composing||e.$set(e.fator.risco,"tabela23",t.target.value)}}})])])]),e._v(" "),"QUANTITATIVO"==e.fator.risco.enquadramento?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Dt. Medição")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.medidas.dataMedida,expression:"medidas.dataMedida"}],staticClass:"form-control",attrs:{type:"date",max:e.ambiente.ppra.dataHora},domProps:{value:e.medidas.dataMedida},on:{blur:e.calculaData,input:function(t){t.target.composing||e.$set(e.medidas,"dataMedida",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Un. Medida")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.medidas.riscoUnidadeMedida,expression:"medidas.riscoUnidadeMedida"}],staticClass:"form-control",attrs:{disabled:1==e.unidades.length},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.medidas,"riscoUnidadeMedida",t.target.multiple?a:a[0])},e.mudouUnidadeMedida]}},e._l(e.unidades,(function(t){return a("option",{domProps:{value:t}},[e._v(" "+e._s(t.unidadeMedida.descricao)+" ")])})),0)])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Resultado")]),e._v(" "),e.medidas.riscoUnidadeMedida?a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medidas.medida,expression:"medidas.medida"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.medidas.medida},on:{input:function(t){t.target.composing||e.$set(e.medidas,"medida",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v(e._s(e.medidas.riscoUnidadeMedida.unidadeMedida.unidade))])])]):e._e()])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Limite Tole.")]),e._v(" "),e.medidas.riscoUnidadeMedida?a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medidas.riscoUnidadeMedida.limiteTolerancia,expression:"medidas.riscoUnidadeMedida.limiteTolerancia"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.medidas.riscoUnidadeMedida.limiteTolerancia},on:{input:function(t){t.target.composing||e.$set(e.medidas.riscoUnidadeMedida,"limiteTolerancia",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v(e._s(e.medidas.riscoUnidadeMedida.unidadeMedida.unidade))])])]):e._e()])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("N. de Ação")]),e._v(" "),e.medidas.riscoUnidadeMedida?a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medidas.riscoUnidadeMedida.nivelAcao,expression:"medidas.riscoUnidadeMedida.nivelAcao"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.medidas.riscoUnidadeMedida.nivelAcao},on:{input:function(t){t.target.composing||e.$set(e.medidas.riscoUnidadeMedida,"nivelAcao",t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v(e._s(e.medidas.riscoUnidadeMedida.unidadeMedida.unidade))])])]):e._e()])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Téc. Utilizada")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.medidas.tecnicaUtilizada,expression:"medidas.tecnicaUtilizada"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.medidas.tecnicaUtilizada},on:{input:function(t){t.target.composing||e.$set(e.medidas,"tecnicaUtilizada",t.target.value)}}})])])]):e._e(),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h6",[e._v("Classificação Inicial do Fator de Risco")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Exposição")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.exposicao,expression:"fator.exposicao"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"exposicao",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"SELECIONE"}},[e._v("Selecione")]),e._v(" "),a("option",{attrs:{value:"HP"}},[e._v("HP")]),e._v(" "),a("option",{attrs:{value:"HI"}},[e._v("HI")]),e._v(" "),a("option",{attrs:{value:"EV"}},[e._v("EV")])])])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Peso X - Probabilidade")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.pesoX,expression:"fator.pesoX"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"pesoX",t.target.multiple?a:a[0])},e.calculaNivel]}},e._l(e.pesosx,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Peso Y - Severidade")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.pesoY,expression:"fator.pesoY"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"pesoY",t.target.multiple?a:a[0])},e.calculaNivel]}},e._l(e.pesosy,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Nivel")]),e._v(" "),Object.keys(e.nivel).length>0?a("div",{staticClass:"div-nivel",style:"background-color:"+e.nivel.cor},[e._v("\n                        "+e._s(e.resultado)+" - "+e._s(e.nivel.descricao)+"\n                    ")]):e._e(),e._v(" "),Object.keys(e.nivel).length?e._e():a("div",{staticClass:"div-nivel"})])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Medidas Existentes")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.medidasExistentes,expression:"fator.medidasExistentes"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fator.medidasExistentes},on:{input:function(t){t.target.composing||e.$set(e.fator,"medidasExistentes",t.target.value)}}})])]),e._v(" "),"QUANTITATIVO"==e.fator.risco.enquadramento?a("div",{staticClass:"col-md-4"},[e._v("\n                Anexar o Resultado da Medição\n                "),e.medidas.idPpraAmbienteRiscoMedida&&!e.fator.caminhoPdf?a("button",{staticClass:"btn pull-right btn-block btn-success",on:{click:e.abrirUpload}},[a("i",{staticClass:"fa fa-upload"}),e._v(" Inserir PDF")]):e._e(),e._v(" "),e.medidas.idPpraAmbienteRiscoMedida&&e.fator.caminhoPdf?a("button",{staticClass:"btn  btn-success btn-50",on:{click:e.abrirUpload}},[a("i",{staticClass:"fa fa-upload"}),e._v(" Atualizar PDF")]):e._e(),e._v(" "),e.medidas.idPpraAmbienteRiscoMedida&&e.fator.caminhoPdf?a("a",{staticClass:"btn  btn-secondary  btn-50",attrs:{target:"_blank",href:"http://200.98.201.236:8081/"+e.fator.caminhoPdf}},[a("i",{staticClass:"fas fa-eye"}),e._v(" Visualizar PDF")]):e._e(),e._v(" "),a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}})]):e._e()]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"form-group"},[a("label",[e._v("EPC")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fator.epc,expression:"fator.epc"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fator.epc},on:{input:function(t){t.target.composing||e.$set(e.fator,"epc",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Eficaz")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.eficaz,expression:"fator.eficaz"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"eficaz",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"SELECIONE"}},[e._v("Selecione")]),e._v(" "),a("option",{attrs:{value:"SIM"}},[e._v("Sim")]),e._v(" "),a("option",{attrs:{value:"NAO"}},[e._v("Não")])])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-center"},[a("h6",[e._v("Classificação do Fator de Risco Atenuado")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Peso X - Probabilidade")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.pesoXAtenuado,expression:"fator.pesoXAtenuado"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"pesoXAtenuado",t.target.multiple?a:a[0])},e.calculaNivelAtenuado]}},e._l(e.pesosx,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Peso Y - Severidade")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.fator.pesoYAtenuado,expression:"fator.pesoYAtenuado"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.fator,"pesoYAtenuado",t.target.multiple?a:a[0])},e.calculaNivelAtenuado]}},e._l(e.pesosy,(function(t){return t.matrizRisco.idMatrizRisco==e.ambiente.ppra.matrizRisco.idMatrizRisco?a("option",{domProps:{value:t}},[e._v("["+e._s(t.peso)+"] "+e._s(t.descricao))]):e._e()})),0)])]),e._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[e._v("Nivel")]),e._v(" "),Object.keys(e.nivelAtenuado).length>0?a("div",{staticClass:"div-nivel",style:"background-color:"+e.nivelAtenuado.cor},[e._v("\n                        "+e._s(e.resultadoAtenuado)+" - "+e._s(e.nivelAtenuado.descricao)+"\n                    ")]):e._e(),e._v(" "),Object.keys(e.nivelAtenuado).length?e._e():a("div",{staticClass:"div-nivel"})])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Observação")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.fator.observacao,expression:"fator.observacao"}],staticClass:"form-control",attrs:{rows:"2"},domProps:{value:e.fator.observacao},on:{input:function(t){t.target.composing||e.$set(e.fator,"observacao",t.target.value)}}})])])]),e._v(" "),e.historicos.length>0&&"QUANTITATIVO"==e.fator.risco.enquadramento?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table table-fatores table-hover table-striped"},[a("tbody",[a("tr",[a("td",[e._v("\n                                GRO\n                            ")]),e._v(" "),a("td",[e._v("\n                                Dt de Medição\n                            ")]),e._v(" "),a("td",[e._v("\n                                Resultado\n                            ")]),e._v(" "),a("td",[e._v("\n                                Téc Utilizada\n                            ")]),e._v(" "),a("td",[e._v("\n                                PDF\n                            ")])]),e._v(" "),e._l(e.historicos,(function(t){return e.ambiente.idOrigem==t.ppraAmbienteRisco.ppraAmbienteTrabalho.idOrigem?a("tr",[a("td",{staticClass:"text-center"},[e._v("\n                                V "+e._s(t.ppraAmbienteRisco.ppraAmbienteTrabalho.ppra.versao)+" de "+e._s(e._f("moment")(t.ppraAmbienteRisco.ppraAmbienteTrabalho.ppra.dataHora,"DD/MM/YYYY"))+"\n                            ")]),e._v(" "),a("td",{staticClass:"text-center"},[e._v("\n                                "+e._s(e._f("moment")(t.dataMedida,"DD/MM/YYYY"))+"\n                            ")]),e._v(" "),a("td",{staticClass:"text-center"},[t.riscoUnidadeMedida?a("span",{class:{"text-success":t.medida<t.riscoUnidadeMedida.nivelAcao,"text-warning":t.medida>=t.riscoUnidadeMedida.nivelAcao&&t.medida<t.riscoUnidadeMedida.limiteTolerancia,"text-danger":t.medida>=t.riscoUnidadeMedida.limiteTolerancia}},[a("strong",[e._v(e._s(t.medida)+" "+e._s(t.riscoUnidadeMedida.unidadeMedida.unidade))])]):e._e()]),e._v(" "),a("td",{staticClass:"text-center"},[e._v("\n                                "+e._s(t.tecnicaUtilizada)+"\n                            ")]),e._v(" "),a("td",{staticClass:"text-center"},[t.ppraAmbienteRisco.caminhoPdf?a("a",{staticClass:"btn  btn- secondary btn-sm",attrs:{target:"_blank",href:"http://200.98.201.236:8081/"+t.ppraAmbienteRisco.caminhoPdf}},[a("i",{staticClass:"fas fa-eye"}),e._v(" Visualizar PDF")]):e._e()])]):e._e()}))],2)])])]):e._e()])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"7"}}),this._v(" "),t("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t("strong",[this._v("Classificação Inicial dos Riscos")])]),this._v(" "),t("td",{staticClass:"text-center",attrs:{colspan:"3"}},[t("strong",[this._v("Classificação dos Riscos Atenuados")])]),this._v(" "),t("td")])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v(" Grupo ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"170px"}},[t("strong",[this._v(" Risco ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"130px"}},[t("strong",[this._v(" Fonte Geradora ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v(" Exp. ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v(" Valor ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"70px"}},[t("strong",[this._v(" L. Tol.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"80px"}},[t("strong",[this._v(" N. Ação ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"150px"}},[t("strong",[this._v("Nivel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("Medidas Existentes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",{staticStyle:{width:"150px"}},[t("strong",[this._v("Nivel")])])}],!1,null,null,null);t.default=s.exports},179:function(e,t,a){var i=a(328);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(2)(i,o);i.locals&&(e.exports=i.locals)},327:function(e,t,a){"use strict";a(179)},328:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,".form-sem-fundo{background-color:transparent;border:none}.div-nivel{width:100%;height:calc(1.6em + .75rem + 2px);background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;font-weight:900;padding:6px}.btn-50{width:48%}.table-fatores{margin-bottom:10px}.table-fatores tr th{font-weight:700}.table-fatores tr td{cursor:pointer}.table-fatores tr td,.table-fatores tr th{white-space:nowrap;border:1px solid #dee2e6}",""])}}]);