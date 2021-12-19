<template>
  <div class="d-field">
    <v-text-field ref="fieldInput"
                  class="d-field-item number"
                  type="number"
                  v-bind="fieldPropsNested"
                  :rules="(isRequired) ? [rules.required] : []"
                  :reverse="true"
                  v-model="fieldValue"
                  @input="evtInput"
                  @keydown="evtKeydown"
                  @keydown.enter="evtKeydownControl"
                  @keydown.esc="evtKeydownControl"
                  @keydown.tab="evtKeydownControl"
                  @blur="evtBlur"
                  @focus="evtFocus"></v-text-field>
    <div ref="fieldInputReq"
         :class="{
      'required': isRequired,
      'required_false': (!isRequired || fieldValue),
    }"></div>
  </div>
</template>

<script>
import {
  model,
  props,
  data,
  computed,
  watch,
  mounted,
  methods,
} from './DField';

export default {
  name: 'FieldNumber',
  model,
  props,
  data,
  computed,
  watch,
  mounted,
  methods: {
    ...methods,
    evtKeydown(evt) {
      if (evt.code === 'ArrowUp' || evt.code === 'ArrowDown') {
        evt.preventDefault();
        return;
      }
      this.$emit('keydown:key', evt);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './DField.scss';

::v-deep {
  .v-input__slot {
    padding: 0px !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
