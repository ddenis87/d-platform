<script>
export default {
  name: 'DBtnForm',
  props: {
    color: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    height: { type: String, default: null },
    small: { type: Boolean, default: true },
    width: { type: String, default: null },
  },
  computed: {
    btnProperties() {
      const props = {
        color: this.color,
        dark: !this.disabled,
        disabled: this.disabled,
        tile: true,
        small: this.small,
      };
      if (this.height) props.height = this.height;
      if (this.width) props.width = this.width;
      return props;
    },
  },
};
</script>

<template>
  <v-btn v-bind="btnProperties"
         @click="(event) => $emit('click', event)"
         @keydown="(event) => $emit('keydown', event)">
    <slot></slot>
  </v-btn>
</template>
