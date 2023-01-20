<template >
    <h1>Compute</h1>
    <button @click="changeFullname">Change Fullname</button>
    <h1>Fullname: {{ firstname }} {{ lastname }}</h1>
    <h1>Compute Fullname: {{ fullname }}</h1>

    <hr/>
    <button @click="items.push({id:4,title:'Keyboard',price:50})">Add item</button>
    <h1>Total: {{ items.reduce((total,curr) => (total = total + curr.price), 0) }}</h1>
    <h1>Compute Total: {{ total }}</h1>
    <h1>Method Total: {{ getTotal() }}</h1>
    <input type="text" id="country" v-model="country">

    <template v-for="item in items" :key="item.id">
        <h1 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h1>
    </template>

    <h1 v-for="item in expensiveItems" :key="item.id">{{ item.title }} {{ item.price }}</h1>
</template>
<script>
export default {
    name: 'VueCompute',
    data() {
        return {
            firstname: 'Aaaa',
            lastname: 'Bbbb',
            items: [
                {id:1,title:'TV',price:100},
                {id:2,title:'Phone',price:200},
                {id:3,title:'Laptop',price:300},
            ],
            country: '',
        }
    },
    methods: {
        changeFullname() {
            this.fullname = 'Cccc Dddd';
        },
        getTotal() {
            console.log('getTotal method');
            return this.items.reduce((total,curr) => (total = total + curr.price), 0);
        },

    },
    computed: {
        fullname: {
            get() {
                return `${this.firstname} ${this.lastname}`;
            },
            set(value) {
                const names = value.split(' ');
                this.firstname = names[0];
                this.lastname = names[1];
            },
        },
        total() {
            console.log('total compute')
            return this.items.reduce((total,curr) => (total = total + curr.price), 0);
        },
        expensiveItems() {
            return this.items.filter(item => item.price > 100)
        },
    }


}
</script>
<style >
    
</style>