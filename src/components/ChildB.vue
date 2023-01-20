<template >
    <h1>Child B</h1>
    <ChildC />
</template>
<script>
import ChildC from './ChildC.vue';

export default {
    name: 'ChildB',
    data() {
        return {
            
        }
    },
    components: {
        ChildC
    },
    
}
</script>
<style >
    
</style>