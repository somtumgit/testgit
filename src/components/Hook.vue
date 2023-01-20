<template >
    <h1>Hook</h1>
    <input type="text" ref="inputRef">
</template>
<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';

export default {
    name: 'Hook',
    setup() {
        const inputRef = ref('');
        onBeforeMount(() => {
            console.log('Composition Hook onBeforeMount');
        }); 
        onMounted(() => {
            console.log('Composition Hook onMounted');
            console.log(inputRef.value);
            inputRef.value.focus();
        }); 
        onBeforeUpdate(() => {
            console.log('Composition Hook onBeforeUpdate');
        }); 
        onUpdated(() => {
            console.log('Composition Hook onUpdated');
        }); 
        onBeforeUnmount(() => {
            console.log('Composition Hook onBeforeUnmount');
        }); 
        onUnmounted(() => {
            console.log('Composition Hook onUnmounted');
        });

        return {
            inputRef
        }
    },
    data() {
        return {

        }
    },
    // mounted() {
    //     this.$refs.inputRef.focus();
    // },
}
</script>
<style >
    
</style>