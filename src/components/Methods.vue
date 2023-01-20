<template >
    <h1>Composition Method</h1>
    <h1>{{name}}</h1>
    <button @click="setName">Change Option Name</button>
    <hr/>

    <h1>{{count}}</h1>
    <button @click="incrementCount">Increment Composition ref Count</button>
    <hr/>

    <h1>{{first}} {{last}}</h1>
    <button @click="changeUser">Change Composition reactive User</button>
    <hr/>
</template>
<script>
import {ref, reactive, toRefs} from 'vue';
export default {
    name: 'Methods',
    setup() {
        const count = ref(0);
        const user = reactive({
            first: 'Aaaa',
            last: 'Bbbb'
        });

        const incrementCount = function() {
            count.value += 1;
        }
        const changeUser = function() {
            user.first = 'Mmmm';
            user.last = 'Nnnn';
        }
        return {
            count,
            incrementCount,
            ...toRefs(user),
            changeUser
        }
    },
    data() {
        return {
            name: 'Aaaa',
        }
    },
    methods: {
        setName() {
            this.name = 'Mmmm';
        }
    },
}
</script>
<style >
    
</style>