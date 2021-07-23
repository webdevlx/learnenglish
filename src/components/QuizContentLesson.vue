<template>
  <v-row>
    <v-col cols="12">
      <h2>Lesson Quiz</h2>
    </v-col>

    <v-col cols="12" v-if="questionNumber === null">
      <v-btn @click="startQuiz" color="primary" block>
        <v-icon left>mdi-play</v-icon>
        Start Lesson Quiz
      </v-btn>
    </v-col>

    <v-col v-if="questionNumber !== null" cols="12">
      <h4>Question {{ showQuestionNumber }} / {{ questions.length }}</h4>
      <div class="progress" :style="{ width: progress }"></div>
    </v-col>

    <v-col cols="12" v-if="loading">
      <v-row>
        <v-col cols="12" md="6">
          <v-skeleton-loader type="card"></v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="6">
          <v-skeleton-loader
            v-for="i in 4"
            :key="i"
            type="list-item-two-line"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" v-else v-for="(question, index) in questions" :key="index">
      <v-row v-if="index === questionNumber - 1">
        <v-col cols="12">
          <h2 style="cursor: pointer" @click="translateText('title')">
            {{ question.titleText[0].text }}
          </h2>
        </v-col>

        <v-col cols="12">
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
              <v-btn
                elevation="3"
                v-for="(answer, index) in question.answers"
                :key="index"
                @click="check(index)"
                class="my-3"
                :class="{
                  correct: checkCardIndex !== null && answer.correct,
                  incorrect: checkCardIndex === index && !answer.correct,
                  disabled: select,
                }"
                block
              >
                {{ answer.title }}
              </v-btn>
            </v-col>

            <v-col cols="12" v-if="select">
              <v-card color="success" dark>
                <v-card-text
                  style="cursor: pointer"
                  @click="translateText('questionVideo')"
                >
                  {{ question.questionVideoText[0].text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" v-if="scoreShow">
      <v-card elevation="3" :color="result.status" dark>
        <center>
          <h2>{{ score }} / {{ questions.length }}</h2>
          <v-card-text>{{ result.title }}</v-card-text>
        </center>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      v-if="questionNumber !== null && questionNumber < questions.length"
    >
      <v-btn :disabled="!select" @click="nextQuestion" color="primary" block>
        Next
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-col>

    <v-col cols="12" v-if="questionNumber === questions.length">
      <v-btn :disabled="!select" @click="showScore" color="primary" block>
        <v-icon left>mdi-counter</v-icon>
        Show Score
      </v-btn>
    </v-col>

    <v-col cols="12" v-if="questionNumber > questions.length">
      <v-btn @click="restartQuiz" color="primary" block>
        <v-icon left>mdi-restart</v-icon>
        Restart Quiz
      </v-btn>
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
      loading: false,
      questionNumber: null,
      score: 0,
      scoreShow: false,
      select: false,
      status: "",
      checkCardIndex: null,
      whenIncorrect: "",
    };
  },
  computed: {
    progress() {
      if (this.questionNumber > this.questions.length) {
        return "100%";
      } else {
        return (this.questionNumber / this.questions.length) * 100 + "%";
      }
    },
    showQuestionNumber() {
      if (this.questionNumber > this.questions.length) {
        return this.questions.length;
      } else {
        return this.questionNumber;
      }
    },
    result() {
      let percent = Math.round((this.score / this.questions.length) * 100);
      if (percent < 60) {
        return {
          status: "error",
          title: "Your result is Bad!",
        };
      } else if (percent >= 60 && percent < 80) {
        return {
          status: "warning",
          title: "Your result is Good!",
        };
      } else {
        return {
          status: "success",
          title: "Your result is Great!",
        };
      }
    },
  },
  methods: {
    startQuiz() {
      this.questionNumber = 1;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    nextQuestion() {
      this.questionNumber++;
      this.select = false;
      this.checkCardIndex = null;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
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
      this.checkCardIndex = index;
      if (this.questions[this.questionNumber - 1].answers[index].correct) {
        this.score++;
      }
    },
    translateText(type) {
      let text = "";
      if (type === "questionVideo") {
        text =
          this.questions[this.questionNumber - 1].questionVideoText[1].text;
      } else {
        text = this.questions[this.questionNumber - 1].titleText[1].text;
      }
      this.$emit("translate-text", text);
    },
  },
};
</script>

<style scoped>
.progress {
  height: 5px;
  background: #1976d2;
  border-radius: 5px;
  transition: 0.5s;
}
.correct {
  color: #fff;
  background: #4caf50 !important;
}
.incorrect {
  color: #fff;
  background: #ff5252 !important;
}
.disabled {
  pointer-events: none;
}
</style>