<script>
import DNavigationPanel from './components/DNavigationPanel/DNavigationPanel.vue';

export default {
  components: { DNavigationPanel },
  name: 'App',
};
</script>

<template>
  <v-app>
    <d-navigation-panel :tabStyle="{ padding: '10px' }"></d-navigation-panel>
  </v-app>
</template>
