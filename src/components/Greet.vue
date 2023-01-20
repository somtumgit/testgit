<template >
    <div>
        <h1 v-bind="$attrs">Hello {{ name }} a.k.a {{ heroName }} age {{ age }}</h1>
    </div>
</template>
<script>
export default {
    name: 'Greet',
    // props: ['name','heroName'],  //props with array
    props: { //props with object
        name: {
            type: String,
            request: true,
            default: '????'
        },
        heroName: String,
        age: Number
    },
    inheritAttrs: false,
}
</script>
<style >
    
</style>