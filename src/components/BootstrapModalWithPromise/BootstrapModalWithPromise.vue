<template>
  <div>
    <b-btn @click="onConfirmDialog">Launch modal with promise</b-btn>
  </div>
</template>

<script>
import BootstrapModalDialog from "./BootstrapModalDialog";
import { create } from "vue-modal-dialogs";

const confirmDialog = create(BootstrapModalDialog);

export default {
  methods: {
    async onConfirmDialog() {
      if (
        await confirmDialog({
          title: "Please confirm",
          message: "Are you very very sure about this?",
          anotherMessage: "And I mean really really sure?"
        })
      ) {
        // eslint-disable-next-line
        console.log("You confirmed Ok");
      } else {
        // eslint-disable-next-line
        console.log("You confirmed Cancel");
      }
    }
  }
};
</script>
