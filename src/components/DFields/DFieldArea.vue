<template>
  <div class="d-field">
    <v-textarea ref="fieldInput"
                class="d-field-item area"
                rows="3"
                auto-grow
                v-bind="fieldPropsNested"
                :rules="(isRequired) ? [rules.required] : []"
                v-model="fieldValue"
                @input="evtInput"
                @keydown="evtKeydown"
                @keydown.enter="evtKeydownControl"
                @keydown.esc="evtKeydownControl"
                @keydown.tab="evtKeydownControl"
                @blur="evtBlur"
                @focus="evtFocus"></v-textarea>
    <div class="required" :class="{ 'required_false': (!isRequired || fieldValue) }"></div>
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
  name: 'DFieldArea',
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
