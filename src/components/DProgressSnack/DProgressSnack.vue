<script>
const MODE = {
  ERROR: 'error',
  LOAD: 'load',
  CONFIRM: 'conf',
};

export default {
  name: 'DProgressSnack',
  props: {
    time: { type: Number, default: 5000 },
  },
  data() {
    return {
      color: 'blue-grey darken-1',
      isTime: this.time,
      isShow: false,
      isMode: MODE.CONFIRM,
      text: '',
    };
  },
  methods: {
    show(text, mode = MODE.CONFIRM) {
      if (mode === MODE.ERROR) this.color = 'red darken-4';
      if (mode === MODE.LOAD) this.color = 'blue-grey darken-1';
      if (mode === MODE.CONFIRM) this.color = 'green darken-4';
      this.text = text;
      this.isTime = this.time;
      this.isShow = true;
      setTimeout(() => {
        this.color = 'blue-grey darken-1';
        this.text = '';
      }, this.time);
    },
    open(text, mode = MODE.CONFIRM) {
      if (mode === MODE.ERROR) this.color = 'red darken-4';
      if (mode === MODE.LOAD) {
        this.color = 'blue-grey darken-1';
        this.isMode = MODE.LOAD;
      }
      if (mode === MODE.CONFIRM) this.color = 'green darken-4';
      this.isTime = -1;
      this.text = text;
      this.isShow = true;
    },
    close() {
      this.color = 'blue-grey darken-1';
      this.isTime = this.time;
      this.isMode = MODE.CONFIRM;
      this.text = '';
      this.isShow = false;
    },
  },
};
</script>

<template>
  <v-snackbar class="d-progress-snack"
              :color="color"
              :timeout="isTime"
              v-model="isShow">
    <div v-if="isMode === 'load'"
         class="load">
      <v-progress-circular indeterminate
                           color="white"
                           :size="28"
                           :width="3"></v-progress-circular>
      {{ text }}
    </div>
    <span v-else>{{ text }}</span>
  </v-snackbar>
</template>

<style lang="scss" scoped>
.d-progress-snack {
  z-index: 9999;
  .load {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
