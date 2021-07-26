<template>
  <div>
    <div v-if="!loading">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h2>Let's Learn English - Level 1</h2>
          </v-col>

          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="lesson in lessons"
            :key="lesson.id"
          >
            <LessonCard :lesson="lesson" />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-else>
      <loading-lesson :loading="loading" />
    </div>
  </div>
</template>

<script>
import LessonCard from "@/components/LessonCard.vue";
import LoadingLesson from "@/components/LoadingLesson.vue";
import { mapState } from "vuex";
export default {
  components: {
    LessonCard,
    LoadingLesson,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState({ lessons: (state) => state.lesson.lessons }),
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch("fetchLessons");
      this.loading = false;
    }, 500);
  },
};
</script>

<style scoped>
</style>