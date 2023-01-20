<template>
    <input type="text" id="" :value="name" @input="$emit('update:name', $event.target.value)">
</template>
<script>
export default {
    name: 'Input',
    props: {
        name: String,
        // modelValue: String
    },
    emits: ['update:name']
}
</script>
<style >
input[type='text'] {
    display:block;
    width:400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>