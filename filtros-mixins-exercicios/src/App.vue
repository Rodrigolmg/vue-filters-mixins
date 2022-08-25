<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpf | cpf}}</p>
	</div>
</template>

<script>
export default {
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
			cpf: '60070080090'
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
