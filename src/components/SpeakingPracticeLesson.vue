<template>
  <v-row>
    <v-col cols="12">
      <h2>Speaking Practice</h2>
    </v-col>

    <v-col cols="12" md="7">
      <video style="border-radius: 4px" width="100%" height="auto" controls>
        <source :src="src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </v-col>

    <v-col cols="12" md="5">
      <v-alert
        v-for="(text, index) in texts[0].speakingPractice"
        :key="index"
        elevation="3"
        icon="mdi-text"
        prominent
        style="cursor: pointer"
        @click="translateText(index)"
      >
        {{ text }}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SpeakingPracticeLesson",
  props: {
    src: {
      type: String,
      required: true,
    },
    texts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    translateText(index) {
      let text = this.texts[1].speakingPractice[index];
      this.$emit("translate-text", text);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>