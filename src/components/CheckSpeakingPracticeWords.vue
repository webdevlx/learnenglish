<template>
  <v-col
    cols="12"
    class="my-3 py-5"
    style="box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2)"
  >
    <center>
      <h3 style="margin-bottom: 30px" :style="{ color: mark }">
        {{ word }}
      </h3>

      <v-fab-transition>
        <v-btn
          @click="recordStart()"
          class="mx-2"
          fab
          x-large
          color="primary"
          :disabled="disabled"
          elevation="2"
        >
          <span v-show="isRecord"></span>
          <span v-show="isRecord"></span>
          <span v-show="isRecord"></span>

          <v-icon dark>
            {{ isRecord ? "mdi-account-voice" : "mdi-microphone" }}
          </v-icon>
        </v-btn>
      </v-fab-transition>

      <h3 style="margin: 30px 0; color: #ff5252">
        {{ transcript }}
      </h3>

      <v-btn @click="nextWord()" :disabled="disabled" class="primary mx-1">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>

      <v-btn @click="listen(word)" class="primary mx-1">
        <v-icon>mdi-account-tie-voice</v-icon>
      </v-btn>

      <v-btn @click="restart()" class="primary mx-1">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </center>
  </v-col>
</template>

<script>
export default {
  props: {
    speakingPractice: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      transcript: "",
      word: "",
      isRecord: false,
      isComplete: false,
      i: 0,
      mark: "#000",
      disabled: false,
    };
  },
  created() {
    this.word = this.speakingPractice[this.i].word;
  },
  methods: {
    recordStart() {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.start();

      recognition.onstart = () => {
        console.log("Start recording!!!");
        this.isRecord = true;
      };

      recognition.onend = () => {
        this.isRecord = false;
        console.log("End recording!!!");
      };

      recognition.onresult = (event) => {
        console.log(event);
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript.toLowerCase();

        console.log(transcript);

        if (this.word === transcript) {
          if (this.i < this.speakingPractice.length - 1) {
            this.mark = "#4caf50";
            setTimeout(() => {
              this.i++;
              this.word = this.speakingPractice[this.i].word;
              this.mark = "#000";
              this.transcript = "";
            }, 1000);
          } else {
            this.mark = "#4caf50";
            setTimeout(() => {
              this.transcript = "";
              this.word = "You are completed!!!";
              this.disabled = true;
            }, 1000);
          }
        } else {
          this.transcript = transcript;
        }

        this.isRecord = false;
      };
    },
    nextWord() {
      if (this.i < this.speakingPractice.length - 1) {
        this.i++;
        this.word = this.speakingPractice[this.i].word;
        this.transcript = "";
      } else {
        this.word = "You are completed!!!";
        this.disabled = true;
        this.transcript = "";
      }
    },
    listen(message) {
      const speech = new SpeechSynthesisUtterance();

      speech.text = message;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    },
    restart() {
      Object.assign(this.$data, this.$options.data());
      this.word = this.speakingPractice[this.i].word;
    },
  },
};
</script>

<style scoped>
span {
  position: absolute;
  top: -66%;
  left: -33%;
  width: 166%;
  height: 232%;
  background: #1976d2;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
}

span:nth-child(1) {
  animation: animate 1.8s linear infinite;
}

span:nth-child(2) {
  animation: animate 1.2s linear infinite;
}

span:nth-child(3) {
  animation: animate2 3s linear infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>