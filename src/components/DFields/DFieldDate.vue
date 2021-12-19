<template>
  <div class="d-field">
    <v-text-field ref="fieldInput"
                  class="d-field-item date"
                  v-bind="fieldPropsNested"
                  :rules="(isRequired) ? [rules.required] : []"
                  v-model="fieldValue"
                  v-mask="fieldMask"
                  @input="evtInput"
                  @click:clear="evtClickClear"
                  @keydown="evtKeydown"
                  @keydown.enter="evtKeydownControl"
                  @keydown.esc="evtKeydownControl"
                  @keydown.tab="evtKeydownControl"
                  @blur="evtBlur"
                  @focus="evtFocus">
      <template v-slot:append>
        <d-btn-icon icon="mdi-calendar-range"
                    iconColor="black"
                    no-tooltip
                    :tile="true"
                    @keydown="evtOpenDialog"
                    @click="evtOpenDialog"></d-btn-icon>
      </template>
    </v-text-field>
    <div class="required" :class="{ 'required_false': (!isRequired || fieldValue) }"></div>
    <v-menu class="d-field-item dialog"
            v-bind="dialogProps"
            v-model="isDialogShow"
            @input="evtClickOutside">
      <div class="dialog-date">
        <div class="dialog-date__item">
          <v-date-picker v-model="fieldValueDate"
                         locale="ru"
                         first-day-of-week="1"
                         no-title
                         scrollable
                         show-adjacent-months
                         @input="evtSelectDate"></v-date-picker>
        </div>
        <div class="dialog-date__control">
          <d-btn-form height="24"
                      :isSmall="true"
                      @click="evtSelectToday">Сегодня</d-btn-form>
        </div>
      </div>
    </v-menu>
  </div>
</template>

<script>
import DBtnForm from '../DBtn/DBtnForm.vue';
import DBtnIcon from '../DBtn/DBtnIcon.vue';

import {
  model,
  props,
  computed,
  mounted,
  methods,
} from './DField';

export default {
  name: 'FieldDate',
  components: {
    DBtnIcon,
    DBtnForm,
  },
  model,
  props,
  data() {
    return {
      fieldValue: null,
      fieldValueDate: null,
      fieldMask: [/[0123]/, /\d/, '.', /[01]/, /\d/, '.', /[2]/, /[0]/, /\d/, /\d/],
      isDialogShow: false,
      isDialogX: 0,
      isDialogY: 0,
      rules: {
        required(value) { return !!value || false; },
      },
    };
  },
  computed: {
    ...computed,
    dialogProps() {
      return {
        'offset-y': true,
        absolute: true,
        'position-x': this.isDialogX,
        'position-y': this.isDialogY,
        'close-on-click': true,
        'close-on-content-click': false,
      };
    },
  },
  watch: {
    fieldValueInput() {
      if (this.fieldValueInput === null) {
        this.fieldValue = null;
        this.fieldValueDate = null;
        return;
      }
      const [date] = this.fieldValueInput.split('T');
      this.fieldValue = date.split('-').reverse().join('.');
    },
  },
  mounted,
  methods: {
    ...methods,
    evtClickClear() {
      this.fieldValue = null;
      this.fieldValueDate = null;
      this.$emit('input', null);
    },
    evtClickOutside() {
      const evt = new KeyboardEvent('keydown', { code: 'Escape' });
      this.evtKeydownControl(evt);
    },
    evtOpenDialog(evt) {
      this.$refs.fieldInput.$el.querySelector('input').focus();
      if (evt && evt.type === 'keydown' && evt.code !== 'Space') return;
      const elementTarget = this.$refs.fieldInput.$el.getBoundingClientRect();
      this.isDialogX = elementTarget.left;
      this.isDialogY = elementTarget.top + 40;
      this.isDialogShow = !this.isDialogShow;
    },
    evtSelectDate() {
      this.fieldValue = `${this.fieldValueDate.split('-').reverse().join('.')}`;
      this.isDialogShow = false;
      this.$refs.fieldInput.focus();
      this.evtInput();
    },
    evtSelectToday() {
      this.fieldValue = new Date().toLocaleString('ru');
      ([this.fieldValueDate] = new Date().toJSON().split('T'));
      this.isDialogShow = false;
      this.$refs.fieldInput.focus();
      this.evtInput();
    },
    evtInput() {
      if (this.fieldValue?.length === 10) {
        const newDateTime = `${this.fieldValue.split('.').reverse().join('-')}`;
        this.$emit('input', newDateTime);
      }
    },
    evtBlur(evt) {
      evt.preventDefault();
      if (!this.isDialogShow) {
        const elementRequired = evt.target.closest('.d-field').querySelector('.required');
        if (elementRequired) {
          elementRequired.classList.remove('required_focus');
        }
        this.$emit('blur:input', evt);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './DField.scss';

.d-field-item {
  .dialog-date {
    background-color: white;
    &__control {
      padding: 14px 14px;
      padding-top: 0px;
    }
  }
}

::v-deep {
  .v-input__slot {
    padding: 0px !important;
  }
}
</style>
