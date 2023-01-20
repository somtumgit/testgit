<template >
    <h1>Composition Ref Referance</h1>
    <h1 ref="o_referance">Option Referance</h1>
    <h1 ref="c_referance">Composition Referance</h1>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'RefReferance',
    setup() {
        const c_referance = ref('');

        onMounted(() => {
            console.log(c_referance.value);
            c_referance.value.style.color = 'green';
        });
        
        return {
            c_referance
        }
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.$refs.o_referance.style.color = 'red';
    },
}
</script>
<style >
    
</style>