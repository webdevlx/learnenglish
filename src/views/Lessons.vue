<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Let's Learning English - Level 1</h1>
      </v-col>
      <v-col cols="12" md="4" sm="6" v-for="lesson in lessons" :key="lesson.id">
        <LessonCard :lesson="lesson" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LessonCard from "@/components/LessonCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    LessonCard,
  },
  computed: {
    ...mapState({ lessons: (state) => state.lesson.lessons }),
  },
  created() {
    this.$store.dispatch("fetchLessons");
  },
};
</script>

<style scoped>
</style>