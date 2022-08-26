export default {
    data(){
		return {
			text: 'Frase exemplo dos desafios'
		}
	},
	computed:{
		phraseWihtComma(){
			return this.text.replaceAll(' ', ',')
		},

		phraseWihtLength(){
			const separator = this.text.includes(' ') ? ' ' : ','
			return this.text.split(separator).map(p => `${p} (${p.length})`).join(separator)
		},
	}
}