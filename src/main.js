import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import * as ModalDialogs from "vue-modal-dialogs";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(ModalDialogs);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
