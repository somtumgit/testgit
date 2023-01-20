<template >
    <h1>Post List</h1>
    <!-- <button @click="getPosts">Load Posts</button> -->
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <div v-for="post in posts" :key="post.id">
        <h3>#{{post.id}}  {{post.title}}</h3>
        <p>{{post.body}}</p>
        <hr/>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'PostList',
    created() {
        this.getPosts();
    },
    data() {
        return {
            posts: [],
            errorMsg: ''
        }  
    },
    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    console.log(res);
                    this.posts = res.data;
                    this.errorMsg = '';
                }).catch((err) => {
                    console.log(err);
                    this.errorMsg = 'Error retrieving data';
                });
        }
    },
    

}
</script>
<style >
    
</style>