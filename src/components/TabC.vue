<template >
    <h1>TabC</h1>
    <input type="text" v-model="name">
    <div>{{name}}</div>
</template>
<script>
export default {
    name: 'TabC',
    data() {
        return {
            name: ''
        }
    },
}
</script>
<style >
    
</style>