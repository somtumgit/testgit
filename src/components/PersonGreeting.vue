<template >
    <h1>Person Greeting</h1>
    <div>Option Hello {{fullname}}</div>
    <div>Composition Hello {{c_fullname}}</div>
    <div>
        <button @click="$emit('changeName')">Option emit Change Name</button>
        <button @click="changeName">Composition emit Change Name</button>
    </div>
</template>
<script>
import {computed} from 'vue';

export default {
    name: 'PersonGreeting',
    setup(props, context) {
        console.log(context);
        const c_fullname = computed(() => {
            return `${props.firstname} ${props.lastname}`;
        });

        const changeName = function() {
            // this.$emit('c_changeName', 'property value');
            context.emit('c_changeName', c_fullname.value);
        }

        return {
            c_fullname,
            changeName
        }
    },
    data() {
        return {

        }
    },
    props: ['firstname','lastname'],
    emits: ['changeName','c_changeName'],
    computed: {
        fullname() {
            return `${this.firstname} ${this.lastname}`;
        }
    }
}
</script>
<style >
    
</style>