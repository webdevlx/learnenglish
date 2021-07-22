<template>
  <v-col cols="12" md="7">
    <video style="border-radius: 4px" width="100%" height="auto" controls>
      <source :src="src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </v-col>
</template>

<script>
export default {
  name: "MainVideoLesson",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>