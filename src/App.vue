<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <bootstrap-modal/>
    <bootstrap-modal-with-promise/>

    <dialogs-wrapper/>
  </div>
</template>

<script>
import BootstrapModal from "./components/BootstrapModal/BootstrapModal.vue";
import BootstrapModalWithPromise from "./components/BootstrapModalWithPromise/BootstrapModalWithPromise.vue";
export default {
  name: "app",
  components: {
    BootstrapModal,
    BootstrapModalWithPromise
  }
};
</script>

<style lang="scss">
//== Bootstrap and included styles
@import "./style/style.scss";
</style>
