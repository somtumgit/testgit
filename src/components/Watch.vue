<template >
    <h1>Watch</h1>
    <h1>Option Watch</h1>
    <input type="text" id="name" v-model="name">
    <hr/>

    <h1>Composition Watch</h1>
    <input type="text" placeholder="First Name" v-model="firstname">
    <input type="text" placeholder="Last Name" v-model="lastname">

    <h1>Composition reactive Watch</h1>
    <input type="text" placeholder="First Name" v-model="fname">
    <input type="text" placeholder="Last Name" v-model="lname">
    <input type="text" placeholder="Hero Name" v-model="option.heroname">
</template>
<script>
import {ref, watch, reactive, toRefs} from 'vue';

export default {
    name: 'Watch',
    setup() {
        const firstname = ref('');
        const lastname = ref('');
        const user = reactive({
            fname: '',
            lname: '',
            option: {
                heroname: ''
            }
        });

        watch([firstname,lastname], function(newValue,oldValue) {
            console.log('Composition watch firstname Old Value',oldValue[0]);
            console.log('Composition watch firstname New Value',newValue[0]);
            console.log('Composition watch lastname Old Value',oldValue[1]);
            console.log('Composition watch lastname New Value',newValue[1]);
        },{
            immediate: true
        }); 

        watch(()=>{return{...user}}, function(newValue,oldValue) {
            console.log('Composition reactive watch fname Old Value',oldValue.fname);
            console.log('Composition reactive watch fname New Value',newValue.fname);
            console.log('Composition reactive watch lname Old Value',oldValue.lname);
            console.log('Composition reactive watch lname New Value',newValue.lname);
        }); 

        watch(()=>{return{...user.option}}, function(newValue,oldValue) {
            console.log('Composition reactive watch heroname Old Value',oldValue);
            console.log('Composition reactive watch heroname New Value',newValue);
        },{
            deep: true,
        }); 

        return {
            firstname,lastname,
            ...toRefs(user),

        }
    },
    data() {
        return {
            name: '',
        }
    },
    watch: {
        name(newValue,oldValue) {
            console.log('Old Value',oldValue);
            console.log('New Value',newValue);
        }
    }
}
</script>
<style >
    
</style>