<template>
 <div id='tudo_as_foto'>
   <div  key="menu" class='imagem'>
    <input type="file" style="display: none" id="file"  v-on:change="onChange">
    <input type="text" style="display: none" id="imagem" v-model="this.$store.state.avatar">
   
    <img :src="this.$store.state.avatar" alt="" style="border:'1px solid black'" v-if="this.$store.state.avatar != null &&  this.$store.state.avatar != undefined && this.$store.state.avatar != ''">

    <img src="/img/nofoto.png" v-if="this.$store.state.avatar == null || this.$store.state.avatar == undefined || this.$store.state.avatar == ''" alt="">

    <div v-on:click.prevent="abreForm">
      <span>
        {{ mensagem }}
      </span>
    </div> 
  </div> 

</div>

</template>

<script>
  import PictureInput from 'vue-picture-input'

  export default {
    data () {
      return {
        imagem: '',
        mensagem: ''
      }
    },
    mounted() {

      if(this.$store.state.avatar != null &&  this.$store.state.avatar != undefined &&  this.$store.state.avatar != ''){
        this.mensagem = "Clique para trocar de imagem";
      } else {
        this.mensagem = "Clique para adicionar uma imagem";
      } 

      console.log(this.imagem);
    },  
    components: {
      // PictureInput
    },
    methods: {
      abreForm: function() {
        $('#file').click();
      },
      onChange (e) {
        console.log('New picture selected!')
        console.log(e);
        var that = this;

        if (e) {
          // var formData = new FormData();
          // var imagefile = document.querySelector('#file');
          // formData.append("imagem", imagefile.files[0],imagefile.files[0].name);
          // console.log(imagefile.files[0])




          var file = e.target.files[0]
          if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
           alert('Formatos aceitos: gif,jpeg,jpg,png,bmp')
           return false
         }
         var reader = new FileReader()
         reader.onload = (e) => {
          let data
          console.log(e);

          if (typeof e.target.result === 'object') {
          
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }

          this.$store.state.imagem = data;
          console.log(data);
        }
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
        reader.readAsArrayBuffer(file)

        $('#modalCrop').modal('show');

        $('#modalCrop').on('shown.bs.modal', function (e) {

          that.$store.state.showModal = true;
        });

        $('#modalCrop').on('hidden.bs.modal', function (e) {

          that.$store.state.showModal = false;
        });

          // axios.post('/usuario/imagem', formData, {headers: {'Content-Type': 'multipart/form-data'}})
          // .then(function(response){ 
          //   console.log(response);
          //   that.imagem = '/storage/' + response.data.imagem;
          // }).catch(function (error) {
          //   console.log(error);
          // });

        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      }
    }
  }
</script>
<style>


</style>