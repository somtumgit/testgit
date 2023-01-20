<template >
    <div>
        <h1>This is popup</h1>
        <!-- <input type="text" id="name" v-model="name"> -->
        <Input id="name" v-model:name="name"/>
        <button @click="$emit('close', name)">Close</button>
    </div>
</template>
<script>
import Input from './Input.vue';

export default {
    name: 'Popup',
    data() {
        return {
            name: '',
        }
    },
    components: {
        Input
    },
    // emit event to the parent component
    // emits: ['close'], // array
    emits: {
        close: (name) => {
            if(!name) {
                return false
            }else {
                return true
            }
        }
    }
}
</script>
<style >
    
</style>