<template >
    <h1>Watcher</h1>
    <h1>Volume Tracker (0-20)</h1>
    <h1>Current Volume - {{ volume }}</h1>
    <div>
        <button @click="volume += 2">Increase</button>
        <button @click="volume -= 2">Decrease</button>
    </div>
    <input type="text" id="movie" v-model="movie">
    <input type="text" id="movie" v-model="movieInfo.title">
    <input type="text" id="movie" v-model="movieInfo.actor">
    <div>
        <button @click="movieList.push('Wonder Women')">Add movie</button>
    </div>
</template>
<script>
export default {
    name: 'VueWatcher',
    data() {
        return {
            volume: 0,
            movie: 'Batman',
            movieInfo: {
                title: '',
                actor: ''
            },
            movieList: ['Batman','Supername']
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {
        volume(newValue, oldValue) {
            if(newValue > oldValue && newValue === 16) {
                alert('Listening to a high volume for a long time may damage your hearing');
            }
        },
        movie: {
            handler(newValue) {
                console.log(`Calling API with movie name: ${newValue}`);
            },
            immediate: true,
        },
        movieInfo: {
            handler(newValue) {
                console.log(`Calling API with movie title: ${newValue.title} and actor: ${newValue.actor}` );
            },
            deep: true,
            immediate: true
        },
        movieList: {
            handler(newValue) {
                console.log(`Updated list: ${newValue}`);
            },
            deep: true,
        }
    }

}
</script>
<style >
    
</style>