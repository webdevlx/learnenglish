<template>
  <div>
    <div v-if="Object.entries(lesson).length !== 0">
      <v-container fluid>
        <v-alert
          border="left"
          color="primary"
          prominent
          dismissible
          icon="mdi-account-alert"
          type="info"
        >
          Assalomu alaykum Hurmatli saytimiz foydalanuvchisi! <br />
          Agar siz uchun matnlarning o'zbekcha tarjimasi kerak bo'lsa, o'sha
          matn ustiga bosing va sahifaning pastki qismida tarjimasini bilib
          oling.
        </v-alert>

        <heading-lesson :number="lesson.id" :title="lesson.title" />

        <v-row>
          <main-video-lesson :src="lesson.src.mainVideo" />

          <resourse-lesson :link="lesson.src.resoursePDF" />
        </v-row>

        <speaking-practice-lesson
          :src="lesson.src.speakingPracticeVideo"
          :texts="lesson.speakingPracticeText"
          @translate-text="translateText"
        />

        <pronunciation-lesson :src="lesson.src.pronunciationVideo" />

        <conversation-lesson
          :conversationText="lesson.conversationText"
          :src="lesson.src.conversationAudio"
          @translate-text="translateText"
        />

        <quiz-content-lesson
          :questions="lesson.questions"
          @translate-text="translateText"
        />

        <v-row>
          <v-col cols="12">
            <v-snackbar v-model="snackbar" :right="$vuetify.breakpoint.mdAndUp">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="blue"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
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
import { mapState } from "vuex";
import HeadingLesson from "../components/HeadingLesson.vue";
import MainVideoLesson from "../components/MainVideoLesson.vue";
import ResourseLesson from "../components/ResourseLesson.vue";
import SpeakingPracticeLesson from "../components/SpeakingPracticeLesson.vue";
import PronunciationLesson from "../components/PronunciationLesson.vue";
import ConversationLesson from "../components/ConversationLesson.vue";
import LoadingLesson from "../components/LoadingLesson.vue";
import QuizContentLesson from "../components/QuizContentLesson.vue";
export default {
  components: {
    HeadingLesson,
    MainVideoLesson,
    ResourseLesson,
    SpeakingPracticeLesson,
    PronunciationLesson,
    ConversationLesson,
    LoadingLesson,
    QuizContentLesson,
  },
  props: ["id"],
  data() {
    return {
      loading: true,
      snackbar: false,
      text: "",
    };
  },
  computed: {
    ...mapState({ lesson: (state) => state.lesson.lesson }),
  },
  created() {
    this.$store.state.lesson.lesson = {};
    setTimeout(() => {
      this.$store.dispatch("fetchLesson", this.id);
      this.loading = false;
    }, 2000);
  },
  methods: {
    translateText(text) {
      this.snackbar = true;
      this.text = text;
    },
  },
};
</script>

<style scoped>
</style>