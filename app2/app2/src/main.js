import Vue from "vue";
import App from "./App.vue";
import { sync } from 'vuex-router-sync'
import router from "./router";
import store from "./store";

sync(store, router)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");