<template>
  <div class="d-field">
    <v-text-field ref="fieldInput"
                  class="d-field-item text"
                  prepend-icon="mdi-magnify"
                  append-icon="mdi-arrow-right"
                  v-bind="fieldPropsNested"
                  :rules="(isRequired) ? [rules.required] : []"
                  v-model="fieldValue"
                  @click:append="evtSearch"
                  @click:clear="evtClear"
                  @input="evtInput"
                  @keydown="evtKeydown"
                  @keydown.enter="evtKeydownControl"
                  @keydown.esc="evtKeydownControl"
                  @keydown.tab="evtKeydownControl"
                  @blur="evtBlur"
                  @focus="evtFocus"></v-text-field>
    <div v-if="isRequired" class="required"></div>
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
  name: 'DFieldSearch',
  model,
  props,
  data,
  computed,
  watch,
  mounted,
  methods: {
    ...methods,
    evtClear() { this.$emit('search:clear', this.fieldValue); },
    evtSearch() { this.$emit('search', this.fieldValue); },
    evtBlur(evt) { this.$emit('blur:input', evt); },
  },
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
