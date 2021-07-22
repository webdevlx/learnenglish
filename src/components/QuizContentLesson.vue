<template>
  <v-row>
    <v-col cols="12">
      <h2>Lesson Quiz</h2>
    </v-col>

    <v-col cols="12" v-if="questionNumber === null">
      <v-btn @click="startQuiz" block>Start Lesson Quiz</v-btn>
    </v-col>

    <v-col cols="12">
      <div
        class="progress"
        :style="{ width: (questionNumber / questions.length) * 100 + '%' }"
      ></div>
    </v-col>

    <div v-for="(question, index) in questions" :key="index">
      <v-col cols="12" v-if="index === questionNumber">
        <h2>{{ question.title }}</h2>

        <v-row>
          <v-col cols="12" md="6">
            <video
              style="border-radius: 4px"
              width="100%"
              height="auto"
              controls
            >
              <source :src="question.questionVideo" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </v-col>
          <v-col cols="12" md="6">
            <v-alert
              elevation="3"
              v-for="(answer, index) in question.answers"
              :key="index"
              style="cursor: pointer"
              @click="check(index)"
            >
              {{ answer.title }}
            </v-alert>
          </v-col>
        </v-row>
      </v-col>
    </div>

    <v-col cols="12" v-if="scoreShow">
      <v-card elevation="3">
        <v-card-title> Your Score is {{ score }} </v-card-title>
      </v-card>
    </v-col>

    <v-col
      v-if="questionNumber !== null && questionNumber < questions.length - 1"
      cols="12"
    >
      <v-btn :disabled="!select" @click="nextQuestion" block> Next </v-btn>
    </v-col>

    <v-col v-if="questionNumber === questions.length - 1" cols="12">
      <v-btn :disabled="!select" @click="showScore" block> Show Score </v-btn>
    </v-col>

    <v-col v-if="questionNumber > questions.length - 1" cols="12">
      <v-btn @click="restartQuiz" block> Restart Quiz </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "QuizContentLesson",
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      questionNumber: null,
      score: 0,
      scoreShow: false,
      select: false,
      status: "",
    };
  },
  methods: {
    startQuiz() {
      this.questionNumber = 0;
    },
    nextQuestion() {
      this.questionNumber++;
      this.select = false;
      this.status = ""
    },
    showScore() {
      this.questionNumber++;
      this.scoreShow = true;
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data());
    },
    check(index) {
      this.select = true;
      if (this.questions[this.questionNumber].answers[index].correct) {
        this.score++;
        this.status = "correct";
      } else {
        this.status = "incorrect";
      }
    },
  },
};
</script>

<style scoped>
.progress {
  height: 5px;
  background: #1976d2;
  transition: 0.5s;
}
</style>