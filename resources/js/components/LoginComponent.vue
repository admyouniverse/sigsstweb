<template>
<div class="login">
    <div class="title">SIGSST - Segurança e Saúde do Trabalho</div>
    <div class="center">
        <div class="pic_login">
            <img src="/login/usuarioimg.jpg" class="img_login"><br>
            <img src="/login/senhaimg.jpg" class="img_login">
        </div>
        <div class="txt_login">
            <input type="text" v-model="usuario" name="email" class="form-control" placeholder="Username" id="user">
            <input type="password" @keydown.enter="entrar" v-model="senha" name="password" class="form-control" placeholder="Password" id="pass">
        </div>
    </div>
    <img @click="entrar" src="/login/login3.png" class="btn_acesso">
    <div class="esq_senha">
        <a href="#">Esqueci meu usuário</a><br>
        <a href="#">Esqueci minha senha</a>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
			usuario: '',
			senha: ''
        }
    },
    methods: {
        entrar() {
			var that = this;

			axios.post('/entrar', {
				usuario: that.usuario,
				senha: that.senha,
			}).then(function(response) {
				console.log(response.data);
				if(response.data.msg == 'true') {
					that.$alert('Entrando no sistema.', 'Sucesso!', 'success');
					window.location = '/';
				} else {
					that.$alert('Verifique seus dados.', 'Alerta!', 'error');
				}
			});
        }
    }
}
</script>

<style>

</style>
