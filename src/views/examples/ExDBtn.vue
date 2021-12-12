<script>
import DBtnForm from '../../components/DBtn/DBtnForm.vue';
import DBtnIcon from '../../components/DBtn/DBtnIcon.vue';

export default {
  components: { DBtnIcon, DBtnForm },
  name: 'ExDBtn',
  methods: {
    clickBtnForm() {
      console.log('Click btn form');
    },
    clickBtnIcon() {
      console.log('Click btn icon');
    },
  },
};
</script>

<template>
  <div class="example">
    <v-card class="example--control"
            width="600">
      <v-toolbar dense>
        <d-btn-icon icon="mdi-door"
                    iconColor="primary"
                    :small="true"
                    @click="clickBtnIcon">Btn icon</d-btn-icon>
        <d-btn-icon icon="mdi-filter"
                    iconColor="green"
                    :tile="true"
                    :small="true"
                    @click="clickBtnIcon">Btn icon tile</d-btn-icon>
      </v-toolbar>
      <d-btn-form @click="clickBtnForm">Btn form</d-btn-form>
      <d-btn-form height="48"
                  width="100"
                  @click="clickBtnForm">Btn form</d-btn-form>
    </v-card>
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
