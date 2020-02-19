new Vue({
	el: '#desafio',
	data: {
		boolean:false,
		classe:'destaque',
		c1: 'c1',
		c2:'c2',
		nomeClasse:'',
		cor:'',
		tamanho: 0
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.boolean = !this.boolean
			}, 2000);
		},
		iniciarProgresso() {
			setInterval(() => {
				this.tamanho += 50
			}, 2000);
		},
	},
	computed:{
		estilo(){
			return{
				destaque: this.boolean,
				encolher : !this.boolean
			}
		},
		meuEstilo(){
			return{
				backgroundColor:this.cor,
				width: 150 + 'px',
				border: 5 + 'px'
			}
		},
		barraCss(){
			return{
				backgroundColor:'red',
				width: this.tamanho + 'px',
				height: '20px',
				border: 5 + 'px',
				transition : '1s',
				marginTop: '5px'
			}
		},

	}
})
