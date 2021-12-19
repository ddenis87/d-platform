<template>
  <div class="d-field">
    <v-text-field ref="fieldInput"
                  class="d-field-item text"
                  v-bind="fieldPropsNested"
                  :rules="(isRequired) ? [rules.required] : []"
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
  name: 'DFieldText',
  model,
  props,
  data,
  computed,
  watch,
  mounted,
  methods,
};
</script>

<style lang="scss" scoped>
@import './DField.scss';

::v-deep {
  .v-input__slot {
    padding: 0px !important;
  }
}
</style>
