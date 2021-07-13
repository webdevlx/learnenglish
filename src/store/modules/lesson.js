import LessonService from "../../services/LessonService";

export default {
  actions: {
    fetchLessons(context) {
      LessonService.getLessons().then((response) => {
        context.commit("SET_LESSONS", response.data)
      })
    },
    fetchLesson(context, id) {
      LessonService.getLesson(id).then((response) => {
        context.commit("SET_LESSON", response.data)
      })
    }
  },
  mutations: {
    SET_LESSONS(state, lessons) {
      state.lessons = lessons
    },
    SET_LESSON(state, lesson) {
      state.lesson = lesson
    }
  },
  state: {
    lessons: [],
    lesson: {},
  },
  getters: {
  }
}