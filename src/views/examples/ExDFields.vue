<script>
import DFieldDate from '../../components/DFields/DFieldDate.vue';
import DFieldNumber from '../../components/DFields/DFieldNumber.vue';
import DFieldNumberList from '../../components/DFields/DFieldNumberList.vue';
import DFieldNumberRange from '../../components/DFields/DFieldNumberRange.vue';
import DFieldSearch from '../../components/DFields/DFieldSearch.vue';
import DFieldText from '../../components/DFields/DFieldText.vue';

export default {
  components: {
    DFieldText,
    DFieldSearch,
    DFieldNumber,
    DFieldNumberRange,
    DFieldNumberList,
    DFieldDate,
  },
  name: 'ExDFields',
};
</script>

<template>
  <div class="example">
    <v-row>
      <v-col cols="2">
        <d-field-text field-label="Field text"></d-field-text>
      </v-col>
      <v-col cols="2">
        <d-field-search field-label="Field search"></d-field-search>
      </v-col>
      <v-col cols="2">
        <d-field-number field-label="Field number"></d-field-number>
      </v-col>
      <v-col cols="4">
        <d-field-number-range></d-field-number-range>
      </v-col>
      <v-col cols="2">
        <d-field-number-list field-label="Field number list"></d-field-number-list>
      </v-col>
      <v-col cols="2">
        <d-field-date field-label="Field date"></d-field-date>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.example {
  padding: 16px;
}
</style>
