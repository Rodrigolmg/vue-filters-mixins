export default {
    data(){
        return {
            fruit: '',
            fruits: ['Banana', 'Apple', 'Orange']
        }
    },
    methods:{
        addFruit(){
            this.fruits.push(this.fruit)
            this.fruit = ''
        }
    }
}