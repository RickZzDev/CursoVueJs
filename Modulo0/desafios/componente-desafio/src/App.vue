<template>
	<v-app>
		<Menu />
		<Titulo/>
		<Carrousel />
		<Footer />
	</v-app>
</template>

<script>

import Menu from './Menu.vue'
import Footer from './Footer'
import Carrousel from './Carrousel'
import Titulo from './Titulo'

export default {
	name:'App',
	components:{
		Menu,
		Footer,
		Carrousel,
		Titulo
	},
	data() {
		return {
	
		}
	}
}
</script>
