<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: [
        {
          text: 'DProgressSnack',
          path: 'views/examples/ExDProgressSnack',
          name: 'DProgressSnack',
        },
        {
          text: 'DBtn',
          path: 'views/examples/ExDBtn',
          name: 'DBtn',
        },
        {
          text: 'DAuthorization',
          path: 'views/examples/ExDAuthorization',
          name: 'DAuthorization',
        },
        {
          text: 'DToolbar',
          path: 'views/examples/ExDToolbar',
          name: 'DToolbar',
        },
        {
          text: 'DFields',
          path: 'views/examples/ExDFields',
          name: 'DFields',
        },
      ],
      selectedTab: {},
    };
  },
  watch: {
    selectedTab() {
      if (Object.keys(this.selectedTab).length) {
        this.$emit('open:tab', this.selectedTab);
        this.selectedTab = {};
      }
    },
  },
};
</script>

<template>
  <div class="menu">
    <v-card class="menu-card" flat>
      <v-card-title class="menu-card__title">Examples</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item-group v-model="selectedTab">
            <v-list-item v-for="item in items"
                         :selectable="true"
                         :value="item"
                         :key="item.path">
              <v-list-item-title class="menu-card__sub-title">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  outline: none;
  &-card {
    max-width: 300px;
    width: 100%;
    min-width: 200px;
    &__title {
      padding-bottom: 8px;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, .6);
    }
    &__sub-title {
      white-space: normal;
    }
  }
}
</style>
