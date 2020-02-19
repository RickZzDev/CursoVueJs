new Vue({
    el: '#app',
    data: {
        playerLife:100,
        monsterLife:100,
        danoMonstro: '',
        danoPlayer:'',
        endGame : false,
        cor: 'green',
        cor2:'green',
        iniciarJogo: false,
        movimento:false,
        nMovimento:0,
        arr:[],
        v1:0,
        v2:0

    },
    // Ja vem executando
    computed: {

    

        barraPlayer(){
            return{
                backgroundColor:this.cor,
                width:this.playerLife + '%'
            }
        },
        barraMonster(){
            return{
                backgroundColor:this.cor2,
                width:this.monsterLife + '%'
            }
        },

      

    },
    methods: {
        desistir(){
            this.playerLife = 100
            this.monsterLife =100
            this.iniciarJogo = false
            this.movimento = false
        },
        
        curar(){
                this.playerLife = this.playerLife + 15 
        },
        atacarEspecial(){
            this.movimento = true

       

            if(this.endGame == true){

            }else{
                this.danoPlayer = Math.floor(Math.random() * (10 - 7) ) + 7
            
                this.danoMonstro = Math.floor(Math.random() * (12 - 6) ) + 9
                
                
                this.calculaVida(this.danoMonstro, this.danoPlayer)
            }
            
   

            console.log(this.danoPlayer)
            this.arr.unshift(this.danoPlayer)
            this.arr.unshift(this.danoMonstro)
            // console.log(this.danoMonstro + '-' + this.danoPLayer)
            this.registerLog(this.arr.unshift(this.danoPlayer),'player')
            this.registerLog(this.arr.unshift(this.danoMonstro),'monstro')
            
            console.log(this.arr)

        },

        registerLog(dano,tipo){
            
            this.nMovimento = this.nMovimento + 1
            // console.log(dano + '-' +tipo)
            tipo == 'monstro'
             ?
              this.text = 'Você causou ' + dano + ' de dano'
             :
              this.text = 'Você tomou' + dano + ' de dano'
            
            
           
    
        },

        atacarSimples(){
            this.movimento = true
            
     

            if(this.endGame == true){

            }else{
                this.danoPlayer = Math.floor(Math.random() * (15 - 12) ) + 12
            
                this.danoMonstro = Math.floor(Math.random() * (12 - 9) ) + 9
                
                
                this.calculaVida(this.danoMonstro, this.danoPlayer)
            }

            
            this.registerLog(this.danoMonstro,this.danoPLayer)

        },
        calculaVida(danoMonstro,danoPLayer){

    
                this.playerLife < 60 
                ? 
                (this.cor = 'red',this.playerLife = this.playerLife - danoPLayer)
                :
                this.playerLife = this.playerLife - danoPLayer
                
            

    
                this.monsterLife < 60 
                ? 
                (this.cor2 = 'red', this.monsterLife = this.monsterLife - danoMonstro)
                :   
                this.monsterLife = this.monsterLife - danoMonstro
          
            
            
            
        }
    },
    watch: {
  
        playerLife(novo,antigo){
            novo >= 100 ? this.playerLife = 100 : ''
            antigo <= 12 ? (this.playerLife = 0, this.endGame = true) :''
 
        },

        monsterLife(novo,antigo){
            novo >= 100 ? this.monsterLife = 100 : ''
            antigo <= 12 ? (this.monsterLife = 0, this.endGame = true):''
        }
       
    }
})