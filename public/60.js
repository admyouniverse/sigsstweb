(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{113:function(t,s,o){"use strict";o.r(s);var e={props:["empresa"],data:function(){return{carregando:!0,mensagem:"",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',postos:[],posto:{}}},computed:{parametro:function(){var t=window.location.search.substring(1);return new URLSearchParams(t).get("acao")}},methods:{abrir:function(){this.posto.idPostoEntrega=0,this.posto.empresa=this.empresa.idEmpresa,this.$refs.myModal.show()},abrirPosto:function(t){"entrega"==this.parametro?window.location.href="/posto-entrega/"+t.idPostoEntrega+"?acao=entrega":window.location.href="/posto-entrega/"+t.idPostoEntrega},salvar:function(){var t=this;t.mensagem="Salvando...",t.carregando=!0,this.posto.empresa=this.empresa.idEmpresa,axios.post("/posto-entrega",{posto:t.posto}).then((function(s){"true"==s.data.status&&axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/"+t.empresa.idEmpresa).then((function(s){t.postos=s.data,t.carregando=!1}))}))},editar:function(t){this.posto=t,this.$refs.myModal.show()},remover:function(t){var s=this;axios.get("/posto-entrega/excluir/"+t.idPostoEntrega).then((function(t){"true"==t.data.status&&axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/"+s.empresa.idEmpresa).then((function(t){s.postos=t.data,s.carregando=!1}))}))}},mounted:function(){var t=this;axios.get("http://34.69.79.135:8080/ServicoSIGSSO/rest/posto-entrega/listaPorIdEmpresa/"+this.empresa.idEmpresa).then((function(s){t.postos=s.data,t.carregando=!1}))}},a=(o(370),o(164)),r=Object(a.a)(e,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("section",{staticClass:"content"},[t.carregando?o("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),o("div",{staticClass:"box box-default"},[o("div",{staticClass:"box-body table-responsive"},[o("table",{staticClass:"table table-hover table-striped"},[t._m(0),t._v(" "),o("tbody",t._l(t.postos,(function(s){return o("tr",{on:{click:function(o){return t.abrirPosto(s)}}},[o("td",[t._v(t._s(s.idPostoEntrega))]),t._v(" "),o("td",[t._v(t._s(s.descricao))]),t._v(" "),o("td",[o("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(o){return o.stopPropagation(),t.editar(s)}}},[o("i",{staticClass:"fas fa-pencil-alt"})]),t._v(" "),o("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(o){return o.stopPropagation(),t.remover(s)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])])})),0)]),t._v(" "),o("div",{staticClass:"col-md-12 text-center"},[o("br"),t._v(" "),o("button",{staticClass:"btn btn-success",on:{click:function(s){return t.abrir()}}},[o("i",{staticClass:"fa fa-plus"}),t._v("\n                    Adicionar")])])]),t._v(" "),o("b-modal",{ref:"myModal",attrs:{title:"Posto de Entrega","ok-title":"Salvar","cancel-title":"Cancelar"},on:{ok:t.salvar}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v("Descrição")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.posto.descricao,expression:"posto.descricao"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.posto.descricao},on:{input:function(s){s.target.composing||t.$set(t.posto,"descricao",s.target.value)}}})])])])])],1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("ID")]),this._v(" "),s("th",[this._v("Descrição")]),this._v(" "),s("th",[this._v("Ações")])])])}],!1,null,"bc8e0428",null);s.default=r.exports},164:function(t,s,o){"use strict";function e(t,s,o,e,a,r,n,i){var c,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=o,p._compiled=!0),e&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},p._ssrRegister=c):a&&(c=i?function(){a.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(p.functional){p._injectStyles=c;var l=p.render;p.render=function(t,s){return c.call(s),l(t,s)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:p}}o.d(s,"a",(function(){return e}))},233:function(t,s,o){var e=o(371);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(132)(e,a);e.locals&&(t.exports=e.locals)},370:function(t,s,o){"use strict";o(233)},371:function(t,s,o){(t.exports=o(131)(!1)).push([t.i,"tr[data-v-bc8e0428] {\n  cursor: pointer;\n}",""])}}]);