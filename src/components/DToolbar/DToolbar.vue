<script>
import DBtnIcon from '../DBtn/DBtnIcon.vue';

const TOOLBAR_MODE = {
  DEFAULT: 'default',
  RECYCLE: 'recycle',
};

export default {
  name: 'DToolbar',
  components: {
    DBtnIcon,
  },
  props: {
    active: { type: Boolean, default: false },
    dense: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    items: {
      type: Array,
      default: () => [
        { name: 'create', value: 'Добавить элемент', icon: 'mdi-plus' },
        { name: 'create_in_line', value: 'Добавить строку', icon: 'mdi-table-row-plus-after' },
        { name: 'create_group', value: 'Добавить группу', icon: 'mdi-folder-plus-outline' },
        {
          name: 'edit',
          value: 'Изменить',
          icon: 'mdi-pencil',
          active: true,
        },
        {
          name: 'delete',
          value: 'Установить пометку на удаление',
          icon: 'mdi-text-box-remove-outline',
          active: true,
          alterValue: 'Снять пометку на удаление',
        },
        {
          name: 'recycle',
          value: 'Показать помеченные на удаление',
          icon: 'mdi-delete-variant',
          alterValue: 'Выйти из корзины',
          alterIconColor: 'blue',
        },
        { name: 'refresh', value: 'Обновить', icon: 'mdi-refresh' },
        { name: null },
        { name: 'filter', value: 'Фильтр', icon: 'mdi-filter-outline' },
      ],
    },
    mode: { type: String, default: TOOLBAR_MODE.DEFAULT },
  },
  computed: {
    isRecycleBin() {
      return (this.mode !== TOOLBAR_MODE.DEFAULT);
    },
  },
  methods: {
    evtClick(evt) {
      const btn = evt.target.closest('button');
      if (!btn) return;
      const btnName = btn.getAttribute('data-value');
      this.$emit('click', btnName);
    },
  },
};
</script>

<template>
  <div class="d-toolbar">
    <v-toolbar flat
               :height="(dense) ? 38 : 48"
               @click="evtClick">
      <v-overlay :absolute="true"
                 color="white"
                 opacity="0.5"
                 :value="disabled"></v-overlay>
      <template v-for="(item, itemIndex) in items">
        <v-spacer v-if="!item.name" :key="itemIndex"></v-spacer>
        <d-btn-icon v-else
                    :data-value="item.name"
                    :disabled="(item.active && active !== true)"
                    :icon="item.icon"
                    :icon-color="(isRecycleBin && item.alterIconColor)
                      ? item.alterIconColor : (item.iconColor) ? item.iconColor: ''"
                    :key="itemIndex"
                    :small="dense">
          {{ (isRecycleBin && item.alterValue) ? item.alterValue : item.value }}
        </d-btn-icon>
      </template>
    </v-toolbar>
  </div>
</template>
