<template>
  <!-- Modal Component -->
  <b-modal visible centered :title="title"
    @ok="$close(true)"
    @cancel="$close(false)">

    <p>{{message}}</p>
    <p>{{anotherMessage}}</p>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  props: {
    title: String,
    message: String,
    anotherMessage: String
  }
};
</script>
