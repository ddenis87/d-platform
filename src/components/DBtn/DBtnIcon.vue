<script>
export default {
  name: 'DBtnIcon',
  props: {
    icon: { type: String, default: 'I' },
    iconColor: { type: String, default: 'grey' },
    dataValue: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    noTooltip: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
  },
  computed: {
    btnProperty() {
      const props = {
        'data-value': this.dataValue,
        disabled: this.disabled,
        height: (this.small) ? 34 : 40,
        icon: true,
        width: (this.small) ? 34 : 40,
        'x-small': this.small,
      };
      if (this.tile) {
        props.color = 'black';
        props.height = 24;
        props.plain = true;
        props.tile = true;
        props.width = 24;
      }
      return props;
    },
  },
};
</script>

<template>
  <v-tooltip bottom
             :disabled="noTooltip">
    <template v-slot:activator="{ on }">
      <v-btn v-bind="btnProperty"
             v-on="on"
             @click="() => $emit('click', dataValue)"
             @keydown="() => $emit('keydown', dataValue)">
        <v-icon :color="iconColor">{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span><slot></slot></span>
  </v-tooltip>
</template>
