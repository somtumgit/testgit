<template >
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
        <div>
            <label for="userId">Post User Id</label>
            <input type="text" id="userId" v-model="formData.userId">
        </div>
        <div>
            <label for="title">Post Title</label>
            <input type="text" id="title" v-model="formData.title">
        </div>
        <div>
            <label for="body">Post Body</label>
            <input type="text" id="body" v-model="formData.body">
        </div>
        <button type="submit">Create Post</button>
    </form>
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
    name: 'CreatePost',
    data() {
        return {
            posts: [],
            errorMsg: '',
            formData: {
                userId: '',
                title: '',
                body: ''
            }
        }  
    },
    methods: {
        createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then((res) => {
                    console.log(res.data);
                    this.posts = [{...res.data}];
                    this.errorMsg = '';
                })
                .catch((err) => {
                    console.log(err);
                    this.errorMsg = 'Error retrieving data';
                });
        }
    },

}
</script>
<style >
    
</style>