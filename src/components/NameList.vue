<template>
    <h1 v-for="user in users" :key="user.firstname">
        <slot :firstname="user.firstname" :lastname="user.lastname"></slot>
        
    </h1>
</template>
<script>
export default {
    name: 'NameList',
    data() {
        return {
            users: [
                {firstname: 'Aaaa', lastname: 'Mmmm'},
                {firstname: 'Bbbb', lastname: 'Nnnn'},
                {firstname: 'Cccc', lastname: 'Oooo'}
            ]
        }
    }
}
</script>
<style>
    
</style>