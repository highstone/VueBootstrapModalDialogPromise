<template>
  <div>
  <b-btn v-b-modal.confirmDialog>Launch modal</b-btn>

  <!-- Modal Component -->
  <b-modal 
    id="confirmDialog" centered title="Please confirm"
    @ok="onConfirmOk"
    @cancel="onConfirmCancel">
    <p class="my-4">Is this a magic message or what?</p>
  </b-modal>
</div>
</template>

<script>
export default {
  methods: {
    onConfirmOk() {
      // eslint-disable-next-line
      console.log("You confirmed Ok");
    },
    onConfirmCancel() {
      // eslint-disable-next-line
      console.log("You confirmed Cancel");
    }
  }
};
</script>
