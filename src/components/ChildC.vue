<template >
    <h1>Child C</h1>
    <h1>Option Inject: {{userName}}</h1>
    <h1>Composition Inject Count: {{c_count}}</h1>
    <h1>Composition Inject User Name: {{c_userName}}</h1>
    <h1>Composition Reactive Inject First Name: {{c_rtfname}}</h1>
    <h1>Composition Reactive Inject Last Name: {{c_rtlname}}</h1>
    <button @click="incrementCount">Increment</button>
</template>
<script>
import { inject } from 'vue';

export default {
    name: 'ChildC',
    setup() {
        const c_count = inject('c_count', 0);
        const c_userName = inject('c_userName', 'default');
        const c_rtfname = inject('c_rtfname', 'default');
        const c_rtlname = inject('c_rtlname', 'default');
        const incrementCount = inject('incrementCount', 'default');
        

        return {
            c_count,
            c_userName,
            c_rtfname,c_rtlname,
            incrementCount
        }
    },
    data() {
        return {
            
        }
    },
    inject: ['userName']
}
</script>
<style >
    
</style>