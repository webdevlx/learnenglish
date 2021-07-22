<template>
  <v-row>
    <v-col cols="12">
      <h1>Lesson {{ number }}: {{ title }}</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  name: "HeadingLesson",
};
</script>

<style scoped>
</style>