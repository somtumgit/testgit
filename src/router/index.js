import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import VueBind from "@/components/VueBind.vue";
import VueRender from "@/components/VueRender.vue";
import VueMethod from "@/components/VueMethod.vue";
import VueFormHandle from "@/components/VueFormHandle.vue";
import VueCompute from "@/components/VueCompute.vue";
import VueWatcher from "@/components/VueWatcher.vue";
import VueComponent from "@/components/VueComponent.vue";
import VueHTTP from "@/components/VueHTTP.vue";
import PostList from "@/components/PostList.vue";
import CreatePost from "@/components/CreatePost.vue";
import VueHook from "@/components/VueHook.vue";
import VueRef from "@/components/VueRef.vue";
import VueMixin from "@/components/VueMixin.vue";
import VueCompositionApi from "@/components/VueCompositionApi.vue";
import RefData from "@/components/RefData.vue";
import RefReferance from "@/components/RefReferance.vue";
import Methods from "@/components/Methods.vue";
import Vmodel from "@/components/Vmodel.vue";
import Computed from "@/components/Computed.vue";
import Watch from "@/components/Watch.vue";
import ProvideInject from "@/components/ProvideInject.vue";
import Hook from "@/components/Hook.vue";
import Props from "@/components/Props.vue";
import Reuseable from "@/components/Reuseable.vue";


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/vue-bind",
      name: "vue-bind",
      component: VueBind,
    },
    {
      path: "/vue-render",
      name: "vue-render",
      component: VueRender,
    },
    {
      path: "/vue-method",
      name: "vue-method",
      component: VueMethod,
    },
    {
      path: "/vue-form-handle",
      name: "vue-form-handle",
      component: VueFormHandle,
    },
    {
      path: "/vue-compute",
      name: "vue-compute",
      component: VueCompute,
    },
    {
      path: "/vue-watcher",
      name: "vue-watcher",
      component: VueWatcher,
    },
    {
      path: "/vue-component",
      name: "vue-component",
      component: VueComponent,
      // props: {name: 'Aaaa', heroName: 'Bbbb'},
    },
    {
      path: "/vue-http",
      name: "vue-http",
      component: VueHTTP,
    },
    {
      path: "/vue-http-post-list",
      name: "vue-http-post-list",
      component: PostList,
    },
    {
      path: "/vue-http-create-post",
      name: "vue-http-create-post",
      component: CreatePost,
    },
    {
      path: "/vue-hook",
      name: "vue-hook",
      component: VueHook,
    },
    {
      path: "/vue-ref",
      name: "vue-ref",
      component: VueRef,
    },
    {
      path: "/vue-mixin",
      name: "vue-mixin",
      component: VueMixin,
    },
    {
      path: "/vue-composition-api",
      name: "vue-composition-api",
      component: VueCompositionApi,
    },
    {
      path: "/vue-composition-ref-data",
      name: "vue-composition-ref-data",
      component: RefData,
    },
    {
      path: "/vue-composition-ref-referance",
      name: "vue-composition-ref-referance",
      component: RefReferance,
    },
    {
      path: "/vue-composition-method",
      name: "vue-composition-method",
      component: Methods,
    },
    {
      path: "/vue-composition-vmodel",
      name: "vue-composition-vmodel",
      component: Vmodel,
    },
    {
      path: "/vue-composition-compute",
      name: "vue-composition-compute",
      component: Computed,
    },
    {
      path: "/vue-composition-watch",
      name: "vue-composition-watch",
      component: Watch,
    },
    {
      path: "/vue-composition-ProvideInject",
      name: "vue-composition-ProvideInject",
      component: ProvideInject,
    },
    {
      path: "/vue-composition-Hook",
      name: "vue-composition-Hook",
      component: Hook,
    },
    {
      path: "/vue-composition-props",
      name: "vue-composition-props",
      component: Props,
    },
    {
      path: "/vue-composition-reuseable",
      name: "vue-composition-reuseable",
      component: Reuseable,
    },
  ],
});

// const routes = [
  
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default router;