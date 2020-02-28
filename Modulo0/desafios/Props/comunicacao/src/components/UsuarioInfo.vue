<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...{{nome}}</p><br>
        <button @click="reiniciarValor">Reiniciar</button>
    </div>
</template>

<script>
export default {
    // Recebendo o que vem do pai
    props:['nome'],
    methods:{
        reiniciarValor(){
            this.nome = "Pedro"
            // Enviando para o o pai um event, com o um objeto
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
