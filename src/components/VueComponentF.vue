<template >
    <div>
        <h1>VueComponentF</h1>
        <h1>VueComponentF Inject username: {{username}}</h1>
    </div>
</template>
<script>

export default {
    name: 'VueComponentF',
    components: {

    },
    inject: ['username'],
}
</script>
<style >
    
</style>