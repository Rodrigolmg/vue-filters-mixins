<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpfDoAluno | cpf | reverse}}</p>
		<input type="text" :value="cpfDoAluno | cpf | reverse">
		<Fruits/>
		<hr>
		<div>
			<ul>
				<li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
			</ul>
			<input type="text" v-model="fruit" @keydown.enter="addFruit">
    	</div>
	</div>
</template>

<script>
import Fruits from '@/Fruits.vue'
import fruitsMixin from '@/fruitsMixin'

export default {
	components:{
		Fruits
	},
	mixins: [fruitsMixin],
	filters: {
		cpf(value){
			const cpf = value.split('')
			cpf.splice(3, 0, '.')
			cpf.splice(7, 0, '.')
			cpf.splice(11, 0, '-')
			return cpf.join('')

		}
	},
	data() {
		return {
			cpfDoAluno: '60070080090',
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
