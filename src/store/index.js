import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lessons: [
      {
        id: 1,
        title: "Welcome!",
        src: {
          video: "https://av.voanews.com/Videoroot/Pangeavideo/2016/05/c/c2/c2d43875-4942-4ca7-93eb-45b0d7627361_fullhd.mp4",
          audio: "https://av.voanews.com/clips/VLE/2016/02/08/49485bf8-4277-47f6-9abe-617ee2473f8c.mp3"
        },
        conversation: [
          "Pete: Hi! Are you Anna?",
          "Anna: Yes! Hi there! Are you Pete?",
          "Pete: I am Pete.",
          "Anna: Nice to meet you.",
          "Anna: Let's try that again. I'm Anna. Nice to meet you.",
          "Pete: I'm Pete. \"Anna\" Is that A-N-A?",
          "Anna: No. A-N-N-A",
          "Pete: Well, Anna with two \"n's\" ... Welcome to ... 1400 Irving Street!",
          "Anna: My new apartment! Yes!"
        ]
      },
      {
        id: 2,
        title: "Hello, I'm Anna!",
        src: {
          video: "https://av.voanews.com/Videoroot/Pangeavideo/2016/05/c/cd/cdf19fbb-4f61-432c-b40f-074f73c67fe6_fullhd.mp4",
          audio: "https://av.voanews.com/clips/VLE/2016/02/10/56246d7b-5fa4-42d2-90b0-d403e6b46227_hq.mp3"
        },
        conversation: [
          "Jonathan: Hey, Pete! Who’s your friend?",
          "Pete: She is Anna. She is new to D.C.",
          "Jonathan: Where are you from?",
          "Anna: I am from a small town.",
          "Jonathan: Well, welcome to D.C.",
          "Anna: Thank you.",
          "Jonathan: I am Jonathan. I am in apartment B4.",
          "Anna: I am in apartment C2. Marsha is my roommate.",
          "Jonathan: I know Marsha. She is nice.",
          "Pete: And I am in Apartment D7. I have to go now.",
          "Anna: Oh!",
          "Pete: Remember to call Marsha at work. Tell her you’re here.",
          "Anna: Right, thanks, Pete. Nice to meet you!",
          "Jonathan: You too, Bye.",
          "Anna: Apartment C2, here I come!"
        ]
      },
      {
        id: 3,
        title: "I'm Here!",
        src: {
          video: "https://av.voanews.com/Videoroot/Pangeavideo/2016/05/0/02/027f8fdd-e9b0-409c-8618-45be49fcefe8_fullhd.mp4",
          audio: "https://av.voanews.com/clips/VLE/2016/02/18/a82baaf4-0a91-4d43-8ab6-78f72cef8fce.mp3"
        },
        conversation: [
          "Anna: I am in my new apartment! Great!",
          "I live with Marsha. We’re roommates.",
          "I want to cook dinner. Oh! Hmmm. Is there a supermarket near here?",
          "Marsha knows. Marsha's work number is 555-8986.",
          "Man: Hello.",
          "Anna: Hello. Is this Marsha? It is Anna.",
          "Man: I am sorry. You have the wrong number.",
          "Anna: Oh. Is this 555-8986?",
          "Man: No. This is 555-8689.",
          "Anna: Oh. Excuse me!",
          "Man: Okay. 'Bye.",
          "Anna: One more time. 555-8986. Please be Marsha.",
          "Marsha: Hello. This is Marsha.",
          "Anna: Yes, Marsha. I want to cook dinner.",
          "Marsha: Excuse me? Anna? Is that you?",
          "Anna: Oh, yes. I am here!",
          "Marsha: Good. You are there.",
          "Anna: I want to find a supermarket.",
          "Marsha: Oh, okay. The supermarket is at 1500 Irving Street. It is near the apartment.",
          "Anna: Great! Goodbye!",
          "Marsha: Goodbye, Anna.",
          "(Later)",
          "Anna: There is a big supermarket on our street. And Marsha says I am a good cook! Until next time! Bye!"
        ]
      }
    ],
    lesson: {},
    id: 1
  },
  mutations: {
    SET_LESSON(state, id) {
      state.lesson = state.lessons.filter(lesson => lesson.id == id)[0]
    }
  },
  actions: {
    fetchLesson(context, id) {
      context.commit("SET_LESSON", id)
    }
  },
  getters: {
  },
  modules: {
  }
})
