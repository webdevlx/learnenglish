<template>
  <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.mdAndUp">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "TranslateSentence",
  props: {
    text: {
      type: String,
      required: true,
    },
    snackbar: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>