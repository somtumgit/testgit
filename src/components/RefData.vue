<template >
    <h1>Composition Ref Data</h1>
    <h1>Option: {{ o_firstname }} </h1>
    <h1>Composition: {{ c_firstname }} {{ c_lastname }} {{ c_heroname }} </h1>
    <h1>Composition: {{ greet }} </h1>
    <h1>Composition: {{ state.firstname }} {{ state.lastname }} {{ state.heroname }} </h1>
    <h1>Composition: {{ reactiveGreet }} </h1>
    <h1>Composition: {{ isLoggedIn }} {{ isLoggedInReactive }}</h1>
    <hr/>

    <h1>{{ name }}</h1>
    <h1>{{ firstname }} {{ lastname }}</h1>
</template>
<script>
import { ref, reactive, toRefs } from 'vue';

export default {
    name: 'RefData',
    setup() {
        const c_firstname = ref('Aaaa');
        const c_lastname = ref('Bbbb');
        const c_heroname = ref('Cccc');
        const isLoggedIn = ref(false);

        const state = reactive({
            firstname: 'Mmmm',
            lastname: 'Nnnn',
            heroname: 'Oooo',
        });
        const isLoggedInReactive = reactive(false);
        
        const greet = `Hello ${c_firstname.value} ${c_lastname.value} a.k.a ${c_heroname.value}`;

        const reactiveGreet = `Hello ${state.firstname} ${state.lastname} a.k.a ${state.heroname}`;

        const name = ref('Aaaa');
        const user = reactive({
            firstname: 'Aaaa',
            lastname: 'Bbbb'
        });

        setTimeout(function() {
            name.value = 'Mmmm';
            user.firstname = 'Mmmm';
            user.lastname = 'Nnnn';
            console.log(name);
        }, 2000);

        return {
            c_firstname,c_lastname,c_heroname,
            greet,
            state,
            reactiveGreet,
            isLoggedIn,isLoggedInReactive,
            name,
            // firstname: user.firstname,
            // lastname: user.lastname,
            ...toRefs(user),
        }
    },
    data() {
        return {
            o_firstname: 'Aaaa'
        }
    }
}
</script>
<style >
    
</style>