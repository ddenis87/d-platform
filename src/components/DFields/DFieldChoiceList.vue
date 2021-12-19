<script>
import DBarRight from '../DBars/DBarRight.vue';
import DBtnForm from '../DBtn/DBtnForm.vue';
import DBtnIcon from '../DBtn/DBtnIcon.vue';
import DFieldChoice from './DFieldChoice.vue';

import {
  model,
  props,
  computed,
} from './DField';

export default {
  name: 'FieldChoiceList',
  components: {
    DBarRight,
    DBtnForm,
    DBtnIcon,
    DFieldChoice,
  },
  model,
  props: {
    ...props,
    items: {
      type: Array,
      default: () => [{
        display_name: 'Значения отсутствуют',
        value: null,
      }],
    },
  },
  data() {
    return {
      fieldValueEmit: '',
      fieldValueDisplay: '',
      rules: {
        required(value) { return !!value || false; },
      },
      isDialogShow: false,
      itemList: [{ value: null }],
    };
  },
  computed: {
    ...computed,
    propertiesListDialog() {
      return {
        isOpen: this.isDialogShow,
        title: `Список значений - ${this.fieldLabel}`,
        width: '600',
        colorToolbar: 'teal',
      };
    },
  },
  methods: {
    onAcceptList() {
      this.fieldValueEmit = '';
      this.fieldValueDisplay = '';
      this.itemList.forEach((element) => {
        if (element.value === null) return;
        this.fieldValueEmit += `${element.value.value}, `;
        this.fieldValueDisplay += `${element.value.display_name}; `;
      });
      this.onCloseDialog();
      this.$emit('input', this.fieldValueEmit.slice(0, -2));
    },
    onAddItemList() {
      this.itemList.push({ value: null });
    },
    onClear() {
      this.fieldValueEmit = '';
      this.itemList = [{ value: null }];
      this.fieldValueDisplay = '';
      this.$emit('input', this.fieldValueEmit);
    },
    onCloseDialog() {
      this.isDialogShow = false;
    },
    onDeleteItemList(index) {
      this.itemList.splice(index, 1);
    },
    onShowDialog() {
      this.isDialogShow = true;
    },
  },
};
</script>

<template>
  <div class="d-field">
    <v-text-field ref="fieldInput"
                  class="d-field-item text"
                  v-bind="fieldPropsNested"
                  append-icon="mdi-dots-horizontal"
                  :rules="(isRequired) ? [rules.required] : []"
                  v-model="fieldValueDisplay"
                  @click:append="onShowDialog"
                  @click:clear="onClear"></v-text-field>
    <div class="required" :class="{ 'required_false': (fieldValue) }"></div>
    <d-bar-right v-bind="propertiesListDialog"
                 @close-dialog="onCloseDialog">
      <div class="control">
        <d-btn-form class="element-start"
                  height="24"
                  @click="onAddItemList">Добавить</d-btn-form>
        <d-btn-form class="tabspace-end"
                  height="24"
                  @click="onAcceptList">Применить</d-btn-form>
      </div>
      <div class="list">
        <v-list>
          <v-list-item v-for="(item, index) in itemList"
                       :key="index">
            <d-field-choice :items="items"
                            v-model="item.value"
                            :isClearable="true"></d-field-choice>
            <d-btn-icon icon="mdi-close"
                        @click="onDeleteItemList(index)">Удалить</d-btn-icon>
          </v-list-item>
        </v-list>
      </div>
    </d-bar-right>
  </div>
</template>

<style lang="scss" scoped>
.d-field {
  .control {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    padding: 12px 11px;
    border-top: thin solid rgba(128, 128, 128, .4);
  }
  .list {
    z-index: 999;
  }
}
</style>
