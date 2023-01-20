<template >

    <h1>Render</h1>
    <h1 v-if="number === 0">The number is zero.</h1>
    <h1 v-else-if="number < 0">The number is negative.</h1>
    <h1 v-else-if="number > 0">The number is positive.</h1>
    <h1 v-else>Not a number.</h1>

    <template v-if="display">
        <h1>My name is Render!</h1>
    </template>

    <h1 v-if="show">Hello Guy V-if</h1>
    <h1 v-show="show">Hello Guy V-Show</h1>

    <h1 v-for="(name, index) in names" :key="index">{{index}} {{name }}</h1>
    <h1 v-for="(name, index) in fullNames" :key="index">{{index}} {{name.first}} {{name.last }}</h1>
    <div v-for="actor in actors" :key="actor.name">
        <h1>{{actor.name}}</h1>
        <h2 v-for="movie in actor.movies" :key="movie">{{movie}}</h2>
    </div>
    <h1 v-for="(value,key,index) in myInfos" :key="value">{{index}} {{key}} {{value}}</h1>

    <template v-for="name in names" :key="name">
        <h1>{{name}}</h1>
        <input type="text" placeholder="Last name">
        <hr/>
    </template>
    <button @click="shuffle">Shuffle!</button>


    <template v-for="name in names" :key="name">
        <h2 v-if="name == 'Bbbb'">{{name}}</h2>
    </template>

</template>
<script>
import _ from "lodash";
export default {
    name: 'VueRender',
    data() {
        return {
            number: 5,
            display: 1,
            show: 0,
            names: ['Aaaa', 'Bbbb', 'Cccc'],
            fullNames: [
                {first:'Aaaa',last:'Nnnn'},
                {first:'Bbbb',last:'Mmmm'},
                {first:'Cccc',last:'Oooo'},
            ],
            actors: [
                {name:"Christian Bale",movies:['Batman','The Prestinge']},
                {name:"Di Caprio",movies:['Titanic','Inception']},
            ],
            myInfos: {
                name: 'aaaa',
                channal: 'bbbb',
                course: 'cccc'
            }
        }
    },
    components: {
    },
    methods: {
        shuffle() {
            console.log(this.name);
            this.names = _.shuffle(this.names);
        }
    },
}
</script>
<style lang="">
    
</style>