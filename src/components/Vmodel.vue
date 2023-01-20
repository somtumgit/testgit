<template >
    <h1>V-Model</h1>
    <h1>Option v-model</h1>
    <input type="text" id="firstname" placeholder="First Name" v-model="fName">
    <input type="text" id="lastname" placeholder="Last Name" v-model="lName">
    <hr/>

    <h1>Composition v-model</h1>
    <input type="text" id="firstname" placeholder="First Name" v-model="firstname">
    <input type="text" id="lastname" placeholder="Last Name" v-model="lastname">
    <input type="text" id="heroname" placeholder="Hero Name" v-model="heroName">
</template>
<script>
import {ref, reactive, toRefs} from 'vue';

export default {
    name: 'Vmodel',
    setup() {
        const heroName = ref('');
        const user = reactive({
            firstname: '',
            lastname: ''
        });

        return {
            heroName,
            ...toRefs(user)
        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
}
</script>
<style >
    
</style>