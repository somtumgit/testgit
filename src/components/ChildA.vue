<template >
    <h1>Child A</h1>
    <ChildB />
</template>
<script>
import ChildB from './ChildB.vue';

export default {
    name: 'ChildA',
    data() {
        return {
            
        }
    },
    components: {
        ChildB
    }
}
</script>
<style >
    
</style>