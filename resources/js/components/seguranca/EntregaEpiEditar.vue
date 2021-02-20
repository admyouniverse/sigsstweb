<template>
    <b-modal ref="modalEditar" title="Entrega de EPI" @ok="atualizar" cancel-title="Cancelar" ok-title="Salvar" size="xl">
		{{ entrega }}
    </b-modal>
</template>
<script>
export default {
	props: ['entrega']
}
</script>
<style lang="scss" scoped>

</style>