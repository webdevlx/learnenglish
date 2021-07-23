<template>
  <v-col cols="12" md="5">
    <v-alert elevation="3" icon="mdi-check-decagram" prominent>
      Many thanks to VOA (Voice of America) for preparing these helpful video
      tutorials!
    </v-alert>

    <v-btn
      href="https://learningenglish.voanews.com"
      block
      elevation="3"
      class="my-3"
      target="_blank"
    >
      <v-icon left> mdi-earth </v-icon>
      VOA Learning English official site
    </v-btn>

    <v-btn
      :href="link"
      block
      elevation="3"
      class="my-3"
      target="_blank"
    >
      <v-icon left> mdi-download </v-icon>
      Download Lesson PDF Resourse
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "ResourseLesson",
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>