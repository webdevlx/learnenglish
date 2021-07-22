<template>
  <v-row>
    <v-col cols="12">
      <h2>Pronunciation</h2>
    </v-col>

    <v-col cols="12" md="7">
      <video style="border-radius: 4px" width="100%" height="auto" controls>
        <source :src="src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </v-col>

    <v-col cols="12" md="5">
      <learning-english />
    </v-col>
  </v-row>
</template>

<script>
import LearningEnglish from "./LearningEnglish.vue";
export default {
  name: "PronunciationLesson",
  components: {
    LearningEnglish,
  },
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