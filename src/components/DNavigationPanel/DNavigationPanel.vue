<script>
export default {
  name: 'DNavigationPanel',
  props: {
    tabMenu: {
      type: Object,
      default() {
        return {
          text: 'Главная',
          path: 'views/Menu',
          name: 'menu',
          wrapper: 'Menu',
        };
      },
    },
    tabsWithCache: {
      type: Array,
      default: () => [],
    },
    tabsWithoutCache: {
      type: Array,
      default: () => [],
    },
    tabStyle: {
      tpe: Object,
      default() {
        return {
          padding: '5px',
        };
      },
    },
  },
  data() {
    return {
      tabs: [
        { ...this.tabMenu },
      ],
      tab: 0,
    };
  },
  computed: {
    tabPath() {
      if (!this.tabs[this.tab]) return null;
      return () => import(`@/${this.tabs[this.tab].path}.vue`);
    },
    tabProperties() {
      const tabProperties = {
        ...this.tabs[this.tab],
        tabIndex: this.tab,
      };
      return tabProperties;
    },
  },
  methods: {
    openTab(tab) {
      const tabIndex = this.tabs.findIndex((item) => item.path === tab.path);
      if (tabIndex === -1) {
        this.tabs.push(tab);
        this.tab = this.tabs.length - 1;
      }
      if (tabIndex > -1) {
        if (tab.unique) {
          this.tab = tabIndex;
        } else {
          this.tabs.push(tab);
          this.tab = this.tabs.length - 1;
        }
      }
    },
    closeTab(tabIndex) {
      if (tabIndex !== this.tab) {
        this.tabs.splice(tabIndex, 1);
        this.tab = this.tabs.length - 1;
      } else if (tabIndex === this.tabs.length - 1) {
        this.tab = tabIndex - 1;
        this.tabs.splice(tabIndex, 1);
      } else if (tabIndex !== this.tabs.length - 1) {
        this.tabs.splice(tabIndex, 1);
        this.tab = this.tabs.length - 1;
      }
    },
    updateTab({ element, tabIndex }) {
      this.tabs[tabIndex].element = element;
    },
  },
};
</script>

<template>
  <div class="d-navigation-panel">
    <v-tabs v-model="tab"
            active-class="tabs_active"
            class="tabs"
            show-arrows>
      <v-tab v-for="(tab, tabIndex) in tabs"
             class="tab"
             :key="`${tabIndex}-${tab.path}`">
        <v-icon v-if="tabIndex === 0"
                class="tab__control tab__control_before"
                color="rgb(79, 79, 79)"
                small>mdi-home-outline</v-icon>
        <span class="tab__title">{{ tab.text }}</span>
        <v-btn class="tab__control tab__control_after"
               icon
               x-small>
          <v-icon v-if="tabIndex !== 0"
                  color="rgb(79, 79, 79)"
                  x-small
                  @click="() => closeTab(tabIndex)">mdi-close</v-icon>
        </v-btn>
      </v-tab>
    </v-tabs>
    <div class="tabs-item"
         :style="tabStyle">
      <keep-alive :exclude="tabsWithoutCache"
                  :include="tabsWithCache">
        <component :is="tabPath"
                    v-bind="tabProperties"
                    @open:tab="openTab"
                    @close:tab="closeTab"
                    @update:tab="updateTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep {
  .v-slide-group__prev, .v-slide-group__next {
    padding-bottom: 16px;
  }
  .v-slide-group__prev {
    border-right: thin solid grey;
  }
  .v-slide-group__next {
    border-left: thin solid grey;
  }
}
.d-navigation-panel {
  .tabs {
    height: 32px;
    overflow: hidden;
    border-top: thin solid rgb(180, 180, 180);
    border-bottom: thin solid rgb(180, 180, 180);
    &_active {
      background-color: #E0E0E0;
    }
    .tab {
      font-size: .83rem;
      color: rgb(79, 79, 79);
      height: 32px;
      max-width: 400px;
      padding: 0 6px;
      padding-bottom: 2px;
      border-right: thin solid grey;
      text-transform: unset;
      &__title {
        text-overflow: ellipsis;
      }
      &:first-child {
        border-left: thin solid grey;
      }
      &__control {
        padding-top: 0px;
        &_before {
          padding-right: 4px;
        }
        &_after {
          padding-top: 1px;
          padding-left: 4px;
        }
      }
    }
  }
  .tabs-item {
    outline: none;
  }
}
</style>
