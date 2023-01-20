<template >
    <h1>Composition Props</h1>
    <div>
        <input type="text" placeholder="First Name" v-model="firstname">
        <input type="text" placeholder="Last Name" v-model="lastname">
    </div>
    <div>
        <button @click="changeName">Obtion Change Name</button>
        <button @click="c_changeName(fullname())">Composition Change Name</button>
    </div>
    <PersonGreeting :firstname="firstname" :lastname="lastname" @changeName="changeName" @c_changeName="c_changeName"/>
</template>
<script>
import {ref} from 'vue';
import PersonGreeting from './PersonGreeting.vue'

export default {
    name: 'Props',
    setup() {
        const firstname = ref('');
        const lastname = ref('');
        const fullname = function() {
            return `${firstname.value} ${lastname.value}`;
        }

        const c_changeName = function(fullname) {
            alert('Change Full Name: ' + fullname);
            firstname.value = 'Aaaa';
            lastname.value = 'Bbbb';
        }

        return {
            firstname,
            lastname,
            fullname,
            c_changeName
        }
    },
    data() {
        return {

        }
    },
    components: {
        PersonGreeting
    },
    methods: {
        changeName() {
            this.firstname = 'Aaaa';
            this.lastname = 'Bbbb';
        }
    },
}
</script>
<style >
    
</style>