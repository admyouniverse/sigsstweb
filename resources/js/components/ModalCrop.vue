<template>
  <div class="modal fade" id="modalCrop" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <BlockUI v-if="carregando" :message="mensagem" :html="html"></BlockUI>
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Editar Avatar</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" style="height: 500px">
          <!-- <img :src="this.$store.state.imagem" alt=""> -->
          <vueCropper
          v-if="this.$store.state.showModal" 
          ref="cropper"
          :img="this.$store.state.imagem"
          :autoCrop="true"
          :autoCropWidth="autoCropWidth"
          :autoCropHeight="autoCropHeight"
          :fixed="fixed"
          :fixedNumber="fixedNumber"
          :canMove="canMove"
          :canScale="canScale"
          :outputType="outputType"
          ></vueCropper>

        </div>
        <div class="modal-footer controls">
          <div class="row">
            <div class="col-md-12 text-right">
              <button class="btn btn-default" v-on:click="changeScale(+1)"><i class="fa fa-plus"></i></button>
              <button class="btn btn-default" v-on:click="changeScale(-1)"><i class="fa fa-minus"></i></button>
              <button class="btn btn-default" v-on:click="rotateLeft()"><i class="fa fa-undo"></i></button>
              <button class="btn btn-default" v-on:click="rotateRight()"><i class="fa fa-repeat"></i></button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col-md-12">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
             <button type="button" v-on:click="salvar" class="btn btn-primary">Cortar & Salvar</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import vueCropper from 'vue-cropper'
  export default {
    data() {
      return {
        img: this.$store.state.imagem,
        autoCrop: true,
        autoCropWidth: 250,
        autoCropHeight: 250,
        fixed: true,
        fixedNumber: [1,1],
        canMove: true,
        canScale: true,
        downImg: '#',
        outputType: 'png',
        carregando: false,
        mensagem: 'Fazendo upload da foto...',
        html: '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>',
      }
    },
    methods: {
     changeScale: function(x) {
      this.$refs.cropper.changeScale(x);
    },

    rotateLeft: function() {
     this.$refs.cropper.rotateLeft();
   },

   rotateRight: function() {
    this.$refs.cropper.rotateRight();
  },

  salvar: function() {

    this.$refs.cropper.getCropData((data) => {
      this.downImg = data;

      console.log(data);
            // var blobObject = new Blob([data]);
            // console.log(blobObject);
            // console.log(window.URL.createObjectURL(blobObject));
            
            var that = this;
            this.carregando = true;
            axios.post('/empresas/imagem', {headers: {'Content-Type': 'multipart/form-data'}, image: data})
            .then(function(response) { 
              // console.log(response);
              that.$store.state.avatar = response.data;
              $('#modalCrop').modal('hide');
              this.$store.state.imagem = '';
              this.$store.state.showModal = false;
              that.carregando = false;
              // that.imagem = '/storage/' + response.data.imagem;
            }).catch(function (error) {
              console.log(error);
            });

          })

  }
 
},
mounted() {

},


}
</script>
<style>
.controls {
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  justify-content: center;
}
</style> 