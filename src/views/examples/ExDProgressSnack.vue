<script>
import DProgressSnack from '../../components/DProgressSnack/DProgressSnack.vue';

export default {
  components: { DProgressSnack },
  name: 'ExDProgressSnack',
  methods: {
    show() {
      this.$refs.ProgressSnack.show('Show message 5sec');
    },
    showError() {
      this.$refs.ProgressSnack.show('Show message error 5sec', 'error');
    },
    open() {
      this.$refs.ProgressSnack.open('Open message');
    },
    openLoad() {
      this.$refs.ProgressSnack.open('Open load', 'load');
    },
    close() {
      this.$refs.ProgressSnack.close();
    },
  },
};
</script>

<template>
  <div class="example">
    <v-card class="example--control"
            width="300">
      <v-btn height="28" x-small @click="show">Show</v-btn>
      <v-btn height="28" x-small @click="showError">Show error</v-btn>
      <v-divider></v-divider>
      <v-btn height="28" x-small @click="open">Open</v-btn>
      <v-btn height="28" x-small @click="openLoad">Open load</v-btn>
      <v-btn height="28" x-small @click="close">Close</v-btn>
    </v-card>
    <d-progress-snack ref="ProgressSnack"></d-progress-snack>
  </div>
</template>

<style lang="scss" scoped>
.example {
  &--control {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
