<template>
  <v-container fluid>
    <v-row v-if="Object.entries(lesson).length !== 0">
      <v-col cols="12">
        <h1>Lesson {{ lesson.id }}: {{ lesson.title }}</h1>
      </v-col>

      <v-col cols="12" md="8">
        <video width="100%" height="auto" controls>
          <source :src="lesson.src.video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </v-col>
      <v-col cols="12" md="4">
        <h2>Conversation</h2>
        <v-card style="padding: 1rem" elevation="3">
          <div v-for="(con, index) in lesson.conversation" :key="index">
            {{ con }}
          </div>
        </v-card>
        <audio style="width: 100%; margin-top: 20px" controls>
          <source :src="lesson.src.audio" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="primary"
      ></v-progress-linear>

      <div class="voa display-4">
        <img src="https://learningenglish.voanews.com/Content/responsive/VOA/en-US-LEARN/img/logo.png" alt="VOA">
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({ lesson: (state) => state.lesson }),
  },
  created() {
    this.$store.state.lesson = {};
    setTimeout(() => {
      this.$store.dispatch("fetchLesson", this.id);
      this.loading = false;
    }, 2000);
  },
};
</script>

<style scoped>
.voa {
  color: #1976D2;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
}
</style>