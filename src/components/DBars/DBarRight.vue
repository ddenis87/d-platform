<script>
import DBarHead from './DBarHead.vue';

export default {
  name: 'DBarRight',
  components: {
    DBarHead,
  },
  props: {
    absolute: { type: Boolean, default: false },
    colorToolbar: { type: String, default: 'primary' },
    heightToolbar: { type: Number, default: 64 },
    title: { type: String, default: null },
    isOpen: { type: Boolean, default: false },
    width: { type: String, default: '400' },
  },
  data() {
    return {
      isBarOpen: false,
    };
  },
  computed: {
    heightBody() {
      return {
        height: `calc(100% - ${this.heightToolbar + 2}px)`,
      };
    },
  },
  watch: {
    isOpen() { this.isBarOpen = this.isOpen; },
    isBarOpen() { if (!this.isBarOpen) this.$emit('close'); },
  },
};
</script>

<template>
  <v-navigation-drawer :absolute="absolute"
                       fixed
                       hide-overlay
                       temporary
                       right
                       :width="width"
                       v-model="isBarOpen">
    <d-bar-toolbar :color="colorToolbar"
                   :height="heightToolbar"
                   :title="title"
                   @close="$emit('close')"></d-bar-toolbar>
      <div class="d-bar-right__body"
           :style="heightBody">
        <slot></slot>
      </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.d-bar-right__body {
  overflow: hidden;
}
</style>
