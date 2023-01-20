<template lang="">
    <div>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <h1>{{ msg }}</h1>
        <h1>{{name}}</h1>
        <h1 v-text="name"></h1>
        <h1 v-html="name_tag"></h1>
        <h1 v-html="hello_link"></h1>
        <h1 v-bind:id="headingId">Heading</h1>
        <button v-bind:disabled="isDisabled">Bind</button>
        <h1 class="underline">Underline Text</h1>
        <h1 v-bind:class="status">Status</h1>
        <h1 v-bind:class="isPromoted && 'promoted'">Promoted</h1>
        <h1 v-bind:class="isPromoted ?'promoted':'new'">Promoted</h1>
        <h1 v-bind:class="{
        promoted: isPromoted,
        'sold-out' : isSoldOut,
        }">Promoted</h1>
        <h1 style="color: orange;">Style</h1>
        <h1 v-bind:style="{color:highlightColor}">Style</h1>
        <h1 v-bind:style="headStyleObject">Head Style Object</h1>
        <h1 v-bind:style="[baseStyleObject, successStyleObject]">Success Style Object</h1>
        <h1 v-bind:style="[baseStyleObject, dangerStyleObject]">Danger Style Object</h1>
    </div>
</template>
<script>
// import HelloWorld from './HelloWorld.vue'
export default {
    name: 'VueBind',
    data() {
        return {
        name: "Vue01",
        name_tag: "<u>Vue01</u>",
        hello_link: `<a href="#" onclick="alert('Hello world!')">Hello</a>`,
        headingId: 'heading',
        isDisabled: true,
        status: 'danger',
        isPromoted: true,
        isSoldOut: true,
        highlightColor: 'orange',
        headStyleObject: {
            color: 'orange',
            fontSize: '50px',
            padding: '20px'
        },
        baseStyleObject: {
            fontSize: '50px',
            padding: '10px'
        },
        successStyleObject: {
            color: 'green',
            backgroundColor: 'lightgreen',
            border: '1px solid green',
            padding: '20px'
        },
        dangerStyleObject: {
            color: 'red',
            backgroundColor: 'lightsalmon',
            border: '1px solid red',
            padding: '20px'
        }

        }
    },
    components: {
        // HelloWorld
    }
}
</script>
<style >
.underline {
  text-decoration: underline;
}
.danger {
  color: red;
}
.success {
  color: green;
}
.promoted {
  font-style: italic;
  font-size: 30px;
}
.sold-out {
  color: red;
}
</style>