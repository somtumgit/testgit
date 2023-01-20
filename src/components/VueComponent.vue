<template >
    <h1>Component {{name}}</h1>
    <Greet name="Aaaa" heroName="Mmm" :age="20" id="recomment"/>
    <Greet name="Bbbb" heroName="Nnn" :age="25"/>
    <Greet name="Cccc" heroName="Ooo" :age="30"/>
    <Greet :name="name" :heroName="heroName" :age="30"/>

    <VueComponentC />
    <hr/>

    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup" />
    <hr/>

    <Card content="Card content 1" >
        <p><b>Slot content </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium fuga perferendis dolores optio iste eligendi nobis voluptates atque! Non quis accusamus, blanditiis id illum vero ab aut. Mollitia, blanditiis.</p>
    </Card>
    <Card content="Card content 2" >
        <p><b>Slot content </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium fuga perferendis dolores optio iste eligendi nobis voluptates atque! Non quis accusamus, blanditiis id illum vero ab aut. Mollitia, blanditiis.</p>
    </Card>
    <Card>
        <template v-slot:header>
            <img src="https://picsum.photos/200" alt="">
        </template>
        <template v-slot:default>
            <p><b>Slot content </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium fuga perferendis dolores optio iste eligendi nobis voluptates atque! Non quis accusamus, blanditiis id illum vero ab aut. Mollitia, blanditiis.</p>
        </template>
        <template v-slot:footer>
            <button>View Details</button>
        </template>
    </Card>
    <hr/>

    <NameList> 
        <template v-slot:default="slotProps">
            {{slotProps.firstname}} {{slotProps.lastname}}
        </template>
    </NameList>
    <hr/>

    <div>
        <button @click="activeTab = 'TabA'">TabA</button>
        <button @click="activeTab = 'TabB'">TabB</button>
        <button @click="activeTab = 'TabC'">TabC</button>
    </div>
    <keep-alive>
        <component :is="activeTab" />
    </keep-alive>
        <TabA v-if="activeTab == 'TabA'" />
        <TabB v-if="activeTab == 'TabB'" />
    <keep-alive>
        <TabC v-if="activeTab == 'TabC'" />
    </keep-alive>
    <hr/>

    <teleport to='#portal-root' >
        <Portal />
    </teleport>

</template>
<script>
import Greet from './Greet.vue';
import VueComponentC from './VueComponentC.vue';
import Popup from './Popup.vue';
import Card from './Card.vue';
import NameList from './NameList.vue';
import TabA from './TabA.vue';
import TabB from './TabB.vue';
import TabC from './TabC.vue';
import Portal from './Portal.vue';

export default {
    name: 'VueComponent',
    data() {
        return {
            name: 'Dddd',
            heroName: 'Pppp',
            showPopup: false,
            activeTab: 'TabA',           
        }
    },
    components: {
        Greet,
        VueComponentC,
        Popup,
        Card,
        NameList,
        TabA,TabB,TabC,
        Portal,
    },
    methods: {
        closePopup(name) {
            this.showPopup = false;
            console.log(name);
        }
    },
    provide() {
        return {
            username: this.name,
        }
    },
    
}
</script>
<style scoped>
    h1 {
        /* color:red; */
    }
</style>