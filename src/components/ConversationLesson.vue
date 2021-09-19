<template>
  <v-row>
    <v-col cols="12" class="my-3" style="box-shadow: 4px 4px 10px rgba(0,0,0,0.2)">
      <h2>Conversation</h2>
    </v-col>

    <v-col cols="12">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(con, index) in conversationText[0].conversation"
          :key="index"
          large
        >
          <template v-slot:icon>
            <v-avatar>
              <img
                :src="`/resourses/persons/${con.name}.jpg`"
                :alt="con.name"
              />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>{{ con.name }}</span>
          </template>
          <v-card class="elevation-3">
            <v-card-title v-if="$vuetify.breakpoint.smAndDown" class="text-h5">
              {{ con.name }}
            </v-card-title>
            <v-card-text style="cursor: pointer" @click="translateText(index)">
              {{ con.title }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>

    <v-col cols="12">
      <audio style="width: 100%; margin: 20px 0" controls>
        <source :src="src" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ConversationLesson",
  props: {
    conversationText: {
      type: Array,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    translateText(index) {
      let text = this.conversationText[1].conversation[index].name + ': ' + this.conversationText[1].conversation[index].title;
      this.$emit("translate-text", text)
    }
  },
};
</script>

<style scoped>
</style>