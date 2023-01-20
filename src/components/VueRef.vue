<template >
    <h1>Ref</h1>
    <input type="text" ref="inputRef">
    <PostList ref="postListRef" />
</template>
<script>
import PostList from './PostList.vue';

export default {
    name: 'VueRef',
    data() {
        return {

        }
    },
    components: {
        PostList
    },
    mounted() {
        console.log(this.$refs.postListRef);
        this.$refs.inputRef.focus();
    },    
}
</script>
<style >
    
</style>