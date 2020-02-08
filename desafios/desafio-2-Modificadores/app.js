new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods:{
        alerta(){
            alert('alerta')
        },
        keydown(event){
            this.valor += event.key
            console.log(this.valor)
        },
        keydown2(){
            this.valor2 += event.target.value
            console.log(this.valor2)
        }
    }
})