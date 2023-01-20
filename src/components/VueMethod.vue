<template >
    <div>
        <h1>Method</h1>
        <h1>{{2+3+5}}</h1>
        <h1>Add Method : {{add(2,3,5)}}</h1>
        <h1>Base Multifier Method : {{multiply(baseValue)}}</h1>
        <hr/>
        <h1>Name: {{name}}</h1>
        <button v-on:click="name = 'Bbbb'">Change name</button>
        <hr/>
        <h1>Count: {{count}}</h1>
        <div>
            <button v-on:click="increment(2,$event),changeName('Bbbb')">Increment</button>
            <button v-on:click="decrement(2,$event),changeName('Aaaa')">Decrement</button>
            <!-- <button v-on:click="count = count+1">Increment</button> -->
            <!-- <button v-on:click="count = count-1">Decrement</button> -->
        </div>
        <hr/>


    </div>
</template>
<script>
export default {
    name: 'VueMethod',
    data() {
        return {
            baseMultiplier: 5,
            baseValue: 2,
            name: 'Aaaa',
            count: 0,
        }
        
    },
    methods: {
        add(a,b,c) {
            return a+b+c;
        },
        multiply(num) {
            return num * this.baseMultiplier;
        },
        increment(num = 1, event) {
            console.log('event',event);
            return this.count += num;
        },
        decrement(num = 1, event) {
            console.log('event',event);
            return this.count -= num;
        },
        changeName(name) {
            return this.name = name;
        }
    },
}
</script>
<style lang="">
    
</style>