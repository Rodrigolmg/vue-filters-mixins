<template>
    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
        </ul>
        <input type="text" v-model="fruit" @keydown.enter="addFruit">
    </div>
</template>

<script>
import fruitsMixin from '@/fruitsMixin'
export default {
    mixins: [fruitsMixin]
}
</script>
