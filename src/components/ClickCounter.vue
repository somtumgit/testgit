<template>
    <h1>Click Counter</h1>
    <button @click="incrementCount">Clicked {{ count }} times</button>
</template>
<script>
import CounterMixin from '../mixins/counter';

export default {
    name: 'ClickCounter',
    mixins: [CounterMixin],
    // data() {
    //     return {
    //         count: 0,
    //     }
    // },
    // methods: {
    //     incrementCount() {
    //         this.count += 1;
    //     }
    // },
}
</script>
<style>
    
</style>