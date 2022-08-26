import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('stringCount', function(value){
	const separator = value.includes(' ') ? ' ' : ','
	return value.split(separator).map(p => `${p} (${p.length})`).join(separator)
})

new Vue({
	render: h => h(App),
}).$mount('#app')
