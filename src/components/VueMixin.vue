<template >
    <h1>Mixin</h1>
    <ClickCounter />
    <HoverCounter />
</template>
<script>
import ClickCounter from "./ClickCounter.vue";
import HoverCounter from "./HoverCounter.vue";

export default {
    name: 'VueMixin',
    data() {
        return {

        }
    },
    components: {
        ClickCounter,
        HoverCounter,
    }
}
</script>
<style >
    
</style>