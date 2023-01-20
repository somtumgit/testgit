<template>
    <h1>Hover Counter</h1>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
</template>
<script>
import CounterMixin from '../mixins/counter';

export default {
    name: 'HoverCounter',
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