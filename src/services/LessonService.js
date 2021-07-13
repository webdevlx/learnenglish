import axios from "axios";

const apiClient = axios.create({
  baseUrl: "https://my-json-server.typicode.com/webdevlx/vuetify-dashboard",
  // baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getLessons() {
    return apiClient.get("/lessons");
  },
  getLesson(id) {
    return apiClient.get("/lessons/" + id)
  }
}