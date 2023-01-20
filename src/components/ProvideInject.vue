<template >
    <h1>Provide Inject</h1>
    <h1>Option Provide {{name}}</h1>
    <h1>Composition Provide Count {{c_count}}</h1>
    <h1>Composition Provide User Name {{c_name}}</h1>
    <h1>Composition Reactive Provide First Name {{fname}}</h1>
    <h1>Composition Reactive Provide Last Name {{lname}}</h1>
    <button @click="incrementCount">Increment</button>
    <ChildA />
</template>
<script>
import {ref, provide, reactive, toRefs} from 'vue';
import ChildA from './ChildA.vue';

export default {
    name: 'ProvideInject',
    setup() {
        const c_name = ref('Bbbb');
        const c_count = ref(0);
        const user = reactive({
            fname: 'Cccc',
            lname: 'Dddd'
        });

        const incrementCount = function() {
            this.c_count += 1;
        }

        provide('c_userName',c_name);
        provide('c_count',c_count);
        provide('c_rtfname',user.fname);
        provide('c_rtlname',user.lname);
        provide('incrementCount',incrementCount);

        return {
            c_name,
            c_count,
            ...toRefs(user),
            incrementCount
        }
    },
    data() {
        return {
            name: 'Aaaa',
        }
    },
    components: {
        ChildA
    },
    provide() {
        return {
            userName: this.name,
        }
    }
}
</script>
<style >
    
</style>