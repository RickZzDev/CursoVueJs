new Vue({
    el: '#desafio',
    data: {
        valor: 0,       
    },
    watch:{
        resultado(novo,antigo){
            console.log(novo + '-' + antigo)
            setTimeout(()=>{
                this.valor=0
            },5000)
        }
    },
    computed:{
        resultado(){
            console.log('estou ouvindo')
           return this.valor != 37 
           ?
            resultado = 'Valor Diferente'
            :
            resultado ='Igual a 37'
        }
    }
});