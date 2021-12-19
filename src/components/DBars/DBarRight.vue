<script>
import DBarHead from './DBarHead.vue';

export default {
  name: 'DBarRight',
  components: {
    DBarHead,
  },
  props: {
    colorToolbar: { type: String, default: 'primary' },
    title: { type: String, default: null },
    isOpen: { type: Boolean, default: false },
    width: { type: String, default: '400' },
  },
  data() {
    return {
      isBarOpen: false,
    };
  },
  watch: {
    isOpen() { this.isBarOpen = this.isOpen; },
    isBarOpen() { if (!this.isBarOpen) this.$emit('close'); },
  },
};
</script>

<template>
  <v-navigation-drawer fixed
                       hide-overlay
                       temporary
                       right
                       :width="width"
                       v-model="isBarOpen">
    <d-bar-head :title="title"
                :color="colorToolbar"
                @close="$emit('close')"></d-bar-head>
      <slot></slot>
  </v-navigation-drawer>
</template>
