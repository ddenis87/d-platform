<template>
  <div class="d-field">
    <v-autocomplete ref="fieldInput"
                    class="d-field-item choice"
                    return-object
                    no-data-text="Значение отсутствует"
                    :rules="(isRequired) ? [rules.required] : []"
                    :items="fieldItems"
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
  name: 'DFieldChoice',
  model,
  props: {
    ...props,
    itemText: { type: String, default: 'display_name' },
    items: {
      type: Array,
      default: () => [{
        display_name: 'Значения отсутствуют',
        value: null,
      }],
    },
    itemValue: { type: String, default: 'value' },
  },
  data,
  computed: {
    ...computed,
    fieldItems() {
      return this.items;
    },
  },
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

<style lang="scss" scoped>
@import './DField.scss';

::v-deep {
  .v-input__slot {
    padding: 0px !important;
  }
  input {
    min-width: 46px !important;
  }
}
</style>
