<template>
    <h1>Child</h1>
</template>
<script>
export default {
    name: "Child",
    data() {
        return {
            
        }
    },
    beforeCreate() {
        console.log('Child beforeCreate');
    },
    created() {
        console.log('Child created');
    },
    beforeMount() {
        console.log('Child beforeMount');
    },
    mounted() {
        console.log('Child mounted');
    },
    beforeUpdate() {
        console.log('Child beforeUpdate');
    },
    updated() {
        console.log('Child updated');
    },
    beforeUnmount() {
        console.log('Child beforeUnmount');
    },
    unmounted() {
        console.log('Child unmounted');
    },
    activated() {
        console.log('Child activated');
    },
    deactivated() {
        console.log('Child deactivated');
    },
    errorCaptured() {
        console.log('Child errorCaptured');
    },
    renderTracked() {
        console.log('Child renderTracked');
    },
    renderTriggered() {
        console.log('Child renderTriggered');
    }

}
</script>
<style >
    
</style>