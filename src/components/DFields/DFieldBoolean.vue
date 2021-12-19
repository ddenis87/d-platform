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
  name: 'DFieldBoolean',
  model,
  props: {
    ...props,
    itemText: { type: String, default: 'display_name' },
    items: {
      type: Array,
      default: () => [
        { display_name: 'Да', value: true },
        { display_name: 'Нет', value: false },
      ],
    },
    itemValue: { type: String, default: 'value' },
  },
  data,
  computed,
  watch,
  mounted,
  methods: {
    ...methods,
    evtKeydownControl(evt) {
      const isOpenCombobox = this.$refs.fieldInput.$el
        .querySelector('.v-input__slot').getAttribute('aria-expanded');
      if (isOpenCombobox === 'false') {
        this.$refs.fieldInput.isMenuActive = false;
        this.$emit('keydown:control', evt);
      }
    },
  },
};
</script>

<template>
  <div class="d-field">
    <v-autocomplete ref="fieldInput"
                    class="d-field-item boolean"
                    return-object
                    no-data-text="Значение отсутствует"
                    :rules="(isRequired) ? [rules.required] : []"
                    :items="items"
                    :item-text="itemText"
                    :item-value="itemValue"
                    :menu-props="{ minWidth: 120, }"
                    v-bind="fieldPropsNested"
                    v-model="fieldValue"
                    @click.stop
                    @input="evtInput"
                    @keydown="evtKeydown"
                    @keydown.enter="evtKeydownControl"
                    @keydown.esc="evtKeydownControl"
                    @keydown.tab="evtKeydownControl"
                    @blur="evtBlur"
                    @focus="evtFocus">
      <template v-slot:append><v-icon class="action">mdi-menu-down</v-icon></template>
    </v-autocomplete>
    <div ref="fieldInputReq"
         :class="{
      'required': isRequired,
      'required_false': (!isRequired || fieldValue),
    }"></div>
  </div>
</template>

<style lang="scss" scoped>
@import './DField.scss';

::v-deep {
  .v-input__slot {
    padding: 0px !important;
  }
}
</style>
