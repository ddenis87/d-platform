/* eslint-disable import/prefer-default-export */

export const model = {
  prop: 'fieldValueInput',
  event: 'input',
};

export const props = {
  fieldLabel: { type: String, default: null },
  fieldValueInput: { type: [String, Number, Array, Object, Date, Boolean], default: null },
  isFlat: { type: Boolean, default: false },
  isSelected: { type: Boolean, default: false },
  isSolo: { type: Boolean, default: false },
  isSingleLine: { type: Boolean, default: false },
  isRequired: { type: Boolean, default: false },
  isClearable: { type: Boolean, default: false },
  isDisabled: { type: Boolean, default: false },
};

export const computed = {
  fieldPropsNested() {
    return {
      dense: true,
      'hide-details': 'auto',
      label: this.fieldLabel,
      clearable: this.isClearable,
      disabled: this.isDisabled,
      flat: this.isFlat,
      solo: this.isSolo,
      'single-line': this.isSingleLine,
    };
  },
};

export function data() {
  return {
    fieldValue: '',
    rules: {
      required(value) { return !!value || false; },
    },
  };
}

export const watch = {
  fieldValueInput() { this.fieldValue = this.fieldValueInput; }, // || ''
};

export function mounted() {
  if (!this.isSelected) return;
  const element = this.$refs.fieldInput.$el.querySelector('input');
  setTimeout(() => {
    element.select();
    element.focus();
  }, 50);
}

export const methods = {
  evtInput() { this.$emit('input', this.fieldValue); },
  evtKeydown(evt) { this.$emit('keydown:key', evt); },
  evtKeydownControl(evt) { this.$emit('keydown:control', evt); },
  evtFocus(evt) {
    const elementRequired = evt.target.closest('.d-field').querySelector('.required');
    if (elementRequired) {
      elementRequired.classList.add('required_focus');
    }
  },
  evtBlur(evt) {
    const elementRequired = evt.target.closest('.d-field').querySelector('.required');
    if (elementRequired) {
      elementRequired.classList.remove('required_focus');
    }
    this.$emit('blur:input', evt);
  },
};
