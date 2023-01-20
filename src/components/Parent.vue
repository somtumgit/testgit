<template>
    <h1>Parent</h1>
    <div><button @click="showChild = !showChild">Toggle Child</button></div>
    
    <Child v-if="showChild"/>
</template>
<script>
import Child from './Child.vue';

export default {
    name: "Parent",
    data() {
        return {
            showChild: false,
        }
    },
    components: {
        Child
    },
    beforeCreate() {
        console.log('Parent beforeCreate');
    },
    created() {
        console.log('Parent created');
    },
    beforeMount() {
        console.log('Parent beforeMount');
    },
    mounted() {
        console.log('Parent mounted');
    },
    beforeUpdate() {
        console.log('Parent beforeUpdate');
    },
    updated() {
        console.log('Parent updated');
    },
    beforeUnmount() {
        console.log('Parent beforeUnmount');
    },
    unmounted() {
        console.log('Parent unmounted');
    },
    activated() {
        console.log('Parent activated');
    },
    deactivated() {
        console.log('Parent deactivated');
    },
    errorCaptured() {
        console.log('Parent errorCaptured');
    },
    renderTracked() {
        console.log('Parent renderTracked');
    },
    renderTriggered() {
        console.log('Parent renderTriggered');
    }
}
</script>
<style >
    
</style>