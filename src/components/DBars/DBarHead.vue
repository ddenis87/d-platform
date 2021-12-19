<script>
export default {
  name: 'DBarHead',
  props: {
    title: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    height: { type: Number, default: 64 },
    orientation: { type: String, default: 'right' },
  },
};
</script>

<template>
  <v-toolbar dark flat tile
             :color="color"
             :height="height">
    <template v-if="orientation === 'right'">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </template>
  </v-toolbar>
</template>
