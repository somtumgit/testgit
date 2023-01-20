<template >
    <div>
        <h1>VueComponentC</h1>
        <VueComponentD />
    </div>
</template>
<script>
import VueComponentD from './VueComponentD.vue';
export default {
    name: 'VueComponentC',
    components: {
        VueComponentD
    }
}
</script>
<style >
    
</style>