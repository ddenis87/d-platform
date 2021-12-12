<script>
import DToolbar from '../../components/DToolbar/DToolbar.vue';

export default {
  components: { DToolbar },
  name: 'ExDToolbar',
  methods: {
    onClickDToolbar(toolbarKey) {
      console.log(toolbarKey);
    },
  },
};
</script>

<template>
  <div class="example">
    <d-toolbar :dense="true"
               @click="onClickDToolbar"></d-toolbar>
    <d-toolbar @click="onClickDToolbar"></d-toolbar>
    <d-toolbar :active="true"
               @click="onClickDToolbar"></d-toolbar>
    <d-toolbar mode="recycle"
               @click="onClickDToolbar"></d-toolbar>
    <d-toolbar :disabled="true"
               @click="onClickDToolbar"></d-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.example {
  &--control {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
