(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{138:function(t,a,e){var o=e(246);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(2)(o,s);o.locals&&(t.exports=o.locals)},245:function(t,a,e){"use strict";e(138)},246:function(t,a,e){(t.exports=e(1)(!1)).push([t.i,".controls{padding-top:7px;padding-bottom:7px;text-align:center;justify-content:center}",""])},36:function(t,a,e){"use strict";e.r(a);e(244);var o={data:function(){return{img:this.$store.state.imagem,autoCrop:!0,autoCropWidth:250,autoCropHeight:250,fixed:!0,fixedNumber:[1,1],canMove:!0,canScale:!0,downImg:"#",outputType:"png",carregando:!1,mensagem:"Fazendo upload da foto...",html:'<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'}},methods:{changeScale:function(t){this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},salvar:function(){var t=this;this.$refs.cropper.getCropData((function(a){t.downImg=a,console.log(a);var e=t;t.carregando=!0,axios.post("/empresas/imagem",{headers:{"Content-Type":"multipart/form-data"},image:a}).then((function(t){e.$store.state.avatar=t.data,$("#modalCrop").modal("hide"),this.$store.state.imagem="",this.$store.state.showModal=!1,e.carregando=!1})).catch((function(t){console.log(t)}))}))}},mounted:function(){}},s=(e(245),e(0)),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"modalCrop",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[t.carregando?e("BlockUI",{attrs:{message:t.mensagem,html:t.html}}):t._e(),t._v(" "),e("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body",staticStyle:{height:"500px"}},[this.$store.state.showModal?e("vueCropper",{ref:"cropper",attrs:{img:this.$store.state.imagem,autoCrop:!0,autoCropWidth:t.autoCropWidth,autoCropHeight:t.autoCropHeight,fixed:t.fixed,fixedNumber:t.fixedNumber,canMove:t.canMove,canScale:t.canScale,outputType:t.outputType}}):t._e()],1),t._v(" "),e("div",{staticClass:"modal-footer controls"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-right"},[e("button",{staticClass:"btn btn-default",on:{click:function(a){return t.changeScale(1)}}},[e("i",{staticClass:"fa fa-plus"})]),t._v(" "),e("button",{staticClass:"btn btn-default",on:{click:function(a){return t.changeScale(-1)}}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-default",on:{click:function(a){return t.rotateLeft()}}},[e("i",{staticClass:"fa fa-undo"})]),t._v(" "),e("button",{staticClass:"btn btn-default",on:{click:function(a){return t.rotateRight()}}},[e("i",{staticClass:"fa fa-repeat"})])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.salvar}},[t._v("Cortar & Salvar")])])])])])])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[this._v("Editar Avatar")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}],!1,null,null,null);a.default=i.exports}}]);