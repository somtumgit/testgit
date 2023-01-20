<template >
    <h1>Composition Computed</h1>
    <hr/>
    <h1>Option Computed</h1>
    <input type="text" placeholder="First Name" v-model="fname">
    <input type="text" placeholder="Last Name" v-model="lname">
    <h2>Option Computed Fullname: {{fullname}}</h2>
    <hr/>

    <h1>Composition Computed</h1>
    <input type="text" placeholder="First Name" v-model="firstname">
    <input type="text" placeholder="Last Name" v-model="lastname">
    <h2>Composition Computed Fullname: {{c_fullname}}</h2>
    <hr/>

    <h1>Composition Computed Reactive</h1>
    <input type="text" placeholder="First Name" v-model="rtFirstname">
    <input type="text" placeholder="Last Name" v-model="rtLastname">
    <h2>Composition Computed Reactive Fullname: {{c_rtFullname}}</h2>
</template>
<script>
import { ref, computed, reactive, toRefs } from 'vue';

export default {
    name: 'Computed',
    setup() {
        const firstname = ref('Cccc');
        const lastname = ref('Dddd');
        const user = reactive({
            rtFirstname : 'Ffff',
            rtLastname : 'Gggg',
        });

        const c_fullname = computed(function() {
            return `${firstname.value} ${lastname.value}`;
        });

        const c_rtFullname = computed(function() {
            return `${user.rtFirstname} ${user.rtLastname}`;
        });

        return {
            firstname,lastname,
            c_fullname,
            ...toRefs(user),
            c_rtFullname
        }
    },
    data() {
        return {
            fname: 'Aaaa',
            lname: 'Bbbb'
        }
    },
    computed: {
        fullname() {
           return `${this.fname} ${this.lname}`; 
        }
    }
}
</script>
<style >
    
</style>