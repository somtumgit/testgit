<template >
    <h1>Reuseable Composition</h1>
    <hr/>
    <button @click="incrementCount">Option Mixin Clicked {{ count }} times</button>
    <h2 @mouseover="incrementCount">Option Mixin Hovered {{ count }} times</h2>
    <hr/>

    <button @click="c_incrementCount">Composition Reuseable Clicked {{ c_count }} times</button>
    <h2 @mouseover="c_incrementCount">Composition Reuseable Hovered {{ c_count }} times</h2>
</template>
<script>
import CounterMixin from '../mixins/counter';
import useCounter from '../composables/useCounter';

export default {
    name: 'Reuseable',
    setup() {
        const {count, incrementCount} = useCounter(100,1);

        return {
            c_count: count,
            c_incrementCount: incrementCount,
        }
    },
    mixins: [CounterMixin],
    data() {
        return {

        }
    }
}
</script>
<style >
    
</style>