<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{text | shiftSpace | stringCount}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{phraseWihtComma}}</p>
		<p>{{phraseWihtLength}}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import phraseMixin from '@/phraseMixin'

export default {
	filters:{
		shiftSpace(value){
			let newValue = value.replaceAll(' ', ',')
			return newValue
		}
	},
	mixins: [phraseMixin]
	// data(){
	// 	return {
	// 		text: 'Frase exemplo dos desafios'
	// 	}
	// },
	// computed:{
	// 	phraseWihtComma(){
	// 		return this.text.replaceAll(' ', ',')
	// 	},

	// 	phraseWihtLength(){
	// 		const separator = this.text.includes(' ') ? ' ' : ','
	// 		return this.text.split(separator).map(p => `${p} (${p.length})`).join(separator)
	// 	},
	// }
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
